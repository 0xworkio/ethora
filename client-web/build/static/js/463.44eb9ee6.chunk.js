"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[463],{23895:function(e,t,n){n.d(t,{c:function(){return l}});var i=n(74165),r=n(15861),o=n(85554),s=n(11210),a=function(e){return e?e.replace(/([A-Z])/g,"_$1").toLowerCase():"invalid string passed"},l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n,r,l,c,d){var u,m,f,p,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[t,n].sort().join("."),m=u.toLowerCase()+c,f=[r,l].sort().join(" and "),p=s.K.getState().userChatRooms,h=!1,0===p.filter((function(e){return e.jid===m})).length&&(h=!0,o.ZP.createNewRoom(u.toLowerCase()),o.ZP.setOwner(u.toLowerCase()),o.ZP.roomConfig(u.toLowerCase(),{roomName:f}),o.ZP.subsribe(m),o.ZP.presenceInRoom(m),setTimeout((function(){o.ZP.sendInvite(a(t),m.toLowerCase(),a(n))}),1e3)),e.abrupt("return",{roomJid:m,roomName:f,isNewRoom:h});case 7:case"end":return e.stop()}}),e)})));return function(t,n,i,r,o,s){return e.apply(this,arguments)}}()},3463:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var i,r=n(72791),o=n(20803),s=n(1413),a=n(74165),l=n(15861),c=n(70885),d=n(50228),u=n(85554),m=n(11210),f=n(57337),p=n(89721),h=n(91482),g=n(16263),x=n(45586),v=n(78703),j=n(31128),y=n(95178),Z=n(64880),w=n(13811),b=n(48928),k=n(58487),C=n(30199),S=n(17205),N=n(60788),I=n(8440),D=n(4565),A=n(81872),R=n(59911),L=n(52898),M=n(23895),P=n(57050),J=n(52791),K=n(21686),E=n(64558),z=n(68438),T=n(80184),U=function(e){var t=e.message,n=e.userJid,i=e.position,o=e.buttonSender,s=e.chooseDirectRoom,a=t.data.senderFirstName,l=t.data.senderLastName,d=t.data.senderJID,p=(0,Z.k6)(),v=(0,r.useState)(),U=(0,c.Z)(v,2),F=U[0],_=U[1],W=(0,r.useState)(!1),B=(0,c.Z)(W,2),O=B[0],H=B[1],V=r.useState(null),Y=(0,c.Z)(V,2),$=Y[0],q=Y[1],G=(0,r.useState)("dialog"),Q=(0,c.Z)(G,2),X=Q[0],ee=Q[1],te=(0,r.useState)(""),ne=(0,c.Z)(te,2),ie=ne[0],re=ne[1],oe=Boolean($),se=(0,r.useState)(1),ae=(0,c.Z)(se,2),le=ae[0],ce=ae[1],de=(0,m.K)((function(e){return e.balance})).filter((function(e){return!e.tokenType&&e.contractAddress.length>10})),ue=(0,m.K)((function(e){return e.user})),me=(0,r.useState)("incoming"),fe=(0,c.Z)(me,2),pe=fe[0],he=fe[1],ge=function(e){q(null),H(!0),ee(e)},xe=function(e){var n=Number(e||le);(0,f.tZ)("DPT",de[0].tokenName,n,t.data.senderWalletAddress).then((function(e){var i=de[0].tokenName===z.zl?z.w5:de[0].tokenName,r=ue.firstName+" "+ue.lastName,o=t.data.senderFirstName+" "+t.data.senderLastName,s="".concat(r," -> ").concat(le," ").concat(i," -> ").concat(o);u.ZP.sendSystemMessage(t.roomJID,ue.firstName,ue.lastName,ue.walletAddress,s,n,t.id),H(!1)})).catch((function(e){console.log(e),re("An error occurred during the coin transfer."),ee("error")}))},ve=function(e){"clarify"===e&&(re("Are you sure you want to block the user?"),ee("clarification")),"block"===e&&(u.ZP.blacklistUser(t.data.senderJID),u.ZP.getBlackList(),m.K.getState().removeAllInMessageHistory(t.data.senderJID),H(!1))};return(0,r.useEffect)((function(){t.data.quickReplies&&_(JSON.parse(t.data.quickReplies)),he(String(n).split("/")[0]===String(d).split("/")[0]?"outgoing":"incoming")}),[]),(0,T.jsxs)("div",{is:"Message",children:[i.separator?(0,T.jsx)(j.it,{children:i.separator}):null,(0,T.jsxs)(j.v0,{onContextMenu:"incoming"===pe?function(e){e.preventDefault(),ge("dialog")}:null,style:{marginBottom:"last"===i.type||"single"===i.type?15:null},model:{sender:a+" "+l,direction:pe,position:i.position},avatarPosition:String(n).split("/")[0]===String(d).split("/")[0]?"tr":"tl",avatarSpacer:"first"!==i.type&&"single"!==i.type,children:[("first"===i.type||"single"===i.type)&&(0,T.jsx)("img",{style:{borderRadius:"50%",boxSizing:"border-box",width:"42px",height:"42px",cursor:"pointer"},onClick:function(){return p.push("/profile/"+t.data.senderWalletAddress)},is:"Avatar",src:t.data.photoURL?t.data.photoURL:"https://icotar.com/initials/"+a+" "+l,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="https://icotar.com/initials/"+a+" "+l},alt:a}),(0,T.jsxs)(j.v0.CustomContent,{children:[("first"===i.type||"single"===i.type)&&(0,T.jsxs)("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,T.jsxs)("strong",{style:{cursor:"pointer"},onClick:function(){return p.push("/profile/"+t.data.senderWalletAddress)},children:[a," ",l,(0,T.jsx)("br",{})]}),String(n).split("/")[0]!==String(d).split("/")[0]?(0,T.jsx)(w.Z,{"aria-label":"more",id:"long-button","aria-controls":oe?"long-menu":void 0,"aria-expanded":oe?"true":void 0,"aria-haspopup":"true",onClick:function(){return ge("dialog")},children:(0,T.jsx)(L.Z,{})}):null]}),t.data.isMediafile&&"image"===t.data.mimetype.split("/")[0]?(0,T.jsx)(b.Z,{sx:{maxWidth:200},children:(0,T.jsx)(k.Z,{onClick:function(){H(!0),ee("image")},children:(0,T.jsx)(C.Z,{style:{height:150,objectFit:"cover",objectPosition:"left"},component:"img",height:"150",image:t.data.location,alt:t.data.originalName})})}):null,t.data.isMediafile&&"application"===t.data.mimetype.split("/")[0]?(0,T.jsxs)("a",{target:"_blank",href:t.data.location,children:[(0,T.jsx)(j.v0.ImageContent,{src:t.data.locationPreview,alt:t.data.originalName,width:150}),t.data.mimetype.split("/")[1]]}):null,t.data.isMediafile&&"video"===t.data.mimetype.split("/")[0]?(0,T.jsxs)("video",{controls:!0,width:"200px",children:[(0,T.jsx)("source",{src:t.data.location,type:t.data.mimetype,title:t.data.originalName}),"Sorry, your browser doesn't support videos."]}):null,t.data.isMediafile&&"audio"===t.data.mimetype.split("/")[0]?(0,T.jsxs)("audio",{controls:!0,children:[(0,T.jsx)("source",{src:t.data.location,type:t.data.mimetype}),"Your browser does not support the audio element."]}):null,t.data.isMediafile?null:(0,T.jsxs)("div",{children:[(0,T.jsx)("span",{dangerouslySetInnerHTML:{__html:t.body.replace(/\b(https?\:\/\/\S+)/gm,'<a href="$1">$1</a>')}}),(0,T.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:5,minWidth:200,color:"incoming"===pe?"rgb(110, 169, 215)":"#c6e3fa",flexDirection:"incoming"===pe?"row":"row-reverse"},children:[(0,T.jsx)("div",{style:{fontSize:12},children:(0,y.Z)(new Date,new Date(t.date))>5?(0,h.Z)(new Date(t.date),"h:mm a"):(0,g.Z)((0,x.Z)(new Date(t.date),0),new Date,{addSuffix:!0})}),t.coinsInMessage>0?(0,T.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,T.jsx)("div",{style:{fontSize:12},children:null===t||void 0===t?void 0:t.coinsInMessage}),(0,T.jsx)("img",{src:P,style:{width:25,height:25},alt:"coin"})]}):null]})]})]})]}),F?(0,T.jsx)(J.Z,{sx:{"& button":{m:.5}},children:(0,T.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"max-content",marginLeft:"45px"},children:F.map((function(e,t){return(0,T.jsx)(S.Z,{variant:"outlined",size:"small",onClick:function(){return o(e)},children:e.name},t)}))})}):null,(0,T.jsx)(N.Z,{open:O,onClose:function(){return H(!1)},maxWidth:"xl",children:(0,T.jsxs)(I.Z,{children:["error"===X?(0,T.jsx)("div",{children:ie}):null,"clarification"===X?(0,T.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[ie,(0,T.jsx)(S.Z,{onClick:function(){return ve("block")},variant:"outlined",size:"small",children:"To block list"})]}):null,"dialog"===X?(0,T.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,T.jsxs)("div",{children:["Reward"," ",(0,T.jsx)("strong",{children:t.data.senderFirstName+" "+t.data.senderLastName})," ","with coins"]}),(0,T.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px 0px 10px 0px"},children:[1,3,5,"x"].map((function(e){return(0,T.jsxs)("div",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){"number"===typeof e?xe(e):ee("transfer")},children:[(0,T.jsx)("img",{src:P,style:{width:25,height:25},alt:"coin"}),(0,T.jsx)(D.Z,{sx:{fontWeight:"bold"},children:e})]},e)}))}),(0,T.jsx)(A.Z,{style:{margin:"10px"}}),(0,T.jsx)(S.Z,{onClick:function(){(0,M.c)(ue.walletAddress,t.data.senderWalletAddress,ue.firstName,t.data.senderFirstName,"@conference.dev.dxmpp.com",t.data.senderJID).then((function(e){if(e.isNewRoom){var t={jid:e.roomJid,name:e.roomName,room_background:"none",room_thumbnail:"none",users_cnt:"2",unreadMessages:0,composing:"",toUpdate:!0,description:""};m.K.getState().setNewUserChatRoom(t),s(e.roomJid)}else s(e.roomJid)})).catch((function(e){console.log("openPrivateRoom Error: ",e)}))},variant:"outlined",startIcon:(0,T.jsx)(K.Z,{}),children:"Direct message"}),(0,T.jsx)(A.Z,{style:{margin:"10px"}}),(0,T.jsx)(S.Z,{onClick:function(){return ve("clarify")},variant:"contained",startIcon:(0,T.jsx)(E.Z,{}),children:"Block this user"}),(0,T.jsx)(D.Z,{style:{textAlign:"center"},variant:"caption",display:"block",gutterBottom:!0,children:"Stop seeing this user."})]}):null,"transfer"===X?(0,T.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,T.jsx)(R.Z,{id:"standard-basic",type:"number",label:"Enter transfer amount",variant:"standard",onChange:function(e){return ce(Number(e.target.value))}}),(0,T.jsx)(S.Z,{style:{marginTop:10},onClick:function(){return xe()},variant:"outlined",size:"small",children:"Send coins"})]}):null,"image"===X?(0,T.jsx)("div",{children:(0,T.jsx)("img",{src:t.data.location,alt:t.data.originalName,style:{maxWidth:"100%"}})}):null]})})]})},F=function(e){var t=e.message;e.userJid;return(0,T.jsx)("div",{style:{textAlign:"center",color:"#6ea9d7",fontSize:".8em",boxSizing:"border-box",fontFamily:"Helvetica Neue,Segoe UI,Helvetica,Arial,sans-serif"},children:t.body},t.key)},_=n(74142),W=n(52797),B=n(40464),O=n(39571),H=n(96580),V=n(77248),Y=n(18267),$=n(4942),q=n(73763),G="/chat/",Q=function(e){var t=e.room,n=e.name,i=e.chatId,r=e.setDirection,o=(0,Z.k6)();return t?(0,T.jsx)(d.Z,{justifyContent:"center",alignItems:"center",style:{padding:"10px 0",maxWidth:170},children:(0,T.jsx)(S.Z,{onClick:function(){r(),o.push(G+t.roomJid+q.Ts)},children:n})}):(0,T.jsx)(d.Z,{justifyContent:"center",alignItems:"center",style:{padding:"10px 0"},children:(0,T.jsx)(S.Z,{disabled:!i,onClick:function(){r(),o.push(G+"none")},children:"Empty"})})},X=n(91803),ee=function(e){var t=e.room,n=e.direction,i=e.previousRoom,r=(0,Z.k6)();return null!==t&&void 0!==t&&t.name?(0,T.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,T.jsx)(D.Z,{sx:{fontWeight:"bold",fontSize:18},children:t.name}),(0,T.jsx)(D.Z,{children:t.description})]}):(0,T.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,T.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,T.jsxs)(D.Z,{children:["This space is empty. You can build your own room here for"," ",(0,T.jsx)("b",{children:"120 "})]}),(0,T.jsx)("img",{src:P,style:{width:20,height:20},alt:"coin"})]}),(0,T.jsx)(S.Z,{onClick:function(){r.push("/newchat",{metaDirection:n,metaRoom:i})},children:"Create Meta Room"})]})},te=n(84094),ne="north",ie="west",re="south",oe="east",se={north:"n",west:"w",south:"s",east:"e"},ae=(i={},(0,$.Z)(i,ie,oe),(0,$.Z)(i,oe,ie),(0,$.Z)(i,re,ne),(0,$.Z)(i,ne,re),i),le={name:"",description:"",ownerNavLinks:{west:null,east:null,north:null,south:null},ownerId:"",contractAddress:"",createdAt:new Date,_id:"",roomJid:"",updatedAt:new Date,userNavLinks:{west:null,east:null,north:null,south:null}},ce={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",p:2,outline:"none"},de=function(e){var t=e.chatId,n=e.open,i=e.onClose,o=(0,r.useState)(""),s=(0,c.Z)(o,2),p=s[0],h=s[1],g=(0,r.useState)(!1),x=(0,c.Z)(g,2),v=x[0],j=x[1],y=(0,r.useState)(),Z=(0,c.Z)(y,2),b=Z[0],k=Z[1],C=(0,r.useState)(le),S=(0,c.Z)(C,2),N=S[0],I=S[1],D=(0,m.K)((function(e){return e.user})),A=(0,_.Z)(),R=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,f.Vy)().get("/room/getRoom/"+t);case 4:n=e.sent,I(n.data.result),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),I(le),console.log(e.t0);case 12:j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){t||I(le),t&&R()}),[t]);var L=function(e,t,n){var i=(0,u.$I)(D.walletAddress),r=D.firstName+" "+D.lastName+" has joined <-",o=D.firstName+" "+D.lastName+" has left ->",s={senderFirstName:D.firstName,senderLastName:D.lastName,senderWalletAddress:D.walletAddress,isSystemMessage:!0,tokenAmount:0,receiverMessageId:"",mucname:e,photoURL:D.profileImage,roomJid:t,isReply:!1,mainMessageText:"",mainMessageId:"",mainMessageUserName:""};u.ZP.sendMessageStanza(i+q.yK,t,n?o:r,s)},M=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Vy)().post("/room/join/"+t,{});case 3:n=e.sent,console.log(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();if((0,r.useEffect)((function(){null!==b&&void 0!==b&&b.name&&L(b.name,b.roomJid+q.Ts,!0)}),[b]),(0,r.useEffect)((function(){N.name&&(L(N.name,N.roomJid+q.Ts,!1),M())}),[N]),!N.roomJid&&!p)return null;var P=function(e){var n,i,r,o,s=function(e){return ae[e]}(p);return function(){var e,t,n,i,r,o,s,a;return!(null!==N&&void 0!==N&&null!==(e=N.ownerNavLinks)&&void 0!==e&&e.south)&&!(null!==N&&void 0!==N&&null!==(t=N.ownerNavLinks)&&void 0!==t&&t.east)&&!(null!==N&&void 0!==N&&null!==(n=N.ownerNavLinks)&&void 0!==n&&n.west)&&!(null!==N&&void 0!==N&&null!==(i=N.ownerNavLinks)&&void 0!==i&&i.north)&&!(null!==N&&void 0!==N&&null!==(r=N.userNavLinks)&&void 0!==r&&r.south)&&!(null!==N&&void 0!==N&&null!==(o=N.userNavLinks)&&void 0!==o&&o.east)&&!(null!==N&&void 0!==N&&null!==(s=N.userNavLinks)&&void 0!==s&&s.west)&&!(null!==N&&void 0!==N&&null!==(a=N.userNavLinks)&&void 0!==a&&a.north)}()&&e===s?(0,T.jsx)(Q,{name:s+":"+(null===b||void 0===b?void 0:b.name),chatId:t,room:b,setDirection:function(){h(s),k(b)}}):(0,T.jsx)(Q,{name:se[e]+":"+((null===(n=N.ownerNavLinks[e])||void 0===n?void 0:n.name)||(null===(i=N.userNavLinks[e])||void 0===i?void 0:i.name)),chatId:t,room:(null===N||void 0===N||null===(r=N.ownerNavLinks)||void 0===r?void 0:r[e])||(null===N||void 0===N||null===(o=N.userNavLinks)||void 0===o?void 0:o[e]),setDirection:function(){h(e),k(N)}})};return(0,T.jsx)(X.Z,{open:n,onClose:i,children:(0,T.jsx)(d.Z,{sx:ce,children:v?(0,T.jsx)(H.Z,{size:50}):(0,T.jsxs)(d.Z,{children:[(0,T.jsx)(d.Z,{sx:{bgcolor:"white",mb:"10px",borderRadius:"10px",p:2},children:(0,T.jsx)(ee,{room:N,direction:p,previousRoom:b})}),(0,T.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",bgcolor:"white",borderRadius:"10px",p:2},children:[P(ne),(0,T.jsxs)(d.Z,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",alignItems:"center",justifyContent:"center"},children:[(0,T.jsx)(d.Z,{sx:{display:"flex"},children:P(ie)}),(0,T.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(w.Z,{sx:{color:A.palette.primary.main},children:(0,T.jsx)(te.Z,{fontSize:"large"})})}),(0,T.jsx)(d.Z,{sx:{display:"flex"},children:P(oe)})]}),P(re)]})]})})})};function ue(){var e,t,n=(0,m.K)((function(e){return e.historyMessages})),i=(0,m.K)((function(e){return e.user})),o=(0,m.K)((function(e){return e.userChatRooms})),y=(0,m.K)((function(e){return e.loaderArchive})),w=(0,m.K)((function(e){return e.currentUntrackedChatRoom})),b=(0,r.useState)(),k=(0,c.Z)(b,2),C=k[0],D=k[1],A=(0,r.useState)(""),R=(0,c.Z)(A,2),L=R[0],M=R[1],P=(0,r.useState)(!0),J=(0,c.Z)(P,2),K=J[0],E=J[1],$=(0,r.useState)(""),q=(0,c.Z)($,2),G=q[0],Q=q[1],X=(0,r.useState)({jid:"",name:"",room_background:"",room_thumbnail:"",users_cnt:""}),ee=(0,c.Z)(X,2),te=ee[0],ne=ee[1],ie=(0,r.useRef)(null),re=(0,_.Z)(),oe=(0,W.Z)(re.breakpoints.down("md")),se=(0,r.useState)(!1),ae=(0,c.Z)(se,2),le=ae[0],ce=ae[1],ue=(0,r.useState)(!1),me=(0,c.Z)(ue,2),fe=me[0],pe=me[1],he=(0,r.useState)({headline:"",description:""}),ge=(0,c.Z)(he,2),xe=ge[0],ve=ge[1],je=(0,Z.UO)().roomJID,ye=(0,Z.k6)(),Ze=(0,r.useState)(!0),we=(0,c.Z)(Ze,2),be=we[0],ke=we[1],Ce=(0,m.K)((function(e){return e.activeRoomFilter})),Se=(0,m.K)((function(e){return e.setActiveRoomFilter})),Ne=Ce===z.hx.meta,Ie=(0,r.useCallback)((function(e){Ee(e[0])}),[te]),De=(0,Y.uI)({onDrop:Ie,noClick:!0,maxFiles:1}).getRootProps;(0,r.useEffect)((function(){je&&(Me(je),E(!0))}),[je]),(0,r.useEffect)((function(){(0,f.k2)(i.walletAddress).then((function(e){D(e.data.result)}))}),[]);var Ae,Re,Le=function(e){ye.push("/chat/"+e.split("@")[0]),Me(e)},Me=function(e){Q(e);var t=o.filter((function(t){return t.jid===e}))[0];ne(t),m.K.getState().clearCounterChatRoom(e),m.K.getState().setCurrentUntrackedChatRoom(e);var i=n.filter((function(t){return t.roomJID===e}));if(ke(!0),!y&&i.length<=10&&i.length>0){var r=i[0].id;u.ZP.getPaginatedArchive(e,String(r),50)}},Pe=function(e){var t=n.filter((function(t){return t.roomJID===e})).slice(-1);return y&&t.length<=0?"Loading...":t.length>0?t[0].body:"No messages yet"},Je=function(e){var t=n.filter((function(t){return t.roomJID===e})).slice(-1);return t.length<=0?"":(0,h.Z)(new Date(t[0].date),"H:mm")},Ke=function(e){if(L.trim().length>0){var t="";null!==C&&void 0!==C&&C.profileImage&&(t=null===C||void 0===C?void 0:C.profileImage);var n=function(e){var t=e;return(0===(t=(t=(t=t.replace(/<br>/gi,"\n")).replace(/<p.*>/gi,"\n")).replace(/<(?:.|\s)*?>/g,"")).trim().length?(new DOMParser).parseFromString(e,"text/html"):(new DOMParser).parseFromString(t,"text/html")).body.textContent||""}(v.sanitize(L));n.trim().length>0&&u.ZP.sendMessage(G,i.firstName,i.lastName,t,i.walletAddress,"object"===typeof e?e.value:n,"object"===typeof e?e.notDisplayedValue:null)}},Ee=function(e){ve({headline:"File is loading, please wait...",description:""}),ce(!0);var t=new FormData;t.append("files",e),(0,f.cT)(t).then((function(e){var t="";null!==C&&void 0!==C&&C.profileImage&&(t=null===C||void 0===C?void 0:C.profileImage),e.data.results.map(function(){var e=(0,l.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={firstName:i.firstName,lastName:i.lastName,walletAddress:i.walletAddress,chatName:te.name,userAvatar:t,createdAt:n.createdAt,expiresAt:n.expiresAt,fileName:n.filename,isVisible:n.isVisible,location:n.location,locationPreview:n.locationPreview,mimetype:n.mimetype,originalName:n.originalname,ownerKey:n.ownerKey,size:n.size,duration:null===n||void 0===n?void 0:n.duration,updatedAt:n.updatedAt,userId:n.userId,waveForm:"",attachmentId:n._id,wrappable:!0},u.ZP.sendMediaMessageStanza(G,r),ce(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})).catch((function(e){console.log(e),ve({headline:"Error",description:"An error occurred while uploading the file"}),pe(!0)})),ie.current&&(ie.current.value="")};return(0,r.useEffect)((function(){var e=setTimeout((function(){u.ZP.pausedComposing(i.walletAddress,te.jid)}),1e3);return function(){return clearTimeout(e)}}),[L]),(0,r.useEffect)((function(){w&&(je&&"none"!==je&&""!==je&&w.split("@")[0]!==je||(w.split("@")[1]?Le(w):Le(w+"@conference.dev.dxmpp.com"))),w.split("@")[0]!==je&&"none"!==je&&""!==je&&(m.K.getState().setCurrentUntrackedChatRoom(je),Le(je)),window.onblur=function(){m.K.getState().setCurrentUntrackedChatRoom("")},window.onfocus=function(){G&&(m.K.getState().setCurrentUntrackedChatRoom(G),m.K.getState().clearCounterChatRoom(G))}}),[G]),(0,r.useEffect)((function(){var e=n.filter((function(e){return e.roomJID===G}));if(!y&&e.length>0&&e.length<=51&&G&&be){var t=e[0];e.length>=10&&e.length<15&&t.data.isSystemMessage?(ke(!1),u.ZP.getPaginatedArchive(G,String(t.id),5)):1===e.length&&(ke(!1),u.ZP.getPaginatedArchive(G,String(t.id),50))}}),[n]),(0,T.jsxs)(d.Z,{style:{paddingBlock:"20px",height:"100%"},children:[(0,T.jsxs)(j.tz,{responsive:!0,children:[(0,T.jsxs)(j.YE,{position:"left",scrollable:!1,children:[(0,T.jsx)(j.ol,{placeholder:"Search..."}),(0,T.jsx)(j.p7,{loading:y,children:(Ae=o,Re=Ce,Re===z.hx.official?Ae.filter((function(e){var t,n=null===e||void 0===e||null===(t=e.jid)||void 0===t?void 0:t.split("@")[0];return z.Ey[n]})):Ae).map((function(e){return(0,T.jsx)(j.ri,{active:e.jid===G,unreadCnt:e.unreadMessages,onClick:function(){return Le(e.jid)},name:e.name,info:Pe(e.jid),lastActivityTime:Je(e.jid),children:(0,T.jsx)(j.qE,{src:"none"!==e.room_background?e.room_background:"https://icotar.com/initials/"+e.name})},e.jid)}))})]}),(0,T.jsx)("div",(0,s.Z)((0,s.Z)({},De()),{},{style:{width:"100%",height:"100%"},children:(0,T.jsxs)(j.uU,{children:[!!te&&(0,T.jsxs)(j.BU,{onClick:function(){ye.push("/chatDetails/"+w)},children:[(0,T.jsx)(j.BU.Back,{}),n.filter((function(e){return e.roomJID===G})).length>0&&(0,T.jsx)(j.BU.Content,{userName:te.name,info:"Active "+(0,g.Z)((0,x.Z)(new Date(n.filter((function(e){return e.roomJID===G})).slice(-1)[0].date),0),new Date,{addSuffix:!0})}),(0,T.jsx)(j.BU.Actions,{children:(0,T.jsx)(p.Z,{})})]}),(0,T.jsxs)(j.rN,{loadingMore:y,onYReachStart:function(){var e=n.filter((function(e){return e.roomJID===G}));if(!y){var t=e[0].id;u.ZP.getPaginatedArchive(G,String(t),10)}},disableOnYReachWhenNoScroll:!0,typingIndicator:!(null===(e=o.filter((function(e){return e.jid===G}))[0])||void 0===e||!e.composing)&&(0,T.jsx)(j.c2,{style:{opacity:".6"},content:null===(t=o.filter((function(e){return e.jid===G}))[0])||void 0===t?void 0:t.composing}),children:[n.filter((function(e){return e.roomJID===G})).map((function(e,t,n){var i,r,o,s,a=function(e,t,n){var i,r,o,s,a,l,c,d=null===(i=e[n-1])||void 0===i||null===(r=i.data.senderJID)||void 0===r?void 0:r.split("/")[0],u=null===(o=e[n+1])||void 0===o||null===(s=o.data.senderJID)||void 0===s?void 0:s.split("/")[0],m=null===(a=t.data.senderJID)||void 0===a?void 0:a.split("/")[0],f={position:"single",type:"single"};return e[n-1]&&t&&(0,h.Z)(new Date(null===(c=e[n-1])||void 0===c?void 0:c.date),"dd")!==(0,h.Z)(new Date(t.date),"dd")&&(f.separator=(0,h.Z)(new Date(t.date),"EEEE, dd LLLL yyyy")),d!==m&&u!==m?f:d!==m&&u===m?(f.position="first",f.type="first",f):d===m&&u===m?(f.position="normal",f.type="normal",f):d===m&&u!==m&&"false"===(null===(l=e[n-1])||void 0===l?void 0:l.data.isSystemMessage)?(f.position="single",f.type="last",f):f}(n,e,t);return"false"===e.data.isSystemMessage?(0,T.jsx)(U,{is:"Message",position:a,message:e,userJid:null===(i=u.ZP.client)||void 0===i||null===(r=i.jid)||void 0===r?void 0:r.toString(),buttonSender:Ke,chooseDirectRoom:Le},e.id):(0,T.jsx)(F,{is:"Message",message:e,userJid:null===(o=u.ZP.client)||void 0===o||null===(s=o.jid)||void 0===s?void 0:s.toString()},e.id)})),n.length<=0||!G&&(0,T.jsx)(j.rN.Content,{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",fontSize:"1.2em"},children:y?"Loading...":(0,T.jsx)("span",{children:!G&&"To get started, please select a chat room."})}),!y&&G&&n.filter((function(e){return e.roomJID===G})).length<=0&&(0,T.jsx)(j.rN.Content,{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",fontSize:"1.2em"},children:"Message list is empty"})]}),!(null===te||void 0===te||!te.name)&&(0,T.jsxs)("div",{is:"MessageInput",children:[(0,T.jsx)(j.Ru,{onPaste:function(e){var t=Array.from(e.clipboardData.items).find((function(e){return/^image\//.test(e.type)}));if(t){var n=t.getAsFile();Ee(n)}},placeholder:"Type message here",onChange:function(e){M(e),u.ZP.isComposing(i.walletAddress,te.jid,i.firstName+" "+i.lastName)},onSend:Ke,onAttachClick:function(){return ie.current.click()}}),(0,T.jsx)("input",{type:"file",name:"file",id:"file",onChange:function(e){return Ee(e.target.files[0])},ref:ie,style:{display:"none"}})]})]})}))]}),(0,T.jsxs)(N.Z,{fullScreen:oe,open:le,onClose:function(){return ce(!0)},"aria-labelledby":"responsive-dialog-title",children:[(0,T.jsx)(B.Z,{id:"responsive-dialog-title",children:xe.headline}),(0,T.jsx)(I.Z,{children:fe&&xe.description.length>0?(0,T.jsx)(O.Z,{children:xe.description}):(0,T.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,T.jsx)(H.Z,{})})}),fe?(0,T.jsx)(V.Z,{children:(0,T.jsx)(S.Z,{onClick:function(){return ce(!1)},autoFocus:!0,children:"Close"})}):null]}),(0,T.jsx)(de,{open:K||Ne,chatId:G.split("@")[0],onClose:function(){E(!1),Ne&&Se("")}})]})}function me(){return(0,T.jsx)(o.Z,{maxWidth:"xl",style:{height:"calc(100vh - 68px)"},children:(0,T.jsx)(ue,{})})}}}]);
//# sourceMappingURL=463.44eb9ee6.chunk.js.map