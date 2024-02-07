(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 8187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ 3182);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ 5722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ 8602);
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Balance */ 3381);
/* harmony import */ var _components_IncomeExpenses_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/IncomeExpenses.js */ 3852);
/* harmony import */ var _components_TransactionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TransactionList */ 8585);
/* harmony import */ var _components_AddTransaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AddTransaction */ 9701);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/GlobalState */ 3945);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    client = _useState4[0],
    setClient = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var client = window.app.initialized();
    setClient(client);
    setLoaded(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_GlobalState__WEBPACK_IMPORTED_MODULE_8__.GlobalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Balance__WEBPACK_IMPORTED_MODULE_4__.Balance, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_IncomeExpenses_js__WEBPACK_IMPORTED_MODULE_5__.IncomeExpenses, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TransactionList__WEBPACK_IMPORTED_MODULE_6__.TransactionList, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AddTransaction__WEBPACK_IMPORTED_MODULE_7__.AddTransaction, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 9701:
/*!******************************************!*\
  !*** ./src/components/AddTransaction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTransaction": () => (/* binding */ AddTransaction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ 3945);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AddTransaction = function AddTransaction() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__.GlobalContext),
    addTransaction = _useContext.addTransaction;
  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Add new transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "text"
  }, "Transaction Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: "Description..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "amount"
  }, "Amount ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "(negative - expense, positive - income)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "Enter amount..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn"
  }, "Add transaction")));
};

/***/ }),

/***/ 3381:
/*!***********************************!*\
  !*** ./src/components/Balance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Balance": () => (/* binding */ Balance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ 3945);


function moneyFormatter(num) {
  var p = num.toFixed(2).split('.');
  return '₹ ' + (p[0].split('')[0] === '-' ? '-' : '') + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  }, '') + '.' + p[1];
}
var Balance = function Balance() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__.GlobalContext),
    transactions = _useContext.transactions;
  var amounts = transactions.map(function (transaction) {
    return transaction.amount;
  });
  var total = amounts.reduce(function (acc, item) {
    return acc += item;
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Your Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, moneyFormatter(total)));
};

/***/ }),

/***/ 8602:
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h2"
  }, "Expense Tracker");
};

/***/ }),

/***/ 3852:
/*!******************************************!*\
  !*** ./src/components/IncomeExpenses.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeExpenses": () => (/* binding */ IncomeExpenses)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ 3945);


function moneyFormatter(num) {
  var p = num.toFixed(2).split('.');
  return '₹ ' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  }, '') + '.' + p[1];
}
var IncomeExpenses = function IncomeExpenses() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__.GlobalContext),
    transactions = _useContext.transactions;
  var amounts = transactions.map(function (transaction) {
    return transaction.amount;
  });
  var income = amounts.filter(function (item) {
    return item > 0;
  }).reduce(function (acc, item) {
    return acc += item;
  }, 0);
  var expense = amounts.filter(function (item) {
    return item < 0;
  }).reduce(function (acc, item) {
    return acc += item;
  }, 0) * -1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inc-exp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "money plus"
  }, moneyFormatter(income))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "money minus"
  }, moneyFormatter(expense))));
};

/***/ }),

/***/ 5044:
/*!***************************************!*\
  !*** ./src/components/Transaction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transaction": () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ 3945);


function moneyFormatter(num) {
  var p = num.toFixed(2).split('.');
  return '₹ ' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  }, '') + '.' + p[1];
}
var Transaction = function Transaction(_ref) {
  var transaction = _ref.transaction;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__.GlobalContext),
    deleteTransaction = _useContext.deleteTransaction;
  var sign = transaction.amount < 0 ? '-' : '+';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: transaction.amount < 0 ? 'minus' : 'plus'
  }, transaction.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, sign, moneyFormatter(transaction.amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return deleteTransaction(transaction.id);
    },
    className: "delete-btn"
  }, "x"));
};

/***/ }),

/***/ 8585:
/*!*******************************************!*\
  !*** ./src/components/TransactionList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionList": () => (/* binding */ TransactionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction */ 5044);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ 3945);



var TransactionList = function TransactionList() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
    transactions = _useContext.transactions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, transactions.map(function (transaction) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction, {
      key: transaction.id,
      transaction: transaction
    });
  })));
};

/***/ }),

/***/ 3182:
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 9182);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 6940);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 7221);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 985);


var Main = function Main(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "$3",
    css: {
      width: "100%",
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    size: "h4",
    weight: "medium"
  }, "Welcome to your first react app"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    size: "md",
    css: {
      color: "$neutral900"
    }
  }, "Leverage the pre-built optimized Twigs library to construct engaging UI."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
    href: "https://twigs.surveysparrow.com/",
    target: "_blank",
    css: {
      textDecoration: "underline",
      color: "$primary400"
    }
  }, "Visit Twigs Documentaion"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 6737:
/*!***********************************!*\
  !*** ./src/context/AppReducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return _objectSpread(_objectSpread({}, state), {}, {
        transactions: state.transactions.filter(function (transaction) {
          return transaction.id !== action.payload;
        })
      });
    case 'ADD_TRANSACTION':
      return _objectSpread(_objectSpread({}, state), {}, {
        transactions: [action.payload].concat(_toConsumableArray(state.transactions))
      });
    default:
      return state;
  }
});

/***/ }),

/***/ 3945:
/*!************************************!*\
  !*** ./src/context/GlobalState.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": () => (/* binding */ GlobalContext),
/* harmony export */   "GlobalProvider": () => (/* binding */ GlobalProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppReducer */ 6737);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// Initial state
var initialState = {
  transactions: []
};

// Create context
var GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);

// Provider component
var GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_AppReducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalContext.Provider, {
    value: {
      transactions: state.transactions,
      deleteTransaction: deleteTransaction,
      addTransaction: addTransaction
    }
  }, children);
};

/***/ }),

/***/ 5579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 3935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 8548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 8187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 9087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n}\n\n.container {\n  margin: 30px auto;\n  width: 350px;\n}\n\nh1 {\n  letter-spacing: 1px;\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\nh3 {\n  border-bottom: 1px solid #bbb;\n  padding-bottom: 10px;\n  margin: 40px 0 10px;\n}\n\nh4 {\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.inc-exp-container {\n  background-color: #fff;\n  box-shadow: var(--box-shadow);\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n\n.inc-exp-container > div {\n  flex: 1;\n  text-align: center;\n}\n\n.inc-exp-container > div:first-of-type {\n  border-right: 1px solid #dedede;\n}\n\n.money {\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin: 5px 0;\n}\n\n.money.plus {\n  color: #2ecc71;\n}\n\n.money.minus {\n  color: #c0392b;\n}\n\nlabel {\n  display: inline-block;\n  margin: 10px 0;\n}\n\ninput[type='text'],\ninput[type='number'] {\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  display: block;\n  font-size: 16px;\n  padding: 10px;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n  background-color: #9c88ff;\n  box-shadow: var(--box-shadow);\n  color: #fff;\n  border: 0;\n  display: block;\n  font-size: 16px;\n  margin: 10px 0 30px;\n  padding: 10px;\n  width: 100%;\n}\n\n.btn:focus,\n.delete-btn:focus {\n  outline: 0;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 40px;\n}\n\n.list li {\n  background-color: #fff;\n  box-shadow: var(--box-shadow);\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.list li.plus {\n  border-right: 5px solid #2ecc71;\n}\n\n.list li.minus {\n  border-right: 5px solid #c0392b;\n}\n\n.delete-btn {\n  cursor: pointer;\n  background-color: #e74c3c;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-100%, -50%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list li:hover .delete-btn {\n  opacity: 1;\n}\n\n@media (max-width: 320px) {\n  .container {\n    width: 300px;\n  }\n}\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,WAAW;EACX,SAAS;EACT,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,SAAS;EACT,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,iCAAiC;EACjC,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\n\n:root {\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n}\n\n.container {\n  margin: 30px auto;\n  width: 350px;\n}\n\nh1 {\n  letter-spacing: 1px;\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\nh3 {\n  border-bottom: 1px solid #bbb;\n  padding-bottom: 10px;\n  margin: 40px 0 10px;\n}\n\nh4 {\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.inc-exp-container {\n  background-color: #fff;\n  box-shadow: var(--box-shadow);\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n\n.inc-exp-container > div {\n  flex: 1;\n  text-align: center;\n}\n\n.inc-exp-container > div:first-of-type {\n  border-right: 1px solid #dedede;\n}\n\n.money {\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin: 5px 0;\n}\n\n.money.plus {\n  color: #2ecc71;\n}\n\n.money.minus {\n  color: #c0392b;\n}\n\nlabel {\n  display: inline-block;\n  margin: 10px 0;\n}\n\ninput[type='text'],\ninput[type='number'] {\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  display: block;\n  font-size: 16px;\n  padding: 10px;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n  background-color: #9c88ff;\n  box-shadow: var(--box-shadow);\n  color: #fff;\n  border: 0;\n  display: block;\n  font-size: 16px;\n  margin: 10px 0 30px;\n  padding: 10px;\n  width: 100%;\n}\n\n.btn:focus,\n.delete-btn:focus {\n  outline: 0;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 40px;\n}\n\n.list li {\n  background-color: #fff;\n  box-shadow: var(--box-shadow);\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.list li.plus {\n  border-right: 5px solid #2ecc71;\n}\n\n.list li.minus {\n  border-right: 5px solid #c0392b;\n}\n\n.delete-btn {\n  cursor: pointer;\n  background-color: #e74c3c;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-100%, -50%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list li:hover .delete-btn {\n  opacity: 1;\n}\n\n@media (max-width: 320px) {\n  .container {\n    width: 300px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 9087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 8548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 1424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(6981), __webpack_exec__(5579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.0290cd2b.js.map