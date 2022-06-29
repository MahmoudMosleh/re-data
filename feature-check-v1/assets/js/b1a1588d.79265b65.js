"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Welcome to a toy shop!",p={unversionedId:"getting_started/example_project/toy_shop_data",id:"getting_started/example_project/toy_shop_data",isDocsHomePage:!1,title:"Welcome to a toy shop!",description:"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42",source:"@site/docs/getting_started/example_project/toy_shop_data.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/toy_shop_data",permalink:"/re-data/feature-check-v1/docs/getting_started/example_project/toy_shop_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/toy_shop_data.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation for starters",permalink:"/re-data/feature-check-v1/docs/getting_started/installation/new_to_dbt"},next:{title:"Loading data",permalink:"/re-data/feature-check-v1/docs/getting_started/example_project/loading_data"}},c=[{value:"Toy shop data",id:"toy-shop-data",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-a-toy-shop"},"Welcome to a toy shop!"),(0,a.kt)("p",null,"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42"),(0,a.kt)("p",null,"It's an example of how a re_data project can work and help you improve data in your data warehouse"),(0,a.kt)("h2",{id:"toy-shop-data"},"Toy shop data"),(0,a.kt)("p",null,"Toy shop DB has currently 4 tables we will be using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"customers"),(0,a.kt)("li",{parentName:"ul"},"orders"),(0,a.kt)("li",{parentName:"ul"},"order_items"),(0,a.kt)("li",{parentName:"ul"},"companies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=toy_shop_schema",title:"toy_shop_schema"},'                        Table "toy_shop.customers"\n   Column   |            Type             | Collation | Nullable | Default\n------------+-----------------------------+-----------+----------+---------\n id         | integer                     |           |          |\n first_name | text                        |           |          |\n last_name  | text                        |           |          |\n age        | integer                     |           |          |\n joined_at  | timestamp without time zone |           |          |\n\n                           Table "toy_shop.orders"\n   Column    |            Type             | Collation | Nullable | Default\n-------------+-----------------------------+-----------+----------+---------\n id          | integer                     |           |          |\n customer_id | integer                     |           |          |\n amount      | integer                     |           |          |\n status      | text                        |           |          |\n created_at  | timestamp without time zone |           |          |\n\n                      Table "toy_shop.order_items"\n  Column  |            Type             | Collation | Nullable | Default\n----------+-----------------------------+-----------+----------+---------\n item_id  | integer                     |           |          |\n order_id | integer                     |           |          |\n name     | text                        |           |          |\n amount   | integer                     |           |          |\n added_at | timestamp without time zone |           |          |\n\n                        Table "toy_shop.companies"\n   Column   |            Type             | Collation | Nullable | Default\n------------+-----------------------------+-----------+----------+---------\n id         | integer                     |           |          |\n name       | text                        |           |          |\n address    | text                        |           |          |\n created_at | timestamp without time zone |           |          |\n\n\n')),(0,a.kt)("p",null,"Toy shop started operating on 1 January 2021.\nToy shop data is stored in Postgres but re_data also works with BigQuery, Snowflake & Redshift"))}d.isMDXComponent=!0}}]);