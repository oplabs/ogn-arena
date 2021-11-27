# Character Generator

## First time setup

# Install Reallusion Character Creator 3:

https://www.reallusion.com/character-creator/

# Modify script vars

* PROJECT_DIR should be the path to the base project files.

* PROJECT_DIR should contain the 8 files {Mage, Fighter}BaseBlank{Male, Female}{1, 2}.ccProject
  * Each number represents a different pre-added skin type.

  * BATCH_DIR should be the output path for generated FBX models and screenshots

  * MOTIONS_DIR should be the path to your CC3 motion files.

  * Set{Win, Key, Mouse} delays may be modified for reliability.

# Load Character Creator 3

  Ensure CC3 is maximized and resolution is set at 1900x1080

  File->Export->FBX->

  1. Check InstaLOD
  2. Number of LOD Mesh: 1
  3. Target Tool Preset: Unity 3D
  4. Click "Cancel"

  Select Materials Pane

  * and ensure "Affect all materials with same name" is checked.

## Run chargen.ahk
