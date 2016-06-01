/// <reference path="../../typings/index.d.ts" />
"use strict";
var db_1 = require("../../data-access/db");
var MongoAuthenticationTokenStorage = (function () {
    function MongoAuthenticationTokenStorage(db) {
        this.db = db;
        if (!db)
            throw new Error("db is undefined");
    }
    MongoAuthenticationTokenStorage.prototype.find = function (authenticationToken) {
        if (!authenticationToken)
            throw new Error("authenticationToken is undefined");
        return this.db
            .collection(db_1.default.Collections.sessions)
            .then(function (c) { return new Promise(function (resolve, reject) {
            c.find({ token: authenticationToken })
                .limit(1)
                .next(function (err, doc) {
                console.dir(doc);
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
        }); });
    };
    MongoAuthenticationTokenStorage.prototype.save = function (authenticationInfo) {
        if (!authenticationInfo)
            throw new Error("authenticationInfo is undefined");
        return this.db
            .collection(db_1.default.Collections.sessions)
            .then(function (c) { return c.updateOne({
            token: authenticationInfo.token
        }, authenticationInfo, {
            upsert: true
        }); })
            .then(function (res) {
            console.dir(res);
            return authenticationInfo;
        });
    };
    MongoAuthenticationTokenStorage.prototype.remove = function (authenticationToken) {
        if (!authenticationToken)
            throw new Error("authenticationToken is undefined");
        return this.db
            .collection(db_1.default.Collections.sessions)
            .then(function (c) { return c.deleteOne({ token: authenticationToken }); });
    };
    return MongoAuthenticationTokenStorage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MongoAuthenticationTokenStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLGlEQUFpRDs7QUFFbEQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFFSSx5Q0FBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhDQUFJLEdBQUosVUFBSyxtQkFBMkI7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2lCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUk7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBWFMsQ0FXVCxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLGtCQUFxRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FDbEI7WUFDSSxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSztTQUNsQyxFQUNELGtCQUFrQixFQUNsQjtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxFQVBLLENBT0wsQ0FBQzthQUNOLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnREFBTSxHQUFOLFVBQU8sbUJBQTJCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxzQ0FBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6REQ7aURBeURDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu78vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgaWYgKCFkYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW4gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLmZpbmQoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW1pdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KChlcnIsIGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihkb2MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGF1dGhlbnRpY2F0aW9uSW5mbzogQXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uSW5mbylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25JbmZvIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uSW5mby50b2tlblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uSW5mbyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uSW5mbztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5kZWxldGVPbmUoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KSk7XHJcbiAgICB9XHJcbn0iXX0=