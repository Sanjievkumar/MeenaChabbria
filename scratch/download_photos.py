import urllib.request
import os

images = {
    'hero_meena_authentic.png': 'https://meenachabbria.com/wp-content/uploads/2023/03/MEENA_HERO-black-glod-min.png',
    'grey_hero_authentic.png': 'https://meenachabbria.com/wp-content/uploads/2023/02/GREY_HERO-min.png',
    'intro_meena_authentic.jpg': 'https://meenachabbria.com/wp-content/uploads/2023/02/6Z9A5143-2-min.jpg',
    'meena_portrait_2j.jpg': 'https://meenachabbria.com/wp-content/uploads/2023/02/2J6A2336-2-min.jpg',
    'meena_wa_portrait.jpg': 'https://meenachabbria.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-15-at-16.41.10.jpg',
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

dest_dir = r'c:\Users\dolph\OneDrive\meena-chabbria-portfolio\public\images'

for name, url in images.items():
    dest_path = os.path.join(dest_dir, name)
    print(f"Downloading {name} from {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest_path, 'wb') as f:
            f.write(resp.read())
        print(f"Successfully saved {dest_path}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
