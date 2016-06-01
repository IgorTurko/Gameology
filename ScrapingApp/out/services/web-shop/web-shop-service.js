/// <reference path="../../typings/index.d.ts"/>
"use strict";
var web_shop_validator_1 = require("./web-shop-validator");
var WebShopService = (function () {
    function WebShopService(storage) {
        this.storage = storage;
        this.validator = new web_shop_validator_1.default();
        if (!storage)
            throw new Error("storage is undefined");
    }
    WebShopService.prototype.all = function () {
        return this.storage.all();
    };
    WebShopService.prototype.save = function (webShop) {
        var _this = this;
        if (!webShop)
            throw new Error("webShop is undefined");
        return new Promise(function (resolve, reject) {
            _this.validate(webShop)
                .then(function (result) {
                if (!result.isValid)
                    reject(result);
                else
                    _this.storage
                        .save(webShop)
                        .then(function (r) { return resolve(r); });
            });
        });
    };
    WebShopService.prototype.validate = function (webShop) {
        if (!webShop)
            throw new Error("webShop is undefined");
        return this.validator.validate(webShop);
    };
    return WebShopService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebShopService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9zZXJ2aWNlcy93ZWItc2hvcC93ZWItc2hvcC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFnRDs7QUFFaEQsbUNBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFFcEQ7SUFJSSx3QkFBb0IsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFGN0MsY0FBUyxHQUFHLElBQUksNEJBQWdCLEVBQUUsQ0FBQztRQUd2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssT0FBeUI7UUFBOUIsaUJBZUM7UUFkRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDUixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsSUFBSTtvQkFDQSxLQUFJLENBQUMsT0FBTzt5QkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNiLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGlDQUFRLEdBQWhCLFVBQWlCLE9BQXlCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENEO2dDQW9DQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCBXZWJTaG9wVmFsaWRhdG9yIGZyb20gXCIuL3dlYi1zaG9wLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdG9yID0gbmV3IFdlYlNob3BWYWxpZGF0b3IoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFdlYlNob3BzLklXZWJTaG9wU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8V2ViU2hvcHMuV2ViU2hvcFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5hbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHdlYlNob3A6IFdlYlNob3BzLldlYlNob3ApOiBQcm9taXNlPFdlYlNob3BzLldlYlNob3A+IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlzVmFsaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2F2ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ociA9PiByZXNvbHZlKHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGUod2ViU2hvcDogV2ViU2hvcHMuV2ViU2hvcCk6IFByb21pc2U8VmFsaWRhdG9yLlZhbGlkYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IudmFsaWRhdGUod2ViU2hvcCk7XHJcbiAgICB9XHJcbn0iXX0=