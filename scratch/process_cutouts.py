from PIL import Image
import os
from rembg import remove

base_dir = r'c:\Users\dolph\OneDrive\meena-chabbria-portfolio\public\images'

# 1. Process Hero / Next Chapter Seated Photo
hero_p = os.path.join(base_dir, 'hero_meena_authentic.png')
im_hero = Image.open(hero_p).convert('RGBA')
out_hero = remove(im_hero)
out_hero_path = os.path.join(base_dir, 'hero_meena_cutout_authentic.png')
out_hero.save(out_hero_path, 'PNG')
print('Saved', out_hero_path)

# 2. Process Intro Portrait Photo
intro_p = os.path.join(base_dir, 'intro_meena_authentic.jpg')
im_intro = Image.open(intro_p).convert('RGBA')
out_intro = remove(im_intro)
out_intro_path = os.path.join(base_dir, 'intro_meena_cutout_authentic.png')
out_intro.save(out_intro_path, 'PNG')
print('Saved', out_intro_path)
