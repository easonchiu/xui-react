webpackJsonp([1],{250:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(2),i=l(c),f=n(246),p=l(f),s=n(251),d=l(s),m=n(253),h=l(m),y=n(243),b=l(y),E=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=i.default.createElement(p.default,null,[1,2,3].map(function(e){return i.default.createElement(f.CellRow,{key:e},i.default.createElement(f.CellRowHeader,null,i.default.createElement("img",{src:"./src/Assets/Images/headpic.jpeg"})),i.default.createElement(f.CellRowBody,null,i.default.createElement("h6",null,"列表的大标题，可以是产品名称等"),i.default.createElement("span",null,"产品的描述性文字")))})),t=i.default.createElement(p.default,null,i.default.createElement(f.CellRow,null,i.default.createElement(f.CellRowHeader,null,i.default.createElement("label",null,"姓名")),i.default.createElement(f.CellRowBody,null,i.default.createElement("input",{type:"text",placeholder:"请输入"})),i.default.createElement(f.CellRowHeader,null,i.default.createElement("label",null,"性别")),i.default.createElement(f.CellRowBody,null,i.default.createElement("select",null,i.default.createElement("option",{value:"1"},"男"),i.default.createElement("option",{value:"2"},"女")))),i.default.createElement(f.CellRow,null,i.default.createElement(f.CellRowHeader,null,i.default.createElement("label",null,"住址")),i.default.createElement(f.CellRowBody,null,i.default.createElement("input",{type:"text",placeholder:"请输入"}))),i.default.createElement(f.CellRow,null,i.default.createElement(f.CellRowHeader,null,i.default.createElement("label",null,"注册码")),i.default.createElement(f.CellRowBody,null,i.default.createElement("input",{type:"text",placeholder:"请输入"})),i.default.createElement(f.CellRowFooter,null,i.default.createElement(d.default,{type:"primary",mini:!0},"验证"))));return i.default.createElement("div",null,i.default.createElement(f.CellTitle,{title:"模块"}),i.default.createElement(h.default,null,i.default.createElement(m.PanelHeader,null,i.default.createElement("h2",null,"模块名称"),i.default.createElement("a",null,"更多",i.default.createElement(b.default,{name:"right"}))),i.default.createElement(m.PanelBody,null,e),i.default.createElement(m.PanelFooter,null,i.default.createElement("span",null,"底部提示文字"))),i.default.createElement(f.CellTitle,{title:"录入"}),i.default.createElement(h.default,null,i.default.createElement(m.PanelHeader,null,i.default.createElement("h2",null,"模块名称")),i.default.createElement(m.PanelBody,null,t)))}}]),t}(c.Component);t.default=E},251:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();n(252);var c=n(2),i=l(c),f=n(179),p=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.type?"x-button__"+this.props.type:"x-button__default";return this.props.mini&&(e+=" x-button--mini"),this.props.disabled&&(e+=" x-button--disabled"),this.props.to&&void 0==this.props.onClick?i.default.createElement(f.Link,{to:this.props.to,className:e},this.props.children):this.props.onClick?i.default.createElement("a",{onClick:this.props.onClick,className:e},this.props.children):i.default.createElement("a",{className:e},this.props.children)}}]),t}(c.Component);p.propTypes={type:c.PropTypes.string,to:c.PropTypes.string,onClick:c.PropTypes.func};var s=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("menu",{className:"x-button-group"},this.props.children)}}]),t}(c.Component);t.default=p,t.ButtonGroup=s},252:1,253:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PanelFooter=t.PanelBody=t.PanelHeader=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();n(254);var c=n(2),i=l(c),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("section",{className:"x-panel"},this.props.children)}}]),t}(c.Component),p=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("header",{className:"x-panel__header"},this.props.children)}}]),t}(c.Component),s=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"x-panel__body"},this.props.children)}}]),t}(c.Component),d=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("footer",{className:"x-panel__footer"},this.props.children)}}]),t}(c.Component);t.default=f,t.PanelHeader=p,t.PanelBody=s,t.PanelFooter=d},254:1});