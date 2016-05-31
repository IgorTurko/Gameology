"use strict";
/// <reference path="../typings/index.d.ts" />
var now_1 = require("./now");
var AuthenticationTokenProvider = (function () {
    function AuthenticationTokenProvider(storage) {
        this.storage = storage;
        if (!storage)
            throw new Error("storage is undefined");
    }
    AuthenticationTokenProvider.prototype.validate = function (authenticationToken) {
        var _this = this;
        if (!authenticationToken)
            return Promise.reject(null);
        return new Promise(function (resolve, reject) {
            _this.storage
                .find(authenticationToken)
                .then(function (info) {
                if (info.expiresAt < now_1.default())
                    _this.storage
                        .remove(authenticationToken)
                        .then(function () { return reject("Token is expired"); })
                        .catch(function (err) { return reject(err); });
                else
                    resolve(info);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    AuthenticationTokenProvider.prototype.generate = function (userId) {
        if (!userId)
            throw new Error("userId is undefined");
    };
    return AuthenticationTokenProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthenticationTokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxvQkFBZ0IsT0FBTyxDQUFDLENBQUE7QUFFeEI7SUFFSSxxQ0FBb0IsT0FBbUQ7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBNEM7UUFDbkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxtQkFBMkI7UUFBcEMsaUJBbUJDO1FBbEJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFvQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xFLEtBQUksQ0FBQyxPQUFPO2lCQUNQLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztpQkFDekIsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFFTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUcsRUFBRSxDQUFDO29CQUN2QixLQUFJLENBQUMsT0FBTzt5QkFDUCxNQUFNLENBQUMsbUJBQW1CLENBQUM7eUJBQzNCLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQTFCLENBQTBCLENBQUM7eUJBQ3RDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztnQkFDbkMsSUFBSTtvQkFDQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4Q0FBUSxHQUFSLFVBQVMsTUFBYztRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUcvQyxDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENEOzZDQWtDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCBub3cgZnJvbSBcIi4vbm93XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5maW5kKGF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihpbmZvID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXhwaXJlc0F0IDwgbm93KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZShhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVqZWN0KFwiVG9rZW4gaXMgZXhwaXJlZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZSh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XHJcbiAgICAgICAgaWYgKCF1c2VySWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG5cclxuICAgIH1cclxufSJdfQ==