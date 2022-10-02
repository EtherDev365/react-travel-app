(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Flights_js"],{

/***/ "./node_modules/@mui/base/utils/appendOwnerState.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/base/utils/appendOwnerState.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendOwnerState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _isHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isHostComponent */ "./node_modules/@mui/base/utils/isHostComponent.js");


/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
 * @param existingProps Props of the element.
 * @param ownerState
 */

function appendOwnerState(elementType, existingProps = {}, ownerState) {
  if ((0,_isHostComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(elementType)) {
    return existingProps;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existingProps, {
    ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existingProps.ownerState, ownerState)
  });
}

/***/ }),

/***/ "./node_modules/@mui/icons-material/Add.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/icons-material/Add.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/ArrowDropDown.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowDropDown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m7 10 5 5 5-5z"
}), 'ArrowDropDown');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/ExpandLess.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ExpandLess.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/ExpandMore.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ExpandMore.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/FlightLand.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/FlightLand.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"
}), 'FlightLand');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/FlightTakeoff.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/FlightTakeoff.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"
}), 'FlightTakeoff');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/MultipleStop.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/MultipleStop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m17 4 4 4-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h4v-2H7v-3l-4 4 4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
}), 'MultipleStop');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/PersonOutline.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/PersonOutline.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
}), 'PersonOutline');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Remove.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Remove.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Repeat.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Repeat.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
}), 'Repeat');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Search.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Search.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/TrendingFlat.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/TrendingFlat.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m22 12-4-4v3H3v2h15v3z"
}), 'TrendingFlat');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/material/Avatar/Avatar.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/Avatar/Avatar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _internal_svg_icons_Person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/Person */ "./node_modules/@mui/material/internal/svg-icons/Person.js");
/* harmony import */ var _avatarClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatarClasses */ "./node_modules/@mui/material/Avatar/avatarClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ['root', variant, colorDefault && 'colorDefault'],
    img: ['img'],
    fallback: ['fallback']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _avatarClasses__WEBPACK_IMPORTED_MODULE_6__.getAvatarUtilityClass, classes);
};

const AvatarRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none'
}, ownerState.variant === 'rounded' && {
  borderRadius: theme.shape.borderRadius
}, ownerState.variant === 'square' && {
  borderRadius: 0
}, ownerState.colorDefault && {
  color: theme.palette.background.default,
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
}));
const AvatarImg = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('img', {
  name: 'MuiAvatar',
  slot: 'Img',
  overridesResolver: (props, styles) => styles.img
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_internal_svg_icons_Person__WEBPACK_IMPORTED_MODULE_8__["default"], {
  name: 'MuiAvatar',
  slot: 'Fallback',
  overridesResolver: (props, styles) => styles.fallback
})({
  width: '75%',
  height: '75%'
});

function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    let active = true;
    const image = new Image();

    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;

    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}

const Avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Avatar(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiAvatar'
  });

  const {
    alt,
    children: childrenProp,
    className,
    component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  let children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  const loaded = useLoaded((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, imgProps, {
    src,
    srcSet
  }));
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    colorDefault: !hasImgNotFailing,
    component,
    variant
  });

  const classes = useUtilityClasses(ownerState);

  if (hasImgNotFailing) {
    children = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AvatarImg, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      ownerState: ownerState,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AvatarFallback, {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AvatarRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ref: ref
  }, other, {
    children: children
  }));
});
 true ? Avatar.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The `src` attribute for the `img` element.
   */
  src: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['circular', 'rounded', 'square']), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "./node_modules/@mui/material/Avatar/avatarClasses.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/Avatar/avatarClasses.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvatarUtilityClass": () => (/* binding */ getAvatarUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getAvatarUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiAvatar', slot);
}
const avatarClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (avatarClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Collapse/Collapse.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/Collapse/Collapse.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_createTransitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/createTransitions */ "./node_modules/@mui/material/styles/createTransitions.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@mui/material/transitions/utils.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _collapseClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapseClasses */ "./node_modules/@mui/material/Collapse/collapseClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];















const useUtilityClasses = ownerState => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `${orientation}`],
    entered: ['entered'],
    hidden: ['hidden'],
    wrapper: ['wrapper', `${orientation}`],
    wrapperInner: ['wrapperInner', `${orientation}`]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _collapseClasses__WEBPACK_IMPORTED_MODULE_6__.getCollapseUtilityClass, classes);
};

const CollapseRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCollapse',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.state === 'entered' && styles.entered, ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  height: 0,
  overflow: 'hidden',
  transition: theme.transitions.create('height')
}, ownerState.orientation === 'horizontal' && {
  height: 'auto',
  width: 0,
  transition: theme.transitions.create('width')
}, ownerState.state === 'entered' && (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  height: 'auto',
  overflow: 'visible'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto'
}), ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && {
  visibility: 'hidden'
}));
const CollapseWrapper = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCollapse',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: 'flex',
  width: '100%'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto',
  height: '100%'
}));
const CollapseWrapperInner = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCollapse',
  slot: 'WrapperInner',
  overridesResolver: (props, styles) => styles.wrapperInner
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  width: '100%'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto',
  height: '100%'
}));
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Collapse = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Collapse(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiCollapse'
  });

  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    style,
    timeout = _styles_createTransitions__WEBPACK_IMPORTED_MODULE_9__.duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_10__["default"]
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    orientation,
    collapsedSize: collapsedSizeProp
  });

  const classes = useUtilityClasses(ownerState);
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const timer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const wrapperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const autoTransitionDuration = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === 'horizontal';
  const size = isHorizontal ? 'width' : 'height';
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(ref, nodeRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }

    node.style[size] = collapsedSize;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }

    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_13__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = `${wrapperSize}px`;
    node.style.transitionTimingFunction = transitionTimingFunction;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback(node => {
    node.style[size] = `${getWrapperSize()}px`;

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback(node => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_13__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });

    if (timeout === 'auto') {
      // TODO: rename getAutoHeightDuration to something more generic (width support)
      // Actually it just calculates animation duration based on size
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;

    if (onExiting) {
      onExiting(node);
    }
  });

  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }

    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CollapseRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      as: component,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedSize === '0px' && classes.hidden
      }[state]),
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize
      }, style),
      ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState, {
        state
      }),
      ref: handleRef
    }, childProps, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CollapseWrapper, {
        ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState, {
          state
        }),
        className: classes.wrapper,
        ref: wrapperRef,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CollapseWrapperInner, {
          ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState, {
            state
          }),
          className: classes.wrapperInner,
          children: children
        })
      })
    }))
  }));
});
 true ? Collapse.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * The content node to be collapsed.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),

  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _mui_utils__WEBPACK_IMPORTED_MODULE_15__["default"],

  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),

  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)
  })])
} : 0;
Collapse.muiSupportAuto = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);

/***/ }),

/***/ "./node_modules/@mui/material/Collapse/collapseClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/material/Collapse/collapseClasses.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollapseUtilityClass": () => (/* binding */ getCollapseUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getCollapseUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCollapse', slot);
}
const collapseClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collapseClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Divider/Divider.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/Divider/Divider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _dividerClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dividerClasses */ "./node_modules/@mui/material/Divider/dividerClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];










const useUtilityClasses = ownerState => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _dividerClasses__WEBPACK_IMPORTED_MODULE_6__.getDividerUtilityClass, classes);
};

const DividerRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderBottomWidth: 'thin'
}, ownerState.absolute && {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%'
}, ownerState.light && {
  borderColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.divider, 0.08)
}, ownerState.variant === 'inset' && {
  marginLeft: 72
}, ownerState.variant === 'middle' && ownerState.orientation === 'horizontal' && {
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2)
}, ownerState.variant === 'middle' && ownerState.orientation === 'vertical' && {
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)
}, ownerState.orientation === 'vertical' && {
  height: '100%',
  borderBottomWidth: 0,
  borderRightWidth: 'thin'
}, ownerState.flexItem && {
  alignSelf: 'stretch',
  height: 'auto'
}), ({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.children && {
  display: 'flex',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  border: 0,
  '&::before, &::after': {
    position: 'relative',
    width: '100%',
    borderTop: `thin solid ${theme.palette.divider}`,
    top: '50%',
    content: '""',
    transform: 'translateY(50%)'
  }
}), ({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.children && ownerState.orientation === 'vertical' && {
  flexDirection: 'column',
  '&::before, &::after': {
    height: '100%',
    top: '0%',
    left: '50%',
    borderTop: 0,
    borderLeft: `thin solid ${theme.palette.divider}`,
    transform: 'translateX(0%)'
  }
}), ({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && {
  '&::before': {
    width: '90%'
  },
  '&::after': {
    width: '10%'
  }
}, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && {
  '&::before': {
    width: '10%'
  },
  '&::after': {
    width: '90%'
  }
}));
const DividerWrapper = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('span', {
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`
}, ownerState.orientation === 'vertical' && {
  paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
}));
const Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Divider(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiDivider'
  });

  const {
    absolute = false,
    children,
    className,
    component = children ? 'div' : 'hr',
    flexItem = false,
    light = false,
    orientation = 'horizontal',
    role = component !== 'hr' ? 'separator' : undefined,
    textAlign = 'center',
    variant = 'fullWidth'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DividerRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    role: role,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DividerWrapper, {
      className: classes.wrapper,
      ownerState: ownerState,
      children: children
    }) : null
  }));
});
 true ? Divider.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  role: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['center', 'left', 'right']),

  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['fullWidth', 'inset', 'middle']), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./node_modules/@mui/material/Divider/dividerClasses.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/material/Divider/dividerClasses.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDividerUtilityClass": () => (/* binding */ getDividerUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getDividerUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiDivider', slot);
}
const dividerClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dividerClasses);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@mui/material/List/ListContext.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _listItemAvatarClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listItemAvatarClasses */ "./node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className"];










const useUtilityClasses = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _listItemAvatarClasses__WEBPACK_IMPORTED_MODULE_6__.getListItemAvatarUtilityClass, classes);
};

const ListItemAvatarRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiListItemAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  minWidth: 56,
  flexShrink: 0
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));
/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 */

const ListItemAvatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemAvatar(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiListItemAvatar'
  });

  const {
    className
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    alignItems: context.alignItems
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ListItemAvatarRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 true ? ListItemAvatar.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally an `Avatar`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemAvatar);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListItemAvatarUtilityClass": () => (/* binding */ getListItemAvatarUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getListItemAvatarUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiListItemAvatar', slot);
}
const listItemAvatarClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiListItemAvatar', ['root', 'alignItemsFlexStart']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemAvatarClasses);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemButton/ListItemButton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemButton/ListItemButton.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overridesResolver": () => (/* binding */ overridesResolver),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@mui/material/utils/useEnhancedEffect.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@mui/material/List/ListContext.js");
/* harmony import */ var _listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listItemButtonClasses */ "./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected"];













const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};

const useUtilityClasses = ownerState => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', divider && 'divider', disabled && 'disabled', alignItems === 'flex-start' && 'alignItemsFlexStart', selected && 'selected']
  };
  const composedClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__.getListItemButtonUtilityClass, classes);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes, composedClasses);
};

const ListItemButtonRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
  shouldForwardProp: prop => (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__.rootShouldForwardProp)(prop) || prop === 'classes',
  name: 'MuiListItemButton',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__["default"].selected}`]: {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__["default"].focusVisible}`]: {
      backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__["default"].selected}:hover`]: {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__["default"].focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_6__["default"].disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}));
const ListItemButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemButton(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__["default"])({
    props: inProps,
    name: 'MuiListItemButton'
  });

  const {
    alignItems = 'center',
    autoFocus = false,
    component = 'div',
    children,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const childContext = {
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  };
  const listItemRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error('MUI: Unable to set focus to a ListItemButton whose component has not been rendered.');
      }
    }
  }, [autoFocus]);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  });

  const classes = useUtilityClasses(ownerState);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"])(listItemRef, ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_List_ListContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ListItemButtonRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ref: handleRef,
      component: component,
      focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.focusVisible, focusVisibleClassName),
      ownerState: ownerState
    }, other, {
      classes: classes,
      children: children
    }))
  });
});
 true ? ListItemButton.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(['center', 'flex-start']),

  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().elementType),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),

  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemButton);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListItemButtonUtilityClass": () => (/* binding */ getListItemButtonUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getListItemButtonUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiListItemButton', slot);
}
const listItemButtonClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemButtonClasses);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListItemIconUtilityClass": () => (/* binding */ getListItemIconUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getListItemIconUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemIconClasses);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemText/ListItemText.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemText/ListItemText.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@mui/material/List/ListContext.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _listItemTextClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listItemTextClasses */ "./node_modules/@mui/material/ListItemText/listItemTextClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"];












const useUtilityClasses = ownerState => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ['root', inset && 'inset', dense && 'dense', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _listItemTextClasses__WEBPACK_IMPORTED_MODULE_6__.getListItemTextUtilityClass, classes);
};

const ListItemTextRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_6__["default"].primary}`]: styles.primary
    }, {
      [`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_6__["default"].secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
}));
const ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemText(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiListItemText'
  });

  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const {
    dense
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  });

  const classes = useUtilityClasses(ownerState);

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_10__["default"] && !disableTypography) {
    primary = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps, {
      children: primary
    }));
  }

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_10__["default"] && !disableTypography) {
    secondary = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      variant: "body2",
      className: classes.secondary,
      color: "text.secondary",
      display: "block"
    }, secondaryTypographyProps, {
      children: secondary
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ListItemTextRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [primary, secondary]
  }));
});
 true ? ListItemText.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Alias for the `primary` prop.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The main content element.
   */
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * The secondary content element.
   */
  secondary: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemText);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemText/listItemTextClasses.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemText/listItemTextClasses.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListItemTextUtilityClass": () => (/* binding */ getListItemTextUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getListItemTextUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemTextClasses);

/***/ }),

/***/ "./node_modules/@mui/material/MenuItem/MenuItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/MenuItem/MenuItem.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overridesResolver": () => (/* binding */ overridesResolver),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@mui/material/List/ListContext.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@mui/material/utils/useEnhancedEffect.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Divider */ "./node_modules/@mui/material/Divider/dividerClasses.js");
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ListItemText */ "./node_modules/@mui/material/ListItemText/listItemTextClasses.js");
/* harmony import */ var _menuItemClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuItemClasses */ "./node_modules/@mui/material/MenuItem/menuItemClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"];
















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};

const useUtilityClasses = ownerState => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
  };
  const composedClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _menuItemClasses__WEBPACK_IMPORTED_MODULE_6__.getMenuItemUtilityClass, classes);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes, composedClasses);
};

const MenuItemRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
  shouldForwardProp: prop => (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__.rootShouldForwardProp)(prop) || prop === 'classes',
  name: 'MuiMenuItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body1, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: 'padding-box'
}, {
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${_menuItemClasses__WEBPACK_IMPORTED_MODULE_6__["default"].selected}`]: {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${_menuItemClasses__WEBPACK_IMPORTED_MODULE_6__["default"].focusVisible}`]: {
      backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${_menuItemClasses__WEBPACK_IMPORTED_MODULE_6__["default"].selected}:hover`]: {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${_menuItemClasses__WEBPACK_IMPORTED_MODULE_6__["default"].focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${_menuItemClasses__WEBPACK_IMPORTED_MODULE_6__["default"].disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  },
  [`& + .${_Divider__WEBPACK_IMPORTED_MODULE_10__["default"].root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${_Divider__WEBPACK_IMPORTED_MODULE_10__["default"].inset}`]: {
    marginLeft: 52
  },
  [`& .${_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"].root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"].inset}`]: {
    paddingLeft: 36
  },
  [`& .${_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"].root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up('sm')]: {
    minHeight: 'auto'
  }
}, ownerState.dense && (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  minHeight: 32,
  // https://material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"].root} svg`]: {
    fontSize: '1.25rem'
  }
})));
const MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function MenuItem(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_13__["default"])({
    props: inProps,
    name: 'MuiMenuItem'
  });

  const {
    autoFocus = false,
    component = 'li',
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = 'menuitem',
    tabIndex: tabIndexProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_14__["default"]);
  const childContext = {
    dense: dense || context.dense || false,
    disableGutters
  };
  const menuItemRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_15__["default"])(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      } else if (true) {
        console.error('MUI: Unable to set focus to a MenuItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });

  const classes = useUtilityClasses(props);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_16__["default"])(menuItemRef, ref);
  let tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_List_ListContext__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MenuItemRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ref: handleRef,
      role: role,
      tabIndex: tabIndex,
      component: component,
      focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.focusVisible, focusVisibleClassName)
    }, other, {
      ownerState: ownerState,
      classes: classes
    }))
  });
});
 true ? MenuItem.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * @ignore
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * @ignore
   */
  role: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * @ignore
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)]),

  /**
   * @default 0
   */
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().number)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "./node_modules/@mui/material/MenuItem/menuItemClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/material/MenuItem/menuItemClasses.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenuItemUtilityClass": () => (/* binding */ getMenuItemUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getMenuItemUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiMenuItem', slot);
}
const menuItemClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItemClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Skeleton/Skeleton.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/Skeleton/Skeleton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/system */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./node_modules/@mui/material/styles/cssUtils.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _skeletonClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skeletonClasses */ "./node_modules/@mui/material/Skeleton/skeletonClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["animation", "className", "component", "height", "style", "variant", "width"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ['root', variant, animation, hasChildren && 'withChildren', hasChildren && !width && 'fitContent', hasChildren && !height && 'heightAuto']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _skeletonClasses__WEBPACK_IMPORTED_MODULE_6__.getSkeletonUtilityClass, classes);
};

const pulseKeyframe = (0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.keyframes)(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
const waveKeyframe = (0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.keyframes)(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
const SkeletonRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  const radiusUnit = (0,_styles__WEBPACK_IMPORTED_MODULE_9__.getUnit)(theme.shape.borderRadius) || 'px';
  const radiusValue = (0,_styles__WEBPACK_IMPORTED_MODULE_9__.toUnitless)(theme.shape.borderRadius);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'block',
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: (0,_styles__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
    height: '1.2em'
  }, ownerState.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    '&:empty:before': {
      content: '"\\00a0"'
    }
  }, ownerState.variant === 'circular' && {
    borderRadius: '50%'
  }, ownerState.hasChildren && {
    '& > *': {
      visibility: 'hidden'
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: 'fit-content'
  }, ownerState.hasChildren && !ownerState.height && {
    height: 'auto'
  });
}, ({
  ownerState
}) => ownerState.animation === 'pulse' && (0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.css)(_t3 || (_t3 = _`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === 'wave' && (0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.css)(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, theme.palette.action.hover));
const Skeleton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Skeleton(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__["default"])({
    props: inProps,
    name: 'MuiSkeleton'
  });

  const {
    animation = 'pulse',
    className,
    component = 'span',
    height,
    style,
    variant = 'text',
    width
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SkeletonRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width,
      height
    }, style)
  }));
});
 true ? Skeleton.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['pulse', 'wave', false]),

  /**
   * Optional children to infer width and height from.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType),

  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['circular', 'rectangular', 'text']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);

/***/ }),

/***/ "./node_modules/@mui/material/Skeleton/skeletonClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/material/Skeleton/skeletonClasses.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSkeletonUtilityClass": () => (/* binding */ getSkeletonUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getSkeletonUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiSkeleton', slot);
}
const skeletonClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skeletonClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Stack/Stack.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Stack/Stack.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/spacing.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/deepmerge.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["component", "direction", "spacing", "divider", "children"];






/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }

    return output;
  }, []);
}

const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'flex'
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
    theme
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.createUnarySpacing)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.spacing,
      base
    });

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.getValue)(transformer, propValue)
        }
      };
    };

    styles = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
const StackRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__["default"])(themeProps);

  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StackRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 true ? Stack.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * Add an element between each child.
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),

  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ "./node_modules/@mui/material/Tooltip/Tooltip.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/Tooltip/Tooltip.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testReset": () => (/* binding */ testReset),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/utils/appendOwnerState.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grow */ "./node_modules/@mui/material/Grow/Grow.js");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Popper */ "./node_modules/@mui/material/Popper/Popper.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@mui/material/utils/useEventCallback.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _utils_useId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/useId */ "./node_modules/@mui/material/utils/useId.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@mui/material/utils/useIsFocusVisible.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@mui/material/utils/useControlled.js");
/* harmony import */ var _tooltipClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltipClasses */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"];





















function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const useUtilityClasses = ownerState => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', `tooltipPlacement${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(placement.split('-')[0])}`],
    arrow: ['arrow']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _tooltipClasses__WEBPACK_IMPORTED_MODULE_7__.getTooltipUtilityClass, classes);
};

const TooltipPopper = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_Popper__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  zIndex: theme.zIndex.tooltip,
  pointerEvents: 'none'
}, !ownerState.disableInteractive && {
  pointerEvents: 'auto'
}, !open && {
  pointerEvents: 'none'
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].arrow}`]: {
    top: 0,
    marginTop: '-0.71em',
    '&::before': {
      transformOrigin: '0 100%'
    }
  },
  [`&[data-popper-placement*="top"] .${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].arrow}`]: {
    bottom: 0,
    marginBottom: '-0.71em',
    '&::before': {
      transformOrigin: '100% 0'
    }
  },
  [`&[data-popper-placement*="right"] .${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].arrow}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, !ownerState.isRtl ? {
    left: 0,
    marginLeft: '-0.71em'
  } : {
    right: 0,
    marginRight: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '100% 100%'
    }
  }),
  [`&[data-popper-placement*="left"] .${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].arrow}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, !ownerState.isRtl ? {
    right: 0,
    marginRight: '-0.71em'
  } : {
    left: 0,
    marginLeft: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '0 0'
    }
  })
}));
const TooltipTooltip = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.placement.split('-')[0])}`]];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette.grey[700], 0.92),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: 'relative',
  margin: 0
}, ownerState.touch && {
  padding: '8px 16px',
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].popper}[data-popper-placement*="left"] &`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transformOrigin: 'right center'
  }, !ownerState.isRtl ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  }) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  })),
  [`.${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].popper}[data-popper-placement*="right"] &`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transformOrigin: 'left center'
  }, !ownerState.isRtl ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  }) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  })),
  [`.${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].popper}[data-popper-placement*="top"] &`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transformOrigin: 'center bottom',
    marginBottom: '14px'
  }, ownerState.touch && {
    marginBottom: '24px'
  }),
  [`.${_tooltipClasses__WEBPACK_IMPORTED_MODULE_7__["default"].popper}[data-popper-placement*="bottom"] &`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transformOrigin: 'center top',
    marginTop: '14px'
  }, ownerState.touch && {
    marginTop: '24px'
  })
}));
const TooltipArrow = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow
})(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em'
  /* = width / sqrt(2) = (length of the hypotenuse) */
  ,
  boxSizing: 'border-box',
  color: (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette.grey[700], 0.9),
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  }
}));
let hystersisOpen = false;
let hystersisTimer = null;
function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}

function composeEventHandler(handler, eventHandler) {
  return event => {
    if (eventHandler) {
      eventHandler(event);
    }

    handler(event);
  };
} // TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.


const Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Tooltip(inProps, ref) {
  var _components$Popper, _ref, _components$Transitio, _components$Tooltip, _components$Arrow, _componentsProps$popp;

  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__["default"])({
    props: inProps,
    name: 'MuiTooltip'
  });

  const {
    arrow = false,
    children,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    title,
    TransitionComponent: TransitionComponentProp = _Grow__WEBPACK_IMPORTED_MODULE_12__["default"],
    TransitionProps
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const isRtl = theme.direction === 'rtl';
  const [childNode, setChildNode] = react__WEBPACK_IMPORTED_MODULE_2__.useState();
  const [arrowRef, setArrowRef] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const ignoreNonTouchEvents = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const enterTimer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const leaveTimer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const touchTimer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const [openState, setOpenState] = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_14__["default"])({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open'
  });
  let open = openState;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      current: isControlled
    } = react__WEBPACK_IMPORTED_MODULE_2__.useRef(openProp !== undefined); // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
      if (childNode && childNode.disabled && !isControlled && title !== '' && childNode.tagName.toLowerCase() === 'button') {
        console.error(['MUI: You are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Add a simple wrapper element, such as a `span`.'].join('\n'));
      }
    }, [title, childNode, isControlled]);
  }

  const id = (0,_utils_useId__WEBPACK_IMPORTED_MODULE_15__["default"])(idProp);
  const prevUserSelect = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const stopTouchInteraction = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    clearTimeout(touchTimer.current);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = event => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  });

  const handleEnter = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const handleLeave = event => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_17__["default"])(); // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.

  const [, setChildIsFocusVisible] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };

  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };

  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;

  const handleTouchStart = event => {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect; // Prevent iOS text selection on long-tap.

    document.body.style.WebkitUserSelect = 'none';
    touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleEnter(event);
    }, enterTouchDelay);
  };

  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (!open) {
      return undefined;
    }
    /**
     * @param {KeyboardEvent} nativeEvent
     */


    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleUseRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_18__["default"])(setChildNode, ref);
  const handleFocusRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_18__["default"])(focusVisibleRef, handleUseRef);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_18__["default"])(children.ref, handleFocusRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  }

  const positionRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef({
    x: 0,
    y: 0
  });
  const popperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();

  const handleMouseMove = event => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    positionRef.current = {
      x: event.clientX,
      y: event.clientY
    };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, nameOrDescProps, other, children.props, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});

  if (true) {
    childrenProps['data-mui-internal-clone-element'] = true; // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
      if (childNode && !childNode.getAttribute('data-mui-internal-clone-element')) {
        console.error(['MUI: The `children` component of the Tooltip is not forwarding its props correctly.', 'Please make sure that props are spread on the same element that the ref is applied to.'].join('\n'));
      }
    }, [childNode]);
  }

  const interactiveWrapperListeners = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  if (true) {
    if (children.props.title) {
      console.error(['MUI: You have provided a `title` prop to the child of <Tooltip />.', `Remove this title prop \`${children.props.title}\` or the Tooltip component.`].join('\n'));
    }
  }

  const popperOptions = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    var _PopperProps$popperOp;

    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];

    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });

  const classes = useUtilityClasses(ownerState);
  const PopperComponent = (_components$Popper = components.Popper) != null ? _components$Popper : TooltipPopper;
  const TransitionComponent = (_ref = (_components$Transitio = components.Transition) != null ? _components$Transitio : TransitionComponentProp) != null ? _ref : _Grow__WEBPACK_IMPORTED_MODULE_12__["default"];
  const TooltipComponent = (_components$Tooltip = components.Tooltip) != null ? _components$Tooltip : TooltipTooltip;
  const ArrowComponent = (_components$Arrow = components.Arrow) != null ? _components$Arrow : TooltipArrow;
  const popperProps = (0,_mui_base__WEBPACK_IMPORTED_MODULE_19__["default"])(PopperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, PopperProps, componentsProps.popper), ownerState);
  const transitionProps = (0,_mui_base__WEBPACK_IMPORTED_MODULE_19__["default"])(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, TransitionProps, componentsProps.transition), ownerState);
  const tooltipProps = (0,_mui_base__WEBPACK_IMPORTED_MODULE_19__["default"])(TooltipComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, componentsProps.tooltip), ownerState);
  const tooltipArrowProps = (0,_mui_base__WEBPACK_IMPORTED_MODULE_19__["default"])(ArrowComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, componentsProps.arrow), ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childrenProps), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PopperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      as: PopperComponentProp != null ? PopperComponentProp : _Popper__WEBPACK_IMPORTED_MODULE_9__["default"],
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: positionRef.current.y,
          left: positionRef.current.x,
          right: positionRef.current.x,
          bottom: positionRef.current.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.popper, PopperProps == null ? void 0 : PopperProps.className, (_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className),
      popperOptions: popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => {
        var _componentsProps$tool, _componentsProps$arro;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, transitionProps, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TooltipComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tooltipProps, {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.tooltip, (_componentsProps$tool = componentsProps.tooltip) == null ? void 0 : _componentsProps$tool.className),
            children: [title, arrow ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ArrowComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tooltipArrowProps, {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.arrow, (_componentsProps$arro = componentsProps.arrow) == null ? void 0 : _componentsProps$arro.className),
              ref: setArrowRef
            })) : null]
          }))
        }));
      }
    }))]
  });
});
 true ? Tooltip.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Tooltip reference element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_21__["default"].isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().string),

  /**
   * The components used for each slot inside the Tooltip.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_20___default().shape({
    Arrow: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType),
    Popper: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType),
    Tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType),
    Transition: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType)
  }),

  /**
   * The props used for each slot inside the Tooltip.
   * Note that `componentsProps.popper` prop values win over `PopperProps`
   * and `componentsProps.transition` prop values win over `TransitionProps` if both are applied.
   * @default {}
   */
  componentsProps: prop_types__WEBPACK_IMPORTED_MODULE_20___default().shape({
    arrow: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
    popper: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
    tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
    transition: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object)
  }),

  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number),

  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number),

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number),

  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().string),

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number),

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),

  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),

  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType),

  /**
   * Props applied to the [`Popper`](/api/popper/) element.
   * @default {}
   */
  PopperProps: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_20___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_20___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object)]),

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().node.isRequired),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType),

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "./node_modules/@mui/material/Tooltip/tooltipClasses.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/material/Tooltip/tooltipClasses.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTooltipUtilityClass": () => (/* binding */ getTooltipUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getTooltipUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTooltip', slot);
}
const tooltipClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/Typography.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/Typography.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyRoot": () => (/* binding */ TypographyRoot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _typographyClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typographyClasses */ "./node_modules/@mui/material/Typography/typographyClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];











const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _typographyClasses__WEBPACK_IMPORTED_MODULE_7__.getTypographyUtilityClass, classes);
};

const TypographyRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TypographyRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other));
});
 true ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/typographyClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/typographyClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypographyUtilityClass": () => (/* binding */ getTypographyUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getTypographyUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTypography', slot);
}
const typographyClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyClasses);

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/Person.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/Person.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/**
 * @ignore - internal component.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));

/***/ }),

/***/ "./node_modules/@mui/material/styles/cssUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/styles/cssUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": () => (/* binding */ isUnitless),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "toUnitless": () => (/* binding */ toUnitless),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "alignProperty": () => (/* binding */ alignProperty),
/* harmony export */   "fontGrid": () => (/* binding */ fontGrid),
/* harmony export */   "responsiveProperty": () => (/* binding */ responsiveProperty)
/* harmony export */ });
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    let pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    } // Convert length in pixels to the output unit


    let outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

/***/ }),

/***/ "./resources/js/components/FlightSearchResult.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/FlightSearchResult.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/ExpandLess */ "./node_modules/@mui/icons-material/ExpandLess.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_icons_material_FlightTakeoff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/FlightTakeoff */ "./node_modules/@mui/icons-material/FlightTakeoff.js");
/* harmony import */ var _mui_icons_material_FlightLand__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/FlightLand */ "./node_modules/@mui/icons-material/FlightLand.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./resources/js/constants.js");
/* harmony import */ var _data_airlines_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/airlines.json */ "./resources/js/data/airlines.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function FlightSearchResult() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.flight;
  }),
      flights = _useSelector.flights,
      loading = _useSelector.loading,
      error = _useSelector.error; // const flights = tempData.PricedItineraries;


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClick = function handleClick(index) {
    if (index === open) setOpen(-1);else setOpen(index);
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return setOpen(-1);
  }, [flights]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      bgcolor: 'background.paper',
      marginTop: 5,
      marginX: 2
    },
    subheader: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      component: "div",
      sx: {
        top: 68.5
      },
      children: "Search Results"
    }),
    children: [flights.length === 0 && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "w-full text-center text-2xl text-slate-500",
      children: "No data!"
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "w-full text-center text-2xl text-slate-500",
      children: "Net connection error!"
    }), flights.map(function (item, index) {
      var flightSegments = item.AirItinerary.OriginDestinationOptions[0].FlightSegments;
      var stops = flightSegments.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "inset",
          component: "li"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          alignItems: "flex-start",
          onClick: function onClick() {
            return handleClick(index);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              alt: flightSegments[0].MarketingAirlineName,
              variant: "rounded",
              src: _constants__WEBPACK_IMPORTED_MODULE_2__.base_url + '/' + flightSegments[0].AirlineLogo
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
            sx: {
              width: '85%'
            },
            primary: flightSegments[0].MarketingAirlineName,
            secondary: flightSegments[0].DepartureDate + ' ~ ' + flightSegments[stops].ArrivalDate
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
            sx: {
              width: '15%'
            },
            primary: stops === 0 ? 'Nonstop' : "".concat(stops, " stop"),
            secondary: item.AirItinerary.OriginDestinationOptions[0].JourneyTotalDuration
          }), open === index ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__["default"], {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
          "in": open === index,
          timeout: "auto",
          unmountOnExit: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            component: "div",
            disablePadding: false,
            children: flightSegments.map(function (flightSegment, subIndex) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  variant: "inset",
                  component: "li"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  sx: {
                    pl: 4
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    title: flightSegment.MarketingAirlineName,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        alt: flightSegment.MarketingAirlineName,
                        variant: "rounded",
                        src: _constants__WEBPACK_IMPORTED_MODULE_2__.base_url + '/' + flightSegment.AirlineLogo
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    sx: {
                      width: '50%'
                    },
                    primary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_FlightTakeoff__WEBPACK_IMPORTED_MODULE_16__["default"], {
                        className: "mr-2 bg-gray-300 rounded-t-full"
                      }), flightSegment.DepartureDate]
                    }),
                    secondary: flightSegment.DepartureAirport + '(' + flightSegment.DepartureAirportName + ')'
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    sx: {
                      width: '50%'
                    },
                    primary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_FlightLand__WEBPACK_IMPORTED_MODULE_17__["default"], {
                        className: "mr-2 bg-gray-300 rounded-t-full"
                      }), flightSegment.ArrivalDate]
                    }),
                    secondary: flightSegment.ArrivalAirport + '(' + flightSegment.ArrivalAirportName + ')'
                  })]
                })]
              }, subIndex);
            })
          })
        })]
      }, index);
    }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      direction: "column",
      spacing: 1,
      sx: {
        pl: 2
      },
      divider: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "inset",
        orientation: "horizontal"
      }),
      children: _toConsumableArray(Array(6)).map(function (value, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
          direction: "row",
          spacing: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
            variant: "rectangular",
            width: 45,
            height: 45,
            animation: "wave",
            sx: {
              borderRadius: 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
            direction: "column",
            spacing: 0.4,
            justifyContent: "center",
            alignItems: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
              variant: "text",
              animation: "wave",
              width: 150
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
              variant: "text",
              animation: "wave",
              width: 300
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
            direction: "column",
            spacing: 0.4,
            justifyContent: "center",
            alignItems: "flex-end",
            sx: {
              position: 'absolute',
              right: 10
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
              variant: "text",
              animation: "wave",
              width: 100
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
              variant: "text",
              animation: "wave",
              width: 200
            })]
          })]
        }, index);
      })
    })]
  });
} // FlightSearchResult.propTypes = {
//     data: PropTypes.array.isRequired
// };
// // Specifies the default values for props:
// FlightSearchResult.defaultProps = {
//     data: []
// };


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlightSearchResult);

/***/ }),

/***/ "./resources/js/components/PassengerSelector.js":
/*!******************************************************!*\
  !*** ./resources/js/components/PassengerSelector.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_passengerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/passengerSlice */ "./resources/js/store/passengerSlice.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Popover/Popover.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ "./node_modules/@mui/icons-material/PersonOutline.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Remove */ "./node_modules/@mui/icons-material/Remove.js");
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ "./node_modules/@mui/icons-material/ArrowDropDown.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var errorStrings = ["Sorry, we do not support more than 9 passengers.", "You must have at least one adult per infant on lap.", "You must have at least one adult per two infants."];
var membersList = [{
  title: "Adults",
  desc: "",
  "short": "adu",
  min: 1,
  max: 9
}, {
  title: "Children",
  desc: "Aged 2-11",
  "short": "chi",
  min: 0,
  max: 9
}, {
  title: "Infants",
  desc: "In seat",
  "short": "ifs",
  min: 0,
  max: 9
}, {
  title: "Infants",
  desc: "On lap",
  "short": "ifl",
  min: 0,
  max: 9
}];
var initMembers = null;

function PassengerSelector() {
  var members = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_passengerSlice__WEBPACK_IMPORTED_MODULE_2__.selectPassengerMembers);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      total = _React$useState2[0],
      setTotal = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(-1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      anchorEl = _React$useState6[0],
      setAnchorEl = _React$useState6[1];

  var open = Boolean(anchorEl);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setError(function () {
      var total = 0;
      var totalInfants = 0;

      for (var key in members) {
        total += members[key];
        if (key === "ifs" || key === "ifl") totalInfants += members[key];
      }

      if (total > 9) return 0;
      if (members.ifl > members.adu) return 1;
      if (totalInfants > members.adu * 2) return 2;
      return -1;
    });
  }, [members]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (open) {
      initMembers = _objectSpread({}, members);
    } else if (initMembers) {
      dispatch((0,_store_passengerSlice__WEBPACK_IMPORTED_MODULE_2__.setMembers)(initMembers));
    }
  }, [open]);

  var handleMembersClick = function handleMembersClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleDoneClick = function handleDoneClick() {
    initMembers = _objectSpread({}, members);
    setTotal(function () {
      var totalTemp = 0;

      for (var key in members) {
        totalTemp += members[key];
      }

      return totalTemp;
    });
    handleClose();
  };

  var membersSelectBtnClasses = "box-border relative inline-flex items-center text-base rounded cursor-text border-solid border-[1px] border-gray-400 hover:border-black min-h-[60px]";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "inline-flex flex-col relative align-top border-0 p-0 min-w-[130px] ml-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: membersSelectBtnClasses + (open ? " border-[#1976d2] border-2" : ""),
        onClick: handleMembersClick,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden min-h-[1.5rem] select-none rounded cursor-pointer border-0 box-content m-0 block min-w-0 w-full animate-[mui-auto-fill-cancel] px-3.5 py-4 pr-[32px]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "absolute left-2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute left-0 w-full text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-base text-gray-500",
              children: total
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: open ? "right-2 absolute rotate-180" : "right-2 absolute"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      className: "w-[250] max-w-xs",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        px: 2,
        py: 1,
        direction: "column",
        spacing: 1,
        divider: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          flexItem: true
        }),
        children: [membersList.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "w-1/2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "font-medium text-gray-900 text-md",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-sm font-normal",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: item.desc
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-1/2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                direction: "row",
                spacing: 1,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  "aria-label": "add",
                  color: "primary",
                  disabled: members[item["short"]] <= item.min,
                  onClick: function onClick() {
                    return dispatch((0,_store_passengerSlice__WEBPACK_IMPORTED_MODULE_2__.handleMembersChange)({
                      key: item["short"],
                      inc: false
                    }));
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_10__["default"], {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "w-10 py-2 font-medium text-center text-gray-900 text-md",
                  children: members[item["short"]]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  "aria-label": "remove",
                  color: "primary",
                  disabled: members[item["short"]] >= item.max,
                  onClick: function onClick() {
                    dispatch((0,_store_passengerSlice__WEBPACK_IMPORTED_MODULE_2__.handleMembersChange)({
                      key: item["short"],
                      inc: true
                    }));
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                })]
              })
            })]
          }, index);
        }), error !== -1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-xs text-red-600 font",
          children: errorStrings[error]
        }), error === -1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          variant: "outlined",
          size: "large",
          onClick: handleDoneClick,
          children: "Done"
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassengerSelector);

/***/ }),

/***/ "./resources/js/pages/Flights.js":
/*!***************************************!*\
  !*** ./resources/js/pages/Flights.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _store_flightSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/flightSlice */ "./resources/js/store/flightSlice.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_icons_material_TrendingFlat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/TrendingFlat */ "./node_modules/@mui/icons-material/TrendingFlat.js");
/* harmony import */ var _mui_icons_material_MultipleStop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/MultipleStop */ "./node_modules/@mui/icons-material/MultipleStop.js");
/* harmony import */ var _images_flights_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/flights.svg */ "./resources/images/flights.svg");
/* harmony import */ var _components_PassengerSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PassengerSelector */ "./resources/js/components/PassengerSelector.js");
/* harmony import */ var _mui_icons_material_Repeat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/Repeat */ "./node_modules/@mui/icons-material/Repeat.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _services_ResvoyageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ResvoyageService */ "./resources/js/services/ResvoyageService.js");
/* harmony import */ var _components_FlightSearchResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FlightSearchResult */ "./resources/js/components/FlightSearchResult.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














 // import SearchItem from "../components/SearchItem";






var SearchItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_SearchItem_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/SearchItem */ "./resources/js/components/SearchItem.js"));
});
var initialSearchItem = {
  from: '',
  to: '',
  date: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), 'MM/dd/yyyy'),
  dates: [(0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), 'MM/dd/yyyy'), null]
};

function Flights() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openNotify = _React$useState2[0],
      setOpenNotify = _React$useState2[1];

  var form = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return _objectSpread({}, state.flight);
  }),
      flightWay = _useSelector.flightWay,
      flightClass = _useSelector.flightClass,
      searchItems = _useSelector.searchItems,
      flights = _useSelector.flights,
      error = _useSelector.error;

  var members = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.passenger.members;
  }); // const flightClass = useSelector(selectFlightClass);
  // const searchItems = useSelector(selectFlightSearchItems);

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var token = _services_ResvoyageService__WEBPACK_IMPORTED_MODULE_7__["default"].getToken();
    token["catch"](function (r) {
      setOpenNotify(true);
    });
  }, []); // const [searchItems, setSearchItems] = React.useState([initialSearchItem]);

  var handleFlightWayChange = function handleFlightWayChange(event) {
    if (event.target.value !== 2) {
      dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightSearchItems)([searchItems[0]]));
    }

    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightWay)(event.target.value));
  };

  var handleFlightClassChange = function handleFlightClassChange(event) {
    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightClass)(event.target.value));
  };

  var handleAddClick = function handleAddClick() {
    var tmp = _toConsumableArray(searchItems);

    tmp.push(initialSearchItem);
    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightSearchItems)(tmp));
  };

  var handleRemoveClick = function handleRemoveClick(index) {
    var tmp = _toConsumableArray(searchItems);

    tmp.splice(index, 1);
    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightSearchItems)(tmp));
  };

  var handleChangeSearchItem = function handleChangeSearchItem(from, to, date, dates, index) {
    var record = {
      from: from,
      to: to,
      date: date,
      dates: dates
    };

    var tmp = _toConsumableArray(searchItems);

    tmp.splice(index, 1, record);
    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.setFlightSearchItems)(tmp));
  };

  var handleSearchClick = function handleSearchClick(event) {
    event.preventDefault();
    var payload = null;
    payload = {
      flightWay: flightWay,
      flightClass: flightClass,
      members: members,
      from: searchItems[0].from,
      to: searchItems[0].to,
      date: searchItems[0].date,
      dates: searchItems[0].dates
    };
    dispatch((0,_store_flightSlice__WEBPACK_IMPORTED_MODULE_4__.searchFlightsAsync)(payload));
  };

  var handleNotifyClose = function handleNotifyClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotify(false);
  };

  var action = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: handleNotifyClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__["default"], {
        fontSize: "small"
      })
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("main", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
      title: 'hello',
      htmlAttributes: {
        lang: 'en'
      },
      meta: [{
        name: "description",
        content: 'description'
      }]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
        className: "flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-full",
        src: _images_flights_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
        alt: "People working on laptops"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      elevation: 3,
      className: "p-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
        ref: form,
        onSubmit: handleSearchClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
          py: 1,
          direction: {
            xs: 'column',
            sm: 'column',
            md: 'row'
          },
          spacing: {
            xs: 1,
            sm: 2,
            md: 6
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
            sx: {
              minWidth: 150
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
              value: flightWay,
              onChange: handleFlightWayChange,
              autoWidth: true,
              displayEmpty: true,
              sx: {
                minHeight: 60
              },
              inputProps: {
                'aria-label': 'Without label'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 0,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Repeat__WEBPACK_IMPORTED_MODULE_18__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  children: "Round trip"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 1,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_TrendingFlat__WEBPACK_IMPORTED_MODULE_19__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  children: "One way"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_MultipleStop__WEBPACK_IMPORTED_MODULE_20__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  children: "Multi-city"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PassengerSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
            sx: {
              minWidth: 150
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
              value: flightClass,
              onChange: handleFlightClassChange,
              autoWidth: true,
              displayEmpty: true,
              sx: {
                minHeight: 60
              },
              inputProps: {
                'aria-label': 'Without label'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 0,
                children: "Economy"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 1,
                children: "Premium economy"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 2,
                children: "Business"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                value: 3,
                children: "First"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            children: "Loading..."
          }),
          children: searchItems.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SearchItem, {
              data: item,
              datePickerType: flightWay === 0 ? 'range' : 'single',
              removable: flightWay === 2 && searchItems.length > 1,
              removeCallback: function removeCallback() {
                return handleRemoveClick(index);
              },
              changeCallback: function changeCallback(from, to, date, dates) {
                return handleChangeSearchItem(from, to, date, dates, index);
              }
            }, index);
          })
        }), flightWay === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
          py: 1,
          direction: {
            xs: 'column',
            sm: 'column',
            md: 'row'
          },
          spacing: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
            variant: "contained",
            onClick: handleAddClick,
            startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_22__["default"], {}),
            color: "secondary",
            children: "Add Flight"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "relative w-full h-4 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
            type: "submit",
            size: "large",
            variant: "contained",
            className: " absolute left-0 top-4 !rounded-full" // onClick={handleSearchClick}
            ,
            startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_23__["default"], {}),
            children: "Search"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_FlightSearchResult__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      open: openNotify,
      autoHideDuration: 5000,
      onClose: handleNotifyClose,
      action: action,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
        onClose: handleNotifyClose,
        severity: "error",
        sx: {
          width: '100%'
        },
        children: "Please check your network connection!"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flights);

/***/ }),

/***/ "./resources/images/flights.svg":
/*!**************************************!*\
  !*** ./resources/images/flights.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/flights.svg?0a3bed39de439ebc20336e4fe7de9503");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/es/Helmet.js":
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_3__);






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : __webpack_require__.g.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : __webpack_require__.g.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react__WEBPACK_IMPORTED_MODULE_2__.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_2__.Component), _class.propTypes = {
        base: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),
        defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        defer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
        encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
        htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        link: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        noscript: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
        script: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        style: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_0___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelmetExport);



/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./resources/js/data/airlines.json":
/*!*****************************************!*\
  !*** ./resources/js/data/airlines.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"PricedItineraries":[{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL765","FlightNumber":"765","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T20:25:00","ArrivalDate":"2022-02-28T22:38:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A320-100/200 JET","BookingClass":"W","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":8},{"RouteNumber":"DL159","FlightNumber":"159","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"P","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Premium","JourneyTotalDuration":"1.15:05:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":12193.03,"BasePrice":11155,"Tax":538.03,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"765","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7008,"BasePrice":7008,"Markup":200,"Discount":0,"Tax":308.06,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7516.06,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3449,"BasePrice":3449,"Markup":100,"Discount":0,"Tax":154.03,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3703.03,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"765","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":698,"BasePrice":698,"Markup":200,"Discount":0,"Tax":75.94,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":973.94,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"DL","AdditionalFareInfos":[{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null}]},"Id":"ec56a6dc-335b-4134-9ad6-d2e39edb3e82","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL893","FlightNumber":"893","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T17:29:00","ArrivalDate":"2022-02-28T19:31:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":null,"BookingClass":"W","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":6},{"RouteNumber":"DL159","FlightNumber":"159","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"P","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Premium","JourneyTotalDuration":"1.18:01:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":12193.03,"BasePrice":11155,"Tax":538.03,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"893","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7008,"BasePrice":7008,"Markup":200,"Discount":0,"Tax":308.06,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7516.06,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3449,"BasePrice":3449,"Markup":100,"Discount":0,"Tax":154.03,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3703.03,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"893","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":698,"BasePrice":698,"Markup":200,"Discount":0,"Tax":75.94,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":973.94,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"DL","AdditionalFareInfos":[{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null}]},"Id":"f3cc9667-5aa7-4bd4-82a1-91f2fe67cd22","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL1082","FlightNumber":"1082","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T14:58:00","ArrivalDate":"2022-02-28T17:08:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A320-100/200 JET","BookingClass":"W","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":4},{"RouteNumber":"DL159","FlightNumber":"159","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"P","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Premium","JourneyTotalDuration":"1.20:32:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":12193.03,"BasePrice":11155,"Tax":538.03,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1082","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7008,"BasePrice":7008,"Markup":200,"Discount":0,"Tax":308.06,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7516.06,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3449,"BasePrice":3449,"Markup":100,"Discount":0,"Tax":154.03,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3703.03,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1082","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":698,"BasePrice":698,"Markup":200,"Discount":0,"Tax":75.94,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":973.94,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"DL","AdditionalFareInfos":[{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null}]},"Id":"90ddb719-ab94-4ac1-9ec1-9596c9436eb1","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL1188","FlightNumber":"1188","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T12:59:00","ArrivalDate":"2022-02-28T15:06:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A319 JET","BookingClass":"Y","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"DL159","FlightNumber":"159","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"P","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Premium","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.22:31:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":12193.03,"BasePrice":11155,"Tax":538.03,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1188","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7008,"BasePrice":7008,"Markup":200,"Discount":0,"Tax":308.06,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7516.06,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3449,"BasePrice":3449,"Markup":100,"Discount":0,"Tax":154.03,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3703.03,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1188","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"159","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":698,"BasePrice":698,"Markup":200,"Discount":0,"Tax":75.94,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":973.94,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["PFFWUS","PFFWUS","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"DL","AdditionalFareInfos":[{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":null},{"FareReference":"PFFWUS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":null},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":null}]},"Id":"266cbe88-0718-45bf-9dab-5b067aacca27","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL765","FlightNumber":"765","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T20:25:00","ArrivalDate":"2022-02-28T22:38:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A320-100/200 JET","BookingClass":"Y","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.15:05:00"}],"TicketTimeLimit":"2022-02-28T20:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"765","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"765","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"1bd01892-bc69-48e8-a0cb-c9d0e15a0250","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL893","FlightNumber":"893","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T17:29:00","ArrivalDate":"2022-02-28T19:31:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.18:01:00"}],"TicketTimeLimit":"2022-02-28T17:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"893","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"893","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T17:29:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"d432e4f8-87c0-46e1-8166-fce2111456d4","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL1082","FlightNumber":"1082","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T14:58:00","ArrivalDate":"2022-02-28T17:08:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A320-100/200 JET","BookingClass":"Y","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.20:32:00"}],"TicketTimeLimit":"2022-02-28T14:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1082","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1082","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T14:58:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"5185bbf8-22ea-4766-8952-d64c823ed305","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"DL1188","FlightNumber":"1188","MarketingAirlineCode":"DL","MarketingAirlineName":"Delta Air Lines","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-02-28T12:59:00","ArrivalDate":"2022-02-28T15:06:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A319 JET","BookingClass":"Y","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/DL.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.22:31:00"}],"TicketTimeLimit":"2022-02-28T12:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1188","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"1188","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:59:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"85e70b91-f163-4524-a77f-32c544fe9962","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"AA4715","FlightNumber":"4715","MarketingAirlineCode":"AA","MarketingAirlineName":"American Airlines","OperatingAirlineName":"Unknown","OperatingAirlineCode":"ZZ","Duration":"00:00:00","DepartureDate":"2022-02-28T20:25:00","ArrivalDate":"2022-02-28T22:39:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"EMBRAER 170 JET","BookingClass":"Q","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=ZZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/AA.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":7},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.15:05:00"}],"TicketTimeLimit":"2022-02-28T20:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4715","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4715","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T20:25:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"1c036a13-4bab-4200-9c85-15bbf03707f2","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"AA4995","FlightNumber":"4995","MarketingAirlineCode":"AA","MarketingAirlineName":"American Airlines","OperatingAirlineName":"Unknown","OperatingAirlineCode":"ZZ","Duration":"00:00:00","DepartureDate":"2022-02-28T16:40:00","ArrivalDate":"2022-02-28T18:50:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"EMBRAER 170 JET","BookingClass":"S","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=ZZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/AA.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":4},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.18:50:00"}],"TicketTimeLimit":"2022-02-28T16:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4995","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4995","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T16:40:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T16:40:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T16:40:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"ebd378e7-f6ee-4662-807f-31881de8f12e","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"AA4944","FlightNumber":"4944","MarketingAirlineCode":"AA","MarketingAirlineName":"American Airlines","OperatingAirlineName":"Unknown","OperatingAirlineCode":"ZZ","Duration":"00:00:00","DepartureDate":"2022-02-28T12:15:00","ArrivalDate":"2022-02-28T14:25:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"EMBRAER 175 JET","BookingClass":"Q","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=ZZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/AA.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":5},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"1.23:15:00"}],"TicketTimeLimit":"2022-02-28T12:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4944","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4944","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:15:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:15:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T12:15:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"cb133c3a-ebbb-4886-968d-4e63edde0592","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"AA4674","FlightNumber":"4674","MarketingAirlineCode":"AA","MarketingAirlineName":"American Airlines","OperatingAirlineName":"Unknown","OperatingAirlineCode":"ZZ","Duration":"00:00:00","DepartureDate":"2022-02-28T11:10:00","ArrivalDate":"2022-02-28T13:25:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"DTW","ArrivalCountryCode":"US","Aircraft":"EMBRAER 175 JET","BookingClass":"Q","ArrivalAirportName":"Detroit-Detroit Metro, MI, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=ZZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/AA.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":4},{"RouteNumber":"KE7274","FlightNumber":"7274","MarketingAirlineCode":"KE","MarketingAirlineName":"Korean Air","OperatingAirlineName":"Delta Air Lines","OperatingAirlineCode":"DL","Duration":"00:00:00","DepartureDate":"2022-03-01T12:25:00","ArrivalDate":"2022-03-02T16:30:00","DepartureAirport":"DTW","DepartureCountryCode":"US","ArrivalAirport":"ICN","ArrivalCountryCode":"KR","Aircraft":null,"BookingClass":"Y","ArrivalAirportName":"Seoul-Incheon International, Korea Republic","DepartureAirportName":"Detroit-Detroit Metro, MI, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=DL","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/KE.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"OZ745","FlightNumber":"745","MarketingAirlineCode":"OZ","MarketingAirlineName":"Asiana Airlines","OperatingAirlineName":"Asiana Airlines","OperatingAirlineCode":"OZ","Duration":"00:00:00","DepartureDate":"2022-03-02T22:00:00","ArrivalDate":"2022-03-03T00:30:00","DepartureAirport":"ICN","DepartureCountryCode":"KR","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"AIRBUS INDUSTRIE A330-300 JET","BookingClass":"Q","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Seoul-Incheon International, Korea Republic","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=OZ","FreeBaggages":[{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":1,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Economy","AirlineLogo":"content/airline-logos/OZ.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Economy","JourneyTotalDuration":"2.00:20:00"}],"TicketTimeLimit":"2022-02-28T11:00:00"},"AirItineraryPricingInfo":{"TotalPrice":12699.45,"BasePrice":11292,"Tax":907.45,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4674","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":7094,"BasePrice":7094,"Markup":200,"Discount":0,"Tax":553.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":7847.1,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":3492,"BasePrice":3492,"Markup":100,"Discount":0,"Tax":276.55,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":3868.55,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"4674","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"7274","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"745","FreeQuantity":1,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":706,"BasePrice":706,"Markup":200,"Discount":0,"Tax":77.8,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":983.8,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["Y","Y","QLOKS"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"KE","AdditionalFareInfos":[{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T11:10:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T11:10:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T11:10:00","ArrivalAirport":"DTW","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"Y","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"DTW","DepartureDate":"2022-03-01T12:25:00","ArrivalAirport":"ICN","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}},{"FareReference":"QLOKS","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ICN","DepartureDate":"2022-03-02T22:00:00","ArrivalAirport":"HKG","Penalty":{"Type":"PENALTY APPLIES","Amount":0,"IsPercent":null}}]},"Id":"d8c9634e-0a3d-4a74-a20a-e9f40c300a8f","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"NH7749","FlightNumber":"7749","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"United Airlines","OperatingAirlineCode":"UA","Duration":"00:00:00","DepartureDate":"2022-02-28T08:00:00","ArrivalDate":"2022-02-28T09:39:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"ORD","ArrivalCountryCode":"US","Aircraft":"AIRBUS INDUSTRIE A319 JET","BookingClass":"Z","ArrivalAirportName":"Chicago-O\'hare Intl, IL, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=UA","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":7},{"RouteNumber":"NH11","FlightNumber":"11","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"All Nippon Airways","OperatingAirlineCode":"NH","Duration":"00:00:00","DepartureDate":"2022-02-28T10:40:00","ArrivalDate":"2022-03-01T15:00:00","DepartureAirport":"ORD","DepartureCountryCode":"US","ArrivalAirport":"NRT","ArrivalCountryCode":"JP","Aircraft":"BOEING 777-300/300ER JET","BookingClass":"Z","ArrivalAirportName":"Tokyo-Narita, Japan","DepartureAirportName":"Chicago-O\'hare Intl, IL, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=NH","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"NH811","FlightNumber":"811","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"All Nippon Airways","OperatingAirlineCode":"NH","Duration":"00:00:00","DepartureDate":"2022-03-01T18:30:00","ArrivalDate":"2022-03-01T22:45:00","DepartureAirport":"NRT","DepartureCountryCode":"JP","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"BOEING 787-8 DREAMLINER JET","BookingClass":"Z","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Tokyo-Narita, Japan","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=NH","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Business","JourneyTotalDuration":"1.01:45:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":16738.1,"BasePrice":15782,"Tax":456.1,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"7749","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"11","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"811","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":9864,"BasePrice":9864,"Markup":200,"Discount":0,"Tax":269.4,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":10333.4,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":4932,"BasePrice":4932,"Markup":100,"Discount":0,"Tax":130.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":5162.1,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"7749","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"11","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"811","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":986,"BasePrice":986,"Markup":200,"Discount":0,"Tax":56.6,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":1242.6,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"NH","AdditionalFareInfos":[{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T08:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T08:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T08:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}}]},"Id":"69ea7e56-d6aa-4119-9ede-8ede4d5b869b","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"},{"AirItinerary":{"DirectionInd":"OneWay","OriginDestinationOptions":[{"SectorSequence":1,"FlightSegments":[{"RouteNumber":"NH7747","FlightNumber":"7747","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"United Airlines","OperatingAirlineCode":"UA","Duration":"00:00:00","DepartureDate":"2022-02-28T07:00:00","ArrivalDate":"2022-02-28T08:39:00","DepartureAirport":"LGA","DepartureCountryCode":"US","ArrivalAirport":"ORD","ArrivalCountryCode":"US","Aircraft":"BOEING 737-700 JET","BookingClass":"Z","ArrivalAirportName":"Chicago-O\'hare Intl, IL, United States","DepartureAirportName":"La Guardia-New York, NY","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=UA","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":7},{"RouteNumber":"NH11","FlightNumber":"11","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"All Nippon Airways","OperatingAirlineCode":"NH","Duration":"00:00:00","DepartureDate":"2022-02-28T10:40:00","ArrivalDate":"2022-03-01T15:00:00","DepartureAirport":"ORD","DepartureCountryCode":"US","ArrivalAirport":"NRT","ArrivalCountryCode":"JP","Aircraft":"BOEING 777-300/300ER JET","BookingClass":"Z","ArrivalAirportName":"Tokyo-Narita, Japan","DepartureAirportName":"Chicago-O\'hare Intl, IL, United States","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=NH","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9},{"RouteNumber":"NH811","FlightNumber":"811","MarketingAirlineCode":"NH","MarketingAirlineName":"All Nippon Airways","OperatingAirlineName":"All Nippon Airways","OperatingAirlineCode":"NH","Duration":"00:00:00","DepartureDate":"2022-03-01T18:30:00","ArrivalDate":"2022-03-01T22:45:00","DepartureAirport":"NRT","DepartureCountryCode":"JP","ArrivalAirport":"HKG","ArrivalCountryCode":"HK","Aircraft":"BOEING 787-8 DREAMLINER JET","BookingClass":"Z","ArrivalAirportName":"Hong Kong-Hong Kong Intl, Hong Kong","DepartureAirportName":"Tokyo-Narita, Japan","BaggageFeeUrl":"https://bags.amadeus.com/Display.aspx?a=NH","FreeBaggages":[{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"FreeQuantity":2,"BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"Cabin":"Business","AirlineLogo":"content/airline-logos/NH.png","DepartureTerminal":null,"ArrivalTerminal":null,"DepartureCityName":null,"ArrivalCityName":null,"SeatsLeft":9}],"Cabin":"Business","JourneyTotalDuration":"1.02:45:00"}],"TicketTimeLimit":"2022-02-25T23:59:00"},"AirItineraryPricingInfo":{"TotalPrice":16738.1,"BasePrice":15782,"Tax":456.1,"Markup":500,"ServiceFee":0,"ItinerarySurchargePrice":0,"Discount":0,"PromotionalDiscount":0,"CurrencyCode":"USD","PTC_FareBreakdowns":[{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"7747","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"11","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"811","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"ADT","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":9864,"BasePrice":9864,"Markup":200,"Discount":0,"Tax":269.4,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":10333.4,"PassengerCount":2,"PassengerType":"ADT","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]},{"PTCIdentifier":null,"Baggages":[],"FlightExtrasInfo":null,"BasePriceFromItinerary":4932,"BasePrice":4932,"Markup":100,"Discount":0,"Tax":130.1,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":5162.1,"PassengerCount":1,"PassengerType":"CHD","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":100,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]},{"PTCIdentifier":null,"Baggages":[{"SequenceNumber":1,"FlightNumber":"7747","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":2,"FlightNumber":"11","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"},{"SequenceNumber":3,"FlightNumber":"811","FreeQuantity":2,"Id":null,"PassengerId":null,"Title":null,"Description":null,"Amount":null,"PassengerCode":"INF","BagAllowanceType":"Piece","BagAllowanceUnit":"K"}],"FlightExtrasInfo":null,"BasePriceFromItinerary":986,"BasePrice":986,"Markup":200,"Discount":0,"Tax":56.6,"DiscountAmountFromContract":0,"PromotionalDiscount":0,"TotalPrice":1242.6,"PassengerCount":2,"PassengerType":"INF","CodeContext":null,"MarkupBreakdown":[{"MarkupAmount":200,"MarkupName":"Test Markup 1","Display":true,"Id":8096}],"DiscountBreakdown":[],"PromotionalDiscountBreakdown":[],"ContractManagerDiscountBreakdown":null,"FareBasisCodes":["ZFX0IXOP","ZFX0IXOP","ZFX0IXOP"]}],"PricingSource":null,"IsNegotiatedPrice":false,"FareType":"Published","FareFamily":null,"ValidatingAirlineCode":"NH","AdditionalFareInfos":[{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T07:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T07:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"LGA","DepartureDate":"2022-02-28T07:00:00","ArrivalAirport":"ORD","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"ORD","DepartureDate":"2022-02-28T10:40:00","ArrivalAirport":"NRT","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}},{"FareReference":"ZFX0IXOP","ValidatingAirlineCode":"","FareFamily":null,"Cabin":"","DepartureAirport":"NRT","DepartureDate":"2022-03-01T18:30:00","ArrivalAirport":"HKG","Penalty":{"Type":"TICKETS ARE NON-REFUNDABLE","Amount":0,"IsPercent":null}}]},"Id":"28c14c5f-5028-44ae-879b-6557fe7d541f","PolicyType":null,"DeepLinkUrl":"","Provider":"Amadeus","OfficeId":"SJC1S2400"}],"SessionId":"fa321897-e1f1-4a03-ba5c-1273736b9274","MinPrice":12193.03,"MinBookedCabinPrice":0,"MaxPrice":16738.1,"Matrix":{"DirectAirlines":[],"OneStopAirlines":[],"TwoStopsAirlines":[{"AirlineCode":"DL","Airline":"Delta Air Lines","Departure":"2022-02-28T20:25:00","HasMultipleAirlines":false,"Price":12193.03,"Currency":"USD"},{"AirlineCode":"AA","Airline":"American Airlines","Departure":"2022-02-28T20:25:00","HasMultipleAirlines":false,"Price":12699.45,"Currency":"USD"},{"AirlineCode":"NH","Airline":"All Nippon Airways","Departure":"2022-02-28T08:00:00","HasMultipleAirlines":false,"Price":16738.1,"Currency":"USD"}]},"FlexibleOutboundFlights":null,"DisplayPriceForOnePassenger":false,"Error":null}');

/***/ })

}]);