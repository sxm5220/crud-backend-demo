const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'/files/index.html'),'utf8',function(err,data){
    if(err) return console.log('读取Html文件失败！'+ err.message)
    resolveCSS(data)
    resolveJS(data)
})

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err) return console.log('写入css样式文件失败！'+ err.message)
        console.log('写入css样式文件成功！')
    })
}
function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err) return console.log('写入JaveScript脚本失败！'+ err.message)
        console.log('写入JaveScript脚本成功！')
    })
}

