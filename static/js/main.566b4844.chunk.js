(this["webpackJsonplandscape-designer"]=this["webpackJsonplandscape-designer"]||[]).push([[0],{147:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(95),n(96),n(52)),s=n.n(o),u=(n(97),function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("img",{className:"page-header__logo",src:s.a}),r.a.createElement("span",{className:"page-header__name"},"\u041b\u0410\u0415\u0420 \u2014 \u043b\u0430\u043d\u0434\u0448\u0430\u0444\u0442\u043d\u0430\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0430\u044f"),r.a.createElement("span",{className:"page-header__tagline"},"\xab\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u044b\xbb"))}),g=n(53),m=n.n(g),l=n(54),p=n.n(l),d=(n(98),function(){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("span",{className:"page-footer__text"},"\xa9 \u0418\u0432\u0430\u043d\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u043d\u0430, 2020"),r.a.createElement("a",{className:"page-footer__telegram",href:"https://t.me/chalkals",target:"_blank"},r.a.createElement("img",{src:m.a})),r.a.createElement("a",{className:"page-footer__mail","data-content":"marinayporogtish@gmail.com",href:"mailto:marinayporogtish@gmail.com","data-type":"mail"},r.a.createElement("img",{src:p.a})))}),f=n(27),h=n(26),E=n(25),b=n(55),x=n.n(b),S=(n(146),n(147),n(171)),D=n(169),w=n(170),v=n(56),_=n.n(v),j=n(57),y=n.n(j),O=n(58),N=n.n(O),k=n(59),C=n.n(k),I=n(60),M=n.n(I),R=n(61),P=n.n(R),z=n(62),B=n.n(z),L=n(63),T=n.n(L),q=n(64),F=n.n(q),J=n(65),W=n.n(J),U=n(66),X=n.n(U),Y=n(67),$=n.n(Y),A=n(68),G=n.n(A),H=n(69),K=n.n(H),Q=n(70),V=n.n(Q),Z=n(71),ee=n.n(Z),te=n(72),ne=n.n(te),ae=n(73),re=n.n(ae),ce=n(74),ie=n.n(ce),oe=n(75),se=n.n(oe),ue=n(76),ge=n.n(ue),me=n(77),le=n.n(me),pe=n(78),de=n.n(pe),fe=n(79),he=n.n(fe),Ee=n(80),be=n.n(Ee),xe=n(81),Se=n.n(xe),De=n(82),we=n.n(De),ve=n(83),_e=n.n(ve),je=n(84),ye=n.n(je),Oe=_.a,Ne=y.a,ke=N.a,Ce=C.a,Ie=M.a,Me=P.a,Re=B.a,Pe=T.a,ze=F.a,Be=W.a,Le=X.a,Te=$.a,qe=G.a,Fe=K.a,Je=V.a,We=ee.a,Ue=ne.a,Xe=re.a,Ye=ie.a,$e=se.a,Ae=ge.a,Ge=le.a,He=de.a,Ke=he.a,Qe=be.a,Ve=Se.a,Ze=we.a,et=_e.a,tt=ye.a,nt=n(85),at=n.n(nt),rt=function(e){var t=e.image,n=e.isSelected,c=e.onSelect,i=e.onChange,o=e.onDragStart,s=x()(t.src),u=Object(h.a)(s,1)[0],g=Object(a.useRef)(),m=Object(a.useRef)();return Object(a.useEffect)((function(){n&&(m.current.setNode(g.current),m.current.getLayer().batchDraw())}),[n]),r.a.createElement(a.Fragment,null,r.a.createElement(E.Image,Object.assign({id:t.id,image:u,x:t.x,y:t.y,height:t.height,width:t.width,offsetX:u&&t.width?t.width/2:0,offsetY:u&&t.height?t.height/2:0,onDragMove:function(e){e.target.x(10*Math.round(e.target.x()/10)),e.target.y(10*Math.round(e.target.y()/10))},draggable:!0},t,{onClick:c,onTap:c,ref:g,onDragEnd:function(e){i(Object(f.a)(Object(f.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onDragStart:o})),n&&r.a.createElement(E.Transformer,{ref:m,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}}))},ct=0,it=function(){var e=r.a.useState(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],i=function(e){return function(t,n){c(!!n&&e)}},o=Object(a.useRef)(),s=Object(a.useRef)(),u=Object(a.useState)([]),g=Object(h.a)(u,2),m=g[0],l=g[1],p=Object(a.useState)(null),d=Object(h.a)(p,2),b=d[0],x=d[1],v=function(e){o.current={src:e.target.src,height:e.target.height,width:e.target.width}},_=function(e){var t=e.target.id(),n=m.slice(),a=n.find((function(e){return e.id===t})),r=n.indexOf(a);n.splice(r,1),n.push(a),l(n)},j=function(){at()(document.querySelector(".editor__canvas")).then((function(e){!function(e,t){var n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}(e.toDataURL("image/png"),"design.png")}))},y=function(e){e.target===e.target.getStage()&&x(null)};return r.a.createElement("div",{className:"editor"},r.a.createElement("button",{className:"editor__save-as-img",onClick:function(){return j()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d"),r.a.createElement("div",{className:"editor__items-list"},r.a.createElement(S.a,{id:"p-1",expanded:"buildings"===n,onChange:i("buildings")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83c\udfe1")},"\u0416\u0438\u043b\u044b\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement(D.a,null,r.a.createElement("img",{src:Ue,height:"300",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Xe,height:"300",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ye,height:"300",onDragStart:function(e){return v(e)}}))),r.a.createElement(S.a,{id:"p-2",expanded:"rest-zone"===n,onChange:i("rest-zone")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83e\udde9")},"\u0417\u043e\u043d\u0430 \u043e\u0442\u0434\u044b\u0445\u0430"),r.a.createElement(D.a,null,r.a.createElement("img",{src:Oe,height:"70",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Fe,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:We,height:"125",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:He,height:"125",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ve,height:"100",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ze,height:"100",onDragStart:function(e){return v(e)}}))),r.a.createElement(S.a,{id:"p-3",expanded:"trees"===n,onChange:i("trees")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83c\udf33")},"\u0414\u0435\u0440\u0435\u0432\u044c\u044f"),r.a.createElement(D.a,null,r.a.createElement("img",{src:et,height:"130",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Je,height:"150",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:tt,height:"130",onDragStart:function(e){return v(e)}}))),r.a.createElement(S.a,{id:"p-4",expanded:"bushes"===n,onChange:i("bushes")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83c\udf3e")},"\u041a\u0443\u0441\u0442\u0430\u0440\u043d\u0438\u043a\u0438"),r.a.createElement(D.a,null,r.a.createElement("img",{src:Ne,height:"90",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:ke,height:"90",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ce,height:"90",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ie,height:"90",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Me,height:"90",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Re,height:"90",onDragStart:function(e){return v(e)}}))),r.a.createElement(S.a,{id:"p-6",expanded:"flowers"===n,onChange:i("flowers")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83c\udf3a")},"\u0426\u0432\u0435\u0442\u044b"),r.a.createElement(D.a,null,r.a.createElement("img",{src:Pe,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:ze,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Be,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Le,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Te,height:"80",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:qe,height:"80",onDragStart:function(e){return v(e)}}))),r.a.createElement(S.a,{id:"p-7",expanded:"decorative-objects"===n,onChange:i("decorative-objects")},r.a.createElement(w.a,{expandIcon:r.a.createElement("span",null,"\ud83d\uddff")},"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b"),r.a.createElement(D.a,null,r.a.createElement("img",{src:Ae,height:"100",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ge,height:"100",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:$e,height:"150",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Ke,height:"30",onDragStart:function(e){return v(e)}}),r.a.createElement("img",{src:Qe,height:"30",onDragStart:function(e){return v(e)}})))),r.a.createElement("div",{className:"editor__canvas",onDrop:function(e){return function(e){s.current.setPointersPositions(e),l(m.concat([Object(f.a)(Object(f.a)({},s.current.getPointerPosition()),{},{id:ct++,src:o.current.src,height:o.current.height,width:o.current.width})]))}(e)},onDragOver:function(e){return e.preventDefault()}},r.a.createElement(E.Stage,{width:750,height:400,onMouseDown:y,onTouchStart:y,ref:s},r.a.createElement(E.Layer,null,m.map((function(e,t){return r.a.createElement(rt,{key:e.id,image:e,onChange:function(e){var n=m.slice();m[t]=e,l(n)},isSelected:e.id===b,onSelect:function(){x(e.id)},onDragStart:_})}))))))};var ot=function(){return r.a.createElement("div",{className:"main-page"},r.a.createElement(u,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(it,null),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,n){e.exports=n.p+"static/media/logo.22f645ca.png"},53:function(e,t,n){e.exports=n.p+"static/media/telegram.5f5fad71.png"},54:function(e,t,n){e.exports=n.p+"static/media/mail.a1f5ed8b.png"},56:function(e,t,n){e.exports=n.p+"static/media/bbq.913dd150.png"},57:function(e,t,n){e.exports=n.p+"static/media/bush-1.09b71857.png"},58:function(e,t,n){e.exports=n.p+"static/media/bush-2.c4d02d5f.png"},59:function(e,t,n){e.exports=n.p+"static/media/bush-3.db1da1e9.png"},60:function(e,t,n){e.exports=n.p+"static/media/bush-4.7bcebeea.png"},61:function(e,t,n){e.exports=n.p+"static/media/bush-5.a7395221.png"},62:function(e,t,n){e.exports=n.p+"static/media/bush-6.c6d538de.png"},63:function(e,t,n){e.exports=n.p+"static/media/bush-aster.e1375db8.png"},64:function(e,t,n){e.exports=n.p+"static/media/bush-blue.f0252986.png"},65:function(e,t,n){e.exports=n.p+"static/media/bush-pink.81e20bc9.png"},66:function(e,t,n){e.exports=n.p+"static/media/bush-rose-red.b4751bee.png"},67:function(e,t,n){e.exports=n.p+"static/media/bush-rose-white.ba7573af.png"},68:function(e,t,n){e.exports=n.p+"static/media/bush-rose-yellow.3144a073.png"},69:function(e,t,n){e.exports=n.p+"static/media/chair.8d66ff14.png"},70:function(e,t,n){e.exports=n.p+"static/media/conifer.3147ae6e.png"},71:function(e,t,n){e.exports=n.p+"static/media/gazebo.130fb7e1.png"},72:function(e,t,n){e.exports=n.p+"static/media/house-1.a111f6d8.png"},73:function(e,t,n){e.exports=n.p+"static/media/house-2.290b1c3f.png"},74:function(e,t,n){e.exports=n.p+"static/media/house-3.be7dad1b.png"},75:function(e,t,n){e.exports=n.p+"static/media/lake.fb6d2866.png"},76:function(e,t,n){e.exports=n.p+"static/media/object-1.3c13eef6.png"},77:function(e,t,n){e.exports=n.p+"static/media/object-2.54ae7d99.png"},78:function(e,t,n){e.exports=n.p+"static/media/pool.df067943.png"},79:function(e,t,n){e.exports=n.p+"static/media/stone-1.4352f128.png"},80:function(e,t,n){e.exports=n.p+"static/media/stone-2.6f592f4e.png"},81:function(e,t,n){e.exports=n.p+"static/media/table-1.9e5fd1fa.png"},82:function(e,t,n){e.exports=n.p+"static/media/table-2.24179a5e.png"},83:function(e,t,n){e.exports=n.p+"static/media/tree.427f652b.png"},84:function(e,t,n){e.exports=n.p+"static/media/tree-fruit.64c22bee.png"},91:function(e,t,n){e.exports=n(151)},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.566b4844.chunk.js.map