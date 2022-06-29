"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:1},l="Tests history",d={unversionedId:"reference/tests/history",id:"reference/tests/history",title:"Tests history",description:"re_data adds dbt macros which make it possible to save test history to your data warehouse & later on investigate them with our reliability UI.",source:"@site/docs/reference/tests/history.md",sourceDirName:"reference/tests",slug:"/reference/tests/history",permalink:"/feature-add-no-browser/docs/reference/tests/history",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests/history.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anomalies",permalink:"/feature-add-no-browser/docs/reference/anomaly_detection"},next:{title:"Testing metrics",permalink:"/feature-add-no-browser/docs/reference/tests/metrics"}},c={},u=[{value:"on-run-end",id:"on-run-end",level:2},{value:"re_data_test_history",id:"re_data_test_history",level:2},{value:"Tests view",id:"tests-view",level:2}],p={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tests-history"},"Tests history"),(0,a.kt)("p",null,"re_data adds dbt macros which make it possible to save test history to your data warehouse & later on investigate them with our reliability UI."),(0,a.kt)("h2",{id:"on-run-end"},"on-run-end"),(0,a.kt)("p",null,"To start saving tests you just need to call re_data ",(0,a.kt)("inlineCode",{parentName:"p"},"save_test_history")," macro in ",(0,a.kt)("inlineCode",{parentName:"p"},"on-run-end")," hook. You can do it by adding the code below into your ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),". In case of having some other hooks existing already you just need to add this as an item into the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"dbt_project.yml","dbt_project.yml":!0},'\non-run-end:\n  - "{{ re_data.save_test_history(results) }}"\n\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"on-run-end hooks are called for dbt tests since dbt 1.0.0, so this re_data feature is only available with the new dbt version."))),(0,a.kt)("h2",{id:"re_data_test_history"},"re_data_test_history"),(0,a.kt)("p",null,"re_data test history model contains information about tests and their stats."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from toy_shop_re.re_data_test_history\n        table_name        | column_name |                                 test_name                                  | status |       run_at\n--------------------------+-------------+----------------------------------------------------------------------------+--------+---------------------\n postgres.toy_shop.orders | amount      | not_null_orders_amount                                                     | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | accepted_values_orders_status__pending__shipped__delivered__not_paid__paid | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | customer_id | not_null_orders_customer_id                                                | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | created_at  | not_null_orders_created_at                                                 | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | not_null_orders_status                                                     | Pass   | 2022-01-13 08:49:39\n")),(0,a.kt)("h2",{id:"tests-view"},"Tests view"),(0,a.kt)("p",null,"Tests view lets you see the history of all dbt tests run. You can filter on the table, time, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"GraphExample",src:r(2156).Z,width:"1588",height:"862"})))}m.isMDXComponent=!0},2156:function(e,t,r){t.Z=r.p+"assets/images/tests-692afa30c97d5c95c361c7a5a64fba17.png"}}]);