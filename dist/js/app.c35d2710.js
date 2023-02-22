(function(){"use strict";var t={3075:function(t,e,s){var n=s(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Tarefas")]),e("TaskProgress",{attrs:{progress:t.progress}}),e("NewTask",{on:{taskAdded:t.addTask}}),e("TaskGrid",{attrs:{tasks:t.tasks},on:{taskDeleted:t.deleteTask,taskStateChanged:t.toggleTaskState}})],1)},r=[],o=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-progress"},[e("span",{staticClass:"progress-value"},[t._v(t._s(t.progress)+"%")]),e("div",{staticClass:"progress-bar",style:{width:t.progress+"%"}})])}),i=[],l={props:{progress:{type:Number,default:0}}},u=l,c=s(1001),d=(0,c.Z)(u,o,i,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-task"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-element",attrs:{type:"text",placeholder:"Nova tarefa?"},domProps:{value:t.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("button",{staticClass:"form-element",on:{click:t.add}},[t._v("+")])])},k=[],h={data(){return{name:""}},methods:{add(){this.$emit("taskAdded",{name:this.name}),this.name=""}}},g=h,m=(0,c.Z)(g,f,k,!1,null,"977560e6",null),v=m.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-grid"},[t.tasks.length?t._l(t.tasks,(function(s,n){return e("Task",{key:s.name,attrs:{task:s},on:{taskDeleted:function(e){return t.$emit("taskDeleted",n)},taskStateChanged:function(e){return t.$emit("taskStateChanged",n)}}})})):e("p",{staticClass:"no-task"},[t._v("Sua vida está em dia =]")])],2)},y=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task",class:t.stateClass,on:{click:function(e){return t.$emit("taskStateChanged",t.task)}}},[e("span",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.$emit("taskDeleted",t.task)}}},[t._v("x")]),e("p",[t._v(t._s(t.task.name))])])},b=[],T={props:{task:{type:Object,required:!0}},computed:{stateClass(){return{pending:this.task.pending,done:!this.task.pending}}}},w=T,O=(0,c.Z)(w,C,b,!1,null,"d130460a",null),x=O.exports,S={components:{Task:x},props:{tasks:{type:Array,required:!0}}},P=S,j=(0,c.Z)(P,_,y,!1,null,"1b484636",null),N=j.exports,Z={components:{TaskProgress:p,NewTask:v,TaskGrid:N},data(){return{tasks:[]}},computed:{progress(){const t=this.tasks.length,e=this.tasks.filter((t=>!t.pending)).length;return Math.round(e/t*100)||0}},watch:{tasks:{deep:!0,handler(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}}},methods:{addTask(t){const e=e=>e.name===t.name,s=0==this.tasks.filter(e).length;s&&void 0!=this.name&&(console.log(this.name),this.tasks.push({name:t.name,pending:t.pending||!0}))},deleteTask(t){this.tasks.splice(t,1)},toggleTaskState(t){this.tasks[t].pending=!this.tasks[t].pending}},created(){const t=localStorage.getItem("tasks"),e=JSON.parse(t);this.tasks=Array.isArray(e)?e:[]}},$=Z,A=(0,c.Z)($,a,r,!1,null,null,null),D=A.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(D)}).$mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],i=n[1],l=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var c=l(s)}for(e&&e(n);u<o.length;u++)r=o[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(3075)}));n=s.O(n)})();
//# sourceMappingURL=app.c35d2710.js.map