(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{266:function(e,t,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(104).default)("43c3a3b6",content,!0,{sourceMap:!1})},281:function(e,t,n){"use strict";n(266)},282:function(e,t,n){var o=n(103)(!1);o.push([e.i,"\n#world[data-v-505bc326] {\n  pointer-events: none;\n  position: fixed;\n  z-index: 0;\n}\n",""]),e.exports=o},301:function(e,t,n){"use strict";n.r(t);var o=n(131),r=n(132),l=n(260),c=function(){function e(t){Object(o.a)(this,e),this.scene=null,this.camera=null,this.renderer=null,this.size={windowW:null,windowH:null},this.rotationX=0,this.r=0,this.g=1,this.b=1,this.props=t,this.init(this.props.$canvas)}return Object(r.a)(e,[{key:"init",value:function(e){this.setSize(),this.scene=new l.k,this.camera=new l.i(75,this.size.windowW/this.size.windowH,.1,1e3),this.camera.position.set(0,0,25),this.camera.lookAt(this.scene.position),this.renderer=new l.m({canvas:e}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(1710618),this.renderer.setSize(this.size.windowW,this.size.windowH),this.material=new l.f({wireframe:!0}),this.octahedron=new l.e(new l.h(10,3),this.material),this.octahedron.position.set(0,0,0),this.scene.add(this.octahedron),this.scrollAll=document.documentElement.scrollHeight-document.documentElement.clientHeight,window.addEventListener("scroll",this.onScroll.bind(this)),window.addEventListener("resize",this.resize.bind(this)),this.loop()}},{key:"setSize",value:function(){this.size={windowW:window.innerWidth,windowH:window.innerHeight}}},{key:"resize",value:function(){this.setSize(),this.camera.aspect=this.size.windowW/this.size.windowH,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.windowW,this.size.windowH)}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"loop",value:function(){this.octahedron.rotation.y+=.01,this.octahedron.rotation.x=this.rotationX,this.material.color.setRGB(this.r,this.g,this.b),this.render(),requestAnimationFrame(this.loop.bind(this))}},{key:"onScroll",value:function(){this.rotationX=Math.PI*(document.documentElement.scrollTop/this.scrollAll),this.r=document.documentElement.scrollTop/this.scrollAll,this.g=1-document.documentElement.scrollTop/this.scrollAll,this.b=1-document.documentElement.scrollTop/this.scrollAll/2,console.log(this.r),console.log(this.g),console.log(this.b)}}]),e}(),h={name:"artwork1",data:function(){return{}},computed:{},created:function(){},mounted:function(){this.artworkGL=new c({$canvas:this.$refs.canvas})},destroyed:function(){},methods:{}},d=(n(281),n(43)),component=Object(d.a)(h,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{id:"world"}})}),[],!1,null,"505bc326",null);t.default=component.exports}}]);