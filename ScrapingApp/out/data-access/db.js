"use strict";
/// <reference path="../typings/index.d.ts"/>
var mongodb_1 = require("mongodb");
var db = new Promise(function (res, rej) {
    mongodb_1.MongoClient;
});
var Database = (function () {
    function Database() {
    }
    Database.prototype.connect = function () {
        return db;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvZGF0YS1hY2Nlc3MvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFDLDZDQUE2QztBQUM5Qyx3QkFBZ0MsU0FBUyxDQUFDLENBQUE7QUFJMUMsSUFBSSxFQUFFLEdBQWdCLElBQUksT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdkMscUJBQVcsQ0FBQTtBQUNmLENBQUMsQ0FBQyxDQUFDO0FBRUg7SUFDSTtJQUNBLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxnQkFBUSxXQU9wQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuaW1wb3J0IHsgRGIsIE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5cclxubGV0IGRiOiBQcm9taXNlPERiPiA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgTW9uZ29DbGllbnRcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KCk6IFByb21pc2U8RGI+IHtcclxuICAgICAgICByZXR1cm4gZGI7XHJcbiAgICB9XHJcbn0iXX0=