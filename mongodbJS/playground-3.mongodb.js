// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('dnsysDatabase');

// var list = [{_id: 1, name: "a", sex: 1, age: 1},{_id: 2, name: "b", sex: 1, age: 2},{_id: 3, name: "c", sex: 2, age: 3}];
// // Create a new document in the collection.
// list.forEach((item)=>{
//     db.getCollection('dnsys_users').insertOne(item);
// })

// db.getCollection('dnsys_users').insertOne({_id: 4, name: "d", sex: 1, age: 4});
//统计男生、女生总人数
//db.dnsys_users.aggregate([{$group:{_id:"$sex",result:{$sum:1}}}])

//学生总数和平均年龄
//db.dnsys_users.aggregate({$group:{_id:null,total_num:{$sum:1},avg_age:{$avg:"$age"}}})

//查询男生、女生人数，按人数升序
// db.dnsys_users.aggregate([{$group:{_id:"$sex",result:{$sum:1}}},{$sort: {result: 1}}])

//name改成user_name
