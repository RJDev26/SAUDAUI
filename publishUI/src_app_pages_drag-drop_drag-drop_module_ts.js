(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_pages_drag-drop_drag-drop_module_ts"],{

/***/ 7445:
/*!********************************************************!*\
  !*** ./src/app/pages/drag-drop/drag-drop.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropComponent": () => (/* binding */ DragDropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ 48370);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);







function DragDropComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "mat-card", 8)(2, "mat-card-header", 4)(3, "mat-card-subtitle", 4)(4, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " There's also the possibility of moving elements around in the same container, changing their position. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](icon_r3);
} }
function DragDropComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can move these elements between these two containers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", color_r4 == "primary")("bg-accent", color_r4 == "accent")("bg-warn", color_r4 == "warn");
} }
function DragDropComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can move these elements between these two containers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", color_r5 == "primary")("bg-accent", color_r5 == "accent")("bg-warn", color_r5 == "warn");
} }
class DragDropComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.icons = ["home", "person", "alarm", "work", "mail", "favorite"];
        this.colors = ["accent", "primary", "warn"];
        this.settings = this.appSettings.settings;
    }
}
DragDropComponent.ɵfac = function DragDropComponent_Factory(t) { return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
DragDropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragDropComponent, selectors: [["app-drag-drop"]], decls: 19, vars: 6, consts: [["fxLayout", "row wrap", "fxLayout.xs", "column", 3, "dragula"], ["fxFlex", "33.3", "class", "flex-p", 4, "ngFor", "ngForOf"], ["fxLayout", "row"], ["fxFlex", "50", 1, "flex-p"], ["fxLayoutAlign", "center"], [1, "bag", 3, "dragula"], ["class", "draggable", 3, "bg-primary", "bg-accent", "bg-warn", 4, "ngFor", "ngForOf"], ["fxFlex", "33.3", 1, "flex-p"], [1, "draggable"], [1, "icon-lg"], [1, "text-center"]], template: function DragDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DragDropComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "mat-card")(5, "mat-card-header", 4)(6, "mat-card-subtitle", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "First Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DragDropComponent_mat_card_10_Template, 2, 6, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "mat-card")(13, "mat-card-header", 4)(14, "mat-card-subtitle", 4)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Second Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DragDropComponent_mat_card_18_Template, 2, 6, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "bag-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.icons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "bag-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "bag-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng2_dragula__WEBPACK_IMPORTED_MODULE_3__.DragulaDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".bag[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctZHJvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZ3tcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 95901:
/*!*****************************************************!*\
  !*** ./src/app/pages/drag-drop/drag-drop.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropModule": () => (/* binding */ DragDropModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ 48370);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _drag_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.component */ 7445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    { path: '', component: _drag_drop_component__WEBPACK_IMPORTED_MODULE_1__.DragDropComponent, pathMatch: 'full' }
];
class DragDropModule {
}
DragDropModule.ɵfac = function DragDropModule_Factory(t) { return new (t || DragDropModule)(); };
DragDropModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DragDropModule });
DragDropModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
        ng2_dragula__WEBPACK_IMPORTED_MODULE_5__.DragulaModule.forRoot(),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DragDropModule, { declarations: [_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__.DragDropComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_5__.DragulaModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 33930:
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};

/***/ }),

/***/ 23726:
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ticky = __webpack_require__(/*! ticky */ 79638);

module.exports = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }

  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};

/***/ }),

/***/ 14545:
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var atoa = __webpack_require__(/*! atoa */ 33930);

var debounce = __webpack_require__(/*! ./debounce */ 23726);

module.exports = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};

  if (thing === undefined) {
    thing = {};
  }

  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }

    return thing;
  };

  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!

    thing.on(type, fn);
    return thing;
  };

  thing.off = function (type, fn) {
    var c = arguments.length;

    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];

      if (!et) {
        return thing;
      }

      et.splice(et.indexOf(fn), 1);
    }

    return thing;
  };

  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };

  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;

      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }

      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }

        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };

  return thing;
};

/***/ }),

/***/ 55801:
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ 22161);

var eventmap = __webpack_require__(/*! ./eventmap */ 98772);

var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard(el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);

  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent(el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();

  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }

  function makeClassicEvent() {
    var e;

    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }

    return e;
  }

  function makeCustomEvent() {
    return new customEvent(type, {
      detail: model
    });
  }
}

function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;

    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };

    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };

    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap(el, type, fn) {
  var i = find(el, type, fn);

  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory

    return wrapper;
  }
}

function find(el, type, fn) {
  var i, item;

  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];

    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/***/ }),

/***/ 98772:
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/***/ }),

/***/ 22161:
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/***/ ((module) => {

var NativeCustomEvent = global.CustomEvent;

function useNative() {
  try {
    var p = new NativeCustomEvent('cat', {
      detail: {
        foo: 'bar'
      }
    });
    return 'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {}

  return false;
}
/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */


module.exports = useNative() ? NativeCustomEvent : // IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');

  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }

  return e;
} : // IE <= 8
function CustomEvent(type, params) {
  var e = document.createEventObject();
  e.type = type;

  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }

  return e;
};

/***/ }),

/***/ 62716:
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass(className) {
  var cached = cache[className];

  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }

  return cached;
}

function addClass(el, className) {
  var current = el.className;

  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

/***/ }),

/***/ 54603:
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ 14545);

var crossvent = __webpack_require__(/*! crossvent */ 55801);

var classes = __webpack_require__(/*! ./classes */ 62716);

var doc = document;
var documentElement = doc.documentElement;

function dragula(initialContainers, options) {
  var len = arguments.length;

  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }

  var _mirror; // mirror image


  var _source; // source container


  var _item; // item being dragged


  var _offsetX; // reference x


  var _offsetY; // reference y


  var _moveX; // reference move x


  var _moveY; // reference move y


  var _initialSibling; // reference sibling when grabbed


  var _currentSibling; // reference sibling now


  var _copy; // item used for copying


  var _renderTimer; // timer for setTimeout renderMirrorImage


  var _lastDropTarget = null; // last container item was over

  var _grabbed; // holds mousedown context until first mousemove


  var o = options || {};

  if (o.moves === void 0) {
    o.moves = always;
  }

  if (o.accepts === void 0) {
    o.accepts = always;
  }

  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }

  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }

  if (o.isContainer === void 0) {
    o.isContainer = never;
  }

  if (o.copy === void 0) {
    o.copy = false;
  }

  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }

  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }

  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }

  if (o.direction === void 0) {
    o.direction = 'vertical';
  }

  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }

  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();
  return drake;

  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements(remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8

    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy() {
    events(true);
    release({});
  }

  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab(e) {
    _moveX = e.clientX;
    _moveY = e.clientY;
    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;

    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }

    var item = e.target;
    var context = canStart(item);

    if (!context) {
      return;
    }

    _grabbed = context;
    eventualMovements();

    if (e.type === 'mousedown') {
      if (isInput(item)) {
        // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved(e) {
    if (!_grabbed) {
      return;
    }

    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    } // truthy check fixes #239, equality fixes #207, fixes #501


    if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
      return;
    }

    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);

      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed

    eventualMovements(true);
    movements();
    end();
    start(grabbed);
    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;
    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart(item) {
    if (drake.dragging && _mirror) {
      return;
    }

    if (isContainer(item)) {
      return; // don't drag container itself
    }

    var handle = item;

    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }

      item = getParent(item); // drag target should be a top element

      if (!item) {
        return;
      }
    }

    var source = getParent(item);

    if (!source) {
      return;
    }

    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));

    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove(item) {
    return !!canStart(item);
  }

  function manualStart(item) {
    var context = canStart(item);

    if (context) {
      start(context);
    }
  }

  function start(context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);
    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget() {
    return false;
  }

  function end() {
    if (!drake.dragging) {
      return;
    }

    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release(e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }

    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

    if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop(item, target) {
    var parent = getParent(item);

    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }

    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }

    cleanup();
  }

  function remove() {
    if (!drake.dragging) {
      return;
    }

    var item = _copy || _item;
    var parent = getParent(item);

    if (parent) {
      parent.removeChild(item);
    }

    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel(revert) {
    if (!drake.dragging) {
      return;
    }

    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);

    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }

    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }

    cleanup();
  }

  function cleanup() {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();

    if (item) {
      classes.rm(item, 'gu-transit');
    }

    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }

    drake.dragging = false;

    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }

    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement(target, s) {
    var sibling;

    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }

    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;

    while (target && !accepted()) {
      target = getParent(target);
    }

    return target;

    function accepted() {
      var droppable = isContainer(target);

      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);

      if (initial) {
        return true; // should always be able to drop it right back where it was
      }

      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag(e) {
    if (!_mirror) {
      return;
    }

    e.preventDefault();
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;
    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';
    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;

    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }

    var parent = getParent(item);

    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }

      return;
    }

    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);

    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }

      return;
    }

    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }

    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }

    function over() {
      if (changed) {
        moved('over');
      }
    }

    function out() {
      if (_lastDropTarget) {
        moved('out');
      }
    }
  }

  function spillOver(el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, 'gu-hide');
    }
  }

  function renderMirrorImage() {
    if (_mirror) {
      return;
    }

    var rect = _item.getBoundingClientRect();

    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild(dropTarget, target) {
    var immediate = target;

    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }

    if (immediate === documentElement) {
      return null;
    }

    return immediate;
  }

  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;

      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();

        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }

        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }

      return null;
    }

    function inside() {
      // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();

      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }

      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy(item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy(el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };

  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }

  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  } // see https://github.com/bevacqua/dragula/issues/261


  if (e.buttons !== void 0) {
    return e.buttons;
  }

  var button = e.button;

  if (button !== void 0) {
    // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll(scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }

  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }

  return doc.body[scrollProp];
}

function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function never() {
  return false;
}

function always() {
  return true;
}

function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}

function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}

function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}

function isInput(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}

function isEditable(el) {
  if (!el) {
    return false;
  } // no parents were editable


  if (el.contentEditable === 'false') {
    return false;
  } // stop the lookup


  if (el.contentEditable === 'true') {
    return true;
  } // found a contentEditable element in the chain


  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl(el) {
  return el.nextElementSibling || manually();

  function manually() {
    var sibling = el;

    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);

    return sibling;
  }
}

function getEventHost(e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }

  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }

  return e;
}

function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX',
    // IE8
    pageY: 'clientY' // IE8

  };

  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }

  return host[coord];
}

module.exports = dragula;

/***/ }),

/***/ 48370:
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragulaDirective": () => (/* binding */ DragulaDirective),
/* harmony export */   "DragulaModule": () => (/* binding */ DragulaModule),
/* harmony export */   "DragulaService": () => (/* binding */ DragulaService),
/* harmony export */   "DrakeFactory": () => (/* binding */ DrakeFactory),
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes),
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "MockDrake": () => (/* binding */ MockDrake),
/* harmony export */   "MockDrakeFactory": () => (/* binding */ MockDrakeFactory),
/* harmony export */   "dragula": () => (/* binding */ dragula)
/* harmony export */ });
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ 54603);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



class Group {
  /**
   * @param {?} name
   * @param {?} drake
   * @param {?} options
   */
  constructor(name, drake, options) {
    this.name = name;
    this.drake = drake;
    this.options = options;
    this.initEvents = false;
  }

}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/** @enum {string} */


const EventTypes = {
  Cancel: "cancel",
  Cloned: "cloned",
  Drag: "drag",
  DragEnd: "dragend",
  Drop: "drop",
  Out: "out",
  Over: "over",
  Remove: "remove",
  Shadow: "shadow",
  DropModel: "dropModel",
  RemoveModel: "removeModel"
};
/** @type {?} */

const AllEvents = Object.keys(EventTypes).map(k =>
/** @type {?} */
EventTypes[
/** @type {?} */
k]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/** @type {?} */

const dragula = (dragula__WEBPACK_IMPORTED_MODULE_0___default()) || dragula__WEBPACK_IMPORTED_MODULE_0__;

class DrakeFactory {
  /**
   * @param {?=} build
   */
  constructor(build = dragula) {
    this.build = build;
  }

}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/** @type {?} */


const filterEvent = (eventType, filterDragType, projector) => input => {
  return input.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
    event,
    name
  }) => {
    return event === eventType && (filterDragType === undefined || name === filterDragType);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    name,
    args
  }) => projector(name, args)));
};
/** @type {?} */


const elContainerSourceProjector = (name, [el, container, source]) => ({
  name,
  el,
  container,
  source
});

class DragulaService {
  /**
   * @param {?=} drakeFactory
   */
  constructor(drakeFactory = null) {
    this.drakeFactory = drakeFactory;
    this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

    this.drag = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({
      name,
      el,
      source
    })));

    this.dragend = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({
      name,
      el
    })));

    this.drop = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
      return {
        name,
        el,
        target,
        source,
        sibling
      };
    }));

    this.elContainerSource = eventType => groupName => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));

    this.cancel = this.elContainerSource(EventTypes.Cancel);
    this.remove = this.elContainerSource(EventTypes.Remove);
    this.shadow = this.elContainerSource(EventTypes.Shadow);
    this.over = this.elContainerSource(EventTypes.Over);
    this.out = this.elContainerSource(EventTypes.Out);

    this.cloned = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
      return {
        name,
        clone,
        original,
        cloneType
      };
    }));

    this.dropModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
      return {
        name,
        el,
        target,
        source,
        sibling,
        item,
        sourceModel,
        targetModel,
        sourceIndex,
        targetIndex
      };
    }));

    this.removeModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
      return {
        name,
        el,
        container,
        source,
        item,
        sourceModel,
        sourceIndex
      };
    }));

    this.groups = {};

    if (this.drakeFactory === null) {
      this.drakeFactory = new DrakeFactory();
    }
  }
  /**
   * Public mainly for testing purposes. Prefer `createGroup()`.
   * @param {?} group
   * @return {?}
   */


  add(group) {
    /** @type {?} */
    let existingGroup = this.find(group.name);

    if (existingGroup) {
      throw new Error('Group named: "' + group.name + '" already exists.');
    }

    this.groups[group.name] = group;
    this.handleModels(group);
    this.setupEvents(group);
    return group;
  }
  /**
   * @param {?} name
   * @return {?}
   */


  find(name) {
    return this.groups[name];
  }
  /**
   * @param {?} name
   * @return {?}
   */


  destroy(name) {
    /** @type {?} */
    let group = this.find(name);

    if (!group) {
      return;
    }

    group.drake && group.drake.destroy();
    delete this.groups[name];
  }
  /**
   * Creates a group with the specified name and options.
   *
   * Note: formerly known as `setOptions`
   * @template T
   * @param {?} name
   * @param {?} options
   * @return {?}
   */


  createGroup(name, options) {
    return this.add(new Group(name, this.drakeFactory.build([], options), options));
  }
  /**
   * @param {?} __0
   * @return {?}
   */


  handleModels({
    name,
    drake,
    options
  }) {
    /** @type {?} */
    let dragElm;
    /** @type {?} */

    let dragIndex;
    /** @type {?} */

    let dropIndex;
    drake.on('remove', (el, container, source) => {
      if (!drake.models) {
        return;
      }
      /** @type {?} */


      let sourceModel = drake.models[drake.containers.indexOf(source)];
      sourceModel = sourceModel.slice(0);
      /** @type {?} */

      const item = sourceModel.splice(dragIndex, 1)[0]; // console.log('REMOVE');
      // console.log(sourceModel);

      this.dispatch$.next({
        event: EventTypes.RemoveModel,
        name,
        args: [el, container, source, item, sourceModel, dragIndex]
      });
    });
    drake.on('drag', (el, source) => {
      if (!drake.models) {
        return;
      }

      dragElm = el;
      dragIndex = this.domIndexOf(el, source);
    });
    drake.on('drop', (dropElm, target, source, sibling) => {
      if (!drake.models || !target) {
        return;
      }

      dropIndex = this.domIndexOf(dropElm, target);
      /** @type {?} */

      let sourceModel = drake.models[drake.containers.indexOf(source)];
      /** @type {?} */

      let targetModel = drake.models[drake.containers.indexOf(target)];
      /** @type {?} */

      let item;

      if (target === source) {
        sourceModel = sourceModel.slice(0);
        item = sourceModel.splice(dragIndex, 1)[0];
        sourceModel.splice(dropIndex, 0, item); // this was true before we cloned and updated sourceModel,
        // but targetModel still has the old value

        targetModel = sourceModel;
      } else {
        /** @type {?} */
        let isCopying = dragElm !== dropElm;
        item = sourceModel[dragIndex];

        if (isCopying) {
          if (!options.copyItem) {
            throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
          }

          item = options.copyItem(item);
        }

        if (!isCopying) {
          sourceModel = sourceModel.slice(0);
          sourceModel.splice(dragIndex, 1);
        }

        targetModel = targetModel.slice(0);
        targetModel.splice(dropIndex, 0, item);

        if (isCopying) {
          try {
            target.removeChild(dropElm);
          } catch (e) {}
        }
      }

      this.dispatch$.next({
        event: EventTypes.DropModel,
        name,
        args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
      });
    });
  }
  /**
   * @param {?} group
   * @return {?}
   */


  setupEvents(group) {
    if (group.initEvents) {
      return;
    }

    group.initEvents = true;
    /** @type {?} */

    const name = group.name;
    /** @type {?} */

    let emitter = event => {
      group.drake.on(event, (...args) => {
        this.dispatch$.next({
          event,
          name,
          args
        });
      });
    };

    AllEvents.forEach(emitter);
  }
  /**
   * @param {?} child
   * @param {?} parent
   * @return {?}
   */


  domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(parent.children, child);
  }

}

DragulaService.ɵfac = function DragulaService_Factory(t) {
  return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DrakeFactory, 8));
};

DragulaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DragulaService,
  factory: DragulaService.ɵfac
});
/** @nocollapse */

DragulaService.ctorParameters = () => [{
  type: DrakeFactory,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
  }]
}];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: DrakeFactory,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


class DragulaDirective {
  /**
   * @param {?} el
   * @param {?} dragulaService
   */
  constructor(el, dragulaService) {
    this.el = el;
    this.dragulaService = dragulaService;
    this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  /**
   * @return {?}
   */


  get container() {
    return this.el && this.el.nativeElement;
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  ngOnChanges(changes) {
    if (changes && changes.dragula) {
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragula;
      /** @type {?} */

      let hadPreviousValue = !!prev;
      /** @type {?} */

      let hasNewValue = !!current; // something -> null       =>  teardown only
      // something -> something  =>  teardown, then setup
      //      null -> something  =>  setup only
      //
      //      null -> null (precluded by fact of change being present)

      if (hadPreviousValue) {
        this.teardown(prev);
      }

      if (hasNewValue) {
        this.setup();
      }
    } else if (changes && changes.dragulaModel) {
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragulaModel;
      const {
        drake
      } = this.group;

      if (this.dragula && drake) {
        drake.models = drake.models || [];
        /** @type {?} */

        let prevIndex = drake.models.indexOf(prev);

        if (prevIndex !== -1) {
          // delete the previous
          drake.models.splice(prevIndex, 1); // maybe insert a new one at the same spot

          if (!!current) {
            drake.models.splice(prevIndex, 0, current);
          }
        } else if (!!current) {
          // no previous one to remove; just push this one.
          drake.models.push(current);
        }
      }
    }
  }
  /**
   * @return {?}
   */


  setup() {
    /** @type {?} */
    let checkModel = group => {
      if (this.dragulaModel) {
        if (group.drake.models) {
          group.drake.models.push(this.dragulaModel);
        } else {
          group.drake.models = [this.dragulaModel];
        }
      }
    };
    /** @type {?} */


    let group = this.dragulaService.find(this.dragula);

    if (!group) {
      /** @type {?} */
      let options = {};
      group = this.dragulaService.createGroup(this.dragula, options);
    } // ensure model and container element are pushed


    checkModel(group);
    group.drake.containers.push(this.container);
    this.subscribe(this.dragula);
    this.group = group;
  }
  /**
   * @param {?} name
   * @return {?}
   */


  subscribe(name) {
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.subs.add(this.dragulaService.dropModel(name).subscribe(({
      source,
      target,
      sourceModel,
      targetModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      } else if (target === this.el.nativeElement) {
        this.dragulaModelChange.emit(targetModel);
      }
    }));
    this.subs.add(this.dragulaService.removeModel(name).subscribe(({
      source,
      sourceModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      }
    }));
  }
  /**
   * @param {?} groupName
   * @return {?}
   */


  teardown(groupName) {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    /** @type {?} */


    const group = this.dragulaService.find(groupName);

    if (group) {
      /** @type {?} */
      const itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);

      if (itemToRemove !== -1) {
        group.drake.containers.splice(itemToRemove, 1);
      }

      if (this.dragulaModel && group.drake && group.drake.models) {
        /** @type {?} */
        let modelIndex = group.drake.models.indexOf(this.dragulaModel);

        if (modelIndex !== -1) {
          group.drake.models.splice(modelIndex, 1);
        }
      }
    }
  }
  /**
   * @return {?}
   */


  ngOnDestroy() {
    this.teardown(this.dragula);
  }

}

DragulaDirective.ɵfac = function DragulaDirective_Factory(t) {
  return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragulaService));
};

DragulaDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DragulaDirective,
  selectors: [["", "dragula", ""]],
  inputs: {
    dragula: "dragula",
    dragulaModel: "dragulaModel"
  },
  outputs: {
    dragulaModelChange: "dragulaModelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DragulaDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
}, {
  type: DragulaService
}];

DragulaDirective.propDecorators = {
  dragula: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  dragulaModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  dragulaModelChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[dragula]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: DragulaService
    }];
  }, {
    dragulaModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    dragula: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragulaModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


class DragulaModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: DragulaModule,
      providers: [DragulaService]
    };
  }

}

DragulaModule.ɵfac = function DragulaModule_Factory(t) {
  return new (t || DragulaModule)();
};

DragulaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DragulaModule
});
DragulaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      exports: [DragulaDirective],
      declarations: [DragulaDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DragulaModule, {
    declarations: [DragulaDirective],
    exports: [DragulaDirective]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/** @type {?} */


const MockDrakeFactory = new DrakeFactory((containers, options) => {
  return new MockDrake(containers, options);
});
/**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */

class MockDrake {
  /**
   * @param {?=} containers A list of container elements.
   * @param {?=} options These will NOT be used. At all.
   * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
   *               Note, default value is undefined, like a real Drake. Don't change that.
   */
  constructor(containers = [], options = {}, models) {
    this.containers = containers;
    this.options = options;
    this.models = models;
    /* Doesn't represent anything meaningful. */

    this.dragging = false;
    this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  }
  /**
   * @param {?} item
   * @return {?}
   */


  start(item) {
    this.dragging = true;
  }
  /**
   * @return {?}
   */


  end() {
    this.dragging = false;
  }
  /**
   * @param {?=} revert
   * @return {?}
   */


  cancel(revert) {
    this.dragging = false;
  }
  /**
   * @return {?}
   */


  remove() {
    this.dragging = false;
  }
  /**
   * @param {?} event
   * @param {?} callback
   * @return {?}
   */


  on(event, callback) {
    this.subs.add(this.emitter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
      eventType
    }) => eventType === event)).subscribe(({
      args
    }) => {
      callback(...args);
    }));
  }
  /**
   * @return {?}
   */


  destroy() {
    this.subs.unsubscribe();
  }
  /**
   * This is the most useful method. You can use it to manually fire events that would normally
   * be fired by a real drake.
   *
   * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
   * DragulaService uses to implement [dragulaModel].
   *
   * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
   *
   * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
   * @param {?} eventType
   * @param {...?} args
   * @return {?}
   */


  emit(eventType, ...args) {
    this.emitter$.next({
      eventType,
      args
    });
  }

}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/***/ }),

/***/ 79638:
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/***/ ((module) => {

var si = typeof setImmediate === 'function',
    tick;

if (si) {
  tick = function (fn) {
    setImmediate(fn);
  };
} else {
  tick = function (fn) {
    setTimeout(fn, 0);
  };
}

module.exports = tick;

/***/ })

}]);
//# sourceMappingURL=src_app_pages_drag-drop_drag-drop_module_ts.js.map