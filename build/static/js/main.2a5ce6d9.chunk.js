(this["webpackJsonpxeen-web"]=this["webpackJsonpxeen-web"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),l=a(14),s=a(11),i=a(47),u=a(48),m=a(19),v={servers:{}},d=function(e){var t={};return e.forEach((function(e){e.id&&(t[e.id]=e)})),t},f={isLoading:!1},g={displayError:{message:"",show:!1}},p=Object(s.combineReducers)({servers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SERVERS":return Object(m.a)({},e,{servers:d(t.payload)});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return{isLoading:t.payload};default:return e}},showError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_ERROR":return{displayError:t.payload};default:return e}}});var E,b=a(49),h=a(6),N=a(10),y=a(4),O=a(12),S=a.n(O),j=a(50),w=a.n(j),C=function(){return n.a.createElement("div",{className:"loading"},n.a.createElement(w.a,{type:"cubes",color:"#1DA3B8",height:"20%",width:"100%"}))},T=function(e){var t=e.message;return n.a.createElement("div",{className:"error-wrapper"},n.a.createElement("p",{className:"error-text"},t))},L=function(e){var t=e.login,a=e.errorMessage,o=e.loading,c=Object(r.useState)(""),l=Object(y.a)(c,2),s=l[0],i=l[1],u=Object(r.useState)(""),m=Object(y.a)(u,2),v=m[0],d=m[1],f=Object(r.useState)(!1),g=Object(y.a)(f,2),p=g[0],E=g[1],b=function(){var e=v.length>0,t=s.length>0,a=e&&t;return E(!a),a};return n.a.createElement("div",{className:"form-container"},n.a.createElement("img",{src:S.a,className:"logo",alt:"Xeen VPN Logo"}),n.a.createElement("h1",{className:"text-primary"},"XEEN VPN"),n.a.createElement("p",{className:"text-secondary"},"Welcome back.",n.a.createElement("br",null),"Please login to your account"),p&&n.a.createElement(T,{message:"All fields are required"}),a&&n.a.createElement(T,{message:a}),o&&n.a.createElement(C,null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b()&&t(s,v)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",id:"username",placeholder:"Username",value:s,onChange:function(e){return i(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",id:"password",placeholder:"Password",value:v,onChange:function(e){return d(e.target.value)}})),n.a.createElement("button",{type:"submit",className:"btn"},"Login")),n.a.createElement("p",{className:"copyright"},"CopyRight \xa9",(new Date).getFullYear()))},I=a(51);!function(e){e[e.INPUT=0]="INPUT",e[e.TEXTAREA=1]="TEXTAREA",e[e.COUNTRY=2]="COUNTRY"}(E||(E={}));var k=function(e){var t=e.label,a=e.type,r=e.id,o=e.value,c=e.onChange,l=e.formType,s=void 0===l?E.INPUT:l,i=e.error;return n.a.createElement("div",{className:"server-form-group"},n.a.createElement("label",{htmlFor:t},t),s===E.INPUT&&n.a.createElement("input",{className:"server-form-input",type:a,id:r,value:o,onChange:function(e){return c(r,e.target.value)}}),s===E.TEXTAREA&&n.a.createElement("textarea",{className:"server-text-area",id:r,value:o,onChange:function(e){return c(r,e.target.value)}}),s===E.COUNTRY&&n.a.createElement(I.a,{classes:"server-country-picker",id:r,valueType:"short",value:o,onChange:function(e){return c(r,e)}}),i&&n.a.createElement("p",{className:"server-error"},"The ".concat(t," field is required")))};function A(e,t){return t in e}var x={username:{id:"username",label:"Username",formType:E.INPUT,value:"",type:"text"},password:{id:"password",label:"Password",formType:E.INPUT,value:"",type:"password"},serverName:{id:"serverName",label:"Server Name",formType:E.INPUT,value:"",type:"text"},serverCountry:{id:"serverCountry",label:"Server Country",formType:E.COUNTRY,value:""},serverIp:{id:"serverIp",label:"Server Address",formType:E.INPUT,value:"",type:"text"},config:{id:"config",label:"Config",formType:E.TEXTAREA,value:""}},R=function(e){var t=e.serverId,a=e.server,o=e.uploadServer,c=e.deleteServer,l=e.loading,s=Object(r.useState)(function(e,t){var a;if(e&&t){var r=Object.assign({},x);Object.keys(t).forEach((function(e){A(r,e)&&(r[e].value=t[e])})),a=r}else a=x;return a}(t,a)),i=Object(y.a)(s,2),u=i[0],v=i[1],d=!(t&&a);console.log("IsNew: ",d);var f=function(e,t){var a=Object.assign({},u);if(A(a,e)){var r=a[e],n=Object(m.a)({},r,{value:t});a[e]=n,v(a)}};return n.a.createElement("div",{className:"server-form"},Object.values(u).map((function(e){return n.a.createElement(k,{id:e.id,key:e.id,type:e.type,label:e.label,value:e.value,onChange:f,formType:e.formType,error:e.error})})),n.a.createElement("div",{className:"server-form-buttons"},n.a.createElement("button",{disabled:l,className:"btn",onClick:function(){!function(){var e=Object.assign({},u);Object.keys(e).forEach((function(t){A(e,t)&&(e[t].error=!1,v(e))}))}(),function(){for(var e=!1,t=0,a=Object.values(u);t<a.length;t++){if(!(e=""!==a[t].value))break}return e}()?o(function(){var e={config:u.config.value,username:u.username.value,password:u.password.value,serverName:u.serverName.value,serverCountry:u.serverCountry.value,serverIp:u.serverIp.value};return d||a&&(e.id=a.id),e}(),d):function(){var e=Object.assign({},u);Object.keys(e).forEach((function(t){if(A(e,t)){var a=e[t];a.error=""===a.value,v(e)}}))}()}},"Save"),!d&&n.a.createElement("button",{disabled:l,className:"btn-delete",onClick:function(){t&&c(t)}},"Delete")))},P=function(){return n.a.createElement("div",{className:"top-line"})},U=a(13),D=a.n(U),J=function(e){var t=e.handleLogout;return n.a.createElement("div",null,n.a.createElement(P,null),n.a.createElement("nav",{className:"nav-bar"},n.a.createElement("div",{className:"nav-items"},n.a.createElement("img",{src:S.a,alt:"Xeen VPN logo"}),n.a.createElement("p",{className:"selected"},"ServerList"),n.a.createElement(h.b,{to:Oe},n.a.createElement("p",{className:"unselected"},"AddServer"))),n.a.createElement("div",{className:"logout"},n.a.createElement("p",{className:"logout-btn",onClick:t},"Logout"),n.a.createElement("img",{className:"logout-icon",src:D.a,alt:"Logout icon"}))))},X=function(e){var t=e.handleLogout;return n.a.createElement("div",null,n.a.createElement(P,null),n.a.createElement("nav",{className:"nav-bar"},n.a.createElement("div",{className:"nav-items"},n.a.createElement("img",{src:S.a,alt:"Xeen VPN logo"}),n.a.createElement(h.b,{to:Ee},n.a.createElement("p",{className:"unselected"},"ServerList")),n.a.createElement("p",{className:"selected"},"AddServer")),n.a.createElement("div",{className:"logout"},n.a.createElement("p",{className:"logout-btn",onClick:t},"Logout"),n.a.createElement("img",{className:"logout-icon",src:D.a,alt:"Logout icon"}))))},V=a(53),q=a.n(V),Y=function(e){var t=e.onLogout,a=e.serverName,r=e.handleBackClick;return n.a.createElement("div",null,n.a.createElement(P,null),n.a.createElement("nav",{className:"nav-bar"},n.a.createElement("div",{className:"nav-back",onClick:r},n.a.createElement("img",{src:q.a,alt:"Xeen VPN logo"}),n.a.createElement("p",null,"Server Details > ".concat(a)," ")),n.a.createElement("div",{className:"logout"},n.a.createElement("p",{className:"logout-btn",onClick:t},"Logout"),n.a.createElement("img",{className:"logout-icon",src:D.a,alt:"Logout icon"}))))},B=function(e){var t=e.item;return n.a.createElement(h.b,{to:"/Server/".concat(t.id)},n.a.createElement("div",{className:"server-item"},n.a.createElement("img",{src:"https://www.countryflags.io/".concat(t.serverCountry,"/shiny/64.png"),alt:"Country flag"}),n.a.createElement("div",{className:"server-item-text"},n.a.createElement("h3",null,t.serverName),n.a.createElement("p",null,t.serverIp))))},G=function(e){var t=e.items;return console.log("Items",t),n.a.createElement("div",{className:"servers-list"},t.map((function(e){return n.a.createElement(B,{key:e.id,item:e})})))},_=a(54),W=a.n(_),M=function(){return n.a.createElement("div",{className:"empty-server"},n.a.createElement("img",{src:W.a,alt:"Server Icon"}),n.a.createElement("p",null,"No servers yet"),n.a.createElement(h.b,{to:Oe},n.a.createElement("p",{className:"btn"},"Add a server")))},F=a(27),z=a.n(F),K=function(e){var t=e.isOpen,a=e.onRequestClose,r=e.title,o=void 0===r?"Confirm Action":r,c=e.message,l=void 0===c?"Are you sure you want to delete":c,s=e.onConfirm;return z.a.setAppElement("#root"),n.a.createElement(z.a,{isOpen:t,contentLabel:"Are you sure you want to delete?",onRequestClose:a,className:"confirm-dialog-content",overlayClassName:"confirm-dialog-overlay"},n.a.createElement("div",{className:"confirm-dialog-root"},n.a.createElement("h3",null,o),n.a.createElement("p",null,l),n.a.createElement("div",{className:"confirm-dialog-buttons"},n.a.createElement("button",{className:"btn btn-cancel",onClick:a},"Cancel"),n.a.createElement("button",{className:"btn btn-confirm",onClick:s},"Okay"))))},$=a(55),H=a.n($),Q="http://134.122.124.193/:4002/api",Z="xeen:token",ee={id:"",userId:"",ttl:"",created:""},te={loggedIn:!1},ae=function(e){localStorage.setItem("xeen:loggedIn",JSON.stringify({loggedIn:e}))},re=a(17),ne=function(){var e=H.a.create({baseURL:Q}),t=function(){var e;return JSON.parse(null!==(e=localStorage.getItem(Z))&&void 0!==e?e:JSON.stringify(ee))}();return console.log("TOKEN",t),e.interceptors.request.use(re.requestLogger,re.errorLogger),e.interceptors.response.use(re.responseLogger,re.errorLogger),e.defaults.headers.common.Authorization=t.id,e},oe=function(){return ne().post("/Users/logout")},ce=ne,le=function(e){var t;ae(!0),t=e,localStorage.setItem(Z,JSON.stringify(t))},se=function(){ae(!1),localStorage.setItem(Z,JSON.stringify(ee))},ie=a(28),ue=a.n(ie),me=a(56),ve=function(e){return{type:"TOGGLE_LOADING",payload:e}},de=function(e){return{type:"DISPLAY_ERROR",payload:e}},fe=function(e){return console.error(e),function(e){return void 0!==e.response}(e)?ge(e):"An error ocurred. Please try again!"},ge=function(e){if(e.response){var t=e.response.data;return console.error(t),401===t.error.statusCode?"Operation could not complete. Please login again":t.error.message}return"An error ocurred!"};var pe=Object(l.b)((function(e){return{servers:e.servers,isLoading:e.loading.isLoading,displayError:e.showError.displayError}}),{getServers:function(){return function(){var e=Object(me.a)(ue.a.mark((function e(t){var a,r;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(de({show:!1})),t(ve(!0)),e.next=5,ne().get("/Servers");case 5:a=e.sent,t({type:"SET_SERVERS",payload:a.data}),t(ve(!1)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),t(ve(!1)),r=fe(e.t0),t(de({message:r,show:!0}));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t,a=e.servers,o=e.getServers,c=e.isLoading,l=e.displayError,s=Object(r.useState)(!1),i=Object(y.a)(s,2),u=i[0],m=i[1],v=Object.values(a.servers?a.servers:[]);Object(r.useEffect)((function(){o()}),[o]);var d=Object(N.g)(),f=(Object(N.h)().state||{from:{pathname:he}}).from,g=function(){m(!1)},p=function(){se(),d.replace(f)};return n.a.createElement("div",{className:"container"},n.a.createElement(J,{handleLogout:function(){m(!0),oe().then((function(e){g(),p()})).catch((function(e){g(),console.error(e),p()}))}}),(u||c)&&n.a.createElement(C,null),l.show&&n.a.createElement(T,{message:null!==(t=l.message)&&void 0!==t?t:"An error occurred"}),n.a.createElement("div",{className:"server-root"},v&&v.length>0&&n.a.createElement(G,{items:v}),(!v||v.length<=0)&&n.a.createElement(M,null)))})),Ee="/",be=pe,he="/login",Ne=function(){var e=Object(r.useState)(""),t=Object(y.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!1),l=Object(y.a)(c,2),s=l[0],i=l[1],u=Object(N.g)(),m=(Object(N.h)().state||{from:{pathname:Ee}}).from;return n.a.createElement("div",{className:"login-container"},n.a.createElement("div",{className:"side-image"}),n.a.createElement(L,{login:function(e,t){var a;o(""),i(!0),(a={username:e,password:t,realm:"admin"},ne().post("/users/login",a)).then((function(e){i(!1);var t=e.data;console.log("res: ",e),le(t),u.replace(m)})).catch((function(e){if(i(!1),e.response){var t=e.response.data;console.error(t),401===t.error.statusCode?o("Login failed, check your credentials"):o(t.error.message)}else o("An error ocurred!");console.error(e)}))},errorMessage:a,loading:s}))},ye=Object(l.b)((function(e){return{servers:e.servers}}))((function(e){var t=e.servers,a=Object(N.i)().id,o={config:"",password:"",serverCountry:"",serverIp:"",serverName:"",username:""},c=Object(r.useState)(!1),l=Object(y.a)(c,2),s=l[0],i=l[1],u=Object(r.useState)(!1),m=Object(y.a)(u,2),v=m[0],d=m[1],f=Object(r.useState)(""),g=Object(y.a)(f,2),p=g[0],E=g[1],b=Object(r.useState)(o),h=Object(y.a)(b,2),O=h[0],S=h[1],j=t.servers,w=function(e){var t=fe(e);E(t),console.error(e),U()};Object(r.useEffect)((function(){if(a){var e=j[a];e?S(e):(i(!0),E(""),ce().get("/Servers/".concat(a)).then((function(e){i(!1);var t=e.data;S(t)})).catch((function(e){var t=fe(e);E(t),i(!1)})))}}),[a,j]);var L=Object(N.g)(),I=(Object(N.h)().state||{fromLogin:{pathname:he}}).fromLogin,k=function(){oe().then((function(e){A()})).catch((function(e){console.error(e),A()}))},A=function(){se(),L.replace(I)},x=function(){E("")},P=function(e){console.log(e),U(),J(),L.push(Ee)},U=function(){i(!1)},D=function(){d(!0)},J=function(){S(o)};return n.a.createElement("div",{className:"container"},a&&n.a.createElement(Y,{onLogout:k,serverName:O?O.serverName:"",handleBackClick:function(){J(),L.goBack()}}),!a&&n.a.createElement(X,{handleLogout:k}),s&&n.a.createElement(C,null),p.length>0&&n.a.createElement(T,{message:null!==p&&void 0!==p?p:"An error occurred"}),n.a.createElement("div",{className:"server-form-root"},n.a.createElement(R,{serverId:a,server:O,uploadServer:function(e,t){console.log("SERVER, isnew",e,t),i(!0),x(),t?function(e){return ne().post("/Servers",e)}(e).then((function(e){P(e)})).catch((function(e){w(e)})):function(e){return ne().patch("/Servers",e)}(e).then((function(e){P(e)})).catch((function(e){w(e)}))},deleteServer:function(e){D()},loading:s})),n.a.createElement(K,{onConfirm:function(){var e;(e=a,ne().delete("/Servers/".concat(e))).then((function(e){P(e)})).catch((function(e){w(e)}))},isOpen:v,onRequestClose:function(){d(!1)}}))})),Oe="/server",Se=ye,je=function(){return n.a.createElement("div",null,"Page not found")},we=(a(109),function(e){var t=e.children,a=Object(b.a)(e,["children"]),r=function(){var e;return JSON.parse(null!==(e=localStorage.getItem("xeen:loggedIn"))&&void 0!==e?e:JSON.stringify(te))}();return n.a.createElement(N.b,Object.assign({},a,{render:function(e){var a=e.location;return r.loggedIn?t:n.a.createElement(N.a,{to:{pathname:he,state:{from:a}}})}}))}),Ce=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h.a,null,n.a.createElement(N.d,null,n.a.createElement(we,{exact:!0,path:Ee},n.a.createElement(be,null)),n.a.createElement(we,{path:"".concat(Oe,"/:id")},n.a.createElement(Se,null)),n.a.createElement(we,{exact:!0,path:Oe},n.a.createElement(Se,null)),n.a.createElement(N.b,{exact:!0,path:he,component:Ne}),n.a.createElement(N.b,{component:je}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=function(){var e=[i.a],t=s.applyMiddleware.apply(void 0,e);return Object(s.createStore)(p,Object(u.composeWithDevTools)(t))}();c.a.render(n.a.createElement((function(){return n.a.createElement(l.a,{store:Te},n.a.createElement(Ce,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,t,a){e.exports=a.p+"static/media/logo.9a480739.svg"},13:function(e,t,a){e.exports=a.p+"static/media/logout.d0404e7b.svg"},53:function(e,t,a){e.exports=a.p+"static/media/back.94b6b5e3.svg"},54:function(e,t,a){e.exports=a.p+"static/media/server.6ec4fce4.svg"},57:function(e,t,a){e.exports=a(110)}},[[57,1,2]]]);
//# sourceMappingURL=main.2a5ce6d9.chunk.js.map