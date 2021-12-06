"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.events = {};
  }

  _createClass(Dispatcher, [{
    key: "dispatch",
    value: function dispatch(eventName) {
      var event = this.events[eventName];

      if (event) {
        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }

        event.fire.apply(event, data);
      }
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      var event = this.events[eventName];

      if (!event) {
        event = new DispatcherEvent(eventName);
        this.events[eventName] = event;
      }

      event.registerCallback(callback);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var event = this.events[eventName];

      if (event && event.callbacks.indexOf(callback) > -1) {
        event.unregisterCallback(callback);

        if (event.callbacks.length === 0) {
          delete this.events[eventName];
        }
      }
    }
  }]);

  return Dispatcher;
}();

exports.default = Dispatcher;

var DispatcherEvent = /*#__PURE__*/function () {
  function DispatcherEvent(eventName) {
    _classCallCheck(this, DispatcherEvent);

    this.eventName = eventName;
    this.callbacks = [];
  }

  _createClass(DispatcherEvent, [{
    key: "registerCallback",
    value: function registerCallback(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "unregisterCallback",
    value: function unregisterCallback(callback) {
      var index = this.callbacks.indexOf(callback);

      if (index > -1) {
        this.callbacks.splice(index, 1);
      }
    }
  }, {
    key: "fire",
    value: function fire() {
      for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        data[_key2] = arguments[_key2];
      }

      var callbacks = this.callbacks.slice(0);
      callbacks.forEach(function (callback) {
        callback.apply(void 0, data);
      });
    }
  }]);

  return DispatcherEvent;
}();