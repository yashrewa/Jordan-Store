"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 9356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Wrapper.jsx
var Wrapper = __webpack_require__(398);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: ./store/atoms/cart.jsx
var atoms_cart = __webpack_require__(5791);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./components/Cartitems.jsx





const Cartitems = ({ item  })=>{
    const quantityArr = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ];
    const [quantity, setQuantity] = (0,external_react_.useState)(item.quantity);
    const [size, setSize] = (0,external_react_.useState)(item.selectedSize);
    const [cart, setCart] = (0,external_recoil_.useRecoilState)(atoms_cart/* cartState */.d);
    const updateCartItem = (e, key)=>{
        const updatedCart = cart.map((cartItem)=>{
            if (cartItem._id === item._id) {
                return {
                    ...cartItem,
                    quantity: +quantity,
                    selectedSize: size
                };
            }
            return cartItem;
        });
        setCart(updatedCart);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex py-5 gap-3 md:gap-5 border-b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shrink-0 aspect-square w-[50px] md:w-[120px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `${item?.thumbnail}`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-lg md:text-2xl font-semibold text-black/[0.8]",
                                children: item?.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm md:text-md font-medium text-black/[0.5] block md:hidden",
                                children: item?.subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm md:text-md font-bold text-black/[0.5] mt-2",
                                children: [
                                    "MRP : Rs. ",
                                    item.price
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-md font-medium text-black/[0.5] hidden md:block",
                        children: item.subtitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-semibold",
                                                children: "Size:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                className: "hover:text-black",
                                                onChange: (e)=>{
                                                    setSize(e.target.value);
                                                    updateCartItem();
                                                },
                                                children: item.size.data.map((size, i)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: size.size,
                                                        disabled: !size.enabled ? true : false,
                                                        selected: item.selectedSize === size.size,
                                                        children: size.size
                                                    }, i);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-semibold",
                                                children: "Quantity:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                className: "hover:text-black",
                                                onChange: (e)=>{
                                                    setQuantity(e.target.value);
                                                    updateCartItem();
                                                },
                                                children: quantityArr.map((q, i)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: q,
                                                        selected: item.quantity === q,
                                                        children: q
                                                    }, i);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiDeleteBin6Line, {
                                className: "cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:[20px]"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Cartitems = (Cartitems);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(8759);
;// CONCATENATED MODULE: ./pages/cart.jsx









const Cart = ()=>{
    const cart = (0,external_recoil_.useRecoilValue)(atoms_cart/* cartState */.d);
    const totalPrice = ()=>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.price * item.quantity;
        });
        return total;
    };
    const handleCheckout = async ()=>{
        const res = await fetch(`${baseUrl/* baseUrl */.F}create-checkout-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: cart
            })
        });
        const response = await res.json();
        window.location.href = response.url;
        console.log(response);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full md:py-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center max-w-[800px] mx-auto mt-8 md:mt-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-[28px] md:text-[34px] mb-5 font-semibold leading-tight",
                        children: "Shopping Cart"
                    })
                }),
                cart.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col lg:flex-row gap-12 py-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-[2]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-lg font-bold",
                                    children: "Cart Items"
                                }),
                                cart.map((item)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx(components_Cartitems, {
                                        item: item
                                    }, item._id);
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-[1]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-lg font-bold",
                                    children: "Summary"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-5 my-5 bg-black/[0.05] rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "uppercase text-md md:text-lg font-medium text-black",
                                                    children: "SubTotal"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-md md:text-lg font-medium text-black",
                                                    children: [
                                                        "Rs. ",
                                                        totalPrice()
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm md:text-md py-5 border-t mt-5",
                                            children: "The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center",
                                    onClick: ()=>{
                                        handleCheckout();
                                    },
                                    children: "Checkout"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-[2] flex flex-col items-center pb-[50px] md:-mt-14",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/empty-cart.jpg",
                            width: 300,
                            height: 300,
                            className: "w-[300px] md:w-[400px]"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-xl font-bold",
                            children: "Your cart is empty"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-center mt-4",
                            children: [
                                "Looks like you have not added anything in your cart.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "Go ahead and explore top categories."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8",
                            children: "Continue Shopping"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cart = (Cart);


/***/ }),

/***/ 5791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ cartState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const cartState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "cartState",
    default: []
});


/***/ }),

/***/ 8759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl)
/* harmony export */ });
const baseUrl = "http://localhost:3000/api/";


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,260,398], () => (__webpack_exec__(9356)));
module.exports = __webpack_exports__;

})();