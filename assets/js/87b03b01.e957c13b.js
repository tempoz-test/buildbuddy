(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9691],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8150:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},l={unversionedId:"config-rbe",id:"config-rbe",isDocsHomePage:!1,title:"RBE Configuration",description:"Remote Build Execution is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-rbe.md",sourceDirName:".",slug:"/config-rbe",permalink:"/docs/config-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-rbe.md",version:"current",sidebar_label:"RBE",frontMatter:{id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},sidebar:"someSidebar",previous:{title:"Organization Configuration",permalink:"/docs/config-org"},next:{title:"Miscellaneous Configuration",permalink:"/docs/config-misc"}},u=[{value:"Section",id:"section",children:[]},{value:"Options",id:"options",children:[]},{value:"Example section",id:"example-section",children:[]},{value:"Executor config",id:"executor-config",children:[]},{value:"Executor environment variables.",id:"executor-environment-variables",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Remote Build Execution is only configurable in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,i.kt)("p",null,"RBE configuration must be enabled in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, but most configuration is done via ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"toolchains"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-platforms"},"platforms"),", or the ",(0,i.kt)("a",{parentName:"p",href:"enterprise-helm"},"enterprise Helm chart"),"."),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remote_execution:")," The remote_execution section allows you to configure BuildBuddy's remote build execution. ",(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable_remote_exec:")," True if remote execution should be enabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_pool_name:")," The default executor pool to use if one is not specified.")),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"remote_execution:\n  enable_remote_exec: true\n")),(0,i.kt)("h2",{id:"executor-config"},"Executor config"),(0,i.kt)("p",null,"BuildBuddy RBE executors take their own configuration file that is pulled from ",(0,i.kt)("inlineCode",{parentName:"p"},"/config.yaml")," on the executor docker image. Using BuildBuddy's ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-helm"},"Enterprise Helm chart")," will take care of most of this configuration for you."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'executor:\n  app_target: "grpcs://your.buildbuddy.install:443"\n  root_directory: "/buildbuddy/remotebuilds/"\n  local_cache_directory: "/buildbuddy/filecache/"\n  local_cache_size_bytes: 5000000000 # 5GB\n  docker_socket: /var/run/docker.sock\n')),(0,i.kt)("h2",{id:"executor-environment-variables"},"Executor environment variables."),(0,i.kt)("p",null,"In addition to the config.yaml, there are also environment variables that executors consume. To get more information about their environment. All of these are optional, but can be useful for more complex configurations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYS_MEMORY_BYTES"),": The amount of memory (in bytes) that this executor is allowed to consume. Defaults to free system memory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYS_MILLICPU"),": The amount of CPU (in millicpus) that this executor is allowed to consume. Defaults to system CPU."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_NODENAME"),": The name of the machine/node that the executor is running on. Defaults to empty string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_HOSTNAME"),": The hostname by which the app can communicate to this executor. Defaults to machine hostname."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_PORT"),": The port over which the app can communicate with this executor. Defaults to the executor's gRPC port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_POOL"),": The executor pool that this executor should be placed in. Defaults to empty string.")),(0,i.kt)("p",null,"Many of these environment variables are typically set based on Kubernetes FieldRefs like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  env:\n    - name: SYS_MEMORY_BYTES\n      valueFrom:\n        resourceFieldRef:\n          resource: limits.memory\n    - name: SYS_MILLICPU\n      valueFrom:\n        resourceFieldRef:\n          resource: limits.cpu\n    - name: MY_HOSTNAME\n      valueFrom:\n        fieldRef:\n          fieldPath: status.podIP\n    - name: MY_NODENAME\n      valueFrom:\n        fieldRef:\n          fieldPath: spec.nodeName\n")))}s.isMDXComponent=!0}}]);