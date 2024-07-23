import os

def generate_sidebar(dir_path, output_file):
    def traverse_directory(current_path, indent_level):
        sidebar_contents = []
        for item in sorted(os.listdir(current_path)):
            if item.startswith('_'):
                continue
            item_path = os.path.join(current_path, item)
            item_caption = get_name(item)
            if os.path.isdir(item_path):
                if has_same_name_in_folder(item_path):
                    relative_path = os.path.relpath(item_path, dir_path).replace("\\", "/")
                    sidebar_contents.append('  ' * indent_level + f"* [{item_caption}]({relative_path}/{item}.md)\n")
                else:
                    sidebar_contents.append('  ' * indent_level + f"* {item_caption}\n")
                sidebar_contents+=traverse_directory(item_path, indent_level + 1)
            elif item.endswith('.md'):
                if get_name(item) != get_name(current_path):
                    relative_path = os.path.relpath(item_path, dir_path).replace("\\", "/")
                    sidebar_contents.append('  ' * indent_level + f"* [{item_caption}]({relative_path})\n")
        return sidebar_contents

    sidebar_contents = traverse_directory(dir_path, 0)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("<!-- docs/_sidebar.md -->\n\n* [首页](/)\n")
        f.writelines(sidebar_contents)

def has_same_name_in_folder(folder_path):
    for item in os.listdir(folder_path):
        return get_name(item) == get_name(os.path.basename(folder_path))

def get_name(filepath):
    filename = os.path.basename(filepath)
    fullname = os.path.splitext(filename)[0]
    return '_'.join(fullname.split('_')[1:]) if '_' in fullname else fullname

generate_sidebar("docs", "docs/_sidebar.md")
