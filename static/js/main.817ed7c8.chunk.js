(this.webpackJsonptarotdatabase=this.webpackJsonptarotdatabase||[]).push([[0],{12:function(t,e,i){},46:function(t){t.exports=JSON.parse('[{"title":"test deck 1","artist":"test artist 1","type":"Rider-Waite-Smith"},{"title":"test deck 2","artist":"test artist 2","type":"Tarot de Marseilles"}]')},47:function(t){t.exports=JSON.parse('{"title":{"display":"Title","type":"text","tab":"basic-info"},"author":{"display":"Author","type":"text","tab":"basic-info"},"artist":{"display":"Artist","type":"text","tab":"basic-info"},"type":{"display":"Deck Type","type":"single-select","tab":"basic-info","values":["Rider-Waite-Smith","Tarot de Marseilles","Thoth","Oracle Cards"]},"num-cards":{"display":"Number of Cards","type":"text","tab":"basic-info"},"guidebook":{"display":"Guidebook","type":"multi-select","tab":"basic-info"},"genre":{"display":"Genre","type":"multi-select","tab":"basic-info"},"minor-arcana":{"display":"Minor Arcana","type":"single-select","tab":"basic-info"},"suit-names":{"display":"Suitnames (WCSP)","type":"text","tab":"basic-info"},"cws":{"display":"Content Warnings","type":"multi-select","tab":"basic-info"},"style":{"display":"Art Style","type":"multi-select","tab":"art"},"subjects":{"display":"Main Subjects","type":"multi-select","tab":"art"},"medium":{"display":"Art Medium","type":"multi-select","tab":"art"},"borders":{"display":"Card Borders","type":"single-select","tab":"art"},"palette":{"display":"Color Palette","type":"single-select","tab":"art"},"colors":{"display":"Main Colors","type":"multi-select","tab":"art"},"diversity":{"display":"Diversity","type":"multi-select","tab":"art"},"nsfw":{"display":"NSFW","type":"single-select","tab":"art"},"storage":{"display":"Deck Storage","type":"multi-select","tab":"print"},"size":{"display":"Card Size","type":"single-select","tab":"print"},"material":{"display":"Card Material","type":"single-select","tab":"print"},"finish":{"display":"Card Finish","type":"single-select","tab":"print"},"gilding":{"display":"Gilding","type":"multi-select","tab":"print"},"publisher":{"display":"Publisher","type":"text","tab":"publication"},"date":{"display":"Publishing Date","type":"text","tab":"publication"},"language":{"display":"Language","type":"multi-select","tab":"publication"},"isbn":{"display":"ISBN","type":"text","tab":"publication"},"retailers":{"display":"Retailers","type":"multi-select","tab":"publication"},"in-print":{"display":"Availability","type":"multi-select","tab":"publication"}}')},54:function(t,e,i){},62:function(t,e,i){"use strict";i.r(e);var c,s,a=i(0),n=i.n(a),r=i(15),l=i.n(r),b=(i(54),i(4)),d=(i(12),i(55),i(46)),j=i(66),o=i(67),u=i(72),p=i(70),x=i(71),y=i(73),O=i(68),h=i(69),f=i(65);!function(t){t.text="text",t.singleSelect="single-select",t.multiSelect="multi-select"}(c||(c={})),function(t){t.basicInfo="basic-info",t.art="art",t.print="print",t.publication="publication"}(s||(s={}));var m=i(1);function g(t){var e=t.attribute,i=t.value;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"info-text field-title",children:e.display}),e.type===c.text&&Object(m.jsx)("td",{className:"info-text text-entry",children:i}),e.type===c.singleSelect&&Object(m.jsx)("td",{className:"info-text single-select",children:i}),e.type===c.multiSelect&&Object(m.jsx)("td",{className:"info-text multi-select",children:i})]},e.display)}function k(t){var e=t.deck,i=t.getAttribute;return Object(m.jsx)(f.a,{striped:!0,className:"deck-info-tab",children:Object(m.jsx)("tbody",{children:Object.entries(e).map((function(t){var e=Object(b.a)(t,2),c=e[0],a=e[1],n=i(c);return n.tab===s.basicInfo?Object(m.jsx)(g,{attribute:n,value:a}):Object(m.jsx)(m.Fragment,{})}))})})}function v(t){var e=t.deck,i=t.getAttribute;return Object(m.jsx)(f.a,{striped:!0,className:"deck-info-tab",children:Object(m.jsx)("tbody",{children:Object.entries(e).map((function(t){var e=Object(b.a)(t,2),c=e[0],a=e[1],n=i(c);return n.tab===s.publication?Object(m.jsx)(g,{attribute:n,value:a}):Object(m.jsx)(m.Fragment,{})}))})})}function A(t){var e=t.deck,i=t.getAttribute;return Object(m.jsx)(f.a,{striped:!0,className:"deck-info-tab",children:Object(m.jsx)("tbody",{children:Object.entries(e).map((function(t){var e=Object(b.a)(t,2),c=e[0],a=e[1],n=i(c);return n.tab===s.art?Object(m.jsx)(g,{attribute:n,value:a}):Object(m.jsx)(m.Fragment,{})}))})})}function S(t){var e=t.deck,i=t.getAttribute;return Object(m.jsx)(f.a,{striped:!0,className:"deck-info-tab",children:Object(m.jsx)("tbody",{children:Object.entries(e).map((function(t){var e=Object(b.a)(t,2),c=e[0],a=e[1],n=i(c);return n.tab===s.print?Object(m.jsx)(g,{attribute:n,value:a}):Object(m.jsx)(m.Fragment,{})}))})})}var C=i(47);function N(t){var e=t.show,i=t.onHide,a=t.deck,n=C;function r(t){return Object.keys(n).includes(t)?n[t]:{display:"KEY NOT FOUND",type:c.text,tab:s.basicInfo}}return Object(m.jsxs)(p.a,{show:e,onHide:i,size:"lg",children:[Object(m.jsx)(p.a.Header,{closeButton:!0,children:Object(m.jsx)(p.a.Title,{children:a.title})}),Object(m.jsx)(p.a.Body,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(o.a,{sm:7,children:Object(m.jsxs)(x.a,{defaultActiveKey:"basicinfo",children:[Object(m.jsx)(y.a,{eventKey:"basicinfo",title:"Basic Info",children:Object(m.jsx)(k,{deck:a,getAttribute:r})}),Object(m.jsx)(y.a,{eventKey:"art",title:"Art",children:Object(m.jsx)(A,{deck:a,getAttribute:r})}),Object(m.jsx)(y.a,{eventKey:"print",title:"Print",children:Object(m.jsx)(S,{deck:a,getAttribute:r})}),Object(m.jsx)(y.a,{eventKey:"publication",title:"Publication",children:Object(m.jsx)(v,{deck:a,getAttribute:r})})]})}),Object(m.jsx)(o.a,{sm:5,"class-id":"deckdetailmodal-image",children:Object(m.jsx)(O.a,{src:"https://i.imgur.com/jVLmj44.png",fluid:!0})})]})}),Object(m.jsx)(p.a.Footer,{children:Object(m.jsx)(h.a,{variant:"secondary",onClick:i,children:"Close"})})]})}function F(t){var e=t.deck,i=Object(a.useState)(!1),c=Object(b.a)(i,2),s=c[0],n=c[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(u.a,{bg:"light",text:"dark",onClick:function(){n(!0)},style:{cursor:"pointer"},children:[Object(m.jsx)(u.a.Img,{src:"https://i.imgur.com/jVLmj44.png"}),Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)(u.a.Title,{children:e.title}),Object(m.jsx)(u.a.Text,{children:e.artist})]})]}),Object(m.jsx)(N,{show:s,onHide:function(){n(!1)},deck:e})]})}function w(t){var e=t.decks;return Object(m.jsx)(j.a,{xs:2,md:4,className:"g-4",children:e.map((function(t){return Object(m.jsx)(o.a,{children:Object(m.jsx)(F,{deck:t})})}))})}function T(){return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Filters"})})}function B(t){t.decks,t.setDecks;var e=t.showAdd,i=t.setShowAdd;function c(){i(!1)}return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{onClick:function(){i(!0)},children:"+ Add new deck"})}),Object(m.jsxs)(p.a,{show:e,onHide:c,size:"lg",children:[Object(m.jsx)(p.a.Header,{closeButton:!0,children:"Add a deck"}),Object(m.jsx)(p.a.Body,{children:Object(m.jsx)("p",{children:"yay"})}),Object(m.jsx)(p.a.Footer,{children:Object(m.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"})})]}),";"]})}var D=function(){var t=Object(a.useState)(d),e=Object(b.a)(t,2),i=e[0],c=e[1],s=Object(a.useState)(!1),n=Object(b.a)(s,2),r=n[0],l=n[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"DeckFinder"}),Object(m.jsxs)(j.a,{children:[Object(m.jsx)(o.a,{xs:3,children:Object(m.jsx)(T,{})}),Object(m.jsx)(o.a,{children:Object(m.jsx)(w,{decks:i})})]}),Object(m.jsx)(j.a,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(B,{decks:i,setDecks:c,showAdd:r,setShowAdd:l})})})]})},I=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,74)).then((function(e){var i=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,n=e.getTTFB;i(t),c(t),s(t),a(t),n(t)}))};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.817ed7c8.chunk.js.map