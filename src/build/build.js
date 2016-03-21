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
	
	var _details = __webpack_require__(49);
	
	var _details2 = _interopRequireDefault(_details);
	
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
		}
	});
	
	router.redirect({
		'*': '/home'
	});
	
	router.start(App, '#app');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.17
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
	 * Define a non-enumerable property
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
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
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
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
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
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
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
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
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
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    if (process.env.NODE_ENV !== 'production') {
	      this._runtimeData = options.data;
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
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
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
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
	  if (devtools) {
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
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
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
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
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
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
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
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
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
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
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
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
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
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
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
	
	var tagRE$1 = /<([\w:]+)/;
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
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
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
	    defineReactive(scope, alias, value);
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
	        this.elseFactory = new FragmentFactory(next._context || this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
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
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
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
	      return key !== 'stop' && key !== 'prevent';
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
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
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
	        initProp(vm, prop, getDefault(vm, options));
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
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
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
	      value.split(/\s+/).forEach(function (cls) {
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
	
	function scanSlots(template, content, vm) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = {};
	  var slots = template.querySelectorAll('slot');
	  if (slots.length) {
	    var hasDefault, slot, name;
	    for (var i = 0, l = slots.length; i < l; i++) {
	      slot = slots[i];
	      /* eslint-disable no-cond-assign */
	      if (name = slot.getAttribute('name')) {
	        select(slot, name);
	      } else if (process.env.NODE_ENV !== 'production' && (name = getBindAttr(slot, 'name'))) {
	        warn('<slot :name="' + name + '">: slot names cannot be dynamic.');
	      } else {
	        // default slot
	        hasDefault = true;
	      }
	      /* eslint-enable no-cond-assign */
	    }
	    if (hasDefault) {
	      contents['default'] = extractFragment(content.childNodes, content);
	    }
	  }
	
	  function select(slot, name) {
	    // named slot
	    var selector = '[slot="' + name + '"]';
	    var nodes = content.querySelectorAll(selector);
	    if (nodes.length) {
	      contents[name] = extractFragment(nodes, content);
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (node.parentNode === parent) {
	      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	        parent.removeChild(node);
	        node = parseTemplate(node);
	      }
	      frag.appendChild(node);
	    }
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude,
		scanSlots: scanSlots
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
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    var runtimeData;
	    if (process.env.NODE_ENV !== 'production') {
	      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
	      this._runtimeData = null;
	    }
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
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
	
	    // scan for slot distribution before compiling the content
	    // so that it's decoupeld from slot/directive compilation order
	    scanSlots(el, options._content, this);
	
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
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
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
	
	Vue.version = '1.0.17';
	
	// devtools global hook
	/* istanbul ignore next */
	if (devtools) {
	  devtools.emit('init', Vue);
	} else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
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
	  console.warn("[vue-loader] src/components/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/simgyun/Desktop/Vue/src/components/home.vue"
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
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
	exports.push([module.id, "\n#shouye {\n    background-color: #E0E0E0;\n    padding-bottom: 60px;\n}\n#shouye .weui_navbar_item {\n    padding: 5px 0;\n}\n.nav-icon{\n    width: 20px;\n    height: 20px;\n}\n.main-navbar span{\n    font-size: 10px;\n}\n.search-bar{\n    background-color: rgb(9,204,123);\n}\n.search-bar div , .search-input div{\n    display: inline-block;\n}\n.search-list{\n    margin: 10px 30px 10px 20px;\n}\n\n.search-input img {\n    width: 15px;\n    height: 15px;\n    padding:5px 5px 0 5px;\n}\n.search-input {\n    background-color: rgb(4,188,111);\n    width: 250px;\n}\n::-webkit-input-placeholder {\n    color:#F1EDED;\n}\n.show span{\n    display: block;\n    border-radius: 50%;   \n    width: 15px;\n    height: 15px;\n    float: left;\n    margin:4px;\n    z-index: 2;\n}\n.show img{\n    width: 100%;\n    height: 200px;\n}\n.show-icon {\n    /*margin-top: -30px;*/\n    position: relative;\n    width: 75px;\n    margin: -30px auto 0 auto;\n}\n.active{\n    background-color: #F7F7F7;\n}\n.positive{\n    background-color: rgba(255,255,255,.5);\n}\n.cate-grid.weui_grid_icon{\n    width: 60px;\n    height: 60px;\n}\n.cate-grid img {\n    border-radius: 50%;\n}\n.no-pd-btm.weui_grid{\n    padding-bottom: 0;\n}\n.no-pd-btm p {\n    color:#6D6B6B;\n}\n.m-t-sm {\n    margin-top: 9px;\n}\n.m-r-xm {\n    margin-right: 5px;\n}\n.pd-r-sm {\n    padding-right: 10px;\n}\n.pd-r-ssm {\n    padding-right: 5px;\n}\n.pd-l-sm {\n    padding-left: 5px;\n}\n.bgc-white {\n    background-color: white;\n}\n.sale-p{\n    margin:5px;\n}\n.cnt-area{\n    line-height: 30px;\n}\n.cnt-area span {\n    font-size: 18px;\n}\n.cnt {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    color:white;\n}\n.sale-img img {\n    width: 100%;\n    height: auto;\n}\n.sale-info {\n    background-color: #F7F6F6;\n    margin: 10px 5px 10px 10px;\n    width: 45%;\n    display: inline-block;\n}\n.sale-font {\n    font-size: 16px;\n}\n.dis-blk {\n    display: block;\n}\n.font-red {\n    color:red;\n}\n.font-l {\n    font-size: 18px;\n}\n.w-full {\n  width:100%;\n}\n.danger-text {\n  color:red;\n}\n", "", {"version":3,"sources":["/./src/components/home.vue?2cd0ac66"],"names":[],"mappings":";AAuQA;IACA,0BAAA;IACA,qBAAA;CACA;AACA;IACA,eAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,iCAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,4BAAA;CACA;;AAEA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;CACA;AACA;IACA,iCAAA;IACA,aAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,eAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,YAAA;IACA,WAAA;IACA,WAAA;CACA;AACA;IACA,YAAA;IACA,cAAA;CACA;AACA;IACA,sBAAA;IACA,mBAAA;IACA,YAAA;IACA,0BAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,uCAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;CACA;AACA;IACA,mBAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,oBAAA;CACA;AACA;IACA,mBAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,wBAAA;CACA;AACA;IACA,WAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,sBAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,YAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;CACA;AACA;IACA,0BAAA;IACA,2BAAA;IACA,WAAA;IACA,sBAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,eAAA;CACA;AACA;IACA,UAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,UAAA;CACA","file":"home.vue","sourcesContent":["<template >\n<div id=\"shouye\">\n<!--顶部搜索-->\n<div class=\"search-bar\">\n    <div class=\"search-list\">\n      <img src=\"../assets/img/List.png\" class=\"nav-icon\">\n    </div>\n    <div class=\"search-input\">\n        <div class=\"search-img\">\n            <img src=\"../assets/img/search01.png\">\n        </div>\n        <div>\n            <input class=\"weui_input\" type=\"search\" placeholder=\"请输入商品\"/>\n        </div>\n        <div class=\"clear-both\"></div>\n    </div>\n</div>\n<!--图片轮播-->\n<div class=\"show\">\n    <div>\n        <img :src=\"slideUrl\">\n    </div>\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\n            <div class=\"clear-both\"></div>\n        </div>\n    </div>       \n</div>\n<!--小分类-->\n<div class=\"weui_grids m-t-sm bgc-white w-full\">\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"../assets/img/show02.jpg\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            汤料组合\n        </p>\n    </a>\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"../assets/img/show01.jpeg\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            家庭常用\n        </p>\n    </a>\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"../assets/img/show03.jpeg\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            办公常用\n        </p>\n    </a>\n</div>\n<!--特约专场-->\n<div class=\"weui_cells sale\" >\n    <div class=\"weui_cell\">\n        <div class=\"weui_cell_bd weui_cell_primary\">\n            <p class=\"sale-p\">特价专场</p>\n        </div>\n        <div class=\"weui_cell_ft\">\n            <div class=\"cnt-area\" v-show=\"showCntDown\">\n                <span class=\"pd-r-sm\">距离结束还有</span>\n                <span class=\"cnt text-center m-r-xm\">{{currentHours}}</span>:\n                <span class=\"cnt text-center m-r-xm\">{{currentMinutes}}</span>:\n                <span class=\"cnt text-center m-r-xm\">{{currentSeconds}}</span>\n            </div>\n            <div class=\"cnt-area danger-text\" v-else>已结束</div>\n        </div>\n    </div>\n</div>\n<!--特约专场缩略图-->\n<div class=\"sale-info\" v-for=\"sale in saleTab\" @click=\"goToDetails()\">\n    <div class=\"sale-img\">\n        <img :src=\"sale.url\">\n    </div>\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\n        <span class=\"sale-font-m \">{{sale.des}}</span>\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \n        <a href=\"#\" v-link=\"{path:'http://localhost:3000/#!/details'}\">测试</a>\n   </div>      \n</div>\n\n<!--热销推荐-->\n<div class=\"weui_cells sale\" >\n    <div class=\"weui_cell\">\n        <div class=\"weui_cell_bd weui_cell_primary\">\n            <p class=\"sale-p\">特约推荐</p>\n        </div>\n    </div>\n</div>\n<div class=\"sale-info\" v-for=\"sale in saleTab\">\n    <div class=\"sale-img\">\n        <img :src=\"sale.url\">\n    </div>\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\n        <span class=\"sale-font-m \">{{sale.des}}</span>\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \n   </div>      \n</div>\n\n</div>\n</template>\n\n<script>\n  export default {\n\n  data () {\n  \treturn {\n  \t\tshowImg:[\n            {\n              name:'高级汤料',\n              des:'你还不来买我吗！',\n              url:'../assets/img/health02.jpg'\n            },\n            {\n              name:'家用汤料',\n              des:　'你在我心中是最美',\n              url:'../assets/img/health01.jpg',\n            },\n            {\n              name:'养生花茶',\n              des:'拒绝春日绵绵好睡眠花茶250g',\n              url:'../assets/img/health03.png'\n            }\n      ],\n      saleTab:[\n            {\n              name:'宁夏枸杞',\n              des:'宁安堡中宁枸杞250g',\n              price:22.50,\n              url:'../assets/img/gouqi.png'\n            },\n            {\n              name:'忆江南',\n              des:'一级碧螺春礼盒250g',\n              price:29.6,\n              url: '../assets/img/tea.png'\n            }\n      ],\n        slideUrl:'',\n        currentIndex:0,\n        count:0,\n        circles:[],\n        currentHours:null,\n        currentMinutes:null,\n        currentSeconds:null,\n        cnt:0,\n        leftTime:null,\n        showCntDown:true\n  \t}\n  },\n  ready () {\n\n    this.slideUrl=this.showImg[this.currentIndex].url\n    let imgCnt=this.showImg.length\n    this.count=imgCnt\n    let fragmentHtml=\" \"\n    let parentNode=document.getElementById('spanCnt')\n\n    //动态添加幻灯片的小圆圈\n    for(let i=0;i<imgCnt;i++){\n      fragmentHtml+='<span>'+ '</span>'\n    }\n    parentNode.innerHTML=fragmentHtml\n    //设置小圆圈的状态\n    let spanNodes=parentNode.getElementsByTagName(\"span\")\n        this.circles=spanNodes\n        spanNodes[0].className='active'\n\n    for(let i=1;i<imgCnt;i++){\n       spanNodes[i].className='positive'\n    }\n    this.waitForNext()\n\n    //特卖场倒计时\n    let date = new Date()\n    let y=date.getFullYear()\n    let month=date.getMonth()\n    let day=date.getDate()\n    let h=date.getHours()\n    let endH=17\n\n      let nowTimeStamp=(date.getTime())/1000\n      let endDate = new Date(y,month,day,endH,0,0)\n      let endTimeStamp = (endDate.getTime())/1000\n      this.leftTime = endTimeStamp - nowTimeStamp\n      if(this.leftTime > 0){\n        this.showCountDown()\n      }else{\n        this.showCntDown=false\n      }\n    this.$watch('currentSeconds',function(){\n      if(this.leftTime <= 0) {\n        this.showCntDown=false\n      }\n    })\n  },\n  methods: {\n      waitForNext() {\n        setInterval(this.next,1000 * 3) \n      },\n      next() {\n        this.currentIndex+=1\n        if(this.currentIndex >= this.count){\n          this.currentIndex=0\n        }\n        this.handleImg(this.currentIndex)\n      },\n      handleImg(index) {\n        this.slideUrl=this.showImg[index].url\n        this.circles[index].className='active'\n        for(let i=0;i<this.count;i++){\n          if(i!==index){\n            this.circles[i].className='positive'\n          }\n        }\n      },\n      showCountDown() {\n          setInterval(this.countDown,1000)\n      },\n      countDown() {\n         let leftSeconds = this.leftTime\n         let leftMinutes = leftSeconds/60\n         let leftHour = Math.floor(leftSeconds/3600)\n         let minutes = Math.floor(leftMinutes - leftHour*60)\n         let seconds = Math.floor(leftSeconds - leftHour*3600 - minutes*60)\n         this.leftTime-=1\n         if(parseInt(leftHour)<10) {\n          leftHour='0'+leftHour\n          // parseInt(leftHour)\n         }\n         if(parseInt(minutes)<10){\n          minutes='0'+minutes\n          // parseInt(minutes)\n         }\n         if(parseInt(seconds)<10){\n          seconds='0'+seconds\n          // parseInt(seconds)\n         }\n         this.currentHours=leftHour\n         this.currentMinutes=minutes\n         this.currentSeconds=seconds\n    },\n    goToDetails(name,des,price) {\n\n        this.$route.router.go({name:'details'})\n    },\n},\n  computed: {\n    showWidth () {\n      return this.showImg.length*25\n    }\n  }\n}\n\n\n</script>\n\n<style>\n#shouye {\n    background-color: #E0E0E0;\n    padding-bottom: 60px;\n}\n#shouye .weui_navbar_item {\n    padding: 5px 0;\n}\n.nav-icon{\n    width: 20px;\n    height: 20px;\n}\n.main-navbar span{\n    font-size: 10px;\n}\n.search-bar{\n    background-color: rgb(9,204,123);\n}\n.search-bar div , .search-input div{\n    display: inline-block;\n}\n.search-list{\n    margin: 10px 30px 10px 20px;\n}\n\n.search-input img {\n    width: 15px;\n    height: 15px;\n    padding:5px 5px 0 5px;\n}\n.search-input {\n    background-color: rgb(4,188,111);\n    width: 250px;\n}\n::-webkit-input-placeholder {\n    color:#F1EDED;\n}\n.show span{\n    display: block;\n    border-radius: 50%;   \n    width: 15px;\n    height: 15px;\n    float: left;\n    margin:4px;\n    z-index: 2;\n}\n.show img{\n    width: 100%;\n    height: 200px;\n}\n.show-icon {\n    /*margin-top: -30px;*/\n    position: relative;\n    width: 75px;\n    margin: -30px auto 0 auto;\n}\n.active{\n    background-color: #F7F7F7;\n}\n.positive{\n    background-color: rgba(255,255,255,.5);\n}\n.cate-grid.weui_grid_icon{\n    width: 60px;\n    height: 60px;\n}\n.cate-grid img {\n    border-radius: 50%;\n}\n.no-pd-btm.weui_grid{\n    padding-bottom: 0;\n}\n.no-pd-btm p {\n    color:#6D6B6B;\n}\n.m-t-sm {\n    margin-top: 9px;\n}\n.m-r-xm {\n    margin-right: 5px;\n}\n.pd-r-sm {\n    padding-right: 10px;\n}\n.pd-r-ssm {\n    padding-right: 5px;\n}\n.pd-l-sm {\n    padding-left: 5px;\n}\n.bgc-white {\n    background-color: white;\n}\n.sale-p{\n    margin:5px;\n}\n.cnt-area{\n    line-height: 30px;\n}\n.cnt-area span {\n    font-size: 18px;\n}\n.cnt {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    color:white;\n}\n.sale-img img {\n    width: 100%;\n    height: auto;\n}\n.sale-info {\n    background-color: #F7F6F6;\n    margin: 10px 5px 10px 10px;\n    width: 45%;\n    display: inline-block;\n}\n.sale-font {\n    font-size: 16px;\n}\n.dis-blk {\n    display: block;\n}\n.font-red {\n    color:red;\n}\n.font-l {\n    font-size: 18px;\n}\n.w-full {\n  width:100%;\n}\n.danger-text {\n  color:red;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
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
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	// <div class="sale-info" v-for="sale in saleTab" @click="goToDetails()">
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
	// </div>
	// </template>
	//
	// <script>
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
	    goToDetails: function goToDetails(name, des, price) {
	
	      this.$route.router.go({ name: 'details' });
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"shouye\">\n<!--顶部搜索-->\n<div class=\"search-bar\">\n    <div class=\"search-list\">\n      <img src=\"" + __webpack_require__(12) + "\" class=\"nav-icon\">\n    </div>\n    <div class=\"search-input\">\n        <div class=\"search-img\">\n            <img src=\"" + __webpack_require__(13) + "\">\n        </div>\n        <div>\n            <input class=\"weui_input\" type=\"search\" placeholder=\"请输入商品\"/>\n        </div>\n        <div class=\"clear-both\"></div>\n    </div>\n</div>\n<!--图片轮播-->\n<div class=\"show\">\n    <div>\n        <img :src=\"slideUrl\">\n    </div>\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\n            <div class=\"clear-both\"></div>\n        </div>\n    </div>       \n</div>\n<!--小分类-->\n<div class=\"weui_grids m-t-sm bgc-white w-full\">\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"" + __webpack_require__(14) + "\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            汤料组合\n        </p>\n    </a>\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"" + __webpack_require__(15) + "\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            家庭常用\n        </p>\n    </a>\n    <a href=\"javascript:;\" class=\"weui_grid no-pd-btm \">\n        <div class=\"weui_grid_icon cate-grid\">\n            <img src=\"" + __webpack_require__(16) + "\" >\n        </div>\n        <p class=\"weui_grid_label\">\n            办公常用\n        </p>\n    </a>\n</div>\n<!--特约专场-->\n<div class=\"weui_cells sale\" >\n    <div class=\"weui_cell\">\n        <div class=\"weui_cell_bd weui_cell_primary\">\n            <p class=\"sale-p\">特价专场</p>\n        </div>\n        <div class=\"weui_cell_ft\">\n            <div class=\"cnt-area\" v-show=\"showCntDown\">\n                <span class=\"pd-r-sm\">距离结束还有</span>\n                <span class=\"cnt text-center m-r-xm\">{{currentHours}}</span>:\n                <span class=\"cnt text-center m-r-xm\">{{currentMinutes}}</span>:\n                <span class=\"cnt text-center m-r-xm\">{{currentSeconds}}</span>\n            </div>\n            <div class=\"cnt-area danger-text\" v-else>已结束</div>\n        </div>\n    </div>\n</div>\n<!--特约专场缩略图-->\n<div class=\"sale-info\" v-for=\"sale in saleTab\" @click=\"goToDetails()\">\n    <div class=\"sale-img\">\n        <img :src=\"sale.url\">\n    </div>\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\n        <span class=\"sale-font-m \">{{sale.des}}</span>\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \n        <a href=\"#\" v-link=\"{path:'http://localhost:3000/#!/details'}\">测试</a>\n   </div>      \n</div>\n\n<!--热销推荐-->\n<div class=\"weui_cells sale\" >\n    <div class=\"weui_cell\">\n        <div class=\"weui_cell_bd weui_cell_primary\">\n            <p class=\"sale-p\">特约推荐</p>\n        </div>\n    </div>\n</div>\n<div class=\"sale-info\" v-for=\"sale in saleTab\">\n    <div class=\"sale-img\">\n        <img :src=\"sale.url\">\n    </div>\n    <div class=\"sale-font pd-l-sm pd-r-ssm\">\n        <span class=\"sale-font-m pd-r-sm\">{{sale.name}}</span>\n        <span class=\"sale-font-m \">{{sale.des}}</span>\n        <span class=\"dis-blk font-red font-l\">¥{{sale.price}}</span> \n   </div>      \n</div>\n\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAB/0lEQVRYw+2Yu2sUURhHzzeriWirqXykEBXRIIqd2CmIiCkUlYBYqI2I2IiFgn+CGKt0Ij6q4KPRQoyNBIRIGiEieTWJBMGALgomx2J3Iax3FgLOJMWe8vvdyz1zmTuX+QBQT6gj6h91Sr2pVlgFhNoLDALRlN2NiOupSeo+4CLQVZDXAjAC3A91FOjJGbQ5Imab5LYDo8D6EjZwMAN25YQVYEeifrgkOYAjGTCRE5qTDVPb3TIYDvU88CARPo6IvqS5HgWuAusKlBsD7jQW7FNnrFFV+9UiF18+aqZ2qZ0r7dKmTZtlEAD1k3sW2APMAo+ar7gVE1Q3AUPA7iX1eaA3IoZSk9QAdgIbCnSbjIhvqA9NM62uTch1qq8snqp6BnW+xaCDCcHTJcg1mMmAxfLeqGWzmAEvc8Jp4GOi/gx4XoLcT+Ba45C8AfYuCb8DxyPifd5sdRuwsSC5BeBLRPxofGY6gFN1yRngSUTMlbBLbdq0+W+oFXWLq+1fpC53RZ2rXy+/1QG1rH/floR6CRhIZE8j4lzOA50ELgMdBbpNArdCHSPdQQDojoipJrkean2TMppLbzOgu8WArYna/pLkAA5kwKeccAH4nKi/A6olCb5eA9wGXvBv++1eRHxtnhERE+oh4ALFtj7GgX4A1GPqB/WXOq7eULOSdqklfwExJPTUZ/hB1wAAAABJRU5ErkJggg=="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADCElEQVRYw82Yy29VVRSHv31vwWJkQGhRfEUSQAhhRII8ggMDSXGiQjuAPwJCGFRGkIgBwgCiYzSNBI04MXFYJTEGYkK1iiNTSHh0BKQPSnm1fg66iCdyenrfZU32ffz22t9eZ529196JKkx9G+gC3gXWAMuBJcBDYBT4GxgE+oH+lNKDavxnLVUAUwJ2AweAzfHzFDAEDAMjQDuwFFgdLcAY8BVwMqV0o1bA2aA2qgPO2IT6pdqlvlTQZ7V6INPvkfqJ2t4IoKR+rD4Jx8fVjhr8bFd/C8DBSIWaocoRGdXf1bV1TrKcmeRddXMtTpJ6NqC+VxfVA5UTvXF1VF1fbedDGahyo6Ay/jep99WbFadGJPpUPL4XGw2VGWf308lXIi5Fkj6sN6cqhPsi4D6YS9gdwmPNhorxOiPXrqipSHhJvacurcJ/vXCfRjC2zyZYGYIzrYKKcd9Up9W+2QT7AqyrlWAx9kX1dt7jLAHbgCfAz60GA34COoBndoQSM1XC1ZTS5DyAXYn2mZWgBLwOXJ8HKICnVcereWCLgfF5ApuIdnEe2CPghXkCa4v2cR7YGP8Vd622zmhH8sCGyHkrWmSroh3KAxsAOtRVVblsjG0BpoE/88AuxOedrSRSFwA7gMsppbE8Qbs6og60GOzD2HEOFok+K9xQmwP2izqpvlwkeiNqsYFmVK454+2KQHxeifhoiHubDNWpDsfmPfcypS5S/4jTzHtNglqo/hgB6K6m45o4Yo2q25oAdT6gTtfi4J04Zk2qexoE1an2B1RfYTk9h6MN6q2Mo2V1QHVHTqmeiruQumf5Qzgcj2uCtyrsu0D9KM4SqnfUnv9ptqhHYqGtCXCX+lcM8I/6q3pC3atujehuUN9X96vfBIjqg1gjO3L8Hg7N+XrgSupO9Vy8HEU2rV5We9VXCnyW1W8zcG3Z/6tOwsiRdcyU5K8xczcmcAe4BgymlEYq9FUGvgZ6gO+APSmlqZqi12hT24oi99zBPRd0KaUpdW987QEe17bQNcniMfYBK/4Ff7NRtAQC82kAAAAASUVORK5CYII="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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AABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANBAAAABgAAAAAAAAAAAAAAeAAAAHgAAAAGAHMAaABvAHcAMAAyAAAAAQAAAAAAAAAAAAAA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bnRJRD0iQjYyNDZBMjQ4NDEyQjhGNDA2M0RGQTExMzg2REJFNjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkY3RjExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQjYyNDZBMjQ4NDEyQjhGNDA2M0RGQTExMzg2REJFNjMiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGN0YxMTc0MDcyMDY4MTE4MjJBOUI5NkVFQUEzQ0EzIiBzdEV2dDp3aGVuPSIyMDE2LTAzLTE3VDE2OjA3OjIzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwM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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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AAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANLAAAABgAAAAAAAAAAAAAAeAAAAHgAAAALAHMAaABvAHcAMAAxAC4AagBwAGUAZwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAeAAAAHgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAHgAAAAAUmdodGxvbmcAAAB4AAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAB4AAAAAFJnaHRsb25nAAAAeAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JU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OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iNEY4REFBQUQwNEM5MDk1QTE0NDQyNDA1NUNEMUMyNjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA4MDExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNEY4REFBQUQwNEM5MDk1QTE0NDQyNDA1NUNEMUMyNjEiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDMtMTdUMTY6MDI6NTkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE2LTAzLTE3VDE2OjA3OjM4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE2LTAzLTE3VDE2OjA3OjM4KzA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDA4MDExNzQwNzIwNjgxMTgyMkE5Qjk2RUVBQTNDQTMiIHN0RXZ0OndoZW49IjIwMTYtMDMtMTdUMTY6MDc6MzgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAB4AHgDAREAAhEBAxEB/90ABAAP/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkKGBkmNkUaJ2R0VTfyo7PDKCnT4/OElKS0xNTk9GV1hZWltcXV5fVGVmZ2hpamtsbW5vZHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp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"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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b29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANLAAAABgAAAAAAAAAAAAAAeAAAAHgAAAALAHMAaABvAHcAMAAzAC4AagBwAGUAZwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAeAAAAHgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAHgAAAAAUmdodGxvbmcAAAB4AAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAB4AAAAAFJnaHRsb25nAAAAeAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JUeXBlZW51bQAAABFFU2xpY2VCR0NvbG9yVHlwZQAAAABOb25lAAAACXRvcE91dHNldGxvbmcAAAAAAAAACmxlZnRPdXRzZXRsb25nAAAAAAAAAAxib3R0b21PdXRzZXRsb25nAAAAAAAAAAtyaWdodE91dHNldGxvbmcAAAAAADhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EEQAAAAAAAQEAOEJJTQQUAAAAAAAEAAAAAjhCSU0EDAAAAAAY8AAAAAEAAAB4AAAAeAAAAWgAAKjAAAAY1AAYAAH/2P/iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAAAAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQAAALEAAAAiHZ1ZWQAAANMAAAAhnZpZXcAAAPUAAAAJGx1bWkAAAP4AAAAFG1lYXMAAAQMAAAAJHRlY2gAAAQwAAAADHJUUkMAAAQ8AAAIDGdUUkMAAAQ8AAAIDGJUUkMAAAQ8AAAIDHRleHQAAAAAQ29weXJpZ2h0IChjKSAxOTk4IEhld2xldHQtUGFja2FyZCBDb21wYW55AABkZXNjAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPZGVzYwAAAAAAAAAWSUVDIGh0dHA6Ly93d3cuaWVjLmNoAAAAAAAAAAAAAAAWSUVDIGh0dHA6Ly93d3cuaWVjLmNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRlc2MAAAAAAAAALklFQyA2MTk2Ni0yLjEgRGVmYXVsdCBSR0IgY29sb3VyIHNwYWNlIC0gc1JHQgAAAAAAAAAAAAAALklFQyA2MTk2Ni0yLjEgRGVmYXVsdCBSR0IgY29sb3VyIHNwYWNlIC0gc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAACxSZWZlcmVuY2UgVmlld2luZyBDb25kaXRpb24gaW4gSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdmlldwAAAAAAE6T+ABRfLgAQzxQAA+3MAAQTCwADXJ4AAAABWFlaIAAAAAAATAlWAFAAAABXH+dtZWFzAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAACjwAAAAJzaWcgAAAAAENSVCBjdXJ2AAAAAAAABAAAAAAFAAoADwAUABkAHgAjACgALQAyADcAOwBAAEUASgBPAFQAWQBeAGMAaABtAHIAdwB8AIEAhgCLAJAAlQCaAJ8ApACpAK4AsgC3ALwAwQDGAMsA0ADVANsA4ADlAOsA8AD2APsBAQEHAQ0BEwEZAR8BJQErATIBOAE+AUUBTAFSAVkBYAFnAW4BdQF8AYMBiwGSAZoBoQGpAbEBuQHBAckB0QHZAeEB6QHyAfoCAwIMAhQCHQImAi8COAJBAksCVAJdAmcCcQJ6AoQCjgKYAqICrAK2AsECywLVAuAC6wL1AwADCwMWAyEDLQM4A0MDTwNaA2YDcgN+A4oDlgOiA64DugPHA9MD4APsA/kEBgQTBCAELQQ7BEgEVQRjBHEEfgSMBJoEqAS2BMQE0wThBPAE/gUNBRwFKwU6BUkFWAVnBXcFhgWWBaYFtQXFBdUF5QX2BgYGFgYnBjcGSAZZBmoGewaMBp0GrwbABtEG4wb1BwcHGQcrBz0HTwdhB3QHhgeZB6wHvwfSB+UH+AgLCB8IMghGCFoIbgiCCJYIqgi+CNII5wj7CRAJJQk6CU8JZAl5CY8JpAm6Cc8J5Qn7ChEKJwo9ClQKagqBCpgKrgrFCtwK8wsLCyILOQtRC2kLgAuYC7ALyAvhC/kMEgwqDEMMXAx1DI4MpwzADNkM8w0NDSYNQA1aDXQNjg2pDcMN3g34DhMOLg5JDmQOfw6bDrYO0g7uDwkPJQ9BD14Peg+WD7MPzw/sEAkQJhBDEGEQfhCbELkQ1xD1ERMRMRFPEW0RjBGqEckR6BIHEiYSRRJkEoQSoxLDEuMTAxMjE0MTYxODE6QTxRPlFAYUJxRJFGoUixStFM4U8BUSFTQVVhV4FZsVvRXgFgMWJhZJFmwWjxayFtYW+hcdF0EXZReJF64X0hf3GBsYQBhlGIoYrxjVGPoZIBlFGWsZkRm3Gd0aBBoqGlEadxqeGsUa7BsUGzsbYxuKG7Ib2hwCHCocUhx7HKMczBz1HR4dRx1wHZkdwx3sHhYeQB5qHpQevh7pHxMfPh9pH5Qfvx/qIBUgQSBsIJggxCDwIRwhSCF1IaEhziH7IiciVSKCIq8i3SMKIzgjZiOUI8Ij8CQfJE0kfCSrJNolCSU4JWgllyXHJfcmJyZXJocmtyboJxgnSSd6J6sn3CgNKD8ocSiiKNQpBik4KWspnSnQKgIqNSpoKpsqzysCKzYraSudK9EsBSw5LG4soizXLQwtQS12Last4S4WLkwugi63Lu4vJC9aL5Evxy/+MDUwbDCkMNsxEjFKMYIxujHyMioyYzKbMtQzDTNGM38zuDPxNCs0ZTSeNNg1EzVNNYc1wjX9Njc2cjauNuk3JDdgN5w31zgUOFA4jDjIOQU5Qjl/Obw5+To2OnQ6sjrvOy07azuqO+g8JzxlPKQ84z0iPWE9oT3gPiA+YD6gPuA/IT9hP6I/4kAjQGRApkDnQSlBakGsQe5CMEJyQrVC90M6Q31DwEQDREdEikTORRJFVUWaRd5GIkZnRqtG8Ec1R3tHwEgFSEtIkUjXSR1JY0mpSfBKN0p9SsRLDEtTS5pL4kwqTHJMuk0CTUpNk03cTiVObk63TwBPSU+TT91QJ1BxULtRBlFQUZtR5lIxUnxSx1MTU19TqlP2VEJUj1TbVShVdVXCVg9WXFapVvdXRFeSV+BYL1h9WMtZGllpWbhaB1pWWqZa9VtFW5Vb5Vw1XIZc1l0nXXhdyV4aXmxevV8PX2Ffs2AFYFdgqmD8YU9homH1YklinGLwY0Njl2PrZEBklGTpZT1lkmXnZj1mkmboZz1nk2fpaD9olmjsaUNpmmnxakhqn2r3a09rp2v/bFdsr20IbWBtuW4SbmtuxG8eb3hv0XArcIZw4HE6cZVx8HJLcqZzAXNdc7h0FHRwdMx1KHWFdeF2Pnabdvh3VnezeBF4bnjMeSp5iXnnekZ6pXsEe2N7wnwhfIF84X1BfaF+AX5ifsJ/I3+Ef+WAR4CogQqBa4HNgjCCkoL0g1eDuoQdhICE44VHhauGDoZyhteHO4efiASIaYjOiTOJmYn+imSKyoswi5aL/IxjjMqNMY2Yjf+OZo7OjzaPnpAGkG6Q1pE/kaiSEZJ6kuOTTZO2lCCUipT0lV+VyZY0lp+XCpd1l+CYTJi4mSSZkJn8mmia1ZtCm6+cHJyJnPedZJ3SnkCerp8dn4uf+qBpoNihR6G2oiailqMGo3aj5qRWpMelOKWpphqmi6b9p26n4KhSqMSpN6mpqhyqj6sCq3Wr6axcrNCtRK24ri2uoa8Wr4uwALB1sOqxYLHWskuywrM4s660JbSctRO1irYBtnm28Ldot+C4WbjRuUq5wro7urW7LrunvCG8m70VvY++Cr6Evv+/er/1wHDA7MFnwePCX8Lbw1jD1MRRxM7FS8XIxkbGw8dBx7/IPci8yTrJuco4yrfLNsu2zDXMtc01zbXONs62zzfPuNA50LrRPNG+0j/SwdNE08bUSdTL1U7V0dZV1tjXXNfg2GTY6Nls2fHadtr724DcBdyK3RDdlt4c3qLfKd+v4DbgveFE4cziU+Lb42Pj6+Rz5PzlhOYN5pbnH+ep6DLovOlG6dDqW+rl63Dr++yG7RHtnO4o7rTvQO/M8Fjw5fFy8f/yjPMZ86f0NPTC9VD13vZt9vv3ivgZ+Kj5OPnH+lf65/t3/Af8mP0p/br+S/7c/23////tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAeAB4AwEiAAIRAQMRAf/dAAQACP/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A5ktkKEQUcBMWLKEmnbBrUVrJTsYjsZATZSQWDa4UtiIGp9qiJQxYxFaxOxqKGhMJSxFakGIjQE+1NtBYBqW1EhMQUljCFEhTUXJhUGJCSeEkr0U//9DnjoVJpCi8GUmgrIabYYwIoACFXICKOFHJBZQEoSAUw2U0oU0IgUQ1TATCFMmog1UGojUEFUJFqkmlJYUThqokIpCaEwqRgJKUJJqX/9HEc0Ep2ViUNpJOqM0wsYtLZIGBTDdFsfVvo+H1Ku6zJ3xQR9A6EHtCvZOB0THeGtFQEf4Wqx5/8+oGEuESJAie5AQdBZNPNAKYW3twfzG4ceJod/36UxdQ36IxD8KT/cmEjuPoY/8AfLPcj3/GH/fOOCFMLU9Sr/R4n/bX/mKmyygmDVifE1n+DVHxDx/5v/fJ4x/Iw/79zGhSAWvOHGteD/mPB/6lCdbif9x8U+YD/wCCOnf/AKP/AHyjId/xj/3zm9lE8rZx6+k5DvTfUwPdo30/VZr/AFnPcqfVunnp2QKnuEWN3sgz7T/KO1OOMiHGCDG6PCbordxYNi60aY1ShMHDsZ+CkNVGQhiQkpQkmUniFP8A/9LF9OCptajuqUdkLEto29V9RcjFoqz25NrKmuLDLyG9u25aOZ0uvqQbbhZVD2j87d/30LA+qbca/NvwMpjbGZNU1h4BG9mvt3fyVg5GKcXMuxntAfVY5hEAGOWKQZYSgMU4WALsGv0m7h5bHnw+okGNjZ7b/mrlHnIoH+cURv1UMe7JqPjE/wAV5/Q+4WEBzmx4Eha2O7INYJtedNJcVFOXLw3xk/4clY/h2GRoE/V6h31Wd+bcw/NRH1Xv4ZZW4ntK5s35LPo2vBH8oo1PVeqge3JfA44Ufu4Dr7Z/x2Y/B8Y/Sd4/VXqAHDPvQx9WuozDWNdGv0gFmDO6lYPfaXTyCg5Vl7aLXyQGt0iR7nfR7poy8sSBwS3/AH//AEBb/oiF/M9Dj9DuxrN+bWQww0Cv3u92m+G/mNWezNv6cG1dUx2W5LdxYSQ+30936BlrXt9Oj2f4Pcg9I6bU/pNvUeoPs9QujHtFj2WN2/6NzHN+k5Zz7H2vdY9xe55kvcZJ83OP0lZHOYxjliwwoiWsper/ABWtzOActEQib4pE/Y6rcvC6hnMbaz0arnbbWPDS0HtZU9gb6e39xVOqdPPT8o1A76na1uPMfyk/TunZGc8WNbtxaz+lvdo0R+axx/nLP5LFPq1jdtFAO99e5z3eRP6Mf1tqUyZ4eOcakD6ZVw8YPzf4rWMSYGZ7gWevk0RqkkCkq9MNav8A/9Pa/wCaI72p/wDmiz/SrpAfmpsqss1Y2R48BUvumLsftQeXwj/feco+rLsa+vIpt221ODmOjghZ/wBc+mFtjOrsrP6YenkBvDXt+g/+2u3+yXnwHzUL8AXUWUXFrmWtLXNSlycauNgi/wAWTEIYieHaW+r5PjEF+4xDu61cVum0CfBVuq9Kt6bl2UX7ma+ywDQjtvb/AN+aj9OtcwjcA9o+k9h4/rsPuWVzUDRIG3RswxSsGO37zb+xzqQi04QHIhWDl4cQXGf3gNFXy8s0wGEua4aWN9wJ/kwqA9yWlFfPncEIGRmJmJ4ah6p8XZuVYbHENkbj27qXUunAV10x/OOlzjwAB/336azarGmprD/PT7X8O3E6N/eWt1avM6jY3peEd1zmgZdpPtpr/O37f8Lc78xqfg5ec8sQLOrFy3PHOZEx9sQ6k8Q1/wC6c3CYeuZD7mvFHSulAUYwc4MFjnD3277C2re5aON0bH3bq8c5JB0da4spb56Dff8A9bajdI+pfRunv9VzznZMz6mQDsB/4LH/AJpq6D7JadQW+QC6KHJwiI6fKGDL7eSfFMD0+mA/di5duFfdXtsyCDEAVtDWMH7tNf5ioO+rGO4z6r5OpJ7rojiXjgA/AodjXs0eNvgnT5eEzcwT5rZYcUzctXBH1Xx/9K/8EltOcxolzvvSTfuuH91H3XF2/Ev/1NXO667MY2gepjva8PZbU/Y4EfvE+1zFoYfXjjVgZr/XAGhadR+DNyo/sp2u3WO+xDf0jKiWAuDuY0/gogP5UyyxRJuUde7uN+s3SrtK/VLz/g2yfyblM9bxGaObaw+ZafyLmh0jNqBdTiPnxDok/cqd9XVXAsfh2sj88BzikYD90MZwY/EO/wDWLL6dn9Oa0gvua79G+Ihv5zXFc6LMaqNrfRIEAkan/vyH6FmP/O132TzLdPxUW7bHtZW4187vVEf9P6So83yk8h4onShcf0vP+ssy4snDUch4Ij5b4U1tWPcw2OyvQrAPqdpHh2duQulW0NuFb7xbfdWGYtbZJawHl2//AA9ioZNGPY/b9sbunl4J/wCk5avRui9PourzbskXZNbi9rG2N2T+ZZ+9uaoDyvDAxlKXCew/JiwcvKZ0jY7yFOx0qnBquGTfk1ssYT6dR1jtufYfbv8A5C1fXwscOFFzWFx3OLDy795/5jlgZdOHDrK8htJMnZYWubuPMe71fcsnJ6mXVei0BrQPcWEAH+SOHKieRzymDCUxX7npplliyYwYiIq/0Tdvb4/1j6fY4023hlg0BAkPPg3+WjO6zhTAdcY5gNb/AN+Xmtbzva7aQ0EH2ubJI4lxVvI6hmuduPpkDsXCfvW5y0cgxgZfVIfpE1I/3uFWPBYJyWD5voY61gNj9I9xPiYWd1DrBtmujNbitPfR7/7O8bdy4odXvaffU0j+TYJ/ijWfWF1lQqspa5o7Ofu/gp60qgyezirUX5vSt6lUyplJsfeKxrfaQXu/lOgpLkWZON6nqu/RifosGn4lJCmT0cPDXpqn/9Xfqz4btF/zI0R25kc5B93aCSqjL6jrIjwhWmZlWkaCPDVER8WYk9m0y+HAC9x7xtV3Hydx2ueST4tVBuVQSCXbSjnNr9rh7j3hOod0Ens6MNdG4T8kG7FxnTuawHvuao13ueJEhRc7I+i2fGZH9yVI+rUv6XhvBJbVr5GFUd0XAJJaykmNTqD94V19lxdEuM8w4R+RV3vyZ2wdD2c3X8E2UbGy8Srq51/QsAj+bqM8AEn8qpO+r9DHFzIEfmTI/ItWzKyYLIdHxaFVtuzOfeB4S1R8Pgmw0x0uhrSDVWSNdShnp+OAf0FJnzRbMq5wILZ/le1AN1k/QLvLRHXsUUO6xxMcaDHrdPbTT8EF+Njgx9mb8iP/ACKKb7P3AB5AShWZFokgaf1Qgb7IqPdG7DoJEVCfj/5ikmOTYeSD5EapJuvZXDHu/wD/1tyuis7Hh9Y3AmCdRH5rx+aiF7WuYDsdIJO0jSOzv5S8KSTtV+r7yDMAgAngSOFapsDYZtBjsvnxJO1U/RbXseC2C2BzMD5IRrgS2wgn94x+C+eUklavvlpsYNbd5PZpn74VY3UF3uss+S8MSQKRb7kW1v4tcG/EE/ihFtDCSXOs8AXt/IvEkkw2vFPtDrcUiC3Z5yFXssq3EtAj5Lx9JN18U6eD67NcTvAnWAAmds28yD8B/FeRpJpvxR9j6uXVMBIAIHgQT90pLyhJDXxTp4P/2ThCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANgAAAAEAOEJJTQQGAAAAAAAHAAYAAAABAQD/4Qy3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJBMkE1OUJFNjA0MDRFOTA1MDE1N0VBM0FBMUVFNzhEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTdGMTE3NDA3MjA2ODExODIyQTlCOTZFRUFBM0NBMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJBMkE1OUJFNjA0MDRFOTA1MDE1N0VBM0FBMUVFNzhEMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNi0wMy0xN1QxNjowMzo1NyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDMtMTdUMTY6MDY6NTcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTYtMDMtMTdUMTY6MDY6NTcrMDg6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRTdGMTE3NDA3MjA2ODExODIyQTlCOTZFRUFBM0NBMyIgc3RFdnQ6d2hlbj0iMjAxNi0wMy0xN1QxNjowNjo1NyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uAA5BZG9iZQBkQAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAwBAwMDBQQFCQYGCQ0KCQoNDw4ODg4PDwwMDAwMDw8MDAwMDAwPDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAHgAeAMBEQACEQEDEQH/3QAEAA//xAGiAAAABwEBAQEBAAAAAAAAAAAEBQMCBgEABwgJCgsBAAICAwEB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"

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(51)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/details.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/simgyun/Desktop/Vue/src/components/details.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <div id=\"details\">\n\t<nav class=\"text-center\">\n\t\t<div class=\"pull-left big-font pd-l-m\">&lt;</div>\n\t\t<div class=\"pd-r-m\">商品详情</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<img src=\"" + __webpack_require__(52) + "\" class=\"nav-img\">\n\t\t</div>\n\t\t<div class=\"clear-both\"></div>\n\t</nav>\n\t<div class=\"banner\">\n\t\t<carousel></carousel>\n\t\t<div class=\"pd-l-m bgc-white\">养生花茶  拒绝春日绵绵好睡眠花茶250g</div>\n\t\t<p class=\"pd-l-m danger-text bgc-white\">¥100</p>\n\t\t<div class=\"banner-font bgc-white\">\n\t\t\t<span class=\"pull-left pd-l-m\">原价：¥ 120</span>\n\t\t\t<span class=\"pull-right pd-r-m\">运费： ¥ 12</span>\n\t\t\t<div class=\"clear-both\"></div>\n\t\t</div>\n\t\t<div class=\"bgc-white m-t-sm\">\n\t\t\t<p class=\"pd-l-m\">属性： 寒性</p>\n\t\t\t<p class=\"pd-l-m\">产地： 珠穆朗玛峰</p>\n\t\t\t<p class=\"pd-l-m pd-r-m\">功效： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>\n\t\t\t<p class=\"pd-l-m pd-r-m\">用法： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>\n\t\t</div>\n\t</div>\n\t\n  </div>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _carousel = __webpack_require__(55);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		components: {
			carousel: _carousel2.default
		}
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div id="details">
	// 	<nav class="text-center">
	// 		<div class="pull-left big-font pd-l-m">&lt;</div>
	// 		<div class="pd-r-m">商品详情</div>
	// 		<div class="pull-right">
	// 			<img src="../assets/img/cart.png" class="nav-img">
	// 		</div>
	// 		<div class="clear-both"></div>
	// 	</nav>
	// 	<div class="banner">
	// 		<carousel></carousel>
	// 		<div class="pd-l-m bgc-white">养生花茶  拒绝春日绵绵好睡眠花茶250g</div>
	// 		<p class="pd-l-m danger-text bgc-white">¥100</p>
	// 		<div class="banner-font bgc-white">
	// 			<span class="pull-left pd-l-m">原价：¥ 120</span>
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
	//   </div>
	// </template>
	// <script >

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(59)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/simgyun/Desktop/Vue/src/components/carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./carousel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.show span{\r\n    display: block;\r\n    border-radius: 50%;   \r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    margin:4px;\r\n    z-index: 2;\r\n}\r\n.show img{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n.show-icon {\r\n    /*margin-top: -30px;*/\r\n    position: relative;\r\n    width: 75px;\r\n    margin: -30px auto 0 auto;\r\n}\r\n.active{\r\n    background-color: #F7F7F7;\r\n}\r\n.positive{\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n.clear-both {\r\n\tclear: both;\r\n}\r\n", "", {"version":3,"sources":["/./src/components/carousel.vue?505bb708"],"names":[],"mappings":";AA6FA;IACA,eAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,YAAA;IACA,WAAA;IACA,WAAA;CACA;AACA;IACA,YAAA;IACA,cAAA;CACA;AACA;IACA,sBAAA;IACA,mBAAA;IACA,YAAA;IACA,0BAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,uCAAA;CACA;AACA;CACA,YAAA;CACA","file":"carousel.vue","sourcesContent":["<template>\r\n\t<div class=\"show\">\r\n    <div>\r\n        <img :src=\"slideUrl\">\r\n    </div>\r\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\r\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\r\n            <div class=\"clear-both\"></div>\r\n        </div>\r\n    </div>       \r\n</div>\r\n</template>\r\n\r\n<script >\r\n\texport default {\r\n\r\n\tdata () {\r\n\t\treturn {\r\n\t\t  \t\tshowImg:[\r\n\t\t            {\r\n\t\t              name:'高级汤料',\r\n\t\t              des:'你还不来买我吗！',\r\n\t\t              url:'../assets/img/health02.jpg'\r\n\t\t            },\r\n\t\t            {\r\n\t\t              name:'家用汤料',\r\n\t\t              des:　'你在我心中是最美',\r\n\t\t              url:'../assets/img/health01.jpg',\r\n\t\t            },\r\n\t\t            {\r\n\t\t              name:'养生花茶',\r\n\t\t              des:'拒绝春日绵绵好睡眠花茶250g',\r\n\t\t              url:'../assets/img/health03.png'\r\n\t\t            }\r\n\t\t        ],\r\n\t\t        slideUrl:'',\r\n\t\t        currentIndex:0,\r\n\t\t        count:0,\r\n\t\t        circles:[]\r\n\t\t}\r\n\t},\r\n\tready () {\r\n\t  this.slideUrl=this.showImg[this.currentIndex].url\r\n\t  let imgCnt=this.showImg.length\r\n\t  this.count=imgCnt\r\n\t  let fragmentHtml=\" \"\r\n\t  let parentNode=document.getElementById('spanCnt')\r\n\r\n\t  //动态添加幻灯片的小圆圈\r\n\t  for(let i=0;i<imgCnt;i++){\r\n\t    fragmentHtml+='<span>'+ '</span>'\r\n\t  }\r\n\t  parentNode.innerHTML=fragmentHtml\r\n\t  //设置小圆圈的状态\r\n\t  let spanNodes=parentNode.getElementsByTagName(\"span\")\r\n\t      this.circles=spanNodes\r\n\t      spanNodes[0].className='active'\r\n\r\n\t  for(let i=1;i<imgCnt;i++){\r\n\t     spanNodes[i].className='positive'\r\n\t  }\r\n\t  this.waitForNext()\t\r\n\t},\r\n\tmethods: {\r\n\t\t  waitForNext() {\r\n\t\t    setInterval(this.next,1000 * 3) \r\n\t\t  },\r\n\t\t  next() {\r\n\t\t    this.currentIndex+=1\r\n\t\t    if(this.currentIndex >= this.count){\r\n\t\t      this.currentIndex=0\r\n\t\t    }\r\n\t\t    this.handleImg(this.currentIndex)\r\n\t\t  },\r\n\t\t  handleImg(index) {\r\n\t\t    this.slideUrl=this.showImg[index].url\r\n\t\t    this.circles[index].className='active'\r\n\t\t    for(let i=0;i<this.count;i++){\r\n\t\t      if(i!==index){\r\n\t\t        this.circles[i].className='positive'\r\n\t\t      }\r\n\t\t    }\r\n\t\t  }\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tshowWidth () {\r\n\t\t\t  return this.showImg.length*25\r\n\t\t\t},\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style >\r\n.show span{\r\n    display: block;\r\n    border-radius: 50%;   \r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    margin:4px;\r\n    z-index: 2;\r\n}\r\n.show img{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n.show-icon {\r\n    /*margin-top: -30px;*/\r\n    position: relative;\r\n    width: 75px;\r\n    margin: -30px auto 0 auto;\r\n}\r\n.active{\r\n    background-color: #F7F7F7;\r\n}\r\n.positive{\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n.clear-both {\r\n\tclear: both;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 58 */
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
	// .clear-both {
	// 	clear: both;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"show\">\n    <div>\n        <img :src=\"slideUrl\">\n    </div>\n    <div class=\" show-icon\" :style=\"{width: showWidth+'px'}\" >\n        <div style=\"margin:0 auto;\" id=\"spanCnt\">\n            <div class=\"clear-both\"></div>\n        </div>\n    </div>       \n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map