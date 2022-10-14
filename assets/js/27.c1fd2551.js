(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{419:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("p",[t._v("The JavaScript version of the MetaMask SDK enables all JavaScript-based apps to easily connect with a MetaMask wallet client. It supports:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-react.html"}},[t._v("React")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-other-frameworks.html"}},[t._v("Other web frameworks")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-pure-javascript.html"}},[t._v("Pure javascript")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-react-native.html"}},[t._v("React Native")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-nodejs.html"}},[t._v("NodeJS")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-electron.html"}},[t._v("Electron")])],1)]),t._v(" "),s("p",[t._v("To install, import, instantiate and use the SDK, see the "),s("a",{attrs:{href:"#getting-started"}},[t._v("getting started section")]),t._v(". Deviations from the standard are highlighted on each of the supported frameworks.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("h3",{attrs:{id:"_1-install-a-metamask-mobile-version-compatible-with-the-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-a-metamask-mobile-version-compatible-with-the-sdk"}},[t._v("#")]),t._v(" 1. Install a MetaMask Mobile version compatible with the SDK")]),t._v(" "),s("p",[t._v("In order to test the MetaMask SDK, developers need access to a MetaMask Mobile build that is compatible with the SDK.")]),t._v(" "),s("h3",{attrs:{id:"_2-install-the-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-sdk"}},[t._v("#")]),t._v(" 2. Install the SDK")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @metamask/sdk\nor\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @metamask/sdk\n")])])]),s("h3",{attrs:{id:"_3-import-the-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-import-the-sdk"}},[t._v("#")]),t._v(" 3. Import the SDK")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MetaMaskSDK "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@metamask/sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-instantiate-the-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-instantiate-the-sdk"}},[t._v("#")]),t._v(" 4. Instantiate the SDK")]),t._v(" "),s("p",[t._v("For all Javascript-based apps, instantiate the SDK like this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MMSDK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MetaMaskSDK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ethereum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MMSDK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can also access via window.ethereum")]),t._v("\n")])])]),s("p",[t._v("For a list of possible "),s("code",[t._v("options")]),t._v(" check "),s("RouterLink",{attrs:{to:"/metamask-sdk-js/metamask-sdk-js-options.html"}},[t._v("here")])],1),t._v(" "),s("h3",{attrs:{id:"_5-use-the-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-use-the-sdk"}},[t._v("#")]),t._v(" 5. Use the SDK")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You should always call "),s("code",[t._v("eth_requestAccounts")]),t._v(" first!")]),t._v(" "),s("p",[t._v("For possible methods, check "),s("RouterLink",{attrs:{to:"/ethereum-provider.html"}},[t._v("the Ethereum Provider API")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);