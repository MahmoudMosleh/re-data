"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[916],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(m,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4356:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:3,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},m="Your custom metrics",l={unversionedId:"reference/metrics/your_own_metric",id:"reference/metrics/your_own_metric",title:"Your custom metrics",description:"Defining your own metric is very easy.",source:"@site/docs/reference/metrics/your_own_metric.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/your_own_metric",permalink:"/276-feature-create-a-settings-screen/docs/reference/metrics/your_own_metric",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/metrics/your_own_metric.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Extra Metrics",permalink:"/276-feature-create-a-settings-screen/docs/reference/metrics/extra_metrics"},next:{title:"Anomalies",permalink:"/276-feature-create-a-settings-screen/docs/reference/anomaly_detection"}},s={},u=[{value:"Your metric ideas",id:"your-metric-ideas",level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-custom-metrics"},"Your custom metrics"),(0,o.kt)("p",null,"Defining your own metric is very easy.\nYou can create both table-level or column-level metrics."),(0,o.kt)("p",null,"Metrics can be defined in any place in your dbt project, as macros with names following the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_metric_(your_name)")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Both column and table level metrics take a dictionary called ",(0,o.kt)("inlineCode",{parentName:"li"},"context"),". Any extra configuration passed to a ",(0,o.kt)("inlineCode",{parentName:"li"},"re_data_metrics")," config would be merged with the context dicionary and avaiable under ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," key. Check out example usage config dict in ",(0,o.kt)("a",{parentName:"li",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_match_regex"},"match_regex")," metric.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Below is the structure of a context dictionary by default\n{\n    "column_name": # contains the name of the column to compute the metric on. null in table metrics\n    "table_name": # contains the full table name for reference in metric query definition\n    "metric_name": # name of the metric being computed\n    "time_filter": # time column used to filter the time window\n    "config": # none or dictionary containing arguments passed to custom metrics\n}\n')),(0,o.kt)("p",null,"Here are examples of custom metrics (one table, one column level)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="macros/my_metrics.sql"',title:'"macros/my_metrics.sql"'},"{% macro re_data_metric_buy_count(context) %}\n    coalesce(\n        sum(\n            case when event_type = 'buy'\n                then 1\n            else 0\n            end\n        ), 0\n    )\n{% endmacro %}\n\n{% macro re_data_metric_distinct_count(context) %}\n    count(distinct( {{context.column_name}} ))\n{% endmacro %}\n\n{# a more sophisticated example of custom metric with subquery #}\n{% macro re_data_metric_duplicate_values(context) %}\n        with temp_table as (\n            select {{ context.column_name }} from {{ context.table_name }}\n            where {{ in_time_window(context.time_filter) }}\n            group by {{ context.column_name }}\n            having count(1) > 1\n        )\n        select coalesce(count(*), 0) from temp_table\n{% endmacro %}\n")),(0,o.kt)("p",null,"Some important difference between table and column level metrics are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Table level metrics reference column names directly."),(0,o.kt)("li",{parentName:"ul"},"Column level metrics reference it through ",(0,o.kt)("inlineCode",{parentName:"li"},"context.column_name")," variable. (Which makes them more re-usable)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tip:")," When using sub queries in custom metrics, remember to filter the records to the time frame in context. We can use ",(0,o.kt)("a",{parentName:"li",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.in_time_window"},(0,o.kt)("inlineCode",{parentName:"a"},"in_time_window({{context.time_fiter}})"))," macro to achieve this. The macro ",(0,o.kt)("a",{parentName:"li",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_table_rows"},"distinct_table_rows")," is a good example.")),(0,o.kt)("h2",{id:"your-metric-ideas"},"Your metric ideas"),(0,o.kt)("p",null,"If you have other suggestions of metrics you would like supported, please let us know on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0}}]);