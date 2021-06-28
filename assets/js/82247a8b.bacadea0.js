(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2026],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=r,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2228:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=t(2122),r=t(9756),o=(t(7294),t(3905)),a={id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},l={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"Configuring BuildBuddy",description:"BuildBuddy on-prem is configured using a yaml formatted configuration file.",source:"@site/../docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config.md",version:"current",sidebar_label:"Overview",frontMatter:{id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"\x3c!--",permalink:"/docs/prometheus-metrics"},next:{title:"Sample Configuration Files",permalink:"/docs/config-samples"}},u=[{value:"Command line flag",id:"command-line-flag",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Option types",id:"option-types",children:[]},{value:"Sample configuration files",id:"sample-configuration-files",children:[]},{value:"Configuration options",id:"configuration-options",children:[]},{value:"Flags",id:"flags",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/on-prem"},"BuildBuddy on-prem")," is configured using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"yaml")," formatted configuration file."),(0,o.kt)("h2",{id:"command-line-flag"},"Command line flag"),(0,o.kt)("p",null,"On startup, BuildBuddy reads this config file which is specified using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config_file")," flag. The config file is periodically re-read, although some options like enabling or disabling a cache require a restart to take effect."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"If you're running BuildBuddy in a Docker image - you can use Docker's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag")," to map a custom local config file to ",(0,o.kt)("inlineCode",{parentName:"p"},"/config.yaml")," in the Docker image."),(0,o.kt)("p",null,"Be sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH_TO_YOUR_LOCAL_CONFIG ")," with the path to your custom config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 -v /PATH_TO_YOUR_LOCAL_CONFIG/config.yaml:/config.yaml gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),(0,o.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,o.kt)("h2",{id:"option-types"},"Option types"),(0,o.kt)("p",null,"There are two types of config options: ",(0,o.kt)("em",{parentName:"p"},"Required"),", and ",(0,o.kt)("em",{parentName:"p"},"Optional"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Required")," - BuildBuddy will not run without these."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optional")," - They configure optional functionality. BuildBuddy will happily run without them.")),(0,o.kt)("h2",{id:"sample-configuration-files"},"Sample configuration files"),(0,o.kt)("p",null,"We maintain a list of ",(0,o.kt)("a",{parentName:"p",href:"/docs/config-samples"},"sample configuration files")," that you can copy and paste to get up and running quickly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-samples#running-locally-disk-only"},"Running locally (disk only)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-samples#running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"))),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("p",null,"Here's a full list of BuildBuddy's configuration sections:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-app"},"App")," - basic app-level configuration options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-storage"},"Storage")," - options that determine where BuildBuddy stores build results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-database"},"Database")," - options that determine where BuildBuddy stores build metadata.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-cache"},"Cache")," - configuration options for BuildBuddy's built-in Remote Build Cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-integrations"},"Integrations")," - configure integrations with other services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-ssl"},"SSL")," - configure SSL/TLS certificates and setup."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-github"},"Github")," - configure your Github integration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-misc"},"Misc")," - miscellaneous configuration options.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enterprise only")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-auth"},"Auth")," - configure authentication providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-api"},"API")," - configure BuildBuddy API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-org"},"Org")," - configure BuildBuddy Organization.")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("p",null,"In addition to the config file, some BuildBuddy options (like port number) can only be configured via command line flags."),(0,o.kt)("p",null,"More information on these flags, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/config-flags"},"flags documentation"),"."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"Environment variables in the config file are expanded at runtime.\nYou only need to reference your environment variables like this ",(0,o.kt)("inlineCode",{parentName:"p"},"${ENV_VARIABLE}"),"."))}p.isMDXComponent=!0}}]);