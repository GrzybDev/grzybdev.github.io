(this["webpackJsonpgrzybdev.github.io"]=this["webpackJsonpgrzybdev.github.io"]||[]).push([[0],{324:function(e,t,s){},330:function(e,t,s){},331:function(e,t,s){},332:function(e,t,s){},333:function(e,t,s){},334:function(e,t,s){},335:function(e,t,s){},336:function(e,t,s){},337:function(e,t,s){},338:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(4),c=s.n(a),i=s(83),r=s.n(i),o=s(12),l=s(13),h=s(15),d=s(14),u=s(40),j=s.n(u),b=(s(324),s(11)),m=s(84),f=s.n(m),p=(s(330),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",selfieUrl:"",selfieAlt:"",signText:"",signIcon:"",proffesions:[],about:""},e}return Object(l.a)(s,[{key:"getName",value:function(){return this.state.name.split("").map((function(e,t){return Object(n.jsx)("span",{className:"animatedLetter",children:e},t)}))}},{key:"applyData",value:function(e){this.setState({name:e.personal.name,selfieUrl:e.personal.selfieUrl,selfieAlt:e.common.texts.selfie_alternative,signIcon:e.common.texts.arrow_up_icon,signText:e.common.texts.selfie_caption,proffesions:e.personal.proffesions,about:e.personal.about_me})}},{key:"render",value:function(){return""===this.state.name?null:Object(n.jsxs)("section",{id:"landing",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("img",{className:"selfie",src:this.state.selfieUrl,alt:this.state.selfieAlt}),Object(n.jsxs)("div",{className:"sign",children:[Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.signText}}),Object(n.jsx)(b.a,{icon:this.state.signIcon})]})]}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsx)("h1",{className:"title",children:this.getName()}),Object(n.jsx)(f.a,{className:"proffesions",strings:this.state.proffesions,typeSpeed:40,backSpeed:50,backDelay:2e3,cursorChar:"_",loop:!0}),Object(n.jsx)("p",{className:"desc",dangerouslySetInnerHTML:{__html:this.state.about}})]})]})}}]),s}(s(4).Component)),v=s(27),O=s.n(v),x=(s(331),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={jobStatus:"",sectionName:"",sectionDesc:"",characteristic:[],data:[],counters:[],projectCount:0},e}return Object(l.a)(s,[{key:"applyData",value:function(e,t){this.setState({jobStatus:e.personal.jobStatus,sectionName:e.common.sections[t].name,sectionDesc:e.common.sections[t].description,characteristic:e.experience.characteristic,data:e.experience.data,counters:e.experience.counters})}},{key:"getSubsection",value:function(e){return this.state.data[e].list.map((function(e,t){return Object(n.jsxs)("div",{className:"lang",children:[Object(n.jsx)("img",{src:e.icon,alt:e.name}),Object(n.jsx)("p",{children:e.name}),Object(n.jsx)("p",{className:"status",children:e.status})]},t)}))}},{key:"getEntries",value:function(e){var t=this;return this.state.characteristic[e].list?(this.state.characteristic[e].list.reverse(),this.state.characteristic[e].list.map((function(s,a){return Object(n.jsxs)("div",{className:"entry",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:s.url,children:s.title}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),t.renderDate(s),Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:s.description}})]}),Object(n.jsx)("ul",{children:t.getFeatures(e,a)})]},a)}))):null}},{key:"getFeatures",value:function(e,t){return this.state.characteristic[e].list[t].points.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}},{key:"renderDate",value:function(e){if(e.from)return e.to?"".concat(e.from," - ").concat(e.to):"".concat(e.from," - Currently")}},{key:"getConvertedDate",value:function(e){var t=O()(e,"DD-MM-YYYY"),s=O()(),n={year:s.diff(t,"years"),months:s.diff(t,"months"),days:s.diff(t,"days"),hours:s.diff(t,"hours"),minutes:s.diff(t,"minutes"),seconds:s.diff(t,"seconds")};return n.year>0?1===n.year?[n.year,"year"]:[n.year,"years"]:n.months>0?1===n.months?[n.months,"month"]:[n.months,"months"]:n.days>0?1===n.days?[n.days,"day"]:[n.days,"days"]:n.minutes>0?1===n.minutes?[n.minutes,"minute"]:[n.minutes,"minutes"]:1===n.seconds?[n.seconds,"second"]:[n.seconds,"seconds"]}},{key:"getCounter",value:function(e,t){switch(e){case"projects":return[this.state.projectCount,""];case"calendar":return this.getConvertedDate(t);default:return[-1,""]}}},{key:"updateProjectCount",value:function(e){this.setState({projectCount:this.state.projectCount+e})}},{key:"render",value:function(){var e=this;if(""===this.state.sectionName)return null;var t=this.state.characteristic.map((function(t,s){return Object(n.jsxs)("div",{className:"characteristic",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("p",{children:t.title})}),Object(n.jsxs)("div",{className:"desc",children:[Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}}),e.getEntries(s)]}),t.disableLine?null:Object(n.jsx)("hr",{})]},s)})),s=this.state.data.map((function(t,s){return Object(n.jsxs)("div",{className:"characteristic",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("p",{children:t.name})}),Object(n.jsx)("div",{className:"desc",children:e.getSubsection(s)}),Object(n.jsx)("hr",{})]},s)})),a=this.state.counters.map((function(t,s){return Object(n.jsxs)("div",{className:"counter",children:[Object(n.jsx)("div",{className:"counterIcon",children:Object(n.jsx)(b.a,{icon:t.icon,size:"2x"})}),Object(n.jsx)("h4",{className:"number",children:e.getCounter(t.method,t.date)[0]}),Object(n.jsx)("p",{className:"title",children:""===e.getCounter(t.method,t.date)[1]?t.name:"".concat(e.getCounter(t.method,t.date)[1]," ").concat(t.name)})]},s)}));return Object(n.jsxs)("section",{id:"experience",children:[Object(n.jsx)("div",{className:"jobStatus",children:Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.jobStatus}})}),Object(n.jsx)("div",{className:"sectionTitle",children:Object(n.jsx)("h1",{children:this.state.sectionName})}),Object(n.jsx)("div",{className:"sectionDesc",children:Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.sectionDesc}})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"left",children:t}),Object(n.jsx)("div",{className:"right",children:s})]}),Object(n.jsxs)("div",{className:"counters",children:[Object(n.jsx)(j.a,{className:"bg",height:"200px",width:"100vw"}),Object(n.jsx)("div",{className:"main",children:a})]})]})}}]),s}(a.Component)),y="https://grzybdev.herokuapp.com",g=(s(332),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={sectionName:"",sectionDesc:"",sources:[],projects:{}},e}return Object(l.a)(s,[{key:"applyData",value:function(e,t){var s=this;this.setState({sectionName:e.common.sections[t].name,sectionDesc:e.common.sections[t].description,sources:e.projects.sources});var n=this.state.projects;this.state.sources.forEach((function(e,t){switch(e.method){case"api":fetch("".concat(y,"/portfolio/projects")).then((function(e){return e.json()})).then((function(e){s.props.projectHandler(e.length),0!==e.length&&(n[t]=e,s.setState({projects:n}))}))}}))}},{key:"renderBadges",value:function(e){return e.map((function(e,t){return Object(n.jsx)("div",{className:"badge",style:{backgroundColor:e.color},children:e.text},t)}))}},{key:"renderHighlights",value:function(e){return e.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}},{key:"renderProjects",value:function(e){var t=this;return this.state.projects[e]?this.state.projects[e].map((function(e,s){return Object(n.jsxs)("div",{className:"entry",children:[Object(n.jsx)("a",{href:"/project/".concat(e.id),children:Object(n.jsxs)("div",{className:"tile",children:[Object(n.jsx)("div",{className:"bg",style:{backgroundImage:"url('".concat(e.tile,"')")}}),Object(n.jsx)("div",{className:"tileTitle",children:e.name})]},s)}),Object(n.jsx)("div",{className:"badges",children:t.renderBadges(e.badges)}),Object(n.jsx)("div",{className:"shortDescription",children:e.shortDescription}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"highlights",children:[Object(n.jsx)("p",{children:"Highlights:"}),Object(n.jsx)("ul",{children:t.renderHighlights(e.highlights)})]})]})})):Object(n.jsx)("h1",{className:"noProjects",dangerouslySetInnerHTML:{__html:"No projects found!<br/>Please check again later"}})}},{key:"render",value:function(){var e=this;if(""===this.state.sectionName)return null;var t=this.state.sources.map((function(t,s){return Object(n.jsxs)("div",{className:"subsection",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)(b.a,{icon:t.icon}),"\xa0",t.name,"\xa0",Object(n.jsx)(b.a,{icon:t.icon})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"list",children:e.renderProjects(s)})]},s)}));return Object(n.jsxs)("section",{id:"projects",children:[Object(n.jsx)("div",{className:"sectionTitle",children:Object(n.jsx)("h1",{children:this.state.sectionName})}),Object(n.jsx)("div",{className:"sectionDesc",children:Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.sectionDesc}})}),Object(n.jsx)("hr",{}),t]})}}]),s}(a.Component)),N=s(28),k=(s(333),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={brand:"",copyYear:0,formScale:1,sectionName:"",sectionDesc:"",contactFormUrl:"",socialText:"",socials:[]},e}return Object(l.a)(s,[{key:"getCopyrightYear",value:function(e){var t=O()().year();return"".concat(e.toString()," ").concat(t>e?"- ".concat(t.toString()):"")}},{key:"applyData",value:function(e,t){this.setState({brand:e.personal.name,copyYear:e.common.copyright,sectionName:e.common.sections[t].name,sectionDesc:e.common.sections[t].description,contactFormUrl:e.common.contactFormUrl,socialText:e.common.texts.social_text,socials:e.personal.socials})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize.bind(this)),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize.bind(this))}},{key:"onResize",value:function(){window.innerWidth<=534?this.setState({formScale:window.innerWidth/534}):this.setState({formScale:1})}},{key:"render",value:function(){var e=this.state.socials.map((function(e,t){return Object(n.jsx)("a",{href:e.link,title:e.name,children:Object(n.jsx)(b.a,{icon:["fab",e.icon],size:"4x"})},t)}));return Object(n.jsxs)("section",{id:"contact",children:[Object(n.jsx)("div",{className:"sectionTitle",children:Object(n.jsx)("h1",{children:this.state.sectionName})}),Object(n.jsxs)("div",{className:"sectionDesc",children:[Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.sectionDesc}}),Object(n.jsx)("iframe",{src:this.state.contactFormUrl,title:"formContact",className:"contactForm",style:{transform:"scale(".concat(this.state.formScale,")")}}),Object(n.jsx)("p",{className:"socialText",dangerouslySetInnerHTML:{__html:this.state.socialText}}),Object(n.jsx)("div",{className:"SocialIcons",children:e})]}),Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"footer-copyright text-center-py-3",children:[Object(n.jsx)(b.a,{icon:N.a})," ",this.getCopyrightYear(this.state.copyYear)," by ",this.state.brand]})})]})}}]),s}(a.Component)),S=(s(334),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={brand:"",entries:[],hamburgerIcon:"",navbarStatus:"",navbarTransparency:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"handleScroll",value:function(){var e=window.pageYOffset;0!==e&&"focus"!==this.state.navbarTransparency?this.setState({navbarTransparency:"focus"}):0===e&&"active"!==this.state.navbarStatus&&this.setState({navbarTransparency:""})}},{key:"toggleNavbar",value:function(){"active"!==this.state.navbarStatus?this.setState({navbarStatus:"active",navbarTransparency:"focus"}):this.setState({navbarStatus:""})}},{key:"applyData",value:function(e){this.setState({brand:e.personal.name,entries:e.common.sections,hamburgerIcon:e.common.texts.hamburger_icon})}},{key:"render",value:function(){var e=this,t=this.state.entries.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:e.url,children:[Object(n.jsx)(b.a,{icon:e.icon}),e.name]})},t)}));return""===this.state.brand||null===this.state.brand?null:Object(n.jsx)("nav",{className:this.state.navbarTransparency,children:Object(n.jsxs)("ul",{className:"sections ".concat(this.state.navbarStatus),children:[t,Object(n.jsx)("li",{className:"branding",children:Object(n.jsx)("a",{href:"#landing",children:this.state.brand})}),Object(n.jsx)("li",{className:"hamburger ".concat(this.state.navbarStatus),onClick:function(){return e.toggleNavbar()},children:Object(n.jsx)(b.a,{icon:this.state.hamburgerIcon})})]})})}}]),s}(a.Component)),w=(s(335),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={icon:"",visibility:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"handleScroll",value:function(){0!==window.pageYOffset?this.setState({visibility:"visible"}):this.setState({visibility:""})}},{key:"applyData",value:function(e){this.setState({icon:e.common.texts.back_to_top_icon})}},{key:"render",value:function(){return""===this.state.icon?null:Object(n.jsx)(b.a,{icon:this.state.icon,className:"BackToTop ".concat(this.state.visibility),size:"2x",onClick:function(){return window.scrollTo(0,0)}})}}]),s}(a.Component)),T=s(85),C=(s(336),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loaded:!1,addClass:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(y,"/portfolio/common")).then((function(e){return e.json()})).then((function(t){e.props.handler("common",t),e.hidePreloader()})).catch((function(t){e.props.handler("crash")}))}},{key:"hidePreloader",value:function(){var e=this;this.setState({loaded:!0}),setTimeout((function(){return e.setState({addClass:"hidden"})}),500)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"preloader ".concat(this.state.loaded?"loaded":""," ").concat(this.state.addClass),children:[Object(n.jsx)(T.a,{size:64}),Object(n.jsx)("h1",{className:"text",children:"Please wait..."})]})}}]),s}(s(4).Component)),D=s(26),R=s(87),_=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={hasCrashed:!1,crashReason:"",particlesConfig:{}},D.b.add(N.c),D.b.add(R.a),e.navbarRef=c.a.createRef(),e.backToTopRef=c.a.createRef(),e.landingRef=c.a.createRef(),e.experienceRef=c.a.createRef(),e.projectsRef=c.a.createRef(),e.contactRef=c.a.createRef(),e}return Object(l.a)(s,[{key:"loadData",value:function(e,t){try{switch(e){case"common":this.setState({particlesConfig:t.particles.background}),this.navbarRef.current.applyData(t),this.backToTopRef.current.applyData(t),this.landingRef.current.applyData(t),this.experienceRef.current.applyData(t,1),this.projectsRef.current.applyData(t,2),this.contactRef.current.applyData(t,3),window.scrollTo(0,0);break;default:this.setState({hasCrashed:!0,crashReason:"failedToConnect"})}}catch(s){this.setState({hasCrashed:!0,crashReason:"badResponse"})}}},{key:"componentDidCatch",value:function(e,t){this.setState({hasCrashed:!0,crashReason:"renderError"})}},{key:"projectHandler",value:function(e){this.experienceRef.current.updateProjectCount(e)}},{key:"render",value:function(){if(this.state.hasCrashed){setTimeout((function(){return window.location.reload()}),1e4);var e="";switch(this.state.crashReason){case"failedToConnect":e="There was an error trying to contact my backend services.";break;case"badResponse":e="My backend service returned bad response.";break;case"renderError":e="There was an error trying to render some component.";break;default:e="Unknown error."}return Object(n.jsxs)("main",{className:"crash",children:[Object(n.jsx)(b.a,{icon:N.b,size:"4x"}),Object(n.jsx)("h1",{children:"Oh no! Something terrible happened!"}),Object(n.jsx)("p",{children:"".concat(e," Please try again later.")}),Object(n.jsx)("p",{children:"This page will automatically refresh after 10 seconds..."})]})}return Object(n.jsxs)("main",{children:[Object(n.jsx)(j.a,{className:"bgParticles",height:"100vh",width:"100vw",params:this.state.particlesConfig}),Object(n.jsxs)("div",{id:"PageContent",children:[Object(n.jsx)(p,{ref:this.landingRef}),Object(n.jsx)(x,{ref:this.experienceRef}),Object(n.jsx)(g,{ref:this.projectsRef,projectHandler:this.projectHandler.bind(this)}),Object(n.jsx)(k,{ref:this.contactRef})]}),Object(n.jsx)(S,{ref:this.navbarRef}),Object(n.jsx)(w,{ref:this.backToTopRef}),Object(n.jsx)(C,{handler:this.loadData.bind(this)})]})}}]),s}(c.a.Component);s(337);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.47fa9d64.chunk.js.map