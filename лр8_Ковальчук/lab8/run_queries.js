function show(query) {
    if (Array.isArray(query)) {
        printjson(query);
        return;
    }
    while (query.hasNext()) {
        printjson(query.next());
    }
}

function hr() {
    print("\n" + "=======================" + "\n");
}

function find_logs_by_url(url_name) {
    return db.logs.distinct("IP", { URL: url_name }, { IP: 1 });
}

function find_urls_in_interval(first, second) {
    return db.logs.distinct("URL", { timeStamp: { $gte: first, $lte: second } }, { URL: 1 });
}

function find_urls_by_ip(ip) {
    return db.logs.distinct("URL", { IP: ip }, { URL: 1 });
}

db = connect("localhost:27017/lab8");

print("Выполним необходие запросы к записям логирования");

// Показать всю коллекцию
show(db.logs.find());
hr();

print("1.1) Уникальный и упорядоченный список URL.");
show(db.logs.distinct("URL").sort());
hr();

print("1.2) Упорядоченный список IP-адресов пользователей, посетивших ресурс с заданным URL (https://www.youtube.com).");
show(find_logs_by_url("https://www.youtube.com"))
hr();

print("1.3) Упорядоченный список URL ресурсов, посещенных в заданный временной период [2020-05-16T19:23:27.317Z - 2020-05-16T20:23:27.317Z].");
show(find_urls_in_interval(ISODate("2020-05-16T19:23:27.317Z"), ISODate("2020-05-16T20:23:27.317Z")));
hr();

print("1.4) Упорядоченный список URL ресурсов, посещенных пользователем с заданным IP-адресом (172.217.21.233).");
show(find_urls_by_ip("172.217.21.233"))
hr();

print("2.1) Cписок URL ресурсов с указанием суммарной длительности посещения каждого ресурса, упорядоченный по убыванию.");
var emit1 = function () { emit(this.URL, this.timeSpent); }
var red1 = function (key, values) { return Array.sum(values) }
db.logs.mapReduce(emit1, red1, { out: "output" });
show(db.output.find().sort({value: -1}));
hr();

print("2.2) Cписок URL ресурсов с указанием суммарного количества посещений каждого ресурса, упорядоченный по убыванию.");
var emit2 = function () { emit(this.URL, 1); }
db.logs.mapReduce(emit2, red1, { out: "output" });
show(db.output.find().sort({value: -1}));
hr();


print("2.3) Cписок URL ресурсов с указанием количества посещений каждого ресурса в день за заданный период, упорядоченный URL ресурса и убыванию количества посещений.")
db.logs.mapReduce(emit2, red1, { query: { timeStamp: { $gte: ISODate("2020-05-16T20:23:27.317Z"), $lte: ISODate("2020-05-16T22:27:54.317Z") } }, out: "output" });
show(db.output.find().sort({ "value": -1 }))
hr();

print("2.4) Cписок IP-адресов c указанием суммарного количества и суммарной длительности посещений ресурсов, упорядоченный по адресу, убыванию количества и убыванию длительности.");
var emit4 = function () { emit(this.URL, { connections: 1, timeSpent: this.timeSpent }); }
var red4 = function (key, values) {
    connections_val = 0;
    time_val = 0;
    for (i = 0; i < values.length; i++) {
        connections_val += values[i].connections;
        time_val += values[i].timeSpent;
    }
    return { connections: connections_val, time: time_val };
}
db.logs.mapReduce(emit4, red4, { out: "output" });
show(db.output.find().sort({ "value.connections": -1, "value.timeSpent": -1 }))