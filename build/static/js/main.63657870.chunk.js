(this.webpackJsonpnasaapp=this.webpackJsonpnasaapp||[]).push([[0],{38:function(e,t,a){e.exports=a(67)},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),u=a(4),o=function(){return r.a.createElement("div",{className:"footer"},"SpaceApp by Otso Helos")},s=a(11),i=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],u={display:c?"none":""},o={display:c?"":"none"},i=function(){l(!c)};return r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement("div",{onClick:i,className:"togglable"},e.toggLabel)),r.a.createElement("div",{style:o},e.children,r.a.createElement("div",{onClick:i,className:"togglable"},"Hide")))},m=function(){var e=Object(u.c)((function(e){return e.notif}));return""===e?r.a.createElement("div",{className:"empty-notif"},"\xa0"):r.a.createElement("div",{className:"notif"},r.a.createElement("div",{className:"exclamation"},"!"),e)},p=a(1),d=a.n(p),f=a(2),v=a(7),E=a.n(v),b="https://api.nasa.gov/planetary/apod?",h="api_key=ZLkfBiLh7H19ZeM6kNkEWnHa1MnqA6GmkbKK3pug",g={get:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(b).concat(h));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFromDay:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(b,"date=").concat(t,"&").concat(h));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},y=null,w=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!==y&&clearTimeout(y),y=function(){return setTimeout((function(){a(O())}),5e3)}(),a({type:"SET_NOTIF",data:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET":return"";case"SET_NOTIF":return t.data;default:return e}},N={url:"",title:"",explanation:""},x=function(){return console.log("initializeApod called"),function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get();case 2:a=e.sent,n={type:"INIT_APOD",data:a},console.log(n),t(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_APOD":case"VIEW_DATE":return t.data;default:return e}},S=function(e,t){var a=Object(u.b)(),r=function(e){a(w(e))},c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1];return{type:e,value:o,onChange:function(e){var n=e.target.value;Number(n+1)||""===n?Number(n)>t?r("Not a valid input."):a(O()):r("Give value as a number."),i(n)},onReset:function(){i("")}}},A=function(){var e=Object(u.b)(),t=(new Date).getFullYear,a=S("text",t),n=S("text",12),c=S("text",31);return r.a.createElement("div",{className:"field-box"},r.a.createElement("b",null,"View previous days' pictures"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var r,l="".concat(a.value,"-").concat(n.value,"-").concat(c.value);console.log(l),e((r=l,console.log("viewing date ".concat(r)),function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getFromDay(r);case 2:a=e.sent,console.log(a),400===a.status?t(w(a.data.msg)):t({type:"VIEW_DATE",data:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("input",Object.assign({},a,{size:"6",placeholder:"YYYY",className:"apod-search-field"})),r.a.createElement("input",Object.assign({},n,{size:"3",placeholder:"MM",className:"apod-search-field"})),r.a.createElement("input",Object.assign({},c,{size:"3",placeholder:"DD",className:"apod-search-field"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"apod-search-button"},"Search")," \xa0 \xa0"),r.a.createElement("button",{onClick:function(){e(x())},className:"apod-search-button"},"Today's picture"))},T=function(e){var t=e.imageDesc;return r.a.createElement("div",{className:"apod-desc"},t)},_=function(){var e=Object(u.c)((function(e){return e.apod}));if(void 0===e)return console.log(e),null;var t=void 0===e.copyright?"Copyright: Public domain":"(c) ".concat(e.copyright);return void 0!==e?r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Astronomy Picture of the Day"),r.a.createElement("h3",null,e.date),r.a.createElement("div",{key:e.url},r.a.createElement("div",{className:"apodImg"},r.a.createElement("img",{src:e.url,alt:e.title}),r.a.createElement("br",null),r.a.createElement("b",null,t," "),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(i,{toggLabel:"See description"},r.a.createElement("b",null,"Description:"),r.a.createElement(T,{imageDesc:e.explanation}))," "),r.a.createElement("div",{className:"previous-apod"},r.a.createElement(A,null),r.a.createElement("div",{className:"notif-div"},r.a.createElement(m,null))),r.a.createElement("div",{className:"external-link"},"All material (c) Nasa.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://apod.nasa.gov/apod/",target:"_blank",rel:"noopener noreferrer"},"APOD on Nasa homepage")),r.a.createElement("div",null)):void 0},R={getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/comments");case 2:return t=e.sent,console.log("data",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),post:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/comments",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),o=u[0],i=u[1],m=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),R.post({content:o,author:a}),c(""),i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Post a new comment"),"(Doesn't work yet!)",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:m},"Comment:",r.a.createElement("input",{id:"url",value:o,onChange:function(e){i(e.target.value)}}),r.a.createElement("br",null),"Your name:",r.a.createElement("input",{id:"author",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"submitButton"},"Post comment"))))},C=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){R.getAll().then((function(e){return c(e)}))}),[]),a?r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Comments on this app:"),a.map((function(e){return r.a.createElement("div",{key:e._id},'"',e.content,'"',r.a.createElement("br",null),r.a.createElement("blockquote",null,"by ",r.a.createElement("b",null,e.user)))})),r.a.createElement(I,null)):r.a.createElement("div",null,"Comments!")},D="https://api.nasa.gov/insight_weather/?api_key=ZLkfBiLh7H19ZeM6kNkEWnHa1MnqA6GmkbKK3pug&feedtype=json&ver=1.0",H={get:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(D);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getToday:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(D);case 2:return t=e.sent,a=t.data.sol_keys,n=a[5],e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},M={all_data:{AT:{av:null},HWS:{av:null},PRW:{av:null}},today:null},W=function(){return console.log("initializeMars called"),function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get();case 2:return a=e.sent,e.next=5,H.getToday();case 5:n=e.sent,r=a["".concat(n)],c={type:"INIT_MARS",data:{day:n,days_data:r,today:n}},console.log(c),t(c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_MARS":case"ONE_DAY":return t.data;default:return e}},V=function(e){var t=e.handleView,a=e.day;return r.a.createElement("div",{className:"small-button",onClick:function(){return t(a)}},a)},Y=function(){var e=Object(u.b)(),t=function(t){e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("".concat(e," called")),t.next=3,H.get();case 3:return n=t.sent,t.next=6,H.getToday();case 6:r=t.sent,c=n["".concat(e)],a({type:"ONE_DAY",data:{day:e,days_data:c,today:r}});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};console.log("we're in marsweather");var a=Object(u.c)((function(e){return e.mars})),n=a.today,c=a.day,l=a.days_data;if(console.log("today's data:",l),console.log(a),void 0===l)return null;console.log("day's data:",l);var o=void 0===l.AT?"(unavailable)":l.AT.av,s=void 0===l.HWS?"(unavailable)":l.HWS.av,i=l.Season,m=void 0===l.PRE?"(unavailable)":l.PRE.av,p="number"===typeof m?(100*m/10325).toFixed(2):"(unavailable)";return c===n?r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Today\u2019s Weather on Mars"),"Today is Sol ",n,". It\u2019s ",i,".",r.a.createElement("br",null),r.a.createElement("br",null),"Average temperature is ",o," \xb0C",r.a.createElement("br",null),r.a.createElement("br",null),"Average wind speed is ",s," m/s",r.a.createElement("br",null),r.a.createElement("br",null),"Atmospheric pressure is ",m," pascals; this is ",p," % of Earth\u2019s air pressure at sea level.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("blockquote",null,r.a.createElement("b",null,"View previous days:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(V,{day:n-1,handleView:t}),r.a.createElement(V,{day:n-2,handleView:t}),r.a.createElement(V,{day:n-3,handleView:t}),r.a.createElement(V,{day:n-4,handleView:t}),r.a.createElement(V,{day:n-5,handleView:t}))):r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Weather on Mars for Sol ",c),"On Sol ",c," it was ",i,".",r.a.createElement("br",null),r.a.createElement("br",null),"Average temperature was ",o," \xb0C",r.a.createElement("br",null),r.a.createElement("br",null),"Average wind speed was ",s," m/s",r.a.createElement("br",null),r.a.createElement("br",null),"Atmospheric pressure was ",m," pascals; this is ",(100*m/10325).toFixed(2)," % of Earth\u2019s air pressure at sea level.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"small-button",onClick:function(){e(W())}},"Back"))},L=a(23),F={searchImg:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-api.nasa.gov/search","?q=").concat(t,"&media_type=image&page=1"));case 2:return a=e.sent,n=a.data.collection.items.filter((function(e){return e.data})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getImg:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-assets.nasa.gov/image","/").concat(t,"/collection.json"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getMetadata:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://images-api.nasa.gov/metadata","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z={res:[],img:null,desc:null,errored:!1},G=function(e,t,a){return function(){var n=Object(f.a)(d.a.mark((function n(r){var c,l;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.getImg(e);case 2:c=n.sent,console.log("imgArray: ",c),l=c[0],r({type:"SET_IMG",data:{img:l,alt:t,desc:a,errored:!1}});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_RESULTS":case"INIT_SEARCH":return t.data;case"SEARCH_ERROR":return Object(L.a)({},e,{errored:!0});case"SET_IMG":return Object(L.a)({},e,{img:t.data.img,alt:t.data.alt,desc:t.data.desc,errored:t.data.errored});default:return e}},B=function(){var e=Object(u.b)(),t=S("text");return r.a.createElement("div",null,r.a.createElement("div",{className:"field-box"},r.a.createElement("h2",null,"Search for images"),r.a.createElement("form",{onSubmit:function(a){var n;a.preventDefault(),e((n=t.value,function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.searchImg(n);case 2:a=e.sent,t({type:"SEARCH_RESULTS",data:{res:a,img:null,desc:null,errored:!1}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("input",Object.assign({},t,{size:"95%",placeholder:"keywords",className:"apod-search-field"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"apod-search-button"},"Search"))))},K=function(e){var t=e.findImg,a=e.result,n=e.styleName;return r.a.createElement("div",{onClick:function(){t(a.data[0].nasa_id,a.data[0].title,a.data[0].description)},className:"".concat(n," link")},a.data[0].title)},Z=function(){var e=["result-dark","result-bright"],t=Object(u.b)(),a=Object(u.c)((function(e){return e.search})).res,n=function(){var e=Object(f.a)(d.a.mark((function e(a,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(G(a,n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("div",null,"No results!"):100===a.length?r.a.createElement("div",null,r.a.createElement("h2",null,"Search results"),r.a.createElement("div",null,"Your search returned ",r.a.createElement("b",null,"over 100")," results."),r.a.createElement("br",null),a.map((function(t,a){return r.a.createElement(K,{result:t,key:t.data[0].nasa_id,styleName:e[a%2],findImg:n})})),r.a.createElement("div",{className:"result-page-nav",onClick:function(){console.log("next please")}},r.a.createElement("b",null,"next page"))):r.a.createElement("div",null,r.a.createElement("h2",null,"Search results"),r.a.createElement("div",null,"Your search returned ",r.a.createElement("b",null,a.length)," results."),r.a.createElement("br",null),a.map((function(t,a){return r.a.createElement(K,{result:t,key:t.data[0].nasa_id,styleName:e[a%2],findImg:n})})))},J=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.search})),a=t.img,n=t.alt,c=t.errored,l=t.desc;return console.log(c),!0===t.errored?(console.log("DANGER HORROR TERROR"),r.a.createElement("div",{className:"img-fail-box"},r.a.createElement("i",null,"Image failed to load. Search result raw data:"),r.a.createElement("br",null),r.a.createElement("div",{className:"img-fail"},a))):r.a.createElement("div",null,r.a.createElement("img",{onError:function(){e((console.log("errored"),function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SEARCH_ERROR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},src:a,alt:n}),r.a.createElement("br",null),r.a.createElement("div",{className:"apod-desc"},l))},U=function(){var e=Object(u.c)((function(e){return e.search})),t=e.res,a=e.img;console.log("img: ",a),console.log("search: ",e);var c=Object(u.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"INIT_SEARCH",data:{res:[],img:null,desc:null,errored:!1}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),t!==[]&&void 0!==t?r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement("br",null),r.a.createElement(J,null),r.a.createElement(Z,null),r.a.createElement("br",null)):r.a.createElement("div",null,"Something went wrong. Sorry.")},Q=a(14),X=a(12),$=(a(65),{padding:"15px"}),ee=function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("h1",null,"SpaceApp"),r.a.createElement(Q.b,{style:$,to:"/"},"APOD"),r.a.createElement(Q.b,{style:$,to:"/mars"},"Mars Weather"),r.a.createElement(Q.b,{stype:$,to:"/search"},"Image Search"),r.a.createElement(Q.b,{style:$,to:"/comments"},"Comments"))},te=function(){var e=Object(u.b)();return Object(n.useEffect)((function(){e(x())}),[e]),Object(n.useEffect)((function(){e(W())}),[e]),Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),r.a.createElement("div",{className:"app"},r.a.createElement(ee,null),r.a.createElement("br",null),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"content"},r.a.createElement(X.c,null,r.a.createElement(X.a,{path:"/comments"},r.a.createElement(C,null)),r.a.createElement(X.a,{path:"/mars"},r.a.createElement(Y,null)),r.a.createElement(X.a,{path:"/search"},r.a.createElement(U,null)),r.a.createElement(X.a,{path:"/"},r.a.createElement(_,null))))),r.a.createElement(o,null))},ae=a(13),ne=a(36),re=a(37),ce=Object(ae.combineReducers)({apod:k,mars:P,search:q,notif:j}),le=Object(ae.createStore)(ce,Object(re.composeWithDevTools)(Object(ae.applyMiddleware)(ne.a)));l.a.render(r.a.createElement(u.a,{store:le},r.a.createElement(Q.a,null,r.a.createElement(te,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.63657870.chunk.js.map