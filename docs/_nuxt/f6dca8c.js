(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{266:function(e,t,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(104).default)("43c3a3b6",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n.r(t);var o=n(280),r=n.n(o);for(var l in o)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(l);t.default=r.a},280:function(e,t){},281:function(e,t,n){"use strict";n(266)},282:function(e,t,n){var o=n(103)(!1);o.push([e.i,"\n#world[data-v-505bc326] {\n  pointer-events: none;\n  position: fixed;\n  z-index: 0;\n}\n",""]),e.exports=o},299:function(e,t,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(104).default)("13c53f7f",content,!0,{sourceMap:!1})},301:function(e,t,n){"use strict";n.r(t);var o=n(131),r=n(132),l=n(260),c=function(){function e(t){Object(o.a)(this,e),this.scene=null,this.camera=null,this.renderer=null,this.size={windowW:null,windowH:null},this.rotationX=0,this.r=0,this.g=1,this.b=1,this.props=t,this.init(this.props.$canvas)}return Object(r.a)(e,[{key:"init",value:function(e){this.setSize(),this.scene=new l.k,this.camera=new l.i(75,this.size.windowW/this.size.windowH,.1,1e3),this.camera.position.set(0,0,25),this.camera.lookAt(this.scene.position),this.renderer=new l.m({canvas:e}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(1710618),this.renderer.setSize(this.size.windowW,this.size.windowH),this.material=new l.f({wireframe:!0}),this.octahedron=new l.e(new l.h(10,3),this.material),this.octahedron.position.set(0,0,0),this.scene.add(this.octahedron),this.scrollAll=document.documentElement.scrollHeight-document.documentElement.clientHeight,window.addEventListener("scroll",this.onScroll.bind(this)),window.addEventListener("resize",this.resize.bind(this)),this.loop()}},{key:"setSize",value:function(){this.size={windowW:window.innerWidth,windowH:window.innerHeight}}},{key:"resize",value:function(){this.setSize(),this.camera.aspect=this.size.windowW/this.size.windowH,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.windowW,this.size.windowH)}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"loop",value:function(){this.octahedron.rotation.y+=.01,this.octahedron.rotation.x=this.rotationX,this.material.color.setRGB(this.r,this.g,this.b),this.render(),requestAnimationFrame(this.loop.bind(this))}},{key:"onScroll",value:function(){this.rotationX=Math.PI*(document.documentElement.scrollTop/this.scrollAll),this.r=document.documentElement.scrollTop/this.scrollAll,this.g=1-document.documentElement.scrollTop/this.scrollAll,this.b=1-document.documentElement.scrollTop/this.scrollAll/2,console.log(this.r),console.log(this.g),console.log(this.b)}}]),e}(),d={name:"artwork1",data:function(){return{}},computed:{},created:function(){},mounted:function(){this.artworkGL=new c({$canvas:this.$refs.canvas})},destroyed:function(){},methods:{}},m=(n(281),n(43)),component=Object(m.a)(d,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{id:"world"}})}),[],!1,null,"505bc326",null);t.default=component.exports},412:function(e,t,n){"use strict";n(299)},413:function(e,t,n){var o=n(103)(!1);o.push([e.i,"\n.content[data-v-11f5ab9e] {\n\twidth: 100%;\n}\narticle[data-v-11f5ab9e] {\n\tposition: relative;\n\tz-index: 1;\n\tpadding: 80px 20px;\n\twidth: 100%;\n}\nheader[data-v-11f5ab9e],\nfooter[data-v-11f5ab9e] {\n\ttext-align: center;\n\tcolor: #FFF;\n}\nmain[data-v-11f5ab9e] {\n\tmargin-bottom: 120px;\n}\nsection[data-v-11f5ab9e] {\n\twidth: 100%;\n\tmax-width: 900px;\n\tpadding: 20px;\n\tmargin: 60px auto 0;\n\tbackground-color: rgba(32, 43, 68, 0.6);\n\tcolor: #FFF;\n}\np[data-v-11f5ab9e] {\n\ttext-align: justify;\n}\n",""]),e.exports=o},418:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"content"},[t("artwork1"),e._m(0)],1)},r=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("article",[t("header",[t("h1",[e._v("TITLE")])]),t("main",[t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("section",[t("h2",[e._v("SUB TITLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])]),t("footer",[t("small",[e._v("footer content")])])])}]},421:function(e,t,n){"use strict";n.r(t);var o=n(418),r=n(279);for(var l in r)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(l);n(412);var c=n(43),component=Object(c.a)(r.default,o.a,o.b,!1,null,"11f5ab9e",null);t.default=component.exports,installComponents(component,{Artwork1:n(301).default})}}]);