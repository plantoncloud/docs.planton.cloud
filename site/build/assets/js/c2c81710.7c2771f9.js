"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9072],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>k});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},l=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=d(n),s=o,k=u["".concat(c,".").concat(s)]||u[s]||f[s]||a;return n?r.createElement(k,p(p({ref:e},l),{},{components:n})):r.createElement(k,p({ref:e},l))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:o,p[1]=i;for(var d=2;d<a;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12900:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"",slug:"/cli//planton/product/kafka/topic/add",sidebar_label:"add"},p=void 0,i={unversionedId:"cli/planton/product/kafka/topic/add",id:"cli/planton/product/kafka/topic/add",title:"",description:"planton product kafka topic add",source:"@site/docs/99-cli/planton/product/kafka/topic/add.md",sourceDirName:"99-cli/planton/product/kafka/topic",slug:"/cli//planton/product/kafka/topic/add",permalink:"/cli/planton/product/kafka/topic/add",draft:!1,tags:[],version:"current",frontMatter:{title:"",slug:"/cli//planton/product/kafka/topic/add",sidebar_label:"add"},sidebar:"defaultSidebar",previous:{title:"add-multiple",permalink:"/cli/planton/product/kafka/topic/add-multiple"},next:{title:"delete",permalink:"/cli/planton/product/kafka/topic/delete"}},c={},d=[{value:"planton product kafka topic add",id:"planton-product-kafka-topic-add",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3}],l={toc:d},u="wrapper";function f(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"planton-product-kafka-topic-add"},"planton product kafka topic add"),(0,o.kt)("p",null,"add a product kafka topic to a kafka cluster in a product env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"planton product kafka topic add [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for add\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --debug                     set log level to debug\n      --kafka-cluster-id string   id of the kafka cluster id\n      --kafka-topic-id string     id of the kafka topic\n      --product-env-id string     id of the product environment\n      --product-id string         id of the product\n      --product-key string        key of the product\n")))}f.isMDXComponent=!0}}]);