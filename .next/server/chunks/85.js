"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Feedbacks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./components/FeedbackCard.tsx



const FeedbackCard = ({ name , mail , role , feedback  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
        className: "shadow-lg--hover shadow my-4 h-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardBody, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-flex px-3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pl-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardTitle, {
                            tag: "h4",
                            className: "mb-2",
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardSubtitle, {
                            tag: "h6",
                            className: "mb-2",
                            children: role
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "description mt-2",
                            children: feedback
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardSubtitle, {
                            tag: "h6",
                            className: "mt-3",
                            children: mail && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "btn-wrapper text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                    className: "btn-icon-only rounded-circle ml-1",
                                    color: "white",
                                    rel: "noopener",
                                    "aria-label": "URL",
                                    href: mail,
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "btn-inner--icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-envelope"
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_FeedbackCard = (FeedbackCard);

;// CONCATENATED MODULE: ./containers/Feedbacks.tsx





const Feedbacks = ()=>{
    return portfolio/* feedbacks */.KK && // <Fade bottom duration={2000}>
    /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-star text-info"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "display-3 text-info",
                                children: "Feedback"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                    className: "g-3",
                    children: portfolio/* feedbacks.map */.KK.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_FeedbackCard, {
                                ...data
                            })
                        }, i);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Feedbacks = (Feedbacks);


/***/ })

};
;