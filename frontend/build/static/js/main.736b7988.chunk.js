(this["webpackJsonpdownload-page"]=this["webpackJsonpdownload-page"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/Deep_Dreamliner500.d5382045.jpg"},101:function(e,a,t){e.exports=t.p+"static/media/Dive-in_Theatre500.25b58cc6.jpg"},102:function(e,a,t){e.exports=t.p+"static/media/Drink_And_Dream500.392e6469.jpg"},103:function(e,a,t){e.exports=t.p+"static/media/Late_Night_Pipe_Dream500.1abe7af7.jpg"},104:function(e,a,t){e.exports=t.p+"static/media/Sign_of_The_Times500.dd7ec8df.jpg"},105:function(e,a,t){e.exports=t.p+"static/media/Sleep_Street_Station500.fc7d9bf9.jpg"},106:function(e,a,t){e.exports=t.p+"static/media/Suburban_Shore500.3640f8ec.jpg"},107:function(e,a,t){e.exports=t.p+"static/media/Summer_Games500.e511e50e.jpg"},108:function(e,a,t){e.exports=t.p+"static/media/Sunset_Pipe_Dream500.ed943ed3.jpg"},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),l=t.n(o),i=(t(75),t(34),t(30),t(35)),c=t(23),m=t(60),s=t(59),u=t(21),d=t(12),p=t(10),g=t(27),f=t.n(g),h=t(56),E=t.n(h);function v(e){return r.a.createElement("div",{className:"header"},e.navElement,r.a.createElement("div",{className:"header-pad"}),r.a.createElement("div",{className:"title"},"HAYDEN CLAY"),r.a.createElement("div",{className:"title-small"},"H C W"))}var b=t(143),N=t(57);function w(e){return console.log("production"),r.a.createElement("div",{className:"paypal-holder"},r.a.createElement(N.PayPalButton,{style:{color:"blue"},options:{clientId:"Ab0vSfnhNQHULGhvjRS5eWlbvhGT1OMyVwzAxsyoYsQzQ-2tLdExqRJtX4ZlNrk1tIiROaUxWLz02fYE"},amount:e.price,shippingPreference:"NO_SHIPPING",onSuccess:function(a,t){f.a.post("http://localhost:8081/add-download",{firstName:a.payer.name.given_name,lastName:a.payer.name.surname,email:a.payer.email_address,paid:!0,price:e.price}).then((function(a){return console.log("Data added: ",a.data),e.downloadHandler()})).catch((function(e){console.log(e.response)}))},catchError:function(e){console.log("Catch error caught")},onError:function(e){console.log("On error caught")}}))}t(94).config();var _=t(141),j=t(137),y=t(2),O=t(58);function S(e){var a=e.inputRef,t=e.onChange,n=Object(y.a)(e,["inputRef","onChange"]);return r.a.createElement(O.a,Object.assign({},n,{getInputRef:a,onValueChange:function(a){t({target:{name:e.name,value:a.value}})},thousandSeparator:!0,isNumericString:!0,decimalScale:2,fixedDecimalScale:!0,allowEmptyFormatting:!0,allowNegative:!1,prefix:"$"}))}var x=t(142),D=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:250},"& label.Mui-focused":{color:"black"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"rgb(170, 198, 250)"}}},button:{margin:e.spacing(1),background:"#90caf9",color:"white",height:48,padding:"0 40px"}}}));function C(e){var a=D(),t=Object(n.useState)(""),o=Object(d.a)(t,2),l=o[0],i=o[1],c=Object(n.useState)(""),m=Object(d.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),h=g[0],E=g[1],v=Object(n.useState)(!1),b=Object(d.a)(v,2),N=b[0],w=b[1],j=Object(n.useState)(!1),y=Object(d.a)(j,2),O=y[0],S=y[1],C=Object(n.useState)(!1),k=Object(d.a)(C,2),T=k[0],P=k[1];return r.a.createElement("div",{className:"free-form-holder"},r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"on"},r.a.createElement("div",null,r.a.createElement(_.a,{error:N,onChange:function(e){i(e.target.value)},helperText:N&&"Cannot be empty",required:!0,id:"firstName",label:"First Name",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(_.a,{error:O,onChange:function(e){u(e.target.value)},helperText:O&&"Cannot be empty",required:!0,id:"lastName",label:"Last Name",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(_.a,{error:T,onChange:function(e){E(e.target.value)},helperText:T&&"Must be valid email",required:!0,id:"email",label:"Email",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(x.a,{className:a.button,onClick:function(){var a=""===l,t=""===s,n=!function(e){return!!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)}(h);w(a),S(t),P(n),a||t||n?console.log("Error present in form"):f.a.post("http://localhost:8081/add-download",{firstName:l,lastName:s,email:h,paid:!1,price:"0"}).then((function(a){return console.log("Data added: ",a.data),e.downloadHandler()})).catch((function(e){console.log(e.response)}))},variant:"contained",disableElevation:!0},"Download"))))}function k(e){var a=D(),t=Object(n.useState)(!1),o=Object(d.a)(t,2),l=o[0],i=o[1];return r.a.createElement("div",{className:"confirmation"},r.a.createElement("div",{className:"confirmation-text"},"Thank you! Your download should start any second now. If it has not started within 15 seconds, click the button again"),r.a.createElement("div",null,r.a.createElement(x.a,{disabled:l,className:a.button,onClick:function(){e.downloadHandler(),i(!0),setTimeout((function(){return i(!1)}),7e3)},variant:"contained",disableElevation:!0},"Download")))}function T(e){var a=Object(n.useState)(!0),o=Object(d.a)(a,2),l=o[0],i=o[1],c=Object(n.useState)("5.00"),m=Object(d.a)(c,2),s=m[0],g=m[1],h=Object(n.useState)(!1),N=Object(d.a)(h,2),j=N[0],y=N[1],O=Object(n.useState)(!1),x=Object(d.a)(O,2),D=x[0],T=x[1],A=Object(n.useState)(""),H=Object(d.a)(A,2),I=H[0],B=H[1],M=P();var L=function(e){var a={};return e.keys().forEach((function(t,n){a[t.replace("./","")]=e(t)})),a}(t(55)),q=e.match.params.imageName,G=q+"500.jpg",R=q.replace(/_/g," ");function U(){y(!0),f.a.get("http://localhost:8081/download",{params:{imageName:q},responseType:"blob"}).then((function(e){var a=new Blob([e.data],{type:"image/jpg"});E.a.saveAs(a,"image.jpg")})).catch((function(e){T(!0),e.response?B("The following error was received: "+e+", with the following status message: "+e.response.statusText):e.request?B("A request was made, but no response was received: "+e):B("An unknown error occured: "+e.message)}))}return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){i("0.00"!==s&&".00"!==s)}),[s]),G in L?r.a.createElement("div",{className:"App"},r.a.createElement(v,{navElement:r.a.createElement(u.b,{to:"/"},"\u2190"," Back to All Images")}),r.a.createElement("div",{className:"download-wrapper"},r.a.createElement("div",{className:"download-photo-block"},r.a.createElement("img",{src:L[G],alt:R})),r.a.createElement("div",{className:"download-text-block"},r.a.createElement("div",{className:"download-text"},"A High-resolution download of ",R,". Simply pay as little or as much as you want: whatever you feel is right."),r.a.createElement("div",{className:"download-text"},"Payments are handled securely through Paypal."),r.a.createElement("div",{className:"download-text"},"Note that purchasing and/or downloading this image does not grant you any rights to use it commercially. This image is for personal use only, and may not be used in any commerical or for-profit manner."),r.a.createElement("div",null),r.a.createElement("div",{className:"price-holder"},r.a.createElement("form",{className:M.root,noValidate:!0,autoComplete:"on"},r.a.createElement(_.a,{label:"Pay what you want",value:s,onChange:function(e){g(e.target.value)},name:"numberformat",variant:"outlined",id:"formatted-numberformat-input",InputProps:{inputComponent:S}}))))),r.a.createElement("div",{className:"form-animation-holder"},r.a.createElement("div",{className:"form-holder"},r.a.createElement(b.a,{unmountOnExit:!0,in:l&&!j&&!D,timeout:{enter:300,exit:100},classNames:"pay-form"},r.a.createElement(w,{downloadHandler:U,price:s}))),r.a.createElement("div",{className:"positioning-form-holder"},r.a.createElement(b.a,{unmountOnExit:!0,in:!l&&!j&&!D,timeout:{enter:300,exit:100},classNames:"pay-form"},r.a.createElement(C,{downloadHandler:U}))),r.a.createElement(b.a,{unmountOnExit:!0,in:j&&!D,timeout:{enter:300,exit:100},classNames:"pay-form"},r.a.createElement(k,{downloadHandler:U})),D&&r.a.createElement("div",{className:"positioning-form-holder"},r.a.createElement("div",{className:"error-message"},r.a.createElement("div",null,"Oh no! An error occured. Please refresh and try again. "),r.a.createElement("div",null,"If the error persists, please email haydilliams@gmail.com the error message below:"),r.a.createElement("div",null,I))))):r.a.createElement(p.a,{to:{pathname:"/404",state:{}}})}var P=Object(j.a)((function(e){return{root:{"& > *":{width:"100%"},"& label.Mui-focused":{color:"black"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"rgb(170, 198, 250)"}}}}})),A=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=function(e){var a={};return e.keys().forEach((function(t,n){a[t.replace("./","")]=e(t)})),a}(t(55)),a=this.props.imageName,n=this.props.imageName+"500.jpg",o=this.props.imageName.replace(/_/g," ");return r.a.createElement("div",{className:"photo-wrapper"},r.a.createElement(u.b,{to:"/download/"+a,className:"photo-background",render:r.a.createElement(T,{props:a})},r.a.createElement("div",{className:"photo-background-slide"}),r.a.createElement("img",{src:e[n],alt:o}),r.a.createElement("div",{className:"photo-button-holder"},r.a.createElement("div",{className:"photo-button-text"},"Download"))),r.a.createElement("div",{className:"photo-text"},o))}}]),n}(n.Component);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{navElement:r.a.createElement("a",{href:"https://www.haydenclay.com"},"\u2190"," Back to Website")}),r.a.createElement("div",{className:"top-message"},"High quality downloads at whatever price you want."),r.a.createElement("div",{className:"wrapper"},r.a.createElement(A,{imageName:"Drink_And_Dream"}),r.a.createElement(A,{imageName:"Sunset_Pipe_Dream"}),r.a.createElement(A,{imageName:"Bathing_Culture"}),r.a.createElement(A,{imageName:"Big_City_Pipe_Dream"}),r.a.createElement(A,{imageName:"Late_Night_Pipe_Dream"}),r.a.createElement(A,{imageName:"Deep_Dreamliner"}),r.a.createElement(A,{imageName:"Suburban_Shore"}),r.a.createElement(A,{imageName:"Dive-in_Theatre"}),r.a.createElement(A,{imageName:"Sleep_Street_Station"}),r.a.createElement(A,{imageName:"Summer_Games"}),r.a.createElement(A,{imageName:"Sign_of_The_Times"})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"Developed with love by Hayden Clay Williams"),r.a.createElement("div",null,"Questions or Comments? Email me at haydilliams@gmail.com")))};l.a.render(r.a.createElement(u.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:H}),r.a.createElement(p.b,{exact:!0,path:"/download/:imageName",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(p.b,{component:function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{navElement:r.a.createElement(u.b,{to:"/"},"<--"," Back to All Images")}),r.a.createElement("div",null,"404 NOT FOUND. UH OH!"))}}))),document.getElementById("root"))},30:function(e,a,t){},34:function(e,a,t){},55:function(e,a,t){var n={"./Bathing_Culture500.jpg":98,"./Big_City_Pipe_Dream500.jpg":99,"./Deep_Dreamliner500.jpg":100,"./Dive-in_Theatre500.jpg":101,"./Drink_And_Dream500.jpg":102,"./Late_Night_Pipe_Dream500.jpg":103,"./Sign_of_The_Times500.jpg":104,"./Sleep_Street_Station500.jpg":105,"./Suburban_Shore500.jpg":106,"./Summer_Games500.jpg":107,"./Sunset_Pipe_Dream500.jpg":108};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=55},70:function(e,a,t){e.exports=t(110)},75:function(e,a,t){},98:function(e,a,t){e.exports=t.p+"static/media/Bathing_Culture500.7af01a39.jpg"},99:function(e,a,t){e.exports=t.p+"static/media/Big_City_Pipe_Dream500.050b2b3b.jpg"}},[[70,1,2]]]);
//# sourceMappingURL=main.736b7988.chunk.js.map