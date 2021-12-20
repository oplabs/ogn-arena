BlockInput, MouseMove

; buffing delays smooth over many interactions
SetWinDelay, 200
SetKeyDelay, 50
SetMouseDelay, 25

SetTitleMatchMode, RegEx

NUM_TO_GENERATE := 200
SAVE_CCPROJECT := 0
SAVE_FBX := 1

PROJECT_DIR := "C:\Users\codex\Downloads\"
BATCH_DIR := "C:\Users\codex\Documents\chargen\generated_" . A_YYYY . A_MM . A_DD . A_Hour . A_Min . A_Sec . "\"
MOTIONS_DIR := "C:\Users\Public\Documents\Reallusion\Template\Character Creator 3 Template\Motion\"

MAIN_RE := "^Character Creator 3.*\.ccProject"
EXPORT_FBX_RE := "^Export FBX$"

HAIR_COLORS := [0x1c1f20, 0x272a2d, 0x312e2d, 0x35261b, 0x4b321e, 0x5c3b23, 0x6d4c33
    , 0x6b503c, 0x765c47, 0x7f6850, 0x99815d, 0xa79369, 0xaf9c70, 0xbba063, 0xd6b97b
    , 0xdac38e, 0x9f7f59, 0x845039, 0x682b1f, 0x61120c, 0x640f0a, 0x7c140f, 0xa02e19
    , 0xb64b28, 0xa2502f, 0xaa4e2b, 0x626262, 0x808080, 0xaaaaaa, 0xc5c5c5, 0x463955
    , 0x5a3f6b, 0x763c76, 0xed74e3, 0xeb4b93, 0xf299bc, 0x04959e, 0x025f86, 0x023974
    , 0x3fa16a, 0x217c61, 0x185c55, 0xb6c034, 0x70a90b, 0x439d13, 0xdcb857, 0xe5b103
    , 0xe69102, 0xf28831, 0xfb8057, 0xe28b58, 0xd1593c, 0xce3120, 0xad0903, 0x880302
    , 0x1f1814, 0x291f19, 0x2e221b, 0x37291e, 0x2e2218, 0x231b15, 0x020202, 0x706c66
    , 0x9d7a50]
SAFE_HAIR_MAX_IDX := 19

; constants
CLASS_MAGE := "Mage"
CLASS_FIGHTER := "Fighter"
CLASS_CLERIC := "Cleric"
CLASS_ROGUE := "Rogue"

GENDER_MALE := "Male"
GENDER_FEMALE := "Female"
HAIR_BALD := "Bald"
SKINS := {0 : "Default", 1 : "Clean", 2 : "Khulan"}
MALE_HEADS := ["CC3+_Neutral Male", "CC3+_Caleb_Head", "CC3+_Kevin_Head", "Caleus", "Dimitri"
             , "Matt", "Ruben" , "Timothy", "Gabriel", "Jamal", "Travis", "Khulan_Head", "Trey"
             , "Alejandro_Head"]
FEMALE_HEADS := ["CC3+_Neutral Female", "CC3+_Katherine_Head", "CC3+_Jody_Head", "Denisa", "Flora"
               , "Magda", "Michelle", "Samantha", "Aanya", "Ayako", "Cristy", "Gloria", "Lori", "Mei"
               , "Anna", "Natasha_Head"]
HEAD_HERCULEAN := "Head HA Male Herculean"

FEMALE_BODIES := ["CC3+_Neutral Female", "CC3+_Katherine_Body", "CC3+_Jody_Body", "Body HA Female Athletic"]
MALE_BODIES := ["CC3+_Neutral Male", "CC3+_Kevin_Body"]
BODY_CALEB := "CC3+_Caleb_Body" ; Caleb body is applied regardless of gender for muscle look
BODY_HERCULEAN := "Body HA Male Herculean"

MALE_HAIRS := ["Top knot long ponytail", "Top knot pigtail braid", "Top knot samurai"
                , "Top knot short ponytail", "Light Skin.cchair", "Bun.ccHair", "Dawn_MorphHair.ccHair"
                , "Dusk_Hair.ccHair", "Long Hair.ccHair", "Short Hair.ccHair"]
BEARD_TYPES := ["country", "cowboy", "thick", "viking"]
BANGS_HAIRS := ["Curly long ponytail", "Half up short", "Half up straight" , "Half up wavy long"
              , "Side bang pigtail braid", "Side part bang_mid" , "Two curly ponytails", "Two high space buns"
              , "Two low space buns" , "Two pigtail braids", "Wavy medium ponytail"]
FEMALE_HAIRS := ["Large bun", "Long wavy ponytail", "Side swept braid", "Side swept ponytail", "Two ponytails", "High Ponytail.ccHair"]
FEMALE_HAIRS.Push(BANGS_HAIRS*) ; Bangs hairs are separated for reference purposes
FEMALE_HAIRS.Push(MALE_HAIRS*) ; Females look good with male hairs

BANGS_BANNED_HEADS := ["Samantha", "Magda", "Flora", "Ruben"]

; coordinates
DESELECT := "1300, 175"

MATERIALS_PANE := "1557, 193"
MATERIALS_SCROLL_UP := "1918, 231"
MATERIALS_LIST_SCROLL_UP := "1885, 315"
MATERIALS_LIST_SCROLL_RIGHT := "1865, 467"
MATERIALS_LIST_FIRST_NAME := "1572, 338"

MORPH_PANE := "1483, 192"
MORPH_SCROLL_UP := "1652, 247"
MORPH_BODY := "1495, 314"
MORPH_HEAD := "1500, 665"
MORPH_ACTOR := "1464, 292"
MORPH_SEARCH := "1800, 260"
MORPH_VAL1 := "1879, 336"
MORPH_VAL2 := "1879, 427"

ATTRIBUTE_PANE := "1405, 196"

ADJUST_COLOR_SOFTNESS := "279, 279"
ADJUST_COLOR_BRIGHTNESS := "260, 348"
ADJUST_COLOR_CONTRAST := "260, 401"
ADJUST_COLOR_HUE := "260, 455"
ADJUST_COLOR_SATURATION := "260, 505"
ADJUST_COLOR_GREEN := "260, 595" ; -100 Magenta, 100 Green
ADJUST_COLOR_RED := "260, 653" ; -100 Cyan, 100 Red
ADJUST_COLOR_BLUE := "260, 705" ; -100 Yellow, 100 Blue
ADJUST_COLOR_CLOSE := "308, 9"

CONTENT_PANE := "562, 339"
CONTENT_SEARCH := "107, 409"
CONTENT_SCENE := "510, 221"
CONTENT_SCENE_ELEMS := "104,443"
CONTENT_SCENE_ELEMS_CAMERA := "328, 500"
CONTENT_HAIR := "161, 223"
CONTENT_HAIR_TEMPLATE := "99, 441"
CONTENT_ITEM1 := "321, 466"
CONTENT_ITEM2 := "327, 497"

SMART_GALLERY_TAB := "561, 216"
SMART_GALLERY_ITEM := "174, 201"
SMART_GALLERY_ITEM1 := "300, 360"
SMART_GALLERY_SEARCH := "318, 208"

RENDER_EXPORT := "275, 1019"

SCENE_PANE := "563, 464"
SCENE_AVATAR_ITEM1 := "145, 281"
SCENE_TRANSFORM_SCALE_X := "1482, 1021"
SCENE_TRANSFORM_SCALE_Y := "1661, 1021"


rand_bm() {
    u := 0
    v := 0
    while (u == 0) {
        Random, u, 0.0, 1.0
    }
    while (v == 0) {
        Random, v, 0.0, 1.0
    }
    num := Sqrt( -2.0 * Ln(u)) * Cos(2.0 * 3.14159265 * v)
    num := num / 10.0 + 0.5 ; translate to 0-> 1
    if (num > 1 or num < 0) {
        return rand_bm()
    }
    return num
}

rand_morph_val(min, max) {
    valuerange := max - min
    num := Floor(rand_bm() * valuerange)
    return max - num
}

wait_loading() {
    WinWaitActive, ^Character Creator 3$,,5
    WinWaitClose, ^Character Creator 3$
}

set_param(coordinates, value)
{
  Click, %coordinates%
  Send, ^a
  clip_send(value)
  sleep 50 ; if we're setting a param there is usually a UI update
}

_set_morph(name, value) {
  global attrs_fh
  global MORPH_SEARCH
  global MORPH_VAL1

  morph_coords := MORPH_VAL1
  if (name == "Lori") {
      global MORPH_VAL2
      morph_coords := MORPH_VAL2
  }

  set_param(MORPH_SEARCH, name)
  Sleep, 50
  set_param(morph_coords, value)
  Sleep, 200 ; let the UI catch up after a morph change
  attrs_fh.write(name . ": " . value . "`n")
}

set_morph(name, min:=-100, max:=100) {
    Random, rand_val, min, max
    if (rand_val != 0) {
        _set_morph(name, rand_val)
    }
    return rand_val
}

set_morph_norm(name, min:=-100, max:=100) {
  rand_val := rand_morph_val(min, max)
  if (rand_val != 0) {
    _set_morph(name, rand_val)
  }
}

set_hair_colors(hroot, hend) {
    global MAIN_RE

    MouseMove, 1918, 1026 ; scroll down
    Click, Down
    sleep, 1800
    Click, Up

    ; hopefully unfurl color settings
    Click, 1606, 569
    Click, 1643, 817

    ; hair BASE // currently unused
    ; Click, 1880, 610
    ; WinWaitActive, Select Color
    ; set_html_hair_color(hroot)
    ; WinWaitActive, %MAIN_RE%

    Click, 1882, 859
    WinWaitActive, Select Color
    set_html_hair_color(hroot)
    WinWaitActive, %MAIN_RE%

    Click, 1880, 896
    WinWaitActive, Select Color
    set_html_hair_color(hend)
    WinWaitActive, %MAIN_RE%

    ; refurl
    Click, 1643, 817
    Click, 1606, 569
}

long_click(coordinate) {
    Click, %coordinate% ; positioning hack since MouseMove can't string sub like this
    Click, Down
    sleep, 800
    Click, Up
}

materials_scroll_top() {
  global MATERIALS_SCROLL_UP
  global MATERIALS_LIST_SCROLL_UP
  global MATERIALS_LIST_SCROLL_RIGHT
  global MATERIALS_LIST_FIRST_NAME

  long_click(MATERIALS_SCROLL_UP)
  long_click(MATERIALS_LIST_SCROLL_UP)
  Click, %MATERIALS_LIST_SCROLL_RIGHT%
  Click, %MATERIALS_LIST_FIRST_NAME%
}

set_html_hair_color(color) {
  ; color must be like "#2c2c2c"
  Click, 421, 421
  Send, ^a
  Send, Raw{#}%color% ; raw required for hashtag
  Send {Tab}
  Send {Enter}
}

open_adjust_color_window() {
    Click, Right, 1529, 347
    sleep, 500 ; long sleep required after that right click
    Click, 1582, 493
    WinWaitActive, Adjust Color
}

clip_send(clipstr) {
  ; set a clipboard, wait for it to be useable, paste it, hit enter
  Clipboard :=
  Clipboard := clipstr
  ClipWait
  Send ^v
  Send {Enter}
}

in_array(haystack, needle) {
    ; returns index if found, else 0
    for index, element in haystack {
        if (needle == element) {
            return index
        }
    }
    return 0
}

similar_hair_idx(hair_idx) {
    global HAIR_COLORS
    max_idx := HAIR_COLORS.MaxIndex()
    if (hair_idx == 0) {
        return 1
    } else if (hair_idx == max_idx) {
        return max_idx - 1
    } else {
        Random, lighter_chance, 0, 1
        return lighter_chance ? hair_idx + 1 : hair_idx - 1
    }
}

set_hair(hair_str) {
    global
    WinActivate, %MAIN_RE%
    WinWaitActive, %MAIN_RE%
    Click, %SMART_GALLERY_TAB%
    Sleep, 50
    Click, %SMART_GALLERY_SEARCH%
    Sleep, 50
    Send, ^a
    clip_send(hair_str)
    Sleep, 200
    Click, %SMART_GALLERY_ITEM1% 2

    WinWaitActive, ^Character Creator 3$,,5
    if ErrorLevel {
        return 0
    }
    WinWaitClose, ^Character Creator 3$
    return 1
}

set_beard(beard_str) {
    global
    WinActivate, %MAIN_RE%
    WinWaitActive, %MAIN_RE%
    Click, %CONTENT_PANE%
    Sleep, 100
    Click, %CONTENT_HAIR%
    Sleep, 100
    Click, %CONTENT_HAIR_TEMPLATE%
    Sleep, 100
    Click, %CONTENT_ITEM2% 2 ; Group
    Sleep, 100
    Click, %CONTENT_ITEM1% 2 ; Beard
    Sleep, 100
    Click, %CONTENT_SEARCH%
    Sleep, 100
    clip_send(beard_str)
    Sleep, 200
    Click, %CONTENT_ITEM1% 2 ; first result

    WinWaitActive, ^Character Creator 3$,,5
    if ErrorLevel {
        return 0
    }
    WinWaitClose, ^Character Creator 3$
    return 1
}

WinActivate, %MAIN_RE%
WinWaitActive, %MAIN_RE%

Send, ^2 ; set default workspace for reliable clicks
Sleep, 50
Send, ^1 ; ctrl+1 one time should enable list view on menus
Sleep, 50

; copy current version of script to output dir for posterity
FileCreateDir, %BATCH_DIR%
sleep, 20
FileCopy %A_ScriptFullPath%, %BATCH_DIR%
sleep, 20

Click, %SMART_GALLERY_TAB%
Click, %SMART_GALLERY_ITEM% ; make sure item is selected so search works later

FormatTime, StartTime, T12, Time

last_class_str :=
num_generated := 1
while num_generated <= NUM_TO_GENERATE
{
    if (num_generated > 1) {
        sleep 2000 ; give UI some time to cool down between runs
    }

    ; Class
    Random class_bool, 2, 3 ; xxx : only generating cleric and rogues
    if (class_bool == 0) {
        class_str := CLASS_FIGHTER
        motions := ["Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"
                  , "Studio Mocap-Sword & Shield Stunts\Attack Combo\Atk_2xCombo02.rlmotion"]
    }
    if (class_bool == 1) {
        class_str := CLASS_MAGE
        motions := ["Studio Mocap-Magical Moves\Attack\M_LS_MageSpellCast_05.rlmotion"
                  , "Studio Mocap-Magical Moves\Summon\F_LS_Warning_Idle.rlmotion"]
    }
    if (class_bool == 2) {
        class_str := CLASS_CLERIC
        motions := ["Studio Mocap-Magical Moves\Attack\F_LS_MageSpellCast_02.rlMotion"
                  , "Studio Mocap-Sword & Shield Moves\Move\RunForward.rlMotion"
                  , "Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"]
    }
    if (class_bool == 3) {
        class_str := CLASS_ROGUE
        motions := ["Human Mocap-Pistol Stunt\Dagger Melee\Attack\K03_Dagger_Atk_Stab_Jaw.rlMotion"
                  , "Human Mocap-Assassin Moves\Mobility\Crouch_to_Sneak_Walk.rlMotion"
                  , "Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"]
    }

    ; Gender & Hair
    primary_heads := []
    bodies := []
    Random gender_bool, 0, 1
    if gender_bool {
        gender_str := GENDER_FEMALE
        Random hair_idx, 1, FEMALE_HAIRS.MaxIndex()
        hair_str := FEMALE_HAIRS[hair_idx]
        herculean := 0 ; 0% chance at herculean if female
        Random, skin_val, 1, 2 ; no khulan
        beard_str := ""
        bodies.push(FEMALE_BODIES*)
        ; create a copy of primary_heads to select later
        primary_heads.push(FEMALE_HEADS*)
    } else {
        gender_str := GENDER_MALE
        ; males can be bald
        Random hair_idx, 0, MALE_HAIRS.MaxIndex()
        hair_str := hair_idx ? MALE_HAIRS[hair_idx] : HAIR_BALD
        Random, herculean_chance, 1, 20 ; 5% chance at herculean if male
        herculean := herculean_chance == 1 ? rand_morph_val(15, 55) : 0
        Random, skin_val, 1, 3 ; incl. khulan
        Random, beard_chance, 0, BEARD_TYPES.MaxIndex()
        beard_str := beard_chance ? BEARD_TYPES[beard_chance] : ""
        bodies.push(MALE_BODIES*)
        primary_heads.push(MALE_HEADS*)
    }

    head_types := []
    head_types.push(MALE_HEADS*)
    head_types.push(FEMALE_HEADS*)
    ; If a hair with bangs was selected, remove heads that do not work well with bangs:
    if in_array(BANGS_HAIRS, hair_str) {
        i := head_types.MaxIndex()
        while i > 0 {
            if in_array(BANGS_BANNED_HEADS, head_types[i]) {
                head_types.remove(i)
            }
            i -= 1
        }
    }

    ; Head Morphs
    head_morphs := {}
    ; Select a primary head that is the appropriate gender
    ; FIXME: this is not respecting gender
    primary_head := ""
    while not primary_head {
        Random, head_idx, 1, primary_heads.MaxIndex()
        seek_idx := in_array(head_types, primary_heads[head_idx])
        if seek_idx {
            primary_head := primary_heads[head_idx]
            head_types.remove(seek_idx) ; remove it so we don't use it as a secondary
        }
    }

    if (gender_str == GENDER_MALE) {
        head_morphs[primary_head] := rand_morph_val(80, 100)
        extra_heads := 4
        while extra_heads {
            if (extra_heads > 1) { ; minor heads
                min_morph := 5
                max_morph := 30
            } else { ; secondary head
                min_morph := 40
                max_morph := 70
            }
            Random, head_idx, 1, head_types.MaxIndex()
            head_morphs[head_types[head_idx]] := rand_morph_val(min_morph, max_morph)
            head_types.remove(head_idx)
            extra_heads -= 1
        }
        if herculean {
            head_morphs[HEAD_HERCULEAN] := rand_morph_val(herculean-10, herculean)
        }
    } else {
        Random, use_primary_chance, 0, 1
        if use_primary_chance {
            ; a strong head, and weak extra heads
            head_morphs[primary_head] := rand_morph_val(80, 100)
            medium_heads := 0
            weak_heads := 3
        } else {
            ; a few medium strength heads, and a couple very weak extras
            ; the first medium head uses primary to reinforce gender
            head_morphs[primary_head] := rand_morph_val(35, 55)
            medium_heads := 2
            weak_heads := 2
        }
        while (medium_heads or weak_heads) {
            if medium_heads {
                min_morph := 35
                max_morph := 55
                medium_heads -= 1
            } else if weak_heads {
                min_morph := 5
                max_morph := 20
                weak_heads -= 1
            }
            Random, head_idx, 1, head_types.MaxIndex()
            head_morphs[head_types[head_idx]] := rand_morph_val(min_morph, max_morph)
            head_types.remove(head_idx)
        }
    }

    ; Ruben eye fix
    if (primary_head_str == "Ruben") {
        head_morphs["Eyeball Move L"] := -16
        head_morphs["Eyeball Move R"] := -16
    }

    ; Ethnicity hack, set skin brightness based on a few heads:
    if in_array(["Michelle", "Ruben", "Aanya", "Jamal", "Trey"], primary_head) {
        Random, skin_brightness, -55, 5
    } else {
        Random, skin_brightness, -5, 5
    }

    ; Body Morphs
    body_morphs := {}
    Random, body_idx, 1, bodies.MaxIndex()
    body_morphs[bodies[body_idx]] := rand_morph_val(70, 100)

    if herculean {
        body_morphs[BODY_HERCULEAN] := rand_morph_val(15, 55)
    } else {
        body_morphs[BODY_CALEB] := gender_str == GENDER_FEMALE ? rand_morph_val(5, 45) : rand_morph_val(10, 80)
    }

    ; Eye Color
    random eye_setting, 0, 8
    Switch eye_setting
    {
        case 0, 1, 2: ; default eyes, blue
            eye_green_val :=
            eye_red_val :=
            eye_blue_val :=
        case 3, 4, 5, 6:  ; brown eyes
            eye_green_val := -100
            eye_red_val := -7
            eye_blue_val := -100
        case 7, 8: ; green eyes
            eye_green_val := -7
            eye_red_val := -37
            eye_blue_val := -76
        case 9: ; rand eyes
            Random, eye_green_val, -100, 100
            Random, eye_red_val, -100, 100
            Random, eye_blue_val, -100, 100
    }

    ; Hair Color
    Random, full_hair_range, 0, 1
    max_hair_idx := full_hair_range ? HAIR_COLORS.MaxIndex() : SAFE_HAIR_MAX_IDX
    Random, hair_root_idx, 1, max_hair_idx
    hair_root := HAIR_COLORS[hair_root_idx]

    Random, funny_hair_chance, 1, 10 ; 10% chance for mixmatched hair ends
    if (funny_hair_chance == 1) {
        Random, hair_end_idx, 1, HAIR_COLORS.MaxIndex()
    } else {
        hair_end_idx := similar_hair_idx(hair_root_idx)
    }
    hair_end := HAIR_COLORS[hair_end_idx]

    if (hair_root_idx > SAFE_HAIR_MAX_IDX or hair_end_idx > SAFE_HAIR_MAX_IDX) {
        Random, beard_root_idx, 1, SAFE_HAIR_MAX_IDX
        beard_root := HAIR_COLORS[beard_root_idx]
        beard_end_idx := similar_hair_idx(beard_root_idx)
        beard_end := HAIR_COLORS[beard_end_idx]
    } else {
        beard_root := hair_root
        beard_end := hair_end
    }
    hair_root := Format("{:06X}", hair_root)
    hair_end := Format("{:06X}", hair_end)
    beard_root := Format("{:06X}", beard_root)
    beard_end := Format("{:06X}", beard_end)

    ; All stats are now generated, move on to procedural junk

    ; Hero dir
    hero_dir := BATCH_DIR . gender_str . "_" . class_str . "_" . num_generated . "\"
    FileCreateDir, %hero_dir%
    Sleep, 50
    attrs_fh := FileOpen(hero_dir . "attrs.txt", "w")
    attrs_fh.write("Gender: " . gender_str . "`n")
    attrs_fh.write("Class: " . class_str . "`n")
    attrs_fh.write("Skin: " . SKINS[skin_val] . "`n")

    ; Open fresh base project file
    class_project_path := PROJECT_DIR . class_str . "BaseBlank" . gender_str . skin_val . ".ccProject"
    Send, ^o ;ctrl+o
    WinWaitActive Open
    Send {LAlt Down}
    Send n
    Send {LAlt Up}
    clip_send(class_project_path)

    ; confirmation skippable on first run
    if (num_generated > 1) {
        WinWaitActive, ^Character Creator 3$,,5
        Send {LAlt Down}
        Send n
        Send {LAlt Up}
    }

    WinWaitActive, Load Project
    Send {Enter}

    wait_loading()

    Sleep, 1000 ; UI often stalls out here, let it cool off a bit

    if beard_str {
        beard_was_set := 0
        retries := 5
        while not beard_was_set and retries {
            beard_was_set := set_beard(beard_str)
            retries -= 1
        }
    }

    if (hair_str != HAIR_BALD) {
        hair_was_set := 0
        retries := 5
        while not hair_was_set and retries {
            hair_was_set := set_hair(hair_str)
            retries -= 1
        }

        ; TODO: if we processed materials here, instead of deselecting, all of the
        ;       hair components would already be selected.   wouldn't need to parse the list.
        Click, %DESELECT%
    }

    Click, %MORPH_PANE%
    long_click(MORPH_SCROLL_UP)
    Click, %MORPH_BODY%
    for morph, morph_val in body_morphs {
        _set_morph(morph, morph_val)
    }

    Click, %MORPH_HEAD%
    for morph, morph_val in head_morphs {
        _set_morph(morph, morph_val)
    }

    ; iterate through materials list
    process_materials := []

    ; TODO: color cchairs
    attrs_fh.write("Hair: " . hair_str . "`n")
    if (hair_str != HAIR_BALD and not InStr(hair_str, "cchair")) {
        attrs_fh.write("HairRoot: " . hair_root . "`n")
        attrs_fh.write("HairEnd: " . hair_end . "`n")

        process_materials.push("Hair")
        if in_array(["Curly long ponytail", "Half up short", "Side bang pigtail braid"], hair_str) {
            process_materials.push("BabyHair")
        }
        if in_array(["Side swept braid", "Side swept ponytail"], hair_str) {
            process_materials.push(["Hair1", "Hair2"]*)
        }
    }
    if (eye_setting > 2) {
        process_materials.push(["Std_Cornea_R", "Std_Cornea_L"]*)
        attrs_fh.write("EyeGreen: " . eye_green_val . "`n")
        attrs_fh.write("EyeRed: " . eye_red_val . "`n")
        attrs_fh.write("EyeBlue: " . eye_blue_val . "`n")
    }
    if beard_str {
        process_materials.push("Beard")
        attrs_fh.write("Beard: " . beard_str . "`n")
        attrs_fh.write("BeardRoot: " . beard_root . "`n")
        attrs_fh.write("BeardEnd: " . beard_end . "`n")
    }
    if (skin_brightness != 0) {
        process_materials.push(["Std_Skin_Head", "Std_Skin_Arm", "Std_Skin_Leg", "Std_Skin_Body"]*)
        attrs_fh.write("SkinBrightness: " . skin_brightness . "`n")
    }

    Click %MATERIALS_PANE%
    materials_scroll_top()
    process_count := 0 ; failsafe so we don't get stuck if something goes wrong
    process_count_limit := 200
    while (process_materials.MaxIndex() > 0 and process_count < process_count_limit) {
        Clipboard :=
        Send, ^c
        ClipWait

        material_idx := in_array(process_materials, Clipboard)
        if material_idx {
            if (Clipboard == "Beard") {
                set_hair_colors(beard_root, beard_end)
                ; regain material focus if we are still processing:
                if (process_materials.MaxIndex() > 1) {
                    materials_scroll_top()
                }
            }
            if in_array(["Hair", "Hair1", "Hair2", "BabyHair"], Clipboard) {
                set_hair_colors(hair_root, hair_end)
                if (process_materials.MaxIndex() > 1) {
                    materials_scroll_top()
                }
            }
            if InStr(Clipboard, "Std_Skin_") {
                Send, y

                open_adjust_color_window()
                set_param(ADJUST_COLOR_BRIGHTNESS, skin_brightness)
                Click, %ADJUST_COLOR_CLOSE%
                WinWaitActive, %MAIN_RE%
            }
            if InStr(Clipboard, "Std_Cornea_") {
                Send, y

                open_adjust_color_window()
                set_param(ADJUST_COLOR_GREEN, eye_green_val)
                set_param(ADJUST_COLOR_RED, eye_red_val)
                set_param(ADJUST_COLOR_BLUE, eye_blue_val)
                Click, %ADJUST_COLOR_CLOSE%
                WinWaitActive, %MAIN_RE%
            }
            process_materials.remove(material_idx)
        }

        Send, {Down}
        process_count += 1
    }

    if (process_count == process_count_limit) {
        failstr := ""
        for index, material in process_materials {
            failstr .= index < process_materials.MaxIndex() ? material . ", " : material
        }
        attrs_fh.write("Error: Failed to process " . failstr . "`n")
    }
    attrs_fh.close()

    ; remove selectors for screenshot
    Click, %DESELECT%

    ; select camera
    Click, %CONTENT_PANE%
    Click, %CONTENT_SCENE%
    Click, %CONTENT_SCENE_ELEMS%
    Click, %CONTENT_SCENE_ELEMS_CAMERA% 2
    Click, 334, 557 2 ; subsetting
    Click, 328, 858 2 ; Select Half Body_Right camera
    wait_loading()

    Click, 453, 221 ; Poses
    Click, 83, 272 ; Body
    Click, 327, 798 2 ; Idle Pose / y-pos changes based on installed content :(
    wait_loading()

    if (gender_str == "Male") {
        ; adjust camera to include more hair
        Click, 869, 77
        MouseMove, 702, 257
        Click, Down
        MouseMove, 702, 342
        Click, Up
    }
    Send, {LAlt Down}
    Send, r
    Send, {LAlt Up}
    Send, r
    Click, %RENDER_EXPORT%
    WinActivate, Save As
    WinWaitActive, Save As
    clip_send(hero_dir . "Hero.jpg")

    WinWaitActive, Photos
    WinClose, Photos

    WinActivate, %MAIN_RE%

    ; todo: DRY
    Click, %CONTENT_PANE%
    Click, %CONTENT_SCENE%
    Click, %CONTENT_SCENE_ELEMS%
    Click, %CONTENT_SCENE_ELEMS_CAMERA% 2
    Click, 334, 557 2 ; subsetting
    Click, 322, 501 2 ; Select Close Face_Front camera
    wait_loading()

    ; adjust camera
    Click, 869, 77
    if (gender_str == "Male") {
        MouseMove, 702, 257
        Click, Down
        MouseMove, 702, 672
    } else {
        MouseMove, 702, 762
        Click, Down
        MouseMove, 702, 387
    }
    Click, Up

    Send, {LAlt Down}
    Send, r
    Send, {LAlt Up}
    Send, r
    Click, %RENDER_EXPORT%
    WinActivate, Save As
    WinWaitActive, Save As
    clip_send(hero_dir . "Face.jpg")

    WinWaitActive, Photos
    WinClose, Photos

    WinActivate, %MAIN_RE%

    ; POST-SCREENSHOT / PRE-EXPORT MODIFICATIONS:

    ; We want to adjust hair scale slightly for some models, but we don't want
    ; those changes showing up in the screenshots.
    if in_array(["Long wavy ponytail", "Large bun"], hair_str) {
        Click, %SCENE_PANE%
        Click, %SCENE_AVATAR_ITEM1%
        Click, %ATTRIBUTE_PANE%

        Clipboard :=
        Send, ^c
        ClipWait

        while (Clipboard != "Messy high") {
            Send, {Down}
            Clipboard :=
            Send, ^c
            ClipWait
        }

        Click, %SCENE_TRANSFORM_SCALE_X%
        Send, ^a
        Send, 98
        Send, {Tab}
        Send, 98
    }

    ; export
    if SAVE_FBX {
        Send, {LAlt Down}
        Send, f
        Send, {LAlt Up}
        Send, {Down 6}
        Send, {Right}
        Send, {Down 4}
        Send, {Enter}

        WinActivate, Export FBX
        WinWaitActive, Export FBX

        ; set motions if we rolled a different class last time
        if (last_class_str != class_str) {
            Click, 705, 702 ; scroll
            Click, 34, 398 ; Custom radio selector
            Click, 324, 536 ; clear all
            for index, motion in motions {
                clicked_item := 0
                while not clicked_item {
                    WinActivate, %EXPORT_FBX_RE%
                    WinWaitActive, %EXPORT_FBX_RE%,, 2
                    Click, 250, 539
                    WinActivate, Open
                    WinWaitActive, Open,, 2
                    if not ErrorLevel {
                        clicked_item := 1
                    }
                }
                clip_send(MOTIONS_DIR . motion)
                Sleep, 200
            }
        }

        WinActivate, %EXPORT_FBX_RE%
        WinWaitActive, %EXPORT_FBX_RE%
        Click, 215, 773

        WinWaitActive, Character Creator 3
        WinActivate, Character Creator 3
        Click, 109, 254

        WinWaitActive, Save As
        WinActivate, Save As
        Click 328, 435
        clip_send(hero_dir . "Hero.fbx")

        wait_loading()
        sleep 3000 ; seems to help mitigate a slippery second window
        wait_loading() ; final window
    }

    if SAVE_CCPROJECT {
        Send {LAlt Down}
        Send f
        Send {LAlt Up}
        Send {Down 4}
        Send {Enter}
        WinWaitActive, Save As
        WinActivate, Save As
        Click 328, 435
        sleep, 20
        Send ^a
        sleep, 20
        clip_send(hero_dir . "Hero.ccProject")
        sleep, 10
        wait_loading()
    }

    last_class_str := class_str
    num_generated += 1
}

FormatTime, EndTime, T12, Time

MsgBox %StartTime% %EndTime%
BlockInput, MouseMoveOff
ExitApp

Esc::ExitApp