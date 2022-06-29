"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[186],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9427:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:6},u="Anonymous data collection",c={unversionedId:"reference/anonymous_usage",id:"reference/anonymous_usage",title:"Anonymous data collection",description:"In order to catch problems early, understand how users are using redata and improve our product redata captures anonymous information about command-line usage. We track only the most important information and don't track any table names, metric names, etc. Here are a sample requests we are getting to our systems.",source:"@site/docs/reference/anonymous_usage.md",sourceDirName:"reference",slug:"/reference/anonymous_usage",permalink:"/0.7.0b1/docs/reference/anonymous_usage",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/anonymous_usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/0.7.0b1/docs/reference/models"},next:{title:"Q&A \ud83d\udcac",permalink:"/0.7.0b1/docs/qa"}},l={},p=[{value:"Sample events",id:"sample-events",level:2},{value:"Opt out",id:"opt-out",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anonymous-data-collection"},"Anonymous data collection"),(0,a.kt)("p",null,"In order to catch problems early, understand how users are using ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," and improve our product ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," captures anonymous information about command-line usage. We track only the most important information and don't track any table names, metric names, etc. Here are a sample requests we are getting to our systems."),(0,a.kt)("h2",{id:"sample-events"},"Sample events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    'command': 'run',\n    'dbt_version': '1.0.3',\n    'end_date': '2021-01-02T00:00:00.000Z',\n    'interval': 'days:1',\n    'os_system': 'Darwin',\n    'profile': null,\n    'python_version': '3.9.9',\n    're_data_version': '0.6.2',\n    'start_date': '2021-01-01T00:00:00.000Z',\n    'status': 'start',\n    'target': null\n")),(0,a.kt)("p",null,"In case of an exception happening when running ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," we will also get a type of exception:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    'command': 'run',\n    'dbt_version': '1.0.3',\n    'end_date': '2021-01-02T00:00:00.000Z',\n    'error': '<class \\'subprocess.CalledProcessError\\'>',\n    'interval': 'days:1',\n    'os_system': 'Darwin',\n    'profile': null,\n    'python_version': '3.9.9',\n    're_data_version': '0.6.2',\n    'start_date': '2021-01-01T00:00:00.000Z',\n    'status': 'exception',\n    'target': null\n")),(0,a.kt)("h2",{id:"opt-out"},"Opt out"),(0,a.kt)("p",null,"If you would like to opt out of anonymous usage collection set ",(0,a.kt)("inlineCode",{parentName:"p"},"RE_DATA_SEND_ANONYMOUS_USAGE_STATS=0")," in your environment. You can do it before or togather with ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," command call like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RE_DATA_SEND_ANONYMOUS_USAGE_STATS=1 re_data overview generate\n")))}m.isMDXComponent=!0}}]);