(this["webpackJsonpaem-guides-wknd-app"]=this["webpackJsonpaem-guides-wknd-app"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/icon-close.f227c489.svg"},38:function(e,t,a){e.exports=a.p+"static/media/wknd-logo-dk.36593320.svg"},39:function(e,t,a){e.exports=a.p+"static/media/icon-loading.c507a81b.svg"},41:function(e,t,a){e.exports=a(88)},62:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),c=a.n(i),l=a(8),o=a(1),u=a(38),m=a.n(u),s=a(13),d=a(46).AEMHeadless,v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GRAPHQL_ENDPOINT;var p=function(e,t){var a=Object(n.useState)(null),r=Object(s.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){var a=new d(v);(e?a.postQuery.bind(a):a.getQuery.bind(a))(e||t).then((function(e){var t=e.data,a=e.errors;a&&m(function(e){return e.map((function(e){return e.message})).join(",")}(a)),t&&c(t)})).catch((function(e){m(e)}))}),[e,t]),{data:i,errorMessage:u}},E=a(15),g=a(16),h=a(18),f=a(17),T=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"error"},r.a.createElement("span",{className:"error-message"},"Error: ".concat(this.props.errorMessage)))}}]),a}(n.Component),b=a(39),_=a.n(b),O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI,N=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:O+"/"+_.a,alt:"Loading..."}))}}]),a}(n.Component);a(62);function y(e){return e&&e._path&&e.adventureTitle&&e.adventurePrimaryImage?r.a.createElement("li",{className:"adventure-item"},r.a.createElement(l.Link,{to:"/adventure:".concat(e._path)},r.a.createElement("img",{className:"adventure-item-image",src:e.adventurePrimaryImage._path,alt:e.adventureTitle})),r.a.createElement("div",{className:"adventure-item-length-price"},r.a.createElement("div",{className:"adventure-item-length"},e.adventureTripLength),r.a.createElement("div",{className:"adventure-item-price"},e.adventurePrice)),r.a.createElement("div",{className:"adventure-item-title"},e.adventureTitle)):null}function P(e){return'\n    {\n      adventureList (filter: {\n        adventureActivity: {\n          _expressions: [\n            {\n              value: "'.concat(e,'"\n            }\n          ]\n        }\n      }){\n        items {\n          _path\n        adventureTitle\n        adventurePrice\n        adventureTripLength\n        adventurePrimaryImage {\n          ... on ImageRef {\n            _path\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n  ')}var S=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],c=p(a,"wknd/adventures-all"),l=c.data,o=c.errorMessage;return o?r.a.createElement(T,{errorMessage:o}):l?r.a.createElement("div",{className:"adventures"},r.a.createElement("button",{onClick:function(){return i("")}},"All"),r.a.createElement("button",{onClick:function(){return i(P("Camping"))}},"Camping"),r.a.createElement("button",{onClick:function(){return i(P("Surfing"))}},"Surfing"),r.a.createElement("ul",{className:"adventure-items"},l.adventureList.items.map((function(e,t){return r.a.createElement(y,Object.assign({key:t},e))})))):r.a.createElement(N,null)},I=a(27),C=a.n(I),L=a(3),j="wcm/foundation/components/responsivegrid",k={emptyLabel:"Layout Container",isEmpty:function(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length},resourceType:j};Object(L.MapTo)(j)(L.ResponsiveGrid,k);var R=Object(L.withMappable)(L.ResponsiveGrid,k),w=(a(85),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI);function D(e){if(!e)return null;var t=null;return e.pictureReference&&(t=r.a.createElement("img",{className:"contributor-image",src:e.pictureReference._path,alt:e.fullName})),r.a.createElement("div",{className:"contributor"},r.a.createElement("hr",{className:"contributor-separator"}),t,r.a.createElement("h3",{className:"contributor-name"},e.fullName),r.a.createElement("h4",{className:"contributor-occupation"},e.occupation))}var M=Object(o.o)((function(e){var t=e.location.pathname.substring(e.match.url.length),a=p('{\n    adventureByPath (_path: "'.concat(t,'") {\n      item {\n        _path\n          adventureTitle\n          adventureActivity\n          adventureType\n          adventurePrice\n          adventureTripLength\n          adventureGroupSize\n          adventureDifficulty\n          adventurePrice\n          adventurePrimaryImage {\n            ... on ImageRef {\n              _path\n              mimeType\n              width\n              height\n            }\n          }\n          adventureDescription {\n            html\n          }\n          adventureItinerary {\n            html\n          }\n      }\n    }\n  }\n  ')),n=a.data,i=a.errorMessage;if(i)return r.a.createElement(T,{errorMessage:i});if(!n)return r.a.createElement(N,null);var c=n.adventureByPath.item,o=c._path.split("/").pop();return c&&c._path&&c.adventureTitle&&c.adventurePrimaryImage?r.a.createElement("div",{className:"adventure-detail"},r.a.createElement(l.Link,{className:"adventure-detail-close-button",to:"/"},r.a.createElement("img",{className:"Backbutton-icon",src:w+"/"+C.a,alt:"Return"})),r.a.createElement("h1",{className:"adventure-detail-title"},c.adventureTitle),r.a.createElement("div",{className:"adventure-detail-info"},r.a.createElement("div",{className:"adventure-detail-info-label"},"Activity"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureActivity),r.a.createElement("div",{className:"adventure-detail-info-label"},"Type"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureType),r.a.createElement("div",{className:"adventure-detail-info-label"},"Trip Length"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureTripLength),r.a.createElement("div",{className:"adventure-detail-info-label"},"Group Size"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureGroupSize),r.a.createElement("div",{className:"adventure-detail-info-label"},"Difficulty"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureDifficulty),r.a.createElement("div",{className:"adventure-detail-info-label"},"Price"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventurePrice)),r.a.createElement("div",{className:"adventure-detail-content"},r.a.createElement("img",{className:"adventure-detail-primaryimage",src:c.adventurePrimaryImage._path,alt:c.adventureTitle}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.adventureDescription.html}}),r.a.createElement(R,{pagePath:"/content/wknd-app/us/en/home/adventure/".concat(o),itemPath:"root/responsivegrid"}),r.a.createElement("h2",null,"Itinerary"),r.a.createElement("hr",null),r.a.createElement("div",{className:"adventure-detail-itinerary",dangerouslySetInnerHTML:{__html:c.adventureItinerary.html}}),r.a.createElement(D,c.adventureContributor))):r.a.createElement("div",{className:"adventure-detail"},r.a.createElement(l.Link,{className:"adventure-detail-close-button",to:"/"},r.a.createElement("img",{className:"Backbutton-icon",src:w+"/"+C.a,alt:"Return"})),r.a.createElement(T,{errorMessage:"Missing data, adventure could not be rendered."}))})),A=a(6),U={emptyLabel:"Title",isEmpty:A.TitleV2IsEmptyFn,resourceType:"wknd-app/components/title"};Object(L.MapTo)("wknd-app/components/title")(A.TitleV2,U);var B=Object(L.withMappable)(A.TitleV2,U),H={emptyLabel:"Text",isEmpty:A.TextV2IsEmptyFn,resourceType:"wknd-app/components/text"};Object(L.MapTo)("wknd-app/components/text")(A.TextV2,H);Object(L.withMappable)(A.TextV2,H),a(86);var K={emptyLabel:"Image",isEmpty:A.ImageV2IsEmptyFn,resourceType:"wknd-app/components/image"};Object(L.MapTo)("wknd-app/components/image")(A.ImageV2,K);Object(L.withMappable)(A.ImageV2,K),a(87);var V=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI;function W(){return r.a.createElement("div",{className:"Home"},r.a.createElement(R,{pagePath:"/content/wknd-app/us/en/home",itemPath:"root/responsivegrid"}),r.a.createElement(B,{pagePath:"/content/wknd-app/us/en/home",itemPath:"root/title"}),r.a.createElement(S,null))}var x=function(){return r.a.createElement(l.BrowserRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("img",{src:V+"/"+m.a,className:"logo",alt:"WKND Logo"}),r.a.createElement("hr",null)),r.a.createElement(o.g,null,r.a.createElement(o.d,{path:"/adventure:path"},r.a.createElement(M,null)),r.a.createElement(o.d,{path:"/"},r.a.createElement(W,null)))))};a(24).ModelManager.initializeAsync(),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.66bb155e.chunk.js.map