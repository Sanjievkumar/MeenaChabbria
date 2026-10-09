from PIL import Image
import os

base_dir = r'c:\Users\dolph\OneDrive\meena-chabbria-portfolio\public\images'
src_path = os.path.join(base_dir, 'meena_portrait_2j.jpg')

im = Image.open(src_path)
w, h = im.size
print("Original size:", w, h)

# meena_portrait_2j is (1500, 1000)
# We want a vertical 4:5 crop centered on Meena
# Height is 1000, so width for 4:5 ratio is 800.
crop_w = int(h * 0.8) # 800
left = (w - crop_w) // 2
right = left + crop_w
top = 0
bottom = h

cropped = im.crop((left, top, right, bottom))
out_path = os.path.join(base_dir, 'intro_meena_solo.jpg')
cropped.save(out_path, 'JPEG', quality=95)
print("Saved cropped solo portrait to:", out_path, "Size:", cropped.size)
