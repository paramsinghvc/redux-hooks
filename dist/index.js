!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("redux")):"function"==typeof define&&define.amd?define(["react","redux"],t):"object"==typeof exports?exports.useRedux=t(require("react"),require("redux")):e.useRedux=t(e.React,e.Redux)}(window,function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o,i=r(0),c=r(2),f=u(r(3)),a=r(4);function l(e){return"function"!=typeof e}t.createStoreContext=function(){o=i.createContext(null);var e=f.default(o);return{context:o,Provider:e}},t.areDispatchActionsMap=l;t.default=function(e,t,r){var u=i.useContext(o);if(!u)throw new Error("Store has not been provided in the <Provider />");var f=u.getState,s=u.dispatch,d=u.subscribe,p=f(),b=i.useCallback(e,[]),v=i.useCallback(l(t)?function(){return c.bindActionCreators(t,s)}:t,[]),y=i.useRef(b(p,r)),h=i.useRef(v(s,r)),_=i.useState(y.current)[1];return i.useEffect(function(){var e=d(function(){var e=b(f());a.shallowEqual(e,y.current)||(y.current=e,_(e))});return function(){e()}},[u]),n({},y.current,h.current)}},function(e,r){e.exports=t},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=n(r(0));t.default=function(e){var t=e.Provider;return function(e){var r=e.store,n=e.children;return u.default.createElement(t,{value:r},n)}}},function(e,t,r){"use strict";function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}t.__esModule=!0,t.shallowEqual=function(e,t){if(n(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),u=Object.keys(t);if(r.length!==u.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!n(e[r[o]],t[r[o]]))return!1;return!0}}])});
//# sourceMappingURL=index.js.map