import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace OCR_VARIANTS
old_variants = re.search(r'const OCR_VARIANTS = \[.*?\];', content, flags=re.DOTALL)
new_variants = """const OCR_VARIANTS = [
  {
    name: "dotted-optimized",
    dotRadius: 2,
    blurRadius: 2,
    offset: 15,
    finalDilate: 1,
    adaptive: true,
  }
];"""
content = content.replace(old_variants.group(0), new_variants)

# Replace psmModes in recognizeCanvas
old_psm = 'const psmModes = ["7", "8", "13"];'
new_psm = 'const psmModes = ["7"];'
content = content.replace(old_psm, new_psm)

# Let's also add the paint-swipe CSS class logic in triggerFeedback or confirmScan.
# The user wants "a paint-swipe confirmation animation on a successful scan"
# Wait, let's do CSS and JS edits carefully.

with open('app.js', 'w') as f:
    f.write(content)

