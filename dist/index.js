"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Image = _interopRequireDefault(require("react-bootstrap/Image"));

var _Tooltip = _interopRequireDefault(require("react-bootstrap/Tooltip"));

var _OverlayTrigger = _interopRequireDefault(require("react-bootstrap/OverlayTrigger"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SideBarion = /*#__PURE__*/function (_PureComponent) {
  _inherits(SideBarion, _PureComponent);

  var _super = _createSuper(SideBarion);

  function SideBarion(props) {
    var _this;

    _classCallCheck(this, SideBarion);

    _this = _super.call(this, props);
    _this.p = props;
    _this.state = {
      barData: _this.p.barData,

      /**
       * так как PureComponent делает поверхностное сравнение состояния
       * пришлось добавить поле верхнего уровня, для рендеринга открытия закрытия вкладки меню
       */
      markerUpdate: (0, _uuid.v4)()
    };
    _this.resizeEvent = _this.p.barData.resizeEvent;
    _this.openCloseMenuEvent = _this.p.barData.openCloseMenuEvent;
    /**
     * это словарь всех нод меню, ключем является id меню,а занчением ссылка на объект меню
     * для быстрого поиска по щелчку
     *
     */

    _this.mapMenu = new Map();
    /**
     * первоначально выстраиваем словарь нодов
     */

    _this._createMap(_this.barData.menuItems);
    /**
     * Последнее нажатое меню
     * @type {{id: undefined}}
     */


    _this.currentMenuItem = {
      id: undefined
    };
    /**
     * Маркер для возбуждения события наружу, что пользователь кликнул меню
     * @type {boolean}
     */
    // this.isRender=false;

    _this.isClickHamburger = false;
    _this.isForceUpdate = false;
    _this.ref1 = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(SideBarion, [{
    key: "barData",
    get: function get() {
      var barData = this.state.barData;
      return barData;
    }
    /**
     * подписка на клик обносления снаружи
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.barData.on("render", function () {
        _this2.isForceUpdate = true;

        _this2._createMap(_this2.barData.menuItems);

        _this2.forceUpdate();
      });
      window.addEventListener('resize', function () {
        if (document.body.clientWidth < 770 && _this2.barData.isOpen) {
          _this2.toggleMenu();
        } else if (document.body.clientWidth > 770 && !_this2.barData.isOpen) {
          _this2.toggleMenu();
        }
      }, true);
    }
    /**
     * отсылка сообщения наружу, клик по меню
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isClickHamburger) {
        if (this.openCloseMenuEvent) {
          this.openCloseMenuEvent();
        }

        return;
      }

      if (this.isForceUpdate === true) {
        this.isForceUpdate = false;
        return;
      } //if(this.isRender){
      //this.isRender=false;


      this.barData.dispatch("onclick", this.currentMenuItem); // }
    }
    /**
     * пополнение словаря новыми нодами меню ( при старте и при рендеринге снаружи)
     * @param menus
     * @private
     */

  }, {
    key: "_createMap",
    value: function _createMap(menus) {
      var _this3 = this;

      var d = Array.prototype.slice.call(menus);
      d.map(function (m) {
        if (_this3.mapMenu.has(m.id) === false) {
          _this3.mapMenu.set(m.id, m);
        }

        if (m.menuItems.length > 0) {
          _this3._createMap(m.menuItems);
        }

        return false;
      });
    }
    /**
     * пользователь кликнул, по меню
     * @param uuid
     */

  }, {
    key: "clickItem",
    value: function clickItem(uuid) {
      this.isClickHamburger = false;
      var d = this.mapMenu.get(uuid); // получаем объект меню  из словаря

      if (d) {
        if (d.isSelected === true) {
          // если запрещено выделять этот нод, выделение строго не снимаем
          this.mapMenu.forEach(function (v) {
            v._isSelect = false; // снимаем выделение со всех нодов
          });
          d._isSelect = true; // выделяем нажатый нод

          d._isVisibleSubmenu = d._isVisibleSubmenu === false; // показываем или закрываем субменю у этого меню
          // if(this.currentMenuItem.id!==uuid){ // если текущее меню не совпадает с нажатым

          this.currentMenuItem = d; // текущее делаем нажатым
          // this.isRender=true;// ставим метку, чтобы после рендеринга ушло сообщение наружу
          // }

          this.forceUpdate(); // кучной рендеринг
        }
      } else {
        console.error("\u043D\u0435 \u043C\u043E\u0433\u0443 \u043D\u0430\u0439\u0442\u0438 \u0431\u043B\u043E\u043A \u043C\u0435\u043D\u044E \u0441 id: ".concat(uuid)); // если объект не найден, в консоль ошибку
      }
    }
    /**
     * обновление иконки у меню
     * @param row объект меню
     * @returns {JSX.Element}
     */

  }, {
    key: "refreshImage",
    value: function refreshImage(row) {
      function imageClose() {
        if (row.imageSrc) {
          if (typeof row.imageSrc === 'string') {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "col-md-auto ionImageSubMenu "
            }, /*#__PURE__*/_react.default.createElement(_Image.default, {
              src: row.imageSrc,
              alt: row.imageAlt,
              width: row.imageSize,
              height: row.imageSize
            }));
          } else {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "col-md-auto ionImageSubMenu "
            }, row.imageSrc);
          }
        }
      }

      function imageOpen() {
        if (!row.imageSrcOpen) {
          return imageClose();
        } else {
          if (typeof row.imageSrcOpen === 'string') {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "col-md-auto ionImageSubMenu "
            }, /*#__PURE__*/_react.default.createElement(_Image.default, {
              src: row.imageSrcOpen,
              alt: row.imageAlt,
              width: row.imageSize,
              height: row.imageSize
            }));
          } else {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "col-md-auto ionImageSubMenu "
            }, row.imageSrcOpen);
          }
        }
      }

      if (row._isVisibleSubmenu === true) {
        return imageOpen();
      } else {
        return imageClose();
      }
    }
    /**
     * обновление иконки открытия - закрытия субменю
     * @param row объект меню
     * @returns {JSX.Element}
     */

  }, {
    key: "refreshImageToggleMenu",
    value: function refreshImageToggleMenu(row) {
      if (this.barData.imageToggleNode1 && this.barData.imageToggleNode2 && row.menuItems.length > 0 && this.barData.isOpen) {
        // если пользователь задал иконки, у меню есть субменю,если меню не свернуто
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "col-md-auto ionImageToggle "
        }, row._isVisibleSubmenu === false ? this.barData.imageToggleNode1 : this.barData.imageToggleNode2);
      }
    }
  }, {
    key: "refreshContentHtml",
    value: function refreshContentHtml(row) {
      if (row.content) {
        if (typeof row.content === "string") {
          var ss = /*#__PURE__*/_react.default.createElement("div", {
            div: true,
            className: "col align-self-center",
            dangerouslySetInnerHTML: {
              __html: row.content
            }
          });

          return ss;
        } else {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "col align-self-center"
          }, row.content);
        }
      } else {
        return /*#__PURE__*/_react.default.createElement("span", null, "Not content");
      }
    }
  }, {
    key: "refreshContent",
    value: function refreshContent(row) {
      if (row.content) {
        if (typeof row.content === "string") {
          var ss = /*#__PURE__*/_react.default.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: row.content
            }
          });

          return ss;
        } else {
          return /*#__PURE__*/_react.default.createElement("div", null, row.content);
        }
      } else {
        return /*#__PURE__*/_react.default.createElement("span", null, "Not content");
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(menuItem) {
      var _this4 = this;

      var _this$state$barData = this.state.barData,
          iconTree = _this$state$barData.iconTree,
          iconTreeSize = _this$state$barData.iconTreeSize;
      /**
       * Управление показом иконки открытой tree
       * @param row элемент меню
       * @param i индекс в итерации
       * @returns {JSX.Element}
       */

      function checkI(row, i) {
        if (i === 0 && iconTree) if (typeof i === "string") {
          return /*#__PURE__*/_react.default.createElement(_Image.default, {
            src: iconTree,
            alt: "...",
            width: iconTreeSize,
            height: iconTreeSize
          });
        } else {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "treePreImage"
          }, "  ", iconTree, " ");
        }
      }

      if (menuItem.menuItems.length > 0) {
        return /*#__PURE__*/_react.default.createElement("ul", {
          className: "flex",
          "data-ul": menuItem.id,
          style: {
            display: this.getDisplay(menuItem)
          }
        }, menuItem.menuItems.map(function (row, i) {
          return /*#__PURE__*/_react.default.createElement("li", {
            key: row.id,
            className: "container  ionContainer ",
            style: {
              display: row.isShow === true ? "block" : "none"
            }
          }, row.isSelected ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
            to: row.href,
            className: "ionLink"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: _this4.getClassNameSubMenuItem(row),
            id: row.id,
            onClick: function onClick() {
              _this4.clickItem(row.id);
            }
          }, checkI.bind(_this4)(row, i), _this4.refreshImage(row), _this4.refreshContentHtml(row), _this4.refreshImageToggleMenu(row))) : /*#__PURE__*/_react.default.createElement("div", {
            className: _this4.getClassNameSubMenuItem(row),
            id: row.id,
            onClick: function onClick() {
              _this4.clickItem(row.id);
            }
          }, checkI.bind(_this4)(row, i), _this4.refreshImage(row), _this4.refreshContentHtml(row), _this4.refreshImageToggleMenu(row)), _this4.renderSubmenu(row));
        }));
      } else {
        return "";
      }
    }
    /**
     * смена className у элемента корня
     * @param row
     * @returns {string}
     */

  }, {
    key: "getClassNameMenuItem",
    value: function getClassNameMenuItem(row) {
      if (row.isSelected === false) {
        return "row defaultMenuNotSelected";
      }

      if (row._isSelect) {
        return "row selectMenu";
      } else {
        return "row defaultMenu";
      }
    }
    /**
     * Смена className у элемента субменю
     * @param row
     * @returns {string}
     */

  }, {
    key: "getClassNameSubMenuItem",
    value: function getClassNameSubMenuItem(row) {
      if (row.isSelected === false) {
        return "row defaultSubMenuNotSelected";
      }

      if (row._isSelect) {
        return "row selectSubMenu";
      } else {
        return "row defaultSubMenu";
      }
    }
  }, {
    key: "getDisplay",
    value: function getDisplay(row) {
      if (this.barData.isOpen) {
        if (row) {
          if (row._isVisibleSubmenu === true) {
            return "block";
          } else {
            return "none";
          }
        }

        return "block";
      } else {
        return "none";
      }
    }
    /**
     * Открыть, Закрыть меню
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this5 = this;

      this.isClickHamburger = true;

      if (this.barData.isOpen) {
        this.setState(function (prevState) {
          var proxy = Object.assign({}, prevState);
          proxy.barData.isOpen = false;
          proxy.markerUpdate = (0, _uuid.v4)();
          return proxy;
        }, function () {
          _this5.setState(function (prevState) {
            var proxy = Object.assign({}, prevState);
            proxy.barData._currentWidth = _this5.barData.closeWidth;
            proxy.markerUpdate = (0, _uuid.v4)();
            return proxy;
          });
        });
      } else {
        this.setState(function (prevState) {
          var proxy = Object.assign({}, prevState);
          proxy.barData._currentWidth = _this5.barData.openWidth;
          proxy.markerUpdate = (0, _uuid.v4)();
          return proxy;
        }, function () {
          _this5.setState(function (prevState) {
            var proxy = Object.assign({}, prevState);
            proxy.barData.isOpen = true;
            proxy.markerUpdate = (0, _uuid.v4)();
            return proxy;
          });
        });
      }
    }
    /**
     * обработка подсказки для закрытого меню
     * @param row
     * @returns {JSX.Element}
     */

  }, {
    key: "overlayTooltipMenu",
    value: function overlayTooltipMenu(row) {
      var _this6 = this;

      if (row.tooltip && this.barData.isOpen === false) {
        // если пользователь задал подсказку, и меню закрытое.
        return /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
          placement: "right-end",
          overlay: /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
            id: row.id
          }, row.tooltip)
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: this.getClassNameMenuItem(row),
          id: row.id,
          onClick: function onClick() {
            _this6.clickItem(row.id);
          }
        }, this.refreshImage(row), /*#__PURE__*/_react.default.createElement("div", {
          className: "col align-self-center",
          style: {
            display: this.getDisplay(null)
          }
        }, this.refreshContent(row))));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: this.getClassNameMenuItem(row),
        id: row.id,
        onClick: function onClick() {
          _this6.clickItem(row.id);
        }
      }, this.refreshImage(row), /*#__PURE__*/_react.default.createElement("div", {
        className: "col align-self-center",
        style: {
          display: this.getDisplay(null)
        }
      }, this.refreshContent(row)), this.refreshImageToggleMenu(row));
    }
  }, {
    key: "handler",
    value: function handler(e) {
      var action = this.resizeEvent;
      var innerBardata = this.p.barData;
      if (!e.target.getAttribute("data-ismove")) return;
      var self = this;

      function onMouseMove(e) {
        self.barData._currentWidth = self.barData._currentWidth + e.movementX;
        self.ref1.current.style.width = "".concat(self.barData._currentWidth, "px");

        if (self.barData.closeWidth > 0) {
          // если минимальная ширина меню задана то можно поиграться ей, при регулировании  ширины вручную
          if (self.barData.isOpen === true && self.barData._currentWidth <= self.barData.closeWidth * 2) {
            // если при уменьшении уж слишком уменьшили, убираем все итемы
            self.barData.isOpen = false;
            self.forceUpdate();
          }

          if (self.barData.isOpen === false && self.barData._currentWidth >= self.barData.closeWidth * 4) {
            self.barData.isOpen = true;
            self.forceUpdate();
          }
        }
      }

      function onMouseUp() {
        var dw = document.querySelector(".movediv");

        if (dw) {
          innerBardata.openWidth = dw.clientWidth;
        }

        if (action) {
          action(dw.clientWidth);
        } // отключаем обработчики мышки, отпускания клавиши мышки


        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      } // подключаем обработчики события мышки


      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  }, {
    key: "paintHead",
    value: function paintHead() {
      var _this$barData$head$is, _this$barData, _this$barData$head, _this$barData$head$co, _this$barData2, _this$barData2$head;

      var v = (_this$barData$head$is = this === null || this === void 0 ? void 0 : (_this$barData = this.barData) === null || _this$barData === void 0 ? void 0 : (_this$barData$head = _this$barData.head) === null || _this$barData$head === void 0 ? void 0 : _this$barData$head.isShow) !== null && _this$barData$head$is !== void 0 ? _this$barData$head$is : false;
      if (v === false) return;
      var s = (_this$barData$head$co = (_this$barData2 = this.barData) === null || _this$barData2 === void 0 ? void 0 : (_this$barData2$head = _this$barData2.head) === null || _this$barData2$head === void 0 ? void 0 : _this$barData2$head.content) !== null && _this$barData$head$co !== void 0 ? _this$barData$head$co : undefined;
      if (!s) return;

      if ( /*#__PURE__*/_react.default.isValidElement(s)) {
        return s;
      } else {
        return /*#__PURE__*/_react.default.createElement("span", {
          id: "ionSideHeadText"
        }, s);
      }
    }
    /**
     * рендериг корневого меню
     * @returns {JSX.Element}
     */

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", {
        "data-ismove": "1",
        className: "movediv",
        style: {
          background: "inherit",
          paddingRight: "3px",
          cursor: "e-resize"
        },
        onMouseDown: this.handler.bind(this)
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "menu ",
        className: "menu",
        style: {
          cursor: "default"
        },
        onMouseDown: function onMouseDown() {
          return false;
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.ref1,
        className: "ionMenu vh-100",
        style: {
          width: this.barData._currentWidth
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ionSideHead",
        style: {
          display: this.getDisplay(null)
        }
      }, this.paintHead()), /*#__PURE__*/_react.default.createElement("div", {
        className: " scrollDiv vh-100"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "nav"
      }, this.barData.menuItems.map(function (row, i) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: row.id,
          className: "container  ionContainer p-0 menuitem",
          style: {
            display: row.isShow === true ? "block" : "none"
          }
        }, row.isSelected ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
          to: row.href,
          className: "ionLink"
        }, _this7.overlayTooltipMenu(row, i)) : _this7.overlayTooltipMenu(row, i), _this7.renderSubmenu(row));
      }))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "hamburger",
        style: {
          cursor: "pointer",
          display: this.getDisplayToggleOpen()
        },
        onClick: this.toggleMenu.bind(this)
      }, this.getIconToggleMenu())));
    }
  }, {
    key: "getIconToggleMenu",
    value: function getIconToggleMenu() {
      var iconToggleMenu = this.barData.iconToggleMenu;

      if (iconToggleMenu) {
        if (typeof iconToggleMenu === "string") {
          return /*#__PURE__*/_react.default.createElement(_Image.default, {
            src: iconToggleMenu,
            alt: "..."
          });
        } else {
          return iconToggleMenu;
        }
      }
    }
    /**
     * Обработка показа кнопки закрытия открытия меню
     * @returns {string}
     */

  }, {
    key: "getDisplayToggleOpen",
    value: function getDisplayToggleOpen() {
      if (this.barData.closeWidth === this.barData.openWidth) {
        // если ра
        return "none";
      } else {
        return "block";
      }
    }
  }]);

  return SideBarion;
}(_react.PureComponent);

var _default = SideBarion;
exports.default = _default;