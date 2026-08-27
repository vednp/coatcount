import re
import json
import sys

def parse_text(text):
    # Regex to match:
    # 1. Product code: numbers, sometimes mixed with slashes, hyphens, ampersands, or starting with "IN", "Group"
    # 2. Product name: The text following the code until we hit the first price/pack size (which is usually a number followed by .0 or Ltr/Kg)
    
    # Alternatively, just match:
    # ^(CODE)\s+(NAME)\s+(PRICES)
    
    catalog = []
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line or "PRODUCT CODE" in line or "==" in line or "INTERIORS" in line or "EXTERIORS" in line or "Nagpur Raipur" in line:
            continue
            
        # Standard line: "5967833 DN VT Velvetino Gold Base 1219.0"
        # Match code: any combination of digits, /, -, &, commas, letters (like IN, Group)
        # Match name: any string
        # Match prices: trailing numbers with .0 or similar
        
        # We can extract the name which usually starts with DN, VT, Dulux, Aquatech, etc.
        # But some are just "Group 1", "Group 2" etc.
        
        # A good heuristic: Find the FIRST sequence of words (the Name) sandwiched between the Code and the Prices.
        
        parts = line.split()
        if len(parts) < 3:
            continue
            
        # The prices are at the end, usually formatted as XXX.X or just numbers
        # Let's strip trailing numbers/floats
        while len(parts) > 1 and re.match(r'^\d+(\.\d+)?$', parts[-1]):
            parts.pop()
            
        if len(parts) < 2:
            continue
            
        # Code is usually the first part, sometimes the first few parts if separated by spaces (e.g. "58517 66-70")
        # Let's find where the name starts. Names usually have letters.
        name_start = 1
        if re.match(r'^[\d\-\/]+$', parts[1]) or parts[1] == '&' or (parts[0] == 'Group' and parts[1].isdigit()):
            name_start = 2
            if len(parts) > 2 and parts[2] == '&':
                 name_start = 4 # e.g. 123 & 456
                 
        code = " ".join(parts[:name_start])
        name = " ".join(parts[name_start:])
        
        if name and code and not code.isalpha():
             catalog.append({"c": code, "n": name})
             
    return catalog

with open('pdf_text.txt', 'r') as f:
    text = f.read()
    
catalog = parse_text(text)
with open('extracted_catalog.json', 'w') as f:
    json.dump(catalog, f, indent=2)
print(f"Extracted {len(catalog)} products")
