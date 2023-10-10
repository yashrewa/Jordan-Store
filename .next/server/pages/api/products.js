"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./dbconfig/dbConfig.ts":
/*!******************************!*\
  !*** ./dbconfig/dbConfig.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_CONNECT_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDb connection established\");\n        });\n        connection.on(\"error\", ()=>{\n            console.log(\"MongoDb connection failed\");\n        });\n    } catch (err) {\n        console.log(\"something went wrong please check your mongodb connection\");\n        console.log(\"error\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYmNvbmZpZy9kYkNvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsZUFBZUMsVUFBUztJQUMzQixJQUFHO1FBQ0NELHVEQUFnQixDQUFDRSxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtRQUNoRCxNQUFNQyxhQUFhTCw0REFBbUI7UUFDdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFZLElBQUk7WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUNBSCxXQUFXQyxFQUFFLENBQUMsU0FBUSxJQUFJO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSixFQUNBLE9BQU1DLEtBQUk7UUFDTkYsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2RiY29uZmlnL2RiQ29uZmlnLnRzP2ZkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpe1xuICAgIHRyeXtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX0NPTk5FQ1RfVVJJISk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICBjb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EYiBjb25uZWN0aW9uIGVzdGFibGlzaGVkJylcbiAgICAgICAgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignZXJyb3InLCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EYiBjb25uZWN0aW9uIGZhaWxlZCcpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZyBwbGVhc2UgY2hlY2sgeW91ciBtb25nb2RiIGNvbm5lY3Rpb24nKVxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgIH1cbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfQ09OTkVDVF9VUkkiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./dbconfig/dbConfig.ts\n");

/***/ }),

/***/ "(api)/./models/db.ts":
/*!**********************!*\
  !*** ./models/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category),\n/* harmony export */   \"Order\": () => (/* binding */ Order),\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productShema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    subtitle: String,\n    price: Number,\n    originalPrice: Number,\n    image: [\n        String\n    ],\n    description: String,\n    size: {\n        data: {\n            size: String,\n            enabled: Boolean\n        }\n    },\n    thumbnail: String,\n    category: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n            ref: \"Category\"\n        }\n    ]\n});\nconst categorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    product: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n            ref: \"Product\"\n        }\n    ]\n});\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    stripeId: String,\n    product: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n            ref: \"Product\"\n        }\n    ]\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productShema);\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Category) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Category\", categorySchema);\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsZUFBZSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNQztJQUNOQyxVQUFVRDtJQUNWRSxPQUFPQztJQUNQQyxlQUFlRDtJQUNmRSxPQUFPO1FBQUNMO0tBQU87SUFDZk0sYUFBYU47SUFDYk8sTUFBTTtRQUNGQyxNQUFNO1lBQ0ZELE1BQU1QO1lBQ05TLFNBQVNDO1FBQ2I7SUFDSjtJQUNBQyxXQUFXWDtJQUNYWSxVQUFVO1FBQ047WUFDSUMsTUFBTWpCLHVFQUE4QjtZQUNwQ29CLEtBQUs7UUFDVDtLQUNIO0FBQ0w7QUFFQSxNQUFNQyxpQkFBaUIsSUFBSXJCLHdEQUFlLENBQUM7SUFDdkNHLE1BQU1DO0lBQ05rQixTQUFTO1FBQ0w7WUFDSUwsTUFBTWpCLHVFQUE4QjtZQUNwQ29CLEtBQUs7UUFDVDtLQUNIO0FBQ0w7QUFFQSxNQUFNRyxjQUFjLElBQUl2Qix3REFBZSxDQUFDO0lBQ3BDd0IsVUFBVXBCO0lBQ1ZrQixTQUFTO1FBQ0w7WUFDSUwsTUFBTWpCLHVFQUE4QjtZQUNwQ29CLEtBQUs7UUFDVDtLQUNIO0FBQ0w7QUFHTyxNQUFNSyxVQUFVekIsZ0VBQXVCLElBQUlBLHFEQUFjLENBQUMsV0FBV0MsY0FBYztBQUNuRixNQUFNMkIsV0FBVzVCLGlFQUF3QixJQUFJQSxxREFBYyxDQUFDLFlBQVlxQixnQkFBZ0I7QUFDeEYsTUFBTVEsUUFBUTdCLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLFNBQVN1QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9tb2RlbHMvZGIudHM/YjUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHByb2R1Y3RTaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBzdWJ0aXRsZTogU3RyaW5nLFxuICAgIHByaWNlOiBOdW1iZXIsXG4gICAgb3JpZ2luYWxQcmljZTogTnVtYmVyLFxuICAgIGltYWdlOiBbU3RyaW5nXSxcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICAgIHNpemU6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICAgICAgZW5hYmxlZDogQm9vbGVhblxuICAgICAgICB9XG4gICAgfSxcbiAgICB0aHVtYm5haWw6IFN0cmluZyxcbiAgICBjYXRlZ29yeTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgICAgICByZWY6ICdDYXRlZ29yeSdcbiAgICAgICAgfVxuICAgIF1cbn0pXG5cbmNvbnN0IGNhdGVnb3J5U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHByb2R1Y3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICAgICAgcmVmOiAnUHJvZHVjdCdcbiAgICAgICAgfVxuICAgIF1cbn0pXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgc3RyaXBlSWQ6IFN0cmluZyxcbiAgICBwcm9kdWN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgICAgIHJlZjogJ1Byb2R1Y3QnXG4gICAgICAgIH1cbiAgICBdXG59KVxuXG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2hlbWEpO1xuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gbW9uZ29vc2UubW9kZWxzLkNhdGVnb3J5IHx8IG1vbmdvb3NlLm1vZGVsKCdDYXRlZ29yeScsIGNhdGVnb3J5U2NoZW1hKTtcbmV4cG9ydCBjb25zdCBPcmRlciA9IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwic3VidGl0bGUiLCJwcmljZSIsIk51bWJlciIsIm9yaWdpbmFsUHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwic2l6ZSIsImRhdGEiLCJlbmFibGVkIiwiQm9vbGVhbiIsInRodW1ibmFpbCIsImNhdGVnb3J5IiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJjYXRlZ29yeVNjaGVtYSIsInByb2R1Y3QiLCJvcmRlclNjaGVtYSIsInN0cmlwZUlkIiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIiwiQ2F0ZWdvcnkiLCJPcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbconfig/dbConfig */ \"(api)/./dbconfig/dbConfig.ts\");\n/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/db */ \"(api)/./models/db.ts\");\n\n\n(0,_dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function handler(req, res) {\n    const product = await _models_db__WEBPACK_IMPORTED_MODULE_1__.Product.find({});\n    res.json({\n        message: \"hello\",\n        data: product\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQ1I7QUFFdENBLDJEQUFPQTtBQUVRLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1DLFVBQVUsTUFBTUosb0RBQVksQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJRyxJQUFJLENBQUM7UUFBQ0MsU0FBUztRQUFTQyxNQUFNSjtJQUFPO0FBQzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiQC9kYmNvbmZpZy9kYkNvbmZpZ1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9kYlwiO1xuXG5jb25uZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KVxuICAgIHJlcy5qc29uKHttZXNzYWdlOiBcImhlbGxvXCIsIGRhdGE6IHByb2R1Y3R9KVxuICB9Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb2R1Y3QiLCJmaW5kIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();