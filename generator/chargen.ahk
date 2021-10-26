#include CaptureScreen.ahk
; https://www.autohotkey.com/board/topic/121619-screencaptureahk-broken-capturescreen-function-win-81-x64/?p=688850


SetParam(name, min:=-100, max:=100)
{
  Click, 1800, 260 ; click position for the search box.
  Send, ^a
  Send %name%

  Click, 1849, 340 ; click position for first search result.
  Send, ^a
  Random, randVal, min, max
  Send %randVal%

  global fileHandle
  fileHandle.write(name . ": " . randVal . "`n")
  sleep, 50 ; possible this is not necessary.

}


DOC_PATH := "C:\Users\codex\Documents\chargen\"
SS_COORDS := "602, 161, 1361, 1016" ; T L B R coorinates for screen capture

SetTitleMatchMode, RegEx
WinActivate, ^Character
FormatTime, StartTime, T12, Time

numGenerated := 1
while numGenerated <= 5
{

        fileHandle := FileOpen(DOC_PATH . numGenerated . ".txt", "w")
        SetParam("Skull Height", -30)
        SetParam("Skull Width")
        SetParam("Skull Back Scale")
        SetParam("Skull Back Depth")

        SetParam("Forehead Temple Width", 0)
        SetParam("Forehead Curve")

        SetParam("Brow Height", -50)
        SetParam("Brow Lower", 0, 80)
        SetParam("Brow Center Width", 0, 80)
        SetParam("Brow Depth", -70)
        SetParam("Brow Angle")

     ;  SetParam("Eye Scale")
     ;  SetParam("Eye Height")
     ;  SetParam("Eye Width")
     ;  SetParam("Eye Outer Inner Width")
     ;  SetParam("Eye Angle")
     ;  SetParam("Eye Depth")
     ;  SetParam("Eye Lower Depth")
     ;  SetParam("Eyelid Lower Height")
     ;  SetParam("Eyelid Lower Inner Height")
     ;  SetParam("Eyeball Scale")
     ;  SetParam("Eyeball Shrink")
     ;  SetParam("Eyeball Height")
     ;  SetParam("Eyeball Width")
     ;  SetParam("Eyeball Move")
     ;  SetParam("Eyeball Depth")

        SetParam("Ear Scale")
        SetParam("Ear Scale Height")
        SetParam("Ear Height")
        SetParam("Ear Angle Out")
        SetParam("Ear Angle Top")
        SetParam("Ear Depth")
        SetParam("Earlobe Define")
        SetParam("Ear Contour")

        SetParam("Cheek Bone Scale", -50)
        SetParam("Cheek Bone Height")
        SetParam("Cheek Hollow", 0)

        SetParam("Nose Scale")
        SetParam("Nose Width")
        SetParam("Nose Height")
        SetParam("Nose Depth")
        SetParam("Nose Ridge Upper Depth")
        SetParam("Nose Ridge Curve A")
        SetParam("Nose Tip Height")
        SetParam("Nostril Width", -50)

        SetParam("Mouth  Scale")
        SetParam("Mouth Width")
        SetParam("Mouth Height")
        SetParam("Mouth Depth")
        SetParam("Philtrum Width")
        SetParam("Philtrum Tone")
        SetParam("Lip Thin A")
     ;  SetParam("Teeth Upper Scale")
     ;  SetParam("Teeth Lower Scale")
     ;  SetParam("Teeth Upper Height")
     ;  SetParam("Teeth Lower Height")
     ;  SetParam("Teeth Upper Scale Height")
     ;  SetParam("Teeth Lower Scale Height")
     ;  SetParam("Teeth Upper Scale Width")
     ;  SetParam("Teeth Lower Scale Width")
     ;  SetParam("Teeth Upper Depth")
     ;  SetParam("Teeth Lower Depth")
     ;  SetParam("Teeth Upper Scale Depth")
     ;  SetParam("Teeth Lower Scale Depth")
     ;  SetParam("Teeth Upper Offset")
     ;  SetParam("Teeth Lower Offset")

        SetParam("Jaw  Scale")
        SetParam("Jaw Height", 0)
        SetParam("Jaw Corner Height")
        SetParam("Jaw Outer Define", 0)

        SetParam("Chin Height")
        SetParam("Chin Width", -50)
        SetParam("Chin Depth A")

        SetParam("Neck Scale")
        SetParam("Neck Length")

	CaptureScreen(SS_COORDS)
        filename := DOC_PATH . numGenerated . ".jpg"
        Convert(DOC_PATH . "screen.bmp", filename)
        numGenerated += 1
        fileHandle.close()
}

FormatTime, EndTime, T12, Time

MsgBox %StartTime% %EndTime%

; TODO: Tongue, Eyelash, Nail, All Body
