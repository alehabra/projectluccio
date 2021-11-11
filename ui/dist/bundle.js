/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});
////////////STATISTICHE GIOCATORE//////////////
const charStatsUi = document.getElementById('charStats');
const charChoiceUi = document.getElementById('charStats-choice');
const alteredCharUi = document.getElementById('alteredStats');

const heartOne = document.getElementById('charStats-heart-point-1');
const heartTwo = document.getElementById('charStats-heart-point-2');
const heartTree = document.getElementById('charStats-heart-point-3');
const heartFour = document.getElementById('charStats-heart-point-4');
const hungryOne = document.getElementById('charStats-hungry-point-1');
const hungryTwo = document.getElementById('charStats-hungry-point-2');
const hungryTree = document.getElementById('charStats-hungry-point-3');
const hungryFour = document.getElementById('charStats-hungry-point-4');
const moodOne = document.getElementById('charStats-mood-point-1');
const moodTwo = document.getElementById('charStats-mood-point-2');
const moodTree = document.getElementById('charStats-mood-point-3');
const moodFour = document.getElementById('charStats-mood-point-4');



////////////LINEE ALTERA STATISTICA GIOCATORE//////////////
const heartAlter1 = document.getElementById('h-stat-1');
const heartAlter2 = document.getElementById('h-stat-2');
const heartAlter3 = document.getElementById('h-stat-3');
const heartAlter4 = document.getElementById('h-stat-4');

const foodAlter1 = document.getElementById('f-stat-1');
const foodAlter2 = document.getElementById('f-stat-2');
const foodAlter3 = document.getElementById('f-stat-3');
const foodAlter4 = document.getElementById('f-stat-4');

const moodAlter1 = document.getElementById('m-stat-1');
const moodAlter2 = document.getElementById('m-stat-2');
const moodAlter3 = document.getElementById('m-stat-3');
const moodAlter4 = document.getElementById('m-stat-4');



///VISUALIZZAZIONE STATISTICHE GIOCATORE//////////////////
function showStatsChar(){
    charChoiceUi.classList.remove('charStats-choice--active');
    alteredCharUi.classList.remove('alteredStats--active');
    charStatsUi.classList.add('charStats--active');
}
function showChoicheChar(){
    charStatsUi.classList.remove('charStats--active');
    charChoiceUi.classList.add('charStats-choice--active');
}



///CAMBIO STATISTICHE GIOCATORE//////////////////
function changeCharStats(type,loss,number){
    slideFX.play();
    charStatsUi.classList.remove('charStats--active');
    alteredCharUi.classList.add('alteredStats--active');

    let statsType;

    //cambio statistiche salute nella ui alterazione
    if(type === 'heart'){
        statsType = document.getElementById('altered-heart');
        
        //gestisco perdo punti statistica
            if (number===1){
                //ui giocatore
                if(loss === true){
                    heartOne.classList.add('charStats-stats--hide');
                } else{
                    addStatsToChar(type,number);
                }    
                
                //ui alterazione
                heartAlter1.classList.add('alter-blink');

                setTimeout(function(){ showStatsChar(); }, 3000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===2){
                //ui giocatore
                if(loss === true){
                    heartOne.classList.add('charStats-stats--hide');
                    heartTwo.classList.add('charStats-stats--hide');
                } else {
                    addStatsToChar(type,number);                    
                }

                //ui alterazione
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');

                setTimeout(function(){ showStatsChar(); }, 3000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===3){
                //ui giocatore
                if(loss === true){ 
                    heartOne.classList.add('charStats-stats--hide');
                    heartTwo.classList.add('charStats-stats--hide');
                    heartTree.classList.add('charStats-stats--hide');
                }  else {
                    addStatsToChar(type,number);
                }  

                //ui alterazione
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');


                setTimeout(function(){ showStatsChar(); }, 3000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===4){
                //ui giocatore
                if(loss === true){ 
                    heartOne.classList.add('charStats-stats--hide');
                    heartTwo.classList.add('charStats-stats--hide');
                    heartTree.classList.add('charStats-stats--hide');
                    heartFour.classList.add('charStats-stats--hide');
                } else {
                    addStatsToChar(type,number);                  
                }   

                //ui alterazione                    
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');
                heartAlter4.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 3000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }

    }

    //cambio statistiche fame nella ui alterazione
    if(type === 'food'){
        statsType = document.getElementById('altered-hungry');

        if (number===1){
            //ui giocatore
            if(loss === true){
                hungryOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToChar(type,number);
            }

            //ui alterazione
            foodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                hungryOne.classList.add('charStats-stats--hide');
                hungryTwo.classList.add('charStats-stats--hide');
            } else {
                addStatsToChar(type,number);
            }    

            //ui alterazione            
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                hungryOne.classList.add('charStats-stats--hide');
                hungryTwo.classList.add('charStats-stats--hide');
                hungryTree.classList.add('charStats-stats--hide');
            } else {
                addStatsToChar(type,number);                
            }


            //ui alterazione              
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                hungryOne.classList.add('charStats-stats--hide');
                hungryTwo.classList.add('charStats-stats--hide');
                hungryTree.classList.add('charStats-stats--hide');
                hungryFour.classList.add('charStats-stats--hide');
            }   else {
                addStatsToChar(type,number);
            } 

            //ui alterazione             
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            foodAlter4.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
    }

    //cambio statistiche mood nella ui alterazione
    if(type === 'mood'){
        statsType = document.getElementById('altered-mood');

        if (number===1){
            //ui giocatore
            if(loss === true){
                moodOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToChar(type,number);
            }

            //ui alterazione 
            moodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                moodOne.classList.add('charStats-stats--hide');
                moodTwo.classList.add('charStats-stats--hide');
            }   else {
                addStatsToChar(type,number);
            } 

            //ui alterazione 
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                moodOne.classList.add('charStats-stats--hide');
                moodTwo.classList.add('charStats-stats--hide');
                moodTree.classList.add('charStats-stats--hide');
            }  else {
                addStatsToChar(type,number);
            }  

            //ui alterazione             
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            moodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                moodOne.classList.add('charStats-stats--hide');
                moodTwo.classList.add('charStats-stats--hide');
                moodTree.classList.add('charStats-stats--hide');
                moodFour.classList.add('charStats-stats--hide');
            } else {
                addStatsToChar(type,number);
            }

            //ui alterazione              
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            moodAlter3.classList.add('alter-blink');
            moodAlter4.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 3000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
    }
}

//funzione callback per aumentare in modo ordinato la statistica del giocatore
function addStatsToChar(type,number){
    let decr = number;

    //aggiungo punti
    if (type === 'heart'){

        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#charStats-heart-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(heartFour.classList.contains('charStats-stats--hide')){
                heartFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(heartTree.classList.contains('charStats-stats--hide')){
                heartTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(heartTwo.classList.contains('charStats-stats--hide')){
                heartTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(heartOne.classList.contains('charStats-stats--hide')){
                heartOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                return;
            }     
        }
    }
    if (type === 'food'){
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#charStats-hungry-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(hungryFour.classList.contains('charStats-stats--hide')){
                hungryFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(hungryTree.classList.contains('charStats-stats--hide')){
                hungryTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(hungryTwo.classList.contains('charStats-stats--hide')){
                hungryTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(hungryOne.classList.contains('charStats-stats--hide')){
                hungryOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }
    if (type === 'mood'){     
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#charStats-mood-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }
         
        while (decr > 0) {
            if(moodFour.classList.contains('charStats-stats--hide')){
                moodFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(moodTree.classList.contains('charStats-stats--hide')){
                moodTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(moodTwo.classList.contains('charStats-stats--hide')){
                moodTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(moodOne.classList.contains('charStats-stats--hide')){
                moodOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }        
}

function removeBlinkalter(){
    heartAlter1.classList.remove('alter-blink');
    heartAlter2.classList.remove('alter-blink');
    heartAlter3.classList.remove('alter-blink');
    heartAlter4.classList.remove('alter-blink');
    foodAlter1.classList.remove('alter-blink');
    foodAlter2.classList.remove('alter-blink');
    foodAlter3.classList.remove('alter-blink');
    foodAlter4.classList.remove('alter-blink');
    moodAlter1.classList.remove('alter-blink');
    moodAlter2.classList.remove('alter-blink');
    moodAlter3.classList.remove('alter-blink');
    moodAlter4.classList.remove('alter-blink');
}
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ConfettiGenerator=t()}(this,function(){"use strict";return function(e){var a={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(e&&(e.target&&(a.target=e.target),e.max&&(a.max=e.max),e.size&&(a.size=e.size),null!=e.animate&&(a.animate=e.animate),null!=e.respawn&&(a.respawn=e.respawn),e.props&&(a.props=e.props),e.colors&&(a.colors=e.colors),e.clock&&(a.clock=e.clock),null!=e.start_from_edge&&(a.start_from_edge=e.start_from_edge),e.width&&(a.width=e.width),e.height&&(a.height=e.height),null!=e.rotate&&(a.rotate=e.rotate)),"object"!=typeof a.target&&"string"!=typeof a.target)throw new TypeError("The target parameter should be a node or string");if("object"==typeof a.target&&(null===a.target||!a.target instanceof HTMLCanvasElement)||"string"==typeof a.target&&(null===document.getElementById(a.target)||!document.getElementById(a.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var t="object"==typeof a.target?a.target:document.getElementById(a.target),o=t.getContext("2d"),r=[];function n(e,t){e=e||1;var r=Math.random()*e;return t?Math.floor(r):r}var i=a.props.reduce(function(e,t){return e+(t.weight||1)},0);function s(){var e=a.props[function(){for(var e=Math.random()*i,t=0;t<a.props.length;++t){var r=a.props[t].weight||1;if(e<r)return t;e-=r}}()];return{prop:e.type?e.type:e,x:n(a.width),y:a.start_from_edge?a.clock<0?parseFloat(a.height)+10:-10:n(a.height),src:e.src,radius:n(4)+1,size:e.size,rotate:a.rotate,line:Math.floor(n(65)-30),angles:[n(10,!0)+2,n(10,!0)+2,n(10,!0)+2,n(10,!0)+2],color:a.colors[n(a.colors.length,!0)],rotation:n(360,!0)*Math.PI/180,speed:n(a.clock/7)+a.clock/30}}function l(e){if(e)switch(o.fillStyle=o.strokeStyle="rgba("+e.color+", "+(3<e.radius?.8:.4)+")",o.beginPath(),e.prop){case"circle":o.moveTo(e.x,e.y),o.arc(e.x,e.y,e.radius*a.size,0,2*Math.PI,!0),o.fill();break;case"triangle":o.moveTo(e.x,e.y),o.lineTo(e.x+e.angles[0]*a.size,e.y+e.angles[1]*a.size),o.lineTo(e.x+e.angles[2]*a.size,e.y+e.angles[3]*a.size),o.closePath(),o.fill();break;case"line":o.moveTo(e.x,e.y),o.lineTo(e.x+e.line*a.size,e.y+5*e.radius),o.lineWidth=2*a.size,o.stroke();break;case"square":o.save(),o.translate(e.x+15,e.y+5),o.rotate(e.rotation),o.fillRect(-15*a.size,-5*a.size,15*a.size,5*a.size),o.restore();break;case"svg":o.save();var t=new window.Image;t.src=e.src;var r=e.size||15;o.translate(e.x+r/2,e.y+r/2),e.rotate&&o.rotate(e.rotation),o.drawImage(t,-r/2*a.size,-r/2*a.size,r*a.size,r*a.size),o.restore()}}function c(){a.animate=!1,clearInterval(a.interval),requestAnimationFrame(function(){o.clearRect(0,0,t.width,t.height);var e=t.width;t.width=1,t.width=e})}return{render:function(){t.width=a.width,t.height=a.height,r=[];for(var e=0;e<a.max;e++)r.push(s());return requestAnimationFrame(function e(){for(var t in o.clearRect(0,0,a.width,a.height),r)l(r[t]);!function(){for(var e=0;e<a.max;e++){var t=r[e];t&&(a.animate&&(t.y+=t.speed),t.rotate&&(t.rotation+=t.speed/35),(0<=t.speed&&a.height<t.y||t.speed<0&&t.y<0)&&(a.respawn?(r[e]=t,r[e].x=n(a.width,!0),r[e].y=t.speed<0?parseFloat(a.height):-10):r[e]=void 0))}r.every(function(e){return void 0===e})&&c()}(),a.animate&&requestAnimationFrame(e)})},clear:c}}});

////////////TRIGGER DIALOGO//////////////
const dialog = document.getElementById('dialogs');
let dialogNum = 0;
let IsdialogActive;

function StartDialog(){
    //creo box dialogo
    dialog.classList.add('dialogs--active')
    var dialogBox = document.createElement('div');
    var dialogBack = document.createElement('div');
    if(dialogJSON.inizio[0][0].char == 'main'){
        dialogBox.classList.add('dialog-char');
        dialogBack.classList.add('dialog-char-back');
    } else{
        dialogBox.classList.add('dialog-npc');
        dialogBack.classList.add('dialog-npc-back');
    }
    dialogBox.classList.add('dialog');
    dialogBox.classList.add('dialog--active');

    //inserisco il testo
    dialogBox.innerHTML= dialogJSON.inizio[0][0].line;
    dialogBox.appendChild(dialogBack);
    
    //inserisco il box di dialogo dentro al contenitore
    dialog.appendChild(dialogBox);

    //incremento la linea di dialogo e segnalo il dialogo attivo
    dialogNum++

    IsdialogActive = document.querySelectorAll('.dialog--active');
    
}

var dialogJSON = {
  "inizio": [
      [     
        {"char": "main","line":"dove diavolo sono?"},
        {"char": "main","line":"non pensavo che il dentista avesse uno studio così di merda..."},
        {"char": "npc","line":"non sei dal dentista amico..."},
        {"char": "main","line":"chi parla? l'assistente?"},
        {"char": "main","line":"non hai una voce femminile"},
        {"char": "npc","line":"non fare il sessista"},
      ],
      [
          {"char": "main","line":"che.. cazzo.."},
          {"char": "main","line":"...mi hanno addormentato?"},
          {"char": "npc","line":"...facci il callo bellezza..."},
          {"char": "npc","line":"...ogni giorno sarà così..."},
          {"char": "npc","line":"...io la prendo con filosofia..."},
        ]
    ]    
  };
////////////STATISTICHE NEMICO//////////////
const enemyStatsUi = document.getElementById('enemyStats');
const alteredEnemUi = document.getElementById('alteredStatsEnem');

const heartEnemOne = document.getElementById('enemyStats-heart-point-1');
const heartEnemTwo = document.getElementById('enemyStats-heart-point-2');
const heartEnemTree = document.getElementById('enemyStats-heart-point-3');
const heartEnemFour = document.getElementById('enemyStats-heart-point-4');
const hungryEnemOne = document.getElementById('enemyStats-hungry-point-1');
const hungryEnemTwo = document.getElementById('enemyStats-hungry-point-2');
const hungryEnemTree = document.getElementById('enemyStats-hungry-point-3');
const hungryEnemFour = document.getElementById('enemyStats-hungry-point-4');
const moodEnemOne = document.getElementById('enemyStats-mood-point-1');
const moodEnemTwo = document.getElementById('enemyStats-mood-point-2');
const moodEnemTree = document.getElementById('enemyStats-mood-point-3');
const moodEnemFour = document.getElementById('enemyStats-mood-point-4');

////////////LINEE ALTERA STATISTICA NEMICO//////////////
const heartEAlter1 = document.getElementById('h-estat-1');
const heartEAlter2 = document.getElementById('h-estat-2');
const heartEAlter3 = document.getElementById('h-estat-3');
const heartEAlter4 = document.getElementById('h-estat-4');

const foodEAlter1 = document.getElementById('f-estat-1');
const foodEAlter2 = document.getElementById('f-estat-2');
const foodEAlter3 = document.getElementById('f-estat-3');
const foodEAlter4 = document.getElementById('f-estat-4');

const moodEAlter1 = document.getElementById('m-estat-1');
const moodEAlter2 = document.getElementById('m-estat-2');
const moodEAlter3 = document.getElementById('m-estat-3');
const moodEAlter4 = document.getElementById('m-estat-4');

////////////MOSTRA STATISTICHE NEMICO///////////
function showEnemyStats(){
    enemyStatsUi.classList.add('enemyStats--active');
    alteredEnemUi.classList.remove('alteredStats--active');
}

function hideEnemyStats(){
    enemyStatsUi.classList.remove('enemyStats--active');
}

///CAMBIO STATISTICHE NEMICO//////////////////
function changeEnemStats(type,loss,number){
    slideFX.play();
    enemyStatsUi.classList.remove('enemyStats--active');
    alteredEnemUi.classList.add('alteredStats--active');

    let statsType;

    //cambio statistiche salute nella ui alterazione
    if(type === 'heart'){
        statsType = document.getElementById('altered-heart');
        
        //gestisco perdo punti statistica
            if (number===1){
                //ui giocatore
                if(loss === true){
                    heartEnemOne.classList.add('charStats-stats--hide');
                } else{
                    addStatsToEnem(type,number);
                }    
                
                //ui alterazione
                heartEAlter1.classList.add('alter-blink');

                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===2){
                //ui giocatore
                if(loss === true){
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                } else {
                    addStatsToEnem(type,number);                    
                }

                //ui alterazione
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');

                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===3){
                //ui giocatore
                if(loss === true){ 
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                    heartEnemTree.classList.add('charStats-stats--hide');
                }  else {
                    addStatsToEnem(type,number);
                }  

                //ui alterazione
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');
                heartEAlter3.classList.add('alter-blink');


                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===4){
                //ui giocatore
                if(loss === true){ 
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                    heartEnemTree.classList.add('charStats-stats--hide');
                    heartEnemFour.classList.add('charStats-stats--hide');
                } else {
                    addStatsToEnem(type,number);                  
                }   

                //ui alterazione                    
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');
                heartEAlter3.classList.add('alter-blink');
                heartEAlter4.classList.add('alter-blink');
                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }

    }

    //cambio statistiche fame nella ui alterazione
    if(type === 'food'){
        statsType = document.getElementById('altered-hungry');

        if (number===1){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione
            foodEAlter1.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }    

            //ui alterazione            
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
                hungryEnemTree.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);                
            }


            //ui alterazione              
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            foodEAlter3.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
                hungryEnemTree.classList.add('charStats-stats--hide');
                hungryEnemFour.classList.add('charStats-stats--hide');
            }   else {
                addStatsToEnem(type,number);
            } 

            //ui alterazione             
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            foodEAlter3.classList.add('alter-blink');
            foodEAlter4.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
    }

    //cambio statistiche mood nella ui alterazione
    if(type === 'mood'){
        statsType = document.getElementById('altered-mood');

        if (number===1){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione 
            moodEAlter1.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
            }   else {
                addStatsToEnem(type,number);
            } 

            //ui alterazione 
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
                moodEnemTree.classList.add('charStats-stats--hide');
            }  else {
                addStatsToEnem(type,number);
            }  

            //ui alterazione             
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            moodEAlter3.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
                moodEnemTree.classList.add('charStats-stats--hide');
                moodEnemFour.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione              
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            moodEAlter3.classList.add('alter-blink');
            moodEAlter4.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
    }
}

//funzione callback per aumentare in modo ordinato la statistica del giocatore
function addStatsToEnem(type,number){
    let decr = number;

    //aggiungo punti
    if (type === 'heart'){

        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-heart-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(heartEnemFour.classList.contains('charStats-stats--hide')){
                heartEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(heartEnemTree.classList.contains('charStats-stats--hide')){
                heartEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(heartEnemTwo.classList.contains('charStats-stats--hide')){
                heartEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(heartEnemOne.classList.contains('charStats-stats--hide')){
                heartEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                return;
            }     
        }
    }
    if (type === 'food'){
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-hungry-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(hungryEnemFour.classList.contains('charStats-stats--hide')){
                hungryEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(hungryEnemTree.classList.contains('charStats-stats--hide')){
                hungryEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(hungryEnemTwo.classList.contains('charStats-stats--hide')){
                hungryEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(hungryEnemOne.classList.contains('charStats-stats--hide')){
                hungryEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }
    if (type === 'mood'){     
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-mood-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }
         
        while (decr > 0) {
            if(moodEnemFour.classList.contains('charStats-stats--hide')){
                moodEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(moodEnemTree.classList.contains('charStats-stats--hide')){
                moodEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(moodEnemTwo.classList.contains('charStats-stats--hide')){
                moodEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(moodEnemOne.classList.contains('charStats-stats--hide')){
                moodEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }        
}

function removeBlinkEnemalter(){
    heartEAlter1.classList.remove('alter-blink');
    heartEAlter2.classList.remove('alter-blink');
    heartEAlter3.classList.remove('alter-blink');
    heartEAlter4.classList.remove('alter-blink');
    foodEAlter1.classList.remove('alter-blink');
    foodEAlter2.classList.remove('alter-blink');
    foodEAlter3.classList.remove('alter-blink');
    foodEAlter4.classList.remove('alter-blink');
    moodEAlter1.classList.remove('alter-blink');
    moodEAlter2.classList.remove('alter-blink');
    moodEAlter3.classList.remove('alter-blink');
    moodEAlter4.classList.remove('alter-blink');
}


var selectFX = new Audio("../ui/music/select.mp3");
var slideFX = new Audio("../ui/music/slide.mp3");
////////////BOX SELEZIONE OGGETTI//////////////
const boxOggetto = document.getElementById('objSelector');

function showBoxObjects(){
    boxOggetto.classList.add('objSelector--active');
}
function hideBoxObjects(){
    boxOggetto.classList.remove('objSelector--active');
}

///// VARIABILI OGGETTI /////
const salsiccia = ['la salsiccia','../ui/img/object-salsiccia.svg','../ui/img/hungry-statistic.svg'];


////////////OGGETTO SELEZIONATO//////////////
const objObtained = document.getElementById('objSelected');
const objImageSelected = document.getElementById('objSelected-in');
const objImageConfetti = document.getElementById('objSelected-image--confetti');
const objObtainedIcon = document.getElementById('objSelected-description-icon');

const lineSx1 = document.getElementById('line-2-sx').getElementsByClassName("line-2-sx")[0];
const lineSx2 = document.getElementById('line-3-sx').getElementsByClassName("line-3-sx")[0];
const lineSx3 = document.getElementById('line-4-sx').getElementsByClassName("line-4-sx")[0];
const lineDx1 = document.getElementById('line-1-dx').getElementsByClassName("line-1-dx")[0];
const lineDx2 = document.getElementById('line-2-dx').getElementsByClassName("line-3-sx")[0];
const lineDx3 = document.getElementById('line-3-dx').getElementsByClassName("line-4-dx")[0];

const objSelectedStats = document.getElementById('objSelected-description-icon');

var confettiSettings = { target: 'objSelected-image--confetti' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function showBoxObjSelected(){
    objObtained.classList.add('objSelected--active');
    objImageSelected.classList.add('animation-obj');
    objImageConfetti.classList.add('animation-confetti');

    lineSx1.classList.add('animation-line');
    lineSx3.classList.add('animation-line');
    lineDx1.classList.add('animation-line');
    lineDx3.classList.add('animation-line');

    lineSx2.classList.add('animation-line2');
    lineDx2.classList.add('animation-line2');

    setTimeout(function(){
        objObtainedIcon.classList.add('objSelected-description-icon--active');
    }, 1000);
     setTimeout(function(){
        removeBoxObjSelected();
    }, 2000);
};

function removeBoxObjSelected(){
    objObtained.classList.remove('objSelected--active');
    objImageSelected.classList.remove('animation-obj');
    objImageConfetti.classList.remove('animation-confetti');

    lineSx1.classList.remove('animation-line');
    lineSx3.classList.remove('animation-line');
    lineDx1.classList.remove('animation-line');
    lineDx3.classList.remove('animation-line');

    lineSx2.classList.remove('animation-line2');
    lineDx2.classList.remove('animation-line2');

    objObtainedIcon.classList.remove('objSelected-description-icon--active');
}
