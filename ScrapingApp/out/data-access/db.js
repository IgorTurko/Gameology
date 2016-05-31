"use strict";
/// <reference path="../typings/index.d.ts"/>
var mongodb_1 = require("mongodb");
var config_1 = require("../config");
var db = new Promise(function (resolve, reject) {
    mongodb_1.MongoClient.connect(config_1.default.mongoUrl, function (err, db) {
        if (err) {
            reject(err);
        }
        else {
            resolve(db);
        }
    });
});
var Database = (function () {
    function Database() {
    }
    Database.prototype.connect = function () {
        return db;
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvZGF0YS1hY2Nlc3MvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE2QztBQUM3Qyx3QkFBZ0MsU0FBUyxDQUFDLENBQUE7QUFDMUMsdUJBQW1CLFdBQVcsQ0FBQyxDQUFBO0FBRy9CLElBQUksRUFBRSxHQUFnQixJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO0lBQzlDLHFCQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDekMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSDtJQUNJO0lBQ0EsQ0FBQztJQUVPLDBCQUFPLEdBQWY7UUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBEOzBCQU9DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5pbXBvcnQgeyBEYiwgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcblxyXG5sZXQgZGI6IFByb21pc2U8RGI+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgTW9uZ29DbGllbnQuY29ubmVjdChjb25maWcubW9uZ29VcmwsIChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdCgpOiBQcm9taXNlPERiPiB7XHJcbiAgICAgICAgcmV0dXJuIGRiO1xyXG4gICAgfVxyXG59Il19