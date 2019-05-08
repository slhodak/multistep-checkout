"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Controllers
//  Submit data to server
//  AJAX? Fetch?
var submitFormData = function submitFormData(data) {
  fetch('http://127.0.0.1:9000', {
    method: 'POST',
    data: 'someData'
  }).then(function (response) {
    console.log(response);
  })["catch"](function (err) {
    console.log(err);
  });
}; //  Forms (Views...)
// F1 collects name, email, and password for account creation.


var FormOne =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormOne, _React$Component);

  function FormOne(props) {
    var _this;

    _classCallCheck(this, FormOne);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormOne).call(this, props));
    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_assertThisInitialized(_this));
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormOne, [{
    key: "handleBackButtonClick",
    value: function handleBackButtonClick(e) {
      this.props.travelBetweenPages('formOne', 'checkoutButton');
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      this.props.handleSubmitData();
      this.props.travelBetweenPages('formOne', 'formTwo');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "formOne",
        hidden: true
      }, React.createElement("form", {
        onSubmit: this.handleFormSubmit
      }, React.createElement("label", {
        htmlFor: "name"
      }, "Name:"), React.createElement("input", {
        type: "text",
        name: "name",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "email"
      }, "Email:"), React.createElement("input", {
        type: "text",
        name: "email",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "Password:"), React.createElement("input", {
        type: "text",
        name: "password",
        onChange: this.props.updateFormData
      }), React.createElement("input", {
        type: "submit",
        value: "Next"
      })), React.createElement("button", {
        onClick: this.handleBackButtonClick
      }, "Back"));
    }
  }]);

  return FormOne;
}(React.Component); // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.


var FormTwo =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(FormTwo, _React$Component2);

  function FormTwo(props) {
    var _this2;

    _classCallCheck(this, FormTwo);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FormTwo).call(this, props));
    _this2.handleBackButtonClick = _this2.handleBackButtonClick.bind(_assertThisInitialized(_this2));
    _this2.handleFormSubmit = _this2.handleFormSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(FormTwo, [{
    key: "handleBackButtonClick",
    value: function handleBackButtonClick(e) {
      this.props.travelBetweenPages('formTwo', 'formOne');
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      event.preventDefault();
      this.props.handleSubmitData();
      this.props.travelBetweenPages('formTwo', 'formThree');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "formTwo",
        hidden: true
      }, React.createElement("form", null, React.createElement("label", {
        htmlFor: "name"
      }, "Address Line 1:"), React.createElement("input", {
        type: "text",
        name: "addressOne",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "name"
      }, "Address Line 2:"), React.createElement("input", {
        type: "text",
        name: "addressTwo",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "email"
      }, "City:"), React.createElement("input", {
        type: "text",
        name: "city",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "State:"), React.createElement("input", {
        type: "text",
        name: "state",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "Zip Code:"), React.createElement("input", {
        type: "text",
        name: "zipCode",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "Phone Number:"), React.createElement("input", {
        type: "text",
        name: "phoneNumber",
        onChange: this.props.updateFormData
      }), React.createElement("input", {
        type: "submit",
        value: "Next",
        onClick: this.handleFormSubmit
      })), React.createElement("button", {
        onClick: this.handleBackButtonClick
      }, "Back"));
    }
  }]);

  return FormTwo;
}(React.Component); // F3 collects credit card #, expiry date, CVV, and billing zip code


var FormThree =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FormThree, _React$Component3);

  function FormThree(props) {
    var _this3;

    _classCallCheck(this, FormThree);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(FormThree).call(this, props));
    _this3.handleBackButtonClick = _this3.handleBackButtonClick.bind(_assertThisInitialized(_this3));
    _this3.handleFormSubmit = _this3.handleFormSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(FormThree, [{
    key: "handleBackButtonClick",
    value: function handleBackButtonClick(e) {
      this.props.travelBetweenPages('formThree', 'formTwo');
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      event.preventDefault();
      this.props.handleSubmitData();
      this.props.travelBetweenPages('formThree', 'purchaseScreen');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "formThree",
        hidden: true
      }, React.createElement("form", null, React.createElement("label", {
        htmlFor: "name"
      }, "Credit Card #"), React.createElement("input", {
        type: "text",
        name: "ccNumber",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "email"
      }, "Expiration Date"), React.createElement("input", {
        type: "text",
        name: "expirationDate",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "CVV"), React.createElement("input", {
        type: "text",
        name: "cvvCode",
        onChange: this.props.updateFormData
      }), React.createElement("label", {
        htmlFor: "password"
      }, "Billing Zip Code"), React.createElement("input", {
        type: "text",
        name: "billingZipCode",
        onChange: this.props.updateFormData
      }), React.createElement("input", {
        type: "submit",
        value: "Purchase",
        onClick: this.handleFormSubmit
      })), React.createElement("button", {
        onClick: this.handleBackButtonClick
      }, "Back"));
    }
  }]);

  return FormThree;
}(React.Component);

var PurchaseScreen =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(PurchaseScreen, _React$Component4);

  function PurchaseScreen(props) {
    var _this4;

    _classCallCheck(this, PurchaseScreen);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PurchaseScreen).call(this, props));
    _this4.handleShopMoreClick = _this4.handleShopMoreClick.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(PurchaseScreen, [{
    key: "handleShopMoreClick",
    value: function handleShopMoreClick(e) {
      this.props.travelBetweenPages('purchaseScreen', 'checkoutButton');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "purchaseScreen",
        hidden: true
      }, React.createElement("h1", null, "Thank you!"), React.createElement("button", {
        onClick: this.handleShopMoreClick
      }, "Shop More"));
    }
  }]);

  return PurchaseScreen;
}(React.Component);

;

var CheckoutButton =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(CheckoutButton, _React$Component5);

  function CheckoutButton(props) {
    var _this5;

    _classCallCheck(this, CheckoutButton);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CheckoutButton).call(this, props));
    _this5.handleSubmit = _this5.handleSubmit.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(CheckoutButton, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      this.props.travelBetweenPages('checkoutButton', 'formOne');
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
function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App(props) {
    var _this6;

    _classCallCheck(this, App);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this6.state = {};
    _this6.handleSubmitData = _this6.handleSubmitData.bind(_assertThisInitialized(_this6));
    _this6.updateFormData = _this6.updateFormData.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(App, [{
    key: "handleSubmitData",
    value: function handleSubmitData() {
      event.preventDefault();

      for (var item in this.state) {
        console.log(item + ': ' + this.state[item]);
      }

      this.setState({});
    }
  }, {
    key: "updateFormData",
    value: function updateFormData(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "travelBetweenPages",
    value: function travelBetweenPages(self, target) {
      document.getElementById(self).hidden = true;
      document.getElementById(target).hidden = false;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(CheckoutButton, {
        travelBetweenPages: this.travelBetweenPages
      }), React.createElement(FormOne, {
        travelBetweenPages: this.travelBetweenPages,
        updateFormData: this.updateFormData,
        handleSubmitData: this.handleSubmitData
      }), React.createElement(FormTwo, {
        travelBetweenPages: this.travelBetweenPages,
        updateFormData: this.updateFormData,
        handleSubmitData: this.handleSubmitData
      }), React.createElement(FormThree, {
        travelBetweenPages: this.travelBetweenPages,
        updateFormData: this.updateFormData,
        handleSubmitData: this.handleSubmitData
      }), React.createElement(PurchaseScreen, {
        travelBetweenPages: this.travelBetweenPages
      }));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));