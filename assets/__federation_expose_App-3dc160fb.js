import { r as reactExports } from './__federation_shared_react.js';
import { importShared } from './__federation_fn_import.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const App$1 = '';

const remotesMap = {
'cart-mfe':{url:'https://tminhduc2811.github.io/cart-mfe/assets/cart-mfe-entry.js',format:'esm',from:'vite'}
};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }

                const wrapShareModule = remoteFrom => {
                    return {
                        'react':{'undefined':{get:()=>get('./__federation_shared_react.js', remoteFrom), loaded:1}},'react-dom':{'undefined':{get:()=>get('./__federation_shared_react-dom.js', remoteFrom), loaded:1}},'zustand':{'undefined':{get:()=>get('./__federation_shared_zustand.js', remoteFrom), loaded:1}}
                    }
                };

                async function __federation_import(name) {
                    return import(name);
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const speed = 500, curveDelay = 300, position = "fixed";
const animateFlyingButton = (e, onAnimationComplete) => {
  if (e) {
    const cart = document.getElementById("cart-btn");
    const btnY = e.currentTarget.getBoundingClientRect().top , btnX = e.currentTarget.getBoundingClientRect().left , flyingBtn = e.currentTarget.cloneNode(true);
    flyingBtn.classList.add("flyingBtn");
    flyingBtn.style.position = position;
    flyingBtn.style.top = `${btnY}px`;
    flyingBtn.style.left = `${btnX}px`;
    flyingBtn.style.opacity = "1";
    flyingBtn.style["z-index"] = 2e3;
    flyingBtn.style.transition = `all ${speed / 1e3}s ease, top ${(speed + curveDelay) / 1e3}s ease, left ${speed / 1e3}s ease, transform ${speed / 1e3}s ease ${(speed - 10) / 1e3}s`;
    document.body.appendChild(flyingBtn);
    flyingBtn.style.top = `${cart.offsetTop + cart.offsetHeight - 16}px`;
    flyingBtn.style.left = `${cart.offsetLeft + cart.offsetWidth - 16}px`;
    flyingBtn.style.transform = "scale(0)";
    setTimeout(() => {
      flyingBtn.remove();
      onAnimationComplete();
    }, speed * 1.5);
  }
};

const CartIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M11.4574 17.3333C12.01 17.3333 12.5399 17.1138 12.9306 16.7231C13.3213 16.3324 13.5408 15.8025 13.5408 15.25C13.5408 14.6975 13.3213 14.1676 12.9306 13.7769C12.5399 13.3862 12.01 13.1667 11.4574 13.1667C10.9049 13.1667 10.375 13.3862 9.9843 13.7769C9.59359 14.1676 9.3741 14.6975 9.3741 15.25C9.3741 15.8025 9.59359 16.3324 9.9843 16.7231C10.375 17.1138 10.9049 17.3333 11.4574 17.3333ZM4.16577 17.3333C4.7183 17.3333 5.24821 17.1138 5.63891 16.7231C6.02961 16.3324 6.2491 15.8025 6.2491 15.25C6.2491 14.6975 6.02961 14.1676 5.63891 13.7769C5.24821 13.3862 4.7183 13.1667 4.16577 13.1667C3.61323 13.1667 3.08333 13.3862 2.69263 13.7769C2.30193 14.1676 2.08243 14.6975 2.08243 15.25C2.08243 15.8025 2.30193 16.3324 2.69263 16.7231C3.08333 17.1138 3.61323 17.3333 4.16577 17.3333ZM17.747 2.6698C18.0071 2.66141 18.2536 2.55221 18.4346 2.3653C18.6156 2.17839 18.7168 1.92841 18.7168 1.66823C18.7168 1.40806 18.6156 1.15808 18.4346 0.971169C18.2536 0.784255 18.0071 0.675059 17.747 0.666672H16.5481C15.6085 0.666672 14.796 1.31876 14.5918 2.23542L13.2866 8.1125C13.0824 9.02917 12.2699 9.68125 11.3304 9.68125H3.50535L2.00327 3.67084H11.7376C11.9952 3.65908 12.2384 3.54848 12.4165 3.36204C12.5946 3.17559 12.694 2.92766 12.694 2.6698C12.694 2.41194 12.5946 2.164 12.4165 1.97756C12.2384 1.79111 11.9952 1.68051 11.7376 1.66875H2.00327C1.69875 1.66867 1.39823 1.738 1.12453 1.8715C0.85084 2.00499 0.611185 2.19913 0.423786 2.43916C0.236387 2.67918 0.106178 2.95877 0.0430584 3.25667C-0.0200634 3.55457 -0.0144329 3.86294 0.0595188 4.15834L1.5616 10.1667C1.66989 10.6002 1.92003 10.9851 2.27224 11.2601C2.62444 11.5351 3.05849 11.6845 3.50535 11.6844H11.3304C12.242 11.6845 13.1265 11.3737 13.8376 10.8032C14.5488 10.2328 15.0441 9.43686 15.2418 8.54688L16.5481 2.6698H17.747Z",
        fill: "#0156FF"
      }
    )
  }
);

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const {useState} = await importShared('react');


// returns a Promisized version of Image() api
var imagePromiseFactory = (function (_ref) {
  var _ref$decode = _ref.decode,
    decode = _ref$decode === void 0 ? true : _ref$decode,
    _ref$crossOrigin = _ref.crossOrigin,
    crossOrigin = _ref$crossOrigin === void 0 ? '' : _ref$crossOrigin;
  return function (src) {
    return new Promise(function (resolve, reject) {
      var i = new Image();
      if (crossOrigin) i.crossOrigin = crossOrigin;
      i.onload = function () {
        decode && i.decode ? i.decode().then(resolve)["catch"](reject) : resolve();
      };
      i.onerror = reject;
      i.src = src;
    });
  };
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var removeBlankArrayElements = function removeBlankArrayElements(a) {
  return a.filter(function (x) {
    return x;
  });
};
var stringToArray = function stringToArray(x) {
  return Array.isArray(x) ? x : [x];
};
var cache = {};
// sequential map.find for promises
var promiseFind = function promiseFind(arr, promiseFactory) {
  var done = false;
  return new Promise(function (resolve, reject) {
    var queueNext = function queueNext(src) {
      return promiseFactory(src).then(function () {
        done = true;
        resolve(src);
      });
    };
    arr.reduce(function (p, src) {
      // ensure we aren't done before enqueuing the next source
      return p["catch"](function () {
        if (!done) return queueNext(src);
      });
    }, queueNext(arr.shift()))["catch"](reject);
  });
};
function useImage(_ref) {
  var srcList = _ref.srcList,
    _ref$imgPromise = _ref.imgPromise,
    imgPromise = _ref$imgPromise === void 0 ? imagePromiseFactory({
      decode: true
    }) : _ref$imgPromise,
    _ref$useSuspense = _ref.useSuspense,
    useSuspense = _ref$useSuspense === void 0 ? true : _ref$useSuspense;
  var _useState = useState(false),
    setIsSettled = _useState[1];
  var sourceList = removeBlankArrayElements(stringToArray(srcList));
  var sourceKey = sourceList.join('');
  if (!cache[sourceKey]) {
    // create promise to loop through sources and try to load one
    cache[sourceKey] = {
      promise: promiseFind(sourceList, imgPromise),
      cache: 'pending',
      error: null
    };
  }
  // when promise resolves/reject, update cache & state
  if (cache[sourceKey].cache === 'resolved') {
    return {
      src: cache[sourceKey].src,
      isLoading: false,
      error: null
    };
  }
  if (cache[sourceKey].cache === 'rejected') {
    if (useSuspense) throw cache[sourceKey].error;
    return {
      isLoading: false,
      error: cache[sourceKey].error,
      src: undefined
    };
  }
  cache[sourceKey].promise
  // if a source was found, update cache
  // when not using suspense, update state to force a rerender
  .then(function (src) {
    cache[sourceKey] = _objectSpread$1(_objectSpread$1({}, cache[sourceKey]), {}, {
      cache: 'resolved',
      src: src
    });
    if (!useSuspense) setIsSettled(sourceKey);
  })
  // if no source was found, or if another error occurred, update cache
  // when not using suspense, update state to force a rerender
  ["catch"](function (error) {
    cache[sourceKey] = _objectSpread$1(_objectSpread$1({}, cache[sourceKey]), {}, {
      cache: 'rejected',
      error: error
    });
    if (!useSuspense) setIsSettled(sourceKey);
  });
  // cache[sourceKey].cache === 'pending')
  if (useSuspense) throw cache[sourceKey].promise;
  return {
    isLoading: true,
    src: undefined,
    error: null
  };
}

const React = await importShared('react');

var _excluded = ["decode", "src", "loader", "unloader", "container", "loaderContainer", "unloaderContainer", "imgPromise", "crossorigin", "useSuspense"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var passthroughContainer = function passthroughContainer(x) {
  return x;
};
function Img(_ref) {
  var _ref$decode = _ref.decode,
    decode = _ref$decode === void 0 ? true : _ref$decode,
    _ref$src = _ref.src,
    srcList = _ref$src === void 0 ? [] : _ref$src,
    _ref$loader = _ref.loader,
    loader = _ref$loader === void 0 ? null : _ref$loader,
    _ref$unloader = _ref.unloader,
    unloader = _ref$unloader === void 0 ? null : _ref$unloader,
    _ref$container = _ref.container,
    container = _ref$container === void 0 ? passthroughContainer : _ref$container,
    _ref$loaderContainer = _ref.loaderContainer,
    loaderContainer = _ref$loaderContainer === void 0 ? passthroughContainer : _ref$loaderContainer,
    _ref$unloaderContaine = _ref.unloaderContainer,
    unloaderContainer = _ref$unloaderContaine === void 0 ? passthroughContainer : _ref$unloaderContaine,
    imgPromise = _ref.imgPromise,
    crossorigin = _ref.crossorigin,
    _ref$useSuspense = _ref.useSuspense,
    useSuspense = _ref$useSuspense === void 0 ? false : _ref$useSuspense,
    imgProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  imgPromise = imgPromise || imagePromiseFactory({
    decode: decode,
    crossOrigin: crossorigin
  });
  var _useImage = useImage({
      srcList: srcList,
      imgPromise: imgPromise,
      useSuspense: useSuspense
    }),
    src = _useImage.src,
    isLoading = _useImage.isLoading;
  // console.log({src, isLoading, resolvedSrc, useSuspense})
  // show img if loaded
  if (src) return container( /*#__PURE__*/React.createElement("img", _objectSpread({
    src: src
  }, imgProps)));
  // show loader if we have one and were still trying to load image
  if (!useSuspense && isLoading) return loaderContainer(loader);
  // show unloader if we have one and we have no more work to do
  if (!useSuspense && unloader) return unloaderContainer(unloader);
  return null;
}

const Image$1 = ({
  src,
  alt,
  className
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Img,
    {
      src,
      alt,
      className,
      loader: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-full h-full bg-gray-50 rounded-md rounded-b-none animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "w-10 h-10 text-gray-200",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 20 18",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" })
        }
      ) })
    }
  );
};

const __federation_var_cartmfestore = await __federation_method_getRemote("cart-mfe" , "./store");
 let useCartStore = __federation_method_unwrapDefault(__federation_var_cartmfestore); 
const ProductItem = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const onAdd = (e) => {
    animateFlyingButton(e, () => addToCart(product));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col shadow-md rounded-md cursor-pointer group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full aspect-square overflow-hidden rounded-md rounded-b-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image$1,
      {
        src: product.img,
        alt: product.title,
        className: "w-full h-full object-cover rounded-md rounded-b-none group-hover:scale-125 group-hover:filter transition-all duration-200"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-thin text-gray-400 text-sm", children: product.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-thin text-gray-400 text-sm", children: product.variants })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "", children: [
          "$",
          product.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2", onClick: onAdd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartIcon, {}) })
      ] })
    ] })
  ] });
};

const PRODUCTS = [
  {
    id: "1",
    title: "New Balance X90",
    type: "Shoes",
    variants: "Multiple colors",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
    price: 40
  },
  {
    id: "2",
    title: "Nike Air Force 1",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
    price: 60
  },
  {
    id: "3",
    title: "Nike Legend Essential 2",
    type: "Shoes",
    variants: "Multiple colors",
    img: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 39
  },
  {
    id: "4",
    title: "Converse",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1619521440807-ba72afd67b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 40
  },
  {
    id: "5",
    title: "Nike Free",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 40
  },
  {
    id: "6",
    title: "Puma White Sneakers",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 40
  },
  {
    id: "7",
    title: "Nike Black and White Basketball",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 40
  },
  {
    id: "8",
    title: "New Balance 997H Grey Day",
    type: "Shoes",
    variants: "1 Color",
    img: "https://images.unsplash.com/photo-1621315271772-28b1f3a5df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 40
  }
];

const create = await importShared('zustand');
const useStore = create((_, get) => ({
  products: PRODUCTS,
  getProductById: (id) => get().products.find((p) => p.id === id)
}));

const App = () => {
  const { products } = useStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-screen-xl grid grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(4,minmax(0,1fr))] gap-4", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductItem, { product }, product.id)) }) });
};

export { App as default, jsxRuntimeExports as j };
