(this.webpackJsonpnasaapp=this.webpackJsonpnasaapp||[]).push([[0],{110:function(e,t){},112:function(e,t){},128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),u=a(3),o=function(){return r.a.createElement("div",{className:"footer"},"SpaceApp by Otso Helos")},s=a(7),i=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],u=c[1],o={display:l?"none":""},i={display:l?"":"none"},m=function(){u(!l)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("div",{onClick:m,className:"togglable"},e.toggLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("div",{onClick:m,className:"togglable"},"Hide")))})),m=function(){var e=Object(u.c)((function(e){return e.notif.text})),t=Object(u.c)((function(e){return e.notif.notifType}));return null===t||void 0===t?r.a.createElement("div",{className:"empty-notif"},"\xa0"):r.a.createElement("div",{className:"".concat(t," notification")},r.a.createElement("div",{className:"exclamation"},"!"),e)},p=a(1),d=a.n(p),f=a(2),v=a(5),E=a.n(v),b="https://api.nasa.gov/planetary/apod?",g="api_key=ZLkfBiLh7H19ZeM6kNkEWnHa1MnqA6GmkbKK3pug",h={get:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(b).concat(g));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFromDay:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(b,"date=").concat(t,"&").concat(g));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},y=null,w={text:"",notifType:null},O=function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:y=function(){return setTimeout((function(){n(N())}),5e3)}(),console.log("timeoutId",y),n({type:"SET_NOTIF",data:{text:e,notifType:t}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},N=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET",notifType:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIF":return console.log(y),y&&console.log("clearing"),t.data;case"RESET":return{text:null,notifType:null};default:return e}},x={url:"",title:"",explanation:""},k=function(){return console.log("initializeApod called"),function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get();case 2:a=e.sent,t({type:"INIT_APOD",data:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_APOD":case"VIEW_DATE":return t.data;default:return e}},A=function(e,t){var a=Object(u.b)(),r=function(e,t){a(O(e,t))},c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1];return{type:e,value:o,onChange:function(e){var n=e.target.value;Number(n+1)||""===n?Number(n)>t?r("Not a valid input."):a(N()):r("Give value as a number."),i(n)},onReset:function(){i("")}}},C=function(){var e=Object(u.b)(),t=(new Date).getFullYear,a=A("text",t),n=A("text",12),c=A("text",31);return r.a.createElement("div",{className:"field-box"},r.a.createElement("b",null,"View previous days' pictures"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var r,l="".concat(a.value,"-").concat(n.value,"-").concat(c.value);console.log(l),e((r=l,console.log("viewing date ".concat(r)),function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getFromDay(r);case 2:a=e.sent,console.log(a),400===a.status?t(O(a.data.msg,"notifRed")):t({type:"VIEW_DATE",data:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("input",Object.assign({},a,{size:"6",placeholder:"YYYY",className:"apod-search-field"})),r.a.createElement("input",Object.assign({},n,{size:"3",placeholder:"MM",className:"apod-search-field"})),r.a.createElement("input",Object.assign({},c,{size:"3",placeholder:"DD",className:"apod-search-field"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"apod-search-button"},"Search")," \xa0 \xa0"),r.a.createElement("button",{onClick:function(){e(k())},className:"apod-search-button"},"Today's picture"))},I=a(59),T=a.n(I),R=function(e){var t=e.imageDesc;return r.a.createElement("div",{className:"apod-desc"},t)},_=function(){var e=Object(u.c)((function(e){return e.apod}));if(void 0===e)return console.log(e),null;var t=void 0===e.copyright?"Copyright: Public domain":"(c) ".concat(e.copyright);return console.log("mediatype",e.media_type),void 0!==e&&"image"===e.media_type?r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Astronomy Picture of the Day"),r.a.createElement("h3",null,e.date),r.a.createElement("div",{key:e.url},r.a.createElement("div",{className:"apodImg"},r.a.createElement("img",{src:e.url,alt:e.title}),r.a.createElement("br",null),r.a.createElement("div",{className:"apodCopyright"},r.a.createElement("b",null,t," ")),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(i,{toggLabel:"See description"},r.a.createElement("b",null,"Description:"),r.a.createElement(R,{imageDesc:e.explanation}))," "),r.a.createElement("div",{className:"previous-apod"},r.a.createElement(C,null),r.a.createElement("div",{className:"notif-div"},r.a.createElement(m,null))),r.a.createElement("div",{className:"external-link"},"All material (c) Nasa.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://apod.nasa.gov/apod/",target:"_blank",rel:"noopener noreferrer"},"APOD on Nasa homepage")),r.a.createElement("div",null)):r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Astronomy Picture of the Day"),r.a.createElement("h3",null,e.date),r.a.createElement("div",{key:e.url},r.a.createElement("div",{className:"apodImg"},r.a.createElement("div",{className:"apodVid"},r.a.createElement(T.a,{url:e.url})),r.a.createElement("div",{className:"apodCopyright"},r.a.createElement("br",null),r.a.createElement("b",null,t," "),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(i,{toggLabel:"See description"},r.a.createElement("b",null,"Description:"),r.a.createElement(R,{imageDesc:e.explanation}))),r.a.createElement("div",{className:"previous-apod"},r.a.createElement(C,null),r.a.createElement("div",{className:"notif-div"},r.a.createElement(m,null))),r.a.createElement("div",{className:"external-link"},"All material (c) Nasa.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://apod.nasa.gov/apod/",target:"_blank",rel:"noopener noreferrer"},"APOD on Nasa homepage")),r.a.createElement("div",null))},D=null,P={getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/comments");case 2:return t=e.sent,console.log("data",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),post:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:D}},e.next=3,E.a.post("/api/comments",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){D="bearer ".concat(e)},remove:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E.a.delete("".concat("/api/comments","/").concat(t)),e.abrupt("return",a.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P.post({content:a}),c("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Post a new comment"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:l,className:"commentForm"},"Comment:",r.a.createElement("textarea",{id:"comment",value:a,onChange:function(e){c(e.target.value)},className:"commentField"}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"submitButton"},"Post comment"))))},L=function(e){var t=e.username,a=e.password,n=e.handleUsernameChange,c=e.handlePasswordChange,l=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login to leave a comment"),r.a.createElement("form",{onSubmit:l,className:"commentForm"},r.a.createElement("div",null,"Username:",r.a.createElement("br",null),r.a.createElement("input",{id:"username",value:t,onChange:n,className:"apodSearchField"})),r.a.createElement("div",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{id:"password",type:"password",value:a,onChange:c,className:"apodSearchField"})),r.a.createElement("button",{id:"login-button",type:"submit",className:"submitButton"},"login")))},F=function(e){var t=e.username,a=e.password,n=e.name,c=e.handleUsernameChange,l=e.handlePasswordChange,u=e.handleNameChange,o=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h2",null,"Sign up"),r.a.createElement("form",{onSubmit:o,className:"commentForm"},r.a.createElement("div",null,"Username:",r.a.createElement("br",null),r.a.createElement("input",{id:"signup-username",value:t,onChange:c,className:"apodSearchField"})),r.a.createElement("div",null,"Name:",r.a.createElement("br",null),r.a.createElement("input",{id:"signup-name",type:"name",value:n,onChange:u,className:"apodSearchField"})),r.a.createElement("div",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{id:"signup-pass",type:"password",autoComplete:"new-password",value:a,onChange:l,className:"apodSearchField"})),r.a.createElement("button",{id:"signup-button",type:"submit",className:"submitButton"},"sign up")))},M={login:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=(a(106),{getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),find:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E.a.get("".concat("/api/users","/").concat(t)),e.abrupt("return",a.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/users",t);case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),B=function(e,t){var a=e.comment,n=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("removing!"),e.next=3,P.remove(a.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return void 0!==a.user?r.a.createElement("div",{className:"comment"},'"',a.content,'"',r.a.createElement("br",null),r.a.createElement("blockquote",null,"by ",r.a.createElement("b",null,a.user.name)),t===a.use&&r.a.createElement("button",{className:"submitButton",onClick:n},"Remove comment")):r.a.createElement("div",null,'"',a.content,'"',r.a.createElement("br",null),r.a.createElement("blockquote",null,"by ",r.a.createElement("b",null,a.user)))},W=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(u.b)(),o=function(e,t){console.log("changeNotif called with params",e,t),l(O(e,t))},p=Object(n.useRef)(),v=(Object(n.useRef)(),function(){l(N())});Object(n.useEffect)((function(){P.getAll().then((function(e){return c(e)}))}),[]);var E=Object(n.useState)(""),b=Object(s.a)(E,2),g=b[0],h=b[1],y=Object(n.useState)(""),w=Object(s.a)(y,2),j=w[0],x=w[1],k=Object(n.useState)(null),S=Object(s.a)(k,2),A=S[0],C=S[1],I=Object(n.useState)(""),T=Object(s.a)(I,2),R=T[0],_=T[1],D=Object(n.useState)(""),W=Object(s.a)(D,2),G=W[0],U=W[1],Y=Object(n.useState)(""),z=Object(s.a)(Y,2),q=z[0],K=z[1],Z=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("dispatching login from App for",g),e.next=5,M.login({username:g,password:j});case 5:a=e.sent,console.log(a),C(a.id),h(""),x(""),P.setToken(a.token),o("Logged in as ".concat(g),"notifGreen"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),o("Error logging in","notifRed"),setTimeout((function(){v()}),5e3);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("registering",R),e.next=5,V.post({username:R,name:G,password:q});case 5:U(""),_(""),K(""),p.current.toggleVisibility(),o("New user registered: ".concat(R),"notifGreen"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),o("Error signing up: ".concat(e.t0),"notifRed"),setTimeout((function(){v()}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Logout!"),window.localStorage.removeItem("loggedUser"),C(null),o("Logged out.","notifGreen");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"loginSignup"},null===A&&r.a.createElement(i,{toggLabel:"Login"},r.a.createElement(L,{username:g,password:j,handleUsernameChange:function(e){var t=e.target;return h(t.value)},handlePasswordChange:function(e){var t=e.target;return x(t.value)},handleSubmit:Z})),null===A&&r.a.createElement(i,{toggLabel:"Sign up",ref:p},r.a.createElement(F,{username:R,password:q,handleUsernameChange:function(e){var t=e.target;return _(t.value)},handlePasswordChange:function(e){var t=e.target;return K(t.value)},handleNameChange:function(e){var t=e.target;return U(t.value)},handleSubmit:J}))),null!==A&&r.a.createElement("button",{id:"logout-button",type:"logout",onClick:Q,className:"submitButton"},"logout"),r.a.createElement("div",{className:"notif-div"},r.a.createElement(m,null)),r.a.createElement("div",{className:"commentsContainer"},r.a.createElement("h2",null,"Comments on this app"),a.map((function(e){return r.a.createElement(B,{comment:e,key:e.id,userId:A})})),null!==A&&r.a.createElement(H,null)))},G="https://api.nasa.gov/insight_weather/?api_key=ZLkfBiLh7H19ZeM6kNkEWnHa1MnqA6GmkbKK3pug&feedtype=json&ver=1.0",U={get:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(G);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getToday:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(G);case 2:return t=e.sent,a=t.data.sol_keys,n=a.length-1,r=a[n],e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Y={all_data:{AT:{av:null},HWS:{av:null},PRW:{av:null}},today:null},z=function(){return console.log("initializeMars called"),function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get();case 2:return a=e.sent,e.next=5,U.getToday();case 5:n=e.sent,r=a["".concat(n)],t({type:"INIT_MARS",data:{day:n,days_data:r,today:n}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_MARS":case"ONE_DAY":return t.data;default:return e}},K=function(e){var t=e.handleView,a=e.day;return r.a.createElement("div",{className:"small-button",onClick:function(){return t(a)}},a)},Z=function(){var e=Object(u.b)(),t=function(t){e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("".concat(e," called")),t.next=3,U.get();case 3:return n=t.sent,t.next=6,U.getToday();case 6:r=t.sent,c=n["".concat(e)],a({type:"ONE_DAY",data:{day:e,days_data:c,today:r}});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},a=function(){e(z())},n=Object(u.c)((function(e){return e.mars})),c=n.today,l=n.day,o=n.days_data;if(console.log("today's data:",o),console.log(n),void 0===o)return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Data unavailable!"),"Sorry.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"small-button",onClick:a},"Back"));var s=void 0===o.AT?"(unavailable)":o.AT.av,i=void 0===o.HWS?"(unavailable)":o.HWS.av,m=o.Season,p=void 0===o.PRE?"(unavailable)":o.PRE.av,v="number"===typeof p?(100*p/10325).toFixed(2):"(unavailable)";return l===c?r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Today\u2019s Weather on Mars"),"Today is Sol ",c,". It\u2019s ",m,".",r.a.createElement("br",null),r.a.createElement("br",null),"Average temperature is ",s," \xb0C",r.a.createElement("br",null),r.a.createElement("br",null),"Average wind speed is ",i," m/s",r.a.createElement("br",null),r.a.createElement("br",null),"Atmospheric pressure is ",p," pascals; this is ",v," % of Earth\u2019s air pressure at sea level.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("blockquote",null,r.a.createElement("b",null,"View previous days:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{day:c-1,handleView:t}),r.a.createElement(K,{day:c-2,handleView:t}),r.a.createElement(K,{day:c-3,handleView:t}),r.a.createElement(K,{day:c-4,handleView:t}),r.a.createElement(K,{day:c-5,handleView:t}))):r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Weather on Mars for Sol ",l),"On Sol ",l," it was ",m,".",r.a.createElement("br",null),r.a.createElement("br",null),"Average temperature was ",s," \xb0C",r.a.createElement("br",null),r.a.createElement("br",null),"Average wind speed was ",i," m/s",r.a.createElement("br",null),r.a.createElement("br",null),"Atmospheric pressure was ",p," pascals; this is ",(100*p/10325).toFixed(2)," % of Earth\u2019s air pressure at sea level.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"small-button",onClick:a},"Back"))},J=a(33),Q={searchImg:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-api.nasa.gov/search","?q=").concat(t,"&media_type=image&page=1"));case 2:return a=e.sent,n=a.data.collection.items.filter((function(e){return e.data})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getImg:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-assets.nasa.gov/image","/").concat(t,"/collection.json"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getMetadata:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-api.nasa.gov/metadata","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X={res:[],img:null,desc:null,errored:!1},$=function(e,t,a){return function(){var n=Object(f.a)(d.a.mark((function n(r){var c,l;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q.getImg(e);case 2:c=n.sent,console.log("imgArray: ",c),l=c[0],r({type:"SET_IMG",data:{img:l,alt:t,desc:a,errored:!1}});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_RESULTS":case"INIT_SEARCH":return t.data;case"SEARCH_ERROR":return Object(J.a)({},e,{errored:!0});case"SET_IMG":return Object(J.a)({},e,{img:t.data.img,alt:t.data.alt,desc:t.data.desc,errored:t.data.errored});default:return e}},te=function(){var e=Object(u.b)(),t=A("text");return r.a.createElement("div",null,r.a.createElement("div",{className:"field-box"},r.a.createElement("h2",null,"Search for images"),r.a.createElement("p",null,"Search for media in the",r.a.createElement("br",null),r.a.createElement("a",{href:"https://images.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},"Nasa Image And Video Library"),"."),r.a.createElement("form",{onSubmit:function(a){var n;a.preventDefault(),e((n=t.value,function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.searchImg(n);case 2:a=e.sent,t({type:"SEARCH_RESULTS",data:{res:a,img:null,desc:null,errored:!1}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("input",Object.assign({},t,{size:"95%",placeholder:"keywords",className:"apod-search-field"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"apod-search-button"},"Search"))))},ae=function(e){var t=e.findImg,a=e.result,n=e.styleName;return r.a.createElement("div",{onClick:function(){t(a.data[0].nasa_id,a.data[0].title,a.data[0].description)},className:"".concat(n," link")},a.data[0].title)},ne=function(){var e=["result-dark","result-bright"],t=Object(u.b)(),a=Object(u.c)((function(e){return e.search})).res,n=function(){var e=Object(f.a)(d.a.mark((function e(a,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t($(a,n,r)),null!==document.getElementById("apodImg")&&document.getElementById("apodImg").scrollIntoView({behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("div",null,"No results!"):100===a.length?r.a.createElement("div",null,r.a.createElement("h2",null,"Search results"),r.a.createElement("div",null,"Your search returned ",r.a.createElement("b",null,"over 100")," results."),r.a.createElement("br",null),a.map((function(t,a){return r.a.createElement(ae,{result:t,key:t.data[0].nasa_id,styleName:e[a%2],findImg:n})})),r.a.createElement("div",{className:"result-page-nav",onClick:function(){console.log("next please")}},r.a.createElement("b",null,"next page"))):r.a.createElement("div",null,r.a.createElement("h2",null,"Search results"),r.a.createElement("div",null,"Your search returned ",r.a.createElement("b",null,a.length)," results."),r.a.createElement("br",null),a.map((function(t,a){return r.a.createElement(ae,{result:t,key:t.data[0].nasa_id,styleName:e[a%2],findImg:n})})))},re=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.search})),a=t.img,n=t.alt,c=t.errored,l=t.desc;return console.log(c),!0===t.errored?(console.log("DANGER HORROR TERROR"),r.a.createElement("div",{className:"img-fail-box",id:"apodImg"},r.a.createElement("i",null,"Image failed to load. Search result raw data:"),r.a.createElement("br",null),r.a.createElement("div",{className:"img-fail"},a))):r.a.createElement("div",{id:"apodImg"},r.a.createElement("img",{onError:function(){e((console.log("errored"),function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SEARCH_ERROR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},src:a,alt:n}),r.a.createElement("br",null),r.a.createElement("div",{className:"apod-desc"},l))},ce=function(){var e=Object(u.c)((function(e){return e.search})),t=e.res,a=e.img;console.log("img: ",a),console.log("search: ",e);var c=Object(u.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"INIT_SEARCH",data:{res:[],img:null,desc:null,errored:!1}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),t!==[]&&void 0!==t?r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement("br",null),r.a.createElement(re,null),r.a.createElement(ne,null),r.a.createElement("br",null)):r.a.createElement("div",null,"Something went wrong. Sorry.")},le=a(19),ue=a(4),oe=(a(128),{padding:"15px"}),se=function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("h1",null,"SpaceApp"),r.a.createElement(le.b,{style:oe,to:"/"},"APOD"),r.a.createElement(le.b,{style:oe,to:"/mars"},"Mars Weather"),r.a.createElement(le.b,{stype:oe,to:"/search"},"Image Search"),r.a.createElement(le.b,{style:oe,to:"/comments"},"Comments"))},ie=function(){var e=Object(u.b)();return Object(n.useEffect)((function(){e(k())}),[e]),Object(n.useEffect)((function(){e(z())}),[e]),Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET",notifType:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),r.a.createElement("div",{className:"app"},r.a.createElement(se,null),r.a.createElement("br",null),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"content"},r.a.createElement(ue.c,null,r.a.createElement(ue.a,{path:"/comments"},r.a.createElement(W,null)),r.a.createElement(ue.a,{path:"/mars"},r.a.createElement(Z,null)),r.a.createElement(ue.a,{path:"/search"},r.a.createElement(ce,null)),r.a.createElement(ue.a,{path:"/"},r.a.createElement(_,null))))),r.a.createElement(o,null))},me=a(18),pe=a(60),de=a(61),fe=Object(me.combineReducers)({apod:S,mars:q,search:ee,notif:j}),ve=Object(me.createStore)(fe,Object(de.composeWithDevTools)(Object(me.applyMiddleware)(pe.a)));l.a.render(r.a.createElement(u.a,{store:ve},r.a.createElement(le.a,null,r.a.createElement(ie,null))),document.getElementById("root"))},62:function(e,t,a){e.exports=a(130)}},[[62,1,2]]]);
//# sourceMappingURL=main.ae9c5808.chunk.js.map