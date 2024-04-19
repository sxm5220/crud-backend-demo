const fs = require('fs')
const path = require('path')

const pathStr = path.join('/a','/b/c','../','./d','e')
// console.log('path:'+pathStr)
const pathStr2 = path.join(__dirname,'./files/t1.txt')
console.log('path2:'+pathStr2)

fs.readFile(path.join(__dirname,'/files/tes.txt'),'utf8',function(err,data){
    if(err){
        return console.log('读取失败！')
    }
    console.log('读取成功！'+data)
})