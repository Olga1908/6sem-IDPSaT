let conn = new Mongo();
let db = conn.getDB("labs");
let serverLog = db.serverLog;
let result;


// -- FIND --

// get sorted url's

result = serverLog
  .find({}, { _id: 0, url: 1 })
  .sort({ url: 1 });

while (result.hasNext()) {
  printjson(result.next());
}
print();


// get sorted ip's with the specified url

result = serverLog
  .find(
    { url: "https://discovery.com/tortor/id/nulla/ultrices.js" },
    { _id: 0, ip: 1 }
  )
  .sort({ ip: 1 });

while (result.hasNext()) {
  printjson(result.next());
}
print();


// get sorted url's within the specified time period

result = serverLog
  .find(
    { timeStamp: { $gt: '12:00', $lt: '23:59' } },
    { _id: 0, url: 1 }
  )
  .sort({ url: 1 });

while (result.hasNext()) {
  printjson(result.next());
}
print()

// get sorted url's with the specified ip

result = serverLog
  .find(
    { ip: "1.98.215.222" },
    { _id: 0, url: 1 }
  )
  .sort({ url: 1 });

while (result.hasNext()) {
  printjson(result.next());
}
print();
