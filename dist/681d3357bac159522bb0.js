(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{399:function(e,t,i){},403:function(e,t,i){"use strict";var a=i(399);i.n(a).a},409:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"admin__block-about"},[e._m(0),i("div",{staticClass:"admin__data"},[i("div",{staticClass:"admin__new-review",class:{"admin__new-review_active":e.addNewReviewPoint}},[i("div",{staticClass:"admin__block_container admin__new-review_container"},[!1===e.editReviewPoint?i("div",{staticClass:"admin__edit-project-subtitle"},[e._v("Новый отзыв")]):i("div",{staticClass:"admin__edit-project-subtitle"},[e._v("Редактировать отзыв")]),i("div",{staticClass:"admin__edit-project-content admin__new-rewiew_content"},[!1===e.editReviewPoint?i("form",{staticClass:"admin__new-review-form",on:{submit:function(t){return t.preventDefault(),e.addNewReview(t)}}},[i("div",{staticClass:"admin__new-review-left"},[i("div",{staticClass:"admin__new-review-left_container"},[i("label",{staticClass:"admin__new-review-add-photo",class:{hide:e.renderedPhoto.length},style:{backgroundImage:"url("+e.renderedPhoto+")"},attrs:{for:"add-review-photo"}}),i("span",{staticClass:"admin__new-review-add-photo-text"},[e._v("Добавить фото")]),i("input",{staticClass:"admin__new-review-add-photo-input",attrs:{id:"add-review-photo",accept:"image/*",type:"file"},on:{change:e.hadleFile}}),i("div",{class:{"form__error_add-review-photo":e.validation.hasError("review.photo")}},[e._v(e._s(e.validation.firstError("review.photo")))])])]),i("div",{staticClass:"admin__new-review-right"},[i("div",{staticClass:"admin__new-review-form-row"},[i("label",{staticClass:"admin__edit-project-data admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Укажите здесь имя"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}}),i("div",{class:{"form__error_add-project":e.validation.hasError("review.author")}},[e._v(e._s(e.validation.firstError("review.author")))])]),i("label",{staticClass:"admin__edit-project-data admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Титул автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Укажите здесь титул"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}}),i("div",{class:{"form__error_add-project":e.validation.hasError("review.occ")}},[e._v(e._s(e.validation.firstError("review.occ")))])])]),i("div",{staticClass:"admin__new-review-form-row"},[i("label",{staticClass:"admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"admin__edit-project-input_textarea admin__new-review-input_textarea",attrs:{type:"text",placeholder:"Введите отзыв"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}}),i("div",{class:{"form__error_add-review":e.validation.hasError("review.text")}},[e._v(e._s(e.validation.firstError("review.text")))])])]),i("div",{staticClass:"admin__new-review-form-row"},[i("button",{staticClass:"button__add button__add_cancel",attrs:{type:"reset"},on:{click:e.closeAddForm}}),i("button",{staticClass:"button__add button__add_submit",attrs:{type:"submit"}})])])]):i("form",{staticClass:"admin__new-review-form"},[i("div",{staticClass:"admin__new-review-left"},[i("div",{staticClass:"admin__new-review-left_container"},[i("label",{staticClass:"admin__new-review-add-photo hide",style:{backgroundImage:"url(https://webdev-api.loftschool.com/"+e.editedReview.photo+")"},attrs:{for:"add-edit-review-photo"}}),i("span",{staticClass:"admin__new-review-add-photo-text"},[e._v("Изменить фото")]),i("input",{staticClass:"admin__new-review-add-photo-input",attrs:{id:"add-edit-review-photo",accept:"image/*",type:"file"},on:{change:e.hadleFile}})])]),i("div",{staticClass:"admin__new-review-right"},[i("div",{staticClass:"admin__new-review-form-row"},[i("label",{staticClass:"admin__edit-project-data admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.author,expression:"editedReview.author"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Укажите здесь имя"},domProps:{value:e.editedReview.author},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"author",t.target.value)}}}),i("div",{class:{"form__error_add-project":e.validation.hasError("editedReview.author")}},[e._v(e._s(e.validation.firstError("editedReview.author")))])]),i("label",{staticClass:"admin__edit-project-data admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Титул автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.occ,expression:"editedReview.occ"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Укажите здесь титул"},domProps:{value:e.editedReview.occ},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"occ",t.target.value)}}}),i("div",{class:{"form__error_add-project":e.validation.hasError("editedReview.occ")}},[e._v(e._s(e.validation.firstError("editedReview.occ")))])])]),i("div",{staticClass:"admin__new-review-form-row"},[i("label",{staticClass:"admin__new-review-form-data"},[i("div",{staticClass:"admin__edit-project-name"},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.text,expression:"editedReview.text"}],staticClass:"admin__edit-project-input_textarea admin__new-review-input_textarea",attrs:{type:"text",placeholder:"Введите отзыв"},domProps:{value:e.editedReview.text},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"text",t.target.value)}}}),i("div",{class:{"form__error_add-review":e.validation.hasError("editedReview.text")}},[e._v(e._s(e.validation.firstError("editedReview.text")))])])]),i("div",{staticClass:"admin__new-review-form-row"},[i("button",{staticClass:"button__add button__add_cancel",attrs:{type:"reset"},on:{click:e.closeAddForm}}),i("button",{staticClass:"button__add button__add_submit",attrs:{type:"submit"},on:{click:e.editReview}})])])])])])]),i("div",{staticClass:"admin__projects admin__reviews"},[i("ul",{staticClass:"admin__projects-list admin__reviews-list"},[i("li",{staticClass:"admin__projects-item_new admin__reviews-item_new"},[i("button",{staticClass:"admin__projects-add",on:{click:e.showReviewForm}},[i("div",{staticClass:"admin__projects-add-button"}),i("div",{staticClass:"admin__projects-add-text"},[e._v("Добавить отзыв")])])]),e._l(e.reviews,(function(t){return i("li",{key:t.id,staticClass:"admin__projects-item admin__reviews-item"},[i("div",{staticClass:"admin__reviews_user"},[i("div",{staticClass:"admin__reviews_user-left"},[i("div",{staticClass:"ava ava_admin admin__reviews_ava"},[i("img",{staticClass:"admin__photo user__photo",attrs:{src:"https://webdev-api.loftschool.com/"+t.photo,alt:"User photo"}})])]),i("div",{staticClass:"admin__reviews_user-right"},[i("div",{staticClass:"admin__reviews_user-name"},[e._v(e._s(t.author))]),i("div",{staticClass:"admin__reviews_user-prof"},[e._v(e._s(t.occ))])])]),i("div",{staticClass:"admin__projects-descr"},[i("div",{staticClass:"admin__projects-descr_container"},[i("div",{staticClass:"admin__projects-text"},[e._v(e._s(t.text))]),i("div",{staticClass:"admin__projects-buttons"},[i("button",{staticClass:"button_edit button_edit_projects",attrs:{type:"button"},on:{click:function(i){return e.editReviewOpenForm(t)}}},[e._v("Править")]),i("button",{staticClass:"button__group button__group_remove button__group_remove_projects",attrs:{type:"button"},on:{click:function(i){return e.removeExistedReview(t)}}},[e._v("Удалить")])])])])])}))],2)])])])};a._withStripped=!0;var r=i(360),s=i(65);function n(e,t,i,a,r,s,n){try{var o=e[s](n),d=o.value}catch(e){return void i(e)}o.done?t(d):Promise.resolve(d).then(a,r)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(a,r){var s=e.apply(t,i);function o(e){n(s,a,r,o,d,"next",e)}function d(e){n(s,a,r,o,d,"throw",e)}o(void 0)}))}}var d="https://webdev-api.loftschool.com",c=(localStorage.getItem("token"),{name:"about",data:function(){return{renderedPhoto:"",addNewReviewPoint:!1,editReviewPoint:!1,reviews:[],editedReview:{},review:{photo:{},author:"",occ:"",text:""}}},mixins:[i(65).mixin],validators:{"review.author":function(e){return s.Validator.value(e).required("Заполните поле")},"review.occ":function(e){return s.Validator.value(e).required("Заполните поле")},"review.text":function(e){return s.Validator.value(e).required("Заполните поле")}},created:function(){this.fetchReviews()},methods:{hadleFile:function(e){var t=e.target.files[0];this.review.photo=t,this.renderImageFile(t)},renderImageFile:function(e){var t=this,i=new FileReader;try{i.readAsDataURL(e),i.onloadend=function(){t.renderedPhoto=i.result}}catch(e){throw new Error("Ошибка при чтении файла")}},showReviewForm:function(){this.addNewReviewPoint=!0},closeAddForm:function(){this.editReviewPoint=!1,this.renderedPhoto="",this.review.photo={},this.review.author="",this.review.occ="",this.review.text="",this.validation.reset(),this.addNewReviewPoint=!1},addNewReview:function(){var e=this;this.$validate().then((function(t){if(t)try{var i=new FormData;Object.keys(e.review).forEach((function(t){var a=e.review[t];i.append(t,a)})),r.a.post(d+"/reviews",i).then((function(t){e.reviews.push(t.data)})),e.renderedPhoto="",e.review.photo={},e.review.author="",e.review.occ="",e.review.text="",e.validation.reset(),e.addNewReviewPoint=!1}catch(e){}}))},fetchReviews:function(){var e=this;return o(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.get(d+"/reviews/255");case 3:i=t.sent,e.reviews=i.data,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},editReviewOpenForm:function(e){try{this.editReviewPoint=!0,this.addNewReviewPoint=!0,this.editedReview=e,window.scrollTo({behavior:"smooth",top:0})}catch(e){}},editReview:function(){var e=this;return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.post(d+"/reviews/".concat(e.editedReview.id),e.editedReview);case 3:t.sent,e.reviews=e.reviews.map((function(t){return t.id===e.editedReview.id?editedReview:t})),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,e.editReviewPoint=!1,e.addNewReviewPoint=!1,t.finish(9);case 13:case"end":return t.stop()}}),t,null,[[0,7,9,13]])})))()},removeExistedReview:function(e){var t=this;return o(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,event.preventDefault(),i.next=4,r.a.delete(d+"/reviews/".concat(e.id));case 4:i.sent,t.reviews=t.reviews.filter((function(t){return t.id!==e.id})),i.next=10;break;case 8:i.prev=8,i.t0=i.catch(0);case 10:case"end":return i.stop()}}),i,null,[[0,8]])})))()}}}),v=(i(403),i(97)),_=Object(v.a)(c,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"admin__title"},[t("h2",{staticClass:"admin__title-name admin__title-name_about"},[this._v('Блок "Отзывы"')])])}],!1,null,null,null);_.options.__file="src/admin/components/pages/about.vue";t.default=_.exports}}]);