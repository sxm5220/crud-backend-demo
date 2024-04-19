const age = 20
module.exports.userName = "Symon"
module.exports.sayHello = function(){
    console.log('Hello')
}
module.exports.age = age

//module.exports 指向一个全新的对象
module.exports = {
    userName: "等等",
    sayHello() {
        console.log('你好')
    }
}