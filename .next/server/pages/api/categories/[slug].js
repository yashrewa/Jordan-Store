"use strict";
(() => {
var exports = {};
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(472);


(0,_dbconfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$)();
async function handler(req, res) {
    const catName = req.query.slug;
    const categoryProducts = await _models_db__WEBPACK_IMPORTED_MODULE_1__/* .Category.findOne */ .WD.findOne({
        name: catName
    }).populate("product");
    res.json({
        message: "success",
        data: categoryProducts
    });
// console.log(categoryProducts)
// console.log(catName)
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(1233)));
module.exports = __webpack_exports__;

})();