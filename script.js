const fileList = JSON.parse(data)

const files = fileList[0].files

const d = document

const gallery = d.getElementById('gallery')

files.forEach(file => {
 let filePath = `images/${file}`
 let img = document.createElement('img')
 img.setAttribute('src', filePath)
 let imgLink = d.createElement('a')
 imgLink.setAttribute('href', filePath)
 imgLink.appendChild(img)
 gallery.appendChild(imgLink)
});
