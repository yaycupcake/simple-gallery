import json
import os

files = []

for file in os.listdir("./images"):
    if (
        file.endswith(".png")
        or file.endswith(".jpg")
        or file.endswith(".jpeg")
        or file.endswith(".gif")
    ):
        files.append(file)

file_list = {"files": files}

with open("files.js", "w") as files_js:
    files_js.write("data='[")
    json.dump(file_list, files_js)
    files_js.write("]'")
