(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{408:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin__block-projects"},[t._m(0),i("div",{staticClass:"admin__data"},[i("div",{staticClass:"admin__edit-project",class:{"admin__edit-project_active":t.addNewWorkPoint}},[i("div",{staticClass:"admin__block_container admin__edit-project_container"},[!1===t.editWorkPoint?i("div",{staticClass:"admin__edit-project-subtitle"},[t._v("Добавление новой Работы")]):i("div",{staticClass:"admin__edit-project-subtitle"},[t._v("Редактирование Работы")]),i("div",{staticClass:"admin__edit-project-content"},[!1===t.editWorkPoint?i("form",{staticClass:"admin__edit-project-formdata",on:{submit:function(e){return e.preventDefault(),t.addNewWork(e)}}},[i("div",{staticClass:"admin__edit-project-content-left"},[i("label",{staticClass:"admin__edit-project-new-photo",class:{formPic:t.renderedPhotoProject.length},style:{backgroundImage:"url("+t.renderedPhotoProject+")"},attrs:{for:"add-work-photo"}},[i("span",{staticClass:"admin__edit-project-new-photo-text",class:{hideText:t.renderedPhotoProject.length}},[t._v("Перетащите или нажмите кноку для загрузки изображения")]),i("div",{staticClass:"button__add button__add_download button__add_download_label",class:{hideText:t.renderedPhotoProject.length}})]),i("input",{staticClass:"admin__new-review-add-photo-input",attrs:{id:"add-work-photo",accept:"image/*",type:"file"},on:{change:t.photoDownLoad}})]),i("div",{staticClass:"admin__edit-project-content-right"},[i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Название")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.work.title,expression:"work.title"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Введите название нового проекта"},domProps:{value:t.work.title},on:{input:function(e){e.target.composing||t.$set(t.work,"title",e.target.value)}}}),i("div",{class:{"form__error_add-project":t.validation.hasError("work.title")}},[t._v(t._s(t.validation.firstError("work.title")))])]),i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Ссылка")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.work.link,expression:"work.link"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Введите ссылку"},domProps:{value:t.work.link},on:{input:function(e){e.target.composing||t.$set(t.work,"link",e.target.value)}}}),i("div",{class:{"form__error_add-project":t.validation.hasError("work.link")}},[t._v(t._s(t.validation.firstError("work.link")))])]),i("label",{staticClass:"admin__edit-project-data admin__edit-project-data-textarea"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Описание")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.work.description,expression:"work.description"}],staticClass:"admin__edit-project-input admin__edit-project-input_textarea",attrs:{type:"text",placeholder:"Введите описание"},domProps:{value:t.work.description},on:{input:function(e){e.target.composing||t.$set(t.work,"description",e.target.value)}}}),i("div",{class:{"form__error_add-project_textarea":t.validation.hasError("work.description")}},[t._v(t._s(t.validation.firstError("work.description")))])]),i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Добавление тэга")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.work.techs,expression:"work.techs"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Добавьте тэги через запятую"},domProps:{value:t.work.techs},on:{input:[function(e){e.target.composing||t.$set(t.work,"techs",e.target.value)},t.addTag]}}),i("div",{class:{"form__error_add-project":t.validation.hasError("work.techs")}},[t._v(t._s(t.validation.firstError("work.techs")))])]),i("ul",{staticClass:"admin__edit-project-tool-list"},t._l(t.work.techs,(function(e){return i("li",{key:e.id,staticClass:"projects__tools-item admin__edit-project-tool-item"},[i("div",{staticClass:"projects__tools-name projects__tools-name_admin"},[t._v(t._s(e))]),i("button",{staticClass:"projects__tools-close",attrs:{type:"button"},on:{click:function(i){return t.deleteTag(e)}}})])})),0),i("div",{staticClass:"admin__edit-project-form-buttons"},[i("button",{staticClass:"button__add button__add_cancel",attrs:{type:"reset"},on:{click:t.closeAddForm}}),i("button",{staticClass:"button__add button__add_submit",attrs:{type:"submit"}})])])]):i("form",{staticClass:"admin__edit-project-formdata"},[i("div",{staticClass:"admin__edit-project-content-left"},[i("label",{staticClass:"admin__edit-project-new-photo formPic",style:{backgroundImage:"url(https://webdev-api.loftschool.com/"+t.editedWork.photo+")"},attrs:{for:"add-work-photo"}},[i("span",{staticClass:"admin__edit-project-new-photo-text",class:{hideText:t.renderedPhotoProject.length}},[t._v("Изменение изображения")]),i("div",{staticClass:"button__add button__add_download button__add_download_label",class:{hideText:t.renderedPhotoProject.length}})]),i("input",{staticClass:"admin__new-review-add-photo-input",attrs:{id:"add-work-photo",accept:"image/*",type:"file"},on:{change:t.photoDownLoadEdited}})]),i("div",{staticClass:"admin__edit-project-content-right"},[i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Название")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.editedWork.title,expression:"editedWork.title"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Введите название нового проекта"},domProps:{value:t.editedWork.title},on:{input:function(e){e.target.composing||t.$set(t.editedWork,"title",e.target.value)}}}),i("div",{class:{"form__error_add-project":t.validation.hasError("editedWork.title")}},[t._v(t._s(t.validation.firstError("editedWork.title")))])]),i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Ссылка")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.editedWork.link,expression:"editedWork.link"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Введите ссылку"},domProps:{value:t.editedWork.link},on:{input:function(e){e.target.composing||t.$set(t.editedWork,"link",e.target.value)}}}),i("div",{class:{"form__error_add-project":t.validation.hasError("editedWork.link")}},[t._v(t._s(t.validation.firstError("editedWork.link")))])]),i("label",{staticClass:"admin__edit-project-data admin__edit-project-data-textarea"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Описание")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editedWork.description,expression:"editedWork.description"}],staticClass:"admin__edit-project-input admin__edit-project-input_textarea",attrs:{type:"text",placeholder:"Введите описание"},domProps:{value:t.editedWork.description},on:{input:function(e){e.target.composing||t.$set(t.editedWork,"description",e.target.value)}}}),i("div",{class:{"form__error_add-project_textarea":t.validation.hasError("editedWork.description")}},[t._v(t._s(t.validation.firstError("editedWork.description")))])]),i("label",{staticClass:"admin__edit-project-data"},[i("div",{staticClass:"admin__edit-project-name"},[t._v("Редактирование тэгов")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.editedWork.techs,expression:"editedWork.techs"}],staticClass:"admin__edit-project-input",attrs:{type:"text",placeholder:"Добавьте тэг"},domProps:{value:t.editedWork.techs},on:{input:[function(e){e.target.composing||t.$set(t.editedWork,"techs",e.target.value)},t.addTagEdited]}}),i("div",{class:{"form__error_add-project":t.validation.hasError("editedWork.techs")}},[t._v(t._s(t.validation.firstError("editedWork.techs")))])]),i("ul",{staticClass:"admin__edit-project-tool-list"},t._l(t.editedWork.techs,(function(e){return i("li",{key:e.id,staticClass:"projects__tools-item admin__edit-project-tool-item"},[i("div",{staticClass:"projects__tools-name projects__tools-name_admin"},[t._v(t._s(e))]),i("button",{staticClass:"projects__tools-close",attrs:{type:"button"},on:{click:function(i){return t.deleteEditedTag(e)}}})])})),0),i("div",{staticClass:"admin__edit-project-form-buttons"},[i("button",{staticClass:"button__add button__add_cancel",attrs:{type:"reset"},on:{click:t.closeAddForm}}),i("button",{staticClass:"button__add button__add_submit",attrs:{type:"submit"},on:{click:t.editWork}})])])])])])]),i("div",{staticClass:"admin__projects"},[i("ul",{staticClass:"admin__projects-list"},[i("li",{staticClass:"admin__projects-item_new"},[i("button",{staticClass:"admin__projects-add",on:{click:t.showAddForm}},[i("div",{staticClass:"admin__projects-add-button"}),i("div",{staticClass:"admin__projects-add-text"},[t._v("Добавить работу")])])]),t._l(t.works,(function(e){return i("li",{key:e.id,staticClass:"admin__projects-item"},[i("div",{staticClass:"admin__projects-preview"},[i("div",{staticClass:"admin__projects-preview_pic"},[i("img",{staticClass:"admin__projects-preview_pic",attrs:{src:"https://webdev-api.loftschool.com/"+e.photo,alt:"Project preview",loading:"lazy"}})]),i("ul",{staticClass:"admin__edit-project-tool-list admin__edit-project-tool-list_preview"},t._l(e.techs,(function(e){return i("li",{staticClass:"projects__tools-item admin__projects_tool"},[i("div",{staticClass:"projects__tools-name admin__projects__tool-name"},[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"admin__projects-descr"},[i("div",{staticClass:"admin__projects-descr_container"},[i("div",{staticClass:"admin__projects-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"admin__projects-text"},[t._v(t._s(e.description))]),i("a",{staticClass:"admin__projects-link",attrs:{href:""+e.link}},[t._v(t._s(e.link))]),i("div",{staticClass:"admin__projects-buttons"},[i("button",{staticClass:"button_edit button_edit_projects",attrs:{type:"button"},on:{click:function(i){return t.editWorkOpenForm(e)}}},[t._v("Править")]),i("button",{staticClass:"button__group button__group_remove button__group_remove_projects",attrs:{type:"button"},on:{click:function(i){return t.removeExistedWork(e)}}},[t._v("Удалить")])])])])])}))],2)])])])};o._withStripped=!0;var r=i(360),a=i(65);function s(t,e,i,o,r,a,s){try{var n=t[a](s),d=n.value}catch(t){return void i(t)}n.done?e(d):Promise.resolve(d).then(o,r)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(o,r){var a=t.apply(e,i);function n(t){s(a,o,r,n,d,"next",t)}function d(t){s(a,o,r,n,d,"throw",t)}n(void 0)}))}}var d="https://webdev-api.loftschool.com",c={data:function(){return{renderedPhotoProject:"",addNewWorkPoint:!1,editWorkPoint:!1,works:[],work:{photo:{},title:"",link:"",description:"",techs:[]},editedWork:{}}},mixins:[i(65).mixin],validators:{"work.title":function(t){return a.Validator.value(t).required("Заполните поле")},"work.link":function(t){return a.Validator.value(t).required("Заполните поле")},"work.description":function(t){return a.Validator.value(t).required("Заполните поле")},"work.techs":function(t){return a.Validator.value(t).required("Заполните поле")}},created:function(t){this.fetchWorks()},methods:{addTag:function(t){var e=t.target.value.split(",");this.work.techs=e},addTagEdited:function(t){var e=t.target.value.split(",");this.editedWork.techs=e},deleteTag:function(t){this.work.techs=this.work.techs.filter((function(e){return e!==t}))},deleteEditedTag:function(t){this.editedWork.techs=this.editedWork.techs.filter((function(e){return e!==t}))},showAddForm:function(){this.addNewWorkPoint=!0},closeAddForm:function(){this.work.title="",this.work.link="",this.work.description="",this.work.techs=[],this.renderedPhotoProject="",this.work.photo={},this.validation.reset(),this.addNewWorkPoint=!1,this.editWorkPoint=!1},photoDownLoad:function(t){var e=this;return n(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:o=t.target.files[0],e.work.photo=o,e.renderImageFile(o);case 3:case"end":return i.stop()}}),i)})))()},photoDownLoadEdited:function(t){var e=this;return n(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e.editedWork.photo="",o=t.target.files[0],e.editedWork.photo=o,e.renderImageFile(o);case 4:case"end":return i.stop()}}),i)})))()},renderImageFile:function(t){var e=this,i=new FileReader;try{i.readAsDataURL(t),i.onloadend=function(){e.renderedPhotoProject=i.result}}catch(t){throw new Error("Ошибка при чтении файла")}},addNewWork:function(){var t=this;this.$validate().then((function(e){if(e)try{var i=new FormData;Object.keys(t.work).forEach((function(e){var o=t.work[e];i.append(e,o)})),r.a.post(d+"/works",i).then((function(e){var i=e.data.techs.split(",");e.data.techs=i,t.works.push(e.data)})),t.renderedPhotoProject="",t.work.photo={},t.work.title="",t.work.link="",t.work.description="",t.work.techs=[],t.validation.reset(),t.addNewWorkPoint=!1}catch(t){}}))},fetchWorks:function(){var t=this;return n(regeneratorRuntime.mark((function e(){var i,o,a,s,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get(d+"/works/255");case 3:for(i=e.sent,o=i.data,a=0;a<o.length;a++){for(n in s=o[a])"techs"===n&&(c=s[n],l=c.split(","),s[n]=l);o[a]=s}t.works=o,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},editWorkOpenForm:function(t){this.addNewWorkPoint=!0,this.editWorkPoint=!0,this.editedWork=t,window.scrollTo({behavior:"smooth",top:0})},editWork:function(){var t=this;return n(regeneratorRuntime.mark((function e(){var i,o,a,s,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in e.prev=0,i=t.editedWork,o={},i)o[a]=i[a];for(s in o)"techs"===s&&(n=o[s],c=n.join(","),o[s]=c);return e.next=8,r.a.post(d+"/works/".concat(t.editedWork.id),o);case 8:e.sent,t.works=t.works.map((function(e){return e.id===t.editedWork.id?editedWork:e})),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,t.editWorkPoint=!1,t.addNewWorkPoint=!1,e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,12,14,18]])})))()},removeExistedWork:function(t){var e=this;return n(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,r.a.delete(d+"/works/".concat(t.id));case 3:i.sent,e.works=e.works.filter((function(e){return e.id!==t.id})),i.next=9;break;case 7:i.prev=7,i.t0=i.catch(0);case 9:case"end":return i.stop()}}),i,null,[[0,7]])})))()}}},l=i(97),_=Object(l.a)(c,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin__title"},[e("h2",{staticClass:"admin__title-name admin__title-name_projects"},[this._v('Блок "Работы"')])])}],!1,null,null,null);_.options.__file="src/admin/components/pages/projects.vue";e.default=_.exports}}]);