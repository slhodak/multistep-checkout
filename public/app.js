"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//  Dynamically create forms based on form models of attributes
//  Or create several components
//  Forms
var FormOne =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormOne, _React$Component);

  function FormOne(props) {
    var _this;

    _classCallCheck(this, FormOne);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormOne).call(this, props));
    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormOne, [{
    key: "handleBackButtonClick",
    value: function handleBackButtonClick(e) {
      ReactDOM.findDOMNode(this).hidden = true;
      document.getElementById('checkoutButton').hidden = false;
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "formOne",
        hidden: true
      }, React.createElement("form", null, React.createElement("label", {
        "for": "name"
      }, "Name:"), React.createElement("input", {
        type: "text",
        name: "name"
      }), React.createElement("label", {
        "for": "email"
      }, "Email:"), React.createElement("input", {
        type: "text",
        name: "email"
      }), React.createElement("label", {
        "for": "password"
      }, "Password:"), React.createElement("input", {
        type: "text",
        name: "password"
      }), React.createElement("input", {
        type: "submit",
        value: "Next",
        onClick: this.handleFormSubmit
      })), React.createElement("button", {
        onClick: this.handleBackButtonClick
      }, "Back"));
    }
  }]);

  return FormOne;
}(React.Component); // F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code


var CheckoutButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(CheckoutButton, _React$Component2);

  function CheckoutButton(props) {
    var _this2;

    _classCallCheck(this, CheckoutButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CheckoutButton).call(this, props));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(CheckoutButton, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      console.log('should show the next form'); //  hide this element and show the next form

      ReactDOM.findDOMNode(this).hidden = true;
      document.getElementById('formOne').hidden = false;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "checkoutButton"
      }, React.createElement("label", null, "Checkout"), React.createElement("button", {
        onClick: this.handleSubmit
      }, "Checkout"));
    }
  }]);

  return CheckoutButton;
}(React.Component);

var App =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(CheckoutButton, null), React.createElement(FormOne, null));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));