// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8lMIh":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _formbouncerjs = require("formbouncerjs");
var _formbouncerjsDefault = parcelHelpers.interopDefault(_formbouncerjs);
var _styleScss = require("../style/style.scss");
var validate = new _formbouncerjsDefault.default("form"); /*Initialising Form Validation*/ 
const open = document.querySelector("#menu-open");
const close = document.querySelector("#menu-close");
const navlist = document.querySelector("#nav-list");
const btn = document.querySelector("#btn");
const arrow = document.querySelector("#arrow");
const success = document.querySelector("#success");
window.addEventListener("load", ()=>{
    close.classList.add("no-display");
});
/*Burger Menu*/ open.addEventListener("click", ()=>{
    open.classList.add("no-display");
    close.classList.remove("no-display");
    navlist.classList.remove("hide");
});
close.addEventListener("click", ()=>{
    open.classList.remove("no-display");
    close.classList.add("no-display");
    navlist.classList.add("hide");
});
btn.addEventListener("mouseover", ()=>{
    arrow.classList.add("arrow-animation");
});
btn.addEventListener("mouseout", ()=>{
    arrow.classList.remove("arrow-animation");
});
/*Form input data capture*/ const form = document.getElementById("form");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let firstName = document.getElementById("name");
    let lastName = document.getElementById("surname");
    let email = document.getElementById("email");
    if (firstName.value && lastName.value && email.value) {
        console.log(`${firstName.value}  ${lastName.value}  ${email.value}`);
        success.classList.add("success");
        success.innerHTML = `Name: ${firstName.value} <br> Surname: ${lastName.value} <br> Email: ${email.value}`;
        firstName.value = "";
        lastName.value = "";
        email.value = "";
    } else {
        console.log("fill all input fields to them see in console");
        success.classList.add("fail");
        success.innerHTML = "Ooops! Uncomplete form";
    }
});

},{"../style/style.scss":"fOVVj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","formbouncerjs":"2lTCv"}],"fOVVj":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2lTCv":[function(require,module,exports) {
var global = arguments[3];
/*! formbouncerjs v1.4.6 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/bouncer */ "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e1) {
    if ("Element" in e1) {
        var t1 = "classList", r1 = "prototype", n1 = e1.Element[r1], a1 = Object, i1 = String[r1].trim || function() {
            return this.replace(/^\s+|\s+$/g, "");
        }, o = Array[r1].indexOf || function(e) {
            for(var t = 0, r = this.length; t < r; t++)if (t in this && this[t] === e) return t;
            return -1;
        }, l = function(e, t) {
            this.name = e, this.code = DOMException[e], this.message = t;
        }, u = function(e, t) {
            if ("" === t) throw new l("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(t)) throw new l("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return o.call(e, t);
        }, s = function(e) {
            for(var t = i1.call(e.getAttribute("class") || ""), r = t ? t.split(/\s+/) : [], n = 0, a = r.length; n < a; n++)this.push(r[n]);
            this._updateClassName = function() {
                e.setAttribute("class", this.toString());
            };
        }, c = s[r1] = [], f = function() {
            return new s(this);
        };
        if (l[r1] = Error[r1], c.item = function(e) {
            return this[e] || null;
        }, c.contains = function(e) {
            return -1 !== u(this, e += "");
        }, c.add = function() {
            for(var e, t = arguments, r = 0, n = t.length, a = !1; e = t[r] + "", -1 === u(this, e) && (this.push(e), a = !0), ++r < n;);
            a && this._updateClassName();
        }, c.remove = function() {
            var e, t, r = arguments, n = 0, a = r.length, i = !1;
            do for(e = r[n] + "", t = u(this, e); -1 !== t;)this.splice(t, 1), i = !0, t = u(this, e);
            while (++n < a)
            i && this._updateClassName();
        }, c.toggle = function(e, t) {
            e += "";
            var r = this.contains(e), n = r ? !0 !== t && "remove" : !1 !== t && "add";
            return n && this[n](e), !0 === t || !1 === t ? t : !r;
        }, c.toString = function() {
            return this.join(" ");
        }, a1.defineProperty) {
            var d = {
                get: f,
                enumerable: !0,
                configurable: !0
            };
            try {
                a1.defineProperty(n1, t1, d);
            } catch (e) {
                void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1, a1.defineProperty(n1, t1, d));
            }
        } else a1[r1].__defineGetter__ && n1.__defineGetter__(t1, f);
    }
}(self), function() {
    "use strict";
    var e2 = document.createElement("_");
    if (e2.classList.add("c1", "c2"), !e2.classList.contains("c2")) {
        var t3 = function(e3) {
            var n = DOMTokenList.prototype[e3];
            DOMTokenList.prototype[e3] = function(e) {
                var t, r = arguments.length;
                for(t = 0; t < r; t++)e = arguments[t], n.call(this, e);
            };
        };
        t3("add"), t3("remove");
    }
    if (e2.classList.toggle("c3", !1), e2.classList.contains("c3")) {
        var r3 = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(e, t) {
            return 1 in arguments && !this.contains(e) == !t ? t : r3.call(this, e);
        };
    }
    e2 = null;
}()), Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(e) {
    var t = this;
    if (!document.documentElement.contains(this)) return null;
    do {
        if (t.matches(e)) return t;
        t = t.parentElement;
    }while (null !== t)
    return null;
}), function() {
    if ("function" == typeof window.CustomEvent) return;
    function e4(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r;
    }
    e4.prototype = window.Event.prototype, window.CustomEvent = e4;
}(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t(e);
    }) : module.exports = t(e);
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(a3) {
    "use strict";
    var u = {
        fieldClass: "error",
        errorClass: "error-message",
        fieldPrefix: "bouncer-field_",
        errorPrefix: "bouncer-error_",
        patterns: {
            email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
            url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
            number: /^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
            time: /^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,
            month: /^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/
        },
        customValidations: {},
        messageAfterField: !0,
        messageCustom: "data-bouncer-message",
        messageTarget: "data-bouncer-target",
        messages: {
            missingValue: {
                checkbox: "This field is required.",
                radio: "Please select a value.",
                select: "Please select a value.",
                "select-multiple": "Please select at least one value.",
                default: "Please fill out this field."
            },
            patternMismatch: {
                email: "Please enter a valid email address.",
                url: "Please enter a URL.",
                number: "Please enter a number",
                color: "Please match the following format: #rrggbb",
                date: "Please use the YYYY-MM-DD format",
                time: "Please use the 24-hour time format. Ex. 23:00",
                month: "Please use the YYYY-MM format",
                default: "Please match the requested format."
            },
            outOfRange: {
                over: "Please select a value that is no more than {max}.",
                under: "Please select a value that is no less than {min}."
            },
            wrongLength: {
                over: "Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.",
                under: "Please lengthen this text to {minLength} characters or more. You are currently using {length} characters."
            },
            fallback: "There was an error with this field."
        },
        disableSubmit: !1,
        emitEvents: !0
    }, s = function(e, t) {
        Array.prototype.forEach.call(e, t);
    }, c = function() {
        var r = {};
        return s(arguments, function(e) {
            for(var t in e){
                if (!e.hasOwnProperty(t)) return;
                "[object Object]" === Object.prototype.toString.call(e[t]) ? r[t] = c(r[t], e[t]) : r[t] = e[t];
            }
        }), r;
    }, f = function(e, t, r) {
        if ("function" == typeof a3.CustomEvent) {
            var n = new CustomEvent(t, {
                bubbles: !0,
                detail: r || {}
            });
            e.dispatchEvent(n);
        }
    }, d = function(e5, t5) {
        var r4, n3, a;
        return {
            missingValue: function(e6) {
                if (!e6.hasAttribute("required")) return !1;
                if ("checkbox" === e6.type) return !e6.checked;
                var t = e6.value.length;
                return "radio" === e6.type && (t = Array.prototype.filter.call(e6.form.querySelectorAll('[name="' + m(e6.name) + '"]'), function(e) {
                    return e.checked;
                }).length), t < 1;
            }(e5),
            patternMismatch: (r4 = e5, n3 = t5, a = r4.getAttribute("pattern"), !(!(a = a ? new RegExp("^(?:" + a + ")$") : n3.patterns[r4.type]) || !r4.value || r4.value.length < 1 || r4.value.match(a))),
            outOfRange: function(e) {
                if (!e.value || e.value.length < 1) return !1;
                var t = e.getAttribute("max"), r = e.getAttribute("min"), n = parseFloat(e.value);
                return t && t < n ? "over" : !!(r && n < r) && "under";
            }(e5),
            wrongLength: function(e) {
                if (!e.value || e.value.length < 1) return !1;
                var t = e.getAttribute("maxlength"), r = e.getAttribute("minlength"), n = e.value.length;
                return t && t < n ? "over" : !!(r && n < r) && "under";
            }(e5)
        };
    }, m = function(e) {
        for(var t, r = String(e), n = r.length, a = -1, i = "", o = r.charCodeAt(0); ++a < n;){
            if (0 === (t = r.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === o ? i += "\\" + t.toString(16) + " " : i += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? r.charAt(a) : "\\" + r.charAt(a);
        }
        return i;
    }, h = function(e, t, r) {
        var n = e.name ? e.name : e.id;
        return !n && r && (n = t.fieldPrefix + Math.floor(999 * Math.random()), e.id = n), "checkbox" === e.type && (n += "_" + (e.value || e.id)), n;
    }, x = function(e7, t6) {
        var r5 = document.createElement("div");
        r5.className = t6.errorClass, r5.id = t6.errorPrefix + h(e7, t6, !0);
        var n4 = function(e, t, r) {
            var n = e.getAttribute(r.messageTarget);
            if (n) {
                var a = e.form.querySelector(n);
                if (a) return a.firstChild || a.appendChild(document.createTextNode(""));
            }
            return r.messageAfterField ? (t.nextSibling || t.parentNode.appendChild(document.createTextNode("")), t.nextSibling) : t;
        }(e7, function(e) {
            if ("radio" === e.type && e.name) {
                var t = e.form.querySelectorAll('[name="' + m(e.name) + '"]');
                e = t[t.length - 1];
            }
            "radio" !== e.type && "checkbox" !== e.type || (e = e.closest("label") || e.form.querySelector('[for="' + e.id + '"]') || e);
            return e;
        }(e7), t6);
        return n4.parentNode.insertBefore(r5, n4), r5;
    }, v = function(e, t, r) {
        e.classList.add(r.fieldClass), e.setAttribute("aria-describedby", t.id), e.setAttribute("aria-invalid", !0);
    }, g = function(e8, t7, r6) {
        var n5, a4, i4, o = e8.form.querySelector("#" + m(r6.errorPrefix + h(e8, r6))) || x(e8, r6), l = function(e, t, r) {
            var n = r.messages;
            if (t.missingValue) return n.missingValue[e.type] || n.missingValue.default;
            if (t.outOfRange) return n.outOfRange[t.outOfRange].replace("{max}", e.getAttribute("max")).replace("{min}", e.getAttribute("min")).replace("{length}", e.value.length);
            if (t.wrongLength) return n.wrongLength[t.wrongLength].replace("{maxLength}", e.getAttribute("maxlength")).replace("{minLength}", e.getAttribute("minlength")).replace("{length}", e.value.length);
            if (t.patternMismatch) {
                var a = e.getAttribute(r.messageCustom);
                return a || n.patternMismatch[e.type] || n.patternMismatch.default;
            }
            for(var i in r.customValidations)if (r.customValidations.hasOwnProperty(i) && t[i] && n[i]) return n[i];
            return n.fallback;
        }(e8, t7, r6);
        o.textContent = "function" == typeof l ? l(e8, r6) : l, a4 = o, i4 = r6, "radio" === (n5 = e8).type && n5.name && Array.prototype.forEach.call(document.querySelectorAll('[name="' + n5.name + '"]'), function(e) {
            v(e, a4, i4);
        }), v(n5, a4, i4), r6.emitEvents && f(e8, "bouncerShowError", {
            errors: t7
        });
    }, i3 = function(e, t) {
        e.classList.remove(t.fieldClass), e.removeAttribute("aria-describedby"), e.removeAttribute("aria-invalid");
    }, p = function(e9, t) {
        var r, n, a = e9.form.querySelector("#" + m(t.errorPrefix + h(e9, t)));
        a && (a.parentNode.removeChild(a), n = t, "radio" === (r = e9).type && r.name ? Array.prototype.forEach.call(document.querySelectorAll('[name="' + r.name + '"]'), function(e) {
            i3(e, n);
        }) : i3(r, n), t.emitEvents && f(e9, "bouncerRemoveError"));
    };
    return function(n6, e10) {
        var l, r7 = {};
        r7.validate = function(e11, t9) {
            if (!e11.disabled && !e11.readOnly && "reset" !== e11.type && "submit" !== e11.type && "button" !== e11.type) {
                var r8, n7, a6, i = c(l, t9 || {}), o = (a6 = d(r8 = e11, n7 = i), {
                    valid: !function(e) {
                        for(var t in e)if (e[t]) return !0;
                        return !1;
                    }(a6 = function(e, t, r, n) {
                        for(var a in r)r.hasOwnProperty(a) && (t[a] = r[a](e, n));
                        return t;
                    }(r8, a6, n7.customValidations, n7)),
                    errors: a6
                });
                if (!o.valid) return g(e11, o.errors, i), o;
                p(e11, i);
            }
        }, r7.validateAll = function(e12) {
            return Array.prototype.filter.call(e12.querySelectorAll("input, select, textarea"), function(e) {
                var t = r7.validate(e);
                return t && !t.valid;
            });
        };
        var a5 = function(e) {
            e.target.form && e.target.form.matches(n6) && r7.validate(e.target);
        }, i5 = function(e) {
            e.target.form && e.target.form.matches(n6) && e.target.classList.contains(l.fieldClass) && r7.validate(e.target);
        }, o1 = function(e) {
            if (e.target.matches(n6)) {
                e.preventDefault();
                var t = r7.validateAll(e.target);
                if (0 < t.length) return t[0].focus(), void f(e.target, "bouncerFormInvalid", {
                    errors: t
                });
                l.disableSubmit || e.target.submit(), l.emitEvents && f(e.target, "bouncerFormValid");
            }
        };
        r7.destroy = function() {
            var e13, t, r;
            document.removeEventListener("blur", a5, !0), document.removeEventListener("input", i5, !1), document.removeEventListener("click", i5, !1), document.removeEventListener("submit", o1, !1), e13 = n6, t = l, s(document.querySelectorAll(e13), function(e14) {
                s(e14.querySelectorAll("input, select, textarea"), function(e) {
                    p(e, t);
                });
            }), r = n6, s(document.querySelectorAll(r), function(e) {
                e.removeAttribute("novalidate");
            }), l.emitEvents && f(document, "bouncerDestroyed", {
                settings: l
            }), l = null;
        };
        var t8;
        return l = c(u, e10 || {}), t8 = n6, s(document.querySelectorAll(t8), function(e) {
            e.setAttribute("novalidate", !0);
        }), document.addEventListener("blur", a5, !0), document.addEventListener("input", i5, !1), document.addEventListener("click", i5, !1), document.addEventListener("submit", o1, !1), l.emitEvents && f(document, "bouncerInitialized", {
            settings: l
        }), r7;
    };
});

},{}]},["8lMIh","8lRBv"], "8lRBv", "parcelRequire86f9")

//# sourceMappingURL=index.59a40e7a.js.map
