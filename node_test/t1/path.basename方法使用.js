const path = require('path')

const fpath = '/a/b/c/index.html'
const fullName = path.basename(fpath)
const fullName2 = path.basename(fpath,'.html')
//扩展名
const fullName3 = path.extname(fpath)
console.log('fullName:'+fullName)
console.log('fullName2:'+fullName2)
console.log('fullName3:'+fullName3)