(this["webpackJsonpsuperar-web"]=this["webpackJsonpsuperar-web"]||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(19),r=a.n(s),i=a(3),o=a.n(i),l=a(6),u=a(2),j=a(21),d=a(4),b=a(35),m=a.n(b).a.create({baseURL:"http://192.168.11.105:3000"}),x=a(0),v=Object(c.createContext)({});function h(e){var t=e.children,a=Object(c.useState)({}),n=Object(u.a)(a,2),s=n[0],r=n[1],i=new j.a,b=Object(d.f)();function h(){return(h=Object(l.a)(o.a.mark((function e(t){var a,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,c=t.password,e.prev=1,e.next=4,m.post("/login",{email:a,password:c});case 4:n=e.sent,s={data:n.data.data,access_token:n.data.access_token},m.defaults.headers.authorization="Bearer ".concat(s.access_token),r(s),i.set("@SuperarParaInovar:user",s,{path:"/",maxAge:259200}),b.push("/home"),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function p(){var e=i.get("@SuperarParaInovar:user");e&&(m.defaults.headers.authorization="Bearer ".concat(e.access_token)),e&&b.push("/home"),r(e)}return Object(c.useEffect)((function(){p()}),[]),Object(x.jsx)(v.Provider,{value:{colaborador:s,LoadCookie:p,SignIn:function(e){return h.apply(this,arguments)},SignOut:function(){try{i.remove("@SuperarParaInovar:user"),r({}),m.defaults.headers.authorization="",b.push("/")}catch(e){throw new Error(e)}}},children:t})}function p(){return Object(c.useContext)(v)}function O(e){var t=e.children;return Object(x.jsx)(h,{children:t})}var g=a(15),f=(a(68),a.p+"static/media/SPI_Logo_semFundo.da322953.svg"),N=a.p+"static/media/Superar_Inovar_SPI_Logo_2021-Color2.25748487.png",k=a.p+"static/media/HOME.cde2142c.svg",C=a(81),y=a.p+"static/media/arrow_open.81ec6ccd.svg",S=a.p+"static/media/arrow_closed.d0b8f36a.svg",w=a.p+"static/media/check_aceito.6fa9aa0f.svg",I=a.p+"static/media/check_rejeitado.abd7f995.svg",B=a(16);a(69);function E(e){var t=e.categoriaExp,a=e.categoria,n=e.legenda,s=e.photos,r=e.id,i=e.fetchPendencias,j=Object(c.useState)(!0),d=Object(u.a)(j,2),b=d[0],v=d[1],h=Object(c.useState)(""),p=Object(u.a)(h,2),O=p[0],g=p[1];function f(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/saude/pendente/".concat(r),{status:t,categoria:a,justificativa:O});case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{className:"cardContent",children:[Object(x.jsxs)("div",{className:"cardText",children:[Object(x.jsxs)("p",{className:"categoria",children:["Categoria: ",t]}),Object(x.jsx)("p",{className:"textoEnvio",children:n})]}),Object(x.jsx)("div",{className:"cardImgs",children:null===s||void 0===s?void 0:s.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(B.a,{trigger:Object(x.jsx)("img",{className:"cardImg",src:e.uri,alt:e.id,loading:"lazy"}),modal:!0,nested:!0,closeOnDocumentClick:!0,overlayStyle:{backgroundColor:"rgba(0, 0, 0, 0.9)"},children:function(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"close",onClick:t,children:"\xd7"}),Object(x.jsx)("img",{src:e.uri,alt:e.id,className:"modal-image"})]})}})},e.id)}))}),Object(x.jsxs)("div",{className:"cardButtons",children:[b?Object(x.jsx)("div",{className:"preRejBox",children:Object(x.jsx)("button",{className:"rejeitar",onClick:function(){return v(!1)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(x.jsxs)("div",{className:"rejBox",children:[Object(x.jsx)("button",{className:"rejeitando",onClick:function(){return f("recusado")},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})}),Object(x.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(x.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return g(e.target.value)}})]}),Object(x.jsx)("button",{className:"aceitarSaude",onClick:function(){return f("aprovado")},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})]})]})}a(70);function _(e){var t=e.categoriaExp,a=e.categoria,n=e.descricao,s=e.files,r=e.id,i=(e.pontuacao,e.fetchPendencias),j=Object(c.useState)(!0),d=Object(u.a)(j,2),b=d[0],v=d[1],h=Object(c.useState)(!1),p=Object(u.a)(h,2),O=p[0],g=p[1],f=Object(c.useState)(""),N=Object(u.a)(f,2),k=N[0],C=N[1],y=Object(c.useState)(0),S=Object(u.a)(y,2),E=S[0],_=S[1];function P(){return(P=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E>0&&E<20)){e.next=10;break}return e.prev=1,e.next=4,m.put("/pilares/conhecimento/pendente/".concat(r),{status:"aprovado",categoria:a,pontuacao:E,justificativa:k});case 4:i(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function T(){return(T=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/conhecimento/pendente/".concat(r),{status:"recusado",categoria:a,pontuacao:0,justificativa:k});case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{className:"cardContent",children:[Object(x.jsxs)("div",{className:"cardText",children:[Object(x.jsxs)("p",{className:"categoria",children:["Categoria: ",t]}),Object(x.jsx)("p",{className:"textoEnvio",children:n})]}),Object(x.jsx)("div",{className:"cardImgs",children:null===s||void 0===s?void 0:s.map((function(e){return Object(x.jsx)("div",{children:e.uri.includes(".pdf")?Object(x.jsx)("a",{href:e.uri,target:"_blank",children:Object(x.jsx)("div",{className:"cardPdf",children:e.uri.substring(e.uri.lastIndexOf("/")+1).substring(0,20)})}):Object(x.jsx)(B.a,{trigger:Object(x.jsx)("img",{className:"cardImg",src:e.uri,alt:"",loading:"lazy"}),modal:!0,nested:!0,closeOnDocumentClick:!0,overlayStyle:{backgroundColor:"rgba(0, 0, 0, 0.9)"},children:function(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"close",onClick:t,children:"\xd7"}),Object(x.jsx)("img",{className:"modal-img",src:e.uri,alt:"",loading:"lazy"})]})}})},e.id)}))}),Object(x.jsxs)("div",{className:"cardButtons",children:[b?Object(x.jsx)("div",{className:"preRejBox",children:Object(x.jsx)("button",{className:"rejeitar",onClick:function(){return v(!1)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(x.jsxs)("div",{className:"rejBox",children:[Object(x.jsx)("button",{className:"rejeitando",onClick:function(){return T.apply(this,arguments)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})}),Object(x.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(x.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return C(e.target.value)}})]}),O?Object(x.jsxs)("div",{className:"acBox2",children:[Object(x.jsx)("p",{className:"valueText",children:"Pontos:"}),Object(x.jsx)("input",{className:"valueBox",type:"number",onChange:function(e){return _(e.target.valueAsNumber)}}),Object(x.jsx)("button",{className:"aceitando",onClick:function(){return P.apply(this,arguments)},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})]}):Object(x.jsx)("div",{className:"acBox1",children:Object(x.jsx)("button",{className:"aceitar",onClick:function(){return g(!0)},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})})]})]})}a(71);function P(e){e.categoria;var t=e.descricao,a=e.id,n=(e.pontuacao,e.fetchPendencias),s=Object(c.useState)(!0),r=Object(u.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),v=b[0],h=b[1],p=Object(c.useState)(""),O=Object(u.a)(p,2),g=O[0],f=O[1],N=Object(c.useState)(0),k=Object(u.a)(N,2),C=k[0],y=k[1];function S(){return(S=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(C>0&&C<20)){e.next=10;break}return e.prev=1,e.next=4,m.put("/pilares/inovacao/pendente/".concat(a),{status:"aprovado",categoria:"inovacao",pontuacao:C,justificativa:g});case 4:n(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function B(){return(B=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/inovacao/pendente/".concat(a),{status:"recusado",categoria:"inovacao",pontuacao:0,justificativa:g});case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{className:"cardContent",children:[Object(x.jsxs)("div",{className:"cardText",children:[Object(x.jsx)("p",{className:"categoria",children:"Categoria: Inova\xe7\xe3o"}),Object(x.jsx)("p",{className:"textoEnvio",children:t})]}),Object(x.jsxs)("div",{className:"cardButtons",children:[i?Object(x.jsx)("div",{className:"preRejBox",children:Object(x.jsx)("button",{className:"rejeitar",onClick:function(){return j(!1)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(x.jsxs)("div",{className:"rejBox",children:[Object(x.jsx)("button",{className:"rejeitando",onClick:function(){return B.apply(this,arguments)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})}),Object(x.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(x.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return f(e.target.value)}})]}),v?Object(x.jsxs)("div",{className:"acBox2",children:[Object(x.jsx)("p",{className:"valueText",children:"Pontos:"}),Object(x.jsx)("input",{className:"valueBox",type:"number",onChange:function(e){return y(e.target.valueAsNumber)}}),Object(x.jsx)("button",{className:"aceitando",onClick:function(){return S.apply(this,arguments)},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})]}):Object(x.jsx)("div",{className:"acBox1",children:Object(x.jsx)("button",{className:"aceitar",onClick:function(){return h(!0)},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})})]})]})}a(72);function T(e){var t=e.categoriaExp,a=e.categoria,n=e.descricao,s=e.comprovante,r=e.id,i=e.fetchPendencias,j=Object(c.useState)(!0),d=Object(u.a)(j,2),b=d[0],v=d[1],h=Object(c.useState)(""),p=Object(u.a)(h,2),O=p[0],g=p[1];function f(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/interno/pendente/".concat(r),{status:t,categoria:a,justificativa:O});case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{className:"cardContent",children:[Object(x.jsxs)("div",{className:"cardText",children:[Object(x.jsxs)("p",{className:"categoria",children:["Categoria: ",t]}),Object(x.jsx)("p",{className:"textoEnvio",children:n})]}),Object(x.jsx)("div",{className:"cardImgs",children:null===s||void 0===s?void 0:s.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(B.a,{trigger:Object(x.jsx)("img",{className:"cardImg",src:e.comprovante,alt:e.id,loading:"lazy"}),modal:!0,nested:!0,closeOnDocumentClick:!0,overlayStyle:{backgroundColor:"rgba(0, 0, 0, 0.9)"},children:function(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"close",onClick:t,children:"\xd7"}),Object(x.jsx)("img",{src:e.comprovante,alt:e.id,className:"modal-image"})]})}})},e.id)}))}),Object(x.jsxs)("div",{className:"cardButtons",children:[b?Object(x.jsx)("div",{className:"preRejBox",children:Object(x.jsx)("button",{className:"rejeitar",onClick:function(){return v(!1)},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(x.jsxs)("div",{className:"rejBox",children:[Object(x.jsx)("button",{className:"rejeitando",onClick:function(){return f("recusado")},children:Object(x.jsx)("img",{className:"ico",src:I,alt:""})}),Object(x.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(x.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return g(e.target.value)}})]}),Object(x.jsx)("button",{className:"aceitarSaude",onClick:function(){return f("aprovado")},children:Object(x.jsx)("img",{className:"ico",src:w,alt:""})})]})]})}a(73);var L=a(82);function D(e){var t=e.post,a=e.vars,n=e.valTab,s=e.fetchPendencias,r=Object(c.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{style:{borderBottomWidth:o?"1px":"0px"},className:"row",children:[Object(x.jsx)("div",{className:"colabDiv",children:Object(x.jsx)("div",{children:t.pilar.colaborador.nome})}),Object(x.jsx)("div",{className:"timeDiv",children:Object(x.jsx)("span",{children:function(){var e;return Object(C.a)(new Date(null===t||void 0===t||null===(e=t.pilar)||void 0===e?void 0:e.data_inclusao),"dd 'de' MMMM 'de' yyyy",{locale:L.a})}()})}),Object(x.jsx)("div",{className:"arrowDiv",children:Object(x.jsx)("button",{className:"arrowBut",onClick:function(){return l(!o)},children:o?Object(x.jsx)("img",{className:"ico",src:y,alt:""}):Object(x.jsx)("img",{className:"ico",src:S,alt:""})})})]}),Object(x.jsx)("div",{className:o?"rowContentOpen":"rowContentClosed",children:o&&Object(x.jsx)("div",{className:"contentContainer",children:"Sa\xfade"===n?Object(x.jsx)(E,{categoriaExp:a.map((function(e){return t.categoria===e.key&&e.value})),categoria:t.categoria,legenda:t.legenda,photos:t.photos,id:t.pilar.id,fetchPendencias:s}):"Conhecimento"===n?Object(x.jsx)(_,{categoriaExp:a.map((function(e){return t.categoria===e.key&&e.value})),categoria:t.categoria,descricao:t.descricao,files:t.files,id:t.pilar.id,pontuacao:t.pilar.pontuacao,fetchPendencias:s}):"Inovacao"===n?Object(x.jsx)(P,{categoria:t.categoria,descricao:t.descricao,id:t.pilar.id,pontuacao:t.pilar.pontuacao,fetchPendencias:s}):Object(x.jsx)(T,{categoriaExp:a.map((function(e){return t.categoria===e.key&&e.value})),categoria:t.categoria,descricao:t.descricao,comprovante:t.comprovante,id:t.pilar.id,fetchPendencias:s})})})]})}a(74);var A=new Map;function F(e){var t=e.valTab,a=Object(c.useState)([]),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(1),j=Object(u.a)(i,2),d=j[0],b=j[1];function v(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d<=0)){e.next=2;break}return e.abrupt("return",b(1));case 2:return e.prev=2,e.next=5,m.get("Sa\xfade"===t?"/pilares/saude/pendentes?_page=".concat(d,"&limit=10"):"Conhecimento"===t?"/pilares/conhecimento/pendentes?_page=".concat(d,"&limit=10"):"Inovacao"===t?"/pilares/inovacao/pendentes?_page=".concat(d,"&limit=10"):"/pilares/interno/pendentes?_page=".concat(d,"&limit=10"));case 5:a=e.sent,c=a.data,r(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){v()}),[d,t]),Object(x.jsxs)("div",{className:"validationScreen",children:[!1,Object(x.jsx)("div",{className:"cardList",children:s.map((function(e){return Object(x.jsx)(D,{post:e,vars:A.get(t).vars,valTab:t,fetchPendencias:v},e.id)}))}),Object(x.jsxs)("div",{className:"pageNav",children:[Object(x.jsx)("button",{className:"dubArrow",onClick:function(){return b(1)},children:"<<"}),Object(x.jsx)("button",{className:"arrow",onClick:function(){return b((function(e){return e-1}))},children:"<"}),Object(x.jsx)("button",{className:"arrow",onClick:function(){return b((function(e){return e+1}))},children:">"}),Object(x.jsx)("input",{className:"pageNum",type:"number",value:d,readOnly:!0,onWheel:function(e){return e.currentTarget.blur()}}),Object(x.jsx)("input",{className:"pageNumDisplay",type:"number",onKeyDown:function(e){"Enter"!==e.key||isNaN(e.target.valueAsNumber)||(b(e.target.valueAsNumber),e.target.value=null,e.target.blur(),v())},onWheel:function(e){return e.currentTarget.blur()}})]})]})}A.set("Sa\xfade",{head:"da sa\xfade",vars:[{key:"alimentacao",value:"Alimenta\xe7\xe3o saudavel"},{key:"exercicio",value:"Exerc\xedcio f\xedsico"},{key:"exercise",value:"Exerc\xedcio f\xedsico2"},{key:"donate",value:"Doa\xe7\xe3o"}]}),A.set("Conhecimento",{head:"do conhecimento",vars:[{key:"article",value:"Artigo"},{key:"book",value:"Leitura de livro"}]}),A.set("Inovacao",{head:"da Inovacao",vars:[{key:"inovacao",value:"Inovacao"}]}),A.set("Interno",{head:"do Interno",vars:[{key:"rsi",value:"Rsi"},{key:"wtt",value:"Wtt"}]});a(75);function V(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Em constru\xe7\xe3o"})})}a(76);function M(){var e,t=Object(c.useState)("Valida\xe7\xe3o"),a=Object(u.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("Geral"),i=Object(u.a)(r,2),o=i[0],l=i[1],j=p().colaborador,d=p().SignOut;return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("img",{className:"logoSpi",src:f,alt:""}),Object(x.jsx)("img",{className:"logoSuperar",src:N,alt:""}),Object(x.jsx)("div",{className:"userName",children:null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.nome})]}),Object(x.jsxs)("nav",{children:[Object(x.jsxs)("div",{className:"tab",children:[Object(x.jsxs)("div",{className:"tabLeft",children:[Object(x.jsx)("div",{className:"homeTab",children:Object(x.jsx)("button",{className:"Home"===n?"active":"inactive",onClick:function(){return s("Home")},children:Object(x.jsx)("div",{className:"homeBox",children:Object(x.jsx)("img",{className:"homeIco",src:k,alt:""})})})}),Object(x.jsx)("div",{className:"valiTab",children:Object(x.jsx)("button",{className:"Valida\xe7\xe3o"===n?"active":"inactive",onClick:function(){return s("Valida\xe7\xe3o")},children:"Valida\xe7\xe3o"})}),Object(x.jsx)("div",{className:"admTab",children:Object(x.jsx)("button",{className:"Admin"===n?"active":"inactive",onClick:function(){return s("Admin")},children:"Admin"})})]}),Object(x.jsx)("div",{className:"tabRight",children:Object(x.jsx)("div",{className:"logOut",children:Object(x.jsx)("button",{className:"inactive",onClick:function(){d()},children:"Log Out"})})})]}),"Valida\xe7\xe3o"===n&&Object(x.jsx)("div",{className:"tabSub",children:Object(x.jsxs)("div",{className:"tabSubBts",children:[Object(x.jsx)("button",{className:"Geral"===o?"activeSub":"inactive",onClick:function(){return l("Geral")},children:"Vis\xe3o geral"}),Object(x.jsx)("button",{className:"Sa\xfade"===o?"activeSub":"inactive",onClick:function(){return l("Sa\xfade")},children:"Sa\xfade"}),Object(x.jsx)("button",{className:"Conhecimento"===o?"activeSub":"inactive",onClick:function(){return l("Conhecimento")},children:"Conhecimento"}),Object(x.jsx)("button",{className:"Inovacao"===o?"activeSub":"inactive",onClick:function(){return l("Inovacao")},children:"Inovacao"}),Object(x.jsx)("button",{className:"Interno"===o?"activeSub":"inactive",onClick:function(){return l("Interno")},children:"Interno"})]})})]}),"Home"===n&&Object(x.jsx)("div",{id:"Home",className:"tabcontent",children:Object(x.jsx)("h1",{children:"Em constru\xe7\xe3o"})}),"Valida\xe7\xe3o"===n&&Object(x.jsx)("div",{id:"Valida\xe7\xe3o",className:"tabcontent",children:"Geral"!==o?Object(x.jsx)(F,{valTab:o}):Object(x.jsx)(V,{})}),"Admin"===n&&Object(x.jsx)("div",{id:"Admin",className:"tabcontent",children:Object(x.jsx)("a",{className:"tabLink",target:"_blank",href:"https://spiintegradora-my.sharepoint.com/:x:/g/personal/caio_silva_integradora_com_br/EVWM1gNELYxGuqkZPWrWvk8BvDvs3baEagFQ8-Wf6_to0Q",children:"Link para editar a tabela"})})]})}a(77);function W(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],j=r[1],b=p().SignIn;Object(d.f)();function m(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:a,password:i},e.prev=1,e.next=4,b(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"loginPage",children:[Object(x.jsx)("div",{className:"loginImg",children:Object(x.jsx)("div",{className:"imgDiv",children:Object(x.jsx)("img",{className:"logoSuperar",src:N,alt:""})})}),Object(x.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsx)("div",{className:"loginText",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"h1Login",children:"Sign in"}),Object(x.jsx)("div",{className:"h2Login",children:"Entre com sua conta"}),Object(x.jsxs)("div",{className:"h3Login",children:["E acompanhe tudo sobre ",Object(x.jsx)("br",{}),"o Superar Para Inovar"]})]})}),Object(x.jsxs)("div",{className:"loginForm",children:[Object(x.jsx)("div",{children:"Email"}),Object(x.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)}}),Object(x.jsx)("div",{children:"Senha"}),Object(x.jsx)("input",{type:"password",onChange:function(e){return j(e.target.value)}})]}),Object(x.jsx)("input",{value:"Sign in",type:"submit",className:"submitLogin",onClick:m}),Object(x.jsxs)("div",{className:"createDiv",children:[Object(x.jsx)("div",{children:"N\xe3o tem cadastro? Crie sua conta no App\xa0 "}),Object(x.jsx)(g.b,{to:"/",className:"create",onClick:m,children:Object(x.jsx)("div",{children:"Crie sua conta"})})]})]})]})})}var z=function(){return Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/home",component:function(){return Object(x.jsx)(M,{})}}),Object(x.jsx)(d.a,{exact:!0,path:"/",component:function(){return Object(x.jsx)(W,{})}})]})};var R=function(){return Object(x.jsx)(g.a,{children:Object(x.jsx)(O,{children:Object(x.jsx)(z,{})})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),J()}},[[78,1,2]]]);
//# sourceMappingURL=main.b220ec54.chunk.js.map