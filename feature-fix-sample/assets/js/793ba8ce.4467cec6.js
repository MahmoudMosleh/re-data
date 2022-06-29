"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[866],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7233:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:1},c="Owners",l={unversionedId:"reference/notifications/configuring_owners",id:"reference/notifications/configuring_owners",title:"Owners",description:"Setting up owners for models, allows you to alert about the problem specific groups of people. This is realised either by mentioning on the Slack channel or in case of email, sending information only to specific people.",source:"@site/docs/reference/notifications/configuring_owners.md",sourceDirName:"reference/notifications",slug:"/reference/notifications/configuring_owners",permalink:"/feature-fix-sample/docs/reference/notifications/configuring_owners",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/notifications/configuring_owners.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anomalies",permalink:"/feature-fix-sample/docs/reference/anomaly_detection"},next:{title:"Configuring Channels and Sending Alerts",permalink:"/feature-fix-sample/docs/reference/notifications/configuring_channels"}},f={},u=[{value:"re_data:owners_config",id:"re_dataowners_config",level:3},{value:"re_data_owners",id:"re_data_owners",level:3}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"owners"},"Owners"),(0,o.kt)("p",null,"Setting up owners for models, allows you to alert about the problem specific groups of people. This is realised either by mentioning on the Slack channel or in case of email, sending information only to specific people."),(0,o.kt)("p",null,"Setting re_data owners is optional and re_data notification can work without any owners setup."),(0,o.kt)("h3",{id:"re_dataowners_config"},"re_data:owners_config"),(0,o.kt)("p",null,"Mapping of re_data model owners and their identifier is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data:owners_config")," block in the dbt_project.yml file.\nHere we can define an individual user or a group of users (team) with their respective identifiers.\nEach owner definition consists of "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: what kind of channel the identifier is used for. email | slack"),(0,o.kt)("li",{parentName:"ul"},"identifier: unique identifier used for the specified channel, e.g. slack member_id | email"),(0,o.kt)("li",{parentName:"ul"},"name: name associated with the identifier")),(0,o.kt)("p",null,"An example configuration is shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"vars:\n  re_data:owners_config:\n    user1:\n      - type: slack\n        identifier: U02FHBSXXXX\n        name: user1\n    backend:\n      - type: email\n        identifier: user1@getre.io\n        name: user1\n\n      - type: email\n        identifier: user2@getre.io\n        name: user2\n\n      - type: slack\n        identifier: U01F80NXXYY\n        name: user2\n\n      - type: slack\n        identifier: U02FHBSXXXX\n        name: user1\n    frontend:\n      - type: slack\n        identifier: U02FHBSXXXX\n        name: user1\n\n      - type: email\n        identifier: user2@getre.io\n        name: user2\n")),(0,o.kt)("h3",{id:"re_data_owners"},"re_data_owners"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="models/orders.sql"',title:'"models/orders.sql"'},"{{\n    config(\n        re_data_anomaly_detector={'name': 'z_score', 'threshold': 2.0},\n        re_data_owners=['backend'],\n    )\n}}\n")),(0,o.kt)("p",null,"In the configuration above, re_data_owners consists of the backend team, user1 and user2 would be notified on any alerts relating to this model."))}p.isMDXComponent=!0}}]);