!function(t){var e={};function r(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=void 0},function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var u in e=arguments[r])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var o,i=r(0),c=r(2),a=u(r(3)),f=r(4);function l(t){return"function"!=typeof t}e.createStoreContext=function(){o=i.createContext(null);var t=a.default(o);return{context:o,Provider:t}},e.areDispatchActionsMap=l;e.default=function(t,e,r){var u=i.useContext(o);if(!u)throw new Error("Store has not been provided in the <Provider />");var a=u.getState,s=u.dispatch,d=u.subscribe,p=a(),v=i.useCallback(t,[]),b=i.useCallback(l(e)?function(){return c.bindActionCreators(e,s)}:e,[]),h=i.useRef(v(p,r)),y=i.useRef(b(s,r)),_=i.useState(h.current)[1];return i.useEffect(function(){var t=d(function(){var t=v(a());f.shallowEqual(t,h.current)||(h.current=t,_(t))});return function(){t()}},[u]),n({},h.current,y.current)}},function(t,e){t.exports=void 0},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var u=n(r(0));e.default=function(t){var e=t.Provider;return function(t){var r=t.store,n=t.children;return u.default.createElement(e,{value:r},n)}}},function(t,e,r){"use strict";function n(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}e.__esModule=!0,e.shallowEqual=function(t,e){if(n(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var r=Object.keys(t),u=Object.keys(e);if(r.length!==u.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(e,r[o])||!n(t[r[o]],e[r[o]]))return!1;return!0}}]);
//# sourceMappingURL=index.js.map