import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace OCR_VARIANTS
old_variants = re.search(r'const OCR_VARIANTS = \[.*?\];', content, flags=re.DOTALL)
new_variants = """const OCR_VARIANTS = [
  {
    name: "adaptive-strong",
    dotRadius: 2,
    blurRadius: 4,
    offset: 12,
    finalDilate: 2,
    adaptive: true,
  },
  {
    name: "otsu-strong",
    dotRadius: 3,
    blurRadius: 3,
    offset: 0,
    finalDilate: 2,
    adaptive: false,
  },
  {
    name: "adaptive-medium",
    dotRadius: 2,
    blurRadius: 3,
    offset: 10,
    finalDilate: 1,
    adaptive: true,
  },
  {
    name: "otsu-medium",
    dotRadius: 2,
    blurRadius: 2,
    offset: 0,
    finalDilate: 2,
    adaptive: false,
  },
  {
    name: "adaptive-light",
    dotRadius: 1,
    blurRadius: 2,
    offset: 8,
    finalDilate: 1,
    adaptive: true,
  }
];"""
content = content.replace(old_variants.group(0), new_variants)

# Replace recognizeCanvas function entirely
old_recognize = re.search(r'async function recognizeCanvas\(canvas\) \{.*?return \{\n    text: bestText,\n    matched: matchCatalogCode\(bestText\),\n    psm: null,\n  \};\n\}', content, flags=re.DOTALL)

new_recognize = """async function recognizeCanvas(canvas) {
  // Ordered 13, 8, 7. PSM 13 (raw line) and 8 (single word) are generally much better for dotted numeric matrices than 7.
  const psmModes = ["13", "8", "7"];

  let bestText = "";

  for (const psm of psmModes) {
    // Only set page seg mode inside the loop to avoid heavy reset overhead if possible,
    // but Tesseract.js setParameters is usually fine as long as it doesn't trigger language reload.
    await ocrWorker.setParameters({
      tessedit_pageseg_mode: psm,
      tessedit_char_whitelist: "0123456789",
      classify_bln_numeric_mode: "1",
      load_system_dawg: "0",
      load_freq_dawg: "0",
      user_defined_dpi: "300",
    });

    const result = await ocrWorker.recognize(canvas);

    const text = result?.data?.text || "";

    if (text.length > bestText.length) {
      bestText = text;
    }

    const matched = matchCatalogCode(text);

    if (matched) {
      return {
        text,
        matched,
        psm,
      };
    }
  }

  return {
    text: bestText,
    matched: matchCatalogCode(bestText),
    psm: null,
  };
}"""

if old_recognize:
    content = content.replace(old_recognize.group(0), new_recognize)
else:
    print("WARNING: Could not find recognizeCanvas in app.js")

with open('app.js', 'w') as f:
    f.write(content)

