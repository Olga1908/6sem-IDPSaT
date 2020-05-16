db = connect("localhost:27017/lab8");

// remove all rows
db.logs.remove({})

db.logs.insertOne({URL:"https://www.youtube.com", IP:"172.217.21.233", timeStamp:  ISODate("2020-05-16T19:23:27.317Z"),timeSpent:4})
db.logs.insertOne({URL:"https://www.vk.com", IP:"172.217.21.233", timeStamp: ISODate("2020-05-16T20:23:27.317Z"),timeSpent:10})
db.logs.insertOne({URL:"https://www.google.com", IP:"172.217.21.233", timeStamp: ISODate("2020-05-16T20:20:32.317Z"),timeSpent:8})

db.logs.insertOne({URL:"https://www.my_site.com", IP:"172.217.21.234", timeStamp: ISODate("2020-05-16T21:25:27.317Z"),timeSpent:13})
db.logs.insertOne({URL:"https://www.facebook.com", IP:"172.217.21.234", timeStamp: ISODate("2020-05-16T22:23:27.317Z"),timeSpent:12})


db.logs.insertOne({URL:"https://www.facebook.com", IP:"172.217.21.234", timeStamp: ISODate("2020-05-16T22:25:27.317Z"),timeSpent:20})
db.logs.insertOne({URL:"https://www.facebook.com", IP:"172.217.21.234", timeStamp: ISODate("2020-05-16T22:27:54.317Z"),timeSpent:50})