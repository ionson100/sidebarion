"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.Head = exports.BarData = void 0;

var _index = _interopRequireDefault(require("./index"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _Dispetcher = _interopRequireDefault(require("./Dispetcher"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WrapperSideBar = /*#__PURE__*/function () {
  function WrapperSideBar(prop, root) {
    _classCallCheck(this, WrapperSideBar);

    this.barData = prop;
    this.root = root;
    this.init();
  }

  _createClass(WrapperSideBar, [{
    key: "init",
    value: function init() {
      _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_index.default, {
        barData: this.barData
      }), document.getElementById(this.root));
    }
  }]);

  return WrapperSideBar;
}();

exports.default = WrapperSideBar;

var BarData = /*#__PURE__*/function (_Dispatcher) {
  _inherits(BarData, _Dispatcher);

  var _super = _createSuper(BarData);

  function BarData() {
    var _this;

    _classCallCheck(this, BarData);

    _this = _super.call(this);
    _this.head = new Head();
    /**
     * элементы меню тип: MenuItem
     * @type {*[]}
     */

    _this.menuItems = [];
    _this._openWidth = 300;
    _this._currentWidth = 300;
    _this.mapMenu = new Map();
    /**
     * иконка для трее, строка или jsx
     * @type {string|JSX.Element}
     */

    _this.iconTree = undefined;
    /**
     * Размер иконки открытой tree, для статических файлов
     * @type {number}
     */

    _this.iconTreeSize = 20;
    /**
     * Ширина меню в закрытом сотоянии
     * @type {number}
     */

    _this.closeWidth = 100;
    /**
     * Состояние открытости меню
     * @type {boolean}
     */

    _this.isOpen = true;
    /**
     * иконка состояния открытости ноды меню ...1- закрыта, ...2- открыта
     * может принимать только React элемент (IconType)
     * @type {JSX.Element}
     */

    _this.imageToggleNode1 = undefined;
    _this.imageToggleNode2 = undefined;
    /**
     * Иконка кнопки управления состоянием бокового меню
     * @type {string|JSX.Element}
     */

    _this.iconToggleMenu = undefined;

    _this.refreshMap.bind(_assertThisInitialized(_this));
    /**
     * Событие изменения ручного ширины меню
     * @type {undefined}
     */


    _this.resizeEvent = undefined;
    return _this;
  }
  /**
   * Внутренний метод обновления словаря меню
   */


  _createClass(BarData, [{
    key: "refreshMap",
    value: function refreshMap() {
      var _this2 = this;

      this.menuItems.map(function (m) {
        _this2._innerRefreshMap(m);
      });
    }
  }, {
    key: "_innerRefreshMap",
    value: function _innerRefreshMap(m) {
      var _this3 = this;

      if (this.mapMenu.has(m.id) === false) {
        this.mapMenu.set(m.id, m);
      }

      if (m.menuItems) {
        m.menuItems.map(function (mm) {
          _this3._innerRefreshMap(mm);
        });
      }
    }
    /**
     * установка ширины открытого меню
     * @param value
     */

  }, {
    key: "openWidth",
    get: function get() {
      return this._openWidth;
    }
    /**
     * Обновление меню снаружи
     */
    ,
    set: function set(value) {
      this._openWidth = value;
      this._currentWidth = value;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      this.dispatch("render", {});
    }
    /**
     * программный клик по меню снаружи
     * @param id
     */

  }, {
    key: "onClickMenu",
    value: function onClickMenu(id, isEventAction) {
      this.dispatch("clickmenu", id, isEventAction);
    }
    /**
     * очистка меню
     */

  }, {
    key: "clearItems",
    value: function clearItems() {
      this.dispatch("clearItems", {});
    }
  }, {
    key: "rollUp",
    value: function rollUp() {
      var _this4 = this;

      if (this.menuItems) {
        this.menuItems.map(function (m) {
          _this4._innerPollUp(m);
        });
      }

      this.forceUpdate();
    }
  }, {
    key: "_innerPollUp",
    value: function _innerPollUp() {
      var _this5 = this;

      var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      menu._isSelect = false;
      menu._isVisibleSubmenu = false;

      if (menu.menuitem) {
        menu.menuitem.map(function (m1) {
          _this5._innerPollUp(m1);
        });
      }
    }
  }]);

  return BarData;
}(_Dispetcher.default);
/**
 * верхняя часть меню, шапка
 */


exports.BarData = BarData;

var Head = function Head() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "myApp";
  var isShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  _classCallCheck(this, Head);

  /**
   * содержание, может принимать как строку так и react элемент
   * @type {string}
   */
  this.content = content;
  /**
   * не реализовано
   * @type {boolean}
   */

  this.isShow = isShow;
};
/**
 * Элемент меню
 */


exports.Head = Head;

var MenuItem = function MenuItem() {
  _classCallCheck(this, MenuItem);

  /**
   * Идентификатор меню, уникальность по умолчанию uuid,
   * можно назначать от пользователя
   * @type {*}
   */
  this.id = (0, _uuid.v4)();
  /**
   * содержание меню, может быть строкой или react элементом
   * @type {string}
   */

  this.content = "mymenu";
  /**
   * управление показом меню
   * @type {boolean}
   */

  this.isShow = true;
  /**
   * Маршрут ссылки меню
   * @type {string}
   */

  this.href = "/#";
  /**
   * список субменю {MenuItem}
   * @type {*[]}
   */

  this.menuItems = [];
  /**
   * маркер выбора меню
   * @type {boolean} true выбрано
   * @private
   */

  this._isSelect = false;
  /**
   * маркер управления открыванием субменю
   * @type {boolean}
   * @private
   */

  this._isVisibleSubmenu = false;
  /**
   * размер иконки меню, применяется если иконка из статических фалйов
   * @type {number}
   */

  this.imageSize = 30;
  /**
   * url статического файла иконки или React элемент
   * @type {null}
   */

  this.imageSrc = null;
  this.imageMode = null;
  this.imageAlt = "..";
  /**
   * Подсказка меню, применяется только при свернутом меню, строка или элемент React
   * @type {string|jsx}
   */

  this.tooltip = undefined;
  /**
   *  url статического файла иконки или React элемент, картинка открытого блока, как в трее
   * @type {string|jsx}
   */

  this.imageSrcOpen = null;
  /**
   * Выделять меню или не выделять, случай - пользовательский компонент (тип курсора при наведении, поведение при наведении курсора, при клике )
   * например если вы хотите сделать элемент меню, как выпадающий список, или строка ввода
   * @type {boolean}
   */

  this.isSelected = true;
  /**
   * Пользовательские данные
   * @type {undefined}
   */

  this.userData = undefined;
  this.userData1 = undefined;
  this.userData2 = undefined;
  this.userData3 = undefined;
};

exports.MenuItem = MenuItem;