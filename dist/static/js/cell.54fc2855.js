webpackJsonp([5],{122:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}();l(132);var o=l(2),c=a(o),d=(l(86),l(20)),i=a(d),m=l(18),E=a(m),p=l(130),s=a(p),y=l(19),b=a(y),h=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e,to:"http://www.baidu.com"},c.default.createElement(E.default.Row.Header,null,c.default.createElement("span",{className:"space"})),c.default.createElement(E.default.Row.Body,null,c.default.createElement("h6",null,"列表的大标题，可以是产品名称等"),c.default.createElement("span",null,"产品的描述性文字")))}))},w=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e},c.default.createElement(E.default.Row.Header,null,c.default.createElement("span",{className:"space"})),c.default.createElement(E.default.Row.Body,null,c.default.createElement("h6",null,"列表的大标题，可以是产品名称等"),c.default.createElement("span",null,"产品的描述性文字")),c.default.createElement(E.default.Row.Footer,null,c.default.createElement(s.default,{price:"199.00"}),c.default.createElement("small",null,"共2件")))}))},_=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e},c.default.createElement(E.default.Row.Body,null,c.default.createElement("h6",null,"标题文字")),c.default.createElement(E.default.Row.Footer,null,c.default.createElement("span",null,"说明描述")))}))},v=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e,header:c.default.createElement(b.default,{name:"home"}),body:c.default.createElement("h6",null,"标题文字"),footer:"说明描述",to:"/"})}))},R=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e,checkbox:!0,checked:1==e,body:c.default.createElement("h6",null,"标题文字")})}))},O=function(){return c.default.createElement(E.default,null,[1,2,3].map(function(e){return c.default.createElement(E.default.Row,{key:e,radio:!0,checked:1==e,body:c.default.createElement("h6",null,"标题文字")})}))},k=function(){return c.default.createElement(E.default,null,c.default.createElement(E.default.Row,{header:c.default.createElement("label",null,"单行文本"),body:c.default.createElement("input",{type:"text",placeholder:"请输入"})}),c.default.createElement(E.default.Row,{vstart:!0,header:c.default.createElement("label",null,"多行文本"),body:c.default.createElement("textarea",{placeholder:"请输入"})}))},j=function(){return c.default.createElement(E.default,null,c.default.createElement(E.default.Row,{arrow:!0,header:c.default.createElement("label",null,"下拉菜单"),body:c.default.createElement("select",null,c.default.createElement("option",{value:""},"请选择"),c.default.createElement("option",{value:"2"},"下拉菜单A"),c.default.createElement("option",{value:"3"},"下拉菜单B"),c.default.createElement("option",{value:"4"},"下拉菜单C"))}))},T=function(){return c.default.createElement(E.default,null,c.default.createElement(E.default.Row,{header:"头部",body:"主体",footer:"尾部"}),c.default.createElement(E.default.Row,{header:c.default.createElement("span",{className:"space"}),body:c.default.createElement("h6",null,"标题文字"),footer:c.default.createElement("span",null,"描述文字")}))},g=function(e){function t(e){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),f(t,[{key:"render",value:function(){return c.default.createElement(i.default,null,c.default.createElement(i.default.Header,{title:"列表",start:c.default.createElement("a",{onClick:this.props.router.goBack},c.default.createElement(b.default,{name:"back"}),"返回")}),c.default.createElement(i.default.Body,null,c.default.createElement(E.default.Title,{title:"带链接的商品列表"}),c.default.createElement(h,null),c.default.createElement(E.default.Title,{title:"带购买信息的商品列表"}),c.default.createElement(w,null),c.default.createElement(E.default.Title,{title:"带说明的列表"}),c.default.createElement(_,null),c.default.createElement(E.default.Title,{title:"带说明的链接列表"}),c.default.createElement(v,null),c.default.createElement(E.default.Title,{title:"单选框"}),c.default.createElement(R,null),c.default.createElement(E.default.Title,{title:"多选框"}),c.default.createElement(O,null),c.default.createElement(E.default.Title,{title:"文本框"}),c.default.createElement(k,null),c.default.createElement(E.default.Title,{title:"下拉菜单"}),c.default.createElement(j,null),c.default.createElement(E.default.Title,{title:"简写方式"}),c.default.createElement(T,null)))}}]),t}(o.Component);t.default=g},130:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}();l(141);var o=l(2),c=a(o),d=l(11),i=a(d),m=function(e){function t(e){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),f(t,[{key:"render",value:function(){var e=(0,i.default)("x-rmb",{"x-rmb--gray":this.props.gray},this.props.className);return c.default.createElement("h6",{className:e},this.props.price)}}]),t}(o.Component);t.default=m},132:136,141:136});