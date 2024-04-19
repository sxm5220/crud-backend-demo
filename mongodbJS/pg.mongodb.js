// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('dnsys');
let dblogin = db.getCollection('dnsys_login');


// find document in the collection.
//db.getCollection('common_zone_number').find(); //查找

//insert 被弃用了，使用insertOne，insertMany，bulkWrite
// db.getCollection('dnsys_login').insert({name:"dnsys1111",age:20,zone_number:"CN"}); //插入单条数据
//db.getCollection('dnsys_login').insert([{name:"dnsys03",age:10,zone_number:"CN"},{name:"dnsys04",age:120,zone_number:"CN"}]);

// db.getCollection('dnsys_login').insertMany([{name:"dnsys01",age:30},{name:"dnsys02",age:40}]);

//插入多条，循环插入
// let array = [{name:"dnsys09",num:"10",zone:"A1"},{name:"dnsys101",num:"10",zone:"A2"}];
// array.forEach(item => {
//     // console.log(item.zone_number);
//     dblogin.insertOne(item);
// });


//删除所有 remove被弃用了
// dblogin.remove({});
//删除单条
// dblogin.remove({"name": "dnsys09"});
// dblogin.remove({"zone_number": "CN"});


// dblogin.deleteOne({"zone_number": "CN6"});
// dblogin.deleteMany([{"zone_number": "CN10"},{"zone_number": "CN9"}]);
// db.dnsys_login.deleteMany({"age":120000});



//查看所有数据
// dblogin.find({"name": {$in : ["dnsys10","dnsys101"]}});
//$lt < ; $lte <=
// dblogin.find({"age":{$lt : 20}});
//$gt > ; $gte >= 
// dblogin.find({"age":{$gt : 120}});
// 100<age<1000
// dblogin.find({"age":{$gt : 100, $lt : 1000}});
//$ne 不等于
// dblogin.find({"age":{$ne:130}});
//$or 或者
// dblogin.find({$or:[{"age":{$gt:3000}},{"name":"dnsys101"}]});
// dblogin.find({"age":{$lt:2000},$or:[{"name":"dnsys101"}]});
//模糊查询 //
// dblogin.find({"name":/09/});
//排序 sort 1正序，-1倒序
// dblogin.find().sort({"age":-1});
// dblogin.find({"num":{$type:'string'}});

// 分页查询 skip 跳过几条数据，limit显示几条数据
//    0           3           6           9        12
//(1-1) * 3   (2-1) * 3   (3-1) * 3   (4-1) * 3  (5-1) * 3
// dblogin.find().skip(3).limit(3);
//去重
// dblogin.distinct("age");

//保留原始使用$set ;更新 $set 需要更新的数据；如果更新全部数据需要使用 multi:true
//dblogin.update({"name":"dnsys10"},{$set:{"name":"dnsys1110"}});
// dblogin.update({"age":10},{$set:{"age":120000}},{multi:true,upsert:true});

//创建索引
// db.dnsys_login.createIndex({name:1});
// db.dnsys_login.getIndexes();
//删除索引
// db.dnsys_login.dropIndexes();
// db.dnsys_login.getIndexes();
//索引大小
// db.dnsys_login.totalIndexSize();
//删除指定的索引
// db.dnsys_login.dropIndex('name_index');
// db.dnsys_login.createIndex({name:1},{name:"name_index"});
//aggregate聚合查询； $match 匹配

// db.dnsys_login.aggregate([{$match:{size:"large"}},{$group: {
//   _id: "$name",
//   totalQuantity: {
//     $sum: {$multiply:["$price","$quantity"]}
//   }
// }}]);
// [
//     {
//       "_id": "Pepperoni",
//       "totalQuantity": 630
//     },
//     {
//       "_id": "Cheese",
//       "totalQuantity": 140
//     }
//   ]

// db.dnsys_login.aggregate([{$match: {
//   "date":{$gte:new ISODate("2020-01-30"),$lt: new ISODate("2022-01-30")}
// }},{$group: {
//   _id: {$dateToString:{format:"%Y-%m-%d",date:"$date"}},
//   totalOrderValue: {
//     $sum: {$multiply:["$price","$quantity"]}
//   },
//   averageOrderQuantity:{$avg:"$quantity"}
// }},{$sort: {
//   totalOrderValue: -1
// }}]);

// db.dnsys_login.find();
// [
//     {
//     "_id": "2022-01-12",
//     "totalOrderValue": 790,
//     "averageOrderQuantity": 30
//   },
//   {
//     "_id": "2021-03-13",
//     "totalOrderValue": 770,
//     "averageOrderQuantity": 15
//   },
//   {
//     "_id": "2021-03-17",
//     "totalOrderValue": 630,
//     "averageOrderQuantity": 30
//   },
//   {
//     "_id": "2021-01-13",
//     "totalOrderValue": 350,
//     "averageOrderQuantity": 10
//   }
// ]
//查询size为small、medium的所有数据
// db.dnsys_login.find({size:{$in:["small","medium"]}});
// db.dnsys_login.find({name:{$in:["Pepperoni","Cheese"]}});
// db.dnsys_login.find({});
// db.dnsys_login.find({rated:{$in:["PG","PG-13"]}});
//db.dnsys_login.find({year:2018,$or:[{"awards.wins":{$gte:5}},{genres:"Drama"}]});
// db.dnsys_login.updateOne({title:"Tag"},{$set:{type:"movieeeee"}},{$currentDate:{lastUpdated:true}});
// db.dnsys_login.updateMany({title:"Tag"},{$set:{runtime:102222,year:11111}})
// db.dnsys_login.replaceOne({"title": "Tag"},{"title": "Tagss"})
// db.dnsys_login.findOne({"title": "Tagss"})
// db.dnsys_login.deleteOne({title:"Tagss"});
// db.dnsys_login.deleteMany({});
// db.dnsys_login.deleteOne({year:1982})
/*db.dnsys_user_info.insertOne({
    fullplot: 'In a cyberpunk vision of the future, man has developed the technology to create replicants, human clones used to serve in the colonies outside Earth but with fixed lifespans. In Los Angeles, 2019, Deckard is a Blade Runner, a cop who specializes in terminating replicants. Originally in retirement, he is forced to re-enter the force when four replicants escape from an off-world colony to Earth.',
    imdb: { rating: 8.2, votes: 419589, id: 83658 },
    year: 1982,
    plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
    genres: [ 'Sci-Fi', 'Thriller' ],
    rated: 'R',
    metacritic: 88,
    title: 'Blade Runner',
    lastupdated: '2015-09-04 00:05:51.990000000',
    languages: [ 'English', 'German', 'Cantonese', 'Japanese', 'Hungarian' ],
    writers: [
      'Hampton Fancher (screenplay)',
      'David Webb Peoples (screenplay)',
      'Philip K. Dick (novel)'
    ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 4, numReviews: 331213, meter: 91 },
      dvd: '1997-08-27T00:00:00.000Z',
      critic: { rating: 8.5, numReviews: 102, meter: 90 },
      lastUpdated: '2015-09-12T17:48:21.000Z',
      consensus: "Misunderstood when it first hit theaters, the influence of Ridley Scott's mysterious, neo-noir Blade Runner has deepened with time. A visually remarkable, achingly human sci-fi masterpiece.",
      rotten: 10,
      production: 'Warner Bros. Pictures',
      fresh: 92
    },
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX677_AL_.jpg',
    num_mflix_comments: 1,
    released: '1982-06-25T00:00:00.000Z',
    awards: {
      wins: 13,
      nominations: 15,
      text: 'Nominated for 2 Oscars. Another 11 wins & 15 nominations.'
    },
    countries: [ 'USA', 'Hong Kong', 'UK' ],
    cast: [
      'Harrison Ford',
      'Rutger Hauer',
      'Sean Young',
      'Edward James Olmos'
    ],
    directors: [ 'Ridley Scott' ],
    runtime: 117
  })*/

//聚合查询
// db.dnsys_user_info.aggregate({$project:{_id:0,imdb:1,title:1,year:1,plot:1,languages:1}})
//$unwind拆解数组
// db.dnsys_user_info.aggregate({$unwind:"$genres"})

//db.dnsys_user_info.aggregate({$group:{_id:"$genres",averageGenreRating:{$avg:"$tomatoes.rotten"}}})
// db.dnsys_user_info.aggregate({$sort:{averageGenreRating:-1}})
// db.dnsys_login.find({})

 //dblogin.update({},{$set:{"icon_path":"https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}},false,true)

 db.dnsys_move.update({"_id":"60d0bdcae00251fb5617b2e1"},{$set:{"title":"asasa"}})

 db.getCollection('dnsys_move').aggregate({
  $project: {
    title: 1,
    tagline: 1,
    imdb_id: 1,
    release_date: 1,
  },
  
});



