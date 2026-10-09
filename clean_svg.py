import os

# 1. SHERO CLEAN SVG
shero_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 280" fill="none">
  <defs>
    <linearGradient id="sheroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9DCFF" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#C4A7F5" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#9333EA" stop-opacity="0.4" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5B21B6" />
      <stop offset="100%" stop-color="#3B1578" />
    </linearGradient>
  </defs>

  <!-- Purple Organic Backdrop Circle -->
  <circle cx="135" cy="140" r="92" fill="url(#sheroGrad)" />
  
  <!-- Crown Icon Floating Above -->
  <path d="M135 28 L143 42 L156 32 L151 50 L119 50 L114 32 L127 42 Z" fill="#3B1578" />
  <circle cx="135" cy="26" r="2.5" fill="#5B21B6" />
  <circle cx="114" cy="30" r="2" fill="#5B21B6" />
  <circle cx="156" cy="30" r="2" fill="#5B21B6" />

  <!-- 3D Staircase Motif -->
  <path d="M170 190 L210 190 L210 175 L190 175 L190 160 L175 160 L175 145 L160 145 L160 130 L150 130 L150 115 L170 115 Z" fill="#4C1D95" opacity="0.85" />
  <path d="M170 190 L170 230 L210 230 L210 190 Z" fill="#3B1578" opacity="0.7" />
  <path d="M190 175 L190 215 L210 215 L210 175 Z" fill="#5B21B6" opacity="0.6" />

  <!-- Woman's Silhouette Portrait -->
  <g transform="translate(30, 20)">
    <!-- Hair contour -->
    <path d="M80 60 C60 65 50 85 45 110 C40 135 42 165 48 190 C50 200 45 220 35 240 L105 240 C110 215 115 180 110 150 C105 130 95 110 90 90 C88 75 85 65 80 60 Z" fill="#1C1628" />
    <!-- Facial Profile contour -->
    <path d="M80 75 C88 75 96 82 98 92 C100 100 95 108 98 114 C100 118 106 120 108 123 C105 127 98 128 95 132 C93 138 98 145 92 152 C88 158 82 162 82 170 C82 180 88 200 90 220 L65 220 C65 190 62 160 68 130 C70 120 72 100 80 75 Z" fill="#2A203F" />
    <!-- Professional Blazer Suit -->
    <path d="M50 185 L80 165 L105 185 L125 240 L35 240 Z" fill="url(#suitGrad)" />
    <path d="M80 165 L88 210 L72 210 Z" fill="#FFFFFF" opacity="0.9" />
  </g>

  <!-- Foreground Leaf Plants -->
  <path d="M65 240 C60 210 75 190 85 180 C80 200 85 220 95 240 Z" fill="#5B21B6" />
  <path d="M55 240 C50 225 55 210 65 200 C62 215 65 230 75 240 Z" fill="#7C3AED" />
</svg>"""

with open('public/images/ideas_shero.svg', 'w', encoding='utf-8') as f:
    f.write(shero_svg)


# 2. UNSTOPPABLE BOOK CLEAN SVG
book_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none">
  <defs>
    <radialGradient id="bookGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#160E24" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="coverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D1A47" />
      <stop offset="100%" stop-color="#120921" />
    </linearGradient>
    <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4C1D95" />
      <stop offset="100%" stop-color="#2D1A47" />
    </linearGradient>
  </defs>

  <!-- Purple Ambient Glow -->
  <circle cx="160" cy="110" r="100" fill="url(#bookGlow)" />

  <!-- Stacked Books Base (Left) -->
  <g transform="translate(20, 130)">
    <rect x="10" y="30" width="110" h="14" rx="2" fill="#3B2166" />
    <rect x="12" y="32" width="106" h="10" rx="1" fill="#E5E0F0" opacity="0.9" />
    
    <rect x="5" y="14" width="115" h="15" rx="2" fill="#4C1D95" />
    <rect x="7" y="16" width="111" h="11" rx="1" fill="#FAF8F5" opacity="0.95" />
    
    <rect x="0" y="0" width="120" h="16" rx="2" fill="#2A1745" />
    <rect x="2" y="2" width="116" h="12" rx="1" fill="#EDE9F5" opacity="0.9" />
  </g>

  <!-- Main Standing 3D Book Cover (Right) -->
  <g transform="translate(130, 20)">
    <!-- Book 3D Spine -->
    <path d="M0 25 L20 0 L20 170 L0 185 Z" fill="url(#spineGrad)" />
    <!-- Spine Text Motif -->
    <text x="-100" y="13" fill="#C4B5FD" font-size="9" font-family="serif" font-weight="bold" letter-spacing="3" transform="rotate(-90)">UNSTOPPABLE</text>

    <!-- Main Front Cover -->
    <path d="M20 0 L125 15 L125 180 L20 170 Z" fill="url(#coverGrad)" stroke="#6D28D9" stroke-width="1.5" />

    <!-- Mountain Silhouette Artwork on Book Cover -->
    <path d="M20 120 L50 95 L80 115 L105 85 L125 110 L125 180 L20 170 Z" fill="#4C1D95" opacity="0.8" />
    <path d="M20 135 L60 110 L95 130 L125 105 L125 180 L20 170 Z" fill="#1C0D33" />

    <!-- Figure Silhouette Standing on Mountain Peak -->
    <path d="M72 100 C72 97 74 95 76 95 C78 95 80 97 80 100 C80 104 72 115 72 115 L84 115 C84 115 76 104 76 100 Z" fill="#F3E8FF" />

    <!-- Book Title on Cover -->
    <text x="35" y="45" fill="#FFFFFF" font-size="11" font-family="serif" font-weight="bold" letter-spacing="2">UNSTOPPABLE</text>
    <text x="42" y="160" fill="#C4B5FD" font-size="6" font-family="sans-serif" letter-spacing="1">MEENA CHHABBRIA</text>
  </g>
</svg>"""

with open('public/images/ideas_unstoppable_book.svg', 'w', encoding='utf-8') as f:
    f.write(book_svg)


# 3. SUN MOON STAR CINEMA CLEAN SVG
cinema_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 260" fill="none">
  <defs>
    <radialGradient id="skyGlow" cx="60%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E9DCFF" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#C4A7F5" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#FAF8F5" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Sky Atmospheric Glow -->
  <circle cx="180" cy="120" r="110" fill="url(#skyGlow)" />

  <!-- Crescent Moon & Sun backdrop -->
  <circle cx="200" cy="80" r="28" fill="#F3E8FF" opacity="0.9" />
  <path d="M210 60 C195 60 185 75 185 90 C185 105 195 115 210 115 C200 115 192 105 192 90 C192 75 200 60 210 60 Z" fill="#6D28D9" opacity="0.4" />

  <!-- Birds in flight -->
  <path d="M140 60 Q145 55 150 60 Q155 55 160 60" stroke="#4C1D95" stroke-width="1.5" fill="none" />
  <path d="M165 72 Q169 68 173 72 Q177 68 181 72" stroke="#4C1D95" stroke-width="1.2" fill="none" />

  <!-- Palm Tree Silhouettes (Right Edge) -->
  <g fill="#2A1745" transform="translate(225, 110)">
    <path d="M15 110 Q20 60 25 0 L20 0 Q15 60 10 110 Z" />
    <!-- Fronds -->
    <path d="M22 10 Q5 -5 -15 5 Q5 15 22 10 Z" />
    <path d="M22 10 Q35 -10 45 5 Q32 15 22 10 Z" />
    <path d="M22 10 Q10 -20 0 -30 Q10 -5 22 10 Z" />
  </g>

  <!-- Cinema Equipment: Tripod & Camera (Center-Left) -->
  <g transform="translate(60, 80)">
    <!-- Tripod Legs -->
    <line x1="60" y1="70" x2="20" y2="170" stroke="#1C0D33" stroke-width="4" stroke-linecap="round" />
    <line x1="60" y1="70" x2="60" y2="170" stroke="#1C0D33" stroke-width="4" stroke-linecap="round" />
    <line x1="60" y1="70" x2="100" y2="170" stroke="#1C0D33" stroke-width="4" stroke-linecap="round" />
    <line x1="30" y1="130" x2="90" y2="130" stroke="#4C1D95" stroke-width="2" />

    <!-- Camera Body -->
    <rect x="35" y="30" width="55" h="40" rx="4" fill="#2A1745" stroke="#6D28D9" stroke-width="1.5" />
    
    <!-- Twin Film Reels Top -->
    <circle cx="45" cy="18" r="16" fill="#1C0D33" stroke="#8B5CF6" stroke-width="2" />
    <circle cx="45" cy="18" r="5" fill="#C4B5FD" />
    
    <circle cx="75" cy="18" r="16" fill="#1C0D33" stroke="#8B5CF6" stroke-width="2" />
    <circle cx="75" cy="18" r="5" fill="#C4B5FD" />

    <!-- Matte Box / Lens Hood -->
    <path d="M90 35 L120 25 L120 75 L90 65 Z" fill="#1C0D33" stroke="#6D28D9" stroke-width="1.5" />
    <circle cx="90" cy="50" r="12" fill="#5B21B6" />
  </g>

  <!-- Movie Clapperboard (Foreground Right) -->
  <g transform="translate(170, 160)">
    <rect x="0" y="15" width="50" h="40" rx="3" fill="#1C0D33" stroke="#8B5CF6" stroke-width="1.5" />
    
    <!-- Top Clapper Stick Rotated -->
    <g transform="rotate(-12, 0, 15)">
      <rect x="0" y="0" width="50" h="12" fill="#3B1578" />
      <polygon points="5,0 12,0 7,12 0,12" fill="#FAF8F5" />
      <polygon points="20,0 27,0 22,12 15,12" fill="#FAF8F5" />
      <polygon points="35,0 42,0 37,12 30,12" fill="#FAF8F5" />
    </g>
  </g>
</svg>"""

with open('public/images/ideas_sun_moon_star.svg', 'w', encoding='utf-8') as f:
    f.write(cinema_svg)

print('All 3 clean vector SVG illustrations created successfully in public/images/!')
