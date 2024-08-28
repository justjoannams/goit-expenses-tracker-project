var ee=Object.defineProperty;var te=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>te(e,typeof t!="symbol"?t+"":t,r);import{g as Y,R as b,r as _,d}from"./index-CJCEdQaw.js";import{i as re}from"./index.esm-BJn-8Qwc.js";var ne=function(t,r,n,i){var o=n?n.call(i,t,r):void 0;if(o!==void 0)return!!o;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var c=Object.keys(t),a=Object.keys(r);if(c.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(r),s=0;s<c.length;s++){var p=c[s];if(!l(p))return!1;var f=t[p],h=r[p];if(o=n?n.call(i,f,h,p):void 0,o===!1||o===void 0&&f!==h)return!1}return!0};const ie=Y(ne);var oe=function(e,t,r,n,i,o,c,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,i,o,c,a],p=0;l=new Error(t.replace(/%s/g,function(){return s[p++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},ae=oe;const U=Y(ae);var V=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(V||{}),I={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},q=Object.values(V),L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},se=Object.entries(L).reduce((e,[t,r])=>(e[r]=t,e),{}),x="data-rh",w={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},A=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},le=e=>{let t=A(e,"title");const r=A(e,w.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const n=A(e,w.DEFAULT_TITLE);return t||n||void 0},ce=e=>A(e,w.ON_CHANGE_CLIENT_STATE)||(()=>{}),P=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,n)=>({...r,...n}),{}),pe=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,n)=>{if(!r.length){const i=Object.keys(n);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return r.concat(n)}}return r},[]),de=e=>console&&typeof console.warn=="function"&&console.warn(e),E=(e,t,r)=>{const n={};return r.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&de(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,o)=>{const c={};o.filter(l=>{let s;const p=Object.keys(l);for(let h=0;h<p.length;h+=1){const u=p[h],y=u.toLowerCase();t.indexOf(y)!==-1&&!(s==="rel"&&l[s].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(s=y),t.indexOf(u)!==-1&&(u==="innerHTML"||u==="cssText"||u==="itemprop")&&(s=u)}if(!s||!l[s])return!1;const f=l[s].toLowerCase();return n[s]||(n[s]={}),c[s]||(c[s]={}),n[s][f]?!1:(c[s][f]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(c);for(let l=0;l<a.length;l+=1){const s=a[l],p={...n[s],...c[s]};n[s]=p}return i},[]).reverse()},fe=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},ue=e=>({baseTag:pe(["href"],e),bodyAttributes:P("bodyAttributes",e),defer:A(e,w.DEFER),encode:A(e,w.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:P("htmlAttributes",e),linkTags:E("link",["rel","href"],e),metaTags:E("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:E("noscript",["innerHTML"],e),onChangeClientState:ce(e),scriptTags:E("script",["src","innerHTML"],e),styleTags:E("style",["cssText"],e),title:le(e),titleAttributes:P("titleAttributes",e),prioritizeSeoTags:fe(e,w.PRIORITIZE_SEO_TAGS)}),G=e=>Array.isArray(e)?e.join(""):e,me=(e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1},$=(e,t)=>Array.isArray(e)?e.reduce((r,n)=>(me(n,t)?r.priority.push(n):r.default.push(n),r),{priority:[],default:[]}):{default:e,priority:[]},K=(e,t)=>({...e,[t]:void 0}),he=["noscript","script","style"],D=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Z=e=>Object.keys(e).reduce((t,r)=>{const n=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n},""),xe=(e,t,r,n)=>{const i=Z(r),o=G(t);return i?`<${e} ${x}="true" ${i}>${D(o,n)}</${e}>`:`<${e} ${x}="true">${D(o,n)}</${e}>`},ge=(e,t,r=!0)=>t.reduce((n,i)=>{const o=i,c=Object.keys(o).filter(s=>!(s==="innerHTML"||s==="cssText")).reduce((s,p)=>{const f=typeof o[p]>"u"?p:`${p}="${D(o[p],r)}"`;return s?`${s} ${f}`:f},""),a=o.innerHTML||o.cssText||"",l=he.indexOf(e)===-1;return`${n}<${e} ${x}="true" ${c}${l?"/>":`>${a}</${e}>`}`},""),B=(e,t={})=>Object.keys(e).reduce((r,n)=>{const i=L[n];return r[i||n]=e[n],r},t),be=(e,t,r)=>{const n={key:t,[x]:!0},i=B(r,n);return[b.createElement("title",i,t)]},k=(e,t)=>t.map((r,n)=>{const i={key:n,[x]:!0};return Object.keys(r).forEach(o=>{const a=L[o]||o;if(a==="innerHTML"||a==="cssText"){const l=r.innerHTML||r.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=r[o]}),b.createElement(e,i)}),m=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>be(e,t.title,t.titleAttributes),toString:()=>xe(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>B(t),toString:()=>Z(t)};default:return{toComponent:()=>k(e,t),toString:()=>ge(e,t,r)}}},ye=({metaTags:e,linkTags:t,scriptTags:r,encode:n})=>{const i=$(e,I.meta),o=$(t,I.link),c=$(r,I.script);return{priorityMethods:{toComponent:()=>[...k("meta",i.priority),...k("link",o.priority),...k("script",c.priority)],toString:()=>`${m("meta",i.priority,n)} ${m("link",o.priority,n)} ${m("script",c.priority,n)}`},metaTags:i.default,linkTags:o.default,scriptTags:c.default}},Te=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:i,noscriptTags:o,styleTags:c,title:a="",titleAttributes:l,prioritizeSeoTags:s}=e;let{linkTags:p,metaTags:f,scriptTags:h}=e,u={toComponent:()=>{},toString:()=>""};return s&&({priorityMethods:u,linkTags:p,metaTags:f,scriptTags:h}=ye(e)),{priority:u,base:m("base",t,n),bodyAttributes:m("bodyAttributes",r,n),htmlAttributes:m("htmlAttributes",i,n),link:m("link",p,n),meta:m("meta",f,n),noscript:m("noscript",o,n),script:m("script",h,n),style:m("style",c,n),title:m("title",{title:a,titleAttributes:l},n)}},M=Te,O=[],J=!!(typeof window<"u"&&window.document&&window.document.createElement),R=class{constructor(e,t){g(this,"instances",[]);g(this,"canUseDOM",J);g(this,"context");g(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?O:this.instances,add:e=>{(this.canUseDOM?O:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?O:this.instances).indexOf(e);(this.canUseDOM?O:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=M({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ve={},Q=b.createContext(ve),T,we=(T=class extends _.Component{constructor(r){super(r);g(this,"helmetData");this.helmetData=new R(this.props.context||{},T.canUseDOM)}render(){return b.createElement(Q.Provider,{value:this.helmetData.value},this.props.children)}},g(T,"canUseDOM",J),T),v=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${x}]`),i=[].slice.call(n),o=[];let c;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const s in a)if(Object.prototype.hasOwnProperty.call(a,s))if(s==="innerHTML")l.innerHTML=a.innerHTML;else if(s==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const p=s,f=typeof a[p]>"u"?"":a[p];l.setAttribute(s,f)}l.setAttribute(x,"true"),i.some((s,p)=>(c=p,l.isEqualNode(s)))?i.splice(c,1):o.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),o.forEach(a=>r.appendChild(a)),{oldTags:i,newTags:o}},z=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(x),i=n?n.split(","):[],o=[...i],c=Object.keys(t);for(const a of c){const l=t[a]||"";r.getAttribute(a)!==l&&r.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const s=o.indexOf(a);s!==-1&&o.splice(s,1)}for(let a=o.length-1;a>=0;a-=1)r.removeAttribute(o[a]);i.length===o.length?r.removeAttribute(x):r.getAttribute(x)!==c.join(",")&&r.setAttribute(x,c.join(","))},Ae=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=G(e)),z("title",t)},W=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:i,linkTags:o,metaTags:c,noscriptTags:a,onChangeClientState:l,scriptTags:s,styleTags:p,title:f,titleAttributes:h}=e;z("body",n),z("html",i),Ae(f,h);const u={baseTag:v("base",r),linkTags:v("link",o),metaTags:v("meta",c),noscriptTags:v("noscript",a),scriptTags:v("script",s),styleTags:v("style",p)},y={},j={};Object.keys(u).forEach(S=>{const{newTags:F,oldTags:X}=u[S];F.length&&(y[S]=F),X.length&&(j[S]=u[S].oldTags)}),t&&t(),l(e,y,j)},C=null,Ee=e=>{C&&cancelAnimationFrame(C),e.defer?C=requestAnimationFrame(()=>{W(e,()=>{C=null})}):(W(e),C=null)},Ce=Ee,N=class extends _.Component{constructor(){super(...arguments);g(this,"rendered",!1)}shouldComponentUpdate(t){return!ie(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let n=null;const i=ue(t.get().map(o=>{const c={...o.props};return delete c.context,c}));we.canUseDOM?Ce(i):M&&(n=M(i)),r(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},H,Ie=(H=class extends _.Component{shouldComponentUpdate(e){return!re(K(this.props,"helmetData"),K(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(n=>{r={...r,[n]:e[n]}}),r}warnOnInvalidChildren(e,t){return U(q.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${q.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),U(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return b.Children.forEach(e,n=>{if(!n||!n.props)return;const{children:i,...o}=n.props,c=Object.keys(o).reduce((l,s)=>(l[se[s]||s]=o[s],l),{});let{type:a}=n;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(n,i),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(n,r,c,i);break;default:t=this.mapObjectTypeChildren(n,t,c,i);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:n}=t;if(e&&(r=this.mapChildrenToProps(e,r)),n&&!(n instanceof R)){const i=n;n=new R(i.context,!0),delete r.helmetData}return n?b.createElement(N,{...r,context:n.value}):b.createElement(Q.Consumer,null,i=>b.createElement(N,{...r,context:i}))}},g(H,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),H);const Pe=d.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 40px;
  padding-left: 12px;
  border-radius: 12px;
  width: 335px;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;
    &.valid {
      border-color: #0ef387;
    }
    &.invalid {
      border-color: #e74a3b;
    }
    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }
    &:hover {
      border-color: #0ef387;
    }

    &:not(:focus):not(:placeholder-shown):valid {
      border-color: #0ef387; /* Зелений колір бордера, коли значення валідне, але не в фокусі і не placeholder */
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #e74a3b; /* Червоний колір бордера, коли значення невалідне, але не в фокусі і не placeholder */
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.4);
      font-family: Suisse Intl;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 128.571% */
      @media (min-width: 768px) and (max-width: 1439.8px) {
        font-size: 16px;
      }

      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fafafa !important;
      caret-color: #fafafa !important;
    }
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 399px;
    font-size: 16px;
  }
`,$e=d.button`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: #0ef387;
  color: #0c0d0d;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }

  &:hover {
    border-radius: 40px;
    background: #0ebb69;
  }
`;d.p`
  /* padding: 10px 20px; */
  margin-top: 20px;
`;const He=d.div`
  margin-top: 50px;
`,De=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 80px;
`,Me=d.div`
  position: relative;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
  }

  @media (min-width: 1440px) {
    width: 399px;
  }
`,Re=d.input`
  width: 335px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 40px;
  padding-left: 12px;
  border-radius: 12px;
  background-color: #0c0d0d;
  color: rgba(250, 250, 250, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.2);
  outline: none;
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:not(:focus):not(:placeholder-shown):invalid {
    border-color: #e74a3b;
  }

  &:not(:focus):not(:placeholder-shown):valid {
    border-color: #0ef387;
  }

  &:focus {
    border-color: #0ef387;
    color: #fafafa;
  }

  &::placeholder {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: 16px;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fafafa !important;
    caret-color: #fafafa !important;
  }

  &.empty {
    border-color: rgba(250, 250, 250, 0.2);

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }
  }

  &.invalid {
    border-color: #e74a3b !important;

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #e74a3b !important;
    }
  }

  &.valid {
    border-color: #0ef387;
  }

  &:not(:focus):hover {
    border-color: ${({className:e})=>e&&e.includes("invalid")?"#e74a3b":"#0ef387"};
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 399px;
    font-size: 16px;
  }
`,ze=d.button`
  /* ваші стилі для кнопки показу/приховування пароля тут */
  display: flex;
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(250, 250, 250, 0.6);
  cursor: pointer;
  font-size: 14px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    right: 18px;
  }

  @media (min-width: 1440px) {
    right: 18px;
  }
`,_e=d.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
`,Le=d.p`
  font-size: 12px;
  color: #e74a3b;
  margin-top: 5px;
  padding-left: 12px;
`,je=d.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  color: rgba(250, 250, 250, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  &.span {
    color: #fafafa;
  }
`,Fe=d.div`
  color: #fafafa;
  text-decoration: underline;
`,Ue=d.p`
  font-size: 12px;
  /* color: #0ef387; */
  color: ${e=>e.$isGood?"#0ef387":"#E74A3B"};
  margin-top: 5px;
  padding-left: 12px;
`,qe=d.img`
  display: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
    width: 611px;
    height: 568px;
  }
`,Ke=d.div`
  margin-left: 0;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    max-width: 399px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    margin-left: 54px;
  }
`,We=d.div`
  padding-top: 113px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  background: #0c0d0d;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    flex-direction: column-reverse;
    padding-top: 191px;
    padding-left: 185px;
    padding-right: 184px;
    padding-bottom: 20px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    padding-top: 56px;
    padding-left: 185px;
    padding-right: 184px;
    padding-bottom: 20px;
  }
`,Ne=d.p`
  margin-top: 20px;
  margin-bottom: 40px;
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  max-width: 335px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }
`,Ye=d.div`
  position: relative;
`,Ve=d.div`
  position: absolute;
  top: 240px;
  left: -10px;
  width: 248px;
  height: 81px;
  @media (max-width: 768.8px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
    top: 315px;
    left: -16px;
  }

  @media (min-width: 1440px) {
    top: 315px;
    left: -50px;
    width: 303px;
    height: 121px;
  }
`;export{$e as B,Le as E,we as H,qe as I,je as L,ze as P,Pe as S,Ve as T,De as W,_e as a,Me as b,Re as c,Ue as d,He as e,Fe as f,Ie as g,We as h,Ye as i,Ke as j,Ne as k};
