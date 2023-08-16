"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8303],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=p(r),f=o,k=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(k,l(l({ref:e},u),{},{components:r})):n.createElement(k,l({ref:e},u))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[s]="string"==typeof t?t:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23365:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"",slug:"/cli//planton/product/kafka/cluster/list",sidebar_label:"list"},l=void 0,c={unversionedId:"cli/planton/product/kafka/cluster/list",id:"cli/planton/product/kafka/cluster/list",title:"",description:"planton product kafka cluster list",source:"@site/docs/99-cli/planton/product/kafka/cluster/list.md",sourceDirName:"99-cli/planton/product/kafka/cluster",slug:"/cli//planton/product/kafka/cluster/list",permalink:"/cli/planton/product/kafka/cluster/list",draft:!1,tags:[],version:"current",frontMatter:{title:"",slug:"/cli//planton/product/kafka/cluster/list",sidebar_label:"list"},sidebar:"defaultSidebar",previous:{title:"get",permalink:"/cli/planton/product/kafka/cluster/get"},next:{title:"update",permalink:"/cli/planton/product/kafka/cluster/update"}},i={},p=[{value:"planton product kafka cluster list",id:"planton-product-kafka-cluster-list",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3}],u={toc:p},s="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"planton-product-kafka-cluster-list"},"planton product kafka cluster list"),(0,o.kt)("p",null,"list product kafka clusters of a product"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"planton product kafka cluster list [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for list\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --debug                     set log level to debug\n      --kafka-cluster-id string   id of the kafka cluster id\n      --product-env-id string     id of the product environment\n      --product-id string         id of the product\n      --product-key string        key of the product\n")))}d.isMDXComponent=!0}}]);