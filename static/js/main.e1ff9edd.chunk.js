(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{80:function(e,t,n){e.exports=n(97)},85:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"AUTH_USER_GET",(function(){return T})),n.d(r,"AUTH_USER_GET_INPROGRESS",(function(){return w})),n.d(r,"AUTH_USER_GET_SUCCESS",(function(){return U})),n.d(r,"AUTH_USER_GET_FAILURE",(function(){return x})),n.d(r,"AUTH_CLEAR_TOKEN",(function(){return G})),n.d(r,"AUTH_SAVE_TOKEN",(function(){return N}));var a={};n.r(a),n.d(a,"DEVICES_GET_ALL",(function(){return Ee})),n.d(a,"DEVICES_GET_ALL_INPROGRESS",(function(){return me})),n.d(a,"DEVICES_GET_ALL_SUCCESS",(function(){return he})),n.d(a,"DEVICES_GET_ALL_FAILURE",(function(){return ge})),n.d(a,"DEVICES_GET",(function(){return be})),n.d(a,"DEVICES_GET_INPROGRESS",(function(){return Se})),n.d(a,"DEVICES_GET_SUCCESS",(function(){return Oe})),n.d(a,"DEVICES_GET_FAILURE",(function(){return ye})),n.d(a,"DEVICES_CLONE",(function(){return Ce})),n.d(a,"DEVICES_CLONE_INPROGRESS",(function(){return je})),n.d(a,"DEVICES_CLONE_SUCCESS",(function(){return _e})),n.d(a,"DEVICES_CLONE_FAILURE",(function(){return Re})),n.d(a,"DEVICES_SET_SOURCE",(function(){return ke})),n.d(a,"DEVICES_SET_REVISION",(function(){return Ie})),n.d(a,"DEVICES_SET_CLONE_USER_META",(function(){return Te})),n.d(a,"DEVICES_SET_DESTINATION",(function(){return we})),n.d(a,"DEVICES_CLEAN_FORM",(function(){return Ue})),n.d(a,"DEVICE_SET_FORM_ERRORS",(function(){return xe}));var c=n(0),o=n.n(c),i=n(14),u=n.n(i),s=(n(85),n(86),n(59)),l=n(47),d=n(143),p=n(142),f=n(144),v=Object(s.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,0,6)},heroButtons:{marginTop:e.spacing(8)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},linearProgress:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},flex:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& > *":{margin:e.spacing(1)}},vertialSpace:{marginBottom:e.spacing(2)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function E(){return o.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(p.a,{color:"inherit",href:"https://www.github.com/highercomve/dolly"},"Sergio Marin")," ",(new Date).getFullYear(),".")}function m(e){var t=e.children,n=v();return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null),o.a.createElement("header",null,o.a.createElement(f.a,{maxWidth:"md"},o.a.createElement("img",{src:"/logo.png",alt:"Dolly"}))),o.a.createElement("main",null,t),o.a.createElement("footer",{className:n.footer},o.a.createElement(l.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Pantahub cloner is a thirdpary opensource project"),o.a.createElement(E,null)))}var h=n(16),g=n(35),b=n(153),S=n(160),O=n(154),y=n(155),C=n(156),j=n(148),_=n(64),R=n.n(_),k=n(8),I=n(11),T="AUTH_USER_GET",w="auth/user/get/inprogress",U="auth/user/get/success",x="auth/user/get/failure",G="auth/token/clear",N="auth/token/save",L=n(61),D=n.n(L),A=n(7),P=n.n(A),V=n(13),F=n(62),M=n.n(F),W="https://api.pantahub.com",H=function(){var e=Object(V.a)(P.a.mark((function e(t){var n,r,a,c,o,i,u=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2&&void 0!==u[2]?u[2]:"application/json",a=u.length>3&&void 0!==u[3]?u[3]:"GET",c=u.length>4&&void 0!==u[4]?u[4]:{},o={"Content-Type":r},n&&(o.Authorization="Bearer ".concat(n)),i={method:a,headers:o},"GET"!==a&&"HEAD"!==a&&(i.body=JSON.stringify(c)),e.abrupt("return",M()(t,i));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(V.a)(P.a.mark((function e(t){var n,r,a,c,o,i=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:"",a=i.length>3&&void 0!==i[3]?i[3]:{},e.next=5,H(t,r,"application/json",n,a);case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",{ok:c.ok,redirected:c.redirected,headers:c.headers,status:c.status,json:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(V.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B(t,"GET",n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(V.a)(P.a.mark((function e(t,n,r){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B(t,"POST",n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function J(e,t,n){return K.apply(this,arguments)}function K(){return(K=Object(V.a)(P.a.mark((function e(t,n,r){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:(a=e.sent).ok?n(a.json):r("string"===typeof a.json.Error?{code:a.status,message:a.json.Error}:a.json),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a={ok:!1,json:{code:0,message:e.t0}},r(a.json);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var $="".concat(W,"/auth/auth_status"),q="".concat("https://www.pantahub.com","/oauth2/authorize"),Q=function(){return"".concat(location.origin,"/")};var X=function(){localStorage.removeItem("_ph_token"),location.href=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prn:pantahub.com:apis:/base/user.readonly",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"prn:pantahub.com:apis:/cloner";return t=t||Q(),encodeURI("".concat(q,"?client_id=").concat(r,"&scope=").concat(e,"&redirect_uri=").concat(t,"&response_type=").concat(n))}()};function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(V.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z($,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te,ne=function(e,t,n){return t.payload};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{success:function(n){return{type:e["".concat(t,"_SUCCESS")],payload:n}},failure:function(n){return{type:e["".concat(t,"_FAILURE")],error:n}},inProgress:function(){return{type:e["".concat(t,"_INPROGRESS")]}}}}function ae(e,t,n,r){var a,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"error",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:ne,i=t["".concat(n,"_INPROGRESS")],u=t["".concat(n,"_FAILURE")],s=t["".concat(n,"_SUCCESS")];return a={},Object(k.a)(a,i,(function(t,n){return Object(I.a)({},t,{status:e.IN_PROGRESS})})),Object(k.a)(a,u,(function(t,n){var r;return Object(I.a)({},t,(r={},Object(k.a)(r,"".concat(c),n.error),Object(k.a)(r,"status",e.FAILURE),r))})),Object(k.a)(a,s,(function(t,n){var a;return r?Object(I.a)({},t,(a={},Object(k.a)(a,r,o(t,n,r)),Object(k.a)(a,"status",e.SUCCESS),a)):Object(I.a)({},t,{},o(t,n,r),{status:e.SUCCESS})})),a}var ce=(localStorage.getItem("_ph_token")||"").split("|"),oe=Object(h.a)(ce,2),ie=oe[0],ue=oe[1],se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return D()(e)}catch(t){return{}}},le={IN_PROGRESS:"INPROGRESS",SUCCESS:"SUCCESS",FAILURE:"FAILURE"},de=Object(I.a)({username:ue||"",token:ie||null,exp:null,id:"",nick:"",orig_iat:null,prn:"",roles:"",type:"",gettingToken:!1,getTokenError:null,status:null},se(ie)),pe=Object(I.a)({},ae(le,r,T,void 0,void 0,(function(e,t,n){return Object(I.a)({},e,{},t.payload)})),(te={},Object(k.a)(te,N,(function(e,t){return Object(I.a)({},e,{},se(t.payload),{token:t.payload})})),Object(k.a)(te,G,(function(e,t){return de})),te));function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return pe[t.type]?pe[t.type](e,t):e}var ve,Ee="DEVICES_GET_ALL",me="devices/get/all/inprogress",he="devices/get/all/success",ge="devices/get/all/failure",be="DEVICES_GET",Se="devices/get/inprogress",Oe="devices/get/success",ye="devices/get/failure",Ce="DEVICES_CLONE",je="devices/clone/inprogress",_e="devices/clone/success",Re="devices/clone/failure",ke="devices/set/source",Ie="devices/set/selected-revision",Te="devices/set/clone-user-meta",we="devices/set/destination",Ue="devices/clear/form",xe="devices/set/form-errors",Ge={IN_PROGRESS:"inprogr",FAILURE:"failure",SUCCESS:"success",CLONING:{IN_PROGRESS:"IN_PROGRESS",FAILURE:"FAILURE",SUCCESS:"SUCCESS"},WAITING_DEPLOY:"WAITING_DEPLOY"},Ne={list:[],status:null,clone:null,source:null,destination:null,selectedRevision:null,cloneUserMeta:!1,formErrors:{}},Le=function(e,t,n){return Object(I.a)({},e[n],{},t.payload)},De=Object(I.a)({},ae(Ge,a,Ee,"list",void 0,Le),{},ae(Ge.CLONING,a,Ce,"clone",void 0,Le),(ve={},Object(k.a)(ve,we,(function(e,t){return Object(I.a)({},e,{destination:t.payload})})),Object(k.a)(ve,Te,(function(e,t){return Object(I.a)({},e,{cloneUserMeta:t.payload})})),Object(k.a)(ve,xe,(function(e,t){return Object(I.a)({},e,{formErrors:t.payload})})),Object(k.a)(ve,Ie,(function(e,t){return Object(I.a)({},e,{selectedRevision:t.payload})})),Object(k.a)(ve,ke,(function(e,t){return Object(I.a)({},e,{source:t.payload,selectedRevision:t.payload.revisions.find((function(e){return e.rev===t.payload.revision}))})})),Object(k.a)(ve,Ue,(function(e){return Object(I.a)({},e,{source:null,destination:null,selectedRevision:null,cloneUserMeta:!1})})),ve));function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return De[t.type]?De[t.type](e,t):e}var Pe=n(158),Ve=n(159),Fe=Object(s.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function Me(e){var t=e.value,n=e.defaultClasses,r=void 0===n?{}:n,a=e.devices,c=e.label,i=e.onChange,u=void 0===i?function(){return null}:i,s=Fe();return o.a.createElement(Ve.a,{clearOnEscape:!0,id:"devices-select",style:{width:"100%"},options:a,value:t,classes:Object(I.a)({},r,{option:s.option}),autoHighlight:!0,getOptionLabel:function(e){return e["device-nick"]},onChange:function(e,t){u(t)},renderOption:function(e){return o.a.createElement(o.a.Fragment,null,e["device-nick"])},renderInput:function(e){return o.a.createElement(Pe.a,Object.assign({},e,{label:c,variant:"outlined",fullWidth:!0,inputProps:Object(I.a)({},e.inputProps,{autoComplete:"Device nick"})}))}})}var We=n(162),He=n(152),Be=n(150),ze=n(151),Ye=n(149);function Je(e){var t=e.buttonTxt,n=void 0===t?"":t,r=e.variant,a=void 0===r?"outlined":r,c=e.color,i=void 0===c?"primary":c,u=e.dialogText,s=void 0===u?"":u,l=e.dialogBody,d=void 0===l?null:l,p=e.cancelTxt,f=void 0===p?"Cancel":p,v=e.confirmTxt,E=void 0===v?"Confirm":v,m=e.onConfirm,g=void 0===m?function(){return null}:m,b=e.disabled,S=o.a.useState(!1),O=Object(h.a)(S,2),y=O[0],C=O[1],_=function(){C(!1)};return o.a.createElement("div",null,o.a.createElement(j.a,{variant:a,color:i,onClick:function(){C(!0)},disabled:b},n),o.a.createElement(We.a,{open:y,onClose:_,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(Ye.a,{id:"alert-dialog-title"},s),o.a.createElement(Be.a,null,o.a.createElement(ze.a,{id:"alert-dialog-description"},d)),o.a.createElement(He.a,null,o.a.createElement(j.a,{onClick:_,color:"primary"},f),o.a.createElement(j.a,{onClick:function(){C(!1),g()},color:"primary",autoFocus:!0},E))))}"".concat(W,"/devices");var Ke="".concat(W,"/trails/summary"),$e=function(e){return"".concat(W,"/trails/").concat(e,"/steps")},qe=function(){var e=Object(V.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(Ke,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(V.a)(P.a.mark((function e(t,n,r){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y($e(n),t,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(V.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z($e(n)+"?progress.status={%22$ne%22:%22%22}",t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ze=re(r,T),et=function(){return X(),{type:G}},tt=function(e){var t=function(e){return(e.match(/([^#=&]+)(=([^&]*))?/g)||[]).reduce((function(e,t){var n=t.split("="),r=Object(h.a)(n,2),a=r[0],c=r[1];return e[a]=c,e}),{})}(e);return function(e){localStorage.setItem("_ph_token",e)}(t.access_token),{type:N,payload:t.access_token}},nt=function(e,t){return function(n){n(function(e,t){if(401===e)return et();return{type:"error/set",payload:{type:e,error:t}}}(e.code,e.messsage)),n(t(e))}};var rt=re(a,Ee),at=(re(a,be),re(a,Ce)),ct=function(e){var t={valid:!0},n=Object.values(e.list);return null===e.source&&(t.source="Please select a source device"),null===e.destination&&(t.destination="Please select a destination device"),null===e.destination||n.some((function(t){return t.deviceid===e.destination.deviceid}))||(t.destination="You need to be owner of the destination device"),null!==e.source&&null!==e.destination&&e.source.deviceid===e.destination.deviceid&&(t.destionation="Please select another destination device, the destination can't be the same as source"),Object.keys(t).length>1&&(t.valid=!1),t},ot=Object(s.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function it(e){var t=e.device,n=e.revision,r=e.label,a=e.onChange,c=void 0===a?function(){return null}:a,i=ot();return t?o.a.createElement(Ve.a,{clearOnEscape:!0,autoHighlight:!0,id:"devices-revision-select",style:{width:"100%"},options:t.revisions,classes:{option:i.option},onChange:function(e,t){c(t)},value:n,getOptionLabel:function(e){return"".concat(e.rev," (").concat(e["state-sha"],")")},renderOption:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,e.rev),e["commit-msg"])},renderInput:function(e){return o.a.createElement(Pe.a,Object.assign({},e,{label:r,variant:"outlined",fullWidth:!0,inputProps:Object(I.a)({},e.inputProps,{autoComplete:"Device nick"})}))}}):null}var ut=Object(g.b)((function(e){return{devices:e.devices,user:e.auth}}),{getDevices:function(){return function(){var e=Object(V.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(rt.inProgress()),r=n(),e.abrupt("return",J(Object(V.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe(r.auth.token);case 2:return t=e.sent,e.next=5,Promise.all(t.json.map(function(){var e=Object(V.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe(r.auth.token,t.deviceid);case 2:return n=e.sent,t.revisions=n.json.sort((function(e,t){return e.rev<t.rev})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return n=e.sent,e.abrupt("return",Object(I.a)({},t,{json:n}));case 7:case"end":return e.stop()}}),e)}))),(function(e){return t(rt.success(e))}),(function(e){return t(nt(e,rt.failure))})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setSource:function(e){return{type:ke,payload:e}},setDestination:function(e){return{type:we,payload:e}},setCloneUserMeta:function(e){return{type:Te,payload:e}},cleanForm:function(){return{type:Ue}},setSelectedRevision:function(e){return{type:Ie,payload:e}},cloneDevice:function(){return function(){var e=Object(V.a)(P.a.mark((function e(t,n){var r,a,c,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(at.inProgress()),r=n(),(a=ct(r.devices)).valid){e.next=7;break}return t(at.failure({type:"invalid",error:"invalid form"})),t({type:xe,payload:a}),e.abrupt("return");case 7:return c={state:r.devices.selectedRevision.state,rev:-1,"commit-msg":"Cloned from device ".concat(r.devices.source["device-nick"]," rev (").concat(r.devices.selectedRevision.rev,")")},e.next=10,J(Qe.bind(null,r.auth.token,r.devices.destination.deviceid,c),(function(e){return t(at.success(e))}),(function(e){return t(nt(e,at.failure))}));case 10:return o=e.sent,r.devices.cloneUserMeta&&console.info("TODO: Clone user-meta is not implemented yet"),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})((function(e){var t=e.user,n=e.devices,r=e.getDevices,a=e.setSource,i=e.setDestination,u=e.setCloneUserMeta,s=e.cleanForm,d=e.setSelectedRevision,p=e.cloneDevice,E=v(),m=Object(c.useState)(!1),g=Object(h.a)(m,2),_=g[0],k=g[1];return Object(c.useEffect)((function(){t.status===le.SUCCESS&&null===n.status&&r()}),[n,n.status,r,t,t.status]),Object(c.useEffect)((function(){n.status===Ge.IN_PROGRESS||n.status===Ge.CLONING||n.status===Ge.WAITING_DEPLOY?k(!0):k(!1)}),[n,n.status]),n.list.length<=0?null:o.a.createElement("div",{className:E.heroContent},o.a.createElement(f.a,{maxWidth:"md"},o.a.createElement(l.a,{component:"h4",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome, ",t.nick," to Dolly!"),o.a.createElement(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Lets start cloning devices, this feature works with public devices or personal devices."),o.a.createElement("div",{className:E.heroButtons},o.a.createElement(b.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(b.a,{item:!0,md:5},o.a.createElement(Me,{value:n.source,devices:Object.values(n.list),label:"Choose a device source",onChange:a}),o.a.createElement("br",null),o.a.createElement(it,{className:E.vertialSpace,device:n.source,revision:n.selectedRevision,label:"Choose revision source",onChange:d}),o.a.createElement(O.a,{justify:"center"},o.a.createElement(y.a,{control:o.a.createElement(S.a,{id:"user-meta",color:"primary",checked:n.cloneUserMeta,onChange:function(e){return u(e.target.checked)},inputProps:{"aria-label":"Clone all user-meta data (only if you are the owner)"}}),label:"Clone all user-meta data (only device owner)"}))),o.a.createElement(b.a,{item:!0},o.a.createElement(R.a,{style:{marginTop:"10px"},fontSize:"large"})),o.a.createElement(b.a,{item:!0,md:5},o.a.createElement(Me,{value:n.destination,devices:Object.values(n.list),label:"Choose a device destination",onChange:i})),o.a.createElement(b.a,{item:!0,md:12},_?o.a.createElement("div",{className:E.linearProgress},o.a.createElement(C.a,null)," "):o.a.createElement("div",{className:E.flex},o.a.createElement(j.a,{variant:"contained",color:"default",onClick:s},"Clear form"),o.a.createElement(Je,{variant:"contained",color:"primary",buttonTxt:"Start cloning process",disabled:!n.source||!n.destination||!n.selectedRevision,dialogText:n.source&&n.destination&&n.selectedRevision?"Are you sure you want to clone ".concat(n.source["device-nick"]," (").concat(n.selectedRevision.rev,") to ").concat(n.destination["device-nick"],"?"):"",onConfirm:p})))))))})),st=n(18),lt=n(25),dt=n(65),pt=n(66),ft={type:null,error:null};function vt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"error/clean":return ft;case"error/set":return Object(I.a)({},e,{},t.payload);default:return e}}var Et=function(){return Object(lt.combineReducers)({devices:Ae,errors:vt,auth:fe})},mt=Object(dt.composeWithDevTools)({trace:!0,traceLimit:25}),ht=n(157);var gt=Object(g.b)((function(e){return{token:e.auth.token,status:e.auth.status}}),{Login:et,GetUser:function(){return function(){var e=Object(V.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(Ze.inProgress()),(r=n()).auth.token){e.next=4;break}return e.abrupt("return",null);case 4:return e.abrupt("return",J(Z.bind(null,r.auth.token),(function(e){return t(Ze.success(e))}),(function(e){return t(nt(e,Ze.failure))})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},SaveTokenAndRedirect:function(e){return function(t){t(tt(e)),location.hash=""}}})((function(e){var t=e.children,n=e.status,r=e.token,a=e.Login,i=e.GetUser,u=e.SaveTokenAndRedirect;return Object(c.useEffect)((function(){var e=location.hash;""===e?e||r||a():u(e)}),[r,u,a]),Object(c.useEffect)((function(){null===n&&i()}),[i,n]),n===le.INPROGRESS?o.a.createElement(ht.a,null):o.a.createElement("div",{className:"App"},t)})),bt=Object(lt.createStore)(Et(),mt(lt.applyMiddleware.apply(void 0,Object(st.a)([pt.a].filter((function(e){return!!e}))))));var St=function(){return o.a.createElement(g.a,{store:bt},o.a.createElement(gt,null,o.a.createElement(m,null,o.a.createElement(ut,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(St,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[80,1,2]]]);
//# sourceMappingURL=main.e1ff9edd.chunk.js.map