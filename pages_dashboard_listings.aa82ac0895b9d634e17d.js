webpackJsonp([4],{DZ1W:function(t,e,i){"use strict";var s=i("//Fk"),a=i.n(s),n=i("Xxa5"),o=i.n(n),r=i("exGp"),l=i.n(r),d=i("kxiW"),c=i.n(d);i("cWbj");e.a={data:function(){return{newTitle:"",newCategory:"",newDescription:"",newWebsite:"",newImage:"",newCF1:"",newCF2:"",newCF3:"",newCF4:"",newCF5:"",validation:"",newListingLoading:!1,addListingForm:!1}},created:function(){this.$store.dispatch("getFirebaseDatabase")},computed:{listings:function(){return this.$store.getters.getField("listings")},customFields:function(){return this.$store.getters.getField("customFields")},categories:function(){return this.$store.getters.getField("categories")},customFieldsValues:function(){return this.$store.getters.getField("customFieldsValues")},dataLoaded:function(){return this.$store.getters.getField("dataLoaded")}},methods:{addItem:function(){var t=l()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newTitle&&""!=this.newCategory&&""!=this.newDescription&&""!=this.newWebsite){t.next=4;break}this.validation="Please fill in all the required fields!",t.next=23;break;case 4:if(this.validation="",""==document.getElementById("new-listing-image").value){t.next=9;break}return t.next=8,this.uploadImage();case 8:this.newImage=t.sent;case 9:this.$store.commit("addItem",{title:this.newTitle,type:"listings",category:this.newCategory,description:this.newDescription,website:this.newWebsite,image:this.newImage,custom_field_1:this.newCF1,custom_field_2:this.newCF2,custom_field_3:this.newCF3,custom_field_4:this.newCF4,custom_field_5:this.newCF5}),this.ddListingForm=!1,this.newTitle="",this.newCategory="",this.newDescription="",this.newWebsite="",this.newImage="",this.validation="",this.newListingLoading=!1,this.newCF1="",this.newCF2="",this.newCF3="",this.newCF4="",this.newCF5="";case 23:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),removeItem:function(t,e){this.$store.commit("removeItem",{id:t,type:e})},updateItem:function(){var t=l()(o.a.mark(function t(e,i,s,a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"image"==s||(n=a.target.value,this.$store.commit("updateItem",{id:e,type:i,field:s,data:n}));case 1:case"end":return t.stop()}},t,this)}));return function(e,i,s,a){return t.apply(this,arguments)}}(),uploadImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=c.a.storage().ref();this.newListingLoading=!0;var s=void 0;null==t?s=document.getElementById("new-listing-image").files[0]:(s=t.target.files[0],t.target.value="");var n=Date.now();return new a.a(function(t){var a=i.child(n+"_"+s.name).put(s);a.on("state_changed",function(t){},function(t){console.log(t)},function(){a.snapshot.ref.getDownloadURL().then(function(i){var s=i;null!=e&&c.a.firestore().collection("listings").doc(e).update({image:s}),t(s)})})})},getCustomFieldValues:function(t){return this.customFieldsValues.filter(function(e){return e.custom_field==t})},getCategoryColour:function(t){var e=void 0;return this.categories.forEach(function(i){i.id==t&&(e=i.colour)}),e}}}},P2TP:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.dataLoaded?i("div",{attrs:{id:"listings"}},[i("div",{staticClass:"dashboard-heading"},[i("h2",[t._v("Listings")]),t.addListingForm?i("button",{attrs:{type:"button"},on:{click:function(e){t.addListingForm=!1}}},[i("i",{staticClass:"material-icons"},[t._v("list")]),t._v(" List view")]):t._e(),0==t.addListingForm?i("button",{attrs:{type:"button"},on:{click:function(e){t.addListingForm=!0}}},[i("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" Add listing")]):t._e()]),1!=t.newListingLoading&&1==t.addListingForm?i("form",{attrs:{id:"new-listing"}},[i("h3",[t._v("Add a listing")]),i("div",{staticClass:"form-item"},[i("label",{staticClass:"hide",attrs:{for:"name"}},[t._v("Listing name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{id:"new-listing-title",type:"text",name:"name"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),t._m(0),i("div",{staticClass:"form-item input-field"},[i("label",{staticClass:"hide",attrs:{for:"new-listing-category"}},[t._v("Listing category")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.newCategory,expression:"newCategory"}],staticClass:"browser-default",attrs:{name:"category",id:"new-listing-category"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.newCategory=e.target.multiple?i:i[0]}}},t._l(t.categories,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))]),i("div",{staticClass:"form-item"},[i("label",{staticClass:"hide",attrs:{for:"new-listing-desc"}},[t._v("Listing description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newDescription,expression:"newDescription"}],staticClass:"materialize-textarea",attrs:{id:"new-listing-desc",name:"desc"},domProps:{value:t.newDescription},on:{input:function(e){e.target.composing||(t.newDescription=e.target.value)}}})]),t._l(t.customFields,function(e,s){return i("div",{key:e.id,staticClass:"form-item"},[i("label",{staticClass:"hide",attrs:{for:"new-custom-field-"+(s+1)}},[t._v(t._s(e.title))]),"text"==e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.newCF1,expression:"newCF1"}],attrs:{type:"text",id:"new-custom-field-"+(s+1)},domProps:{value:t.newCF1},on:{input:function(e){e.target.composing||(t.newCF1=e.target.value)}}}):t._e(),"single"==e.type?i("select",{directives:[{name:"model",rawName:"v-model",value:t.newCF1,expression:"newCF1"}],attrs:{id:"new-custom-field-"+(s+1)},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.newCF1=e.target.multiple?i:i[0]}}},t._l(t.getCustomFieldValues(e.id),function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.value))])})):t._e()])}),i("div",{staticClass:"form-item"},[i("label",{staticClass:"hide",attrs:{for:"new-listing-website"}},[t._v("Listing website")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newWebsite,expression:"newWebsite"}],attrs:{id:"new-listing-website",type:"url",name:"website"},domProps:{value:t.newWebsite},on:{input:function(e){e.target.composing||(t.newWebsite=e.target.value)}}})]),i("div",{staticClass:"form-item"},[""!=t.validation?i("p",{staticClass:"validation-messages"},[t._v(t._s(t.validation))]):t._e(),i("button",{attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.addItem()}}},[i("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" Add listing")])])],2):t._e(),1==t.newListingLoading?i("div",{staticClass:"loader white"}):t._e(),0==t.addListingForm?i("div",{attrs:{clas:"listing-wrapper"}},t._l(t.listings,function(e){return i("div",{key:e.id,staticClass:"card",attrs:{lid:e.id}},[i("span",{staticClass:"card-ribbon",style:{"background-color":t.getCategoryColour(e.category)}}),i("h3",[t._v(t._s(e.title))]),i("div",{staticClass:"card-content white-text"},[i("div",{staticClass:"card-image form-item"},[e.image?i("img",{attrs:{src:e.image}}):t._e()]),i("span",{staticClass:"card-title form-item"},[i("label",[t._v("Listing title")]),i("input",{attrs:{type:"text"},domProps:{value:e.title},on:{change:function(i){t.updateItem(e.id,"listings","title",i)}}})]),i("div",{staticClass:"form-item"},[i("label",[t._v("Listing image")]),i("input",{staticClass:"inputfile",attrs:{type:"file",id:e.id,lid:e.id},on:{change:function(i){t.uploadImage(i,e.id)}}}),e.image?i("label",{attrs:{for:e.id}},[i("i",{staticClass:"material-icons"},[t._v("cached")]),t._v(" Replace image")]):i("label",{attrs:{for:e.id}},[i("i",{staticClass:"material-icons"},[t._v("cloud_upload")]),t._v(" Upload an image")])]),i("div",{staticClass:"form-item"},[i("label",[t._v("Listing category")]),i("select",{staticClass:"browser-default ",attrs:{name:"category"},on:{change:function(i){t.updateItem(e.id,"listings","category",i)}}},t._l(t.categories,function(s){return i("option",{key:s.id,domProps:{value:s.id,selected:s.id==e.category}},[t._v(t._s(s.title))])}))]),t._l(t.customFields.slice().reverse(),function(s,a){return"text"==s.method?i("div",{key:s.id,staticClass:"form-item"},[i("label",[t._v(t._s(s.title))]),i("input",{attrs:{type:"text",placeholder:s.title},domProps:{value:e["custom_field_"+(a+1)]},on:{change:function(i){t.updateItem(e.id,"listings","custom_field_"+(a+1),i)}}})]):t._e()}),t._l(t.customFields.slice().reverse(),function(s,a){return"single"==s.method?i("div",{key:s.id,staticClass:"form-item"},[i("label",[t._v(t._s(s.title))]),i("select",{staticClass:"browser-default ",attrs:{name:"category"},on:{change:function(i){t.updateItem(e.id,"listings","custom_field_"+(a+1),i)}}},[i("option",{attrs:{value:""}},[t._v(t._s(s.title))]),t._l(t.customFieldsValues,function(n){return n.custom_field==s.id?i("option",{key:n.id,domProps:{value:n.id,selected:n.id==e["custom_field_"+(a+1)]}},[t._v(t._s(n.value))]):t._e()})],2)]):t._e()}),i("div",{staticClass:"form-item"},[i("label",[t._v("Listing description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"listing.description"}],staticClass:"materialize-textarea",domProps:{value:e.description},on:{change:function(i){t.updateItem(e.id,"listings","description",i)},input:function(i){i.target.composing||t.$set(e,"description",i.target.value)}}})]),i("div",{staticClass:"form-item"},[i("label",[t._v("Listing link url")]),i("input",{attrs:{type:"url"},domProps:{value:e.website},on:{keyup:function(i){t.updateItem(e.id,"listing","website",i)}}})])],2),i("div",{staticClass:"card-action black"},[i("button",{staticClass:"btn-danger",attrs:{type:"button"},on:{click:function(i){t.removeItem(e.id,"listings")}}},[i("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" Delete this listing")])])])})):t._e()]):i("div",{staticClass:"loader"})};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-item"},[e("input",{staticClass:"inputfile",attrs:{type:"file",name:"myFile",id:"new-listing-image",required:""}}),e("label",{attrs:{for:"new-listing-image"}},[e("i",{staticClass:"material-icons"},[this._v("cloud_upload")]),this._v(" Upload an image")])])}]};e.a=a},db1s:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("DZ1W"),a=i("P2TP"),n=!1;var o=function(t){n||i("ibV6")},r=i("VU/8")(s.a,a.a,!1,o,"data-v-2f33fbdd",null);r.options.__file="pages\\dashboard\\listings.vue",e.default=r.exports},"i+ti":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},ibV6:function(t,e,i){var s=i("i+ti");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("rjj0").default)("72c39e8e",s,!1,{sourceMap:!1})}});