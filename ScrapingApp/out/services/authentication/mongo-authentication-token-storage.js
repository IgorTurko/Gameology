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
            .then(function (c) { return c.replaceOne({ token: authenticationInfo.token }, authenticationInfo); })
            .then(function (r) { return authenticationInfo; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFFSSx5Q0FBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhDQUFJLEdBQUosVUFBSyxtQkFBMkI7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2lCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNYLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUk7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBVFMsQ0FTVCxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLGtCQUFxRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFyRSxDQUFxRSxDQUFDO2FBQ2hGLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdEQUFNLEdBQU4sVUFBTyxtQkFBMkI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLHNDQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDRDtpREEyQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBpbXBsZW1lbnRzIEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlbiBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnNlc3Npb25zKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuZmluZCh7IHRva2VuOiBhdXRoZW50aWNhdGlvblRva2VuIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbWl0KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLm5leHQoKGVyciwgZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShhdXRoZW50aWNhdGlvbkluZm86IEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvbkluZm8pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uSW5mbyBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnNlc3Npb25zKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMucmVwbGFjZU9uZSh7IHRva2VuOiBhdXRoZW50aWNhdGlvbkluZm8udG9rZW4gfSwgYXV0aGVudGljYXRpb25JbmZvKSlcclxuICAgICAgICAgICAgLnRoZW4ociA9PiBhdXRoZW50aWNhdGlvbkluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlbiBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnNlc3Npb25zKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZGVsZXRlT25lKHsgdG9rZW46IGF1dGhlbnRpY2F0aW9uVG9rZW4gfSkpO1xyXG4gICAgfVxyXG59Il19