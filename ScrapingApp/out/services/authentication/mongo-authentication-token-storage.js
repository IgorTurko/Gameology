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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLGlEQUFpRDs7QUFFbEQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFFSSx5Q0FBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhDQUFJLEdBQUosVUFBSyxtQkFBMkI7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2lCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUk7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBWFMsQ0FXVCxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLGtCQUFxRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FDbEI7WUFDSSxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSztTQUNsQyxFQUNELGtCQUFrQixFQUNsQjtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxFQVBLLENBT0wsQ0FBQzthQUNOLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnREFBTSxHQUFOLFVBQU8sbUJBQTJCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxzQ0FBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6REQ7aURBeURDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu78vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi9kYXRhLWFjY2Vzcy9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nb0F1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIGltcGxlbWVudHMgQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XG4gICAgICAgIGlmICghZGIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XG4gICAgfVxuXG4gICAgZmluZChhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXG4gICAgICAgICAgICAudGhlbihjID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjLmZpbmQoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KVxuICAgICAgICAgICAgICAgICAgICAubGltaXQoMSlcbiAgICAgICAgICAgICAgICAgICAgLm5leHQoKGVyciwgZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihkb2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2F2ZShhdXRoZW50aWNhdGlvbkluZm86IEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25JbmZvKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25JbmZvIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uSW5mby50b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25JbmZvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXBzZXJ0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkluZm87XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmUoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlbiBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnNlc3Npb25zKVxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmRlbGV0ZU9uZSh7IHRva2VuOiBhdXRoZW50aWNhdGlvblRva2VuIH0pKTtcbiAgICB9XG59Il19