let conn = new Mongo();
let db = conn.getDB("labs");
let serverLog = db.serverLog;
let result;


// -- MAP REDUCE --

// get url and it's sum of timeSpent (sorted desc)

serverLog.mapReduce(
  function () {
    emit(this.url, this.timeSpent);
  },
  function (key, value) {
    return Array.sum(value);
  },
  { out: "query1result" }
);

result = db.query1result.find().sort( { value: -1 } )

while (result.hasNext()) {
  printjson(result.next());
}
print();


// get url and it's sum of ip's (sorted desc)

serverLog.mapReduce(
  function () {
    emit(this.url, 1);
  },
  function (key, value) {
    return Array.sum(value);
  },
  { out: "query2result" }
);

result = db.query2result.find().sort( { value: -1 } )

while (result.hasNext()) {
  printjson(result.next());
}
print();


// get url and it's sum of visits within the specified time period (sorted by url, and by visits number (desc))

serverLog.mapReduce(
  function () {
      if (this.timeStamp.localeCompare('23:00') === -1) emit(this.url, 1);
    else emit (this.url, 0);
  },
  function (key, value) {
    return Array.sum(value);
  },
  { out: "query3result" }
);

result = db.query3result.find().sort( { _id: 1, value: -1  } )

while (result.hasNext()) {
  printjson(result.next());
}
print();


// get url and it's sum of visits and sum of timeSpent (sorted by url, visits number (desc), timeSpent(desc))

serverLog.mapReduce(
  function () {
    emit(this.url, {visits: 1, timeSpent: this.timeSpent});
  },
  function (key, value) {
    let returnValue = {
      visits: 0,
      timeSpent: 0,
    };
    for (let i = 0; i < value.left; i++) {
      returnValue.visits += value.visits;
      returnValue.timeSpent += value.timeSpent;
    }
    return returnValue;
  },
  { out: "query4result" }
);

result = db.query4result.find().sort( { _id: 1, 'value.visits': -1, 'value.timeSpent': -1  } )

while (result.hasNext()) {
  printjson(result.next());
}
print();

