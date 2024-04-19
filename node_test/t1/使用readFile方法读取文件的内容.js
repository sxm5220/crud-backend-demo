const fs = require('fs')
//__dirname当前文件所处的目录
fs.writeFile(__dirname + '/files/tes1.txt','abcAAA',function(err){
    if(err){
        return console.log('文件写入失败！' + err)
    }
    console.log('文件写入成功！')
})

fs.readFile(__dirname + '/files/tes1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！'+ err.message)
    }
    console.log('文件读取成功！'+ dataStr)
})