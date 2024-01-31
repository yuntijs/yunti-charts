!(function(){"use strict";var hn=Object.defineProperty,yn=Object.defineProperties;var xn=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var kr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var _r=(k,g,o)=>g in k?hn(k,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):k[g]=o,K=(k,g)=>{for(var o in g||(g={}))kr.call(g,o)&&_r(k,o,g[o]);if(Ne)for(var o of Ne(g))Pr.call(g,o)&&_r(k,o,g[o]);return k},or=(k,g)=>yn(k,xn(g));var ar=(k,g)=>{var o={};for(var a in k)kr.call(k,a)&&g.indexOf(a)<0&&(o[a]=k[a]);if(k!=null&&Ne)for(var a of Ne(k))g.indexOf(a)<0&&Pr.call(k,a)&&(o[a]=k[a]);return o};(self.webpackChunk_yuntijs_charts=self.webpackChunk_yuntijs_charts||[]).push([[1351],{88700:function(k,g,o){o.d(g,{E_:function(){return B},nc:function(){return H}});var a=o(50959);function P(x){var l=[];if(x.length===0)return"";if(typeof x[0]!="string")throw new TypeError("Url must be a string. Received "+x[0]);if(x[0].match(/^[^/:]+:\/*$/)&&x.length>1){var S=x.shift();x[0]=S+x[0]}x[0].match(/^file:\/\/\//)?x[0]=x[0].replace(/^([^/:]+):\/*/,"$1:///"):x[0]=x[0].replace(/^([^/:]+):\/*/,"$1://");for(var f=0;f<x.length;f++){var b=x[f];if(typeof b!="string")throw new TypeError("Url must be a string. Received "+b);b!==""&&(f>0&&(b=b.replace(/^[\/]+/,"")),f<x.length-1?b=b.replace(/[\/]+$/,""):b=b.replace(/[\/]+$/,"/"),l.push(b))}var u=l.join("/");u=u.replace(/\/(\?|&|#[^!])/g,"$1");var y=u.split("?");return u=y.shift()+(y.length>0?"?":"")+y.join("&"),u}function s(){var x;return typeof arguments[0]=="object"?x=arguments[0]:x=[].slice.call(arguments),P(x)}var Z="https://unpkg.com",U="https://registry.npmmirror.com",Y=function(l){var S=l.pkg,f=l.version,b=f===void 0?"latest":f,u=l.path,y=l.proxy;switch(y){case"unpkg":return s(Z,"".concat(S,"@").concat(b),u);default:return s(U,S,b,"files",u)}},Q=o(11527),B=(0,a.createContext)(null),ee=null,z=function(l){var S=l.pkg,f=l.version,b=l.path;return Y({path:b,pkg:S,proxy:"aliyun",version:f})},H=function(){var l=(0,a.useContext)(B);return l?(l==null?void 0:l.proxy)!=="custom"?function(S){var f=S.pkg,b=S.version,u=S.path;return Y({path:u,pkg:f,proxy:l.proxy,version:b})}:(l==null?void 0:l.customCdnFn)||z:z},G=null},35405:function(k,g,o){o.d(g,{Z:function(){return dn}});var a=o(20237),P=o(57596),s=o(50959),Z=o(82187),U=o.n(Z),Y=o(96446),Q=o(89968),B=o(1572),ee=o(40237),z=o(59350),H=o(20666);const G=r=>{const{componentCls:t,colorText:n,fontSize:e,lineHeight:c,fontFamily:p}=r;return{[t]:{color:n,fontSize:e,lineHeight:c,fontFamily:p}}},x=()=>({});var l=(0,H.I$)("App",G,x);const S=()=>s.useContext(z.Z),f=r=>{const{prefixCls:t,children:n,className:e,rootClassName:c,message:p,notification:D,style:J,component:L="div"}=r,{getPrefixCls:q}=(0,s.useContext)(Y.E_),oe=q("app",t),[te,ge,me]=l(oe),de=U()(ge,oe,e,c,me),V=(0,s.useContext)(z.J),fe=s.useMemo(()=>({message:Object.assign(Object.assign({},V.message),p),notification:Object.assign(Object.assign({},V.notification),D)}),[p,D,V.message,V.notification]),[Cr,fn]=(0,Q.Z)(fe.message),[wr,bn]=(0,ee.Z)(fe.notification),[Tr,pn]=(0,B.Z)(),gn=s.useMemo(()=>({message:Cr,notification:wr,modal:Tr}),[Cr,wr,Tr]),mn=L===!1?s.Fragment:L,vn={className:de,style:J};return te(s.createElement(z.Z.Provider,{value:gn},s.createElement(z.J.Provider,{value:fe},s.createElement(mn,Object.assign({},L===!1?void 0:vn),pn,fn,bn,n))))};f.useApp=S;var b=f,u=o(50333),y=o(88700),m=function(t){var n=document.createElement("link");return n.rel="stylesheet",n.href=t,n},v=(0,s.memo)(function(r){var t=r.url,n=(0,s.useRef)(!1);return(0,s.useEffect)(function(){if(!n.current){n.current=!0;var e=m(t);document.head.append(e)}},[]),null}),d=v,i=o(16488),T,O,E,R,_,F,N,M,W,A=function(t){var n=t.css,e=t.token,c=t.isDarkMode,p=(0,u.F4)(T||(T=(0,i.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),D=c?e.cyan9A:e.cyan11A,J=c?e.cyan2A:e.cyan6A;return{blur:n(O||(O=(0,i.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(E||(E=(0,i.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(R||(R=(0,i.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:n(_||(_=(0,i.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,p),markdown:n(F||(F=(0,i.Z)([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block: 0 0;
        font-size: 14px;
        line-height: 2;
        color: `,`;

        + * {
          margin-block-end: 1em;
        }

        &:not(:last-child) {
          margin-bottom: 1.5em;
        }
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          background: unset !important;
          border: none !important;
          border-radius: unset !important;
        }
      }

      *:not([data-code-type='highlighter'], pre) code {
        padding: 2px 6px;

        font-size: `,`px;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block: 1em 1em;
        margin-inline: 0 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block: 10px 10px;
        padding-inline: 16px 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ul > li {
        list-style-type: disc;
      }

      > ol,
      > ul {
        > li {
          margin-left: 24px;
          line-height: 1.8;

          &::marker {
            color: `,` !important;
          }
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),e.colorText,e.colorText,e.colorTextDescription,e.colorLink,e.colorLinkHover,e.colorLinkActive,e.borderRadius,e.fontSizeSM,D,J,c?e.cyan1A:e.cyan6A,e.borderRadiusSM,e.colorBorderSecondary,e.borderRadius,e.colorFillTertiary,e.borderRadius,e.borderRadius,e.borderRadius,e.borderRadius,c?e.cyan9A:e.cyan10A,e.colorTextDescription,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadiusLG,e.motionEaseOut,e.colorBorder),markdownInChat:n(N||(N=(0,i.Z)([`
      h1 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.6em;
      }

      h2 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.4em;
      }

      h3 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.2em;
      }

      h4 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.1em;
      }

      h5 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1em;
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      p {
        line-height: 1.8 !important;
        white-space: pre-wrap !important;

        + * {
          margin-block-end: 0.5em !important;
        }

        &:not(:last-child) {
          margin-bottom: 1em !important;
        }
      }
    `]))),noScrollbar:n(M||(M=(0,i.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(W||(W=(0,i.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},C=o(18534),j=o(30994);function h(r,t,n){var e=-1,c=r.length;t<0&&(t=-t>c?0:c+t),n=n>c?c:n,n<0&&(n+=c),c=t>n?0:n-t>>>0,t>>>=0;for(var p=Array(c);++e<c;)p[e]=r[e+t];return p}var w=h;function $(r,t,n){var e=r.length;return n=n===void 0?e:n,!t&&n>=e?r:w(r,t,n)}var ae=$,Be="\\ud800-\\udfff",Oe="\\u0300-\\u036f",We="\\ufe20-\\ufe2f",je="\\u20d0-\\u20ff",Ce=Oe+We+je,Je="\\ufe0e\\ufe0f",Ge="\\u200d",Ke=RegExp("["+Ge+Be+Ce+Je+"]");function we(r){return Ke.test(r)}var ve=we;function ie(r){return r.split("")}var $e=ie,he="\\ud800-\\udfff",Ve="\\u0300-\\u036f",Te="\\ufe20-\\ufe2f",_e="\\u20d0-\\u20ff",ke=Ve+Te+_e,Pe="\\ufe0e\\ufe0f",Ye="["+he+"]",ye="["+ke+"]",xe="\\ud83c[\\udffb-\\udfff]",Xe="(?:"+ye+"|"+xe+")",Ae="[^"+he+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Qe="\\u200d",Ie=Xe+"?",De="["+Pe+"]?",qe="(?:"+Qe+"(?:"+[Ae,Ee,Re].join("|")+")"+De+Ie+")*",er=De+Ie+qe,rr="(?:"+[Ae+ye+"?",ye,Ee,Re,Ye].join("|")+")",nr=RegExp(xe+"(?="+xe+")|"+rr+er,"g");function I(r){return r.match(nr)||[]}var re=I;function ce(r){return ve(r)?re(r):$e(r)}var tr=ce;function be(r){return function(t){t=(0,j.Z)(t);var n=ve(t)?tr(t):void 0,e=n?n[0]:t.charAt(0),c=n?ae(n,1).join(""):t.slice(1);return e[r]()+c}}var Ze=be,Ar=Ze("toUpperCase"),Er=Ar;function Rr(r){return Er((0,j.Z)(r).toLowerCase())}var ir=Rr,Ir=o(51741),Dr=(0,Ir.Z)(function(r,t,n){return t=t.toLowerCase(),r+(n?ir(t):t)}),Zr=Dr,X=o(51991);function cr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function Me(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):cr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function sr(r,t){var n=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=Mr(r))||t&&r&&typeof r.length=="number"){n&&(r=n);var e=0,c=function(){};return{s:c,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(q){throw q},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p=!0,D=!1,J;return{s:function(){n=n.call(r)},n:function(){var q=n.next();return p=q.done,q},e:function(q){D=!0,J=q},f:function(){try{!p&&n.return!=null&&n.return()}finally{if(D)throw J}}}}function Mr(r,t){if(r){if(typeof r=="string")return lr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(r,t)}}function lr(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var Lr=function(t){var n,e=t.name,c=t.scale,p=t.appearance;return n={},(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)(n,"".concat(e,"Bg"),c["".concat(p,"A")][1]),"".concat(e,"BgHover"),c["".concat(p,"A")][2]),"".concat(e,"Border"),c[p][4]),"".concat(e,"BorderSecondary"),c[p][3]),"".concat(e,"BorderHover"),c[p][5]),"".concat(e,"Hover"),c[p][10]),"".concat(e),c[p][9]),"".concat(e,"Active"),c[p][7]),"".concat(e,"TextHover"),c["".concat(p,"A")][10]),"".concat(e,"Text"),c["".concat(p,"A")][9]),(0,a.Z)(n,"".concat(e,"TextActive"),c["".concat(p,"A")][7])},Ur=function(t){var n=t.name,e=t.scale,c=t.appearance,p={},D=sr(e[c].entries()),J;try{for(D.s();!(J=D.n()).done;){var L=(0,C.Z)(J.value,2),q=L[0],oe=L[1];q===0||q===12||(p["".concat(n).concat(q)]=oe)}}catch(fe){D.e(fe)}finally{D.f()}var te=sr(e["".concat(c,"A")].entries()),ge;try{for(te.s();!(ge=te.n()).done;){var me=(0,C.Z)(ge.value,2),de=me[0],V=me[1];de===0||de===12||(p["".concat(n).concat(de,"A")]=V)}}catch(fe){te.e(fe)}finally{te.f()}return Me(Me({},p),Lr({appearance:c,name:n,scale:e}))},zr=function(t){for(var n=t.isDarkMode,e={},c=0,p=Object.entries(X._);c<p.length;c++){var D=(0,C.Z)(p[c],2),J=D[0],L=D[1];e=Me(Me({},e),Ur({appearance:n?"dark":"light",name:Zr(J),scale:L}))}return e},ne=function(t){var n=t.type,e=t.scale,c=t.appearance,p=ir(n),D=c==="dark";return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"color".concat(p,"Bg"),e[c][1]),"color".concat(p,"BgHover"),e[c][2]),"color".concat(p,"Border"),e[c][4]),"color".concat(p,"BorderHover"),e[c][D?5:3]),"color".concat(p,"Hover"),e[c][D?10:8]),"color".concat(p),e[c][9]),"color".concat(p,"Active"),e[c][D?7:10]),"color".concat(p,"TextHover"),e[c][D?10:8]),"color".concat(p,"Text"),e[c][9]),"color".concat(p,"TextActive"),e[c][D?7:10])},Le=function(t){var n=t.scale,e=t.appearance;return{colorBgContainer:e==="dark"?n[e][1]:n[e][0],colorBgElevated:e==="dark"?n[e][2]:n[e][0],colorBgLayout:e==="dark"?n[e][0]:n[e][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[e][5],colorBorder:n[e][4],colorBorderSecondary:n[e][3],colorFill:n["".concat(e,"A")][3],colorFillQuaternary:n["".concat(e,"A")][0],colorFillSecondary:n["".concat(e,"A")][2],colorFillTertiary:n["".concat(e,"A")][1],colorText:n[e][12],colorTextQuaternary:n[e][6],colorTextSecondary:n[e][10],colorTextTertiary:n[e][8]}},ur={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function dr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function se(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Fr=ne({appearance:"dark",scale:X._.bnw,type:"Primary"}),fr=Le({appearance:"dark",scale:X._.gray}),Hr=ne({appearance:"dark",scale:X._.lime,type:"Success"}),Nr=ne({appearance:"dark",scale:X._.gold,type:"Warning"}),Br=ne({appearance:"dark",scale:X._.red,type:"Error"}),Ue=ne({appearance:"dark",scale:X._.blue,type:"Info"}),Wr=se(se(se(se(se(se(se({},Fr),fr),Hr),Nr),Br),Ue),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ue.colorInfoText,colorLinkActive:Ue.colorInfoTextActive,colorLinkHover:Ue.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Jr=Wr;function br(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function ze(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?br(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Gr=function(t,n){var e=t.primaryColor,c=t.neutralColor,p={},D={},J=X._[e];J&&(p=ne({appearance:"dark",scale:J,type:"Primary"}));var L=ur[c];return L&&(D=Le({appearance:"dark",scale:L})),ze(ze(ze(ze({},n),Jr),p),D)};function pr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function le(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):pr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Kr=ne({appearance:"light",scale:X._.bnw,type:"Primary"}),gr=Le({appearance:"light",scale:X._.gray}),$r=ne({appearance:"light",scale:X._.green,type:"Success"}),Vr=ne({appearance:"light",scale:X._.orange,type:"Warning"}),Yr=ne({appearance:"light",scale:X._.volcano,type:"Error"}),Fe=ne({appearance:"light",scale:X._.geekblue,type:"Info"}),Xr=le(le(le(le(le(le(le({},Kr),gr),$r),Vr),Yr),Fe),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Fe.colorInfoText,colorLinkActive:Fe.colorInfoTextActive,colorLinkHover:Fe.colorInfoTextHover,colorTextLightSolid:gr.colorBgLayout}),Qr=Xr;function mr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function He(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):mr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var qr=function(t,n){var e=t.primaryColor,c=t.neutralColor,p={},D={},J=X._[e];J&&(p=ne({appearance:"light",scale:J,type:"Primary"}));var L=ur[c];return L&&(D=Le({appearance:"light",scale:L})),He(He(He(He({},n),Qr),p),D)},vr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',en='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',hr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',rn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",nn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[en,hr,vr].join(","),fontFamilyCode:[rn,hr,vr].join(",")};function yr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function xr(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var tn=function(t){var n=t.neutralColor,e=t.appearance,c=t.primaryColor,p=e==="dark";return{algorithm:p?Gr:qr,token:xr(xr({},nn),{},{neutralColor:n,primaryColor:c})}},Se=o(36007),Sr,on=function(r){return(0,u.iv)(Sr||(Sr=(0,i.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),r.prefixCls,(0,Se.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,Se.m4)(r.colorBgMask,.1),r.prefixCls,r.colorBorderSecondary,r.boxShadowSecondary,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary,r.prefixCls)},Or,an=function(r){return(0,u.iv)(Or||(Or=(0,i.Z)([`
  html,
  body {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    overflow-x: hidden;
    overflow-y: auto;

    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    vertical-align: baseline;

    color-scheme: dark;
    background-color: `,`;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    height: 100dvh;
  }

  #root {
    min-height: 100dvh;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  p {
    word-wrap: break-word;
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @media only screen and (min-width: 574px) {
    * {
      ::-webkit-scrollbar {
        cursor: pointer;
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: transparent;
        border-radius: 2px;
        transition: background-color 500ms `,`;

        &:hover {
          background-color: `,`;
        }
      }

      ::-webkit-scrollbar-corner {
        display: none;
        width: 0;
        height: 0;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background-color: `,`;
        }
      }
    }
  }
`])),r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.motionEaseOut,r.colorText,r.colorFill)},cn=(0,u.vJ)(function(r){var t=r.theme;return[an(t),on(t)]}),sn=cn,ue=o(11527),ln=["children","customStylish","customToken","enableWebfonts","webfonts","customTheme"];function jr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function pe(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):jr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var un=(0,s.memo)(function(r){var t=r.children,n=r.customStylish,e=r.customToken,c=r.enableWebfonts,p=c===void 0?!0:c,D=r.webfonts,J=r.customTheme,L=J===void 0?{}:J,q=(0,P.Z)(r,ln),oe=(0,y.nc)(),te=D||[oe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),oe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ge=(0,s.useCallback)(function(V){return pe(pe({},A(V)),n==null?void 0:n(V))},[n]),me=(0,s.useCallback)(function(V){return pe(pe({},zr(V)),e==null?void 0:e(V))},[e]),de=(0,s.useCallback)(function(V){return tn({appearance:V,neutralColor:L.neutralColor,primaryColor:L.primaryColor})},[L.primaryColor,L.neutralColor]);return(0,ue.jsxs)(ue.Fragment,{children:[p&&(te==null?void 0:te.length)>0&&te.map(function(V){return(0,ue.jsx)(d,{url:V},V)}),(0,ue.jsx)(u.V9,{speedy:!0,children:(0,ue.jsxs)(u.f6,pe(pe({customStylish:ge,customToken:me},q),{},{theme:de,children:[(0,ue.jsx)(sn,{}),(0,ue.jsx)(b,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),dn=un},79122:function(k,g,o){var a=o(53530),P=o(50959),s=o(11527),Z=(0,P.memo)(function(){return(0,s.jsxs)(a.ql,{children:[(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,s.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,s.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,s.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,s.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,s.jsx)("meta",{content:"#000000",name:"theme-color"})]})});g.Z=Z},48098:function(k,g,o){o.d(g,{f:function(){return s}});var a=o(98012),P=o(84105),s=(0,a.Ue)()((0,P.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(k){k.exports=function g(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var P,s,Z;if(Array.isArray(o)){if(P=o.length,P!=a.length)return!1;for(s=P;s--!==0;)if(!g(o[s],a[s]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(Z=Object.keys(o),P=Z.length,P!==Object.keys(a).length)return!1;for(s=P;s--!==0;)if(!Object.prototype.hasOwnProperty.call(a,Z[s]))return!1;for(s=P;s--!==0;){var U=Z[s];if(!g(o[U],a[U]))return!1}return!0}return o!==o&&a!==a}},2179:function(k,g,o){var a=o(50959),P=o(4322);function s(z,H){return z===H&&(z!==0||1/z===1/H)||z!==z&&H!==H}var Z=typeof Object.is=="function"?Object.is:s,U=P.useSyncExternalStore,Y=a.useRef,Q=a.useEffect,B=a.useMemo,ee=a.useDebugValue;g.useSyncExternalStoreWithSelector=function(z,H,G,x,l){var S=Y(null);if(S.current===null){var f={hasValue:!1,value:null};S.current=f}else f=S.current;S=B(function(){function u(i){if(!y){if(y=!0,m=i,i=x(i),l!==void 0&&f.hasValue){var T=f.value;if(l(T,i))return v=T}return v=i}if(T=v,Z(m,i))return T;var O=x(i);return l!==void 0&&l(T,O)?T:(m=i,v=O)}var y=!1,m,v,d=G===void 0?null:G;return[function(){return u(H())},d===null?void 0:function(){return u(d())}]},[H,G,x,l]);var b=U(z,S[0],S[1]);return Q(function(){f.hasValue=!0,f.value=b},[b]),ee(b),b}},7231:function(k,g,o){k.exports=o(2179)},66711:function(k,g,o){var a=o(99615),P=a.Z.Symbol;g.Z=P},28019:function(k,g){function o(a,P){for(var s=-1,Z=a==null?0:a.length,U=Array(Z);++s<Z;)U[s]=P(a[s],s,a);return U}g.Z=o},33918:function(k,g,o){o.d(g,{Z:function(){return f}});var a=o(66711),P=Object.prototype,s=P.hasOwnProperty,Z=P.toString,U=a.Z?a.Z.toStringTag:void 0;function Y(b){var u=s.call(b,U),y=b[U];try{b[U]=void 0;var m=!0}catch(d){}var v=Z.call(b);return m&&(u?b[U]=y:delete b[U]),v}var Q=Y,B=Object.prototype,ee=B.toString;function z(b){return ee.call(b)}var H=z,G="[object Null]",x="[object Undefined]",l=a.Z?a.Z.toStringTag:void 0;function S(b){return b==null?b===void 0?x:G:l&&l in Object(b)?Q(b):H(b)}var f=S},51741:function(k,g,o){o.d(g,{Z:function(){return nr}});function a(I,re,ce,tr){var be=-1,Ze=I==null?0:I.length;for(tr&&Ze&&(ce=I[++be]);++be<Ze;)ce=re(ce,I[be],be,I);return ce}var P=a;function s(I){return function(re){return I==null?void 0:I[re]}}var Z=s,U={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Y=Z(U),Q=Y,B=o(30994),ee=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,z="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",G="\\u20d0-\\u20ff",x=z+H+G,l="["+x+"]",S=RegExp(l,"g");function f(I){return I=(0,B.Z)(I),I&&I.replace(ee,Q).replace(S,"")}var b=f,u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function y(I){return I.match(u)||[]}var m=y,v=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function d(I){return v.test(I)}var i=d,T="\\ud800-\\udfff",O="\\u0300-\\u036f",E="\\ufe20-\\ufe2f",R="\\u20d0-\\u20ff",_=O+E+R,F="\\u2700-\\u27bf",N="a-z\\xdf-\\xf6\\xf8-\\xff",M="\\xac\\xb1\\xd7\\xf7",W="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",A="\\u2000-\\u206f",C=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",j="A-Z\\xc0-\\xd6\\xd8-\\xde",h="\\ufe0e\\ufe0f",w=M+W+A+C,$="['\u2019]",ae="["+w+"]",Be="["+_+"]",Oe="\\d+",We="["+F+"]",je="["+N+"]",Ce="[^"+T+w+Oe+F+N+j+"]",Je="\\ud83c[\\udffb-\\udfff]",Ge="(?:"+Be+"|"+Je+")",Ke="[^"+T+"]",we="(?:\\ud83c[\\udde6-\\uddff]){2}",ve="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="["+j+"]",$e="\\u200d",he="(?:"+je+"|"+Ce+")",Ve="(?:"+ie+"|"+Ce+")",Te="(?:"+$+"(?:d|ll|m|re|s|t|ve))?",_e="(?:"+$+"(?:D|LL|M|RE|S|T|VE))?",ke=Ge+"?",Pe="["+h+"]?",Ye="(?:"+$e+"(?:"+[Ke,we,ve].join("|")+")"+Pe+ke+")*",ye="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xe=Pe+ke+Ye,Ae="(?:"+[We,we,ve].join("|")+")"+Xe,Ee=RegExp([ie+"?"+je+"+"+Te+"(?="+[ae,ie,"$"].join("|")+")",Ve+"+"+_e+"(?="+[ae,ie+he,"$"].join("|")+")",ie+"?"+he+"+"+Te,ie+"+"+_e,xe,ye,Oe,Ae].join("|"),"g");function Re(I){return I.match(Ee)||[]}var Qe=Re;function Ie(I,re,ce){return I=(0,B.Z)(I),re=ce?void 0:re,re===void 0?i(I)?Qe(I):m(I):I.match(re)||[]}var De=Ie,qe="['\u2019]",er=RegExp(qe,"g");function rr(I){return function(re){return P(De(b(re).replace(er,"")),I,"")}}var nr=rr},97889:function(k,g){var o=typeof global=="object"&&global&&global.Object===Object&&global;g.Z=o},99615:function(k,g,o){var a=o(97889),P=typeof self=="object"&&self&&self.Object===Object&&self,s=a.Z||P||Function("return this")();g.Z=s},56052:function(k,g){var o=Array.isArray;g.Z=o},13795:function(k,g){function o(a){return a!=null&&typeof a=="object"}g.Z=o},30994:function(k,g,o){o.d(g,{Z:function(){return S}});var a=o(66711),P=o(28019),s=o(56052),Z=o(33918),U=o(13795),Y="[object Symbol]";function Q(f){return typeof f=="symbol"||(0,U.Z)(f)&&(0,Z.Z)(f)==Y}var B=Q,ee=1/0,z=a.Z?a.Z.prototype:void 0,H=z?z.toString:void 0;function G(f){if(typeof f=="string")return f;if((0,s.Z)(f))return(0,P.Z)(f,G)+"";if(B(f))return H?H.call(f):"";var b=f+"";return b=="0"&&1/f==-ee?"-0":b}var x=G;function l(f){return f==null?"":x(f)}var S=l},98012:function(k,g,o){o.d(g,{Ue:function(){return G}});const a=l=>{let S;const f=new Set,b=(T,O)=>{const E=typeof T=="function"?T(S):T;if(!Object.is(E,S)){const R=S;S=(O!=null?O:typeof E!="object"||E===null)?E:Object.assign({},S,E),f.forEach(_=>_(S,R))}},u=()=>S,d={setState:b,getState:u,getInitialState:()=>i,subscribe:T=>(f.add(T),()=>f.delete(T)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),f.clear()}},i=S=l(b,u,d);return d},P=l=>l?a(l):a;var s=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),P(l)),Z=o(50959),U=o(7231);const{useDebugValue:Y}=Z,{useSyncExternalStoreWithSelector:Q}=U;let B=!1;const ee=l=>l;function z(l,S=ee,f){f&&!B&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),B=!0);const b=Q(l.subscribe,l.getState,l.getServerState||l.getInitialState,S,f);return Y(b),b}const H=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const S=typeof l=="function"?P(l):l,f=(b,u)=>z(S,b,u);return Object.assign(f,S),f},G=l=>l?H(l):H;var x=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),G(l))},84105:function(k,g,o){o.d(g,{mW:function(){return Q},tJ:function(){return b}});const a=(u,y)=>(m,v,d)=>(d.dispatch=i=>(m(T=>u(T,i),!1,i),i),d.dispatchFromDevtools=!0,K({dispatch:(...i)=>d.dispatch(...i)},y)),P=null,s=new Map,Z=u=>{const y=s.get(u);return y?Object.fromEntries(Object.entries(y.stores).map(([m,v])=>[m,v.getState()])):{}},U=(u,y,m)=>{if(u===void 0)return{type:"untracked",connection:y.connect(m)};const v=s.get(m.name);if(v)return K({type:"tracked",store:u},v);const d={connection:y.connect(m),stores:{}};return s.set(m.name,d),K({type:"tracked",store:u},d)},Q=(u,y={})=>(m,v,d)=>{const A=y,{enabled:i,anonymousActionType:T,store:O}=A,E=ar(A,["enabled","anonymousActionType","store"]);let R;try{R=(i!=null?i:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(j){}if(!R)return i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),u(m,v,d);const C=U(O,R,E),{connection:_}=C,F=ar(C,["connection"]);let N=!0;d.setState=(j,h,w)=>{const $=m(j,h);if(!N)return $;const ae=w===void 0?{type:T||"anonymous"}:typeof w=="string"?{type:w}:w;return O===void 0?(_==null||_.send(ae,v()),$):(_==null||_.send(or(K({},ae),{type:`${O}/${ae.type}`}),or(K({},Z(E.name)),{[O]:d.getState()})),$)};const M=(...j)=>{const h=N;N=!1,m(...j),N=h},W=u(d.setState,v,d);if(F.type==="untracked"?_==null||_.init(W):(F.stores[F.store]=d,_==null||_.init(Object.fromEntries(Object.entries(F.stores).map(([j,h])=>[j,j===F.store?W:h.getState()])))),d.dispatchFromDevtools&&typeof d.dispatch=="function"){let j=!1;const h=d.dispatch;d.dispatch=(...w)=>{w[0].type==="__setState"&&!j&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),j=!0),h(...w)}}return _.subscribe(j=>{var h;switch(j.type){case"ACTION":if(typeof j.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return B(j.payload,w=>{if(w.type==="__setState"){if(O===void 0){M(w.state);return}Object.keys(w.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const $=w.state[O];if($==null)return;JSON.stringify(d.getState())!==JSON.stringify($)&&M($);return}d.dispatchFromDevtools&&typeof d.dispatch=="function"&&d.dispatch(w)});case"DISPATCH":switch(j.payload.type){case"RESET":return M(W),O===void 0?_==null?void 0:_.init(d.getState()):_==null?void 0:_.init(Z(E.name));case"COMMIT":if(O===void 0){_==null||_.init(d.getState());return}return _==null?void 0:_.init(Z(E.name));case"ROLLBACK":return B(j.state,w=>{if(O===void 0){M(w),_==null||_.init(d.getState());return}M(w[O]),_==null||_.init(Z(E.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return B(j.state,w=>{if(O===void 0){M(w);return}JSON.stringify(d.getState())!==JSON.stringify(w[O])&&M(w[O])});case"IMPORT_STATE":{const{nextLiftedState:w}=j.payload,$=(h=w.computedStates.slice(-1)[0])==null?void 0:h.state;if(!$)return;M(O===void 0?$:$[O]),_==null||_.send(null,w);return}case"PAUSE_RECORDING":return N=!N}return}}),W},B=(u,y)=>{let m;try{m=JSON.parse(u)}catch(v){console.error("[zustand devtools middleware] Could not parse the received json",v)}m!==void 0&&y(m)},ee=u=>(y,m,v)=>{const d=v.subscribe;return v.subscribe=(T,O,E)=>{let R=T;if(O){const _=(E==null?void 0:E.equalityFn)||Object.is;let F=T(v.getState());R=N=>{const M=T(N);if(!_(F,M)){const W=F;O(F=M,W)}},E!=null&&E.fireImmediately&&O(F,F)}return d(R)},u(y,m,v)},z=null,H=(u,y)=>(...m)=>Object.assign({},u,y(...m));function G(u,y){let m;try{m=u()}catch(d){return}return{getItem:d=>{var i;const T=E=>E===null?null:JSON.parse(E,y==null?void 0:y.reviver),O=(i=m.getItem(d))!=null?i:null;return O instanceof Promise?O.then(T):T(O)},setItem:(d,i)=>m.setItem(d,JSON.stringify(i,y==null?void 0:y.replacer)),removeItem:d=>m.removeItem(d)}}const x=u=>y=>{try{const m=u(y);return m instanceof Promise?m:{then(v){return x(v)(m)},catch(v){return this}}}catch(m){return{then(v){return this},catch(v){return x(v)(m)}}}},l=(u,y)=>(m,v,d)=>{let i=K({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,j)=>K(K({},j),C)},y),T=!1;const O=new Set,E=new Set;let R;try{R=i.getStorage()}catch(C){}if(!R)return u((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),m(...C)},v,d);const _=x(i.serialize),F=()=>{const C=i.partialize(K({},v()));let j;const h=_({state:C,version:i.version}).then(w=>R.setItem(i.name,w)).catch(w=>{j=w});if(j)throw j;return h},N=d.setState;d.setState=(C,j)=>{N(C,j),F()};const M=u((...C)=>{m(...C),F()},v,d);let W;const A=()=>{var C;if(!R)return;T=!1,O.forEach(h=>h(v()));const j=((C=i.onRehydrateStorage)==null?void 0:C.call(i,v()))||void 0;return x(R.getItem.bind(R))(i.name).then(h=>{if(h)return i.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==i.version){if(i.migrate)return i.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return W=i.merge(h,(w=v())!=null?w:M),m(W,!0),F()}).then(()=>{j==null||j(W,void 0),T=!0,E.forEach(h=>h(W))}).catch(h=>{j==null||j(void 0,h)})};return d.persist={setOptions:C=>{i=K(K({},i),C),C.getStorage&&(R=C.getStorage())},clearStorage:()=>{R==null||R.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>A(),hasHydrated:()=>T,onHydrate:C=>(O.add(C),()=>{O.delete(C)}),onFinishHydration:C=>(E.add(C),()=>{E.delete(C)})},A(),W||M},S=(u,y)=>(m,v,d)=>{let i=K({storage:G(()=>localStorage),partialize:A=>A,version:0,merge:(A,C)=>K(K({},C),A)},y),T=!1;const O=new Set,E=new Set;let R=i.storage;if(!R)return u((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),m(...A)},v,d);const _=()=>{const A=i.partialize(K({},v()));return R.setItem(i.name,{state:A,version:i.version})},F=d.setState;d.setState=(A,C)=>{F(A,C),_()};const N=u((...A)=>{m(...A),_()},v,d);d.getInitialState=()=>N;let M;const W=()=>{var A,C;if(!R)return;T=!1,O.forEach(h=>{var w;return h((w=v())!=null?w:N)});const j=((C=i.onRehydrateStorage)==null?void 0:C.call(i,(A=v())!=null?A:N))||void 0;return x(R.getItem.bind(R))(i.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==i.version){if(i.migrate)return i.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return M=i.merge(h,(w=v())!=null?w:N),m(M,!0),_()}).then(()=>{j==null||j(M,void 0),M=v(),T=!0,E.forEach(h=>h(M))}).catch(h=>{j==null||j(void 0,h)})};return d.persist={setOptions:A=>{i=K(K({},i),A),A.storage&&(R=A.storage)},clearStorage:()=>{R==null||R.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>W(),hasHydrated:()=>T,onHydrate:A=>(O.add(A),()=>{O.delete(A)}),onFinishHydration:A=>(E.add(A),()=>{E.delete(A)})},i.skipHydration||W(),M||N},b=(u,y)=>"getStorage"in y||"serialize"in y||"deserialize"in y?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),l(u,y)):S(u,y)}}]);
}());