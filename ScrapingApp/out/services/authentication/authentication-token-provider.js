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
            expiresAt: moment.utc().add(moment.duration(5, "day")).toDate()
        };
        return this.storage
            .save(info);
    };
    return AuthenticationTokenProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthenticationTokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFDLGlEQUFpRDtBQUNsRCxJQUFZLElBQUksV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUNsQyxJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUVqQztJQUVJLHFDQUFvQixPQUFtRDtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUE0QztRQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLG1CQUEyQjtRQUFwQyxpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9DLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEUsS0FBSSxDQUFDLE9BQU87aUJBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPO3lCQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDM0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQzt5QkFDdEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJO29CQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLElBQU0sSUFBSSxHQUFzQztZQUM1QyxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ2xFLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDs2Q0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7vy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKSB7XG4gICAgICAgIGlmICghc3RvcmFnZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAuZmluZChhdXRoZW50aWNhdGlvblRva2VuKVxuICAgICAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBtb21lbnQudXRjKCkudG9EYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXhwaXJlc0F0IDwgbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZShhdXRoZW50aWNhdGlvblRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlamVjdChcIlRva2VuIGlzIGV4cGlyZWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5mbyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xuICAgICAgICBpZiAoIXVzZXJJZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJJZCBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgICAgY29uc3QgaW5mbzogQXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvID0ge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICB0b2tlbjogdXVpZC52MSgpLFxuICAgICAgICAgICAgZXhwaXJlc0F0OiBtb21lbnQudXRjKCkuYWRkKG1vbWVudC5kdXJhdGlvbig1LCBcImRheVwiKSkudG9EYXRlKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlXG4gICAgICAgICAgICAuc2F2ZShpbmZvKTtcbiAgICB9XG59Il19