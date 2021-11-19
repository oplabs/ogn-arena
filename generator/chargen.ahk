BlockInput, MouseMove
FormatTime, StartTime, T12, Time

; buffing delays smooth over many interactions
SetWinDelay, 200
SetKeyDelay, 50
SetMouseDelay, 25

NUM_TO_GENERATE := 999
PROJECT_DIR := "C:\Users\codex\Downloads\"
BATCH_DIR := "C:\Users\codex\Documents\chargen\generated_" . A_YYYY . A_MM . A_DD . A_Hour . A_Min . A_Sec . "\"
MOTIONS_DIR := "C:\Users\Public\Documents\Reallusion\Template\Character Creator 3 Template\Motion\"

MAIN_RE := "^Character Creator 3.*\.ccProject"

HAIR_COLORS := [0x1c1f20, 0x272a2d, 0x312e2d, 0x35261b, 0x4b321e, 0x5c3b23, 0x6d4c33
    , 0x6b503c, 0x765c47, 0x7f6850, 0x99815d, 0xa79369, 0xaf9c70, 0xbba063, 0xd6b97b
    , 0xdac38e, 0x9f7f59, 0x845039, 0x682b1f, 0x61120c, 0x640f0a, 0x7c140f, 0xa02e19
    , 0xb64b28, 0xa2502f, 0xaa4e2b, 0x626262, 0x808080, 0xaaaaaa, 0xc5c5c5, 0x463955
    , 0x5a3f6b, 0x763c76, 0xed74e3, 0xeb4b93, 0xf299bc, 0x04959e, 0x025f86, 0x023974
    , 0x3fa16a, 0x217c61, 0x185c55, 0xb6c034, 0x70a90b, 0x439d13, 0xdcb857, 0xe5b103
    , 0xe69102, 0xf28831, 0xfb8057, 0xe28b58, 0xd1593c, 0xce3120, 0xad0903, 0x880302
    , 0x1f1814, 0x291f19, 0x2e221b, 0x37291e, 0x2e2218, 0x231b15, 0x020202, 0x706c66
    , 0x9d7a50]
SAFE_HAIR_MAX_IDX = 19

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
    WinWaitActive, ^Character Creator 3$
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

set_hair_colors(root, end) {
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
    ; set_html_hair_color(root)
    ; WinWaitActive, %MAIN_RE%

    Click, 1882, 859
    WinWaitActive, Select Color
    set_html_hair_color(root)
    WinWaitActive, %MAIN_RE%

    Click, 1880, 896
    WinWaitActive, Select Color
    set_html_hair_color(end)
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
  ; clip_send(color)
  Send, Raw{#}%color% ; raw required for hashtag
  ; Click, 408, 454
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

in_array(needle, haystack) {
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
    max_idx = HAIR_COLORS.MaxIndex()
    if (hair_idx == 0) {
        return 1
    } else if (hair_idx == max_idx) {
        return max_idx - 1
    } else {
        Random, lighter_chance, 0, 1
        if (lighter_chance == 1) {
            return hair_idx + 1
        } else {
            return hair_idx - 1
        }
    }
}

; copy current version of script to output dir for posterity
FileCreateDir, %BATCH_DIR%
sleep, 20
FileCopy %A_ScriptFullPath%, %BATCH_DIR%
sleep, 20

SetTitleMatchMode, RegEx
WinActivate, %MAIN_RE%
WinWaitActive, %MAIN_RE%

Click, %SMART_GALLERY_TAB%
Click, %SMART_GALLERY_ITEM% ; make sure item is selected so search works later

last_class_str :=
num_generated := 1
while num_generated <= NUM_TO_GENERATE
{
    ; == Class
    Random class_setting, 0, 1
    if class_setting {
        class_str := "Mage"
        motions := ["Studio Mocap-Magical Moves\Attack\M_LS_MageSpellCast_05.rlmotion"
                    , "Studio Mocap-Magical Moves\Summon\F_LS_Warning_Idle.rlmotion"]
    }
    else {
        class_str := "Fighter"
        motions := ["Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"
                    , "Studio Mocap-Sword & Shield Stunts\Attack Combo\Atk_2xCombo02.rlmotion"]
    }

    ; == Gender
    head_types := ["CC3+_Neutral Male", "CC3+_Caleb_Head", "CC3+_Kevin_Head", "Caleus", "Dimitri", "Matt", "Ruben"
                   , "Timothy", "Gabriel", "Jamal", "Travis", "Khulan_Head"]
    female_head_types := ["CC3+_Neutral Female", "CC3+_Katherine_Head", "CC3+_Jody_Head", "Denisa", "Flora"
                          , "Magda", "Michelle", "Samantha", "Aanya", "Ayako", "Cristy", "Gloria", "Lori", "Mei"]
    Random, gender_bool, 0, 1
    if gender_bool {
        gender_str := "Female"
        hair_types := ["Curly long ponytail", "Half up short", "Half up straight", "Half up wavy long", "Large bun"
                       , "Long wavy ponytail", "Side bang pigtail braid", "Side part bang_mid", "Side swept braid"
                       , "Side swept ponytail", "Top knot long ponytail", "Top knot pigtail braid", "Top knot samurai"
                       , "Top knot short ponytail", "Two curly ponytails", "Two high space buns", "Two low space buns"
                       , "Two pigtail braids", "Two ponytails", "Wavy medium ponytail", "Light Skin.cchair"
                       , "Bun.ccHair", "Dawn_MorphHair.ccHair", "Dusk_Hair.ccHair", "High Ponytail.ccHair"
                       , "Long Hair.ccHair", "Short Hair.ccHair"]

        Random, primary_head_bool, 1, female_head_types.MaxIndex()
        primary_head_str := female_head_types[primary_head_bool]
        female_head_types.remove(primary_head_bool)

        body_types := ["CC3+_Neutral Female", "CC3+_Katherine_Body", "CC3+_Jody_Body", "Body HA Female Athletic"]
        herculean_bool := 0 ; 0% chance at herculean if female
        ; 1: default, 2: clean
        Random, skin_val, 1, 2
    } else {
        gender_str := "Male"
        Random, primary_head_bool, 1, head_types.MaxIndex()
        primary_head_str := head_types[primary_head_bool]
        head_types.remove(primary_head_bool)
        body_types := ["CC3+_Neutral Male", "CC3+_Kevin_Body"]
        hair_types := ["Bald", "Top knot long ponytail", "Top knot pigtail braid", "Top knot samurai"
                       , "Top knot short ponytail", "Light Skin.cchair", "Bun.ccHair", "Dawn_MorphHair.ccHair"
                       , "Dusk_Hair.ccHair", "Long Hair.ccHair", "Short Hair.ccHair"]
        Random, herculean_bool, 1, 20 ; 5% chance at herculean if male
        ; 1: default, 2: clean, 3: khulan
        Random, skin_val, 1, 3
    }

    ; == Hair Type
    bangs_hairs := ["Curly long ponytail", "Half up short", "Half up straight" , "Half up wavy long"
        , "Side bang pigtail braid", "Side part bang_mid" , "Two curly ponytails", "Two high space buns"
        , "Two low space buns" , "Two pigtail braids", "Wavy medium ponytail"]
    no_bangs_heads := ["Samantha", "Magda", "Flora", "Ruben"]

    ; If a head was selected that doesnt work well with bangs, remove bangs hairs
    if in_array(primary_head_str, no_bangs_heads) {
        i := hair_types.MaxIndex()
        while i > 0 {
            if in_array(hair_types[i], bangs_hairs) {
                hair_types.remove(i)
            }
            i -= 1
        }
    }

    Random, hair_bool, 1, hair_types.MaxIndex()
    hair_str := hair_types[hair_bool]

    ; If a hair with bangs was selected, remove heads that do no work well with bangs:
    ; this should help with secondary head selection
    if in_array(hair_str, bangs_hairs) {
        i := female_head_types.MaxIndex()
        while i > 0 {
            if in_array(female_head_types[i], no_bangs_heads) {
                female_head_types.remove(i)
            }
            i -= 1
        }
    }

    ; combine head arrays
    for item, element in female_head_types {
        head_types.push(element)
    }

    ; Ethnicity hack, set skin brightness based on a few heads:
    if in_array(primary_head_str, ["Michelle", "Ruben", "Aanya", "Jamal"]) {
        Random, skin_brightness, -55, 5
    } else {
        Random, skin_brightness, -5, 5
    }
    if (skin_brightness != 0) {
        process_skin_head := 1
        process_skin_body := 1
        process_skin_arm := 1
        process_skin_leg := 1
    }

    ; == Body Type
    Random, body_bool, 1, body_types.MaxIndex()
    primary_body_str := body_types[body_bool]
    body_types.remove(body_bool)

    Random, body_bool, 1, body_types.MaxIndex()
    secondary_body_str := body_types[body_bool]

    ; == Directory & attrs.txt
    ; requires: gender_str, class_str
    hero_dir := BATCH_DIR . gender_str . "_" . class_str . "_" . num_generated . "\"
    fbx_path := hero_dir . "Hero.fbx"
    jpg_path := hero_dir . "Hero.jpg"
    jpg_face_path := hero_dir . "Face.jpg"
    save_as_path := hero_dir . "Hero.ccProject"
    FileCreateDir, %hero_dir%

    attrs_fh := FileOpen(hero_dir . "attrs" . ".txt", "w")
    attrs_fh.write("Gender: " . gender_str . "`n")
    attrs_fh.write("Class: " . class_str . "`n")
    attrs_fh.write("HairType: " . hair_str . "`n")
    attrs_fh.write("SkinBrightness: " . skin_brightness . "`n")

    ; == Eye Color
    random eye_setting, 0, 8
    ; 0-2: blue eyes, do nothing
    Switch eye_setting
    {
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
    if (eye_setting > 2) {
        process_eye_left := 1
        process_eye_right := 1
        attrs_fh.write("EyeGreen: " . eye_green_val . "`n")
        attrs_fh.write("EyeRed: " . eye_red_val . "`n")
        attrs_fh.write("EyeBlue: " . eye_blue_val . "`n")
    }

    ; == Hair Color

    ; Generate hair root colors even if bald, we might need it for beards
    Random, hair_root_idx, 1, HAIR_COLORS.MaxIndex()
    hair_root := HAIR_COLORS[hair_root_idx]

    Random, funny_hair_chance, 1, 10 ; 10% chance for mixmatched hair ends
    if (funny_hair_chance == 1) {
        Random, hair_end_idx, 1, HAIR_COLORS.MaxIndex()
    } else {
        hair_end_idx := similar_hair_idx(hair_root_idx)
    }
    hair_end := HAIR_COLORS[hair_end_idx]

    if (hair_root_idx > SAFE_HAIR_MAX_IDX) {
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

    CCHAIRS := ["Bun.ccHair", "Dawn_MorphHair.ccHair", "Dusk_Hair.ccHair", "High Ponytail.ccHair"
              , "Long Hair.ccHair", "Short Hair.ccHair", "Light Skin.cchair", "Bald"]
    ; TODO: color cchairs
    if not in_array(hair_str, CCHAIRS) {
        process_hair := 1
        attrs_fh.write("HairRoot: " . hair_root . "`n")
        attrs_fh.write("HairEnd: " . hair_end . "`n")
        if in_array(hair_str, ["Curly long ponytail", "Half up short", "Side bang pigtail braid"]) {
            process_baby_hair := 1
        }
        if in_array(hair_str, ["Side swept braid", "Side swept ponytail"]) {
            process_hair1 := 1
            process_hair2 := 1
        }
    }

    ; Randomly determine skin value, and determine appropriate project file based on class, gender, skin
    class_project_path := PROJECT_DIR . class_str . "BaseBlank" . gender_str . skin_val . ".ccProject"
    attrs_fh.write("SkinVal: " . skin_val . "`n")

    ; Open fresh base project file
    Send, ^o ;ctrl+o
    WinWaitActive Open
    Send {LAlt Down}
    Send n
    Send {LAlt Up}
    clip_send(class_project_path)

    ; confirmation skippable on first run
    if (num_generated > 1) {
        WinWaitActive, ^Character Creator 3$
        Send {LAlt Down}
        Send n
        Send {LAlt Up}
    }

    WinWaitActive, Load Project
    Send {Enter}

    wait_loading()
    WinWaitActive, %MAIN_RE%

    Sleep, 2000 ; cool down UI after loading project, may fix hair/beard

    Send, ^2 ; set default workspace for reliable clicks
    Send, ^1 ; ctrl+1 one time should enable list view on menus

    if (gender_str == "Male") {
        beard_types := ["country", "cowboy", "thick", "viking"]
        Random, beard_chance, 0, beard_types.MaxIndex()
        if (beard_chance > 0) {
            process_beard := 1
            beard_str := beard_types[beard_chance]
            attrs_fh.write("Beard: " . beard_str . "`n")
            attrs_fh.write("BeardRoot: " . beard_root . "`n")
            attrs_fh.write("BeardEnd: " . beard_end . "`n")

            Click, %CONTENT_PANE%
            Click, %CONTENT_HAIR%
            Click, %CONTENT_HAIR_TEMPLATE%
            Click, %CONTENT_ITEM2% 2 ; Group
            Click, %CONTENT_ITEM1% 2 ; Beard
            Click, %CONTENT_SEARCH%
            clip_send(beard_str)
            Sleep, 300 ; hair and beard search have stalled us in the past
            Click, %CONTENT_ITEM1% 2 ; first result

            WinWaitActive, ^Character Creator 3$,,5
            if ErrorLevel {
                ; the window never loaded click again
                ; xxx: maybe the window is losing focus for some reason?
                WinActivate, %MAIN_RE%
                Click, %CONTENT_ITEM1% 2
            }
            WinWaitClose, ^Character Creator 3$
        }
    }
    ; all attrs should be logged by now
    attrs_fh.close()

    ; skip hair selection if bald was chosen
    if (hair_str != "Bald") {
        Click, %SMART_GALLERY_TAB%
        Click, %SMART_GALLERY_SEARCH%
        Send, ^a
        clip_send(hair_str)
        Sleep, 300 ; we sometimes stall out after a gallery search
        Click, %SMART_GALLERY_ITEM1% 2

        WinWaitActive, ^Character Creator 3$,,5
        if ErrorLevel {
            ; the window never loaded click again
            ; xxx: maybe the window is losing focus for some reason?
            WinActivate, %MAIN_RE%
            Click, %SMART_GALLERY_ITEM1% 2
        }
        WinWaitClose, ^Character Creator 3$

        ; TODO: if we processed materials here, instead of deselecting, all of the
        ;       hair components would already be selected.   wouldn't need to parse the list.
        Click, %DESELECT%
    }

    Click, %MORPH_PANE%
    long_click(MORPH_SCROLL_UP)
    Click, %MORPH_BODY%
    ; Set body morphs
    set_morph(primary_body_str, 70, 100)
    ; second body morph removed: male hands too big, females too short.
    ; set_morph(secondary_body_str, 1, 80)

    if (herculean_bool == 1) {
        herc_morph := set_morph("Body HA Male Herculean", 15, 55)
    } else {
        ; use Caleb body for muscles if not herculean
        Switch gender_str {
            case "Female": set_morph("CC3+_Caleb_Body", 5, 45)
            case "Male": set_morph("CC3+_Caleb_Body", 10, 80)
        }
    }

    Click, %MORPH_HEAD%

    if (herculean_bool == 1) {
        set_morph("Head HA Male Herculean", herc_morph-10, herc_morph)
    }
    if (gender_str == "Male") {
        ; males are looking good, so isolate their head logic here for now:
        set_morph(primary_head_str, 80, 100)

        extra_heads := 4
        while extra_heads {
            Random, extra_head_index, 1, head_types.MaxIndex()
            extra_head_str := head_types[extra_head_index]
            if (extra_heads == 1) { ; final heads are "secondary" and get extra influence
                min_morph := 40
                max_morph := 70
            } else {
                min_morph := 5
                max_morph := 30
            }
            set_morph(extra_head_str, min_morph, max_morph)
            head_types.remove(extra_head_index)
            extra_heads -= 1
        }
    } else {
        ; female head logic:
        Random, use_primary_chance, 0, 1
        if use_primary_chance {
            ; a strong head, and weak extra heads
            set_morph(primary_head_str, 80, 100)
            medium_heads := 0
            weak_heads := 3
        } else {
            ; a few medium strength heads, and a couple very weak extras
            set_morph(primary_head_str, 35, 55) ; the first medium head uses primary to reinforce gender
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
            Random, extra_head_index, 1, head_types.MaxIndex()
            extra_head_str := head_types[extra_head_index]
            set_morph(extra_head_str, min_morph, max_morph)
            head_types.remove(extra_head_index)
        }
    }

    ; iterate through materials list
    Click %MATERIALS_PANE%
    materials_scroll_top()

    while (process_eye_left == 1 or process_eye_right == 1 or process_hair == 1 or process_beard == 1 or process_hair1 == 1 or process_hair2 == 1 or process_baby_hair == 1) {
        Clipboard :=
        Send, ^c
        ClipWait

        if (Clipboard == "Beard" and process_beard == 1) {
            process_beard := 0
            set_hair_colors(beard_root, beard_end)
            materials_scroll_top()
        }
        ;IfInString, Clipboard, Hair
        if (Clipboard == "Hair" and process_hair == 1)
        {
            process_hair := 0
            set_hair_colors(hair_root, hair_end)
            materials_scroll_top()
        }
        if (Clipboard == "Hair1" and process_hair1 == 1)
        {
            process_hair1 := 0
            set_hair_colors(hair_root, hair_end)
            materials_scroll_top()
        }
        if (Clipboard == "Hair2" and process_hair2 == 1)
        {
            process_hair2 := 0
            set_hair_colors(hair_root, hair_end)
            materials_scroll_top()
        }
        if (Clipboard == "BabyHair" and process_baby_hair == 1)
        {
            process_baby_hair := 0
            set_hair_colors(hair_root, hair_end)
            materials_scroll_top()
        }
        if (Clipboard == "Std_Skin_Head" and process_skin_head == 1) {
            process_skin_head := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_BRIGHTNESS, skin_brightness)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }
        if (Clipboard == "Std_Skin_Body" and process_skin_body == 1) {
            process_skin_body := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_BRIGHTNESS, skin_brightness)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }
        if (Clipboard == "Std_Skin_Arm" and process_skin_arm == 1) {
            process_skin_arm := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_BRIGHTNESS, skin_brightness)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }
        if (Clipboard == "Std_Skin_Leg" and process_skin_leg == 1) {
            process_skin_leg := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_BRIGHTNESS, skin_brightness)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }
        if (Clipboard == "Std_Cornea_L" and process_eye_left == 1) {
            process_eye_left := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_GREEN, eye_green_val)
            set_param(ADJUST_COLOR_RED, eye_red_val)
            set_param(ADJUST_COLOR_BLUE, eye_blue_val)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }
        if (Clipboard == "Std_Cornea_R" and process_eye_right == 1) {
            process_eye_right := 0
            Send, y

            open_adjust_color_window()
            set_param(ADJUST_COLOR_GREEN, eye_green_val)
            set_param(ADJUST_COLOR_RED, eye_red_val)
            set_param(ADJUST_COLOR_BLUE, eye_blue_val)
            Click, %ADJUST_COLOR_CLOSE%
            WinWaitActive, %MAIN_RE%
        }

        Send, {Down}
    }

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
    Click, 327, 707 2 ; Idle Pose
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
    clip_send(jpg_path)

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
        MouseMove, 702, 347
    }
    Click, Up

    Send, {LAlt Down}
    Send, r
    Send, {LAlt Up}
    Send, r
    Click, %RENDER_EXPORT%
    WinActivate, Save As
    WinWaitActive, Save As
    clip_send(jpg_face_path)

    WinWaitActive, Photos
    WinClose, Photos

    WinActivate, %MAIN_RE%

    ; export
    Send, {LAlt Down}
    Send, f
    Send, {LAlt Up}
    Send, {Down 6}
    Send, {Right}
    Send, {Down 4}
    Send, {Enter}

  ; WinWaitActive, ^Character Creator 3$
  ; Send {Enter}
  ; sleep, 100

    WinActivate, Export FBX
    WinWaitActive, Export FBX

    ; set motions if we rolled a different class last time
    if (last_class_str != class_str) {
        Click, 705, 702 ; scroll
        Click, 34, 398 ; Custom radio selector
        Click, 324, 536 ; clear all
        for index, motion in motions {
            Click 250, 539 ; open file
            WinWaitActive, Open
            clip_send(MOTIONS_DIR . motion)
            WinWaitClose, Open
            WinActivate, Export FBX
            WinWaitActive, Export FBX
        }
    }

    Click, 215, 773  

    WinWaitActive, Character Creator 3
    WinActivate, Character Creator 3
    Click, 109, 254 

    WinWaitActive, Save As
    WinActivate, Save As
    Click 328, 435
    clip_send(fbx_path)

    wait_loading()
    sleep 3000 ; seems to help mitigate a slippery second window
    wait_loading() ; final window

    ; uncomment section to save ccProject file (~200MB)
  ; Send {LAlt Down}
  ; Send f
  ; Send {LAlt Up}
  ; Send {Down 4}
  ; Send {Enter}
  ; WinWaitActive, Save As
  ; WinActivate, Save As
  ; Click 328, 435
  ; sleep, 20
  ; Send ^a
  ; sleep, 20
  ; Send, %save_as_path%
  ; Send {Enter}
  ; sleep, 10
  ; WinWaitActive, ^Character Creator 3$
  ; WinWaitNotActive, ^Character Creator 3$

    last_class_str := class_str
    num_generated += 1

    sleep 2000 ; give UI some time to cool down between runs
}

FormatTime, EndTime, T12, Time

MsgBox %StartTime% %EndTime%
Exit