(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(131),r=n(132),c=(n(19),n(45),n(34),n(260)),d=(n(267),n(263)),l=n(268),h=n(269),v=n(262);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(v.a)(e);if(t){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(h.a)(this,n)}}var w=new c.l(0,0,1),m=new c.b,O=new c.j,y=new c.j(-Math.sqrt(.5),0,0,Math.sqrt(.5)),j={type:"change"},E=function(e){Object(l.a)(n,e);var t=f(n);function n(object){var e;Object(o.a)(this,n),e=t.call(this),!1===window.isSecureContext&&console.error("THREE.DeviceOrientationControls: DeviceOrientationEvent is only available in secure contexts (https)");var r=Object(d.a)(e),l=new c.j;e.object=object,e.object.rotation.reorder("YXZ"),e.enabled=!0,e.deviceOrientation={},e.screenOrientation=0,e.alphaOffset=0;var h=function(e){r.deviceOrientation=e},v=function(){r.screenOrientation=window.orientation||0};return e.connect=function(){v(),void 0!==window.DeviceOrientationEvent&&"function"==typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((function(e){"granted"==e&&(window.addEventListener("orientationchange",v),window.addEventListener("deviceorientation",h))})).catch((function(e){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",e)})):(window.addEventListener("orientationchange",v),window.addEventListener("deviceorientation",h)),r.enabled=!0},e.disconnect=function(){window.removeEventListener("orientationchange",v),window.removeEventListener("deviceorientation",h),r.enabled=!1},e.update=function(){if(!1!==r.enabled){var e=r.deviceOrientation;if(e){var t=e.alpha?c.d.degToRad(e.alpha)+r.alphaOffset:0,n=e.beta?c.d.degToRad(e.beta):0,o=e.gamma?c.d.degToRad(e.gamma):0,d=r.screenOrientation?c.d.degToRad(r.screenOrientation):0;!function(e,t,n,o,r){m.set(n,t,-o,"YXZ"),e.setFromEuler(m),e.multiply(y),e.multiply(O.setFromAxisAngle(w,-r))}(r.object.quaternion,t,n,o,d),8*(1-l.dot(r.object.quaternion))>1e-6&&(l.copy(r.object.quaternion),r.dispatchEvent(j))}}},e.dispose=function(){r.disconnect()},e.connect(),e}return Object(r.a)(n)}(c.c),k=function(){function e(t){var n=this;Object(o.a)(this,e),this.scene=null,this.camera=null,this.renderer=null,this.object=null,this.controls=null,this.videoInput=null,this.videoStream=null,this.size={windowW:null,windowH:null},this.rotationX=0,this.rotationY=0,this.props=t,this.checkDeviceOrien(this.props.$modal,this.props.$modal_button).then((function(){n.init(n.props.$canvas),n.initVideo(n.props.$video)})).catch((function(e){alert(e)}))}return Object(r.a)(e,[{key:"isIos",value:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("iphone")>=0||e.indexOf("ipad")>=0||e.indexOf("ipod")>=0}},{key:"checkDeviceOrien",value:function(e,t){var n=this;return new Promise((function(o,r){n.isIos()||o("resolve");window.addEventListener("deviceorientation",(function t(){hideDeviceOrienModal(e),window.removeEventListener("deviceorientation",t,!1),o("resolve")}),!1);e.classList.remove("is-hidden"),t.addEventListener("click",(function(){DeviceMotionEvent&&DeviceMotionEvent.requestPermission&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(t){console.log(t),"granted"===t?(n.hideDeviceOrienModal(e),o("resolve")):(alert("モーションセンサーの使用が拒否されました。\nこのページを楽しむには、デバイスモーションセンサーの使用を許可する必要があります。\nSafariのアプリを再起動して、モーションセンサーの使用（「動作と方向」へのアクセス）を許可をしてください。"),r("resolve"))})):alert("モーションセンサーの使用が可能な端末からアクセスしてください。")}))}))}},{key:"hideDeviceOrienModal",value:function(e){e.classList.add("is-hidden")}},{key:"init",value:function(e){this.size={windowW:window.innerWidth,windowH:window.innerHeight},this.setScene(),this.setCamera(),this.setObject(),this.setRenderer(e)}},{key:"initVideo",value:function(e){var t=this;e.addEventListener("loadedmetadata",this.adjustVideo(e)),navigator.mediaDevices.enumerateDevices().then((function(n){t.videoInput=n.filter((function(e){return"videoinput"===e.kind})),t.getVideo(e)}))}},{key:"setVideo",value:function(){return{audio:!1,video:{deviceId:this.videoInput,facingMode:"environment",width:{min:1280,max:1920},height:{min:720,max:1080}}}}},{key:"getVideo",value:function(e){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()})),navigator.mediaDevices.getUserMedia(this.setVideo()).then((function(t){e.srcObject=t,e.play(),this.videoStream=t})).catch((function(e){console.log(e),alert("カメラの使用が拒否されています。\nページを再読み込みして使用を許可するか、ブラウザの設定をご確認ください。")}))}},{key:"adjustVideo",value:function(e){var t=window.innerWidth,n=window.innerHeight,o=e.videoWidth/e.videoHeight;if(t/n<o){var r=o*n;e.style.width=r+"px",e.style.marginLeft=-(r-t)/2+"px",e.style.height=n+"px",e.style.marginTop="0px"}else{var c=1/(o/t);e.style.height=c+"px",e.style.marginTop=-(c-n)/2+"px",e.style.width=t+"px",e.style.marginLeft="0px"}}},{key:"setScene",value:function(){this.scene=new c.k}},{key:"setCamera",value:function(){this.camera=new c.i(45,this.size.windowW/this.size.windowH,.1,30),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.controls=new E(this.camera,!0)}},{key:"setObject",value:function(){var e=new c.a(1,1,1),t=new c.g;this.object=new c.e(e,t),this.object.position.set(0,0,0),this.scene.add(this.object)}},{key:"setRenderer",value:function(e){var t=this;this.renderer=new c.m({antialias:!0,alpha:!0,canvas:e}),this.renderer.setClearColor(0,0),this.renderer.setSize(this.size.windowW,this.size.windowH),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setAnimationLoop((function(){t.render()}))}},{key:"render",value:function(){this.object.rotation.x+=.01,this.object.rotation.y+=.01,this.controls.update(),this.renderer.render(this.scene,this.camera)}}]),e}()}}]);