const path= require('path')

const myPath ='C:\Users\BEST\Desktop\Node\newserver\index.html'

const  pathInfo ={
    fileName:path.basename(myPath),
    folderName:path.dirname(myPath),
    fileExtension:path.extname(myPath),
    absoluteOrNot:path.isAbsolute(myPath),
    detailInfo:path.parse(myPath),
    normalize:path.normalize(myPath)
}
console.log(pathInfo)

