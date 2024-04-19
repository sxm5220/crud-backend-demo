const fs = require('fs')

const path1 = './files/t1.txt'
// const path2 = '/Users/songxiaoming/Desktop/node_test/files/t1.txt'
fs.readFile(path1,'utf8',function(error,data){
    if(error){
        return console.log('文件读取失败！' + error.message)
    }
    const arrOld = data.split(' ')
    const arrNew = []
    arrOld.forEach(item=>arrNew.push(item.replace('=',':')))
    const newStr = arrNew.join('\r\n')

    fs.writeFile('./files/tes.txt',newStr,function(error){
        if(error){
            return console.log('写入文件失败！'+error.message)
        }
    })
    console.log('文件写入成功！')
})