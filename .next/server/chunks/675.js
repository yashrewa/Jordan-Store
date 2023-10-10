"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 7331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

async function connect() {
    try {
        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_CONNECT_URI);
        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);
        connection.on("connected", ()=>{
            console.log("MongoDb connection established");
        });
        connection.on("error", ()=>{
            console.log("MongoDb connection failed");
        });
    } catch (err) {
        console.log("something went wrong please check your mongodb connection");
        console.log("error");
    }
}


/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WD": () => (/* binding */ Category),
/* harmony export */   "xs": () => (/* binding */ Product)
/* harmony export */ });
/* unused harmony export Order */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productShema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: String,
    subtitle: String,
    price: Number,
    originalPrice: Number,
    image: [
        String
    ],
    description: String,
    size: {
        data: {
            size: String,
            enabled: Boolean
        }
    },
    thumbnail: String,
    category: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
            ref: "Category"
        }
    ]
});
const categorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: String,
    product: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
            ref: "Product"
        }
    ]
});
const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    stripeId: String,
    product: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
            ref: "Product"
        }
    ]
});
const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Product", productShema);
const Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Category) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Category", categorySchema);
const Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Order", orderSchema);


/***/ })

};
;