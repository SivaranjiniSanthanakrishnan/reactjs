(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(e,t,a){e.exports=a(589)},261:function(e,t,a){},589:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"ADD_COMMENT",function(){return g}),a.d(n,"DISHES_LOADING",function(){return b}),a.d(n,"DISHES_FAILED",function(){return v}),a.d(n,"ADD_DISHES",function(){return O}),a.d(n,"BASE_URL",function(){return N}),a.d(n,"ADD_COMMENTS",function(){return y}),a.d(n,"COMMENT_FAILED",function(){return L}),a.d(n,"PROMOS_LOADING",function(){return k}),a.d(n,"ADD_PROMOS",function(){return j}),a.d(n,"PROMOS_FAILED",function(){return M}),a.d(n,"ADD_LEADERS",function(){return w}),a.d(n,"LEADERS_FAILED",function(){return x}),a.d(n,"LOAD_LEADERS",function(){return S}),a.d(n,"LOAD_PROMOS",function(){return D});var r=a(1),l=a.n(r),o=a(27),s=a.n(o),c=(a(261),a(11)),m=a(12),i=a(14),u=a(13),d=a(15),E=a(2),p=a(41),h=a(16),f=function(){return l.a.createElement("div",{className:"col-12"},l.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),l.a.createElement("p",null,"Loading . . ."))},g="ADD_COMMENT",b="DISHES_LOADING",v="DISHES_FAILED",O="ADD_DISHES",N="http://localhost:3000/",y="ADD_COMMENTS",L="COMMENT_FAILED",k="PROMOS_LOADING",j="ADD_PROMOS",M="PROMOS_FAILED",w="ADD_LEADERS",x="LEADERS_FAILED",S="LOAD_LEADERS",D="LOAD_PROMOS",C=a(35),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selecteddish:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.dishes.map(function(e){return l.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},l.a.createElement(C.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},l.a.createElement(h.b,{to:"/menu/".concat(e.id)},l.a.createElement(E.d,null,l.a.createElement(E.f,{object:!0,src:N+e.image,alt:e.name}),l.a.createElement(E.g,null,l.a.createElement(E.j,null,e.name))))))});return 1==this.props.isLoad?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(f,null))):null!=this.props.errMsg?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h4",null,this.props.dishes.errMess)))):null!=this.props.dishes?l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement(E.a,null,l.a.createElement(E.b,null," ",l.a.createElement(h.b,{to:"/home"},"Home")),l.a.createElement(E.b,{active:!0}," Menu "))),l.a.createElement("div",{class:"row"},e)):void 0}}]),t}(r.Component),A=a(28),R=a(5),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.togglemodal=a.togglemodal.bind(Object(A.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"togglemodal",value:function(e){this.setState({isOpen:!this.state.isOpen})}},{key:"onsubmit",value:function(e){this.props.postComment(this.props.selecteddish.id,e.points,e.name,e.comments)}},{key:"render",value:function(){var e,t=this;return 1==this.props.isLoad?l.a.createElement(f,null):null!=this.props.errMsg?l.a.createElement("div",null,this.props.errMsg):null!=this.props.selecteddish?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(E.a,null,l.a.createElement(E.b,null," ",l.a.createElement(h.b,{to:"/menu"},"Menu")),l.a.createElement(E.b,{active:!0}," ",this.props.selecteddish.name," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(C.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},l.a.createElement(E.d,null,l.a.createElement(E.f,{src:N+this.props.selecteddish.image,alt:this.props.selecteddish.name}),l.a.createElement(E.e,null,l.a.createElement(E.j,null,this.props.selecteddish.name),l.a.createElement(E.i,null,this.props.selecteddish.description))))),l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement("h5",null,"Comments"),l.a.createElement(C.Stagger,{in:!0},this.props.comments.map(function(e){return l.a.createElement(C.Fade,{in:!0},l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.comment),l.a.createElement("p",null,"-- ",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),l.a.createElement(E.c,{onClick:this.togglemodal},"Submit Feedback"),l.a.createElement(E.q,{isOpen:this.state.isOpen,toggle:this.togglemodal},l.a.createElement(E.s,null,"Submit Your Feedback!!!"),l.a.createElement(E.r,null,l.a.createElement(R.LocalForm,{onSubmit:function(e){return t.onsubmit(e)}},l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Points"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.select,{model:".points",name:"points",id:"points"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Name"),l.a.createElement(E.k,{md:5},l.a.createElement(R.Control.text,{model:".name",id:"name",name:"name",validators:{required:function(e){return e},maxlength:(e=10,function(t){return!t||t.length<=e}),minlength:function(e){return function(t){return!t||t.length>=e}}(3)}}),l.a.createElement(R.Errors,{className:"text-danger",show:"touched",model:".name",messages:{required:"Name is required",maxlength:"Should be max of 10",minlength:"Should be min of 3"}}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Comments"),l.a.createElement(E.k,{md:5},l.a.createElement(R.Control.textarea,{model:".comments",id:"comments",name:"comments"}))),l.a.createElement(E.x,{className:"form-group container"},l.a.createElement(E.c,{type:"submit"},"Submit")))))):l.a.createElement("div",null)}}]),t}(r.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.handlemodaltoggler=a.handlemodaltoggler.bind(Object(A.a)(a)),a.handlesubmit=a.handlesubmit.bind(Object(A.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handlemodaltoggler",value:function(e){this.setState({isOpen:!this.state.isOpen})}},{key:"handlesubmit",value:function(){this.handlemodaltoggler(),alert("UserName is "+this.username.value+" Password is "+this.password.value+" Remember is "+this.remember.value)}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.v,{dark:!0,color:"secondary",expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row "},l.a.createElement(E.w,{href:"/"},l.a.createElement("img",{src:"./assests/images/logo.png",height:"30px",width:"41px"})),l.a.createElement(E.t,{navbar:!0},l.a.createElement(E.u,null,l.a.createElement(h.c,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"},"Home"))),l.a.createElement(E.u,null,l.a.createElement(h.c,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"}," Menu "))),l.a.createElement(E.u,null,l.a.createElement(h.c,{className:"nav-link",to:"/feedback"},l.a.createElement("span",{className:"fa fa-info fa-lg"},"About Us"))),l.a.createElement(E.u,null,l.a.createElement(h.c,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"}," Contact Us")))),l.a.createElement(E.t,{className:"ml-auto",navbar:!0},l.a.createElement(E.u,null,l.a.createElement(E.c,{onClick:this.handlemodaltoggler},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(E.o,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Restuarant of Colors"),l.a.createElement("h2",null," Welcome "))))),l.a.createElement(E.q,{isOpen:this.state.isOpen,toggle:this.handlemodaltoggler},l.a.createElement(E.s,null,"Login"),l.a.createElement(E.r,null,l.a.createElement("div",{className:"container"},l.a.createElement(E.l,{onSubmit:this.handlesubmit},l.a.createElement(E.m,{row:!0},l.a.createElement(E.p,{md:4,htmlFor:"Username"},"UserName"),l.a.createElement(E.k,{md:5},l.a.createElement(E.n,{type:"text",innerRef:function(t){return e.username=t},name:"username",id:"username"}))),l.a.createElement(E.m,{row:!0},l.a.createElement(E.p,{md:4,htmlFor:"Password"},"Password"),l.a.createElement(E.k,{md:5},l.a.createElement(E.n,{type:"password",innerRef:function(t){return e.password=t},name:"password",id:"password"}))),l.a.createElement(E.m,{row:!0},l.a.createElement(E.p,{md:4,htmlFor:"Remember Me"},"Remember Pass"),l.a.createElement(E.k,{md:{size:5,offet:3}},l.a.createElement(E.n,{type:"checkbox",innerRef:function(t){return e.remember=t},name:"remember",id:"remember"}))),l.a.createElement(E.c,{type:"submit",color:"primary"}," Login "))))))}}]),t}(r.Component),T=a(40);a(319);function P(e){var t=e.data,a=e.isLoad,n=e.errMsg;return 1==a?l.a.createElement(f,null):null!=n?{errMsg:n}:null!=t?l.a.createElement(C.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},l.a.createElement(E.d,null,l.a.createElement(E.f,{src:N+t.image}),l.a.createElement(E.e,null,l.a.createElement(E.j,null,t.name,t.designation?l.a.createElement(E.h,null,t.designation):null),l.a.createElement(E.i,null,t.description)))):void 0}var q=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(P,{data:e.dishes,isLoad:e.isLoad,errMsg:e.errMsg})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(P,{data:e.promotions,isLoad:e.isLoad,errMsg:e.errMsg})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(P,{data:e.leaders,isLoad:e.isLoad,errMsg:e.errMsg}))))},H=(a(454),a(224)),U=a(255),Y=a(144),G=(a(590),function(e){return e&&e.length}),B=function(e){return function(t){return!t||t.length<=e}},W=function(e){return function(t){return t&&t.length>=e}},z=function(e){return!isNaN(Number(e))},J=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onsubmit=a.onsubmit.bind(Object(A.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onsubmit",value:function(e){alert(JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this,t={bounce:{animation:"1s",animationName:U.a.keyframes(H.bounce,"bounce")}};return l.a.createElement(Y.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-content",style:t.bounce},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("br",null),l.a.createElement("div",{className:"row row-content",style:t.bounce},l.a.createElement("div",{className:"col-12"}," ",l.a.createElement("h3",null," Send Us Feedback!!! ")," "),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(R.Form,{model:"feedback",onSubmit:function(t){return e.onsubmit(t)}},l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{htmlFor:"FirstName",md:3},"FirstName"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.text,{model:".firstname",placeholder:"First Name",name:"firstname",id:"firstname",className:"form-control",validators:{required:G,maxLength:B(10),minLength:W(3)}}),l.a.createElement(R.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{htmlFor:"LastName",md:3},"LastName"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.text,{model:".lastname",placeholder:"Last Name",name:"lastname",id:"lastname",className:"form-control",validators:{required:G,maxLength:B(10),minLength:W(3)}}),l.a.createElement(R.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{htmlFor:"Phone Number",md:3},"Phone Number"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.text,{model:".tel",placeholder:"Phone Number",name:"phonenumber",id:"phonenumber",className:"form-control",validators:{required:G,minLength:W(3),maxLength:B(15),isNumber:z}}),l.a.createElement(R.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{htmlFor:"Email",md:3},"Email"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.text,{model:".email",placeholder:"Email",name:"email",id:"email",className:"form-control",validators:{required:G,validEmail:J}}),l.a.createElement(R.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.k,{md:{size:3,offset:3}},l.a.createElement(E.x,{className:"form-group"},l.a.createElement(R.Control.checkbox,{model:".contact",name:"contact",id:"contact",className:"form-control",onChange:this.onchangeassign})," "," ",l.a.createElement(E.p,null,l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(E.k,{md:{size:3,offset:1}},l.a.createElement(E.x,{className:"form-group"},l.a.createElement(R.Control.select,{model:".contactthrough",name:"contactthrough",id:"contactthrough",className:"form-control",onChange:this.onchangeassign}," "," ",l.a.createElement("option",null,"Tel"),l.a.createElement("option",null,"Email"))))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{htmlFor:"Your Feedback",md:3},"Your Feedback"),l.a.createElement(E.k,{md:7},l.a.createElement(R.Control.textarea,{model:".feedback",name:"feedback",id:"feedback",rows:"5",className:"form-control",onChange:this.onchangeassign}))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.k,{md:{size:7,offset:3}},l.a.createElement(E.c,{type:"submit",color:"primary",text:"Submit"}," Submit "))))))))}}]),t}(r.Component),K=a(33),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.togglemodal=a.togglemodal.bind(Object(A.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"togglemodal",value:function(e){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(E.q,{isOpen:this.state.isOpen,togglemodal:this.togglemodal},l.a.createElement(E.s,null,"Submit Your Feedback!!!"),l.a.createElement(E.r,null,l.a.createElement(R.LocalForm,null,l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Points"),l.a.createElement(E.k,{md:5},l.a.createElement(R.Control.select,null,l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Name"),l.a.createElement(E.k,{md:5},l.a.createElement(R.Control.text,null))),l.a.createElement(E.x,{className:"form-group"},l.a.createElement(E.p,{md:3},"Comments"),l.a.createElement(E.k,{md:5},l.a.createElement(R.Control.textarea,null))))))}}]),t}(r.Component),Q=function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return r({type:g,payload:e})}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}},V=function(){return{type:b}},X=function(e){return{type:O,payload:e}},ee=function(e){return{type:n,payload:e}},te=function(){return{type:D}},ae=function(e){return{type:j,payload:e}},ne=function(){return{type:S}},re=function(e){return{type:w,payload:e}},le=function(e){return{type:y,payload:e}},oe=a(90),se=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.displaydishes(),this.props.displaycomments(),this.props.displayleaders(),this.props.displaypromos()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(I,null),l.a.createElement(oe.TransitionGroup,null,l.a.createElement(oe.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},l.a.createElement(T.d,null,l.a.createElement(T.b,{path:"/home",component:function(){var t;return l.a.createElement(q,(t={dishes:e.props.dishes.dishes.filter(function(e){return 1==e.featured})[0],isLoad:e.props.dishes.isLoad,errMsg:e.props.dishes.errMsg,leaders:e.props.leaders.leaders.filter(function(e){return 1==e.featured})[0]},Object(p.a)(t,"isLoad",e.props.leaders.isLoad),Object(p.a)(t,"errMsg",e.props.leaders.errMsg),Object(p.a)(t,"promotions",e.props.promotions.promos.filter(function(e){return 1==e.featured})[0]),Object(p.a)(t,"isLoad",e.props.promotions.isLoad),Object(p.a)(t,"errMsg",e.props.promotions.errMsg),t))}}),l.a.createElement(T.b,{exact:!0,path:"/menu",component:function(){return l.a.createElement(F,{dishes:e.props.dishes.dishes,isLoad:e.props.dishes.isLoad,errMsg:e.props.dishes.errMsg})}}),l.a.createElement(T.b,{exact:!0,path:"/menu/:id",component:function(t){var a=t.match;return l.a.createElement(_,{selecteddish:e.props.dishes.dishes.filter(function(e){return e.id==a.params.id})[0],isLoad:e.props.dishes.isLoad,errMsg:e.props.dishes.errMsg,comments:e.props.comments.comments.filter(function(e){return e.dishId==a.params.id}),postComment:e.props.postComment})}}),l.a.createElement(T.b,{exact:!0,path:"/feedback",component:function(){return l.a.createElement($,null)}}),l.a.createElement(T.b,{exact:!0,path:"/contactus",component:function(){return l.a.createElement(Z,{resetFeedbackForm:e.props.resetFeedbackForm})}}),l.a.createElement(T.a,{to:"/home"})))))}}]),t}(r.Component),ce=Object(T.g)(Object(K.connect)(function(e){return{dishes:e.dishes,leaders:e.leaders,promotions:e.promotions,comments:e.comments}},function(e){return{postComment:function(t,a,n,r){return e(Q(t,a,n,r))},displaydishes:function(){return e(function(e){return e(V(!0)),fetch(N+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error : "+e.status+" : "+e.statusText);return t.response=e,t},function(e){return new Error(e.message)}).then(function(e){return e.json()}).then(function(t){e(X(t)),console.log(t)}).catch(function(t){return e(ee(t))})})},resetFeedbackForm:function(){return e(R.actions.reset("feedback"))},displaycomments:function(){return e(function(e){return fetch(N+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error : "+e.status+" : "+e.statusText);return t.response=e,t},function(e){return new Error(e.message)}).then(function(e){return e.json()}).then(function(t){e(le(t))}).catch(function(t){return e(ee(t))})})},displayleaders:function(){return e(function(e){return e(ne()),fetch(N+"leaders").then(function(e){if(e.ok)return e;var t=new Error("Error : "+e.status+" : "+e.statusText);return t.response=e,t},function(e){return new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(re(t))}).catch(function(t){return e(ee(t))})})},displaypromos:function(){return e(function(e){return e(te()),fetch(N+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error : "+e.status+" : "+e.statusText);return t.response=e,t},function(e){return new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(ae(t))}).catch(function(t){return e(ee(t))})})}}})(se)),me=a(7),ie=a(34),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoad:!0,errMsg:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(me.a)({},e,{dishes:t.payload,isLoad:!1,errMsg:null});case b:return Object(me.a)({},e,{dishes:[],isLoad:!0,errMsg:null});case v:return Object(me.a)({},e,{dishes:[],isLoad:!1,errMsg:t.payload});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoad:!0,errMsg:"",leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(me.a)({},e,{leaders:t.payload,isLoad:!1,errMsg:null});case S:return Object(me.a)({},e,{leaders:[],isLoad:!0,errMsg:null});case x:return Object(me.a)({},e,{leaders:[],isLoad:!1,errMsg:t.payload});default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoad:!0,errMsg:"",promos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(me.a)({},e,{promos:t.payload,isLoad:!1,errMsg:null});case D:return Object(me.a)({},e,{promos:[],isLoad:!0,errMsg:null});case M:return Object(me.a)({},e,{promos:[],isLoad:!1,errMsg:t.payload});default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoad:!0,errMsg:"",comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a=t.payload;return Object(me.a)({},e,{comments:e.comments.concat(a)});case y:return Object(me.a)({},e,{comments:t.payload,isLoad:!1,errMsg:null});case L:return Object(me.a)({},e,{comments:[],isLoad:!1,errMsg:t.payload});default:return e}},he=a(253),fe=a.n(he),ge=a(254),be=a.n(ge),ve={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Oe=Object(ie.createStore)(Object(ie.combineReducers)(Object(me.a)({dishes:ue,leaders:de,promotions:Ee,comments:pe},Object(R.createForms)({feedback:ve}))),Object(ie.applyMiddleware)(fe.a,be.a)),Ne=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(K.Provider,{store:Oe},l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(ce,null)))))}}]),t}(r.Component);a(586),a(587),a(588),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[256,1,2]]]);
//# sourceMappingURL=main.0b9b0624.chunk.js.map