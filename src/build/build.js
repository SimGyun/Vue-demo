/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./src/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(4);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _home = __webpack_require__(5);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _details = __webpack_require__(18);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _news = __webpack_require__(27);
	
	var _news2 = _interopRequireDefault(_news);
	
	var _newsDatail = __webpack_require__(32);
	
	var _newsDatail2 = _interopRequireDefault(_newsDatail);
	
	var _newsDiscuss = __webpack_require__(37);
	
	var _newsDiscuss2 = _interopRequireDefault(_newsDiscuss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//install router
	_vue2.default.use(_vueRouter2.default);
	
	var App = _vue2.default.extend({});
	//routing
	var router = new _vueRouter2.default();
	
	router.map({
	    '/home': {
	        name: 'home',
	        component: _home2.default
	    },
	    '/details': {
	        name: 'details',
	        component: _details2.default
	    },
	    '/news': {
	        name: "news",
	        component: _news2.default
	    },
	    '/newsDetail': {
	        name: 'newsDetail',
	        component: _newsDatail2.default
	    },
	    "/newsDiscuss": {
	        name: "newsDiscuss",
	        component: _newsDiscuss2.default
	    }
	});
	
	router.redirect({
	
	    '*': '/newsDetail'
	});
	
	router.start(App, '#app');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.18
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} doNotObserve
	 */
	
	function defineReactive(obj, key, val, doNotObserve) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  // if doNotObserve is true, only use the child value observer
	  // if it already exists, and do not attempt to create it.
	  // this allows freezing a large object from the root and
	  // avoid unnecessary observation inside v-for fragments.
	  var childOb = doNotObserve ? isObject(val) && val.__ob__ : observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = doNotObserve ? isObject(newVal) && newVal.__ob__ : observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop.options);
	  }
	  if (assertProp(prop, value)) {
	    defineReactive(vm, key, value, true /* doNotObserve */);
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = Object.create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDepIds = Object.create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value, true /* do not observe */);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    // #2366 or custom terminal directive
	    def: def || resolveAsset(options, 'directives', dirName)
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.');
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains$1(item.$key, search) || contains$1(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains$1(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains$1(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains$1(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains$1(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.18';
	
	// devtools global hook
	/* istanbul ignore next */
	if (config.devtools) {
	  if (devtools) {
	    devtools.emit('init', Vue);
	  } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.11
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root) {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this._stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n#shouye {\r\n    background-color: #E0E0E0;\r\n    padding-bottom: 60px;\r\n}\r\n#shouye .weui_navbar_item {\r\n    padding: 5px 0;\r\n}\r\n.nav-icon{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.main-navbar span{\r\n    font-size: 10px;\r\n}\r\n.search-bar{\r\n    background-color: rgb(9,204,123);\r\n}\r\n.search-bar div , .search-input div{\r\n    display: inline-block;\r\n}\r\n.search-list{\r\n    margin: 10px 30px 10px 20px;\r\n}\r\n\r\n.search-input img {\r\n    width: 15px;\r\n    height: 15px;\r\n    padding:5px 5px 0 5px;\r\n}\r\n.search-input {\r\n    background-color: rgb(4,188,111);\r\n    width: 250px;\r\n}\r\n::-webkit-input-placeholder {\r\n    color:#F1EDED;\r\n}\r\n.show span{\r\n    display: block;\r\n    border-radius: 50%;   \r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    margin:4px;\r\n    z-index: 2;\r\n}\r\n.show img{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n.show-icon {\r\n    /*margin-top: -30px;*/\r\n    position: relative;\r\n    width: 75px;\r\n    margin: -30px auto 0 auto;\r\n}\r\n.active{\r\n    background-color: #F7F7F7;\r\n}\r\n.positive{\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n.cate-grid.weui_grid_icon{\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n.cate-grid img {\r\n    border-radius: 50%;\r\n}\r\n.no-pd-btm.weui_grid{\r\n    padding-bottom: 0;\r\n}\r\n.no-pd-btm p {\r\n    color:#6D6B6B;\r\n}\r\n.m-t-sm {\r\n    margin-top: 9px;\r\n}\r\n.m-r-xm {\r\n    margin-right: 5px;\r\n}\r\n.pd-r-sm {\r\n    padding-right: 10px;\r\n}\r\n.pd-r-ssm {\r\n    padding-right: 5px;\r\n}\r\n.pd-l-sm {\r\n    padding-left: 5px;\r\n}\r\n.bgc-white {\r\n    background-color: white;\r\n}\r\n.sale-p{\r\n    margin:5px;\r\n}\r\n.cnt-area{\r\n    line-height: 30px;\r\n}\r\n.cnt-area span {\r\n    font-size: 18px;\r\n}\r\n.cnt {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: red;\r\n    color:white;\r\n}\r\n.sale-img img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.sale-info {\r\n    background-color: #F7F6F6;\r\n    margin: 10px 5px 10px 10px;\r\n    width: 45%;\r\n    display: inline-block;\r\n}\r\n.sale-font {\r\n    font-size: 16px;\r\n}\r\n.dis-blk {\r\n    display: block;\r\n}\r\n.font-red {\r\n    color:red;\r\n}\r\n.font-l {\r\n    font-size: 18px;\r\n}\r\n.w-full {\r\n  width:100%;\r\n}\r\n.danger-text {\r\n  color:red;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _navBtm = __webpack_require__(11);
	
	var _navBtm2 = _interopRequireDefault(_navBtm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showImg: [{
	        name: '高级汤料',
	        des: '你还不来买我吗！',
	        url: '../assets/img/health02.jpg'
	      }, {
	        name: '家用汤料',
	        des: '你在我心中是最美',
	        url: '../assets/img/health01.jpg'
	      }, {
	        name: '养生花茶',
	        des: '拒绝春日绵绵好睡眠花茶250g',
	        url: '../assets/img/health03.png'
	      }],
	      saleTab: [{
	        name: '宁夏枸杞',
	        des: '宁安堡中宁枸杞250g',
	        price: 22.50,
	        url: '../assets/img/gouqi.png'
	      }, {
	        name: '忆江南',
	        des: '一级碧螺春礼盒250g',
	        price: 29.6,
	        url: '../assets/img/tea.png'
	      }],
	      slideUrl: '',
	      currentIndex: 0,
	      count: 0,
	      circles: [],
	      currentHours: null,
	      currentMinutes: null,
	      currentSeconds: null,
	      cnt: 0,
	      leftTime: null,
	      showCntDown: true
	    };
	  },
	
	  components: {
	    navbtm: _navBtm2.default
	  },
	  ready: function ready() {
	
	    this.slideUrl = this.showImg[this.currentIndex].url;
	    var imgCnt = this.showImg.length;
	    this.count = imgCnt;
	    var fragmentHtml = " ";
	    var parentNode = document.getElementById('spanCnt');
	
	    //动态添加幻灯片的小圆圈
	    for (var i = 0; i < imgCnt; i++) {
	      fragmentHtml += '<span>' + '</span>';
	    }
	    parentNode.innerHTML = fragmentHtml;
	    //设置小圆圈的状态
	    var spanNodes = parentNode.getElementsByTagName("span");
	    this.circles = spanNodes;
	    spanNodes[0].className = 'active';
	
	    for (var _i = 1; _i < imgCnt; _i++) {
	      spanNodes[_i].className = 'positive';
	    }
	    this.waitForNext();
	
	    //特卖场倒计时
	    var date = new Date();
	    var y = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    var h = date.getHours();
	    var endH = 17;
	
	    var nowTimeStamp = date.getTime() / 1000;
	    var endDate = new Date(y, month, day, endH, 0, 0);
	    var endTimeStamp = endDate.getTime() / 1000;
	    this.leftTime = endTimeStamp - nowTimeStamp;
	    if (this.leftTime > 0) {
	      this.showCountDown();
	    } else {
	      this.showCntDown = false;
	    }
	    this.$watch('currentSeconds', function () {
	      if (this.leftTime <= 0) {
	        this.showCntDown = false;
	      }
	    });
	  },
	
	  methods: {
	    waitForNext: function waitForNext() {
	      setInterval(this.next, 1000 * 3);
	    },
	    next: function next() {
	      this.currentIndex += 1;
	      if (this.currentIndex >= this.count) {
	        this.currentIndex = 0;
	      }
	      this.handleImg(this.currentIndex);
	    },
	    handleImg: function handleImg(index) {
	      this.slideUrl = this.showImg[index].url;
	      this.circles[index].className = 'active';
	      for (var i = 0; i < this.count; i++) {
	        if (i !== index) {
	          this.circles[i].className = 'positive';
	        }
	      }
	    },
	    showCountDown: function showCountDown() {
	      setInterval(this.countDown, 1000);
	    },
	    countDown: function countDown() {
	      var leftSeconds = this.leftTime;
	      var leftMinutes = leftSeconds / 60;
	      var leftHour = Math.floor(leftSeconds / 3600);
	      var minutes = Math.floor(leftMinutes - leftHour * 60);
	      var seconds = Math.floor(leftSeconds - leftHour * 3600 - minutes * 60);
	      this.leftTime -= 1;
	      if (parseInt(leftHour) < 10) {
	        leftHour = '0' + leftHour;
	        // parseInt(leftHour)
	      }
	      if (parseInt(minutes) < 10) {
	        minutes = '0' + minutes;
	        // parseInt(minutes)
	      }
	      if (parseInt(seconds) < 10) {
	        seconds = '0' + seconds;
	        // parseInt(seconds)
	      }
	      this.currentHours = leftHour;
	      this.currentMinutes = minutes;
	      this.currentSeconds = seconds;
	    },
	    goToDetails: function goToDetails(name, url, price) {
	      this.$route.router.go({ name: 'details', params: { name: name, imgUrl: url, price: price } });
	    }
	  },
	  computed: {
	    showWidth: function showWidth() {
	      return this.showImg.length * 25;
	    }
	  }
	};

	// </script>
	//
	// <style>
	// #shouye {
	//     background-color: #E0E0E0;
	//     padding-bottom: 60px;
	// }
	// #shouye .weui_navbar_item {
	//     padding: 5px 0;
	// }
	// .nav-icon{
	//     width: 20px;
	//     height: 20px;
	// }
	// .main-navbar span{
	//     font-size: 10px;
	// }
	// .search-bar{
	//     background-color: rgb(9,204,123);
	// }
	// .search-bar div , .search-input div{
	//     display: inline-block;
	// }
	// .search-list{
	//     margin: 10px 30px 10px 20px;
	// }
	//
	// .search-input img {
	//     width: 15px;
	//     height: 15px;
	//     padding:5px 5px 0 5px;
	// }
	// .search-input {
	//     background-color: rgb(4,188,111);
	//     width: 250px;
	// }
	// ::-webkit-input-placeholder {
	//     color:#F1EDED;
	// }
	// .show span{
	//     display: block;
	//     border-radius: 50%;  
	//     width: 15px;
	//     height: 15px;
	//     float: left;
	//     margin:4px;
	//     z-index: 2;
	// }
	// .show img{
	//     width: 100%;
	//     height: 200px;
	// }
	// .show-icon {
	//     /*margin-top: -30px;*/
	//     position: relative;
	//     width: 75px;
	//     margin: -30px auto 0 auto;
	// }
	// .active{
	//     background-color: #F7F7F7;
	// }
	// .positive{
	//     background-color: rgba(255,255,255,.5);
	// }
	// .cate-grid.weui_grid_icon{
	//     width: 60px;
	//     height: 60px;
	// }
	// .cate-grid img {
	//     border-radius: 50%;
	// }
	// .no-pd-btm.weui_grid{
	//     padding-bottom: 0;
	// }
	// .no-pd-btm p {
	//     color:#6D6B6B;
	// }
	// .m-t-sm {
	//     margin-top: 9px;
	// }
	// .m-r-xm {
	//     margin-right: 5px;
	// }
	// .pd-r-sm {
	//     padding-right: 10px;
	// }
	// .pd-r-ssm {
	//     padding-right: 5px;
	// }
	// .pd-l-sm {
	//     padding-left: 5px;
	// }
	// .bgc-white {
	//     background-color: white;
	// }
	// .sale-p{
	//     margin:5px;
	// }
	// .cnt-area{
	//     line-height: 30px;
	// }
	// .cnt-area span {
	//     font-size: 18px;
	// }
	// .cnt {
	//     display: inline-block;
	//     width: 30px;
	//     height: 30px;
	//     background-color: red;
	//     color:white;
	// }
	// .sale-img img {
	//     width: 100%;
	//     height: auto;
	// }
	// .sale-info {
	//     background-color: #F7F6F6;
	//     margin: 10px 5px 10px 10px;
	//     width: 45%;
	//     display: inline-block;
	// }
	// .sale-font {
	//     font-size: 16px;
	// }
	// .dis-blk {
	//     display: block;
	// }
	// .font-red {
	//     color:red;
	// }
	// .font-l {
	//     font-size: 18px;
	// }
	// .w-full {
	//   width:100%;
	// }
	// .danger-text {
	//   color:red;
	// }
	// </style>
	/* generated by vue-loader */
	// <template >
	// <div id="shouye">
	// <!--顶部搜索-->
	// <div class="search-bar">
	//     <div class="search-list">
	//       <img src="../assets/img/List.png" class="nav-icon">
	//     </div>
	//     <div class="search-input">
	//         <div class="search-img">
	//             <img src="../assets/img/search01.png">
	//         </div>
	//         <div>
	//             <input class="weui_input" type="search" placeholder="请输入商品"/>
	//         </div>
	//         <div class="clear-both"></div>
	//     </div>
	// </div>
	// <!--图片轮播-->
	// <div class="show">
	//     <div>
	//         <img :src="slideUrl">
	//     </div>
	//     <div class=" show-icon" :style="{width: showWidth+'px'}" >
	//         <div style="margin:0 auto;" id="spanCnt">
	//             <div class="clear-both"></div>
	//         </div>
	//     </div>      
	// </div>
	// <!--小分类-->
	// <div class="weui_grids m-t-sm bgc-white w-full">
	//     <a href="javascript:;" class="weui_grid no-pd-btm ">
	//         <div class="weui_grid_icon cate-grid">
	//             <img src="../assets/img/show02.jpg" >
	//         </div>
	//         <p class="weui_grid_label">
	//             汤料组合
	//         </p>
	//     </a>
	//     <a href="javascript:;" class="weui_grid no-pd-btm ">
	//         <div class="weui_grid_icon cate-grid">
	//             <img src="../assets/img/show01.jpeg" >
	//         </div>
	//         <p class="weui_grid_label">
	//             家庭常用
	//         </p>
	//     </a>
	//     <a href="javascript:;" class="weui_grid no-pd-btm ">
	//         <div class="weui_grid_icon cate-grid">
	//             <img src="../assets/img/show03.jpeg" >
	//         </div>
	//         <p class="weui_grid_label">
	//             办公常用
	//         </p>
	//     </a>
	// </div>
	// <!--特约专场-->
	// <div class="weui_cells sale" >
	//     <div class="weui_cell">
	//         <div class="weui_cell_bd weui_cell_primary">
	//             <p class="sale-p">特价专场</p>
	//         </div>
	//         <div class="weui_cell_ft">
	//             <div class="cnt-area" v-show="showCntDown">
	//                 <span class="pd-r-sm">距离结束还有</span>
	//                 <span class="cnt text-center m-r-xm">{{currentHours}}</span>:
	//                 <span class="cnt text-center m-r-xm">{{currentMinutes}}</span>:
	//                 <span class="cnt text-center m-r-xm">{{currentSeconds}}</span>
	//             </div>
	//             <div class="cnt-area danger-text" v-else>已结束</div>
	//         </div>
	//     </div>
	// </div>
	// <!--特约专场缩略图-->
	// <div class="sale-info" v-for="sale in saleTab" @click="goToDetails(sale.name,sale.price,sale.url)">
	//     <div class="sale-img">
	//         <img :src="sale.url">
	//     </div>
	//     <div class="sale-font pd-l-sm pd-r-ssm">
	//         <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
	//         <span class="sale-font-m ">{{sale.des}}</span>
	//         <span class="dis-blk font-red font-l">¥{{sale.price}}</span>
	//         <a href="#" v-link="{path:'http://localhost:3000/#!/details'}">测试</a>
	//    </div>     
	// </div>
	//
	// <!--热销推荐-->
	// <div class="weui_cells sale" >
	//     <div class="weui_cell">
	//         <div class="weui_cell_bd weui_cell_primary">
	//             <p class="sale-p">特约推荐</p>
	//         </div>
	//     </div>
	// </div>
	// <div class="sale-info" v-for="sale in saleTab">
	//     <div class="sale-img">
	//         <img :src="sale.url">
	//     </div>
	//     <div class="sale-font pd-l-sm pd-r-ssm">
	//         <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
	//         <span class="sale-font-m ">{{sale.des}}</span>
	//         <span class="dis-blk font-red font-l">¥{{sale.price}}</span>
	//    </div>     
	// </div>
	//
	// <navbtm></navbtm>
	//
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 11 */
/***/ function(module, exports) {

	var __vue_script__, __vue_template__
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n<div id=\"shouye\">\r\n<!--顶部搜索-->\r\n<div class=\"search-bar\">\r\n    <div class=\"search-list\">\r\n      <img src=\"" + __webpack_require__(13) + "\" class=\"nav-icon\">\r\n    </div>\r\n    <div class=\"search-input\">\r\n        <div class=\"search-img\">\r\n            <img src=\"" + __webpack_require__(14) + "\">\r\n        </div>\r\n        <div>\r\n            <input class=\"weui_input\" type=\"search\" placeholder=\"请输入商品\"/>\r\n        </div>\r\n        <div class=\"clear-both\"></div>\r\n    </div>\r\n</div>\r\n<!--图片轮播-->\r\n<div class=\"show\">\r\n    <div>\r\n        <img :src=\"slideUrl\">\r\n    </div>\r\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\r\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\r\n            <div class=\"clear-both\"></div>\r\n        </div>\r\n    </div>       \r\n</div>\r\n<!--小分类-->\r\n<div class=\"weui_grids m-t-sm bgc-white w-full\">\r\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\r\n        <div class=\"weui_grid_icon cate-grid\">\r\n            <img src=\"" + __webpack_require__(15) + "\" >\r\n        </div>\r\n        <p class=\"weui_grid_label\">\r\n            汤料组合\r\n        </p>\r\n    </a>\r\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\r\n        <div class=\"weui_grid_icon cate-grid\">\r\n            <img src=\"" + __webpack_require__(16) + "\" >\r\n        </div>\r\n        <p class=\"weui_grid_label\">\r\n            家庭常用\r\n        </p>\r\n    </a>\r\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\r\n        <div class=\"weui_grid_icon cate-grid\">\r\n            <img src=\"" + __webpack_require__(17) + "\" >\r\n        </div>\r\n        <p class=\"weui_grid_label\">\r\n            办公常用\r\n        </p>\r\n    </a>\r\n</div>\r\n<!--特约专场-->\r\n<div class=\"weui_cells sale\" >\r\n    <div class=\"weui_cell\">\r\n        <div class=\"weui_cell_bd weui_cell_primary\">\r\n            <p class=\"sale-p\">特价专场</p>\r\n        </div>\r\n        <div class=\"weui_cell_ft\">\r\n            <div class=\"cnt-area\" v-show=\"showCntDown\">\r\n                <span class=\"pd-r-sm\">距离结束还有</span>\r\n                <span class=\"cnt text-center m-r-xm\">{{currentHours}}</span>:\r\n                <span class=\"cnt text-center m-r-xm\">{{currentMinutes}}</span>:\r\n                <span class=\"cnt text-center m-r-xm\">{{currentSeconds}}</span>\r\n            </div>\r\n            <div class=\"cnt-area danger-text\" v-else>已结束</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--特约专场缩略图-->\r\n<div class=\"sale-info\" v-for=\"sale in saleTab\" @click=\"goToDetails(sale.name,sale.price,sale.url)\">\r\n    <div class=\"sale-img\">\r\n        <img :src=\"sale.url\">\r\n    </div>\r\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\r\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\r\n        <span class=\"sale-font-m \">{{sale.des}}</span>\r\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \r\n        <a href=\"#\" v-link=\"{path:'http://localhost:3000/#!/details'}\">测试</a>\r\n   </div>      \r\n</div>\r\n\r\n<!--热销推荐-->\r\n<div class=\"weui_cells sale\" >\r\n    <div class=\"weui_cell\">\r\n        <div class=\"weui_cell_bd weui_cell_primary\">\r\n            <p class=\"sale-p\">特约推荐</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"sale-info\" v-for=\"sale in saleTab\">\r\n    <div class=\"sale-img\">\r\n        <img :src=\"sale.url\">\r\n    </div>\r\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\r\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\r\n        <span class=\"sale-font-m \">{{sale.des}}</span>\r\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \r\n   </div>      \r\n</div>\r\n\r\n<navbtm></navbtm>\r\n\r\n</div>\r\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAB/0lEQVRYw+2Yu2sUURhHzzeriWirqXykEBXRIIqd2CmIiCkUlYBYqI2I2IiFgn+CGKt0Ij6q4KPRQoyNBIRIGiEieTWJBMGALgomx2J3Iax3FgLOJMWe8vvdyz1zmTuX+QBQT6gj6h91Sr2pVlgFhNoLDALRlN2NiOupSeo+4CLQVZDXAjAC3A91FOjJGbQ5Imab5LYDo8D6EjZwMAN25YQVYEeifrgkOYAjGTCRE5qTDVPb3TIYDvU88CARPo6IvqS5HgWuAusKlBsD7jQW7FNnrFFV+9UiF18+aqZ2qZ0r7dKmTZtlEAD1k3sW2APMAo+ar7gVE1Q3AUPA7iX1eaA3IoZSk9QAdgIbCnSbjIhvqA9NM62uTch1qq8snqp6BnW+xaCDCcHTJcg1mMmAxfLeqGWzmAEvc8Jp4GOi/gx4XoLcT+Ba45C8AfYuCb8DxyPifd5sdRuwsSC5BeBLRPxofGY6gFN1yRngSUTMlbBLbdq0+W+oFXWLq+1fpC53RZ2rXy+/1QG1rH/floR6CRhIZE8j4lzOA50ELgMdBbpNArdCHSPdQQDojoipJrkean2TMppLbzOgu8WArYna/pLkAA5kwKeccAH4nKi/A6olCb5eA9wGXvBv++1eRHxtnhERE+oh4ALFtj7GgX4A1GPqB/WXOq7eULOSdqklfwExJPTUZ/hB1wAAAABJRU5ErkJggg=="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADCElEQVRYw82Yy29VVRSHv31vwWJkQGhRfEUSQAhhRII8ggMDSXGiQjuAPwJCGFRGkIgBwgCiYzSNBI04MXFYJTEGYkK1iiNTSHh0BKQPSnm1fg66iCdyenrfZU32ffz22t9eZ529196JKkx9G+gC3gXWAMuBJcBDYBT4GxgE+oH+lNKDavxnLVUAUwJ2AweAzfHzFDAEDAMjQDuwFFgdLcAY8BVwMqV0o1bA2aA2qgPO2IT6pdqlvlTQZ7V6INPvkfqJ2t4IoKR+rD4Jx8fVjhr8bFd/C8DBSIWaocoRGdXf1bV1TrKcmeRddXMtTpJ6NqC+VxfVA5UTvXF1VF1fbedDGahyo6Ay/jep99WbFadGJPpUPL4XGw2VGWf308lXIi5Fkj6sN6cqhPsi4D6YS9gdwmPNhorxOiPXrqipSHhJvacurcJ/vXCfRjC2zyZYGYIzrYKKcd9Up9W+2QT7AqyrlWAx9kX1dt7jLAHbgCfAz60GA34COoBndoQSM1XC1ZTS5DyAXYn2mZWgBLwOXJ8HKICnVcereWCLgfF5ApuIdnEe2CPghXkCa4v2cR7YGP8Vd622zmhH8sCGyHkrWmSroh3KAxsAOtRVVblsjG0BpoE/88AuxOedrSRSFwA7gMsppbE8Qbs6og60GOzD2HEOFok+K9xQmwP2izqpvlwkeiNqsYFmVK454+2KQHxeifhoiHubDNWpDsfmPfcypS5S/4jTzHtNglqo/hgB6K6m45o4Yo2q25oAdT6gTtfi4J04Zk2qexoE1an2B1RfYTk9h6MN6q2Mo2V1QHVHTqmeiruQumf5Qzgcj2uCtyrsu0D9KM4SqnfUnv9ptqhHYqGtCXCX+lcM8I/6q3pC3atujehuUN9X96vfBIjqg1gjO3L8Hg7N+XrgSupO9Vy8HEU2rV5We9VXCnyW1W8zcG3Z/6tOwsiRdcyU5K8xczcmcAe4BgymlEYq9FUGvgZ6gO+APSmlqZqi12hT24oi99zBPRd0KaUpdW987QEe17bQNcniMfYBK/4Ff7NRtAQC82kAAAAASUVORK5CYII="

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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AABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANBAAAABgAAAAAAAAAAAAAAeAAAAHgAAAAGAHMAaABvAHcAMAAyAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAB4AAAAeAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAeAAAAABSZ2h0bG9uZwAAAHgAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAHgAAAAAUmdodGxvbmcAAAB4AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQRAAAAAAABAQA4QklNBBQAAAAAAAQAAAADOEJJTQQMAAAAAByVAAAAAQAAAHgAAAB4AAABaAAAqMAAABx5ABgAAf/Y/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVzYwAAAYQAAABsd3RwdAAAAfAAAAAUYmtwdAAAAgQAAAAUclhZWgAAAhgAAAAUZ1hZWgAAAiwAAAAUYlhZWgAAAkAAAAAUZG1uZAAAAlQAAABwZG1kZAAAAsQAAACIdnVlZAAAA0wAAACGdmlldwAAA9QAAAAkbHVtaQAAA/gAAAAUbWVhcwAABAwAAAAkdGVjaAAABDAAAAAMclRSQwAABDwAAAgMZ1RSQwAABDwAAAgMYlRSQwAABDwAAAgMdGV4dAAAAABDb3B5cmlnaHQgKGMpIDE5OTggSGV3bGV0dC1QYWNrYXJkIENvbXBhbnkAAGRlc2MAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9kZXNjAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRlc2MAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAACxSZWZlcmVuY2UgVmlld2luZyBDb25kaXRpb24gaW4gSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2aWV3AAAAAAATpP4AFF8uABDPFAAD7cwABBMLAANcngAAAAFYWVogAAAAAABMCVYAUAAAAFcf521lYXMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAKPAAAAAnNpZyAAAAAAQ1JUIGN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANwA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCkAKkArgCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgOEw4uDkkOZA5/DpsOtg7SDu4PCQ8lD0EPXg96D5YPsw/PD+wQCRAmEEMQYRB+EJsQuRDXEPURExExEU8RbRGMEaoRyRHoEgcSJhJFEmQShBKjEsMS4xMDEyMTQxNjE4MTpBPFE+UUBhQnFEkUahSLFK0UzhTwFRIVNBVWFXgVmxW9FeAWAxYmFkkWbBaPFrIW1hb6Fx0XQRdlF4kXrhfSF/cYGxhAGGUYihivGNUY+hkgGUUZaxmRGbcZ3RoEGioaURp3Gp4axRrsGxQbOxtjG4obshvaHAIcKhxSHHscoxzMHPUdHh1HHXAdmR3DHeweFh5AHmoelB6+HukfEx8+H2kflB+/H+ogFSBBIGwgmCDEIPAhHCFIIXUhoSHOIfsiJyJVIoIiryLdIwojOCNmI5QjwiPwJB8kTSR8JKsk2iUJJTglaCWXJccl9yYnJlcmhya3JugnGCdJJ3onqyfcKA0oPyhxKKIo1CkGKTgpaymdKdAqAio1KmgqmyrPKwIrNitpK50r0SwFLDksbiyiLNctDC1BLXYtqy3hLhYuTC6CLrcu7i8kL1ovkS/HL/4wNTBsMKQw2zESMUoxgjG6MfIyKjJjMpsy1DMNM0YzfzO4M/E0KzRlNJ402DUTNU01hzXCNf02NzZyNq426TckN2A3nDfXOBQ4UDiMOMg5BTlCOX85vDn5OjY6dDqyOu87LTtrO6o76DwnPGU8pDzjPSI9YT2hPeA+ID5gPqA+4D8hP2E/oj/iQCNAZECmQOdBKUFqQaxB7kIwQnJCtUL3QzpDfUPARANER0SKRM5FEkVVRZpF3kYiRmdGq0bwRzVHe0fASAVIS0iRSNdJHUljSalJ8Eo3Sn1KxEsMS1NLmkviTCpMcky6TQJNSk2TTdxOJU5uTrdPAE9JT5NP3VAnUHFQu1EGUVBRm1HmUjFSfFLHUxNTX1OqU/ZUQlSPVNtVKFV1VcJWD1ZcVqlW91dEV5JX4FgvWH1Yy1kaWWlZuFoHWlZaplr1W0VblVvlXDVchlzWXSddeF3JXhpebF69Xw9fYV+zYAVgV2CqYPxhT2GiYfViSWKcYvBjQ2OXY+tkQGSUZOllPWWSZedmPWaSZuhnPWeTZ+loP2iWaOxpQ2maafFqSGqfavdrT2una/9sV2yvbQhtYG25bhJua27Ebx5veG/RcCtwhnDgcTpxlXHwcktypnMBc11zuHQUdHB0zHUodYV14XY+dpt2+HdWd7N4EXhueMx5KnmJeed6RnqlewR7Y3vCfCF8gXzhfUF9oX4BfmJ+wn8jf4R/5YBHgKiBCoFrgc2CMIKSgvSDV4O6hB2EgITjhUeFq4YOhnKG14c7h5+IBIhpiM6JM4mZif6KZIrKizCLlov8jGOMyo0xjZiN/45mjs6PNo+ekAaQbpDWkT+RqJIRknqS45NNk7aUIJSKlPSVX5XJljSWn5cKl3WX4JhMmLiZJJmQmfyaaJrVm0Kbr5wcnImc951kndKeQJ6unx2fi5/6oGmg2KFHobaiJqKWowajdqPmpFakx6U4pammGqaLpv2nbqfgqFKoxKk3qamqHKqPqwKrdavprFys0K1ErbiuLa6hrxavi7AAsHWw6rFgsdayS7LCszizrrQltJy1E7WKtgG2ebbwt2i34LhZuNG5SrnCuju6tbsuu6e8IbybvRW9j74KvoS+/796v/XAcMDswWfB48JfwtvDWMPUxFHEzsVLxcjGRsbDx0HHv8g9yLzJOsm5yjjKt8s2y7bMNcy1zTXNtc42zrbPN8+40DnQutE80b7SP9LB00TTxtRJ1MvVTtXR1lXW2Ndc1+DYZNjo2WzZ8dp22vvbgNwF3IrdEN2W3hzeot8p36/gNuC94UThzOJT4tvjY+Pr5HPk/OWE5g3mlucf56noMui86Ubp0Opb6uXrcOv77IbtEe2c7ijutO9A78zwWPDl8XLx//KM8xnzp/Q09ML1UPXe9m32+/eK+Bn4qPk4+cf6V/rn+3f8B/yY/Sn9uv5L/tz/bf///+0ADEFkb2JlX0NNAAL/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAB4AHgDASIAAhEBAxEB/90ABAAI/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwCjXZq8DUyfu4Q6LHjJcwk86N5RmvbWQWEE+Hkp49VTH+o/V7tY8JVLHMGQuqC0FsNAIJjUyNvx/wC+rLuda57GmZ+iD5eCs2Xj1wxoMgnc7y5Tucxp28EmanO7/vf2k/Jk4vE+CSWiw+hbtqJIIOiL9txKG+m8l1p+jUwbnE/99WXndQ3WuqwzAa47rfCfzWIWDQLH7W6lxhxPf+sU7DCQAJJHguEepdV9zmZzM9z8eqyloFePY43OBA5srxgWMd/11SyPrb1x5gmgCCNopjQ6d3FXHUfVTBxj9r6k2zKj+j4zDcQf3XPG2pi5vLzMaywnHDo/lAAqU44i9rO9swzZDXqNDatG1V13MrdNgbYe5OhP9pPd1kZF7bXB3qDkEzPwKy9R/OAtniRohlzZ2zPgVDLDA/og+TNHmcw04z/hC3quhdYZXn1Q7YLHAEO01+K1MjpmZ1HrGTVg1Gw7pceGtkfnOXD0ZIY4MvAfWdNeR816J/iu6lacrL6U8+pV6f2mpx+k0hzarGb/AM9jvUqcz/1In4YCGxNLM+eWSPqAsG7DZx/8XuW9m6/Kaw92sbP5VC/6gZ1Y3Y2Qy4j8xw2krvHOa3RRLmqdrvkmd0/JxLzRlVuqe0SQ7uP5J/OSXqXVek4nV8N2PkN1IOywfSYezmlJRe2bu/4raf/QptZVsY3cC/Qk8A+SrX5dlLgHhoLSdB3H0fcqNziWEgwO4nXd+8q1lxvI3SXNjc+exVDhAWunRlMLjoSxsGZQOv8AUixv2Wk+6z3PcDMMPDW/1kHArtvy6sIgMNrg3d2a3/C2O/ksr9yycvJGRlW3tG1j3HY09mDStn9iva1S4oC+LtsuiNb7LB+1obwPyqLsgtbBcWsP5o7obnGNNSkykk7jz3JU90ybtyvJsbQDTi1BpmLb/eTH7jHFtTP+20I/anHVzfkABr8Ar1HQ+o/Z25b8a1uO9pcy4tJaQ0w4/wAlv9ZEbjOYdr2lpiYII0PfVMjkhIkRINb0uMCNT1c2Mpvg75qLbay7be0jtK1nY4I4VW/EkcSE6wjVDbiPrrFrT6lLtGv8PJy3fqR15/R+rMs2mxrmuY9oEudVpZdVX/wzPT9fH/0r6vsv/alY/TcoYOQK8lvq4dp22sOuh/Ob/LarnVulX9F6hWaXyx4Zk4GS3UOaYsotb/KY5EdwjwL7BZ1B9jmurLXMeA5jmmQWkbmvaf3XNRPVva8NsBaSJHmFz31WvGZSyqsbK6yw0s7Mqva3Kpq/qYnq24DP/Ca7N+O19bGu5ZwU5BIFL48+mJSRAAAAOySK29bf/9Hnb6muAc3gf3qp7Wl09+fiovyjtc3nt8FXdY5wBHfjyCpiBB1Wuhgkk5eQwwcbCyXNPcGxn2T/AKP2lYQkw0cnQLa6TuIzqXauyMDKDB51MGZ/1OKsbG917R81PCuHTuWSOzcZjtAjmO/j5rZ+q3Tm5XW8cO27Mech4cJBFRGxu3+Vc6pZzRpoJPAHmus6Dbj9KdXjOsBy8tri9oEgP9uyh1n8jb9Fv+F/62q/OTkMOQw+bhPC2MMbkAdr1eluusiHA7RwDqCTO3dHwd7ELIxMbqTHPz8c73uLGWOgOb+e70j7fofSU78mt7m1Vy4AEujUwydv8n3PcsTrHVsyyyksqYMUgsyd/I4rlu7+abp6m9n+EVLlIYpxgYaUPTXol6fFs5L1sNer6v3OyfReYqAc910R7GzvMO/O9qh1XAwKaq6q6bKcguIG+SXs2ts3uc72e3/g1p9PyX147nbXNY2sCtwdBDWDc610/wDbj/8AoKpkfZsFteRlW+ta8H0g73bC53q2P2/zddFtbvo/TWjxnS+jB7Yo087l9KJaZbBWtTj/ALS+o99Nv9J6Da26l/c49zi22v8Aqts9W7/ttdB0LCxeo45dlQK2Ag7uSW/m7vzWpWjpNWV1fGwQRVd0zKNrZ9m9rWe9jfzePoqYEeXEwSB86a/+Le7ZlPouI2uw2kT2NWTkx/0c5eiG6kCS9sfFePfV7ruH0jqhOU7a04vpA8+51vrmf+tsrW/m/wCMLo2PUXVbr7OzWjv8VIAKWF6H60fWevomI/Obbu2QK6SBD3H/AAf7yS8a+sH1gzuu5Xr5J21M/mqR9Fo8f5T0krFof//S4NlsuLSeUWp9QZZP5hHxM/Rd/ZUaMZ1jN0ahVn414e7lMnj4iqm50jqDqetY2Rt314zi+5g/OqjZfUP+Oqd6X/XEK/DPTurW4ZdvFLi1lg4ez6VNzf5N9Xp2s/rqfRqiyy2xwgwGj/qj/wB9VrLZ9qZWWD9bwmewd7cYE+nt/esw4fT/AOFfS/7jpVQMR0Xx0TY9Re2QYIW90gXU5FeW3a4VNcCHfvWB1en9l+9ZfS2tcwOH0XDRdBhMAaGwImfmq1cYkJbHRsaCiFv2kcW51Yf/AD7tQP3R21VLq/UMO9tTtzK4sLt40cYO79Jz+iReo4Jt9S0hhrpaXPDzAP5jW/572qrjfU/quZgsH6Giq/8ASsvvMkVR7WV01+73/T92z2f8YoIcmMeQShIgD9E/Ky+7xRojXurK+sFWXjtpoLXeoAbP5LdHem5ZmdmWZBc1z9oEFswG7R4fyVXzug5PTst+FXl03gNDjfUDEu/M9357W/8AnxVcfpzhFlznE8tYRA8lZNfvMYvtu9h0XqltGEGMYHuc0wXHgwWtf/K2/STXWMxWZD92t1D6S48w9zBa7/N3vVbpn0WiIPgszr/U222PoqP6NsB7h3A+ixv/ABjt39hTQrdhmTs5GbZ9oude3QlxgfyAGsrH9naq5JPKt9Kx35nUcbDaQ1+VaKWl3G6w+nX/AOCOYnzcGzHsexzSx7CWvYdCHDRzSpBsxndoEJJ3JJIf/9PnsTF21w4IrsNpnST4DlaIoAHC1vqr04ZnWad4mvHm94/qR6f/AIM6tOS879Z+ks6Fdh4cAXHEbdlH/hbH3S3/AK1WxlSn9aen04vTukBjvRzMairfYNCLLx9reHf1XXLT/wAaFYP1hxw8wy3HqDj/ACfUua5Yf+MSy53XMva7fTvD641G3a1te3b+Zt+imdSUhpdM6u2qwsvHpuJ1LRIBOrn1t/l/+Zrr+nvbfULGFrmn93UBeWtueDPPiCtDB6xkYr2vx7H12DkA8/8Ak0ww1sL45NKL6kcC7KrOGHCptpD3Pd9GBu274/6KbO6DlNw24tV1lrTtDjP5tbQz+S5cx03/ABjZ9FLqcjHqymk7nucC1x+JYVmdR67d1LJdkWZN1ZJllbXENb+6xv8AJbtURxyNWLLLHJEdab/U8MYme7Gse0v9NsgGXNcJ279vta70tnsVc1NAL3naO7jos+l+KHmy/K2TqdrXWvP/AFDP85yFmZtDzFDbLSP8JeQT/Zpq/RMTxi7rTl7N3M6z6dZpxDEiHWniP5KybxtraDJsedxB5APd38p6g4uY8Ofq7kDsiUNN1suMzqSpAKYibK+Da7HzcW9ujqb6rAfNj2v/AO+r0v8Axj9AZXkM6tS2GZJ9PIA/0gHss/64wLzQVzmMrH5z2gfMhe8dYqr6t0rKwtC6xh9I+D2++o/57U4IrV8PyenyZboktWGvbMa8EeBHKSch/9QJOi636hY49PMyo5cypp/qg2P/APPjFx8zr9y7v6jgDorj+/e8n5Bjf++pxS8t/jdoNdvTs3Xa5tlL459pa9v/AEbbF58zNfsGJlneAB6Vv8j83b/wa9j/AMY3SndS+q+R6Ym7EIyax3OyW2N/7ae9eHC0Bux4318xwQT+dW781NISC2MjplW7dW/YDwOR8lBvTxLRU82WnhoClQ9w+iTbTI3bYDgJ90sd9B/8tHyc1ljjViV/Zsf9wHc8j/h7z7npotOiUjDw6DXcW5eS7Qsb9Csed4+nZ/xaqMrFzjsbtA5j8gQiHgxoB2hWsa9jPTbHDiSU4IdLp31Yy82wNY0kHuVdz/q7X02va+HPgyR4rW+rPWPRb7hoeJQ/rFmssBduHiPCSn8IpbbxGTraew7I2DtYHOd8UG526wuiPJQ9UgRKjK5vdMHr9Zxp/wBM1x/sn1P++r1fpvUyYa8+4Ly/6rUl+c7IP0agQ3+sV2ldhbDgdQjdLgHnuqbcbr/UMUaNFxsYP5NoF4/8+JKn9ab9v1kFv+loqLviN1f/AHxJG9FvV//VqEiB58LuvqPZPRXD9y94PzbW/wD78vPy/jy1XXfUHL9mbik6gsuaPiPRs/8ARScUvY3MbbS9jtWuG0/ArwD64dDf0Xq9tIEY9ri6k9hr76v7H/UL3wP9jvkuS+uvRcfqeKRY3nUOHLXD6L2oUl8UB7ojHQi9Q6fkdPyHUXt4+i8cOHi1VgU2kW2HP0UmWQI8NVXlSa5JTtYeeKmQHRChldQdkAtn2nv3Wa1+kJ3WjtoPAJ16KVYYPkhDc5wa0SSYCZzy4x+Cu4FIafUdq48BNJSBbv8AQ6RRWGDkfSPiSt0P9qx+nDa0TydStHfOg5OgTbZAHlfrdZ/ltscsoqB+e6z/AL+kqHX8gZHWcuxplrbPTafKsCn/ANFpJ3Rjv1fV/9bIJO1an1Zz/sXWaHuMVXfobfCLPaHf2LPTevLUk5IfplpMOaef7lR6pUbMV47gSF86JJLn1HqvTacut4ubLQJcfPxC4nqPRX0Pc7Hd6jJ+ieQsRJArU7muYSHAghLcgJIKbAsPZSDbHiQNPFVUkDfRQrq6FTGt1OpWhhsL3gnhc+kmlkjT32OdrQO6llZn2TGtyjzSwub5v+jUP+3XMXn6Sb11X9NEknkmSeSkhpKVgf/ZADhCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANgAAAAEAOEJJTQQGAAAAAAAHAAYAAAABAQD/4QzXaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9Ind3dy5tZWl0dS5jb20iIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTAzLTE3VDE2OjAzOjM4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNi0wMy0xN1QxNjowNzoyMyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNi0wMy0xN1QxNjowNzoyMyswODowMCIgeG1wTU06RG9jdW1lbnRJRD0iQjYyNDZBMjQ4NDEyQjhGNDA2M0RGQTExMzg2REJFNjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkY3RjExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQjYyNDZBMjQ4NDEyQjhGNDA2M0RGQTExMzg2REJFNjMiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGN0YxMTc0MDcyMDY4MTE4MjJBOUI5NkVFQUEzQ0EzIiBzdEV2dDp3aGVuPSIyMDE2LTAzLTE3VDE2OjA3OjIzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwM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"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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AAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANLAAAABgAAAAAAAAAAAAAAeAAAAHgAAAALAHMAaABvAHcAMAAxAC4AagBwAGUAZwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAeAAAAHgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAHgAAAAAUmdodGxvbmcAAAB4AAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAB4AAAAAFJnaHRsb25nAAAAeAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JU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OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iNEY4REFBQUQwNEM5MDk1QTE0NDQyNDA1NUNEMUMyNjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA4MDExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNEY4REFBQUQwNEM5MDk1QTE0NDQyNDA1NUNEMUMyNjEiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDMtMTdUMTY6MDI6NTkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE2LTAzLTE3VDE2OjA3OjM4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE2LTAzLTE3VDE2OjA3OjM4KzA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDA4MDExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHN0RXZ0OndoZW49IjIwMTYtMDMtMTdUMTY6MDc6MzgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAB4AHgDAREAAhEBAxEB/90ABAAP/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkKGBkmNkUaJ2R0VTfyo7PDKCnT4/OElKS0xNTk9GV1hZWltcXV5fVGVmZ2hpamtsbW5vZHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp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"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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b29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANLAAAABgAAAAAAAAAAAAAAeAAAAHgAAAALAHMAaABvAHcAMAAzAC4AagBwAGUAZwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAeAAA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LyhJDXxTp4P/2ThCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANgAAAAEAOEJJTQQGAAAAAAAHAAYAAAABAQD/4Qy3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJBMkE1OUJFNjA0MDRFOTA1MDE1N0VBM0FBMUVFNzhEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTdGMTE3NDA3MjA2ODExODIyQTlCOTZFRUFBM0NBMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJBMkE1OUJFNjA0MDRFOTA1MDE1N0VBM0FBMUVFNzhEMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNi0wMy0xN1QxNjowMzo1NyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDMtMTdUMTY6MDY6NTcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTYtMDMtMTdUMTY6MDY6NTcrMDg6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRTdGMTE3NDA3MjA2ODExODIyQTlCOTZFRUFBM0NBMyIgc3RFdnQ6d2hlbj0iMjAxNi0wMy0xN1QxNjowNjo1NyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uAA5BZG9iZQBkQAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAwBAwMDBQQFCQYGCQ0KCQoNDw4ODg4PDwwMDAwMDw8MDAwMDAwPDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAHgAeAMBEQACEQEDEQH/3QAEAA//xAGiAAAABwEBAQEBAAAAAAAAAAAEBQMCBgEABwgJCgsBAAICAwEB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"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\details.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\details.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _carousel = __webpack_require__(20);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				saleTab: [{
					name: '宁夏枸杞',
					des: '宁安堡中宁枸杞250g',
					price: 22.50,
					url: '../assets/img/gouqi.png'
				}, {
					name: '忆江南',
					des: '一级碧螺春礼盒250g',
					price: 29.6,
					url: '../assets/img/tea.png'
				}],
				name: null,
				price: null,
				imgUrl: null
			};
		},
		ready: function ready() {
			this.name = this.$route.params.name;
			this.price = this.$route.params.price;
			this.imgUrl = this.$route.params.imgUrl;
			console.log(this.name);
		},
	
		methods: {
			goBack: function goBack() {
				window.history.back();
			}
		},
		components: {
			carousel: _carousel2.default
		},
		computed: {
			cartCnt: function cartCnt() {
				return sessionStorage.length;
			}
		}
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div id="details">
	// 	<nav class="text-center">
	// 		<div class="pull-left big-font pd-l-m" @click="goBack">&lt;</div>
	// 		<div class="pd-r-m">商品详情</div>
	// 		<div class="pull-right">
	// 			<img src="../assets/img/cart.png" class="nav-img">
	// 		</div>
	// 		<span class="danger-text cart-cnt" v-show="cartCnt!==0">{{cartCnt}}</span>
	// 		<div class="clear-both"></div>
	// 	</nav>
	// 	<div class="banner">
	// 		<carousel></carousel>
	// 		<div class="pd-l-m bgc-white">{{name}} 拒绝春日绵绵好睡眠花茶250g</div>
	// 		<p class="pd-l-m danger-text bgc-white">¥{{price}}</p>
	// 		<div class="banner-font bgc-white">
	// 			<span class="pull-left pd-l-m gray-font ps-r">原价：¥ 120
	// 				<hr class="ps-a del-line"/>
	// 			</span>
	// 			<span class="pull-right pd-r-m">运费： ¥ 12</span>
	// 			<div class="clear-both"></div>
	// 		</div>
	// 		<div class="bgc-white m-t-sm">
	// 			<p class="pd-l-m">属性： 寒性</p>
	// 			<p class="pd-l-m">产地： 珠穆朗玛峰</p>
	// 			<p class="pd-l-m pd-r-m">功效： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>
	// 			<p class="pd-l-m pd-r-m">用法： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>
	// 		</div>
	// 	</div>
	//
	// 	<div class="weui_cells sale text-center gray-font" >
	//     		---- 其他热销同款 ----
	// 	</div>
	// 	<div class="sale-info" v-for="sale in saleTab">
	// 	    <div class="sale-img">
	// 	        <img :src="sale.url">
	// 	    </div>
	// 	    <div class="sale-font pd-l-sm pd-r-ssm">
	// 	        <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
	// 	        <span class="sale-font-m ">{{sale.des}}</span>
	// 	        <span class="dis-blk font-red font-l">¥{{sale.price}}</span>
	// 	   </div>
	// 	</div>
	//
	//   </div>
	// </template>
	// <script >

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(21)
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./carousel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.show span{\r\n    display: block;\r\n    border-radius: 50%;\r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    margin:4px;\r\n    z-index: 2;\r\n}\r\n.show img{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n.show-icon {\r\n    height: 30px;\r\n    position: relative;\r\n    width: 75px;\r\n    margin: -30px auto 0 auto;\r\n}\r\n.active{\r\n    background-color: #F7F7F7;\r\n}\r\n.positive{\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n.clear-both {\r\n\tclear: both;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="show">
	//     <div>
	//         <img :src="slideUrl">
	//     </div>
	//     <div class=" show-icon" :style="{width: showWidth+'px'}" >
	//         <div style="margin:0 auto;" id="spanCnt">
	//             <div class="clear-both"></div>
	//         </div>
	//     </div>
	// </div>
	// </template>
	//
	// <script >
	exports.default = {
		data: function data() {
			return {
				showImg: [{
					name: '高级汤料',
					des: '你还不来买我吗！',
					url: '../assets/img/health02.jpg'
				}, {
					name: '家用汤料',
					des: '你在我心中是最美',
					url: '../assets/img/health01.jpg'
				}, {
					name: '养生花茶',
					des: '拒绝春日绵绵好睡眠花茶250g',
					url: '../assets/img/health03.png'
				}],
				slideUrl: '',
				currentIndex: 0,
				count: 0,
				circles: []
			};
		},
		ready: function ready() {
			this.slideUrl = this.showImg[this.currentIndex].url;
			var imgCnt = this.showImg.length;
			this.count = imgCnt;
			var fragmentHtml = " ";
			var parentNode = document.getElementById('spanCnt');
	
			//动态添加幻灯片的小圆圈
			for (var i = 0; i < imgCnt; i++) {
				fragmentHtml += '<span>' + '</span>';
			}
			parentNode.innerHTML = fragmentHtml;
			//设置小圆圈的状态
			var spanNodes = parentNode.getElementsByTagName("span");
			this.circles = spanNodes;
			spanNodes[0].className = 'active';
	
			for (var _i = 1; _i < imgCnt; _i++) {
				spanNodes[_i].className = 'positive';
			}
			this.waitForNext();
		},
	
		methods: {
			waitForNext: function waitForNext() {
				setInterval(this.next, 1000 * 3);
			},
			next: function next() {
				this.currentIndex += 1;
				if (this.currentIndex >= this.count) {
					this.currentIndex = 0;
				}
				this.handleImg(this.currentIndex);
			},
			handleImg: function handleImg(index) {
				this.slideUrl = this.showImg[index].url;
				this.circles[index].className = 'active';
				for (var i = 0; i < this.count; i++) {
					if (i !== index) {
						this.circles[i].className = 'positive';
					}
				}
			}
		},
		computed: {
			showWidth: function showWidth() {
				return this.showImg.length * 25;
			}
		}
	};
	// </script>
	//
	// <style >
	// .show span{
	//     display: block;
	//     border-radius: 50%;
	//     width: 15px;
	//     height: 15px;
	//     float: left;
	//     margin:4px;
	//     z-index: 2;
	// }
	// .show img{
	//     width: 100%;
	//     height: 200px;
	// }
	// .show-icon {
	//     height: 30px;
	//     position: relative;
	//     width: 75px;
	//     margin: -30px auto 0 auto;
	// }
	// .active{
	//     background-color: #F7F7F7;
	// }
	// .positive{
	//     background-color: rgba(255,255,255,.5);
	// }
	// .clear-both {
	// 	clear: both;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"show\">\n    <div>\n        <img :src=\"slideUrl\">\n    </div>\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\n            <div class=\"clear-both\"></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <div id=\"details\">\n\t<nav class=\"text-center\">\n\t\t<div class=\"pull-left big-font pd-l-m\" @click=\"goBack\">&lt;</div>\n\t\t<div class=\"pd-r-m\">商品详情</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<img src=\"" + __webpack_require__(26) + "\" class=\"nav-img\">\n\t\t</div>\n\t\t<span class=\"danger-text cart-cnt\" v-show=\"cartCnt!==0\">{{cartCnt}}</span>\n\t\t<div class=\"clear-both\"></div>\n\t</nav>\n\t<div class=\"banner\">\n\t\t<carousel></carousel>\n\t\t<div class=\"pd-l-m bgc-white\">{{name}} 拒绝春日绵绵好睡眠花茶250g</div>\n\t\t<p class=\"pd-l-m danger-text bgc-white\">¥{{price}}</p>\n\t\t<div class=\"banner-font bgc-white\">\n\t\t\t<span class=\"pull-left pd-l-m gray-font ps-r\">原价：¥ 120\n\t\t\t\t<hr class=\"ps-a del-line\"/>\n\t\t\t</span>\n\t\t\t<span class=\"pull-right pd-r-m\">运费： ¥ 12</span>\n\t\t\t<div class=\"clear-both\"></div>\n\t\t</div>\n\t\t<div class=\"bgc-white m-t-sm\">\n\t\t\t<p class=\"pd-l-m\">属性： 寒性</p>\n\t\t\t<p class=\"pd-l-m\">产地： 珠穆朗玛峰</p>\n\t\t\t<p class=\"pd-l-m pd-r-m\">功效： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>\n\t\t\t<p class=\"pd-l-m pd-r-m\">用法： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"weui_cells sale text-center gray-font\" >\n    \t\t---- 其他热销同款 ----\n\t</div>\n\t<div class=\"sale-info\" v-for=\"sale in saleTab\">\n\t    <div class=\"sale-img\">\n\t        <img :src=\"sale.url\">\n\t    </div>\n\t    <div class=\"sale-font pd-l-sm pd-r-ssm\">\n\t        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\n\t        <span class=\"sale-font-m \">{{sale.des}}</span>\n\t        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span>\n\t   </div>\n\t</div>\n\n  </div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(28)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\news.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\news.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.news-header{\n    background-color: #09CC7B;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    color:#fff;\n    font-size: 18px;\n    font-weight: 700;\n}\n.weui_navbar.news-navbar{\n    color:#333;\n    position: relative;\n    top: auto;\n    background-color: #fff;\n}\n.weui_navbar.news-navbar:after{\n    border:none;\n}\n.weui_navbar.news-navbar .weui_navbar_item{\n    border: none;\n}\n.weui_navbar.news-navbar .weui_navbar_item:after{\n    border: none;\n}\n.news-list{\n    width: 95%;\n    margin: 0 auto;\n}\n/* 每一项 */\n.news-list-cell{\n    border-bottom: 1px solid #E2E2E2;\n    overflow:hidden;\n    position:relative;\n}\n.nl-img{\n    display:block;\n    height:110px;\n    width:110px;\n    border-radius:4px;\n    float: left;\n    overflow: hidden;\n    margin:10px 10px 10px 0;\n}\n.nl-img img{\n    display: block;\n    height:100%;\n    width:100%;\n}\n.nl-info{\n    margin-top: 10px;\n    width:90%;\n}\n.nl-info h3{\n    font-size: 16px;\n    color:#333;\n    margin-bottom: 12px;\n}\n.nl-info p{\n    color:#666;\n    font-size: 12px;\n}\n.nl-info time{\n    position:absolute;\n    color:#999;\n    font-size: 12px;\n    right: 10px;\n    bottom:10px;\n    height:12px;\n    line-height: 12px;\n}\n", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _carousel = __webpack_require__(20);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            newsSort: ["类别1", "类别2", "类别3", "类别4"],
	            newsCell: [{
	                href: "../assets/img/news-cell-img.jpg",
	                title: "这里是标题信息这里是标题信息这里是标题信息",
	                info: "这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
	                time: "2016-03-17"
	
	            }, {
	                href: "../assets/img/news-cell-img.jpg",
	                title: "这里是标题信息这里是标题信息这里是标题信息",
	                info: "这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
	                time: "2016-03-17"
	
	            }, {
	                href: "../assets/img/news-cell-img.jpg",
	                title: "这里是标题信息这里是标题信息这里是标题信息",
	                info: "这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
	                time: "2016-03-17"
	
	            }]
	        };
	    },
	
	    methods: {
	        alt: function alt() {
	            alert('this.msg is' + this.msg);
	        }
	    },
	    components: {
	        carousel: _carousel2.default
	    }
	};

	// </script>
	// <template>
	//     <div class="news-header">资讯</div>
	//     <div class="weui_navbar news-navbar">
	//         <div class="weui_navbar_item weui_bar_item_on" v-for="sort in newsSort">
	//             {{sort}}
	//         </div>
	//     </div>
	//     <carousel></carousel>
	//     <div class="news-list" >
	//         <div class="news-list-cell" v-for="cellInfo in newsCell">
	//             <a class="nl-img"><img :src="cellInfo.href" alt=""></a>
	//             <div class="nl-info">
	//             <h3>{{cellInfo.title}}</h3>
	//             <p>{{cellInfo.info}}</p>
	//             <time>{{cellInfo.time}}</time>
	//             </div>
	//         </div>
	//     </div>
	//
	// </template>
	//
	//
	// <style>
	//     .news-header{
	//         background-color: #09CC7B;
	//         height: 42px;
	//         line-height: 42px;
	//         text-align: center;
	//         color:#fff;
	//         font-size: 18px;
	//         font-weight: 700;
	//     }
	//     .weui_navbar.news-navbar{
	//         color:#333;
	//         position: relative;
	//         top: auto;
	//         background-color: #fff;
	//     }
	//     .weui_navbar.news-navbar:after{
	//         border:none;
	//     }
	//     .weui_navbar.news-navbar .weui_navbar_item{
	//         border: none;
	//     }
	//     .weui_navbar.news-navbar .weui_navbar_item:after{
	//         border: none;
	//     }
	//     .news-list{
	//         width: 95%;
	//         margin: 0 auto;
	//     }
	//     /* 每一项 */
	//     .news-list-cell{
	//         border-bottom: 1px solid #E2E2E2;
	//         overflow:hidden;
	//         position:relative;
	//     }
	//     .nl-img{
	//         display:block;
	//         height:110px;
	//         width:110px;
	//         border-radius:4px;
	//         float: left;
	//         overflow: hidden;
	//         margin:10px 10px 10px 0;
	//     }
	//     .nl-img img{
	//         display: block;
	//         height:100%;
	//         width:100%;
	//     }
	//     .nl-info{
	//         margin-top: 10px;
	//         width:90%;
	//     }
	//     .nl-info h3{
	//         font-size: 16px;
	//         color:#333;
	//         margin-bottom: 12px;
	//     }
	//     .nl-info p{
	//         color:#666;
	//         font-size: 12px;
	//     }
	//     .nl-info time{
	//         position:absolute;
	//         color:#999;
	//         font-size: 12px;
	//         right: 10px;
	//         bottom:10px;
	//         height:12px;
	//         line-height: 12px;
	//     }
	// </style>

	/* generated by vue-loader */
	//
	// <script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"news-header\">资讯</div>\n<div class=\"weui_navbar news-navbar\">\n    <div class=\"weui_navbar_item weui_bar_item_on\" v-for=\"sort in newsSort\">\n        {{sort}}\n    </div>\n</div>\n<carousel></carousel>\n<div class=\"news-list\" >\n    <div class=\"news-list-cell\" v-for=\"cellInfo in newsCell\">\n        <a class=\"nl-img\"><img :src=\"cellInfo.href\" alt=\"\"></a>\n        <div class=\"nl-info\">\n        <h3>{{cellInfo.title}}</h3>\n        <p>{{cellInfo.info}}</p>\n        <time>{{cellInfo.time}}</time>\n        </div>\n    </div>\n</div>\n\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\newsDatail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\newsDatail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsDatail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsDatail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n.det-container{\n    position:absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom:0;\n    background-color: #eee;\n\n}\n.det-header{\n    background-color: #fff;\n    height: 42px;\n    line-height: 42px;\n    font-weight: 700;\n    overflow:hidden;\n    position: fixed;\n    width: 100%;\n}\n.det-icon{\n    display: block;\n    height: 22px;\n    line-height: 22px;\n}\n.det-head-left{\n    float: left;\n\n}\n.det-head-left,.det-head-right{\n    width:30px;\n    text-align: center;\n    padding:10px 0;\n}\n.det-head-right{\n    float: right;\n}\n.det-main{\n    padding: 42px 20px 50px;\n    background-color: #eee;\n}\n.det-title{\n    margin-bottom: 20px;\n}\n.det-article{\n    text-indent:2em;\n\n}\n.det-foot{\n    position: absolute;\n    bottom: 85px;\n    left: 0;\n    right: 0;\n    background-color:#fff;\n}\n.det-input{\n    float: left;\n    width: 70%;\n\n}\n.det-input input{\n    display: block;\n    width: 90%;\n    padding-left: 5%;\n    margin: 10px auto;\n    height: 30px;\n    line-height: 30px;\n    border: 1px solid #666;\n    border-radius: 5px;\n    outline: none;\n}\n.det-discuss{\n    float: left;\n    width: 30%;\n}\n.det-discuss div{\n    width: 50%;\n    float: left;\n    text-align: center;\n}\n.det-discuss span {\n    display: block;\n    height: 25px;\n    line-height: 25px;\n}\n.det-discuss span.det-icon {\n    margin: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(42);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            newTodo: "",
	            todos: [],
	            laud: 0
	
	        };
	    },
	
	    methods: {
	        addTodo: function addTodo() {
	            var text = this.newTodo.trim();
	            if (text) {
	                this.todos.push({ text: text, date: new Date().toLocaleString() });
	                this.newTodo = "";
	                if (localStorage.getItem("loaclTodo")) {
	                    localStorage.setItem("loaclTodo", (0, _stringify2.default)(this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")))));
	                } else {
	                    localStorage.setItem("loaclTodo", (0, _stringify2.default)(this.todos));
	                }
	            }
	            this.$route.router.go({ name: "newsDiscuss" });
	        },
	        goNews: function goNews() {
	            this.$route.router.go({ name: "news" });
	        }
	    },
	    ready: function ready() {
	        if (JSON.parse(localStorage.getItem("loaclTodo"))) {
	            this.todos = this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")));
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="det-container">
	//         <div class="det-header">
	//             <span class="det-icon det-head-left" @click="goNews()">&lt;</span >
	//             <span class="det-icon det-head-right">&epsilon;</span>
	//         </div>
	//         <div class="det-main">
	//             <h2 class="det-title">
	//                 这里是标题这里是标题这里是标题fg
	//             </h2>
	//             <article class="det-article">
	//                 <p>
	//                     啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将afg阿什来得及阿散井的理解啊速度dsf啊数量单价阿斯顿
	//                 </p>
	//                 <p>
	//                     啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿
	//                 </p>
	//                 <p>
	//                     啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿结束了
	//                 </p>
	//             </article>
	//
	//         </div>
	//         <div class="det-foot">
	//             <div class="det-input">
	//                 <input type="text" placeholder="写评论..." v-model="newTodo" v-on:keyup.enter="addTodo()">
	//             </div>
	//             <div class="det-discuss">
	//                 <div @click="this.$route.router.go({name:'newsDiscuss'});">
	//                     <span>{{ todos.length }}</span>
	//                     <span class="det-icon">评</span>
	//                 </div>
	//                 <div @click="laud++">
	//                     <span>{{ laud }}</span>
	//                     <span class="det-icon">赞</span>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <style>
	//
	//     .det-container{
	//         position:absolute;
	//         left: 0;
	//         top: 0;
	//         right: 0;
	//         bottom:0;
	//         background-color: #eee;
	//
	//     }
	//     .det-header{
	//         background-color: #fff;
	//         height: 42px;
	//         line-height: 42px;
	//         font-weight: 700;
	//         overflow:hidden;
	//         position: fixed;
	//         width: 100%;
	//     }
	//     .det-icon{
	//         display: block;
	//         height: 22px;
	//         line-height: 22px;
	//     }
	//     .det-head-left{
	//         float: left;
	//
	//     }
	//     .det-head-left,.det-head-right{
	//         width:30px;
	//         text-align: center;
	//         padding:10px 0;
	//     }
	//     .det-head-right{
	//         float: right;
	//     }
	//     .det-main{
	//         padding: 42px 20px 50px;
	//         background-color: #eee;
	//     }
	//     .det-title{
	//         margin-bottom: 20px;
	//     }
	//     .det-article{
	//         text-indent:2em;
	//
	//     }
	//     .det-foot{
	//         position: absolute;
	//         bottom: 85px;
	//         left: 0;
	//         right: 0;
	//         background-color:#fff;
	//     }
	//     .det-input{
	//         float: left;
	//         width: 70%;
	//
	//     }
	//     .det-input input{
	//         display: block;
	//         width: 90%;
	//         padding-left: 5%;
	//         margin: 10px auto;
	//         height: 30px;
	//         line-height: 30px;
	//         border: 1px solid #666;
	//         border-radius: 5px;
	//         outline: none;
	//     }
	//     .det-discuss{
	//         float: left;
	//         width: 30%;
	//     }
	//     .det-discuss div{
	//         width: 50%;
	//         float: left;
	//         text-align: center;
	//     }
	//     .det-discuss span {
	//         display: block;
	//         height: 25px;
	//         line-height: 25px;
	//     }
	//     .det-discuss span.det-icon {
	//         margin: 0;
	//     }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"det-container\">\n    <div class=\"det-header\">\n        <span class=\"det-icon det-head-left\" @click=\"goNews()\">&lt;</span >\n        <span class=\"det-icon det-head-right\">&epsilon;</span>\n    </div>\n    <div class=\"det-main\">\n        <h2 class=\"det-title\">\n            这里是标题这里是标题这里是标题fg\n        </h2>\n        <article class=\"det-article\">\n            <p>\n                啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将afg阿什来得及阿散井的理解啊速度dsf啊数量单价阿斯顿\n            </p>\n            <p>\n                啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿\n            </p>\n            <p>\n                啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿结束了\n            </p>\n        </article>\n\n    </div>\n    <div class=\"det-foot\">\n        <div class=\"det-input\">\n            <input type=\"text\" placeholder=\"写评论...\" v-model=\"newTodo\" v-on:keyup.enter=\"addTodo()\">\n        </div>\n        <div class=\"det-discuss\">\n            <div @click=\"this.$route.router.go({name:'newsDiscuss'});\">\n                <span>{{ todos.length }}</span>\n                <span class=\"det-icon\">评</span>\n            </div>\n            <div @click=\"laud++\">\n                <span>{{ laud }}</span>\n                <span class=\"det-icon\">赞</span>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(38)
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\newsDiscuss.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\桌面\\Vue-demo\\src\\components\\newsDiscuss.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(40)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsDiscuss.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsDiscuss.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".det-foot {\n  position: fixed;\n  bottom: 0; }\n\n.weui_media_box.weui_media_appmsg .weui_media_bd {\n  overflow: hidden; }\n\n.det-list .weui_media_desc {\n  -webkit-line-clamp: 3;\n  color: #333; }\n\n.det-list .weui_media_box.weui_media_appmsg {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  -ms-grid-row-align: flex-start;\n      align-items: flex-start;\n  position: relative; }\n\n.det-list .det-list-time {\n  font-size: 13px;\n  color: #CECECE;\n  line-height: 1em;\n  list-style: none;\n  position: absolute;\n  right: 10px;\n  bottom: 10px; }\n", "", {"version":3,"sources":["/./src/components/newsDiscuss.vue"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,UAAU,EAAE;;AAEd;EACE,iBAAiB,EAAE;;AAErB;EACE,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;EACE,8BAA8B;EAC9B,gCAAgC;EAChC,2BAA2B;EAC3B,+BAAwB;MAAxB,wBAAwB;EACxB,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa,EAAE","file":"newsDiscuss.vue","sourcesContent":[".det-foot {\n  position: fixed;\n  bottom: 0; }\n\n.weui_media_box.weui_media_appmsg .weui_media_bd {\n  overflow: hidden; }\n\n.det-list .weui_media_desc {\n  -webkit-line-clamp: 3;\n  color: #333; }\n\n.det-list .weui_media_box.weui_media_appmsg {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  position: relative; }\n\n.det-list .det-list-time {\n  font-size: 13px;\n  color: #CECECE;\n  line-height: 1em;\n  list-style: none;\n  position: absolute;\n  right: 10px;\n  bottom: 10px; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(42);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            newTodo: "",
	            todos: []
	        };
	    },
	
	    methods: {
	        addTodo: function addTodo() {
	            var text = this.newTodo.trim();
	            if (text) {
	                this.todos.push({ text: text, date: new Date().toLocaleString() });
	                localStorage.setItem("loaclTodo", (0, _stringify2.default)(this.todos));
	            }
	        }
	    },
	    ready: function ready() {
	        this.todos = this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")));
	    }
	};
	// </script>
	//
	// <template>
	//         <div class="det-list">
	//
	//             <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg" v-for="todo in todos">
	//                 <div class="weui_media_hd">
	//                     <img class="weui_media_appmsg_thumb" src="../assets/img/tea.png" alt="">
	//                 </div>
	//                 <div class="weui_media_bd">
	//                     <p class="weui_media_desc">{{todo.text}}</p>
	//                     <div class="det-list-time">{{todo.date}}</div>
	//                 </div>
	//             </a>
	//         </div>
	//         <div class="det-foot">
	//             <div class="det-input">
	//                 <input type="text" placeholder="写评论..." v-model="newTodo" v-on:keyup.enter="addTodo">
	//             </div>
	//             <div class="det-discuss">
	//                 <div>
	//                     <span>{{ todos.length}}</span>
	//                     <span class="det-icon">评</span>
	//                 </div>
	//                 <div>
	//                     <span>0</span>
	//                     <span class="det-icon">赞</span>
	//                 </div>
	//             </div>
	//         </div>
	// </template>
	//
	// <style lang="sass">
	// .det-foot{
	//     position: fixed;
	//     bottom:0;
	// }
	// .weui_media_box.weui_media_appmsg .weui_media_bd {
	//     overflow:hidden;
	// }
	// .det-list{
	//     .weui_media_desc{
	//         -webkit-line-clamp: 3;
	//         color:#333;
	//     }
	//     .weui_media_box.weui_media_appmsg{
	//         -webkit-box-align: flex-start;
	//         -webkit-align-items: flex-start;
	//         -ms-flex-align: flex-start;
	//         align-items: flex-start;
	//         position:relative;
	//     }
	//     .det-list-time{
	//         font-size: 13px;
	//         color: #CECECE;
	//         line-height: 1em;
	//         list-style: none;
	//         position:absolute;
	//         right:10px;
	//         bottom:10px;
	//     }
	// }
	//
	// </style>

	/* generated by vue-loader */

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(44);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"det-list\">\n\n    <a href=\"javascript:void(0);\" class=\"weui_media_box weui_media_appmsg\" v-for=\"todo in todos\">\n        <div class=\"weui_media_hd\">\n            <img class=\"weui_media_appmsg_thumb\" src=\"" + __webpack_require__(46) + "\" alt=\"\">\n        </div>\n        <div class=\"weui_media_bd\">\n            <p class=\"weui_media_desc\">{{todo.text}}</p>\n            <div class=\"det-list-time\">{{todo.date}}</div>\n        </div>\n    </a>\n</div>\n<div class=\"det-foot\">\n    <div class=\"det-input\">\n        <input type=\"text\" placeholder=\"写评论...\" v-model=\"newTodo\" v-on:keyup.enter=\"addTodo\">\n    </div>\n    <div class=\"det-discuss\">\n        <div>\n            <span>{{ todos.length}}</span>\n            <span class=\"det-icon\">评</span>\n        </div>\n        <div>\n            <span>0</span>\n            <span class=\"det-icon\">赞</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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Af76+v35+fkCAgQDAgMEAQL+/voAAP3+/QMBAP4AAwb/AQH/AP4AAAAB/gECBQIABQYAAP8BAQAEAAH9AP////7//f4BAQEB/v/+/v4BAAEBAQAAAAABAQEBAf/+/gEAAQP8APz+/v4CAgAB//7//wH///8CAQL+AgEAAAAAAAD///8AAAABAQABAQMAAAABAAH+/wAABQUEBQUCBvsE+vsJ+/z8CAUK+Pz4/v76+/72Afz0Afr9+v8A/wL//wQBAP4BAQEB/v3//AD8Av0CAQUCAgIB////AgMCAgQBAAEBAQAAAP4A/wACAAIAAQEAAAD///8BAAD///8CAgIAAAD///8CAAH9//sBAgIBAAD///8BAQEAAAD///8CAQH///////////////3///8AAAD////9/wEBAAMBAf8AAAEAAf7////////+AQD+AP8A/QD+/QL9/f4AAf4DAgIDAQoEBgkIBwwEAQT8/gAE/v4EBggCAwX7/gL3+f35+//1AfEDAv0B+/8B/gEAAQEEAwQHBAP+AQABAQL///8A/f79/f7+/v7+/gICAwD+/vz+AQMBAQH/////AP3///8BAAAAAAD+/v3////9AAD+AQH+AP8AAAD///36+/vx9fTy9/P19vP6+fr+AQHz9fPy7fH29fX6+vr79Pr7+Pvu6/ID//wD/QMD/wAGCQgPCAz4DBP5+vv3/v8B9fn+9/v3/f3+9/348vwDBP79/f/7+v76+f/39v/5+Pr9/QD8+wD//QEDBAECBf4JBQAIDAQMEAgPEAgODggJCgoEAQL+AP///P/39fj09/b6+vkCAQQEAAMKCwcRFREFEAb88v0CAgACAgECAf0BAgUAAf3+/P76AAL7AP0C9wD+AQEBAQABAv8AAwEBAf8CAv3/AP8A/wIA//8CAv7+/v4B/QED//sEBAsNCgsNDQ34+Pnx9PIG+wD9B/39Cv8HBvgH9QEE9gH5/Pv48vz//QD//PL29PcHBAMGBQX+/wEC/fwKCwMLEgz+/v4MDAoRDhEREBMPEhEDAwP7+Pfy8PH39PXz8/MA8gAABPz9A/0A/QP7/v39+QL//P0CAAECAgICAQT//wAEA/4HBwgLCgYEBQIBAvz6/fn7/fwBAQMBAwQCBAgE/wAA/P39AgAA/QIAAAD9/v8AAf7/AQEBAP/+////Af7/Av8A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AgMMAv7//Pv6Afv/AP7+AP3+/wL/AAIBAAMAAQD/Av//AP4BAP7/APz//v/+AvwCAAEB/gMB/wED/wAA/wgHCAsJCgkKBP////38/f/+/QMDAgUFAAQFAwUEAwcGBAIFAwsKCA8KCgkFCgH/Avb6+fL4+/37+wUFBAcJCAsGCgsHCAMJBgQBA/r7+/f49vf28vf58vb39Pf4+P/9/f///P7+/AUCAQQCBPwA/f0CAP8CAgQBA//+AQQFAwUDAwcHAwMFAQIDABQRDhMRFAcJCwIDBAMwMTIBAgEBAQECAwP///7+/wAA////AQD//v7+/v79/v///v79/v37+vn5+Pr5+Pf2+PL19/P2+vf9//z9//oA/gMDAwT/AgMFBQcBAwL///z9/fv7+vz7/f0B/wAB/wIA/wAAAAD9AP7+/gD5+gD7/foEAvwKBQAHCQkGCw0DAgf//AH/AP7///8BAf0AAf8CAQQBAAP+/v3+/v3/AP4DAwQEBAQBAQD+//39/vsA/v4CBAMCAgQAAAEBAP4A//7//fwB/v8DAQECAgMAAgL///////8AAAAB//8CAQAAAP/////+/vwAAAEAAAD///4A//8AAP7////+////AAAAAQACAgL/AQMBAQMAAQAAAAAA/////v/+//4AAP8AAAEAAAAAAAD///////8BAQH9AP3/Af/+AP7/AAEA//////8BAAACAQD8AAACAAEDAgEDAwMEBQMGBQYJBwULBQMEAwIFBQEFAgEFA/4BAfwBAP4AAAD/AAEBAQEBAQH/AAACAgMDAgIBAQEBAQEBAAD/AAH//wD///8A//////////8BAQIAAAEAAQAAAAD//wH///4AAAAAAAD///8AAP///f7/AP///v7+///9/v7+/v7+/v7///8A/v8BAQEAAQICAgEBAAEAAf8AAgECBAP//gICAgUEBgoKDBEMEBIMEA4KCwsJBwkFCAsIBgYFBQQCBAP//v7//f7//f7+AP4CAf8DBQIGCAQJDAgMDAoLCgoJCwgJBwYDAgICAwL//wD+/v37/fv+/f3///4A//8AAQEAAAAAAAAAAAIAAAEAAAH//wD+//7+/v///wAA/wD/AP8CBAIGAwMDAwIA/v4CAf8EBf4DAgAC/v/9+/bv9+vw8Of/9/cDBv8C/v/59/z5+vv7/f4A/wEA/v0BAP0C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AAME/wH+Af//AQD/AP/+/f78AP8AAAEAAQEB/v8AAP7+/gH/AAL//v4DAf/9Af/+/wD+AAABAf8BAf8AAAH+AQAB//4AAAEAAQEBAQECAQICAgEA//////7+/////v3+AQAAAAEAAAABAQEBAAAA//////////79//79/v37//v7Af8AAAAAAAD/AAAAAQACAf8B//4B/v/+/wD////9AQACAgMFAAMFAQICAQECAQD+BAECCQYFCAYHCgUDBQMABAL/AQD8AAD9/wD/AQAA//8AAQEAAQECAQEB//4AAAAAAAEBAQEB/v7+AAACAAEAAAAAAQACAAAA/wD+////AAAA/////v//+/7+//79/v7+//3+A/8BAQABAAQAAgIBAf7/+fn17/Tu9/r3BAUF/v///wD+AwQCAwIEA/4DBQMGAgMDAQH8/v8A/P39/P77/f37//3+//z+///+AAAA/f3+/wD//v7+AgIBAwMDBQUFAgIC/gD//f/89/j79vf3+fn4/v78+/z9/wAC///+AAAAAAEBAgEBAQEBAgIC////AAAAAAAAAAAAAQEBAQH/AQEAAQEBAQEAAAH//v7+/wMC//39/P/8AQIABgX+AAD7//79AwYEBAYE+/79/P7/9vb6+vj6AP8B/gAA/vz/+vv+Af4A//79BQMBBAMACgsJAAIE/f77AwgDBQkGCwsHBgYFBwgFBQQDBAEACQoHBgoKBAYD//3++v0B/wEAAgH++v3+9vf4+vb5+Pb79/T5+fn8//78AgQCCgwLGQsPCgoMAwQKBAMHAQMA9/z4+Pv+BwgMCg0QBwoMCQkNBgcKBggKAwgKAgQHBgQJAwMHAQH9AwMEDxAOGhcXGhgXFBITFxUXHBocEBIMBwsBAQX+AgEBAv37//sA/fr/+fn7AP0D+fr8+vv9+/3+/v8A/Pz8+v78/QD/Af/+/vz9AAEBBQUFAgMF+v368/Pz9Pb0//0C+/8A+f37AP//AgEABgcFCQkIDgYJBggGERQNEQ4IChAFBQsEAAT/AgoDCg4IEhQPERIRExISEA8ODhEQEAoPCgYIBAcFBgQG/v7+/P//9/f3+/n5CAgDAwUCAwYHBPr//QD/AAH/AP/7//8A/wICAP/+/P/+/QH+/v//Af39///7/QP/Af/////+/P////7+/v/9AAAAAgICAgMEAf7+/Pv8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"

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map