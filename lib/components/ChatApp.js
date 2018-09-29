'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _ChatInput = require('./ChatInput');

var _ChatInput2 = _interopRequireDefault(_ChatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../styles/ChatApp.css');

var ChatApp = function (_React$Component) {
  _inherits(ChatApp, _React$Component);

  function ChatApp(props) {
    _classCallCheck(this, ChatApp);

    var _this = _possibleConstructorReturn(this, (ChatApp.__proto__ || Object.getPrototypeOf(ChatApp)).call(this, props));

    _this.socket = {};

    _this.state = { messages: [] };
    _this.sendHandler = _this.sendHandler.bind(_this);

    // Connect to the server
    _this.socket = (0, _socket2.default)(_config2.default.api, { query: 'username=' + props.username }).connect();

    // Listen for messages from the server
    _this.socket.on('server:message', function (message) {
      _this.addMessage(message);
    });
    return _this;
  }

  _createClass(ChatApp, [{
    key: 'sendHandler',
    value: function sendHandler(message) {
      var messageObject = {
        username: this.props.username,
        message: message
      };

      // Emit the message to the server
      this.socket.emit('client:message', messageObject);

      messageObject.fromMe = true;
      this.addMessage(messageObject);
    }
  }, {
    key: 'addMessage',
    value: function addMessage(message) {
      // Append the message to the component state
      var messages = this.state.messages;
      messages.push(message);
      this.setState({ messages: messages });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h3',
          null,
          'React Chat App'
        ),
        _react2.default.createElement(_Messages2.default, { messages: this.state.messages }),
        _react2.default.createElement(_ChatInput2.default, { onSend: this.sendHandler })
      );
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

ChatApp.defaultProps = {
  username: 'Anonymous'
};

exports.default = ChatApp;