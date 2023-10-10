(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
;// CONCATENATED MODULE: ./components/ProductDetailsCarousal.jsx




const ProductDetailsCarousal = ({ images  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
            infiniteLoop: true,
            showIndicators: false,
            showStatus: false,
            thumbWidth: 60,
            className: "productCarousel",
            children: images?.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image
                }))
        })
    });
};
/* harmony default export */ const components_ProductDetailsCarousal = (ProductDetailsCarousal);

;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: ./components/ProductCard.jsx
var ProductCard = __webpack_require__(8788);
;// CONCATENATED MODULE: ./components/RelatedProducts.jsx





const RelatedProducts = ({ products  })=>{
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-[50px] md:mt-[100px] mb-[100px] md:mb-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-2xl font-bold mb-5",
                children: "You Might Also Like"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                responsive: responsive,
                containerClass: "-mx-[10px]",
                itemClass: "px-[10px]",
                children: products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                        item: item
                    }))
            }),
            ";"
        ]
    });
};
/* harmony default export */ const components_RelatedProducts = (RelatedProducts);

// EXTERNAL MODULE: ./components/Wrapper.jsx
var Wrapper = __webpack_require__(398);
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(8382);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: ./store/atoms/cart.jsx
var atoms_cart = __webpack_require__(5791);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./pages/product/[slug].jsx









const ProductDeatils = ({ product , products  })=>{
    const [selectedSize, setSelectedSize] = (0,external_react_.useState)(null);
    const [showError, setShowError] = (0,external_react_.useState)(false);
    const [cart, setCart] = (0,external_recoil_.useRecoilState)(atoms_cart/* cartState */.d);
    const addToCartHandler = (data)=>{
        const isPresent = cart.findIndex((item)=>item._id === data._id);
        if (isPresent === -1) {
            setCart((prevState)=>[
                    ...prevState,
                    {
                        ...data,
                        quantity: 1,
                        selectedSize: selectedSize
                    }
                ]);
        } else {
            console.log("data is not present");
            setCart((prevState)=>{
                return prevState.map((prevItem)=>{
                    return prevItem._id === data._id ? {
                        ...data,
                        quantity: prevItem.quantity + 1
                    } : prevItem;
                });
            });
        }
    };
    console.log(cart);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full md:py-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ProductDetailsCarousal, {
                                images: product.image
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-[1] py-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-[34px] font-semibold mb-2",
                                    children: product.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-lg font-semibold mb-5",
                                    children: product.subtitle
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mr-2 text-lg font-semibold",
                                            children: [
                                                "MRP. Rs ",
                                                product.price
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-base font-medium line-through",
                                                    children: product.orignalPrice
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "ml-auto text-base font-medium text-green-500",
                                                    children: "20%"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-md font-medium text-black/[0.5]",
                                    children: "incl. of taxes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-md font-medium text-black/[0.5] mb-20",
                                    children: `(Also includes all applicable duties)`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-md font-medium text-black/[0.5]",
                                                    children: "Select Size"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-md font-medium text-black/[0.5] cursor-pointer",
                                                    children: "Select Guide"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: product.size.data.map((size)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `border rounded-md text-center py-3 hover:border-black font-medium ${!size.enabled ? "bg-black/[0.1]  cursor-not-allowed  opacity-50" : "cursor-pointer"} ${selectedSize === size.size ? "border-black" : ""}`,
                                                    onClick: (e)=>{
                                                        setSelectedSize(size.size);
                                                        setShowError(false);
                                                    },
                                                    children: size.size
                                                });
                                            })
                                        }),
                                        showError && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-red-600 mt-1",
                                            children: "Selection is required"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75",
                                    onClick: (e)=>{
                                        if (!selectedSize) {
                                            setShowError(true);
                                        }
                                        addToCartHandler(product);
                                    },
                                    children: "Add to cart"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10",
                                    children: [
                                        "Wishlist",
                                        /*#__PURE__*/ jsx_runtime_.jsx(io_.IoMdHeartEmpty, {
                                            size: 20
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-lg font-bold mb-5",
                                            children: "Product Details"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-md mb-5",
                                            children: product.description
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_RelatedProducts, {
                    products: products
                })
            ]
        })
    });
};
/* harmony default export */ const _slug_ = (ProductDeatils);
async function getStaticPaths() {
    const products = await (0,api/* useFetchFromNext */.x)("products");
    const paths = products.data.map((p)=>({
            params: {
                slug: p._id
            }
        }));
    // console.log(paths)
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug  }  }) {
    const productRes = await (0,api/* useFetchFromNext */.x)(`product/${slug}`);
    const productsRes = await (0,api/* useFetchFromNext */.x)("products");
    const product = productRes.data;
    const products = productsRes.data;
    console.log(product);
    return {
        props: {
            product,
            products
        }
    };
}


/***/ }),

/***/ 5791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 4508:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,260,398,120], () => (__webpack_exec__(4081)));
module.exports = __webpack_exports__;

})();