"use strict";
(() => {
var exports = {};
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 6090:
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ 6389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);
stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__["default"]("sk_test_51NwPdDSFBQprCYehxbsiZziOEipmZSfqQ3Xw824yBT5SPtUlLHli3UiqRcTEF3LYF9Bs2FQBfVXNYJxLqPgheRGx00sbAEFHTi", {
    apiVersion: "2023-08-16"
});
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { items  } = req.body;
            console.log(req.body);
            const tranformedItems = items.map((item)=>({
                    price_data: {
                        currency: "INR",
                        product_data: {
                            name: item.name,
                            images: [
                                item.thumbnail
                            ]
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: item.quantity
                }));
            const session = await stripe.checkout.sessions.create({
                line_items: tranformedItems,
                mode: "payment",
                success_url: `https://jordan-store-dream.vercel.app/success`,
                cancel_url: `https://jordan-store-dream.vercel.app/failed`
            });
            res.json({
                url: session.url
            });
        } catch (err) {
            return res.send(err);
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6389));
module.exports = __webpack_exports__;

})();