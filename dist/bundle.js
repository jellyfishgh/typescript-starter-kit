!function r(e,t,n){function o(u,f){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var a=t[u]={exports:{}};e[u][0].call(a.exports,function(r){var t=e[u][1][r];return o(t?t:r)},a,a.exports,r,e,t,n)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(r,e,t){"use strict";function n(r,e){var t=document.getElementById(r);t.innerHTML=o.sayHello(e)}var o=r("./greet");n("greeting","TypeScript")},{"./greet":2}],2:[function(r,e,t){"use strict";function n(r){return"Hello World from "+r}t.sayHello=n},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
