"use strict";
/// <reference path="../typings/index.d.ts" />
var mongo = require("mongodb");
var config_1 = require("../config");
var db = new Promise(function (resolve, reject) {
    mongo.MongoClient.connect(config_1.default.mongoUrl, function (err, db) {
        if (err) {
            reject(err);
        }
        else {
            console.log("Connected to Mongo server at " + config_1.default.mongoUrl);
            resolve(db);
        }
    });
});
var Database = (function () {
    function Database() {
    }
    Database.prototype.collection = function (collection) {
        if (!collection)
            throw new Error("collection is undefined");
        if (!Database.Collections[collection])
            throw new Error("Collection " + collection + " is unknown");
        return this.connect()
            .then(function (db) { return db.collection(collection); });
    };
    Database.prototype.connect = function () {
        return db;
    };
    Database.Collections = {
        sessions: "sessions"
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvZGF0YS1hY2Nlc3MvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFDLDhDQUE4QztBQUMvQyxJQUFZLEtBQUssV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNqQyx1QkFBbUIsV0FBVyxDQUFDLENBQUE7QUFFL0IsSUFBSSxFQUFFLEdBQXNCLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07SUFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLEVBQ3pDLFVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDSixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWdDLGdCQUFNLENBQUMsUUFBVSxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUg7SUFLSTtJQUNBLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsVUFBa0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWMsVUFBVSxnQkFBYSxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFuQk0sb0JBQVcsR0FBRztRQUNqQixRQUFRLEVBQUUsVUFBVTtLQUN2QixDQUFDO0lBa0JOLGVBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJEOzBCQXFCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxubGV0IGRiOiBQcm9taXNlPG1vbmdvLkRiPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIG1vbmdvLk1vbmdvQ2xpZW50LmNvbm5lY3QoY29uZmlnLm1vbmdvVXJsLFxyXG4gICAgKGVyciwgZGIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gTW9uZ28gc2VydmVyIGF0ICR7Y29uZmlnLm1vbmdvVXJsfWApO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBzdGF0aWMgQ29sbGVjdGlvbnMgPSB7XHJcbiAgICAgICAgc2Vzc2lvbnM6IFwic2Vzc2lvbnNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0aW9uKGNvbGxlY3Rpb246IHN0cmluZyk6IFByb21pc2U8bW9uZ28uQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIGlmICghY29sbGVjdGlvbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29sbGVjdGlvbiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCFEYXRhYmFzZS5Db2xsZWN0aW9uc1tjb2xsZWN0aW9uXSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2xsZWN0aW9uICR7Y29sbGVjdGlvbn0gaXMgdW5rbm93bmApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KClcclxuICAgICAgICAgICAgLnRoZW4oZGIgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KCk6IFByb21pc2U8bW9uZ28uRGI+IHtcclxuICAgICAgICByZXR1cm4gZGI7XHJcbiAgICB9XHJcbn0iXX0=