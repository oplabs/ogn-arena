#!/usr/bin/python3
"""Utilities for encoding and decoding ogn-arena hero dna.

When executed, create dna.txt files with dna for heroes in subdirs."""

import os
import sys

ATTRS_FN = 'attrs.txt'
DNA_FN = 'dna.txt'

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
HEAD_LIST = {
    # Male heads
    'Head HA Male Herculean': 0,
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

BODY_LIST = {
    'Body HA Male Herculean': 1,
    'CC3+_Caleb_Body': 2,
    'CC3+_Neutral Female': 3,
    'CC3+_Katherine_Body': 4,
    'CC3+_Jody_Body': 5,
    'Body HA Female Athletic': 6,
    'CC3+_Neutral Male': 7,
    'CC3+_Kevin_Body': 8,
}

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
