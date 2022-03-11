!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("InputCount",[],t):"object"==typeof exports?exports.InputCount=t():e.InputCount=t()}(this,(function(){return(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>m}),require("antd/lib/input/style/css");const r=require("antd/lib/input");var n=e.n(r);const o=require("react");var a=e.n(o);const u=require("prop-types");var l=e.n(u),i=["inputType","maxLimit","onChange","defaultValue"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=n().TextArea,b=(0,o.forwardRef)((function(e,t){var r=e.inputType,u=e.maxLimit,l=e.onChange,s=e.defaultValue,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),m=f((0,o.useState)(0),2),d=m[0],g=m[1],O=f((0,o.useState)(""),2),v=O[0],h=O[1];(0,o.useEffect)((function(){g(s?s.length:0),h(v)}),[s]);var j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({maxLength:u||null,suffix:u?a().createElement("span",null,a().createElement("span",{style:{opacity:"0.45"}},d),"/".concat(u)):null,onChange:function(e){!function(e){h(e.target.value),g(e.target.value.length),l(e.target.value)}(e)},defaultValue:s},b);return"textarea"===r?a().createElement("div",{style:{position:"relative"}},a().createElement(y,j),a().createElement("span",{style:{right:"10px",bottom:"5px",lineHeight:"20px",position:"absolute"}},a().createElement("span",{style:{opacity:"0.45"}},d),"/".concat(u))):a().createElement(a().Fragment,null,a().createElement(n(),j))}));b.defaultProps={inputType:"input",maxLimit:"",onChange:function(){},placeholder:""},b.propTypes={inputType:l().string,maxLimit:l().number,onChange:l().func,placeholder:l().string};const m=a().memo(b);return t})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vSW5wdXRDb3VudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW5wdXRDb3VudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbnB1dENvdW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0lucHV0Q291bnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0lucHV0Q291bnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9JbnB1dENvdW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSW5wdXRDb3VudC9leHRlcm5hbCBjb21tb25qcyBcImFudGQvbGliL2lucHV0L3N0eWxlL2Nzc1wiIiwid2VicGFjazovL0lucHV0Q291bnQvZXh0ZXJuYWwgY29tbW9uanMgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovL0lucHV0Q291bnQvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL0lucHV0Q291bnQvZXh0ZXJuYWwgY29tbW9uanMgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vSW5wdXRDb3VudC8uL3NyYy9JbnB1dENvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSW5wdXRDb3VudFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJbnB1dENvdW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklucHV0Q291bnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dC9zdHlsZS9jc3NcIik7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcInJlYWN0XCIpOyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgZm9yd2FyZFJlZiAgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XG5cbmNvbnN0IElucHV0Q291bnQgPSBmb3J3YXJkUmVmKCh7XG4gIGlucHV0VHlwZSxcbiAgbWF4TGltaXQsXG4gIG9uQ2hhbmdlLFxuICBkZWZhdWx0VmFsdWUsXG4gIC4uLm90aGVyUHJvcHNcbn0sIHJlZikgPT4ge1xuXHRjb25zdCBbY3VyTnVtLCBzZXRDdXJOdW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1ck51bShkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUubGVuZ3RoIDogMCk7XG4gICAgc2V0VmFsdWUodmFsdWUpXG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcblxuICBjb25zdCBvbkNoYW5nZXMgPSBlID0+IHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Q3VyTnVtKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCk7XG4gICAgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBJbnB1dENvdW50UHJvcHMgPSB7XG4gICAgbWF4TGVuZ3RoOiBtYXhMaW1pdCB8fCBudWxsLFxuICAgIHN1ZmZpeDogbWF4TGltaXQgPyAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogJzAuNDUnIH19PntjdXJOdW19PC9zcGFuPlxuICAgICAgICB7YC8ke21heExpbWl0fWB9XG4gICAgICA8L3NwYW4+XG4gICAgKSA6IG51bGwsXG4gICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICBvbkNoYW5nZXMoZSk7XG4gICAgfSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9O1xuICBpZiAoaW5wdXRUeXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxUZXh0QXJlYSB7Li4uSW5wdXRDb3VudFByb3BzfSAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXsoeyByaWdodDogJzEwcHgnLCBib3R0b206ICc1cHgnLCBsaW5lSGVpZ2h0OiAnMjBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogJzAuNDUnIH19PntjdXJOdW19PC9zcGFuPlxuICAgICAgICAgIHtgLyR7bWF4TGltaXR9YH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5wdXQgey4uLklucHV0Q291bnRQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn0pXG5cbklucHV0Q291bnQuZGVmYXVsdFByb3BzID0ge1xuICBpbnB1dFR5cGU6ICdpbnB1dCcsXG4gIG1heExpbWl0OiAnJyxcbiAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgcGxhY2Vob2xkZXI6ICcnLFxufTtcblxuSW5wdXRDb3VudC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0VHlwZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4TGltaXQ6IHByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKElucHV0Q291bnQpO1xuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInRoaXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsIklucHV0Q291bnQiLCJmb3J3YXJkUmVmIiwicmVmIiwiaW5wdXRUeXBlIiwibWF4TGltaXQiLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsIm90aGVyUHJvcHMiLCJ1c2VTdGF0ZSIsImN1ck51bSIsInNldEN1ck51bSIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiSW5wdXRDb3VudFByb3BzIiwibWF4TGVuZ3RoIiwic3VmZml4Iiwic3R5bGUiLCJvcGFjaXR5IiwiZSIsInRhcmdldCIsIm9uQ2hhbmdlcyIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJsaW5lSGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwicGxhY2Vob2xkZXIiLCJwcm9wVHlwZXMiLCJSZWFjdCJdLCJzb3VyY2VSb290IjoiIn0=