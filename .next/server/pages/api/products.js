"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(472);


(0,_dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$)();
async function handler(req, res) {
    const product = await _models_db__WEBPACK_IMPORTED_MODULE_1__/* .Product.find */ .xs.find({});
    res.json({
        message: "hello",
        data: product
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(9295)));
module.exports = __webpack_exports__;

})();