import os
import sys
import shutil

rootdir = sys.argv[1]

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        if file == "Face.jpg":
            print(os.path.join(subdir, file))
            dstSub = os.path.split(subdir)[-1]
            dst = os.path.join(sys.argv[2], dstSub, file)
            print("dst is:"+ dst)
            dstDir = os.path.dirname(dst)
            if os.path.exists(dstDir):
              shutil.copy2(os.path.join(subdir, file), dst)
