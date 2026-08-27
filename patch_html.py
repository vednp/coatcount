with open('index.html', 'r') as f:
    content = f.read()

svg_brush = """
    <div id="swipe-overlay" class="swipe-effect">
      <svg class="paint-stroke" viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M10,75 Q 125,10 250,75 T 490,75" stroke-width="80" stroke-linecap="round" fill="none" />
      </svg>
    </div>
"""

content = content.replace('<div id="swipe-overlay" class="swipe-effect"></div>', svg_brush)

with open('index.html', 'w') as f:
    f.write(content)

