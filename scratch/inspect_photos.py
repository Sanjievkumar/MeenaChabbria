from PIL import Image
import os

b_dir = r'c:\Users\dolph\OneDrive\meena-chabbria-portfolio\public\images'
files = os.listdir(b_dir)

print("Files in public/images:")
for f in sorted(files):
    p = os.path.join(b_dir, f)
    if os.path.isfile(p):
        try:
            im = Image.open(p)
            print(f"{f:35s} | Size: {str(im.size):12s} | Mode: {im.mode}")
        except Exception as e:
            print(f"{f:35s} | Error opening image")
