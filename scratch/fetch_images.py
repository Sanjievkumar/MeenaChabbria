import urllib.request
import re

url = 'https://meenachabbria.com/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https?://[^\s"\'\>]+\.(?:png|jpg|jpeg|webp)', html)
        unique_urls = sorted(list(set(matches)))
        print("Found", len(unique_urls), "image URLs:")
        for u in unique_urls:
            print(u)
except Exception as e:
    print("Error:", e)
