import re

with open('style.css', 'r') as f:
    content = f.read()

# Replace the paint swipe animation CSS block
old_css = re.search(r'/\* Paint Swipe \*/.*?\.view-panel', content, flags=re.DOTALL)

new_css = """/* Paint Swipe */
.swipe-effect { 
  position: fixed; 
  inset: 0; 
  pointer-events: none; 
  z-index: 9999; 
  display: flex;
  align-items: center;
  justify-content: center;
}
.paint-stroke {
  width: 120%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: -10%;
  transform: scaleX(0);
  transform-origin: left;
  opacity: 0;
}
.swipe-effect.active.swipe-in .paint-stroke { 
  stroke: rgba(83, 103, 245, 0.85); 
  animation: paintBrush 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
}
.swipe-effect.active.swipe-out .paint-stroke { 
  stroke: rgba(245, 158, 11, 0.85); 
  animation: paintBrush 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
}
.swipe-effect.active.swipe-error { background: rgba(239, 68, 68, 0.15); animation: flash 0.3s forwards; }

@keyframes paintBrush { 
  0% { transform: scaleX(0); opacity: 1; stroke-dasharray: 500; stroke-dashoffset: 500; } 
  40% { transform: scaleX(1); opacity: 1; stroke-dashoffset: 0; } 
  80% { transform: scaleX(1); opacity: 1; stroke-dashoffset: 0; } 
  100% { transform: scaleX(1); opacity: 0; stroke-dashoffset: 0; } 
}
@keyframes flash { 0% { opacity: 1; } 100% { opacity: 0; } }

.view-panel"""

if old_css:
    content = content.replace(old_css.group(0), new_css)
else:
    print("Could not find CSS block!")

with open('style.css', 'w') as f:
    f.write(content)
