(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"23f7":function(t,s,e){t.exports=e.p+"img/sticker-no.0b8f9cca.svg"},"2d2a":function(t,s,e){"use strict";var a=e("9552"),i=e.n(a);i.a},"3af2":function(t,s,e){},"3c3c":function(t,s,e){"use strict";var a=e("e0b9"),i=e.n(a);i.a},"43a4":function(t,s,e){"use strict";var a=e("3af2"),i=e.n(a);i.a},"890d":function(t,s,e){t.exports=e.p+"img/sticker-thx.f70714e0.svg"},9552:function(t,s,e){},cb87:function(t,s,e){t.exports=e.p+"img/sticker-wtf.cda3a13a.svg"},cc5f:function(t,s,e){t.exports=e.p+"img/sticker-hi.aa8c358b.svg"},e0b9:function(t,s,e){},e8df:function(t,s,e){t.exports=e.p+"img/sticker-lol.98a69daf.svg"},f820:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"chatRoom"},[a("div",{staticClass:"row mx-0"},[a("div",{staticClass:"cols d-flex align-items-start flex-column"},[a("FriendInfoCard"),a("InfoCard"),a("img",{staticClass:"mt-auto",attrs:{src:e("8633")}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"chatBox"},[a("div",{ref:"msgBox",staticClass:"msgBox"},[a("div",{staticClass:"friendMsg"},[t._v("This is some text within a card body.")]),a("div",{staticClass:"d-flex align-items-end flex-column"},[t._l(t.selfMsgs,function(s){return[a("div",{staticClass:"selfMsg",class:{img:"sticker"===s.type}},["text"===s.type?[t._v(t._s(s.content))]:"picture"===s.type?[a("img",{attrs:{src:s.content}})]:"sticker"===s.type?[a("img",{attrs:{src:s.content}})]:t._e()],2)]})],2)]),a("div",{staticClass:"controlBox row mx-0 d-flex justify-content-between"},[a("div",{staticClass:"col-3 my-auto"},[t._m(0),a("i",{staticClass:"fas fa-paperclip"}),a("label",{staticClass:"uploadImage"},[a("input",{attrs:{type:"file",accept:"image/jpg, image/png, image/jpeg"},on:{change:t.uploadImage}})]),a("i",{staticClass:"fas fa-image"}),a("Stickers",{on:{sendSticker:t.showSticker}}),t._m(1)],1),a("div",{staticClass:"col-9 input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}}),a("a",{attrs:{href:"javascript:;"},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg(s)},click:t.sendMsg}},[a("i",{staticClass:"fab fa-telegram-plane"})])])])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("label",{staticClass:"paperclip"},[e("input",{attrs:{type:"file"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{"data-toggle":"collapse",href:".stickers"}},[e("i",{staticClass:"far fa-laugh"})])}],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card friend-info",staticStyle:{width:"350px"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row d-flex align-items-center"},[t._m(0),t._m(1),e("a",{attrs:{href:"javascript:;"},on:{click:function(t){}}},[e("i",{staticClass:"fas fa-ellipsis-v"})])])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-3"},[a("div",{staticClass:"img-container d-flex align-center justify-content-center"},[a("img",{attrs:{src:e("55c3")}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-9"},[e("h4",[t._v("Nekoneko")]),e("div",{staticClass:"info d-flex align-items-center"},[e("i",{staticClass:"active fab fa-facebook"}),e("label",[t._v("123456")])])])}],o={name:"FriendInfoCard",data:function(){return{}},methods:{}},r=o,l=(e("43a4"),e("2877")),f=Object(l["a"])(r,n,c,!1,null,null,null),u=f.exports,d=e("a970"),p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stickers collapse"},[e("div",{staticClass:"box d-flex justify-content-center"},[t._l(t.stickers,function(s,a){return[e("a",{attrs:{href:".stickers","data-toggle":"collapse"},on:{click:function(s){return t.sendStickerIndex(a)}}},[e("img",{attrs:{src:s}})])]})],2)])},g=[],m={name:"Stickers",data:function(){return{stickers:[e("cc5f"),e("e8df"),e("23f7"),e("fe06"),e("890d"),e("cb87")]}},methods:{sendStickerIndex:function(t){console.log(t),this.$emit("sendSticker",this.stickers[t])}}},v=m,h=(e("2d2a"),Object(l["a"])(v,p,g,!1,null,null,null)),k=h.exports,x={name:"chatRoom",components:{FriendInfoCard:u,InfoCard:d["a"],Stickers:k},data:function(){return{message:"",picture:"",selfMsgs:[{type:"text",content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.😀"}],selfStickers:[]}},watch:{selfMsgs:{handler:function(t){var s=this;this.$nextTick(function(){s.scrollToBottom()})},deep:!0}},methods:{sendMsg:function(){var t={type:"text",content:this.message};this.selfMsgs.push(t)},showSticker:function(t){var s={type:"sticker",content:t};this.selfMsgs.push(s)},uploadImage:function(t){var s={type:"picture",content:t};this.selfMsgs.push(s),console.log(t.target.value)},scrollToBottom:function(){var t=this.$refs.msgBox,s=t.scrollHeight;this.$nextTick(function(){t.scrollTop=s}),console.log(this.$refs.msgBox.scrollHeight),console.log("top:"+this.$refs.msgBox.scrollTop)}}},C=x,_=(e("3c3c"),Object(l["a"])(C,a,i,!1,null,null,null));s["default"]=_.exports},fe06:function(t,s,e){t.exports=e.p+"img/sticker-ok.44bf026a.svg"}}]);
//# sourceMappingURL=about.d6d3d59f.js.map