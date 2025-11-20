import os

target_dir = "src/pages/blog"
search_str_1 = "#10B981"
search_str_2 = "#10b981"
replace_str = "var(--color-success)"

# Strings that indicate a line should be SKIPPED (JS variables, charts)
skip_indicators = [
    "const brandColors",
    "midBlue:",
    "backgroundColor: [",
    "borderColor: [",
    "hoverBackgroundColor: ["
]

count = 0

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".astro") or file.endswith(".jsx") or file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                lines = f.readlines()
            
            new_lines = []
            modified = False
            for line in lines:
                if search_str_1 in line or search_str_2 in line:
                    # Check if line contains any skip indicator
                    should_skip = False
                    for indicator in skip_indicators:
                        if indicator in line:
                            should_skip = True
                            break
                    
                    if not should_skip:
                        line = line.replace(search_str_1, replace_str)
                        line = line.replace(search_str_2, replace_str)
                        modified = True
                        count += 1
                new_lines.append(line)
            
            if modified:
                with open(filepath, "w") as f:
                    f.writelines(new_lines)
                print(f"Modified {filepath}")

print(f"Total replacements: {count}")
