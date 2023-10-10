(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Wrapper.jsx
var Wrapper = __webpack_require__(398);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./components/Menu.jsx




const data = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "About",
        url: "/about"
    },
    {
        id: 3,
        name: "Categories",
        subMenu: true
    },
    {
        id: 4,
        name: "Contact",
        url: "/contact"
    }
];
const subMenuData = [
    {
        id: 1,
        name: "Jordan",
        doc_count: 11
    },
    {
        id: 2,
        name: "Sneakers",
        doc_count: 8
    },
    {
        id: 3,
        name: "Running shoes",
        doc_count: 64
    },
    {
        id: 4,
        name: "Football shoes",
        doc_count: 107
    }
];
const Menu = ({ showCatMenu , setShowCatMenu , categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "hidden md:flex items-center gap-8 font-medium text-black",
        children: data.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: !!item.subMenu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "flex cursor-pointer items-center gap-2 relative",
                    onMouseEnter: ()=>setShowCatMenu(true),
                    onMouseLeave: ()=>setShowCatMenu(false),
                    children: [
                        item.name,
                        /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsChevronDown, {
                            size: 14
                        }),
                        showCatMenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg",
                            children: categories?.data?.map((subMenu)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/category/${subMenu.name}`,
                                    onClick: ()=>setShowCatMenu(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "h-12 flex justify-between items-center px-3 □hover:bg-black/[0.03] rounded-md",
                                        children: [
                                            subMenu.name,
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "opacity-50 text-sm",
                                                children: subMenu.product.length
                                            })
                                        ]
                                    })
                                }, subMenu._id);
                            })
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.url,
                        children: item.name
                    })
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const components_Menu = (Menu);

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: external "react-icons/vsc"
const vsc_namespaceObject = require("react-icons/vsc");
;// CONCATENATED MODULE: ./components/MenuMobile.jsx




const MenuMobile_data = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "About",
        url: "/about"
    },
    {
        id: 3,
        name: "Categories",
        subMenu: true
    },
    {
        id: 4,
        name: "Contact",
        url: "/contact"
    }
];
const MenuMobile_subMenuData = [
    {
        id: 1,
        name: "Jordan",
        doc_count: 11
    },
    {
        id: 2,
        name: "Sneakers",
        doc_count: 8
    },
    {
        id: 3,
        name: "Running shoes",
        doc_count: 64
    },
    {
        id: 4,
        name: "Football shoes",
        doc_count: 107
    }
];
const MenuMobile = ({ showCatMenu , setShowCatMenu , setMobileMenu , categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black",
        children: MenuMobile_data.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: !!item.subMenu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: " cursor-pointer py-4 px-5 border-b flex flex-col relative",
                    onClick: ()=>setShowCatMenu(!showCatMenu),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                                item.name,
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsChevronDown, {
                                    size: 14
                                })
                            ]
                        }),
                        showCatMenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "bg-black/[0.05] -mx-4 mt-4 -md:4",
                            children: categories?.data?.map((subMenu)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/category/${subMenu.name}`,
                                    onClick: ()=>{
                                        setShowCatMenu(false);
                                        setMobileMenu(false);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "py-4 px-8 border-t flex justify-between",
                                        children: [
                                            subMenu.name,
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "opacity-50 text-sm",
                                                children: subMenu.product.length
                                            })
                                        ]
                                    })
                                }, subMenu._id);
                            })
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "py-4 px-5 border-b",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.url,
                        onClick: ()=>setMobileMenu(false),
                        children: item.name
                    })
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const components_MenuMobile = (MenuMobile);

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(8382);
// EXTERNAL MODULE: ./store/atoms/cart.jsx
var atoms_cart = __webpack_require__(5791);
;// CONCATENATED MODULE: ./components/Header.jsx













const Header = ()=>{
    const [showCatMenu, setShowCatMenu] = (0,external_react_.useState)(false);
    const [mobileMenu, setMobileMenu] = (0,external_react_.useState)(false);
    const [lastScrollY, setLastScrollY] = (0,external_react_.useState)(0);
    const [show, setShow] = (0,external_react_.useState)("translate-y-0");
    const [categories, setCategories] = (0,external_react_.useState)(null);
    const cart = (0,external_recoil_.useRecoilValue)(atoms_cart/* cartState */.d);
    const controlNavbar = ()=>{
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };
    (0,external_react_.useEffect)(()=>{
        fetchCategories();
    }, []);
    const fetchCategories = async ()=>{
        const categories = await (0,api/* useFetchFromNext */.x)("categories");
        console.log(categories);
        setCategories(categories);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
            className: `h-[60px] flex justify-between items-center`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/logo.svg",
                        alt: "",
                        className: "w-[40px] md:w-[60px]"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {
                    showCatMenu: showCatMenu,
                    setShowCatMenu: setShowCatMenu,
                    categories: categories
                }),
                mobileMenu && /*#__PURE__*/ jsx_runtime_.jsx(components_MenuMobile, {
                    showCatMenu: showCatMenu,
                    setShowCatMenu: setShowCatMenu,
                    setMobileMenu: setMobileMenu,
                    categories: categories
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-2 text-black",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(io_.IoMdHeartEmpty, {
                                    className: "text-[19px] md:text-[24px]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]",
                                    children: "34"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/cart",
                            className: "w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsCart, {
                                    className: "text-[15px] md:text-[20px]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]",
                                    children: cart.length
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-8 md:w-12 h-8 md:hidden md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative",
                            children: mobileMenu ? /*#__PURE__*/ jsx_runtime_.jsx(vsc_namespaceObject.VscChromeClose, {
                                className: "text-[16px]",
                                onClick: ()=>setMobileMenu(false)
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiMenuAltRight, {
                                className: "text-[20px]",
                                onClick: ()=>setMobileMenu(true)
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-black text-white pt-14 pb-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
                className: "flex justify-between flex-col md:flex-row gap-[50px] md:gap-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-3 shrink-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-oswald font-medium uppercase text-sm cursor-pointer",
                                        children: "Find a store"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-oswald font-medium uppercase text-sm cursor-pointer",
                                        children: "become a partner"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-oswald font-medium uppercase text-sm cursor-pointer",
                                        children: "sign up for email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-oswald font-medium uppercase text-sm cursor-pointer",
                                        children: "send us feedback"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-oswald font-medium uppercase text-sm cursor-pointer",
                                        children: "student discount"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-oswald font-medium uppercase text-sm",
                                                children: "get help"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Order Status"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Delivery"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Returns"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Payment Options"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Contact Us"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-oswald font-medium uppercase text-sm",
                                                children: "About nike"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "News"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Careers"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Investors"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-sm text-white/[0.5] hover:text-white cursor-pointer",
                                                children: "Sustainability"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-4 justify-center md:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaFacebookF, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitter, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaYoutube, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {
                                    size: 20
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
                className: "flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left",
                        children: "\xa9 2023 Nike, Inc. All Rights Reserved"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-[12px] text-white/[0.5] hover:text-white cursor-pointer",
                                children: "Guides"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-[12px] text-white/[0.5] hover:text-white cursor-pointer",
                                children: "Terms of Sale"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-[12px] text-white/[0.5] hover:text-white cursor-pointer",
                                children: "Terms of Use"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-[12px] text-white/[0.5] hover:text-white cursor-pointer",
                                children: "Privacy Policy"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.js


// import "@/styles/"




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Jordan Store"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recoil_.RecoilRoot, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
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

/***/ 8382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useFetchFromNext)
/* harmony export */ });
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8759);

const useFetchFromNext = async (endpoint)=>{
    const res = await fetch(`${_baseUrl__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .F}${endpoint}`);
    const data = await res.json();
    console.log(data);
    return data;
};


/***/ }),

/***/ 8759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl)
/* harmony export */ });
const baseUrl = "http://localhost:3000/api/";


/***/ }),

/***/ 6764:
/***/ (() => {



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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,398], () => (__webpack_exec__(998)));
module.exports = __webpack_exports__;

})();