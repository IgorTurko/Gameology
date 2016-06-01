/// <reference path="../../typings/index.d.ts" />
"use strict";
var validator = require("node-validator");
var WebShopValidator = (function () {
    function WebShopValidator() {
        this.deliveryMethodValidator = validator.isAnyObject()
            .withRequired("deliveryMethod", validator.isString())
            .withRequired("price", validator.isNumber({ min: 0 }));
        this.scrappingSettingsValidator = validator.isAnyObject()
            .withRequired("scrapper", validator.isString());
        this.webShopValidator = validator.isAnyObject()
            .withRequired("title", validator.isString())
            .withOptional("scrappingSettings", this.scrappingSettingsValidator)
            .withOptional("deliveryMethods", validator.isArray(this.deliveryMethodValidator));
    }
    WebShopValidator.prototype.validate = function (webShop) {
        var _this = this;
        return new Promise(function (resolve) {
            validator.run(_this.webShopValidator, webShop, function (errorCount, errors) {
                resolve({
                    isValid: errorCount === 0,
                    errorCount: errorCount,
                    errors: errors
                });
            });
        });
    };
    return WebShopValidator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebShopValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL3NlcnZpY2VzL3dlYi1zaG9wL3dlYi1zaG9wLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELElBQVksU0FBUyxXQUFNLGdCQUFnQixDQUFDLENBQUE7QUFFNUM7SUFLSTtRQUVJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQ2pELFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEQsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTthQUNwRCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQzFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUM7YUFDbEUsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLE9BQXlCO1FBQWxDLGlCQVlDO1FBWEcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsT0FBTyxFQUNQLFVBQUMsVUFBVSxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxDQUFDO29CQUNKLE9BQU8sRUFBRSxVQUFVLEtBQUssQ0FBQztvQkFDekIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLE1BQU0sRUFBRSxNQUFNO2lCQUNqQixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDRDtrQ0FpQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJub2RlLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFZhbGlkYXRvciB7XHJcbiAgICBwcml2YXRlIHdlYlNob3BWYWxpZGF0b3I6IHZhbGlkYXRvci5WYWxpZGF0YWJsZTtcclxuICAgIHByaXZhdGUgc2NyYXBwaW5nU2V0dGluZ3NWYWxpZGF0b3I6IHZhbGlkYXRvci5WYWxpZGF0YWJsZTtcclxuICAgIHByaXZhdGUgZGVsaXZlcnlNZXRob2RWYWxpZGF0b3I6IHZhbGlkYXRvci5WYWxpZGF0YWJsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeU1ldGhvZFZhbGlkYXRvciA9IHZhbGlkYXRvci5pc0FueU9iamVjdCgpXHJcbiAgICAgICAgICAgIC53aXRoUmVxdWlyZWQoXCJkZWxpdmVyeU1ldGhvZFwiLCB2YWxpZGF0b3IuaXNTdHJpbmcoKSlcclxuICAgICAgICAgICAgLndpdGhSZXF1aXJlZChcInByaWNlXCIsIHZhbGlkYXRvci5pc051bWJlcih7IG1pbjogMCB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyYXBwaW5nU2V0dGluZ3NWYWxpZGF0b3IgPSB2YWxpZGF0b3IuaXNBbnlPYmplY3QoKVxyXG4gICAgICAgICAgICAud2l0aFJlcXVpcmVkKFwic2NyYXBwZXJcIiwgdmFsaWRhdG9yLmlzU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICB0aGlzLndlYlNob3BWYWxpZGF0b3IgPSB2YWxpZGF0b3IuaXNBbnlPYmplY3QoKVxyXG4gICAgICAgICAgICAud2l0aFJlcXVpcmVkKFwidGl0bGVcIiwgdmFsaWRhdG9yLmlzU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC53aXRoT3B0aW9uYWwoXCJzY3JhcHBpbmdTZXR0aW5nc1wiLCB0aGlzLnNjcmFwcGluZ1NldHRpbmdzVmFsaWRhdG9yKVxyXG4gICAgICAgICAgICAud2l0aE9wdGlvbmFsKFwiZGVsaXZlcnlNZXRob2RzXCIsIHZhbGlkYXRvci5pc0FycmF5KHRoaXMuZGVsaXZlcnlNZXRob2RWYWxpZGF0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSh3ZWJTaG9wOiBXZWJTaG9wcy5XZWJTaG9wKTogUHJvbWlzZTxWYWxpZGF0b3IuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLnJ1bih0aGlzLndlYlNob3BWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICB3ZWJTaG9wLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yQ291bnQsIGVycm9ycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBlcnJvckNvdW50ID09PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvdW50OiBlcnJvckNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=