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
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./pages/api/create-checkout-session.js":
/*!**********************************************!*\
  !*** ./pages/api/create-checkout-session.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"sk_test_51NwPdDSFBQprCYehxbsiZziOEipmZSfqQ3Xw824yBT5SPtUlLHli3UiqRcTEF3LYF9Bs2FQBfVXNYJxLqPgheRGx00sbAEFHTi\", {\n    apiVersion: \"2023-08-16\"\n});\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { items  } = req.body;\n            console.log(req.body);\n            const tranformedItems = items.map((item)=>({\n                    price_data: {\n                        currency: \"INR\",\n                        product_data: {\n                            name: item.name,\n                            images: [\n                                item.thumbnail\n                            ]\n                        },\n                        unit_amount: item.price * 100\n                    },\n                    quantity: item.quantity\n                }));\n            const session = await stripe.checkout.sessions.create({\n                line_items: tranformedItems,\n                mode: \"payment\",\n                success_url: `https://jordan-store-lemon.vercel.app/success`,\n                cancel_url: `https://jordan-store-lemon.vercel.app/failed`\n            });\n            res.json({\n                url: session.url\n            });\n        } catch (err) {\n            return res.send(err);\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQywrR0FBK0c7SUFDcklFLFlBQVk7QUFDaEI7QUFFZSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN2QixJQUFJO1lBQ0EsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtZQUMxQkMsUUFBUUMsR0FBRyxDQUFDTixJQUFJSSxJQUFJO1lBQ3BCLE1BQU1HLGtCQUFrQkosTUFBTUssR0FBRyxDQUFDLENBQUNDLE9BQVU7b0JBQ3pDQyxZQUFZO3dCQUNSQyxVQUFVO3dCQUNWQyxjQUFjOzRCQUNWQyxNQUFNSixLQUFLSSxJQUFJOzRCQUNmQyxRQUFRO2dDQUFDTCxLQUFLTSxTQUFTOzZCQUFDO3dCQUM1Qjt3QkFDQUMsYUFBYVAsS0FBS1EsS0FBSyxHQUFHO29CQUM5QjtvQkFDQUMsVUFBVVQsS0FBS1MsUUFBUTtnQkFDM0I7WUFFQSxNQUFNQyxVQUFVLE1BQU10QixPQUFPdUIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFBRUMsWUFBWWhCO2dCQUFpQmlCLE1BQU07Z0JBQVdDLGFBQWEsQ0FBQyw2Q0FBNkMsQ0FBQztnQkFBRUMsWUFBWSxDQUFDLDRDQUE0QyxDQUFDO1lBQUM7WUFFL056QixJQUFJMEIsSUFBSSxDQUFDO2dCQUNMQyxLQUFLLFFBQVVBLEdBQUc7WUFDdEI7UUFDSixFQUFFLE9BQU9DLEtBQUs7WUFDVixPQUFPNUIsSUFBSTZCLElBQUksQ0FBQ0Q7UUFDcEI7SUFDSixDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzP2YxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoJ3NrX3Rlc3RfNTFOd1BkRFNGQlFwckNZZWh4YnNpWnppT0VpcG1aU2ZxUTNYdzgyNHlCVDVTUHRVbExIbGkzVWlxUmNURUYzTFlGOUJzMkZRQmZWWE5ZSnhMcVBnaGVSR3gwMHNiQUVGSFRpJywge1xuICAgIGFwaVZlcnNpb246ICcyMDIzLTA4LTE2J1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSByZXEuYm9keTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5mb3JtZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnSU5SJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtpdGVtLnRodW1ibmFpbF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5XG4gICAgICAgICAgICB9KSlcblxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoeyBsaW5lX2l0ZW1zOiB0cmFuZm9ybWVkSXRlbXMsIG1vZGU6ICdwYXltZW50Jywgc3VjY2Vzc191cmw6IGBodHRwczovL2pvcmRhbi1zdG9yZS1sZW1vbi52ZXJjZWwuYXBwL3N1Y2Nlc3NgLCBjYW5jZWxfdXJsOiBgaHR0cHM6Ly9qb3JkYW4tc3RvcmUtbGVtb24udmVyY2VsLmFwcC9mYWlsZWRgIH0pO1xuXG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgdXJsOiAoc2Vzc2lvbikudXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsImFwaVZlcnNpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaXRlbXMiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInRyYW5mb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwiaW1hZ2VzIiwidGh1bWJuYWlsIiwidW5pdF9hbW91bnQiLCJwcmljZSIsInF1YW50aXR5Iiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJsaW5lX2l0ZW1zIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiY2FuY2VsX3VybCIsImpzb24iLCJ1cmwiLCJlcnIiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-checkout-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();