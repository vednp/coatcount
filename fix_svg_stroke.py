with open('style.css', 'r') as f:
    css = f.read()

css = css.replace('.paint-stroke {\n', '.paint-stroke {\n  stroke-dasharray: 1000;\n')

with open('style.css', 'w') as f:
    f.write(css)
