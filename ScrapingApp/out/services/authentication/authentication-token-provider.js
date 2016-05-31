"use strict";
/// <reference path="../../typings/index.d.ts" />
var uuid = require("node-uuid");
var moment = require("moment");
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
                var now = moment.utc().toDate();
                if (info.expiresAt < now)
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
        var info = {
            userId: userId,
            token: uuid.v1(),
            expiresAt: moment.utc().add(moment.duration(1, "day")).toDate()
        };
        return this.storage
            .save(info);
    };
    return AuthenticationTokenProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthenticationTokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCxJQUFZLElBQUksV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUNsQyxJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUVqQztJQUVJLHFDQUFvQixPQUFtRDtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUE0QztRQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLG1CQUEyQjtRQUFwQyxpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9DLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEUsS0FBSSxDQUFDLE9BQU87aUJBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPO3lCQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDM0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQzt5QkFDdEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJO29CQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLElBQU0sSUFBSSxHQUFzQztZQUM1QyxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ2xFLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDs2Q0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJub2RlLXV1aWRcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBpbXBsZW1lbnRzIEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKS50b0RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXhwaXJlc0F0IDwgbm93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlamVjdChcIlRva2VuIGlzIGV4cGlyZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGUodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghdXNlcklkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VySWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8gPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICB0b2tlbjogdXVpZC52MSgpLFxyXG4gICAgICAgICAgICBleHBpcmVzQXQ6IG1vbWVudC51dGMoKS5hZGQobW9tZW50LmR1cmF0aW9uKDEsIFwiZGF5XCIpKS50b0RhdGUoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgLnNhdmUoaW5mbyk7XHJcbiAgICB9XHJcbn0iXX0=