(this["webpackJsonp@crypto-dev-amigos/client"]=this["webpackJsonp@crypto-dev-amigos/client"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),s=n.n(r),l=(n(11),n(12),n(13),n(3)),a=n.n(l),o=n(5),d=n(6),j=n(0),x=function(e){var t=e.nft;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"nft-card",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:t.nft.name})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Rarity Score:"})," ",t.rarityScore.toFixed(2)]}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:t.nft.external_url.replace("ipfs://","https://gateway.pinata.cloud/ipfs/"),children:"External Link"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{style:{width:150,height:150},src:t.nft.image.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.8em",color:"white"},children:[Object(j.jsx)("div",{style:{flex:1},children:"Content"}),Object(j.jsx)("div",{style:{flex:1},children:"Attribute"}),Object(j.jsx)("div",{style:{flex:1},children:"Percentile"}),Object(j.jsx)("div",{style:{flex:1},children:"Rarity Score"})]}),t.attributeRarities.map((function(e){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(j.jsx)("div",{style:{flex:1},children:e.trait_type}),Object(j.jsx)("div",{style:{flex:1},children:Object(j.jsx)("span",{style:"[Missing]"!==e.value?{fontWeight:"bold"}:{},children:e.value})}),Object(j.jsxs)("div",{style:{flex:1,position:"relative"},children:[Object(j.jsx)("div",{className:"bar-background",style:{position:"absolute",zIndex:0,width:"".concat((100*e.ratio).toFixed(0),"%"),height:"100%"}}),Object(j.jsx)("div",{style:{color:"#FFFFFF",position:"relative",zIndex:10},children:"".concat((100*e.ratio).toFixed(2),"%")})]}),Object(j.jsx)("div",{style:{flex:1},children:"".concat(e.ratioScore.toFixed(2))})]})},e.trait_type)}))]})]})})},b=function(e){var t=e.nftUrl,n=Object(c.useState)(null),i=Object(d.a)(n,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){Object(o.a)(a.a.mark((function e(){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,{nftUrl:t}),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,s(c);case 8:case"end":return e.stop()}}),e)})))()}),[t]),Object(j.jsx)(j.Fragment,{children:r&&Object(j.jsx)(x,{nft:r})})};var h=function(){var e,t,n=window.location.pathname.split("/"),c=null!==(e=n[1])&&void 0!==e?e:void 0,i=null!==(t=n[2])&&void 0!==t?t:void 0;return console.log("route",{route:n,projectName:c,tokenId:i}),c&&i?Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("p",{children:Object(j.jsx)(b,{nftUrl:"/data/".concat(c,"/").concat(i,".json")})})}):Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("p",{children:"Empty 2"})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.2c239dd4.chunk.js.map