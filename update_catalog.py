import json
import re

def parse_text(text):
    catalog = []
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line or "PRODUCT CODE" in line or "==" in line or "INTERIORS" in line or "EXTERIORS" in line:
            continue
            
        parts = line.split()
        if len(parts) < 3:
            continue
            
        while len(parts) > 1 and re.match(r'^\d+(\.\d+)?$', parts[-1]):
            parts.pop()
            
        if len(parts) < 2:
            continue
            
        name_start = 1
        if re.match(r'^[\d\-\/]+$', parts[1]) or parts[1] == '&' or (parts[0] == 'Group' and parts[1].isdigit()):
            name_start = 2
            if len(parts) > 2 and parts[2] == '&':
                 name_start = 4
                 
        code = " ".join(parts[:name_start])
        name = " ".join(parts[name_start:])
        
        if name and code and not code.isalpha():
             catalog.append({"c": code, "n": name})
             
    return catalog

with open('pdf_text.txt', 'r') as f:
    catalog_new = parse_text(f.read())

with open('app.js', 'r') as f:
    app_js = f.read()

# Extract existing catalog to avoid duplicates
existing_codes = set()
existing_match = re.search(r'const RAW_CATALOG = \[.*?\];', app_js, flags=re.DOTALL)
if existing_match:
    for line in existing_match.group(0).split('\n'):
        match = re.search(r'c:\s*"([^"]+)"', line)
        if match:
            existing_codes.add(match.group(1))

# Append new ones
new_lines = []
for item in catalog_new:
    if item['c'] not in existing_codes:
        new_lines.append(f'  {{ c: "{item["c"]}", n: "{item["n"]}" }},')
        existing_codes.add(item['c'])

if new_lines:
    insertion_point = existing_match.group(0).rfind('];')
    updated_catalog = existing_match.group(0)[:insertion_point] + "\n".join(new_lines) + "\n" + existing_match.group(0)[insertion_point:]
    app_js = app_js.replace(existing_match.group(0), updated_catalog)
    with open('app.js', 'w') as f:
        f.write(app_js)
    print(f"Added {len(new_lines)} products to catalog")
else:
    print("No new products found")

