!function(e){var t={};function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.onOOCEnter=g,t.onEnter=f,t.musiclist_click=y,t.changeMusicVolume=v,t.changeSFXVolume=E,t.changeBlipVolume=I,t.changeCharacter=b,t.imgError=_,t.demoError=k,t.ReconnectButton=w,t.RetryButton=x,t.pickchar=M,t.pickemotion=T,t.toggleshout=S;var o={};location.search.substr(1).split("&").forEach(function(e){o[e.split("=")[0]]=e.split("=")[1]});var s=o.ip,a=o.mode,l=o.asset||"http://assets.aceattorneyonline.com/base/",r=l+"sounds/music/",u=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(u=!0);var d=0,m=function(){function e(t){var n=this;c(this,e),this.serv=new WebSocket("ws://"+t),this.serv.onopen=function(e){return n.onOpen(e)},this.serv.onclose=function(e){return n.onClose(e)},this.serv.onmessage=function(e){return n.onMessage(e)},this.serv.onerror=function(e){return n.onError(e)},this.playerID=1,this.charID=-1,this.chars=[],this.emotes=[],this.selectedEmote=-1,this.checkUpdater=null,this.musicList=Object(),this.handlers={MS:function(e){return n.handleMS(e)},CT:function(e){return n.handleCT(e)},MC:function(e){return n.handleMC(e)},RMC:function(e){return n.handleRMC(e)},CI:function(e){return n.handleCI(e)},SC:function(e){return n.handleSC(e)},EI:function(e){return n.handleEI(e)},EM:function(e){return n.handleEM(e)},SM:function(e){return n.handleSM(e)},music:function(e){return n.handlemusic(e)},DONE:function(e){return n.handleDONE(e)},BN:function(e){return n.handleBN(e)},NBG:function(e){return n.handleNBG(e)},HP:function(e){return n.handleHP(e)},ID:function(e){return n.handleID(e)},PN:function(e){return n.handlePN(e)},SI:function(e){return n.handleSI(e)},CharsCheck:function(e){return n.handleCharsCheck(e)},PV:function(e){return n.handlePV(e)}}}return i(e,[{key:"me",value:function(){return this.chars[this.charID]}},{key:"myEmote",value:function(){return this.emotes[this.selectedEmote]}},{key:"sendOOC",value:function(e){this.serv.send("CT#web"+this.playerID+"#"+O(e)+"#%")}},{key:"sendIC",value:function(e,t,n,i,c,o,s,a,l){this.serv.send("MS#chat#"+e+"#"+t+"#"+n+"#"+O(i)+"#"+c+"#"+o+"#"+s+"#"+this.charID+"#"+a+"#"+d+"#0#0#0#0#%")}},{key:"sendMusicChange",value:function(e){this.serv.send("MC#"+e+"#"+this.charID+"#%")}},{key:"sendLeaveRoom",value:function(){this.serv.send("FC#%")}},{key:"joinServer",value:function(){var e=this;this.serv.send("HI#"+navigator.userAgent+"#%"),this.serv.send("ID#webAO#2.4.5#%"),this.CHECKupdater=setInterval(function(){return e.sendCheck},5e3)}},{key:"sendCharacter",value:function(e){this.serv.send("CC#"+this.playerID+"#"+e+"#web#%")}},{key:"sendMusic",value:function(e){this.serv.send("MC#"+e)}},{key:"sendCheck",value:function(){this.serv.send("CH#"+this.charID+"#%")}},{key:"onOpen",value:function(e){"join"==a?L.joinServer():document.getElementById("client_loading").style.display="none"}},{key:"onClose",value:function(e){document.getElementById("client_error").style.display="block",this.cleanup()}},{key:"onMessage",value:function(e){var t=e.data;console.debug(t);var n=t.split("%")[0].split("#"),i=n[0],c=this.handlers[i];void 0!==c?c(n):console.warn("Invalid packet header "+i)}},{key:"onError",value:function(e){document.getElementById("client_error").style.display="block",this.cleanup()}},{key:"cleanup",value:function(){clearInterval(this.checkUpdater)}},{key:"handleMS",value:function(e){if(e[4]!=H.chatmsg.content){document.getElementById("client_inner_chat").innerHTML="";for(var t={pre:escape(e[2]),character:-1,preanim:escape(e[2]),nameplate:e[3],name:e[3],speaking:"(b)"+escape(e[4]),silent:"(a)"+escape(e[4]),content:e[5],side:e[6],sound:escape(e[7]),type:e[8],snddelay:e[10],objection:e[11],evidence:e[12],flash:e[14],color:e[15],isnew:!0},n=0;n<this.chars.length;n++)if(this.chars[n].name==e[3]){t.character=n;break}H.say(t)}}},{key:"handleCT",value:function(e){document.getElementById("client_ooclog").innerHTML=document.getElementById("client_ooclog").innerHTML+e[1]+": "+e[2]+"\r\n"}},{key:"handleMC",value:function(e){(N.pause(),N.src=r+e[1],N.play(),e[2]>=0)?C(this.chars[e[2]].name+" changed music to "+e[1]):C("The music was changed to "+e[1])}},{key:"handleRMC",value:function(e){N.pause(),(N=new Audio(this.musicList[e[1]])).totime=e[1],N.offset=(new Date).getTime()/1e3,N.addEventListener("loadedmetadata",function(){N.currentTime+=parseFloat(N.totime+((new Date).getTime()/1e3-N.offset)).toFixed(3),N.play()},!1)}},{key:"handleCI",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Character "+e[1],this.serv.send("AN#"+(e[1]/10+1)+"#%");for(var t=2;t<e.length-1;t++)if(t%2==0){var n=e[t].split("&");this.chars[e[t-1]]={name:n[0],desc:n[1],evidence:n[3],icon:l+"characters/"+escape(n[0])+"/char_icon.png"}}}},{key:"handleSC",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Characters";for(var t=1;t<e.length-1;t++){var n=e[t].split("&");this.chars[t-1]={name:n[0],desc:n[1],evidence:n[3],icon:l+"characters/"+escape(n[0])+"/char_icon.png"}}this.serv.send("RM#%")}},{key:"handleEI",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Evidence "+e[1],this.serv.send("RM#%")}},{key:"handleEM",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Music "+e[1],this.serv.send("AM#"+(e[1]/10+1)+"#%");for(var t=document.getElementById("client_musiclist"),n=2;n<e.length-1;n++)if(n%2==0){var i=document.createElement("OPTION");i.text=e[n],t.options.add(i)}}},{key:"handleSM",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Music ";for(var t=document.getElementById("client_musiclist"),n=1;n<e.length-1;n++){var i=document.createElement("OPTION");i.text=e[n],t.options.add(i)}this.serv.send("RD#%")}},{key:"handlemusic",value:function(e){for(var t=0;t<e.length/2;t++)this.musicList[e[2*t]]=e[2*t+1]}},{key:"handleDONE",value:function(e){document.getElementById("client_loading").style.display="none",document.getElementById("client_charselect").style.display="block"}},{key:"handleBN",value:function(e){H.bgname=escape(e[1])}},{key:"handleNBG",value:function(e){}},{key:"handleHP",value:function(e){1==e[1]?document.getElementById("client_defense_hp").style.clip="rect(0px,"+90*e[2]/10+"px,20px,0px)":document.getElementById("client_prosecutor_hp").style.clip="rect(0px,"+90*e[2]/10+"px,20px,0px)"}},{key:"handleID",value:function(e){this.playerID=e[1]}},{key:"handlePN",value:function(e){this.serv.send("askchaa#%")}},{key:"handleSI",value:function(e){u?this.serv.send("askchar2#%"):this.serv.send("RC#%")}},{key:"handleCharsCheck",value:function(e){document.getElementById("client_chartable").innerHTML="";for(var t=0;t<this.chars.length;t++){if(t%8==0)var n=document.createElement("TR");var i=document.createElement("TD"),c=void 0,o=this.chars[t].icon;c="-1"==e[t+1]?" dark":"",i.innerHTML="<img class='demothing"+c+"' id='demo_"+t+"' src='"+o+"' alt='"+this.chars[t].desc+"' onclick='pickchar("+t+")' onerror='demoError(this);'>",n.appendChild(i),t%8==0&&document.getElementById("client_chartable").appendChild(n)}B("def")}},{key:"handlePV",value:function(e){this.charID=e[3],document.getElementById("client_charselect").style.display="none";var t=this.me(),n=this.emotes,i=new XMLHttpRequest;i.open("GET",l+"characters/"+escape(this.me().name)+"/char.ini",!0),i.responseType="text",i.onload=function(e){if(200==this.status){var i=this.responseText,c=p.parse(i);t.side=c.Options.side;for(var o=1;o<c.Emotions.number;o++){var s=c.Emotions[o].split("#"),a="0",r="0";void 0!==c.SoundN&&(a=c.SoundN[o]),void 0!==c.SoundT&&(r=c.SoundT[o]),n[o]={desc:s[0],speaking:s[1],silent:s[2],zoom:s[3],sfx:a,sfxdelay:r,button_off:l+"characters/"+escape(t.name)+"/emotions/button"+o+"_off.png",button_on:l+"characters/"+escape(t.name)+"/emotions/button"+o+"_on.png"},document.getElementById("client_emo").innerHTML+="<img src='"+n[o].button_off+"' id='emo_"+o+"' alt='"+n[o].desc+"' class='client_button' onclick='pickemotion("+o+")'>"}T(1)}},i.send()}}]),e}(),h=function(){function e(){c(this,e),this.textnow="",this.chatmsg={isnew:!1,content:"",objection:"0",sound:"",startspeaking:!1,side:null,color:"0",snddelay:0},this.blip=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.blip.volume=.5,this.womboblip=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.womboblip.volume=.5,this.comboblip=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.comboblip.volume=.5,this.combo=!1,this.sfxaudio=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.sfxplayed=0,this.updater=null,this.bgname="gs4",this.shoutTimer=0,this.textTimer=0}return i(e,[{key:"bgFolder",value:function(){return l+"background/"+this.bgname+"/"}},{key:"say",value:function(e){var t=this;this.chatmsg=e,C(e.nameplate+": "+e.content),B(e.side),this.textnow="",this.sfxplayed=0,this.textTimer=0,this.updater=setInterval(function(){return t.updateText()},80)}},{key:"updateText",value:function(){if(""==this.chatmsg.content.trim()?(document.getElementById("client_name").style.display="none",document.getElementById("client_chat").style.display="none"):(document.getElementById("client_name").style.display="block",document.getElementById("client_chat").style.display="block"),this.chatmsg.isnew){var e={1:"holdit",2:"takethat",3:"objection"}[this.chatmsg.objection];void 0!==e?(document.getElementById("client_char").src=l+"misc/"+e+".gif",this.chatmsg.sound="sfx-"+e,this.shoutTimer=800):this.shoutTimer=0,this.chatmsg.isnew=!1,this.chatmsg.startspeaking=!0}if(this.textTimer>=this.shoutTimer)if(this.chatmsg.startspeaking){B(this.chatmsg.side),document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.speaking+".gif",document.getElementById("client_name").style.fontSize=.7*document.getElementById("client_name").offsetHeight+"px",document.getElementById("client_chat").style.fontSize=.25*document.getElementById("client_chat").offsetHeight+"px",document.getElementById("client_name").innerHTML="<p>"+this.chatmsg.nameplate.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")+"</p>";var t="color: "+({0:"#ffffff",1:"#00ff00",2:"#ff0000",3:"#ffaa00",4:"#0000ff",5:"#ffff00",6:"#aa00aa"}[this.chatmsg.color]||"#ffffff");document.getElementById("client_inner_chat").style=t,this.chatmsg.startspeaking=!1}else if(this.textnow!=this.chatmsg.content){if(" "!=this.chatmsg.content.charAt(this.textnow.length))switch(this.combo=(this.combo+1)%2,this.combo){case 0:this.blip.play()}this.textnow=this.chatmsg.content.substring(0,this.textnow.length+1),document.getElementById("client_inner_chat").innerHTML=this.textnow,this.textnow==this.chatmsg.content&&(this.textTimer=0,clearInterval(this.updater),document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.silent+".gif")}!this.sfxplayed&&this.chatmsg.snddelay+this.shoutTimer>=this.textTimer&&(this.sfxaudio.pause(),this.sfxplayed=1,"0"!=this.chatmsg.sound&&"1"!=this.chatmsg.sound&&(this.sfxaudio.src=l+"sounds/general/"+escape(this.chatmsg.sound)+".wav",this.sfxaudio.play())),this.textTimer=this.textTimer+80}}]),e}(),p=function(){function e(){c(this,e)}return i(e,null,[{key:"parse",value:function(e){var t={section:/^\s*\[\s*([^\]]*)\s*\]\s*$/,param:/^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,comment:/^\s*;.*$/},n={},i=null;return e.split(/\r\n|\r|\n/).forEach(function(e){if(!t.comment.test(e)&&0!=e.length)if(t.param.test(e)){var c=e.match(t.param);i?n[i][c[1]]=c[2]:n[c[1]]=c[2]}else if(t.section.test(e)){var o=e.match(t.section);n[o[1]]={},i=o[1]}}),n}}]),e}();function g(e){13==e.keyCode&&(L.sendOOC(document.getElementById("client_oocinputbox").value),document.getElementById("client_oocinputbox").value="")}function f(e){if(13==e.keyCode){var t=L.me(),n=L.myEmote(),i="0",c="0";document.getElementById("sendsfx").checked&&(i=n.sfx,c=n.sfxdelay),L.sendIC(n.speaking,t.name,n.silent,document.getElementById("client_inputbox").value,t.side,i,n.zoom,c,d),document.getElementById("client_inputbox").value="",d&&(document.getElementById("button_"+d).className="client_button",d=0)}}function y(e){var t=document.getElementById("client_musiclist").value;L.sendMusicChange(t)}function v(){H.music.volume=document.getElementById("client_mvolume").value/100}function E(){H.sfxaudio.volume=document.getElementById("client_svolume").value/100}function I(){H.blip.volume=document.getElementById("client_bvolume").value/100,H.womboblip.volume=document.getElementById("client_bvolume").value/100,H.comboblip.volume=document.getElementById("client_bvolume").value/100}function b(e){L.sendLeaveRoom(),document.getElementById("client_charselect").style.display="block",document.getElementById("client_emo").innerHTML=""}function _(e){return e.onerror="",e.src="/misc/placeholder.gif",!0}function k(e){return e.onerror="",e.src="/misc/placeholder.png",!0}function B(e){var t,n=H.bgFolder();switch(document.getElementById("client_fg").style.display="none",document.getElementById("client_bench").style.display="none",e){case"def":document.getElementById("client_court").src=n+"defenseempty.png",document.getElementById("client_bench").style.display="block",document.getElementById("client_bench").src=n+"defensedesk.png",t="defense";break;case"pro":document.getElementById("client_court").src=n+"prosecutorempty.png",document.getElementById("client_bench").style.display="block",document.getElementById("client_bench").src=n+"prosecutiondesk.png",t="prosecution";break;case"hld":document.getElementById("client_court").src=n+"helperstand.png",t="defense";break;case"hlp":document.getElementById("client_court").src=n+"prohelperstand.png",t="prosecution";break;case"wit":document.getElementById("client_court").src=n+"witnessempty.png",document.getElementById("client_bench").style.display="block",document.getElementById("client_bench").src=n+"estrado.png",t="prosecution";break;case"jud":document.getElementById("client_court").src=n+"judgestand.png",t="prosecution"}5==H.chatmsg.type&&(document.getElementById("client_bench").style.display="none",document.getElementById("client_court").src=l+"themes/default/"+t+"_speedlines.gif")}function w(){(L=new m(s))&&(a="join",document.getElementById("client_error").style.display="none")}function x(){L.joinServer()}function C(e){document.getElementById("client_log").appendChild(document.createTextNode(e))}function M(e){e<1e3?L.sendCharacter(e):(document.getElementById("client_charselect").style.display="none",document.getElementById("client_inputbox").style.display="none",document.getElementById("client_emo").style.display="none")}function T(e){-1!=L.selectedEmote&&(document.getElementById("emo_"+L.selectedEmote).src=L.myEmote().button_off),L.selectedEmote=e,document.getElementById("emo_"+e).src=L.myEmote().button_on}function S(e){e==d?(document.getElementById("button_"+e).className="client_button",d=0):(document.getElementById("button_"+e).className="client_button dark",d&&(document.getElementById("button_"+d).className="client_button"),d=e)}function O(e){return e.replace(/#/g,"<pound>").replace(/&/g,"<and>").replace(/%/g,"<percent>").replace(/\$/g,"<dollar>")}window.onOOCEnter=g,window.onEnter=f,window.musiclist_click=y,window.changeMusicVolume=v,window.changeSFXVolume=E,window.changeBlipVolume=I,window.changeCharacter=b,window.imgError=_,window.demoError=k,window.ReconnectButton=w,window.RetryButton=x,window.pickchar=M,window.pickemotion=T,window.toggleshout=S,void 0===String.prototype.trim&&(String.prototype.trim=function(){return String(this).replace(/^\s+|\s+$/g,"")});var L=new m(s),H=new h,N=new Audio;N.play()}]);
//# sourceMappingURL=client.b.js.map