webpackJsonp([7],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),l=n(14),i=n(11),f=r(i),a=n(354),c=r(a),s=n(355),d=r(s);(0,l.render)(u.default.createElement(f.default,{algorithm:c.default}),document.getElementById("cologne-mount")),(0,l.render)(u.default.createElement(f.default,{algorithm:d.default}),document.getElementById("phonem-mount"))},5:function(e,t,n){"use strict";var r=n(15),o=r.Symbol;e.exports=o},6:function(e,t,n){"use strict";function r(e){return e=u(e),e&&e.replace(l,o).replace(d,"")}var o=n(34),u=n(29),l=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u0300-\\u036f",f="\\ufe20-\\ufe2f",a="\\u20d0-\\u20ff",c=i+f+a,s="["+c+"]",d=RegExp(s,"g");e.exports=r},7:function(e,t){"use strict";function n(e,t){var n=[];if(!e.global){var r=e.exec(t);return r&&n.push(r),n}for(var o=void 0;o=e.exec(t);)n.push(o);return e.lastIndex=0,n}function r(e){return"string"==typeof e?e.split(""):e}function o(e){for(var t="string"==typeof e,n=r(e),o=[n[0]],u=1,l=n.length;u<l;u++)n[u]!==n[u-1]&&o.push(n[u]);return t?o.join(""):o}function u(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,o=e.length;r<o;r++)n[e[r]]=t[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.seq=r,t.squeeze=o,t.translation=u},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),l=n(13),i=n(12),f=r(i),a=function(e){return e},c=function(e,t){return e===t},s=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),d=s(function(e){var t=e.algorithm,n=e.codeRenderer,r=void 0===n?a:n,o=e.comparator,l=void 0===o?c:o,i=e.wordOne,s=e.wordTwo,d=e.setWordOne,p=e.setWordTwo,y=i?t(i):null,g=s?t(s):null,m=y?r(y):"",v=g?r(g):"",h="·",b="default";return y&&g&&(console.log(y,g),l(y,g)?(h="=~",b="success"):(h="!~",b="error")),u.default.createElement("table",null,u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,u.default.createElement(f.default,{placeholder:"Word 1",value:i,onChange:function(e){return d(e.target.value)},status:b})),u.default.createElement("td",{style:{width:"15%",textAlign:"center"}},u.default.createElement("strong",null,h)),u.default.createElement("td",null,u.default.createElement(f.default,{placeholder:"Word 2",value:s,onChange:function(e){return p(e.target.value)},status:b}))),u.default.createElement("tr",null,u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "),u.default.createElement("td",null),u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "))))});t.default=d},15:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(23),u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,l=o||u||Function("return this")();e.exports=l},18:function(e,t,n){"use strict";function r(e){return null==e?void 0===e?f:i:a&&a in Object(e)?u(e):l(e)}var o=n(5),u=n(24),l=n(25),i="[object Null]",f="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=r},21:function(e,t){"use strict";function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},22:function(e,t,n){"use strict";function r(e){if("string"==typeof e)return e;if(l(e))return u(e,r)+"";if(i(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-f?"-0":t}var o=n(5),u=n(21),l=n(26),i=n(28),f=1/0,a=o?o.prototype:void 0,c=a?a.toString:void 0;e.exports=r},23:function(e,t){(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="object"==("undefined"==typeof t?"undefined":n(t))&&t&&t.Object===Object&&t;e.exports=r}).call(t,function(){return this}())},24:function(e,t,n){"use strict";function r(e){var t=l.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[f]=n:delete e[f]),o}var o=n(5),u=Object.prototype,l=u.hasOwnProperty,i=u.toString,f=o?o.toStringTag:void 0;e.exports=r},25:function(e,t){"use strict";function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},26:function(e,t){"use strict";var n=Array.isArray;e.exports=n},27:function(e,t){"use strict";function n(e){return null!=e&&"object"==("undefined"==typeof e?"undefined":r(e))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=n},28:function(e,t,n){"use strict";function r(e){return"symbol"==("undefined"==typeof e?"undefined":o(e))||l(e)&&u(e)==i}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(18),l=n(27),i="[object Symbol]";e.exports=r},29:function(e,t,n){"use strict";function r(e){return null==e?"":o(e)}var o=n(22);e.exports=r},33:function(e,t){"use strict";function n(e){return function(t){return null==e?void 0:e[t]}}e.exports=n},34:function(e,t,n){"use strict";var r=n(33),o={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},u=r(o);e.exports=u},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/Ä/g,"A").replace(/Ö/g,"O").replace(/Ü/g,"U").replace(/ß/g,"SS").replace(/PH/g,"F")}function u(e){if("string"!=typeof e)throw Error("talisman/phonetics/german/cologne: the given name is not a string.");e=(0,f.default)(o(e.toUpperCase())).replace(/[^A-Z]/g,"");for(var t=[],n=0,r=e.length;n<r;n++){var u=e[n],i=a[u];if(void 0!==i)t.push(i);else if("D"===u||"T"===u)t.push(c.has(e[n+1])?8:2);else if("C"===u){var g=e[n-1],m=e[n+1];!g&&s.has(m)||d.has(m)&&!p.has(g)?t.push(4):t.push(8)}else"X"===u&&t.push(y.has(e[n-1])?8:48)}return t=(0,l.squeeze)(t).filter(function(e,t){return!t||e}),t.join("")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var l=n(7),i=n(6),f=r(i),a={H:null,A:0,E:0,I:0,O:0,U:0,J:0,Y:0,B:1,P:1,F:3,V:3,W:3,G:4,K:4,Q:4,L:5,M:6,N:6,R:7,S:8,Z:8},c=new Set(["C","S","Z"]),s=new Set(["A","H","K","L","O","Q","R","U","X"]),d=new Set(["A","H","K","O","Q","U","X"]),p=new Set(["S","Z"]),y=new Set(["C","Q","K"]);e.exports=t.default},355:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){if("string"!=typeof e)throw Error("talisman/phonetics/german/phonem: the given name is not a string.");for(var t=e.toUpperCase(),n=0,o=l.length;n<o;n++){var a;t=(a=t).replace.apply(a,r(l[n]))}for(var c="",s=0,d=t.length;s<d;s++)c+=i[t[s]]||t[s];c=(0,u.squeeze)(c),t="";for(var p=0,y=c.length;p<y;p++)f.has(c[p])&&(t+=c[p]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),l=[[/(?:SC|SZ|CZ|TZ|TS)/g,"C"],[/KS/g,"X"],[/(?:PF|PH)/g,"V"],[/QU/g,"KW"],[/UE/g,"Y"],[/AE/g,"E"],[/OE/g,"Ö"],[/E[IY]/g,"AY"],[/EU/g,"OY"],[/AU/g,"A§"],[/OU/g,"§"]],i=(0,u.translation)("ZKGQÇÑßFWPTÁÀÂÃÅÄÆÉÈÊËIJÌÍÎÏÜÝ§ÚÙÛÔÒÓÕØ","CCCCCNSVVBDAAAAAEEEEEEYYYYYYYYUUUUOOOOÖ"),f=new Set("ABCDLMNORSUVWXYÖ");e.exports=t.default}});