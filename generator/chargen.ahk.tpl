CLASS_STR := "{{ class_str }}""
CLASS_INT := {{ class_int }} ; int
GENDER_STR := "{{ gender_str }}"
SKIN_VAL := {{ skin_val }}
BEARD_STR := "{{ beard_str }}"
BODY_MORPHS := {{ body_morphs }}
HEAD_MORPHS := {{ head_morphs }}
EYE_COLOR_STR := "{{ eye_color_str }}"
SKIN_BRIGHTNESS := {{ skin_brightness }} ; int

{% raw %}
BlockInput, MouseMove

; buffing delays smooth over many interactions
SetWinDelay, 200
SetKeyDelay, 50
SetMouseDelay, 25

SetTitleMatchMode, RegEx

SAVE_CCPROJECT := 0
SAVE_FBX := 1

PROJECT_DIR := "C:\Users\codex\Downloads\"
BATCH_DIR := "C:\Users\codex\Documents\chargen\batch1\"
MOTIONS_DIR := "C:\Users\Public\Documents\Reallusion\Template\Character Creator 3 Template\Motion\"

MAIN_RE := "^Character Creator 3.*\.ccProject"
EXPORT_FBX_RE := "^Export FBX$"

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

if (num_generated > 1) {
    sleep 2000 ; give UI some time to cool down between runs
}

; Class
if (CLASS_INT == 1) {
    motions := ["Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"
                , "Studio Mocap-Sword & Shield Stunts\Attack Combo\Atk_2xCombo02.rlmotion"]
}
if (CLASS_INT == 2) {
    motions := ["Studio Mocap-Magical Moves\Attack\M_LS_MageSpellCast_05.rlmotion"
                , "Studio Mocap-Magical Moves\Summon\F_LS_Warning_Idle.rlmotion"]
}
if (class_bool == 3) {
    motions := ["Studio Mocap-Magical Moves\Attack\F_LS_MageSpellCast_02.rlMotion"
                , "Studio Mocap-Sword & Shield Moves\Move\RunForward.rlMotion"
                , "Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"]
}
if (class_bool == 4) {
    motions := ["Human Mocap-Pistol Stunt\Dagger Melee\Attack\K03_Dagger_Atk_Stab_Jaw.rlMotion"
                , "Human Mocap-Assassin Moves\Mobility\Crouch_to_Sneak_Walk.rlMotion"
                , "Studio Mocap-Sword & Shield Moves\Idle\Idle_Battle.rlmotion"]
}


; Ruben eye fix
; xxx if first morph is Ruben:
if (primary_head_str == "Ruben") {
    HEAD_MORPHS["Eyeball Move L"] := -16
    HEAD_MORPHS["Eyeball Move R"] := -16
}

; Hero dir
hero_dir := BATCH_DIR . GENDER_STR . "_" . CLASS_STR . "_" . A_YYYY . A_MM . A_DD . A_Hour . A_Min . A_Sec . "\"
FileCreateDir, %hero_dir%
Sleep, 50
attrs_fh := FileOpen(hero_dir . "attrs.txt", "w")
attrs_fh.write("Gender: " . GENDER_STR . "`n")
attrs_fh.write("Class: " . CLASS_STR . "`n")
attrs_fh.write("Skin: " . SKIN_VAL . "`n")

; Open fresh base project file
class_project_path := PROJECT_DIR . CLASS_STR . "BaseBlank" . GENDER_STR . SKIN_VAL . ".ccProject"
Send, ^o ;ctrl+o
WinWaitActive Open
Send {LAlt Down}
Send n
Send {LAlt Up}
clip_send(class_project_path)

; confirmation skippable on first run
; xxx may need work
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

if BEARD_STR {
    beard_was_set := 0
    retries := 5
    while not beard_was_set and retries {
        beard_was_set := set_beard(BEARD_STR)
        retries -= 1
    }
}

if (HAIR_STR != "Bald") {
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
for morph, morph_val in BODY_MORPHS {
    _set_morph(morph, morph_val)
}

Click, %MORPH_HEAD%
for morph, morph_val in HEAD_MORPHS {
    _set_morph(morph, morph_val)
}

; iterate through materials list
process_materials := []

; TODO: color cchairs
attrs_fh.write("Hair: " . HAIR_STR . "`n")
if (hair_str != HAIR_BALD and not InStr(HAIR_STR, "cchair")) {
    attrs_fh.write("HairRoot: " . HAIR_ROOT . "`n")
    attrs_fh.write("HairEnd: " . HAIR_ROOT . "`n")

    process_materials.push("Hair")
    if in_array(["Curly long ponytail", "Half up short", "Side bang pigtail braid"], HAIR_STR) {
        process_materials.push("BabyHair")
    }
    if in_array(["Side swept braid", "Side swept ponytail"], HAIR_STR) {
        process_materials.push(["Hair1", "Hair2"]*)
    }
}

if (EYE_COLOR_STR == "Brown") {
    eye_green_val := -100
    eye_red_val := -7
    eye_blue_val := -100
    process_materials.push(["Std_Cornea_R", "Std_Cornea_L"]*)
    attrs_fh.write("EyeGreen: " . eye_green_val . "`n")
    attrs_fh.write("EyeRed: " . eye_red_val . "`n")
    attrs_fh.write("EyeBlue: " . eye_blue_val . "`n")
}
if (EYE_COLOR_STR == "Green") {
    eye_green_val := -7
    eye_red_val := -37
    eye_blue_val := -76
    process_materials.push(["Std_Cornea_R", "Std_Cornea_L"]*)
    attrs_fh.write("EyeGreen: " . eye_green_val . "`n")
    attrs_fh.write("EyeRed: " . eye_red_val . "`n")
    attrs_fh.write("EyeBlue: " . eye_blue_val . "`n")
}

if BEARD_STR {
    process_materials.push("Beard")
    attrs_fh.write("Beard: " . beard_str . "`n")
    attrs_fh.write("BeardRoot: " . beard_root . "`n")
    attrs_fh.write("BeardEnd: " . beard_end . "`n")
}
if (SKIN_BRIGHTNESS != 0) {
    process_materials.push(["Std_Skin_Head", "Std_Skin_Arm", "Std_Skin_Leg", "Std_Skin_Body", "Std_Nails"]*)
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
        if (InStr(Clipboard, "Std_Skin_") or Clipboard == "Std_Nails") {
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
    ; xxx can we set a return code instead?
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

FormatTime, EndTime, T12, Time

MsgBox %StartTime% %EndTime%
BlockInput, MouseMoveOff
ExitApp

Esc::ExitApp
{% endraw %}