'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatApp = require('./ChatApp');

var _ChatApp2 = _interopRequireDefault(_ChatApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../styles/App.css');
require('../styles/Login.css');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    _this.usernameChangeHandler = _this.usernameChangeHandler.bind(_this);
    _this.usernameSubmitHandler = _this.usernameSubmitHandler.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'usernameChangeHandler',
    value: function usernameChangeHandler(event) {
      this.setState({ username: event.target.value });
    }
  }, {
    key: 'usernameSubmitHandler',
    value: function usernameSubmitHandler(event) {
      event.preventDefault();
      this.setState({ submitted: true, username: this.state.username });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.submitted) {
        // Form was submitted, now show the main App
        return _react2.default.createElement(_ChatApp2.default, { username: this.state.username });
      }

      // Initial page load, show a simple login form
      return _react2.default.createElement(
        'form',
        { onSubmit: this.usernameSubmitHandler, className: 'username-container' },
        _react2.default.createElement(
          'h1',
          null,
          'Live Chat'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            onChange: this.usernameChangeHandler,
            placeholder: 'Enter a username...',
            required: true })
        ),
        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.defaultProps = {};

exports.default = App;