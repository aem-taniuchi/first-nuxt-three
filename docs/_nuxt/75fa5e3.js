(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{264:function(e,n,t){var content=t(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(104).default)("6d0bddcc",content,!0,{sourceMap:!1})},277:function(e,n,t){"use strict";t(264)},278:function(e,n,t){var o=t(103)(!1);o.push([e.i,"\n.content[data-v-0f474188] {\n\twidth: 100%;\n  height: 100vh;\n  overflow: hidden;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n#world[data-v-0f474188] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.device-orien-modal[data-v-0f474188] {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n}\n.device-orien-modal-inner[data-v-0f474188] {\n  width: 90%;\n  max-width: 350px;\n  box-sizing: border-box;\n  height: auto;\n  padding: 1.3rem;\n  margin: auto;\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n.device-orien-modal-button[data-v-0f474188] {\n  margin: 1rem auto auto;\n  padding: 0.8rem 1.3rem;\n  background: black;\n  color: white;\n  width: 130px;\n}\n.is-hidden[data-v-0f474188] {\n  display: none;\n}\n.canvas[data-v-0f474188] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.camera[data-v-0f474188] {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n/* .shutter-button {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 2;\n  background-color: #c01111;\n  color: #FFF;\n  padding: 6px 12px;\n  border-radius: 3px;\n  font-size: 16px;\n  line-height: 1;\n} */\n",""]),e.exports=o},301:function(e,n,t){"use strict";t.r(n);var o=t(131),r=t(132),d=(t(19),t(46),t(37),t(260)),c=(t(270),t(266)),l=t(272),v=t(273),h=t(262);function f(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(h.a)(e);if(n){var r=Object(h.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(v.a)(this,t)}}var w=new d.l(0,0,1),m=new d.b,x=new d.j,y=new d.j(-Math.sqrt(.5),0,0,Math.sqrt(.5)),O={type:"change"},k=function(e){Object(l.a)(t,e);var n=f(t);function t(object){var e;Object(o.a)(this,t),e=n.call(this),!1===window.isSecureContext&&console.error("THREE.DeviceOrientationControls: DeviceOrientationEvent is only available in secure contexts (https)");var r=Object(c.a)(e),l=new d.j;e.object=object,e.object.rotation.reorder("YXZ"),e.enabled=!0,e.deviceOrientation={},e.screenOrientation=0,e.alphaOffset=0;var v=function(e){r.deviceOrientation=e},h=function(){r.screenOrientation=window.orientation||0};return e.connect=function(){h(),void 0!==window.DeviceOrientationEvent&&"function"==typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((function(e){"granted"==e&&(window.addEventListener("orientationchange",h),window.addEventListener("deviceorientation",v))})).catch((function(e){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",e)})):(window.addEventListener("orientationchange",h),window.addEventListener("deviceorientation",v)),r.enabled=!0},e.disconnect=function(){window.removeEventListener("orientationchange",h),window.removeEventListener("deviceorientation",v),r.enabled=!1},e.update=function(){if(!1!==r.enabled){var e=r.deviceOrientation;if(e){var n=e.alpha?d.d.degToRad(e.alpha)+r.alphaOffset:0,t=e.beta?d.d.degToRad(e.beta):0,o=e.gamma?d.d.degToRad(e.gamma):0,c=r.screenOrientation?d.d.degToRad(r.screenOrientation):0;!function(e,n,t,o,r){m.set(t,n,-o,"YXZ"),e.setFromEuler(m),e.multiply(y),e.multiply(x.setFromAxisAngle(w,-r))}(r.object.quaternion,n,t,o,c),8*(1-l.dot(r.object.quaternion))>1e-6&&(l.copy(r.object.quaternion),r.dispatchEvent(O))}}},e.dispose=function(){r.disconnect()},e.connect(),e}return Object(r.a)(t)}(d.c),j=function(){function e(n){var t=this;Object(o.a)(this,e),this.scene=null,this.camera=null,this.renderer=null,this.object=null,this.controls=null,this.videoInput=null,this.videoStream=null,this.size={windowW:null,windowH:null},this.rotationX=0,this.rotationY=0,this.props=n,this.checkDeviceOrien(this.props.$modal,this.props.$modal_button).then((function(){t.init(t.props.$canvas),t.initVideo(t.props.$video)})).catch((function(e){alert("モーションセンサーの使用が可能な端末からアクセスしてください。")}))}return Object(r.a)(e,[{key:"isIos",value:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("iphone")>=0||e.indexOf("ipad")>=0||e.indexOf("ipod")>=0}},{key:"isGyro",value:function(){return window.DeviceOrientationEvent&&"ontouchstart"in window}},{key:"checkDeviceOrien",value:function(e,n){var t=this;return new Promise((function(o,r){if(t.isGyro()||r("resolve"),t.isIos()||o("resolve"),t.isIos()){window.addEventListener("deviceorientation",(function n(){hideDeviceOrienModal(e),window.removeEventListener("deviceorientation",n,!1),o("resolve")}),!1);e.classList.remove("is-hidden"),n.addEventListener("click",(function(){DeviceMotionEvent&&DeviceMotionEvent.requestPermission&&"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then((function(n){console.log(n),"granted"===n?(t.hideDeviceOrienModal(e),o("resolve")):(alert("モーションセンサーの使用が拒否されました。\nこのページを楽しむには、デバイスモーションセンサーの使用を許可する必要があります。\nSafariのアプリを再起動して、モーションセンサーの使用（「動作と方向」へのアクセス）を許可をしてください。"),r("resolve"))}))}))}}))}},{key:"hideDeviceOrienModal",value:function(e){e.classList.add("is-hidden")}},{key:"init",value:function(e){this.size={windowW:window.innerWidth,windowH:window.innerHeight},this.setScene(),this.setCamera(),this.setObject(),this.setRenderer(e)}},{key:"initVideo",value:function(e){var n=this;e.addEventListener("loadedmetadata",this.adjustVideo(e)),navigator.mediaDevices.enumerateDevices().then((function(t){n.videoInput=t.filter((function(e){return"videoinput"===e.kind})),n.getVideo(e)}))}},{key:"setVideo",value:function(){return{audio:!1,video:{deviceId:this.videoInput,facingMode:"environment",width:{min:1280,max:1920},height:{min:720,max:1080}}}}},{key:"getVideo",value:function(e){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()})),navigator.mediaDevices.getUserMedia(this.setVideo()).then((function(n){e.srcObject=n,e.play(),this.videoStream=n})).catch((function(e){console.log(e)}))}},{key:"adjustVideo",value:function(e){var n=window.innerWidth,t=window.innerHeight,o=e.videoWidth/e.videoHeight;if(n/t<o){var r=o*t;e.style.width=r+"px",e.style.marginLeft=-(r-n)/2+"px",e.style.height=t+"px",e.style.marginTop="0px"}else{var d=1/(o/n);e.style.height=d+"px",e.style.marginTop=-(d-t)/2+"px",e.style.width=n+"px",e.style.marginLeft="0px"}}},{key:"setScene",value:function(){this.scene=new d.k}},{key:"setCamera",value:function(){this.camera=new d.i(45,this.size.windowW/this.size.windowH,.1,30),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.controls=new k(this.camera,!0)}},{key:"setObject",value:function(){var e=new d.a(1,1,1),n=new d.g;this.object=new d.e(e,n),this.object.position.set(0,0,0),this.scene.add(this.object)}},{key:"setRenderer",value:function(e){var n=this;this.renderer=new d.m({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,canvas:e}),this.renderer.setClearColor(0,0),this.renderer.setSize(this.size.windowW,this.size.windowH),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setAnimationLoop((function(){n.render()}))}},{key:"render",value:function(){this.object.rotation.x+=.01,this.object.rotation.y+=.01,this.controls.update(),this.renderer.render(this.scene,this.camera)}}]),e}(),E={name:"artwork2",data:function(){return{}},computed:{},created:function(){},mounted:function(){this.artworkGL=new j({$canvas:this.$refs.canvas,$modal:this.$refs.modal,$modal_button:this.$refs.modal_button,$video:this.$refs.video})},destroyed:function(){},methods:{}},D=(t(277),t(43)),component=Object(D.a)(E,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"content"},[n("canvas",{ref:"canvas",attrs:{id:"world"}}),n("video",{ref:"video",staticClass:"video",attrs:{src:"",playsinline:""}}),n("div",{ref:"modal",staticClass:"device-orien-modal is-hidden"},[n("div",{staticClass:"device-orien-modal-inner"},[e._m(0),n("button",{ref:"modal_button",staticClass:"device-orien-modal-button"},[e._v("OK")])])])])}),[function(){var e=this,n=e._self._c;return n("p",[e._v("このページでは端末の向きと方向を取得します。"),n("br"),e._v("次に表示されるポップアップに従って「許可」を選択してください。")])}],!1,null,"0f474188",null);n.default=component.exports},423:function(e,n,t){"use strict";t.r(n);var o=t(43),component=Object(o.a)({},(function(){return(0,this._self._c)("artwork2")}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Artwork2:t(301).default})}}]);