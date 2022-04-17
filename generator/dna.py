#!/usr/bin/python3
"""Utilities for encoding and decoding ogn-arena hero dna.

When executed, create dna.txt files with dna for heroes in subdirs."""

import jinja2
import os
import random
import re
import sys

ATTRS_FN = 'attrs.txt'
CHARGEN_TPL_FN = 'chargen.ahk.tpl'
DNA_FN = 'dna.txt'
DNA_RE = re.compile('([g-uw-z][\da-fA-Fv]*)')

# attribute names
SKIN = 'Skin'
# actual value range of -100->100, add 100 to the DNA for positive values
SKIN_BRIGHTNESS = 'SkinBrightness'
# current metadata breaks apart eye color into Green/Red/Blue
EYE_COLOR = 'EyeGreen'
GENDER = 'Gender'
CLASS = 'Class'
HAIR = 'Hair'
HAIR_ROOT = 'HairRoot'
HAIR_END = 'HairEnd'
BEARD = 'Beard'
BEARD_ROOT = 'BeardRoot'
BEARD_END = 'BeardEnd'
HEAD_MORPH = 'HeadMorph'
BODY_MORPH = 'BodyMorph'

# attribute keys
# a-f are reserved for raw hex values
SKIN_KEY = 'g'
SKIN_BRIGHTNESS_KEY = 'h' # actual value range of -100->100, add 100 to the DNA for positive values
EYE_COLOR_KEY = 'i'
GENDER_KEY = 'j'
CLASS_KEY = 'k'
HAIR_KEY = 'l'
HAIR_ROOT_KEY = 'm'
HAIR_END_KEY = 'n'
BEARD_KEY = 'o'
BEARD_ROOT_KEY = 'p'
BEARD_END_KEY = 'q'
HEAD_MORPH_KEY = 'r'
BODY_MORPH_KEY = 's'

# used to denote the value of a morph key i.e. f12v42 is the 12th head at value 42
MORPH_DELIMITER = 'v'

ATTR_NAME_TO_KEY = {
    SKIN: SKIN_KEY,
    EYE_COLOR: EYE_COLOR_KEY,
    GENDER: GENDER_KEY,
    CLASS: CLASS_KEY,
    HAIR: HAIR_KEY,
    HAIR_ROOT: HAIR_ROOT_KEY,
    HAIR_END: HAIR_END_KEY,
    BEARD: BEARD_KEY,
    BEARD_ROOT: BEARD_ROOT_KEY,
    BEARD_END: BEARD_END_KEY,
    HEAD_MORPH: HEAD_MORPH_KEY,
    BODY_MORPH: BODY_MORPH_KEY,
    SKIN_BRIGHTNESS: SKIN_BRIGHTNESS_KEY
}

SKIN_LIST = {
    'Default': 1,
    'Clean': 2,
    'Khulan': 3,
}

EYE_COLOR_LIST = {
    'Blue': 1,  # default character model, no changes.
    'Brown': 2,  # green:-100, red:-7, blue:-100
    'Green': 3,  # green:-7, red:-37, blue:-76
}

_GENDER_FEMALE = 'Female'
_GENDER_MALE = 'Male'
GENDER_LIST = {
    _GENDER_FEMALE: 1,
    _GENDER_MALE: 2
}

CLASS_LIST = {
    'Fighter': 1,
    'Mage': 2,
    'Cleric': 3,
    'Rogue': 4,
}

# Head Morphs
HEAD_HERCULEAN = 'Head HA Male Herculean'
HEAD_LIST = {
    # Male heads
    HEAD_HERCULEAN: 0,
    'CC3+_Neutral Male': 1,
    'CC3+_Caleb_Head': 2,
    'CC3+_Kevin_Head': 3,
    'Caleus': 4,
    'Dimitri': 5,
    'Matt': 6,
    'Ruben': 7,
    'Timothy': 8,
    'Gabriel': 9,
    'Jamal': 10,
    'Travis': 11,
    'Khulan_Head': 12,
    'Trey': 13,
    'Alejandro_Head': 14,

    # Female Heads
    'CC3+_Neutral Female': 20,
    'CC3+_Katherine_Head': 21,
    'CC3+_Jody_Head': 22,
    'Denisa': 23,
    'Flora': 24,
    'Magda': 25,
    'Michelle': 26,
    'Samantha': 27,
    'Aanya': 28,
    'Ayako': 29,
    'Cristy': 30,
    'Gloria': 31,
    'Lori': 32,
    'Mei': 33,
    'Anna': 34,
    'Natasha_Head': 35
}

BODY_HERCULEAN = 'Body HA Male Herculean'
BODY_CALEB = 'CC3+_Caleb_Body'
BODY_LIST = {
    BODY_HERCULEAN: 1,
    BODY_CALEB: 2,
    'CC3+_Neutral Female': 3,
    'CC3+_Katherine_Body': 4,
    'CC3+_Jody_Body': 5,
    'Body HA Female Athletic': 6,
    'CC3+_Neutral Male': 7,
    'CC3+_Kevin_Body': 8,
}
_MALE_BODY_LIST = ['CC3+_Neutral Male', 'CC3+_Kevin_Body']
_FEMALE_BODY_LIST = ['CC3+_Neutral Female', 'CC3+_Katherine_Body',
                     'CC3+_Jody_Body', 'Body HA Female Athletic']

HAIR_LIST = {
    'Bald': 0,
    'Top knot long ponytail': 1,
    'Top knot pigtail braid': 2,
    'Top knot samurai': 3,
    'Top knot short ponytail': 4,
    'Large bun': 5,
    'Long wavy ponytail': 6,
    'Side swept braid': 7,
    'Side swept ponytail': 8,
    'Two ponytails': 9,
    'Curly long ponytail': 10,
    'Half up short': 11,
    'Half up straight': 12,
    'Half up wavy long': 13,
    'Side bang pigtail braid': 14,
    'Side part bang_mid': 15,
    'Two curly ponytails': 16,
    'Two high space buns': 17,
    'Two low space buns': 18,
    'Two pigtail braids': 19,
    'Wavy medium ponytail': 20,

    # cchair list
    'Bun.ccHair': 21,
    'Light Skin.ccHair': 22,
    'Dawn_MorphHair.ccHair': 23,
    'Dusk_Hair.ccHair': 24,
    'Long Hair.ccHair': 25,
    'Short Hair.ccHair': 26,
    'High Ponytail.ccHair': 27,

    # case hack for inconsistent attrs files, should be temporary
    'Bun.cchair': 21,
    'Light Skin.cchair': 22,
    'Dawn_MorphHair.cchair': 23,
    'Dusk_Hair.cchair': 24,
    'Long Hair.cchair': 25,
    'Short Hair.cchair': 26,
    'High Ponytail.cchair': 27,
}

BEARD_LIST = {
    'country': '1',
    'cowboy': '2',
    'thick': '3',
    'viking': '4',
}

ATTR_NAME_TO_LIST = {
    SKIN: SKIN_LIST,
    EYE_COLOR: EYE_COLOR_LIST,
    GENDER: GENDER_LIST,
    CLASS: CLASS_LIST,
    HEAD_MORPH: HEAD_LIST,
    BODY_MORPH: BODY_LIST,
    HAIR: HAIR_LIST,
    BEARD: BEARD_LIST
}

# Lists used in character generation:
_MALE_HAIR_LIST = [
        "Bald", "Top knot long ponytail", "Top knot pigtail braid",
        "Top knot samurai", "Top knot short ponytail", "Light Skin.cchair",
        "Bun.ccHair", "Dawn_MorphHair.ccHair", "Dusk_Hair.ccHair",
        "Long Hair.ccHair", "Short Hair.ccHair"]
_FEMALE_HAIR_LIST = [
        "Large bun", "Long wavy ponytail", "Side swept braid",
        "Side swept ponytail", "Two ponytails", "High Ponytail.ccHair"]
# Bang hairstyle are also female, but seperated for reference purposes:
_BANGS_HAIR_LIST = [
        "Curly long ponytail", "Half up short", "Half up straight",
        "Half up wavy long", "Side bang pigtail braid", "Side part bang_mid",
        "Two curly ponytails", "Two high space buns", "Two low space buns",
        "Two pigtail braids", "Wavy medium ponytail"]
_FEMALE_HAIR_LIST += _BANGS_HAIR_LIST
# Bangs don't work well with these heads
_BANGS_BANNED_HEADS = ['Samantha', 'Magda', 'Flora', 'Ruben']
_MALE_HEADS = ['CC3+_Neutral Male', 'CC3+_Caleb_Head', 'CC3+_Kevin_Head',
               'Caleus', 'Dimitri', 'Matt', 'Ruben', 'Timothy', 'Gabriel',
               'Jamal', 'Travis', 'Khulan_Head', 'Trey', 'Alejandro_Head']
_FEMALE_HEADS = ['CC3+_Neutral Female', 'CC3+_Katherine_Head', 'CC3+_Jody_Head',
                 'Denisa', 'Flora', 'Magda', 'Michelle', 'Samantha', 'Aanya',
                 'Ayako', 'Cristy', 'Gloria', 'Lori', 'Mei', 'Anna',
                 'Natasha_Head']
_NORMAL_COLOR_MAX = 18
_HAIR_COLORS = ['1c1f20', '272a2d', '312e2d', '35261b', '4b321e', '5c3b23',
                '6d4c33', '6b503c', '765c47', '7f6850', '99815d', 'a79369',
                'af9c70', 'bba063', 'd6b97b', 'dac38e', '9f7f59', '845039',
                '682b1f', '61120c', '640f0a', '7c140f', 'a02e19', 'b64b28',
                'a2502f', 'aa4e2b', '626262', '808080', 'aaaaaa', 'c5c5c5',
                '463955', '5a3f6b', '763c76', 'ed74e3', 'eb4b93', 'f299bc',
                '04959e', '025f86', '023974', '3fa16a', '217c61', '185c55',
                'b6c034', '70a90b', '439d13', 'dcb857', 'e5b103', 'e69102',
                'f28831', 'fb8057', 'e28b58', 'd1593c', 'ce3120', 'ad0903',
                '880302', '1f1814', '291f19', '2e221b', '37291e', '2e2218',
                '231b15', '020202', '706c66', '9d7a50']


def attrs_from_dna(dna):
    """Returns a dict of attributes from dna as str."""
    attr_key_to_name = dict([(value, key) for key, value
                             in ATTR_NAME_TO_KEY.items()])
    attrs = {}
    for attr in DNA_RE.findall(dna):
        attr_name = attr_key_to_name[attr[0]]
        attr_val = attr[1:]

        if MORPH_DELIMITER in attr_val:
            morph_key, morph_val = attr_val.split(MORPH_DELIMITER)
            if attrs.get(attr_name) is None:
                attrs[attr_name] = {}
            morph_name = [key for key, val in ATTR_NAME_TO_LIST[attr_name].items()
                          if int(val) == int(morph_key)][0]
            attrs[attr_name][morph_name] = morph_val
        elif attr_name == SKIN_BRIGHTNESS:
            # skin brightness encoded 100 higher to avoid negative values
            attrs[attr_name] = int(attr_val) - 100
        elif ATTR_NAME_TO_LIST.get(attr_name):
            attrs[attr_name] = [key for key, value in ATTR_NAME_TO_LIST[attr_name].items()
                                if int(value) == int(attr_val)][0]
        else:
            # return raw value
            attrs[attr_name] = attr_val
    return attrs


def generate_chargen(dna, searchpath='./'):
    """Render a chargen template from dna."""
    loader = jinja2.FileSystemLoader(searchpath=searchpath)
    env = jinja2.Environment(loader=loader)
    template = env.get_template(CHARGEN_TPL_FN)
    attrs = attrs_from_dna(dna)
    return template.render(class_str=attrs[CLASS],
                           class_int=CLASS_LIST[attrs[CLASS]],
                           gender_str=attrs[GENDER],
                           skin_val=attrs[SKIN],
                           beard_str=attrs.get(BEARD),
                           body_morphs=str(attrs[BODY_MORPH]),
                           head_morphs=str(attrs[HEAD_MORPH]),
                           eye_color_str=attrs[EYE_COLOR],
                           skin_brightness=attrs[SKIN_BRIGHTNESS])


# DNA sequence should be ordered to assist uniqueness:
#   - Gender, Class, Skin, BodyMorphs, HeadMorphs, Hair
#   - HairRoot*, HairEnd*, Beard*, BeardRoot*, BeardEnd*,  (*optional)
#   - SkinBrightness, EyeColor
def generate_dna():
    """Create and return a DNA string for a new unique Hero."""
    gender = random.choice([*GENDER_LIST])
    job_class = random.choice([*CLASS_LIST])

    head_morphs = {}
    body_morphs = {}
    if gender == _GENDER_MALE:
        skin = random.choice([*SKIN_LIST])
        body_morphs[random.choice(_MALE_BODY_LIST)] = random.randint(70, 100)
        if random.random() <= 0.05:
            herculean_level = random.randint(15, 55)
            body_morphs[BODY_HERCULEAN] = herculean_level
            head_morphs[HEAD_HERCULEAN] = herculean_level - 10
        else:
            body_morphs[BODY_CALEB] = random.randint(10, 80)
        hair = random.choice(_MALE_HAIR_LIST)

        # Males use one strong male head:
        head_morphs[random.choice(_MALE_HEADS)] = random.randint(80, 100)

        extra_heads = [head for head in _MALE_HEADS + _FEMALE_HEADS
                       if head not in head_morphs]
        random.shuffle(extra_heads)

        head_morphs[extra_heads.pop()] = random.randint(40, 70)
        for _ in range(3):
            head_morphs[extra_heads.pop()] = random.randint(5, 30)

    if gender == _GENDER_FEMALE:
        skin_list = [skin for skin in SKIN_LIST if skin != 'Khulan']
        skin = random.choice([*skin_list])
        body_morphs[random.choice(_FEMALE_BODY_LIST)] = random.randint(70, 100)
        body_morphs[BODY_CALEB] = random.randint(5, 45)
        hair = random.choice(_FEMALE_HAIR_LIST)

        if hair in _BANGS_HAIR_LIST:
            female_heads = [head for head in _FEMALE_HEADS if head not in _BANGS_BANNED_HEADS]
            male_heads = [head for head in _MALE_HEADS if head not in _BANGS_BANNED_HEADS]
        else:
            female_heads = _FEMALE_HEADS[:]
            male_heads = _MALE_HEADS[:]

        # two different head algos:
        if random.random() < 0.5:
            head_morphs[random.choice(female_heads)] = random.randint(80, 100)
            medium_heads = 0
            weak_heads = 3
        else:
            head_morphs[random.choice(female_heads)] = random.randint(35, 55)
            medium_heads = 2
            weak_heads = 2

        extra_heads = [head for head in male_heads + female_heads
                        if head not in head_morphs]
        random.shuffle(extra_heads)
        while medium_heads or weak_heads:
            if medium_heads:
                min_morph = 35
                max_morph = 55
                medium_heads -= 1
            elif weak_heads:
                min_morph = 5
                max_morph = 20
                weak_heads -= 1
            head_morphs[extra_heads.pop()] = random.randint(min_morph, max_morph)

        if all(head in head_morphs for head in ('Michelle', 'Ruben', 'Aanya', 'Jamal', 'Trey')):
            skinb = random.randint(-55, -10)
        else:
            skinb = random.randint(-5, 5)

        eye_setting = random.random()
        if eye_setting < 0.25:
            eye_color_val = EYE_COLOR_LIST['Green']
        elif eye_setting < 0.75:
            eye_color_val = EYE_COLOR_LIST['Brown']
        else:
            eye_color_val = EYE_COLOR_LIST['Blue']

        if random.random() < 0.5:
            hair_color_idx = random.randint(0, len(_HAIR_COLORS)-1)
        else:
            hair_color_idx = random.randint(0, _NORMAL_COLOR_MAX)

        # todo use a nearby index for hair end
        # todo WIP


def generate_dna_from_attrs(attrs_path):
    """Returns encoded dna str from given attrs_path as str"""
    dna = ''
    with open(attrs_path, 'r') as attr_fh:
        lines = [line.strip() for line in attr_fh.readlines()]

        # default eye color is left out of metadata so represent it here:
        eye_color = 'Blue'
        unknown_items = 0
        for line in lines:
            attr_name, attr_val = [item.strip() for item in line.split(':', 1)]

            if attr_name in ('EyeRed', 'EyeBlue', 'Error'):
                # metadata unused for dna purposes:
                continue

            if attr_name == BODY_MORPH:
                morph, morph_val = [item.strip() for item in attr_val.split(':')]
                dna += ATTR_NAME_TO_KEY[BODY_MORPH] + str(BODY_LIST[morph])
                dna += MORPH_DELIMITER + morph_val

            elif attr_name == HEAD_MORPH:
                morph, morph_val = [item.strip() for item in attr_val.split(':')]
                dna += ATTR_NAME_TO_KEY[HEAD_MORPH] + str(HEAD_LIST[morph])
                dna += MORPH_DELIMITER + morph_val

            elif attr_name in (HAIR_ROOT, HAIR_END, BEARD_ROOT, BEARD_END):
                # encode raw hex value from metadata into dna string:
                dna += ATTR_NAME_TO_KEY[attr_name] + attr_val.lower()

            elif attr_name == SKIN_BRIGHTNESS:
                # encode 100 higher to avoid negative numbers
                dna += ATTR_NAME_TO_KEY[SKIN_BRIGHTNESS] + str((int(attr_val) + 100))

            elif attr_name == EYE_COLOR:
                # metadata breaks apart green/red/blue values for eye color
                # consolidate options into one overall color for dna purposes:
                if attr_val == '-100':
                    eye_color = 'Brown'
                if attr_val == '-7':
                    eye_color = 'Green'

            else:
                attr_key = ATTR_NAME_TO_KEY.get(attr_name)
                if attr_key:
                    # remaining indexes are mapped directly from their relevant lists:
                    dna += attr_key + str(ATTR_NAME_TO_LIST[attr_name][attr_val])
                else:
                    # legacy metadata specifies body and head morphs as top level attributes
                    # first two unknown items should be body morphs
                    # this assumption is important because some head and body morphs share names
                    morph, morph_val = [item.strip() for item in line.split(':')]
                    morph_list = BODY_LIST if unknown_items < 2 else HEAD_LIST
                    morph_key = BODY_MORPH_KEY if unknown_items < 2 else HEAD_MORPH_KEY

                    if morph_list.get(morph) is not None:
                        dna += morph_key + str(morph_list[morph])
                        dna += MORPH_DELIMITER + morph_val
                        unknown_items += 1
                    else:
                        # TODO stderr
                        raise Exception('NO MATCH: %s' % line)

        # default eye color may not appear in file so encode after fully parsing:
        dna += ATTR_NAME_TO_KEY[EYE_COLOR] + str(EYE_COLOR_LIST[eye_color])

        return dna


if __name__ == '__main__':
    WORKDIR = sys.argv[1] if len(sys.argv) > 1 else os.path.curdir
    print('Generating %s files for %s' % (DNA_FN, WORKDIR))
    for root, dirs, files in os.walk(WORKDIR):
        if ATTRS_FN in files and DNA_FN not in files:
            try:
              hero_dna = generate_dna_from_attrs(os.path.join(root, ATTRS_FN))
              with open(os.path.join(root, DNA_FN), 'w') as dna_fh:
                  dna_fh.write(hero_dna)
            except Exception as err:
              print ("Error encountered for: ", root)
              print (err)
