// threejs.org/license
(function(l,wa){"object"===typeof exports&&"undefined"!==typeof module?wa(exports):"function"===typeof define&&define.amd?define('three_js',["exports"],wa):wa(l.THREE={})})(this,function(l){function wa(){}function C(a,b){this.x=a||0;this.y=b||0}function O(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function ea(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function p(a,
b,c){this.x=a||0;this.y=b||0;this.z=c||0}function na(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function da(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:Af++});this.uuid=S.generateUUID();this.name="";this.image=void 0!==a?a:da.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:da.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==
e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new C(0,0);this.repeat=new C(1,1);this.center=new C(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new na;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function fa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function ib(a,
b,c){this.uuid=S.generateUUID();this.width=a;this.height=b;this.scissor=new fa(0,0,a,b);this.scissorTest=!1;this.viewport=new fa(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new da(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Gb(a,b,c){ib.call(this,
a,b,c);this.activeMipMapLevel=this.activeCubeFace=0}function jb(a,b,c,d,e,f,g,h,k,m,t,n){da.call(this,null,f,g,h,k,m,d,e,t,n);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function bb(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];da.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Hb(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=He[e];void 0===f&&(f=new Float32Array(e),
He[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Ie(a,b){var c=Je[b];void 0===c&&(c=new Int32Array(b),Je[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function Bf(a,b){a.uniform1f(this.addr,b)}function Cf(a,b){a.uniform1i(this.addr,b)}function Df(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function Ef(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,
b)}function Ff(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function Gf(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function Hf(a,b){void 0===b.elements?a.uniformMatrix3fv(this.addr,!1,b):(Ke.set(b.elements),a.uniformMatrix3fv(this.addr,!1,Ke))}function If(a,b){void 0===b.elements?a.uniformMatrix4fv(this.addr,!1,b):(Le.set(b.elements),a.uniformMatrix4fv(this.addr,!1,Le))}function Jf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||
Me,d)}function Kf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTextureCube(b||Ne,d)}function Oe(a,b){a.uniform2iv(this.addr,b)}function Pe(a,b){a.uniform3iv(this.addr,b)}function Qe(a,b){a.uniform4iv(this.addr,b)}function Lf(a){switch(a){case 5126:return Bf;case 35664:return Df;case 35665:return Ef;case 35666:return Ff;case 35674:return Gf;case 35675:return Hf;case 35676:return If;case 35678:case 36198:return Jf;case 35680:return Kf;case 5124:case 35670:return Cf;case 35667:case 35671:return Oe;
case 35668:case 35672:return Pe;case 35669:case 35673:return Qe}}function Mf(a,b){a.uniform1fv(this.addr,b)}function Nf(a,b){a.uniform1iv(this.addr,b)}function Of(a,b){a.uniform2fv(this.addr,Hb(b,this.size,2))}function Pf(a,b){a.uniform3fv(this.addr,Hb(b,this.size,3))}function Qf(a,b){a.uniform4fv(this.addr,Hb(b,this.size,4))}function Rf(a,b){a.uniformMatrix2fv(this.addr,!1,Hb(b,this.size,4))}function Sf(a,b){a.uniformMatrix3fv(this.addr,!1,Hb(b,this.size,9))}function Tf(a,b){a.uniformMatrix4fv(this.addr,
!1,Hb(b,this.size,16))}function Uf(a,b,c){var d=b.length,e=Ie(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||Me,e[a])}function Vf(a,b,c){var d=b.length,e=Ie(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||Ne,e[a])}function Wf(a){switch(a){case 5126:return Mf;case 35664:return Of;case 35665:return Pf;case 35666:return Qf;case 35674:return Rf;case 35675:return Sf;case 35676:return Tf;case 35678:return Uf;case 35680:return Vf;case 5124:case 35670:return Nf;
case 35667:case 35671:return Oe;case 35668:case 35672:return Pe;case 35669:case 35673:return Qe}}function Xf(a,b,c){this.id=a;this.addr=c;this.setValue=Lf(b.type)}function Yf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=Wf(b.type)}function Re(a){this.id=a;this.seq=[];this.map={}}function kb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=
h.length;for(Rd.lastIndex=0;;){var m=Rd.exec(h),t=Rd.lastIndex,n=m[1],v=m[3];"]"===m[2]&&(n|=0);if(void 0===v||"["===v&&t+2===k){h=g;e=void 0===v?new Xf(n,e,f):new Yf(n,e,f);h.seq.push(e);h.map[e.id]=e;break}else v=g.map[n],void 0===v&&(v=new Re(n),n=g,g=v,n.seq.push(g),n.map[g.id]=g),g=v}}}function G(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function qc(a,b,c,d,e,f,g,h,k){da.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function Zf(a,b,c,d,e){var f,g,h,k,m,t,n,v,r,q,
l,w,x,z,A,y,R,Oa;function Pa(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var rc,Sd,aa,Se,Y=new p,C=new ea,D=new p;this.render=function(u,p,md){if(0!==u.length){if(void 0===aa){var M=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),B=new Uint16Array([0,1,2,0,2,3]);rc=b.createBuffer();Sd=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,rc);b.bufferData(b.ARRAY_BUFFER,M,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Sd);b.bufferData(b.ELEMENT_ARRAY_BUFFER,
B,b.STATIC_DRAW);M=b.createProgram();B=b.createShader(b.VERTEX_SHADER);var P=b.createShader(b.FRAGMENT_SHADER);b.shaderSource(B,["precision "+e.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 center;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvUV = uvOffset + uv * uvScale;\n\tvec2 alignedPosition = ( position - center ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tvec4 mvPosition;\n\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\tfogDepth = - mvPosition.z;\n}"].join("\n"));
b.shaderSource(P,["precision "+e.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvec4 texture = texture2D( map, vUV );\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n\tif ( gl_FragColor.a < alphaTest ) discard;\n\tif ( fogType > 0 ) {\n\t\tfloat fogFactor = 0.0;\n\t\tif ( fogType == 1 ) {\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t\t} else {\n\t\t\tconst float LOG2 = 1.442695;\n\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\t\t}\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t}\n}"].join("\n"));
b.compileShader(B);b.compileShader(P);b.attachShader(M,B);b.attachShader(M,P);b.linkProgram(M);aa=M;R=b.getAttribLocation(aa,"position");Oa=b.getAttribLocation(aa,"uv");f=b.getUniformLocation(aa,"uvOffset");g=b.getUniformLocation(aa,"uvScale");h=b.getUniformLocation(aa,"rotation");k=b.getUniformLocation(aa,"center");m=b.getUniformLocation(aa,"scale");t=b.getUniformLocation(aa,"color");n=b.getUniformLocation(aa,"map");v=b.getUniformLocation(aa,"opacity");r=b.getUniformLocation(aa,"modelViewMatrix");
q=b.getUniformLocation(aa,"projectionMatrix");l=b.getUniformLocation(aa,"fogType");w=b.getUniformLocation(aa,"fogDensity");x=b.getUniformLocation(aa,"fogNear");z=b.getUniformLocation(aa,"fogFar");A=b.getUniformLocation(aa,"fogColor");b.getUniformLocation(aa,"fogDepth");y=b.getUniformLocation(aa,"alphaTest");M=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");M.width=8;M.height=8;B=M.getContext("2d");B.fillStyle="white";B.fillRect(0,0,8,8);Se=new qc(M)}c.useProgram(aa);c.initAttributes();
c.enableAttribute(R);c.enableAttribute(Oa);c.disableUnusedAttributes();c.disable(b.CULL_FACE);c.enable(b.BLEND);b.bindBuffer(b.ARRAY_BUFFER,rc);b.vertexAttribPointer(R,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(Oa,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Sd);b.uniformMatrix4fv(q,!1,md.projectionMatrix.elements);c.activeTexture(b.TEXTURE0);b.uniform1i(n,0);B=M=0;(P=p.fog)?(b.uniform3f(A,P.color.r,P.color.g,P.color.b),P.isFog?(b.uniform1f(x,P.near),b.uniform1f(z,P.far),b.uniform1i(l,1),
B=M=1):P.isFogExp2&&(b.uniform1f(w,P.density),b.uniform1i(l,2),B=M=2)):(b.uniform1i(l,0),B=M=0);for(var E=0,G=u.length;E<G;E++)P=u[E],P.modelViewMatrix.multiplyMatrices(md.matrixWorldInverse,P.matrixWorld),P.z=-P.modelViewMatrix.elements[14];u.sort(Pa);for(var I=[],Td=[],E=0,G=u.length;E<G;E++){P=u[E];var Q=P.material;if(!1!==Q.visible){P.onBeforeRender(a,p,md,void 0,Q,void 0);b.uniform1f(y,Q.alphaTest);b.uniformMatrix4fv(r,!1,P.modelViewMatrix.elements);P.matrixWorld.decompose(Y,C,D);I[0]=D.x;I[1]=
D.y;Td[0]=P.center.x-.5;Td[1]=P.center.y-.5;var la=0;p.fog&&Q.fog&&(la=B);M!==la&&(b.uniform1i(l,la),M=la);null!==Q.map?(b.uniform2f(f,Q.map.offset.x,Q.map.offset.y),b.uniform2f(g,Q.map.repeat.x,Q.map.repeat.y)):(b.uniform2f(f,0,0),b.uniform2f(g,1,1));b.uniform1f(v,Q.opacity);b.uniform3f(t,Q.color.r,Q.color.g,Q.color.b);b.uniform1f(h,Q.rotation);b.uniform2fv(k,Td);b.uniform2fv(m,I);c.setBlending(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,
Q.premultipliedAlpha);c.buffers.depth.setTest(Q.depthTest);c.buffers.depth.setMask(Q.depthWrite);c.buffers.color.setMask(Q.colorWrite);d.setTexture2D(Q.map||Se,0);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);P.onAfterRender(a,p,md,void 0,Q,void 0)}}c.enable(b.CULL_FACE);c.reset()}}}function N(){Object.defineProperty(this,"id",{value:$f++});this.uuid=S.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.flatShading=!1;this.vertexColors=0;this.opacity=
1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.overdraw=0;this.visible=!0;this.userData=
{};this.needsUpdate=!0}function cb(a){N.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function db(a){N.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new p;this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=
this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.lights=this.fog=!1;this.setValues(a)}function Va(a,b){this.min=void 0!==a?a:new p(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new p(-Infinity,-Infinity,-Infinity)}function Da(a,b){this.center=void 0!==a?a:new p;this.radius=void 0!==b?b:0}function xa(a,b){this.normal=void 0!==a?a:new p(1,0,0);this.constant=void 0!==b?b:0}function nd(a,b,c,d,e,f){this.planes=[void 0!==a?a:new xa,void 0!==b?b:new xa,void 0!==c?c:
new xa,void 0!==d?d:new xa,void 0!==e?e:new xa,void 0!==f?f:new xa]}function Te(a,b,c){function d(b,c,d,e,f,h){var g=b.geometry;var k=n;var m=b.customDepthMaterial;d&&(k=v,m=b.customDistanceMaterial);m?k=m:(m=!1,c.morphTargets&&(g&&g.isBufferGeometry?m=g.morphAttributes&&g.morphAttributes.position&&0<g.morphAttributes.position.length:g&&g.isGeometry&&(m=g.morphTargets&&0<g.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
b),b=b.isSkinnedMesh&&c.skinning,g=0,m&&(g|=1),b&&(g|=2),k=k[g]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(g=k.uuid,m=c.uuid,b=r[g],void 0===b&&(b={},r[g]=b),g=b[m],void 0===g&&(g=k.clone(),b[m]=g),k=g);k.visible=c.visible;k.wireframe=c.wireframe;k.side=null!=c.shadowSide?c.shadowSide:q[c.side];k.clipShadows=c.clipShadows;k.clippingPlanes=c.clippingPlanes;k.clipIntersection=c.clipIntersection;k.wireframeLinewidth=c.wireframeLinewidth;k.linewidth=c.linewidth;d&&k.isMeshDistanceMaterial&&
(k.referencePosition.copy(e),k.nearDistance=f,k.farDistance=h);return k}function e(c,h,g,k){var m;if(!1!==c.visible){if(c.layers.test(h.layers)&&(c.isMesh||c.isLine||c.isPoints)&&c.castShadow&&(!c.frustumCulled||f.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,c.matrixWorld);var n=b.update(c),v=c.material;if(Array.isArray(v))for(var r=n.groups,q=0,l=r.length;q<l;q++){var y=r[q];(m=v[y.materialIndex])&&m.visible&&(m=d(c,m,k,t,g.near,g.far),a.renderBufferDirect(g,null,
n,m,c,y))}else v.visible&&(m=d(c,v,k,t,g.near,g.far),a.renderBufferDirect(g,null,n,m,c,null))}c=c.children;n=0;for(v=c.length;n<v;n++)e(c[n],h,g,k)}}var f=new nd,g=new O,h=new C,k=new C(c,c),m=new p,t=new p,n=Array(4),v=Array(4),r={},q={0:1,1:0,2:2},l=[new p(1,0,0),new p(-1,0,0),new p(0,0,1),new p(0,0,-1),new p(0,1,0),new p(0,-1,0)],w=[new p(0,1,0),new p(0,1,0),new p(0,1,0),new p(0,1,0),new p(0,0,1),new p(0,0,-1)],x=[new fa,new fa,new fa,new fa,new fa,new fa];for(c=0;4!==c;++c){var z=0!==(c&1),A=
0!==(c&2),y=new cb({depthPacking:3201,morphTargets:z,skinning:A});n[c]=y;z=new db({morphTargets:z,skinning:A});v[c]=z}var R=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(b,c,d){if(!1!==R.enabled&&(!1!==R.autoUpdate||!1!==R.needsUpdate)&&0!==b.length){var n=a.state;n.disable(a.context.BLEND);n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0);n.setScissorTest(!1);for(var v,r=0,q=b.length;r<q;r++){var y=b[r];v=y.shadow;var u=y&&y.isPointLight;
if(void 0===v)console.warn("THREE.WebGLShadowMap:",y,"has no shadow.");else{var p=v.camera;h.copy(v.mapSize);h.min(k);if(u){var z=h.x,A=h.y;x[0].set(2*z,A,z,A);x[1].set(0,A,z,A);x[2].set(3*z,A,z,A);x[3].set(z,A,z,A);x[4].set(3*z,0,z,A);x[5].set(z,0,z,A);h.x*=4;h.y*=2}null===v.map&&(v.map=new ib(h.x,h.y,{minFilter:1003,magFilter:1003,format:1023}),v.map.texture.name=y.name+".shadowMap",p.updateProjectionMatrix());v.isSpotLightShadow&&v.update(y);z=v.map;A=v.matrix;t.setFromMatrixPosition(y.matrixWorld);
p.position.copy(t);u?(v=6,A.makeTranslation(-t.x,-t.y,-t.z)):(v=1,m.setFromMatrixPosition(y.target.matrixWorld),p.lookAt(m),p.updateMatrixWorld(),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(p.projectionMatrix),A.multiply(p.matrixWorldInverse));a.setRenderTarget(z);a.clear();for(y=0;y<v;y++)u&&(m.copy(p.position),m.add(l[y]),p.up.copy(w[y]),p.lookAt(m),p.updateMatrixWorld(),n.viewport(x[y])),g.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),f.setFromMatrix(g),e(c,d,p,u)}}R.needsUpdate=
!1}}}function ag(a){var b={};return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return b[a.uuid]},remove:function(c){c.isInterleavedBufferAttribute&&(c=c.data);var d=b[c.uuid];d&&(a.deleteBuffer(d.buffer),delete b[c.uuid])},update:function(c,d){c.isInterleavedBufferAttribute&&(c=c.data);var e=b[c.uuid];if(void 0===e){var e=c.uuid,f=c.array,g=c.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW,h=a.createBuffer();a.bindBuffer(d,h);a.bufferData(d,f,g);c.onUploadCallback();d=a.FLOAT;f instanceof Float32Array?
d=a.FLOAT:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?d=a.UNSIGNED_SHORT:f instanceof Int16Array?d=a.SHORT:f instanceof Uint32Array?d=a.UNSIGNED_INT:f instanceof Int32Array?d=a.INT:f instanceof Int8Array?d=a.BYTE:f instanceof Uint8Array&&(d=a.UNSIGNED_BYTE);b[e]={buffer:h,type:d,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}else e.version<c.version&&(f=c,h=f.array,g=f.updateRange,a.bindBuffer(d,e.buffer),
!1===f.dynamic?a.bufferData(d,h,a.STATIC_DRAW):-1===g.count?a.bufferSubData(d,0,h):0===g.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),e.version=c.version)}}}function eb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||eb.DefaultOrder}function Ud(){this.mask=
1}function B(){Object.defineProperty(this,"id",{value:bg++});this.uuid=S.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=B.DefaultUp.clone();var a=new p,b=new eb,c=new ea,d=new p(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new O},
normalMatrix:{value:new na}});this.matrix=new O;this.matrixWorld=new O;this.matrixAutoUpdate=B.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Ud;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}function Qa(){B.call(this);this.type="Camera";this.matrixWorldInverse=new O;this.projectionMatrix=new O}function Ib(a,b,c,d,e,f){Qa.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=
b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Wa(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new p;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new G;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function J(){Object.defineProperty(this,"id",{value:cg+=2});this.uuid=S.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=
[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function L(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=S.generateUUID();this.name="";this.array=
a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function tc(a,b,c){L.call(this,new Int8Array(a),b,c)}function uc(a,b,c){L.call(this,new Uint8Array(a),b,c)}function vc(a,b,c){L.call(this,new Uint8ClampedArray(a),b,c)}function wc(a,b,c){L.call(this,new Int16Array(a),b,c)}function lb(a,b,c){L.call(this,new Uint16Array(a),b,c)}function xc(a,b,c){L.call(this,new Int32Array(a),
b,c)}function mb(a,b,c){L.call(this,new Uint32Array(a),b,c)}function D(a,b,c){L.call(this,new Float32Array(a),b,c)}function yc(a,b,c){L.call(this,new Float64Array(a),b,c)}function Ue(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=
!1}function Vd(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function E(){Object.defineProperty(this,"id",{value:dg+=2});this.uuid=S.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function Jb(a,b,c,d,e,f){J.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,
widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new nb(a,b,c,d,e,f));this.mergeVertices()}function nb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l,Oa,Pa,rc){var q=f/Oa,y=g/Pa,u=f/2,w=g/2,R=l/2;g=Oa+1;var x=Pa+1,z=f=0,A,C,B=new p;for(C=0;C<x;C++){var D=C*y-w;for(A=0;A<g;A++)B[a]=(A*q-u)*d,B[b]=D*e,B[c]=R,m.push(B.x,B.y,B.z),B[a]=0,B[b]=0,B[c]=0<l?1:-1,t.push(B.x,B.y,B.z),n.push(A/Oa),n.push(1-C/Pa),f+=1}for(C=0;C<Pa;C++)for(A=0;A<Oa;A++)a=v+A+g*(C+1),b=v+(A+1)+g*(C+1),c=v+(A+1)+
g*C,k.push(v+A+g*C,a,c),k.push(a,b,c),z+=6;h.addGroup(r,z,rc);r+=z;v+=f}E.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;a=a||1;b=b||1;c=c||1;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=[],m=[],t=[],n=[],v=0,r=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",
-1,-1,a,b,-c,d,e,5);this.setIndex(k);this.addAttribute("position",new D(m,3));this.addAttribute("normal",new D(t,3));this.addAttribute("uv",new D(n,2))}function zc(a,b,c,d){J.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new ob(a,b,c,d));this.mergeVertices()}function ob(a,b,c,d){E.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=
b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d,t=[],n=[],v=[],r=[];for(a=0;a<h;a++){var l=a*m-f;for(b=0;b<g;b++)n.push(b*k-e,-l,0),v.push(0,0,1),r.push(b/c),r.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,t.push(b+g*a,e,h),t.push(e,f,h);this.setIndex(t);this.addAttribute("position",new D(n,3));this.addAttribute("normal",new D(v,3));this.addAttribute("uv",new D(r,2))}function ma(a){N.call(this);this.type="MeshBasicMaterial";this.color=new G(16777215);
this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function Ba(a){N.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
this.setValues(a))}function pb(a,b){this.origin=void 0!==a?a:new p;this.direction=void 0!==b?b:new p}function Kb(a,b){this.start=void 0!==a?a:new p;this.end=void 0!==b?b:new p}function Xa(a,b,c){this.a=void 0!==a?a:new p;this.b=void 0!==b?b:new p;this.c=void 0!==c?c:new p}function ra(a,b){B.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new E;this.material=void 0!==b?b:new ma({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function eg(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,
a.g,a.b,c,d)}var f=new G(0),g=0,h,k,m;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,v,r){d=d.background;null===d?e(f,g):d&&d.isColor&&(e(d,1),r=!0);(a.autoClear||r)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);d&&d.isCubeTexture?(void 0===m&&(m=new ra(new nb(1,1,1),new Ba({uniforms:qb.cube.uniforms,vertexShader:qb.cube.vertexShader,
fragmentShader:qb.cube.fragmentShader,side:1,depthTest:!0,depthWrite:!1,fog:!1})),m.geometry.removeAttribute("normal"),m.geometry.removeAttribute("uv"),m.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},c.update(m.geometry)),m.material.uniforms.tCube.value=d,b.push(m,m.geometry,m.material,0,null)):d&&d.isTexture&&(void 0===h&&(h=new Ib(-1,1,1,-1,0,1),k=new ra(new ob(2,2),new ma({depthTest:!1,depthWrite:!1,fog:!1})),c.update(k.geometry)),k.material.map=d,a.renderBufferDirect(h,
null,k.geometry,k.material,k,null))}}}function fg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program&&b.program&&a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function gg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function hg(){var a=[],b=0,c=[],d=[];return{opaque:c,transparent:d,init:function(){b=0;c.length=0;d.length=0},push:function(e,
f,g,h,k){var m=a[b];void 0===m?(m={id:e.id,object:e,geometry:f,material:g,program:g.program,renderOrder:e.renderOrder,z:h,group:k},a[b]=m):(m.id=e.id,m.object=e,m.geometry=f,m.material=g,m.program=g.program,m.renderOrder=e.renderOrder,m.z=h,m.group=k);(!0===g.transparent?d:c).push(m);b++},sort:function(){1<c.length&&c.sort(fg);1<d.length&&d.sort(gg)}}}function ig(){var a={};return{get:function(b,c){b=b.id+","+c.id;c=a[b];void 0===c&&(c=new hg,a[b]=c);return c},dispose:function(){a={}}}}function jg(a,
b){return Math.abs(b[1])-Math.abs(a[1])}function kg(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var h=d.morphTargetInfluences,k=h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<k;m++)d[m]=[m,0];b[e.id]=d}var t=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<k;m++){var n=d[m];0!==n[1]&&(t&&e.removeAttribute("morphTarget"+m),f&&e.removeAttribute("morphNormal"+m))}for(m=0;m<k;m++)n=d[m],n[0]=m,n[1]=h[m];d.sort(jg);for(m=0;8>m;m++){if(n=
d[m])if(h=n[0],n=n[1]){t&&e.addAttribute("morphTarget"+m,t[h]);f&&e.addAttribute("morphNormal"+m,f[h]);c[m]=n;continue}c[m]=0}g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function lg(a,b,c){var d,e,f;this.setMode=function(a){d=a};this.setIndex=function(a){e=a.type;f=a.bytesPerElement};this.render=function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES?c.faces+=h/3:d===a.POINTS&&(c.points+=h)};this.renderInstances=function(g,h,k){var m=b.get("ANGLE_instanced_arrays");
null===m?console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(m.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES?c.faces+=g.maxInstancedCount*k/3:d===a.POINTS&&(c.points+=g.maxInstancedCount*k))}}function mg(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES?
c.faces+=f/3:d===a.POINTS&&(c.points+=f)};this.renderInstances=function(e,f,g){var h=b.get("ANGLE_instanced_arrays");if(null===h)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var k=e.attributes.position;k.isInterleavedBufferAttribute?(g=k.data.count,h.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount)):h.drawArraysInstancedANGLE(d,f,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;
d===a.TRIANGLES?c.faces+=e.maxInstancedCount*g/3:d===a.POINTS&&(c.points+=e.maxInstancedCount*g)}}}function ng(a,b,c){function d(a){a=a.target;var h=e[a.id];null!==h.index&&b.remove(h.index);for(var g in h.attributes)b.remove(h.attributes[g]);a.removeEventListener("dispose",d);delete e[a.id];if(g=f[a.id])b.remove(g),delete f[a.id];if(g=f[h.id])b.remove(g),delete f[h.id];c.geometries--}var e={},f={};return{get:function(a,b){var f=e[b.id];if(f)return f;b.addEventListener("dispose",d);b.isBufferGeometry?
f=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new E).setFromObject(a)),f=b._bufferGeometry);e[b.id]=f;c.geometries++;return f},update:function(c){var d=c.index,e=c.attributes;null!==d&&b.update(d,a.ELEMENT_ARRAY_BUFFER);for(var f in e)b.update(e[f],a.ARRAY_BUFFER);c=c.morphAttributes;for(f in c)for(var d=c[f],e=0,g=d.length;e<g;e++)b.update(d[e],a.ARRAY_BUFFER)},getWireframeAttribute:function(c){var d=f[c.id];if(d)return d;d=[];var e=c.index;var g=c.attributes;if(null!==e){var t=
e.array;for(var n=0,v=t.length;n<v;n+=3){var r=t[n+0];g=t[n+1];e=t[n+2];d.push(r,g,g,e,e,r)}}else for(t=g.position.array,n=0,v=t.length/3-1;n<v;n+=3)r=n+0,g=n+1,e=n+2,d.push(r,g,g,e,e,r);d=new (65535<Vd(d)?mb:lb)(d,1);b.update(d,a.ELEMENT_ARRAY_BUFFER);return f[c.id]=d}}}function og(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new p,color:new G,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new C};break;case "SpotLight":c=
{position:new p,direction:new p,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new C};break;case "PointLight":c={position:new p,color:new G,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new C,shadowCameraNear:1,shadowCameraFar:1E3};break;case "HemisphereLight":c={direction:new p,skyColor:new G,groundColor:new G};break;case "RectAreaLight":c={color:new G,position:new p,halfWidth:new p,halfHeight:new p}}return a[b.id]=
c}}}function pg(){var a=new og,b={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},c=new p,d=new O,e=new O;return{setup:function(f,g,h){for(var k,m=0,t=0,n=0,v=0,r=0,l=0,u=0,p=0,x=h.matrixWorldInverse,z=0,A=f.length;z<A;z++){var y=f[z];k=y.color;var R=y.intensity,Oa=y.distance,Pa=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)m+=
k.r*R,t+=k.g*R,n+=k.b*R;else if(y.isDirectionalLight){h=a.get(y);h.color.copy(y.color).multiplyScalar(y.intensity);h.direction.setFromMatrixPosition(y.matrixWorld);c.setFromMatrixPosition(y.target.matrixWorld);h.direction.sub(c);h.direction.transformDirection(x);if(h.shadow=y.castShadow)k=y.shadow,h.shadowBias=k.bias,h.shadowRadius=k.radius,h.shadowMapSize=k.mapSize;b.directionalShadowMap[v]=Pa;b.directionalShadowMatrix[v]=y.shadow.matrix;b.directional[v]=h;v++}else if(y.isSpotLight){h=a.get(y);h.position.setFromMatrixPosition(y.matrixWorld);
h.position.applyMatrix4(x);h.color.copy(k).multiplyScalar(R);h.distance=Oa;h.direction.setFromMatrixPosition(y.matrixWorld);c.setFromMatrixPosition(y.target.matrixWorld);h.direction.sub(c);h.direction.transformDirection(x);h.coneCos=Math.cos(y.angle);h.penumbraCos=Math.cos(y.angle*(1-y.penumbra));h.decay=0===y.distance?0:y.decay;if(h.shadow=y.castShadow)k=y.shadow,h.shadowBias=k.bias,h.shadowRadius=k.radius,h.shadowMapSize=k.mapSize;b.spotShadowMap[l]=Pa;b.spotShadowMatrix[l]=y.shadow.matrix;b.spot[l]=
h;l++}else if(y.isRectAreaLight)h=a.get(y),h.color.copy(k).multiplyScalar(R),h.position.setFromMatrixPosition(y.matrixWorld),h.position.applyMatrix4(x),e.identity(),d.copy(y.matrixWorld),d.premultiply(x),e.extractRotation(d),h.halfWidth.set(.5*y.width,0,0),h.halfHeight.set(0,.5*y.height,0),h.halfWidth.applyMatrix4(e),h.halfHeight.applyMatrix4(e),b.rectArea[u]=h,u++;else if(y.isPointLight){h=a.get(y);h.position.setFromMatrixPosition(y.matrixWorld);h.position.applyMatrix4(x);h.color.copy(y.color).multiplyScalar(y.intensity);
h.distance=y.distance;h.decay=0===y.distance?0:y.decay;if(h.shadow=y.castShadow)k=y.shadow,h.shadowBias=k.bias,h.shadowRadius=k.radius,h.shadowMapSize=k.mapSize,h.shadowCameraNear=k.camera.near,h.shadowCameraFar=k.camera.far;b.pointShadowMap[r]=Pa;b.pointShadowMatrix[r]=y.shadow.matrix;b.point[r]=h;r++}else y.isHemisphereLight&&(h=a.get(y),h.direction.setFromMatrixPosition(y.matrixWorld),h.direction.transformDirection(x),h.direction.normalize(),h.skyColor.copy(y.color).multiplyScalar(R),h.groundColor.copy(y.groundColor).multiplyScalar(R),
b.hemi[p]=h,p++)}b.ambient[0]=m;b.ambient[1]=t;b.ambient[2]=n;b.directional.length=v;b.spot.length=l;b.rectArea.length=u;b.point.length=r;b.hemi.length=p;b.hash=v+","+r+","+l+","+u+","+p+","+g.length},state:b}}function qg(a,b){var c={};return{update:function(d){var e=b.frame,f=d.geometry,g=a.get(d,f);c[g.id]!==e&&(f.isGeometry&&g.updateFromObject(d),a.update(g),c[g.id]=e);return g},dispose:function(){c={}}}}function rg(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}
function Ve(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),rg(c));return d}function We(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM",
"( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Wd(a,b){b=We(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }"}function sg(a,b){b=We(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function tg(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";
break;case 4:b="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function ug(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":
"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ac).join("\n")}function vg(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function Ac(a){return""!==a}function Xe(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,
b.numHemiLights)}function Xd(a){return a.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,function(a,c){a=U[c];if(void 0===a)throw Error("Can not resolve #include <"+c+">");return Xd(a)})}function Ye(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function wg(a,b,c,d,e,f){var g=a.context,h=d.defines,k=e.vertexShader,m=e.fragmentShader,t="SHADOWMAP_TYPE_BASIC";
1===f.shadowMapType?t="SHADOWMAP_TYPE_PCF":2===f.shadowMapType&&(t="SHADOWMAP_TYPE_PCF_SOFT");var n="ENVMAP_TYPE_CUBE",v="ENVMAP_MODE_REFLECTION",r="ENVMAP_BLENDING_MULTIPLY";if(f.envMap){switch(d.envMap.mapping){case 301:case 302:n="ENVMAP_TYPE_CUBE";break;case 306:case 307:n="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:n="ENVMAP_TYPE_EQUIREC";break;case 305:n="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case 302:case 304:v="ENVMAP_MODE_REFRACTION"}switch(d.combine){case 0:r="ENVMAP_BLENDING_MULTIPLY";
break;case 1:r="ENVMAP_BLENDING_MIX";break;case 2:r="ENVMAP_BLENDING_ADD"}}var l=0<a.gammaFactor?a.gammaFactor:1,u=ug(d.extensions,f,b),p=vg(h),x=g.createProgram();d.isRawShaderMaterial?(h=[p].filter(Ac).join("\n"),0<h.length&&(h+="\n"),b=[u,p].filter(Ac).join("\n"),0<b.length&&(b+="\n")):(h=["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,p,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+l,"#define MAX_BONES "+f.maxBones,
f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+v:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":
"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+f.numClippingPlanes,f.shadowMapEnabled?"#define USE_SHADOWMAP":
"",f.shadowMapEnabled?"#define "+t:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;",
"#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif",
"#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Ac).join("\n"),b=[u,"precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,p,f.alphaTest?"#define ALPHATEST "+f.alphaTest:"","#define GAMMA_FACTOR "+l,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+n:"",f.envMap?"#define "+v:"",f.envMap?"#define "+
r:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":
"",f.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+f.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(f.numClippingPlanes-f.numClipIntersection),f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+t:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":
"",f.envMap&&b.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?U.tonemapping_pars_fragment:"",0!==f.toneMapping?tg("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.envMapEncoding||f.emissiveMapEncoding?U.encodings_pars_fragment:"",f.mapEncoding?Wd("mapTexelToLinear",f.mapEncoding):"",f.envMapEncoding?Wd("envMapTexelToLinear",
f.envMapEncoding):"",f.emissiveMapEncoding?Wd("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?sg("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(Ac).join("\n"));k=Xd(k);k=Xe(k,f);m=Xd(m);m=Xe(m,f);d.isShaderMaterial||(k=Ye(k),m=Ye(m));m=b+m;k=Ve(g,g.VERTEX_SHADER,h+k);m=Ve(g,g.FRAGMENT_SHADER,m);g.attachShader(x,k);g.attachShader(x,m);void 0!==d.index0AttributeName?g.bindAttribLocation(x,0,d.index0AttributeName):
!0===f.morphTargets&&g.bindAttribLocation(x,0,"position");g.linkProgram(x);f=g.getProgramInfoLog(x).trim();e=g.getShaderInfoLog(k).trim();t=g.getShaderInfoLog(m).trim();v=n=!0;if(!1===g.getProgramParameter(x,g.LINK_STATUS))n=!1,console.error("THREE.WebGLProgram: shader error: ",g.getError(),"gl.VALIDATE_STATUS",g.getProgramParameter(x,g.VALIDATE_STATUS),"gl.getProgramInfoLog",f,e,t);else if(""!==f)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f);else if(""===e||""===t)v=!1;v&&(this.diagnostics=
{runnable:n,material:d,programLog:f,vertexShader:{log:e,prefix:h},fragmentShader:{log:t,prefix:b}});g.deleteShader(k);g.deleteShader(m);var z;this.getUniforms=function(){void 0===z&&(z=new kb(g,x,a));return z};var A;this.getAttributes=function(){if(void 0===A){for(var a={},b=g.getProgramParameter(x,g.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=g.getActiveAttrib(x,c).name;a[d]=g.getAttribLocation(x,d)}A=a}return A};this.destroy=function(){g.deleteProgram(x);this.program=void 0};Object.defineProperties(this,
{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=xg++;this.code=c;this.usedTimes=1;this.program=x;this.vertexShader=k;this.fragmentShader=m;return this}function yg(a,b,c){function d(a,b){if(a)a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
c=a.texture.encoding);else var c=3E3;3E3===c&&b&&(c=3007);return c}var e=[],f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow"},g="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
this.getParameters=function(b,e,g,t,n,v,r){var h=f[b.type];if(r.isSkinnedMesh){var k=r.skeleton.bones;if(c.floatVertexTextures)k=1024;else{var m=Math.min(Math.floor((c.maxVertexUniforms-20)/4),k.length);m<k.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+k.length+" bones. This GPU supports "+m+"."),k=0):k=m}}else k=0;m=c.precision;null!==b.precision&&(m=c.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));
var l=a.getRenderTarget();return{shaderID:h,precision:m,supportsVertexTextures:c.vertexTextures,outputEncoding:d(l?l.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:d(b.map,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:d(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(306===b.envMap.mapping||307===b.envMap.mapping),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap,a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,
displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,combine:b.combine,vertexColors:b.vertexColors,fog:!!t,useFog:b.fog,fogExp:t&&t.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&0<k,maxBones:k,useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,
maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numClippingPlanes:n,numClipIntersection:v,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&r.receiveShadow&&0<g.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,
alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1}};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(e=0;e<g.length;e++)d.push(c[g[e]]);d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);return d.join()};this.acquireProgram=function(c,d,f,g){for(var h,k=0,m=e.length;k<
m;k++){var t=e[k];if(t.code===g){h=t;++h.usedTimes;break}}void 0===h&&(h=new wg(a,b,g,c,d,f),e.push(h));return h};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function zg(a,b,c,d,e,f,g,h){function k(a,b){if(a.width>b||a.height>b){b/=Math.max(a.width,a.height);var c=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");c.width=Math.floor(a.width*b);c.height=Math.floor(a.height*b);c.getContext("2d").drawImage(a,
0,0,a.width,a.height,0,0,c.width,c.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+c.width+"x"+c.height,a);return c}return a}function m(a){return S.isPowerOfTwo(a.width)&&S.isPowerOfTwo(a.height)}function t(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function n(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function v(b){b=b.target;b.removeEventListener("dispose",v);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);
else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d.remove(b)}b.isVideoTexture&&delete A[b.id];g.textures--}function r(b){b=b.target;b.removeEventListener("dispose",r);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),
c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b)}g.textures--}function l(b,n){var r=d.get(b);if(b.isVideoTexture){var l=b.id,q=h.frame;A[l]!==q&&(A[l]=q,b.update())}if(0<b.version&&r.__version!==b.version)if(l=b.image,void 0===l)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===l.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===r.__webglInit&&
(r.__webglInit=!0,b.addEventListener("dispose",v),r.__webglTexture=a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+n);c.bindTexture(a.TEXTURE_2D,r.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=k(b.image,e.maxTextureSize);(1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===m(p)&&(n=p,n instanceof HTMLImageElement||n instanceof
HTMLCanvasElement||n instanceof ImageBitmap?(l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),l.width=S.floorPowerOfTwo(n.width),l.height=S.floorPowerOfTwo(n.height),l.getContext("2d").drawImage(n,0,0,l.width,l.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+l.width+"x"+l.height,n),p=l):p=n);n=m(p);l=f.convert(b.format);q=f.convert(b.type);u(a.TEXTURE_2D,b,n);var y=b.mipmaps;if(b.isDepthTexture){y=a.DEPTH_COMPONENT;if(1015===
b.type){if(!z)throw Error("Float Depth Texture only supported in WebGL2.0");y=a.DEPTH_COMPONENT32F}else z&&(y=a.DEPTH_COMPONENT16);1026===b.format&&y===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1012,q=f.convert(b.type));1027===b.format&&(y=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,
q=f.convert(b.type)));c.texImage2D(a.TEXTURE_2D,0,y,p.width,p.height,0,l,q,null)}else if(b.isDataTexture)if(0<y.length&&n){for(var w=0,x=y.length;w<x;w++)p=y[w],c.texImage2D(a.TEXTURE_2D,w,l,p.width,p.height,0,l,q,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,p.width,p.height,0,l,q,p.data);else if(b.isCompressedTexture)for(w=0,x=y.length;w<x;w++)p=y[w],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(l)?c.compressedTexImage2D(a.TEXTURE_2D,w,l,p.width,p.height,
0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,w,l,p.width,p.height,0,l,q,p.data);else if(0<y.length&&n){w=0;for(x=y.length;w<x;w++)p=y[w],c.texImage2D(a.TEXTURE_2D,w,l,l,q,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,l,q,p);t(b,n)&&a.generateMipmap(a.TEXTURE_2D);r.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}c.activeTexture(a.TEXTURE0+n);c.bindTexture(a.TEXTURE_2D,r.__webglTexture)}
function u(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f.convert(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f.convert(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f.convert(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f.convert(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,n(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,n(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||
(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function p(b,e,g,h){var k=f.convert(e.texture.format),m=f.convert(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function x(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,
a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var z="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext,A={};this.setTexture2D=
l;this.setTextureCube=function(b,h){var n=d.get(b);if(6===b.image.length)if(0<b.version&&n.__version!==b.version){n.__image__webglTextureCube||(b.addEventListener("dispose",v),n.__image__webglTextureCube=a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+h);c.bindTexture(a.TEXTURE_CUBE_MAP,n.__image__webglTextureCube);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);h=b&&b.isCompressedTexture;for(var l=b.image[0]&&b.image[0].isDataTexture,r=[],q=0;6>q;q++)r[q]=h||l?l?b.image[q].image:b.image[q]:
k(b.image[q],e.maxCubemapSize);var p=m(r[0]),y=f.convert(b.format),w=f.convert(b.type);u(a.TEXTURE_CUBE_MAP,b,p);for(q=0;6>q;q++)if(h)for(var x,z=r[q].mipmaps,A=0,R=z.length;A<R;A++)x=z[A],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(y)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,A,y,x.width,x.height,0,x.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+
q,A,y,x.width,x.height,0,y,w,x.data);else l?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,y,r[q].width,r[q].height,0,y,w,r[q].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,y,y,w,r[q]);t(b,p)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);n.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+h),c.bindTexture(a.TEXTURE_CUBE_MAP,n.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};
this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",r);f.__webglTexture=a.createTexture();g.textures++;var h=!0===b.isWebGLRenderTargetCube,k=m(b);if(h){e.__webglFramebuffer=[];for(var n=0;6>n;n++)e.__webglFramebuffer[n]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(h){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);u(a.TEXTURE_CUBE_MAP,b.texture,k);for(n=0;6>n;n++)p(e.__webglFramebuffer[n],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+
n);t(b.texture,k)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),u(a.TEXTURE_2D,b.texture,k),p(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),t(b.texture,k)&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");
a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);l(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,
a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),x(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),x(e.__webglDepthbuffer,
b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture,f=m(b);t(e,f)&&(b=b.isWebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function Ag(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},remove:function(b){delete a[b.uuid]},dispose:function(){a={}}}}function Bg(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();
a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==z[b]&&(a.enable(b),z[b]=!0)}function f(b){!1!==z[b]&&(a.disable(b),z[b]=!1)}function g(b,d,g,h,k,m,n,t){0!==b?e(a.BLEND):f(a.BLEND);if(5!==b){if(b!==R||t!==Y)switch(b){case 2:t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),
a.blendFunc(a.SRC_ALPHA,a.ONE));break;case 3:t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR));break;case 4:t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR));break;default:t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,
a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA))}G=aa=E=D=B=C=null}else{k=k||d;m=m||g;n=n||h;if(d!==C||k!==E)a.blendEquationSeparate(c.convert(d),c.convert(k)),C=d,E=k;if(g!==B||h!==D||m!==aa||n!==G)a.blendFuncSeparate(c.convert(g),c.convert(h),c.convert(m),c.convert(n)),B=g,D=h,aa=m,G=n}R=b;Y=t}function h(b){K!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),K=b)}function k(b){0!==
b?(e(a.CULL_FACE),b!==H&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);H=b}function m(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),P!==c||J!==d)a.polygonOffset(c,d),P=c,J=d}else f(a.POLYGON_OFFSET_FILL)}function t(b){void 0===b&&(b=a.TEXTURE0+O-1);L!==b&&(a.activeTexture(b),L=b)}var n=new function(){var b=!1,c=new fa,d=null,e=new fa(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,
d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,0,0,0)}}},v=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);
break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},l=new function(){var b=!1,c=null,d=null,g=null,h=null,k=null,m=null,n=null,t=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,
c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(k!==b||m!==c||n!==d)a.stencilOp(b,c,d),k=b,m=c,n=d},setLocked:function(a){b=a},setClear:function(b){t!==b&&(a.clearStencil(b),t=b)},reset:function(){b=!1;t=n=m=k=h=g=d=c=null}}},q=a.getParameter(a.MAX_VERTEX_ATTRIBS),u=new Uint8Array(q),p=new Uint8Array(q),x=new Uint8Array(q),z={},A=null,y=null,R=null,C=null,B=null,D=null,E=null,aa=null,G=null,Y=!1,K=null,H=null,M=null,P=null,J=null,O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
q=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),S=1<=parseFloat(q),L=null,N={},U=new fa,I=new fa,X={};X[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);X[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);n.setClear(0,0,0,1);v.setClear(1);l.setClear(0);e(a.DEPTH_TEST);v.setFunc(3);h(!1);k(1);e(a.CULL_FACE);e(a.BLEND);g(1);return{buffers:{color:n,depth:v,stencil:l},initAttributes:function(){for(var a=0,b=u.length;a<b;a++)u[a]=0},enableAttribute:function(c){u[c]=
1;0===p[c]&&(a.enableVertexAttribArray(c),p[c]=1);0!==x[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),x[c]=0)},enableAttributeAndDivisor:function(c,d){u[c]=1;0===p[c]&&(a.enableVertexAttribArray(c),p[c]=1);x[c]!==d&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,d),x[c]=d)},disableUnusedAttributes:function(){for(var b=0,c=p.length;b!==c;++b)p[b]!==u[b]&&(a.disableVertexAttribArray(b),p[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===A&&
(A=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")||b.get("WEBGL_compressed_texture_astc")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)A.push(c[d]);return A},useProgram:function(b){return y!==b?(a.useProgram(b),y=b,!0):!1},setBlending:g,setMaterial:function(b,c){2===b.side?f(a.CULL_FACE):e(a.CULL_FACE);var d=1===b.side;c&&(d=!d);h(d);!0===b.transparent?g(b.blending,b.blendEquation,b.blendSrc,
b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha):g(0);v.setFunc(b.depthFunc);v.setTest(b.depthTest);v.setMask(b.depthWrite);n.setMask(b.colorWrite);m(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits)},setFlipSided:h,setCullFace:k,setLineWidth:function(b){b!==M&&(S&&a.lineWidth(b),M=b)},setPolygonOffset:m,setScissorTest:function(b){b?e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:t,bindTexture:function(b,c){null===L&&t();var d=N[L];void 0===d&&(d=
{type:void 0,texture:void 0},N[L]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||X[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},scissor:function(b){!1===U.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),U.copy(b))},viewport:function(b){!1===I.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),I.copy(b))},
reset:function(){for(var b=0;b<p.length;b++)1===p[b]&&(a.disableVertexAttribArray(b),p[b]=0);z={};L=A=null;N={};H=K=R=y=null;n.reset();v.reset();l.reset()}}}function Cg(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer;var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),v=a.getParameter(a.MAX_VARYING_VECTORS),
l=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),q=0<h,p=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:k,maxCubemapSize:m,maxAttributes:t,maxVertexUniforms:n,maxVaryings:v,maxFragmentUniforms:l,vertexTextures:q,floatFragmentTextures:p,floatVertexTextures:q&&
p}}function Z(a,b,c,d){Qa.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function pd(a){Z.call(this);this.cameras=a||[]}function ae(a){function b(){if(null!==d&&d.isPresenting){var b=d.getEyeParameters("left"),e=b.renderWidth,b=b.renderHeight;n=a.getPixelRatio();t=a.getSize();a.setDrawingBufferSize(2*
e,b,1)}else c.enabled&&a.setDrawingBufferSize(t.width,t.height,n)}var c=this,d=null,e=null,f=null;"undefined"!==typeof window&&"VRFrameData"in window&&(e=new window.VRFrameData);var g=new O,h=new Z;h.bounds=new fa(0,0,.5,1);h.layers.enable(1);var k=new Z;k.bounds=new fa(.5,0,.5,1);k.layers.enable(2);var m=new pd([h,k]);m.layers.enable(1);m.layers.enable(2);var t,n;"undefined"!==typeof window&&window.addEventListener("vrdisplaypresentchange",b,!1);this.enabled=!1;this.getDevice=function(){return d};
this.setDevice=function(a){void 0!==a&&(d=a)};this.setPoseTarget=function(a){void 0!==a&&(f=a)};this.getCamera=function(a){if(null===d)return a;d.depthNear=a.near;d.depthFar=a.far;d.getFrameData(e);var b=e.pose,c=null!==f?f:a;null!==b.position?c.position.fromArray(b.position):c.position.set(0,0,0);null!==b.orientation&&c.quaternion.fromArray(b.orientation);c.updateMatrixWorld();if(!1===d.isPresenting)return a;h.near=a.near;k.near=a.near;h.far=a.far;k.far=a.far;m.matrixWorld.copy(a.matrixWorld);m.matrixWorldInverse.copy(a.matrixWorldInverse);
h.matrixWorldInverse.fromArray(e.leftViewMatrix);k.matrixWorldInverse.fromArray(e.rightViewMatrix);a=c.parent;null!==a&&(g.getInverse(a.matrixWorld),h.matrixWorldInverse.multiply(g),k.matrixWorldInverse.multiply(g));h.matrixWorld.getInverse(h.matrixWorldInverse);k.matrixWorld.getInverse(k.matrixWorldInverse);h.projectionMatrix.fromArray(e.leftProjectionMatrix);k.projectionMatrix.fromArray(e.rightProjectionMatrix);m.projectionMatrix.copy(h.projectionMatrix);a=d.getLayers();a.length&&(a=a[0],null!==
a.leftBounds&&4===a.leftBounds.length&&h.bounds.fromArray(a.leftBounds),null!==a.rightBounds&&4===a.rightBounds.length&&k.bounds.fromArray(a.rightBounds));return m};this.submitFrame=function(){d&&d.isPresenting&&d.submitFrame()};this.dispose=function(){"undefined"!==typeof window&&window.removeEventListener("vrdisplaypresentchange",b)}}function Dg(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||
a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||
a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Eg(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;
k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new xa,k=new na,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=
!1;a()};this.setState=function(c,h,k,l,q,p){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var n=4*k,t=q.clippingState||null;m.value=t;t=b(c,l,n,p);for(c=0;c!==n;++c)t[c]=d[c];q.clippingState=t;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=k}}}function Ze(a,b){return{convert:function(c){if(1E3===c)return a.REPEAT;if(1001===c)return a.CLAMP_TO_EDGE;if(1002===c)return a.MIRRORED_REPEAT;if(1003===c)return a.NEAREST;if(1004===c)return a.NEAREST_MIPMAP_NEAREST;if(1005===c)return a.NEAREST_MIPMAP_LINEAR;
if(1006===c)return a.LINEAR;if(1007===c)return a.LINEAR_MIPMAP_NEAREST;if(1008===c)return a.LINEAR_MIPMAP_LINEAR;if(1009===c)return a.UNSIGNED_BYTE;if(1017===c)return a.UNSIGNED_SHORT_4_4_4_4;if(1018===c)return a.UNSIGNED_SHORT_5_5_5_1;if(1019===c)return a.UNSIGNED_SHORT_5_6_5;if(1010===c)return a.BYTE;if(1011===c)return a.SHORT;if(1012===c)return a.UNSIGNED_SHORT;if(1013===c)return a.INT;if(1014===c)return a.UNSIGNED_INT;if(1015===c)return a.FLOAT;if(1016===c){var d=b.get("OES_texture_half_float");
if(null!==d)return d.HALF_FLOAT_OES}if(1021===c)return a.ALPHA;if(1022===c)return a.RGB;if(1023===c)return a.RGBA;if(1024===c)return a.LUMINANCE;if(1025===c)return a.LUMINANCE_ALPHA;if(1026===c)return a.DEPTH_COMPONENT;if(1027===c)return a.DEPTH_STENCIL;if(100===c)return a.FUNC_ADD;if(101===c)return a.FUNC_SUBTRACT;if(102===c)return a.FUNC_REVERSE_SUBTRACT;if(200===c)return a.ZERO;if(201===c)return a.ONE;if(202===c)return a.SRC_COLOR;if(203===c)return a.ONE_MINUS_SRC_COLOR;if(204===c)return a.SRC_ALPHA;
if(205===c)return a.ONE_MINUS_SRC_ALPHA;if(206===c)return a.DST_ALPHA;if(207===c)return a.ONE_MINUS_DST_ALPHA;if(208===c)return a.DST_COLOR;if(209===c)return a.ONE_MINUS_DST_COLOR;if(210===c)return a.SRC_ALPHA_SATURATE;if(33776===c||33777===c||33778===c||33779===c)if(d=b.get("WEBGL_compressed_texture_s3tc"),null!==d){if(33776===c)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===c)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===c)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===c)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===
c||35841===c||35842===c||35843===c)if(d=b.get("WEBGL_compressed_texture_pvrtc"),null!==d){if(35840===c)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===c)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===c)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===c)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===c&&(d=b.get("WEBGL_compressed_texture_etc1"),null!==d))return d.COMPRESSED_RGB_ETC1_WEBGL;if(37808===c||37809===c||37810===c||37811===c||37812===c||37813===c||37814===c||37815===c||37816===
c||37817===c||37818===c||37819===c||37820===c||37821===c)if(d=b.get("WEBGL_compressed_texture_astc"),null!==d)return c;if(103===c||104===c)if(d=b.get("EXT_blend_minmax"),null!==d){if(103===c)return d.MIN_EXT;if(104===c)return d.MAX_EXT}return 1020===c&&(d=b.get("WEBGL_depth_texture"),null!==d)?d.UNSIGNED_INT_24_8_WEBGL:0}}}function be(a){function b(){ia=new Dg(F);ia.get("WEBGL_depth_texture");ia.get("OES_texture_float");ia.get("OES_texture_float_linear");ia.get("OES_texture_half_float");ia.get("OES_texture_half_float_linear");
ia.get("OES_standard_derivatives");ia.get("OES_element_index_uint");ia.get("ANGLE_instanced_arrays");ma=new Ze(F,ia);Z=new Cg(F,ia,a);ba=new Bg(F,ia,ma);ba.scissor(sc.copy(ca).multiplyScalar(la));ba.viewport(W.copy(da).multiplyScalar(la));T=new Ag;ha=new zg(F,ia,ba,T,Z,ma,$d,Ra);oa=new ag(F);pa=new ng(F,oa,$d);qa=new qg(pa,Ra);ta=new kg(F);na=new yg(Y,ia,Z);sa=new pg;ra=new ig;ja=new eg(Y,ba,pa,R);ua=new mg(F,ia,Ra);va=new lg(F,ia,Ra);wa=new Zf(Y,F,ba,ha,Z);Y.info.programs=na.programs;Y.context=F;
Y.capabilities=Z;Y.extensions=ia;Y.properties=T;Y.renderLists=ra;Y.state=ba}function c(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");H=!0}function d(){console.log("THREE.WebGLRenderer: Context Restored.");H=!1;b()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);T.remove(a)}function f(a){var b=T.get(a).program;a.program=void 0;void 0!==b&&na.releaseProgram(b)}function g(a,b,c){a.render(function(a){Y.renderBufferImmediate(a,b,c)})}function h(a){null!==xa&&
xa(a);(a=ka.getDevice())&&a.isPresenting?a.requestAnimationFrame(h):window.requestAnimationFrame(h)}function k(a,b,c){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isLight)D.push(a),a.castShadow&&E.push(a);else if(a.isSprite)a.frustumCulled&&!Yd.intersectsSprite(a)||G.push(a);else if(a.isImmediateRenderObject)c&&Lb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(od),aa.push(a,null,a.material,Lb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||
Yd.intersectsObject(a)){c&&Lb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(od);var d=qa.update(a),e=a.material;if(Array.isArray(e))for(var f=d.groups,g=0,h=f.length;g<h;g++){var m=f[g],n=e[m.materialIndex];n&&n.visible&&aa.push(a,d,n,Lb.z,m)}else e.visible&&aa.push(a,d,e,Lb.z,null)}a=a.children;g=0;for(h=a.length;g<h;g++)k(a[g],b,c)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d,g=g.group;if(c.isArrayCamera){U=c;for(var n=c.cameras,
l=0,v=n.length;l<v;l++){var r=n[l];if(h.layers.test(r.layers)){var q=r.bounds;ba.viewport(W.set(q.x*X,q.y*Q,q.z*X,q.w*Q).multiplyScalar(la));t(h,b,r,k,m,g)}}}else U=null,t(h,b,c,k,m,g)}}function t(a,b,c,d,e,f){a.onBeforeRender(Y,b,c,d,e,f);a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var h=a.isMesh&&0>a.matrixWorld.determinant();ba.setMaterial(e,h);h=v(c,b.fog,e,a);L="";g(a,h,e)}else Y.renderBufferDirect(c,
b.fog,d,e,a,f);a.onAfterRender(Y,b,c,d,e,f)}function n(a,b,c){var d=T.get(a);c=na.getParameters(a,sa.state,E,b,Ea.numPlanes,Ea.numIntersection,c);var g=na.getProgramCode(a,c),h=d.program,k=!0;if(void 0===h)a.addEventListener("dispose",e);else if(h.code!==g)f(a);else{if(void 0!==c.shaderID)return;k=!1}k&&(c.shaderID?(h=qb[c.shaderID],d.shader={name:a.type,uniforms:Aa.clone(h.uniforms),vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,
fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader),h=na.acquireProgram(a,d.shader,c,g),d.program=h,a.program=h);c=h.getAttributes();if(a.morphTargets)for(g=a.numSupportedMorphTargets=0;g<Y.maxMorphTargets;g++)0<=c["morphTarget"+g]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(g=a.numSupportedMorphNormals=0;g<Y.maxMorphNormals;g++)0<=c["morphNormal"+g]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=
Ea.numPlanes,d.numIntersection=Ea.numIntersection,c.clippingPlanes=Ea.uniform;d.fog=b;d.lightsHash=sa.state.hash;a.lights&&(c.ambientLightColor.value=sa.state.ambient,c.directionalLights.value=sa.state.directional,c.spotLights.value=sa.state.spot,c.rectAreaLights.value=sa.state.rectArea,c.pointLights.value=sa.state.point,c.hemisphereLights.value=sa.state.hemi,c.directionalShadowMap.value=sa.state.directionalShadowMap,c.directionalShadowMatrix.value=sa.state.directionalShadowMatrix,c.spotShadowMap.value=
sa.state.spotShadowMap,c.spotShadowMatrix.value=sa.state.spotShadowMatrix,c.pointShadowMap.value=sa.state.pointShadowMap,c.pointShadowMatrix.value=sa.state.pointShadowMatrix);a=d.program.getUniforms();a=kb.seqWithValue(a.seq,c);d.uniformsList=a}function v(a,b,c,d){I=0;var e=T.get(c);ea&&(Zd||a!==N)&&Ea.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,a===N&&c.id===P);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==sa.state.hash?
c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===Ea.numPlanes&&e.numIntersection===Ea.numIntersection||(c.needsUpdate=!0));c.needsUpdate&&(n(c,b,d),c.needsUpdate=!1);var f=!1,g=!1,h=!1,k=e.program,m=k.getUniforms(),t=e.shader.uniforms;ba.useProgram(k.program)&&(h=g=f=!0);c.id!==P&&(P=c.id,g=!0);if(f||a!==N){m.setValue(F,"projectionMatrix",a.projectionMatrix);Z.logarithmicDepthBuffer&&m.setValue(F,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));N!==(U||a)&&(N=U||a,h=g=!0);if(c.isShaderMaterial||
c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)f=m.map.cameraPosition,void 0!==f&&f.setValue(F,Lb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(F,"viewMatrix",a.matrixWorldInverse)}if(c.skinning&&(m.setOptional(F,d,"bindMatrix"),m.setOptional(F,d,"bindMatrixInverse"),a=d.skeleton))if(f=a.bones,Z.floatVertexTextures){if(void 0===a.boneTexture){var f=Math.sqrt(4*
f.length),f=S.ceilPowerOfTwo(f),f=Math.max(f,4),v=new Float32Array(f*f*4);v.set(a.boneMatrices);var r=new jb(v,f,f,1023,1015);a.boneMatrices=v;a.boneTexture=r;a.boneTextureSize=f}m.setValue(F,"boneTexture",a.boneTexture);m.setValue(F,"boneTextureSize",a.boneTextureSize)}else m.setOptional(F,a,"boneMatrices");g&&(m.setValue(F,"toneMappingExposure",Y.toneMappingExposure),m.setValue(F,"toneMappingWhitePoint",Y.toneMappingWhitePoint),c.lights&&(g=h,t.ambientLightColor.needsUpdate=g,t.directionalLights.needsUpdate=
g,t.pointLights.needsUpdate=g,t.spotLights.needsUpdate=g,t.rectAreaLights.needsUpdate=g,t.hemisphereLights.needsUpdate=g),b&&c.fog&&(t.fogColor.value=b.color,b.isFog?(t.fogNear.value=b.near,t.fogFar.value=b.far):b.isFogExp2&&(t.fogDensity.value=b.density)),c.isMeshBasicMaterial?l(t,c):c.isMeshLambertMaterial?(l(t,c),c.emissiveMap&&(t.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(l(t,c),c.isMeshToonMaterial?(q(t,c),c.gradientMap&&(t.gradientMap.value=c.gradientMap)):q(t,c)):c.isMeshStandardMaterial?
(l(t,c),c.isMeshPhysicalMaterial&&(t.clearCoat.value=c.clearCoat,t.clearCoatRoughness.value=c.clearCoatRoughness),t.roughness.value=c.roughness,t.metalness.value=c.metalness,c.roughnessMap&&(t.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(t.metalnessMap.value=c.metalnessMap),c.emissiveMap&&(t.emissiveMap.value=c.emissiveMap),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale)),c.displacementMap&&
(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias),c.envMap&&(t.envMapIntensity.value=c.envMapIntensity)):c.isMeshDepthMaterial?(l(t,c),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias)):c.isMeshDistanceMaterial?(l(t,c),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,
t.displacementBias.value=c.displacementBias),t.referencePosition.value.copy(c.referencePosition),t.nearDistance.value=c.nearDistance,t.farDistance.value=c.farDistance):c.isMeshNormalMaterial?(l(t,c),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale)),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias)):
c.isLineBasicMaterial?(t.diffuse.value=c.color,t.opacity.value=c.opacity,c.isLineDashedMaterial&&(t.dashSize.value=c.dashSize,t.totalSize.value=c.dashSize+c.gapSize,t.scale.value=c.scale)):c.isPointsMaterial?(t.diffuse.value=c.color,t.opacity.value=c.opacity,t.size.value=c.size*la,t.scale.value=.5*Q,t.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&(b=c.map.offset,g=c.map.repeat,h=c.map.center,c.map.matrix.setUvTransform(b.x,b.y,g.x,g.y,c.map.rotation,h.x,h.y)),t.uvTransform.value.copy(c.map.matrix))):
c.isShadowMaterial&&(t.color.value=c.color,t.opacity.value=c.opacity),void 0!==t.ltc_1&&(t.ltc_1.value=K.LTC_1),void 0!==t.ltc_2&&(t.ltc_2.value=K.LTC_2),kb.upload(F,e.uniformsList,t,Y));m.setValue(F,"modelViewMatrix",d.modelViewMatrix);m.setValue(F,"normalMatrix",d.normalMatrix);m.setValue(F,"modelMatrix",d.matrixWorld);return k}function l(a,b){a.opacity.value=b.opacity;b.color&&(a.diffuse.value=b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=
b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);b.envMap&&(a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap&&b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio);b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var c=b.map;else b.specularMap?c=b.specularMap:b.displacementMap?
c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap);if(void 0!==c){c.isWebGLRenderTarget&&(c=c.texture);if(!0===c.matrixAutoUpdate){b=c.offset;var d=c.repeat,e=c.center;c.matrix.setUvTransform(b.x,b.y,d.x,d.y,c.rotation,e.x,e.y)}a.uvTransform.value.copy(c.matrix)}}function q(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&
(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}console.log("THREE.WebGLRenderer","90dev");a=a||{};var u=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),w=void 0!==
a.context?a.context:null,x=void 0!==a.alpha?a.alpha:!1,z=void 0!==a.depth?a.depth:!0,A=void 0!==a.stencil?a.stencil:!0,y=void 0!==a.antialias?a.antialias:!1,R=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,C=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,B=void 0!==a.powerPreference?a.powerPreference:"default",D=[],E=[],aa=null,G=[];this.domElement=u;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=
[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var Y=this,H=!1,J=null,M=null,P=-1,L="",N=null,U=null,W=new fa,sc=new fa,V=null,I=0,X=u.width,Q=u.height,la=1,da=new fa(0,0,X,Q),ca=new fa(0,0,X,Q),ga=!1,Yd=new nd,Ea=new Eg,ea=!1,Zd=!1,od=new O,Lb=new p,$d={geometries:0,textures:0},Ra={frame:0,calls:0,vertices:0,faces:0,
points:0};this.info={render:Ra,memory:$d,programs:null,autoReset:!0,reset:function(){Ra.frame++;Ra.calls=0;Ra.vertices=0;Ra.faces=0;Ra.points=0}};try{x={alpha:x,depth:z,stencil:A,antialias:y,premultipliedAlpha:R,preserveDrawingBuffer:C,powerPreference:B};u.addEventListener("webglcontextlost",c,!1);u.addEventListener("webglcontextrestored",d,!1);var F=w||u.getContext("webgl",x)||u.getContext("experimental-webgl",x);if(null===F){if(null!==u.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");
throw Error("Error creating WebGL context.");}void 0===F.getShaderPrecisionFormat&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Fg){console.error("THREE.WebGLRenderer: "+Fg.message)}var ia,Z,ba,T,ha,oa,pa,qa,sa,na,ra,ja,ta,ua,va,wa,ma;b();var ka=new ae(Y);this.vr=ka;var ya=new Te(Y,qa,Z.maxTextureSize);this.shadowMap=ya;this.getContext=function(){return F};this.getContextAttributes=function(){return F.getContextAttributes()};this.forceContextLoss=function(){var a=
ia.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=ia.get("WEBGL_lose_context");a&&a.restoreContext()};this.getPixelRatio=function(){return la};this.setPixelRatio=function(a){void 0!==a&&(la=a,this.setSize(X,Q,!1))};this.getSize=function(){return{width:X,height:Q}};this.setSize=function(a,b,c){var d=ka.getDevice();d&&d.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=a,Q=b,u.width=a*la,u.height=b*la,!1!==
c&&(u.style.width=a+"px",u.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=function(){return{width:X*la,height:Q*la}};this.setDrawingBufferSize=function(a,b,c){X=a;Q=b;la=c;u.width=a*c;u.height=b*c;this.setViewport(0,0,a,b)};this.getCurrentViewport=function(){return W};this.setViewport=function(a,b,c,d){da.set(a,Q-b-d,c,d);ba.viewport(W.copy(da).multiplyScalar(la))};this.setScissor=function(a,b,c,d){ca.set(a,Q-b-d,c,d);ba.scissor(sc.copy(ca).multiplyScalar(la))};this.setScissorTest=
function(a){ba.setScissorTest(ga=a)};this.getClearColor=function(){return ja.getClearColor()};this.setClearColor=function(){ja.setClearColor.apply(ja,arguments)};this.getClearAlpha=function(){return ja.getClearAlpha()};this.setClearAlpha=function(){ja.setClearAlpha.apply(ja,arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=F.COLOR_BUFFER_BIT;if(void 0===b||b)d|=F.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=F.STENCIL_BUFFER_BIT;F.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};
this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.dispose=function(){u.removeEventListener("webglcontextlost",c,!1);u.removeEventListener("webglcontextrestored",d,!1);ra.dispose();T.dispose();qa.dispose();ka.dispose()};this.renderBufferImmediate=function(a,b,c){ba.initAttributes();var d=T.get(a);a.hasPositions&&!d.position&&(d.position=F.createBuffer());a.hasNormals&&
!d.normal&&(d.normal=F.createBuffer());a.hasUvs&&!d.uv&&(d.uv=F.createBuffer());a.hasColors&&!d.color&&(d.color=F.createBuffer());b=b.getAttributes();a.hasPositions&&(F.bindBuffer(F.ARRAY_BUFFER,d.position),F.bufferData(F.ARRAY_BUFFER,a.positionArray,F.DYNAMIC_DRAW),ba.enableAttribute(b.position),F.vertexAttribPointer(b.position,3,F.FLOAT,!1,0,0));if(a.hasNormals){F.bindBuffer(F.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&!0===c.flatShading)for(var e=
0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}F.bufferData(F.ARRAY_BUFFER,a.normalArray,F.DYNAMIC_DRAW);ba.enableAttribute(b.normal);F.vertexAttribPointer(b.normal,3,F.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(F.bindBuffer(F.ARRAY_BUFFER,d.uv),F.bufferData(F.ARRAY_BUFFER,a.uvArray,F.DYNAMIC_DRAW),ba.enableAttribute(b.uv),F.vertexAttribPointer(b.uv,2,
F.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(F.bindBuffer(F.ARRAY_BUFFER,d.color),F.bufferData(F.ARRAY_BUFFER,a.colorArray,F.DYNAMIC_DRAW),ba.enableAttribute(b.color),F.vertexAttribPointer(b.color,3,F.FLOAT,!1,0,0));ba.disableUnusedAttributes();F.drawArrays(F.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){var g=e.isMesh&&0>e.matrixWorld.determinant();ba.setMaterial(d,g);var h=v(a,b,d,e);a=c.id+"_"+h.id+"_"+(!0===d.wireframe);var k=!1;a!==L&&(L=a,k=!0);e.morphTargetInfluences&&
(ta.update(e,c,d,h),k=!0);var g=c.index,m=c.attributes.position;b=1;!0===d.wireframe&&(g=pa.getWireframeAttribute(c),b=2);a=ua;if(null!==g){var n=oa.get(g);a=va;a.setIndex(n)}if(k){k=void 0;if(c&&c.isInstancedBufferGeometry&&null===ia.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{void 0===k&&(k=0);ba.initAttributes();var t=c.attributes,h=h.getAttributes(),
l=d.defaultAttributeValues;for(R in h){var r=h[R];if(0<=r){var q=t[R];if(void 0!==q){var p=q.normalized,u=q.itemSize,w=oa.get(q);if(void 0!==w){var y=w.buffer,x=w.type,w=w.bytesPerElement;if(q.isInterleavedBufferAttribute){var z=q.data,A=z.stride,q=q.offset;z&&z.isInstancedInterleavedBuffer?(ba.enableAttributeAndDivisor(r,z.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=z.meshPerAttribute*z.count)):ba.enableAttribute(r);F.bindBuffer(F.ARRAY_BUFFER,y);F.vertexAttribPointer(r,
u,x,p,A*w,(k*A+q)*w)}else q.isInstancedBufferAttribute?(ba.enableAttributeAndDivisor(r,q.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=q.meshPerAttribute*q.count)):ba.enableAttribute(r),F.bindBuffer(F.ARRAY_BUFFER,y),F.vertexAttribPointer(r,u,x,p,0,k*u*w)}}else if(void 0!==l&&(p=l[R],void 0!==p))switch(p.length){case 2:F.vertexAttrib2fv(r,p);break;case 3:F.vertexAttrib3fv(r,p);break;case 4:F.vertexAttrib4fv(r,p);break;default:F.vertexAttrib1fv(r,p)}}}ba.disableUnusedAttributes()}null!==
g&&F.bindBuffer(F.ELEMENT_ARRAY_BUFFER,n.buffer)}n=Infinity;null!==g?n=g.count:void 0!==m&&(n=m.count);g=c.drawRange.start*b;m=null!==f?f.start*b:0;var R=Math.max(g,m);f=Math.max(0,Math.min(n,g+c.drawRange.count*b,m+(null!==f?f.count*b:Infinity))-1-R+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)ba.setLineWidth(d.wireframeLinewidth*(null===J?la:1)),a.setMode(F.LINES);else switch(e.drawMode){case 0:a.setMode(F.TRIANGLES);break;case 1:a.setMode(F.TRIANGLE_STRIP);break;case 2:a.setMode(F.TRIANGLE_FAN)}else e.isLine?
(d=d.linewidth,void 0===d&&(d=1),ba.setLineWidth(d*(null===J?la:1)),e.isLineSegments?a.setMode(F.LINES):e.isLineLoop?a.setMode(F.LINE_LOOP):a.setMode(F.LINE_STRIP)):e.isPoints&&a.setMode(F.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,R,f):a.render(R,f)}};this.compile=function(a,b){D.length=0;E.length=0;a.traverse(function(a){a.isLight&&(D.push(a),a.castShadow&&E.push(a))});sa.setup(D,E,b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=
0;c<b.material.length;c++)n(b.material[c],a.fog,b);else n(b.material,a.fog,b)})};var za=!1,xa=null;this.animate=function(a){xa=a;za||((a=ka.getDevice())&&a.isPresenting?a.requestAnimationFrame(h):window.requestAnimationFrame(h),za=!0)};this.render=function(a,b,c,d){if(!b||!b.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else if(!H){L="";P=-1;N=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();ka.enabled&&(b=ka.getCamera(b));
a.onBeforeRender(Y,a,b,c);od.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);Yd.setFromMatrix(od);D.length=0;E.length=0;G.length=0;Zd=this.localClippingEnabled;ea=Ea.init(this.clippingPlanes,Zd,b);aa=ra.get(a,b);aa.init();k(a,b,Y.sortObjects);!0===Y.sortObjects&&aa.sort();ea&&Ea.beginShadows();ya.render(E,a,b);sa.setup(D,E,b);ea&&Ea.endShadows();this.info.autoReset&&this.info.reset();void 0===c&&(c=null);this.setRenderTarget(c);ja.render(aa,a,b,d);d=aa.opaque;var e=aa.transparent;if(a.overrideMaterial){var f=
a.overrideMaterial;d.length&&m(d,a,b,f);e.length&&m(e,a,b,f)}else d.length&&m(d,a,b),e.length&&m(e,a,b);wa.render(G,a,b);c&&ha.updateRenderTargetMipmap(c);ba.buffers.depth.setTest(!0);ba.buffers.depth.setMask(!0);ba.buffers.color.setMask(!0);ba.setPolygonOffset(!1);a.onAfterRender(Y,a,b);ka.enabled&&ka.submitFrame();aa=null}};this.setFaceCulling=function(a,b){ba.setCullFace(a);ba.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=I;a>=Z.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+
a+" texture units while this GPU supports only "+Z.maxTextures);I+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ha.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ha.setTexture2D(b,
c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ha.setTextureCube(b,c):ha.setTextureCubeDynamic(b,c)}}();this.getRenderTarget=function(){return J};this.setRenderTarget=function(a){(J=a)&&void 0===T.get(a).__webglFramebuffer&&ha.setupRenderTarget(a);
var b=null,c=!1;a?(b=T.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube&&(b=b[a.activeCubeFace],c=!0),W.copy(a.viewport),sc.copy(a.scissor),V=a.scissorTest):(W.copy(da).multiplyScalar(la),sc.copy(ca).multiplyScalar(la),V=ga);M!==b&&(F.bindFramebuffer(F.FRAMEBUFFER,b),M=b);ba.viewport(W);ba.scissor(sc);ba.setScissorTest(V);c&&(c=T.get(a.texture),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,c.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=
function(a,b,c,d,e,f){if(a&&a.isWebGLRenderTarget){var g=T.get(a).__webglFramebuffer;if(g){var h=!1;g!==M&&(F.bindFramebuffer(F.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&ma.convert(m)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||ma.convert(n)===F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ia.get("OES_texture_float")||
ia.get("WEBGL_color_buffer_float"))||1016===n&&ia.get("EXT_color_buffer_half_float")?F.checkFramebufferStatus(F.FRAMEBUFFER)===F.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&F.readPixels(b,c,d,e,ma.convert(m),ma.convert(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&
F.bindFramebuffer(F.FRAMEBUFFER,M)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};this.copyFramebufferToTexture=function(a,b,c){var d=b.image.width,e=b.image.height,f=ma.convert(b.format);this.setTexture2D(b,0);F.copyTexImage2D(F.TEXTURE_2D,c||0,f,a.x,a.y,d,e,0)}}function Mb(a,b){this.name="";this.color=new G(a);this.density=void 0!==b?b:2.5E-4}function Nb(a,b,c){this.name="";this.color=new G(a);this.near=void 0!==b?b:1;this.far=void 0!==
c?c:1E3}function qd(){B.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function fb(a){N.call(this);this.type="SpriteMaterial";this.color=new G(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}function Bc(a){B.call(this);this.type="Sprite";this.material=void 0!==a?a:new fb;this.center=new C(.5,.5)}function Cc(){B.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function Dc(a,
b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new O)}function rd(){B.call(this);this.type="Bone"}function sd(a,b){ra.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new O;
this.bindMatrixInverse=new O;a=this.initBones();a=new Dc(a);this.bind(a,this.matrixWorld);this.normalizeSkinWeights()}function W(a){N.call(this);this.type="LineBasicMaterial";this.color=new G(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function ja(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new V(a,b);B.call(this);this.type="Line";this.geometry=void 0!==a?a:
new E;this.material=void 0!==b?b:new W({color:16777215*Math.random()})}function V(a,b){ja.call(this,a,b);this.type="LineSegments"}function td(a,b){ja.call(this,a,b);this.type="LineLoop"}function Fa(a){N.call(this);this.type="PointsMaterial";this.color=new G(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Ob(a,b){B.call(this);this.type="Points";this.geometry=void 0!==a?a:new E;this.material=void 0!==b?b:new Fa({color:16777215*Math.random()})}function ud(){B.call(this);
this.type="Group"}function ce(a,b,c,d,e,f,g,h,k){da.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1}function Pb(a,b,c,d,e,f,g,h,k,m,t,n){da.call(this,null,f,g,h,k,m,d,e,t,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Ec(a,b,c,d,e,f,g,h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);da.call(this,
null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Qb(a){E.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var k=a.faces;var m=0;for(d=k.length;m<d;m++){var t=k[m];for(c=0;3>c;c++){var n=t[h[c]];var l=t[h[(c+1)%3]];f[0]=Math.min(n,l);f[1]=Math.max(n,l);n=f[0]+","+f[1];void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]})}}for(n in g)m=g[n],
h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z)}else if(a&&a.isBufferGeometry){var h=new p;if(null!==a.index){k=a.attributes.position;t=a.index;var r=a.groups;0===r.length&&(r=[{start:0,count:t.count,materialIndex:0}]);a=0;for(e=r.length;a<e;++a)for(m=r[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)n=t.getX(m+c),l=t.getX(m+(c+1)%3),f[0]=Math.min(n,l),f[1]=Math.max(n,l),n=f[0]+","+f[1],void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]});for(n in g)m=g[n],
h.fromBufferAttribute(k,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(k,m.index2),b.push(h.x,h.y,h.z)}else for(k=a.attributes.position,m=0,d=k.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z)}this.addAttribute("position",new D(b,3))}function Fc(a,b,c){J.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Rb(a,b,c));this.mergeVertices()}
function Rb(a,b,c){E.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new p,k=new p,m=new p,t=new p,n=new p,l,r,q=b+1;for(l=0;l<=c;l++){var u=l/c;for(r=0;r<=b;r++){var w=r/b,k=a(w,u,k);e.push(k.x,k.y,k.z);0<=w-1E-5?(m=a(w-1E-5,u,m),t.subVectors(k,m)):(m=a(w+1E-5,u,m),t.subVectors(m,k));0<=u-1E-5?(m=a(w,u-1E-5,m),n.subVectors(k,m)):(m=a(w,u+1E-5,m),n.subVectors(m,k));h.crossVectors(t,n).normalize();f.push(h.x,h.y,h.z);g.push(w,u)}}for(l=
0;l<c;l++)for(r=0;r<b;r++)a=l*q+r+1,h=(l+1)*q+r+1,k=(l+1)*q+r,d.push(l*q+r,a,k),d.push(a,h,k);this.setIndex(d);this.addAttribute("position",new D(e,3));this.addAttribute("normal",new D(f,3));this.addAttribute("uv",new D(g,2))}function Gc(a,b,c,d){J.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new ta(a,b,c,d));this.mergeVertices()}function ta(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=
a[b+1];c.z=a[b+2]}function g(a,b,c,d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===c.z&&(k[b]=d/2/Math.PI+.5)}E.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],k=[];(function(a){for(var c=new p,d=new p,g=new p,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k,m,l=c,x=d,z=g,A=Math.pow(2,a),y=[];for(m=0;m<=A;m++){y[m]=[];var R=l.clone().lerp(z,m/A),C=x.clone().lerp(z,m/A),B=A-m;for(k=0;k<=B;k++)y[m][k]=0===k&&m===
A?R:R.clone().lerp(C,k/B)}for(m=0;m<A;m++)for(k=0;k<2*(A-m)-1;k++)l=Math.floor(k/2),0===k%2?(e(y[m][l+1]),e(y[m+1][l]),e(y[m][l])):(e(y[m][l+1]),e(y[m+1][l+1]),e(y[m+1][l]))}})(d);(function(a){for(var b=new p,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new p,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/
Math.PI+.5));for(var a=new p,b=new p,c=new p,d=new p,e=new C,f=new C,l=new C,w=0,x=0;w<h.length;w+=9,x+=6){a.set(h[w+0],h[w+1],h[w+2]);b.set(h[w+3],h[w+4],h[w+5]);c.set(h[w+6],h[w+7],h[w+8]);e.set(k[x+0],k[x+1]);f.set(k[x+2],k[x+3]);l.set(k[x+4],k[x+5]);d.copy(a).add(b).add(c).divideScalar(3);var z=Math.atan2(d.z,-d.x);g(e,x+0,a,z);g(f,x+2,b,z);g(l,x+4,c,z)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+
4]+=1))})();this.addAttribute("position",new D(h,3));this.addAttribute("normal",new D(h.slice(),3));this.addAttribute("uv",new D(k,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Hc(a,b){J.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sb(a,b));this.mergeVertices()}function Sb(a,b){ta.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,
detail:b}}function Ic(a,b){J.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new rb(a,b));this.mergeVertices()}function rb(a,b){ta.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Jc(a,b){J.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tb(a,b));this.mergeVertices()}
function Tb(a,b){var c=(1+Math.sqrt(5))/2;ta.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Kc(a,b){J.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Ub(a,b));this.mergeVertices()}
function Ub(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;ta.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";
this.parameters={radius:a,detail:b}}function Lc(a,b,c,d,e,f){J.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Vb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Vb(a,b,c,d,e){function f(e){t=a.getPointAt(e/b,t);var f=g.normals[e];e=g.binormals[e];for(l=0;l<=d;l++){var m=
l/d*Math.PI*2,n=Math.sin(m),m=-Math.cos(m);k.x=m*f.x+n*e.x;k.y=m*f.y+n*e.y;k.z=m*f.z+n*e.z;k.normalize();q.push(k.x,k.y,k.z);h.x=t.x+c*k.x;h.y=t.y+c*k.y;h.z=t.z+c*k.z;r.push(h.x,h.y,h.z)}}E.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new p,k=new p,m=new C,t=new p,n,l,r=[],q=[],u=[],
w=[];for(n=0;n<b;n++)f(n);f(!1===e?b:0);for(n=0;n<=b;n++)for(l=0;l<=d;l++)m.x=n/b,m.y=l/d,u.push(m.x,m.y);(function(){for(l=1;l<=b;l++)for(n=1;n<=d;n++){var a=(d+1)*l+(n-1),c=(d+1)*l+n,e=(d+1)*(l-1)+n;w.push((d+1)*(l-1)+(n-1),a,e);w.push(a,c,e)}})();this.setIndex(w);this.addAttribute("position",new D(r,3));this.addAttribute("normal",new D(q,3));this.addAttribute("uv",new D(u,2))}function Mc(a,b,c,d,e,f,g){J.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,
radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Wb(a,b,c,d,e,f));this.mergeVertices()}function Wb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}E.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;
c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],k=[],m=[],t=[],n,l=new p,r=new p,q=new p,u=new p,w=new p,x=new p,z=new p;for(n=0;n<=c;++n){var A=n/c*e*Math.PI*2;g(A,e,f,a,q);g(A+.01,e,f,a,u);x.subVectors(u,q);z.addVectors(u,q);w.crossVectors(x,z);z.crossVectors(w,x);w.normalize();z.normalize();for(A=0;A<=d;++A){var y=A/d*Math.PI*2,R=-b*Math.cos(y),y=b*Math.sin(y);l.x=q.x+(R*z.x+y*w.x);l.y=q.y+(R*z.y+y*w.y);l.z=q.z+(R*z.z+y*w.z);k.push(l.x,l.y,l.z);r.subVectors(l,q).normalize();m.push(r.x,
r.y,r.z);t.push(n/c);t.push(A/d)}}for(A=1;A<=c;A++)for(n=1;n<=d;n++)a=(d+1)*A+(n-1),b=(d+1)*A+n,e=(d+1)*(A-1)+n,h.push((d+1)*(A-1)+(n-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new D(k,3));this.addAttribute("normal",new D(m,3));this.addAttribute("uv",new D(t,2))}function Nc(a,b,c,d,e){J.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Xb(a,b,c,d,e));this.mergeVertices()}function Xb(a,
b,c,d,e){E.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],k=[],m=new p,t=new p,n=new p,l,r;for(l=0;l<=c;l++)for(r=0;r<=d;r++){var q=r/d*e,u=l/c*Math.PI*2;t.x=(a+b*Math.cos(u))*Math.cos(q);t.y=(a+b*Math.cos(u))*Math.sin(q);t.z=b*Math.sin(u);g.push(t.x,t.y,t.z);m.x=a*Math.cos(q);m.y=a*Math.sin(q);n.subVectors(t,m).normalize();h.push(n.x,n.y,n.z);
k.push(r/d);k.push(l/c)}for(l=1;l<=c;l++)for(r=1;r<=d;r++)a=(d+1)*(l-1)+r-1,b=(d+1)*(l-1)+r,e=(d+1)*l+r,f.push((d+1)*l+r-1,a,e),f.push(a,b,e);this.setIndex(f);this.addAttribute("position",new D(g,3));this.addAttribute("normal",new D(h,3));this.addAttribute("uv",new D(k,2))}function $e(a,b,c,d,e){for(var f,g=0,h=b,k=c-d;h<c;h+=d)g+=(a[k]-a[h])*(a[h+1]+a[k+1]),k=h;if(e===0<g)for(e=b;e<c;e+=d)f=af(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=af(e,a[e],a[e+1],f);f&&sb(f,f.next)&&(Oc(f),f=f.next);return f}
function Pc(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!sb(a,a.next)&&0!==qa(a.prev,a,a.next))a=a.next;else{Oc(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}function Qc(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,k=h;do null===k.z&&(k.z=de(k.x,k.y,d,e,f)),k.prevZ=k.prev,k=k.nextZ=k.next;while(k!==h);k.prevZ.nextZ=null;k.prevZ=null;var h=k,m,t,n,l,r=1;do{k=h;var q=h=null;for(t=0;k;){t++;var p=k;for(m=n=0;m<r&&(n++,p=p.nextZ,p);m++);for(l=r;0<n||0<l&&p;)0!==n&&(0===l||!p||
k.z<=p.z)?(m=k,k=k.nextZ,n--):(m=p,p=p.nextZ,l--),q?q.nextZ=m:h=m,m.prevZ=q,q=m;k=p}q.nextZ=null;r*=2}while(1<t)}for(h=a;a.prev!==a.next;){k=a.prev;p=a.next;if(f)a:{q=a;l=d;var w=e,x=f;t=q.prev;n=q;r=q.next;if(0<=qa(t,n,r))q=!1;else{var z=t.x>n.x?t.x>r.x?t.x:r.x:n.x>r.x?n.x:r.x,A=t.y>n.y?t.y>r.y?t.y:r.y:n.y>r.y?n.y:r.y;m=de(t.x<n.x?t.x<r.x?t.x:r.x:n.x<r.x?n.x:r.x,t.y<n.y?t.y<r.y?t.y:r.y:n.y<r.y?n.y:r.y,l,w,x);l=de(z,A,l,w,x);for(w=q.nextZ;w&&w.z<=l;){if(w!==q.prev&&w!==q.next&&vd(t.x,t.y,n.x,n.y,
r.x,r.y,w.x,w.y)&&0<=qa(w.prev,w,w.next)){q=!1;break a}w=w.nextZ}for(w=q.prevZ;w&&w.z>=m;){if(w!==q.prev&&w!==q.next&&vd(t.x,t.y,n.x,n.y,r.x,r.y,w.x,w.y)&&0<=qa(w.prev,w,w.next)){q=!1;break a}w=w.prevZ}q=!0}}else a:if(q=a,t=q.prev,n=q,r=q.next,0<=qa(t,n,r))q=!1;else{for(m=q.next.next;m!==q.prev;){if(vd(t.x,t.y,n.x,n.y,r.x,r.y,m.x,m.y)&&0<=qa(m.prev,m,m.next)){q=!1;break a}m=m.next}q=!0}if(q)b.push(k.i/c),b.push(a.i/c),b.push(p.i/c),Oc(a),h=a=p.next;else if(a=p,a===h){if(!g)Qc(Pc(a),b,c,d,e,f,1);else if(1===
g){g=b;h=c;k=a;do p=k.prev,q=k.next.next,!sb(p,q)&&bf(p,k,k.next,q)&&Rc(p,q)&&Rc(q,p)&&(g.push(p.i/h),g.push(k.i/h),g.push(q.i/h),Oc(k),Oc(k.next),k=a=q),k=k.next;while(k!==a);a=k;Qc(a,b,c,d,e,f,2)}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(k=g.i!==h.i){k=g;p=h;if(q=k.next.i!==p.i&&k.prev.i!==p.i){b:{q=k;do{if(q.i!==k.i&&q.next.i!==k.i&&q.i!==p.i&&q.next.i!==p.i&&bf(q,q.next,k,p)){q=!0;break b}q=q.next}while(q!==k);q=!1}q=!q}if(q=q&&Rc(k,p)&&Rc(p,k)){q=k;t=!1;n=(k.x+p.x)/2;p=(k.y+p.y)/
2;do q.y>p!==q.next.y>p&&q.next.y!==q.y&&n<(q.next.x-q.x)*(p-q.y)/(q.next.y-q.y)+q.x&&(t=!t),q=q.next;while(q!==k);q=t}k=q}if(k){a=cf(g,h);g=Pc(g,g.next);a=Pc(a,a.next);Qc(g,b,c,d,e,f);Qc(a,b,c,d,e,f);break a}h=h.next}g=g.next}while(g!==a)}break}}}}function Gg(a,b){return a.x-b.x}function Hg(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var h=
c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;for(var g=h.x,k=h.y,m=Infinity,t,c=h.next;c!==b;)d>=c.x&&c.x>=g&&d!==c.x&&vd(e<k?d:f,e,g,k,e<k?f:d,e,c.x,c.y)&&(t=Math.abs(e-c.y)/(d-c.x),(t<m||t===m&&c.x>h.x)&&Rc(c,a)&&(h=c,m=t)),c=c.next;return h}function de(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<
1)&1431655765)<<1}function Ig(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function vd(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h)}function qa(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function sb(a,b){return a.x===b.x&&a.y===b.y}function bf(a,b,c,d){return sb(a,b)&&sb(c,d)||sb(a,d)&&sb(c,b)?!0:0<qa(a,b,c)!==0<qa(a,b,d)&&0<qa(c,d,a)!==0<qa(c,d,b)}function Rc(a,b){return 0>qa(a.prev,a,a.next)?0<=qa(a,b,a.next)&&
0<=qa(a,a.prev,b):0>qa(a,b,a.prev)||0>qa(a,a.next,b)}function cf(a,b){var c=new ee(a.i,a.x,a.y),d=new ee(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function af(a,b,c,d){a=new ee(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function Oc(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ee(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=
this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function df(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function ef(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function gb(a,b){J.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new Ga(a,b));this.mergeVertices()}function Ga(a,b){"undefined"!==typeof a&&(E.call(this),this.type="ExtrudeBufferGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeVertexNormals())}
function Sc(a,b){J.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Yb(a,b));this.mergeVertices()}function Yb(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new J;a=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&
(b.bevelEnabled=!1);Ga.call(this,a,b);this.type="TextBufferGeometry"}function Tc(a,b,c,d,e,f,g){J.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new tb(a,b,c,d,e,f,g));this.mergeVertices()}function tb(a,b,c,d,e,f,g){E.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||
1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,k,m,t=0,n=[],l=new p,r=new p,q=[],u=[],w=[],x=[];for(m=0;m<=c;m++){var z=[],A=m/c;for(k=0;k<=b;k++){var y=k/b;l.x=-a*Math.cos(d+y*e)*Math.sin(f+A*g);l.y=a*Math.cos(f+A*g);l.z=a*Math.sin(d+y*e)*Math.sin(f+A*g);u.push(l.x,l.y,l.z);r.set(l.x,l.y,l.z).normalize();w.push(r.x,r.y,r.z);x.push(y,1-A);z.push(t++)}n.push(z)}for(m=0;m<c;m++)for(k=0;k<b;k++)a=
n[m][k+1],d=n[m][k],e=n[m+1][k],g=n[m+1][k+1],(0!==m||0<f)&&q.push(a,d,g),(m!==c-1||h<Math.PI)&&q.push(d,e,g);this.setIndex(q);this.addAttribute("position",new D(u,3));this.addAttribute("normal",new D(w,3));this.addAttribute("uv",new D(x,2))}function Uc(a,b,c,d,e,f){J.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Zb(a,b,c,d,e,f));this.mergeVertices()}function Zb(a,b,c,d,e,f){E.call(this);
this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],k=[],m=[],t=a,n=(b-a)/d,l=new p,r=new C,q,u;for(q=0;q<=d;q++){for(u=0;u<=c;u++)a=e+u/c*f,l.x=t*Math.cos(a),l.y=t*Math.sin(a),h.push(l.x,l.y,l.z),k.push(0,0,1),r.x=(l.x/b+1)/2,r.y=(l.y/b+1)/2,m.push(r.x,r.y);t+=n}for(q=0;q<d;q++)for(b=q*(c+
1),u=0;u<c;u++)a=u+b,e=a+c+1,f=a+c+2,t=a+1,g.push(a,e,t),g.push(e,f,t);this.setIndex(g);this.addAttribute("position",new D(h,3));this.addAttribute("normal",new D(k,3));this.addAttribute("uv",new D(m,2))}function Vc(a,b,c,d){J.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new $b(a,b,c,d));this.mergeVertices()}function $b(a,b,c,d){E.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};
b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=S.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,k=new p,m=new C,t;for(t=0;t<=b;t++){var n=c+t*h*d;var l=Math.sin(n),r=Math.cos(n);for(n=0;n<=a.length-1;n++)k.x=a[n].x*l,k.y=a[n].y,k.z=a[n].x*r,f.push(k.x,k.y,k.z),m.x=t/b,m.y=n/(a.length-1),g.push(m.x,m.y)}for(t=0;t<b;t++)for(n=0;n<a.length-1;n++)c=n+t*a.length,h=c+a.length,k=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,k,m);this.setIndex(e);this.addAttribute("position",new D(f,3));this.addAttribute("uv",new D(g,
2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new p,f=new p,g=new p,c=b*a.length*3,n=t=0;t<a.length;t++,n+=3)e.x=d[n+0],e.y=d[n+1],e.z=d[n+2],f.x=d[c+n+0],f.y=d[c+n+1],f.z=d[c+n+2],g.addVectors(e,f).normalize(),d[n+0]=d[c+n+0]=g.x,d[n+1]=d[c+n+1]=g.y,d[n+2]=d[c+n+2]=g.z}function ub(a,b){J.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,
curveSegments:b};this.fromBufferGeometry(new vb(a,b));this.mergeVertices()}function vb(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,t=a.holes;if(!1===Ya.isClockWise(m))for(m=m.reverse(),a=0,c=t.length;a<c;a++){var l=t[a];!0===Ya.isClockWise(l)&&(t[a]=l.reverse())}var p=Ya.triangulateShape(m,t);a=0;for(c=t.length;a<c;a++)l=t[a],m=m.concat(l);a=0;for(c=m.length;a<c;a++)l=m[a],e.push(l.x,l.y,0),f.push(0,0,1),g.push(l.x,l.y);a=0;for(c=p.length;a<c;a++)m=p[a],d.push(m[0]+h,
m[1]+h,m[2]+h),k+=3}E.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,k=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,k,m),h+=k,k=0;this.setIndex(d);this.addAttribute("position",new D(e,3));this.addAttribute("normal",new D(f,3));this.addAttribute("uv",new D(g,2))}function ff(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);
return b}function ac(a,b){E.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(S.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new J;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,k=g.length;h<k;h++)for(var m=g[h],t=0;3>t;t++){var n=m[f[t]];var l=m[f[(t+1)%3]];d[0]=Math.min(n,l);d[1]=Math.max(n,l);n=d[0]+","+d[1];void 0===e[n]?e[n]={index1:d[0],index2:d[1],
face1:h,face2:void 0}:e[n].face2=h}for(n in e)if(d=e[n],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.addAttribute("position",new D(c,3))}function wb(a,b,c,d,e,f,g,h){J.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Za(a,b,c,d,e,f,g,h));this.mergeVertices()}function Za(a,
b,c,d,e,f,g,h){function k(c){var e,f=new C,k=new p,v=0,u=!0===c?a:b,z=!0===c?1:-1;var B=q;for(e=1;e<=d;e++)n.push(0,w*z,0),l.push(0,z,0),r.push(.5,.5),q++;var D=q;for(e=0;e<=d;e++){var E=e/d*h+g,G=Math.cos(E),E=Math.sin(E);k.x=u*E;k.y=w*z;k.z=u*G;n.push(k.x,k.y,k.z);l.push(0,z,0);f.x=.5*G+.5;f.y=.5*E*z+.5;r.push(f.x,f.y);q++}for(e=0;e<d;e++)f=B+e,k=D+e,!0===c?t.push(k,k+1,f):t.push(k+1,k,f),v+=3;m.addGroup(x,v,!0===c?1:2);x+=v}E.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,
radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var t=[],n=[],l=[],r=[],q=0,u=[],w=c/2,x=0;(function(){var f,k,v=new p,R=new p,B=0,C=(b-a)/c;for(k=0;k<=e;k++){var D=[],E=k/e,G=E*(b-a)+a;for(f=0;f<=d;f++){var H=f/d,Y=H*h+g,K=Math.sin(Y),Y=Math.cos(Y);R.x=G*K;R.y=-E*c+w;R.z=G*Y;n.push(R.x,R.y,R.z);v.set(K,
C,Y).normalize();l.push(v.x,v.y,v.z);r.push(H,1-E);D.push(q++)}u.push(D)}for(f=0;f<d;f++)for(k=0;k<e;k++)v=u[k+1][f],R=u[k+1][f+1],C=u[k][f+1],t.push(u[k][f],v,C),t.push(v,R,C),B+=6;m.addGroup(x,B,0);x+=B})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(t);this.addAttribute("position",new D(n,3));this.addAttribute("normal",new D(l,3));this.addAttribute("uv",new D(r,2))}function Wc(a,b,c,d,e,f,g){wb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,
heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Xc(a,b,c,d,e,f,g){Za.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Yc(a,b,c,d){J.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new bc(a,b,c,d));this.mergeVertices()}function bc(a,b,c,d){E.call(this);this.type="CircleBufferGeometry";
this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],k,m=new p,t=new C;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var n=0;for(k=3;n<=b;n++,k+=3){var l=c+n/b*d;m.x=a*Math.cos(l);m.y=a*Math.sin(l);f.push(m.x,m.y,m.z);g.push(0,0,1);t.x=(f[k]/a+1)/2;t.y=(f[k+1]/a+1)/2;h.push(t.x,t.y)}for(k=1;k<=b;k++)e.push(k,k+1,0);this.setIndex(e);this.addAttribute("position",new D(f,3));this.addAttribute("normal",
new D(g,3));this.addAttribute("uv",new D(h,2))}function cc(a){N.call(this);this.type="ShadowMaterial";this.color=new G(0);this.opacity=1;this.transparent=this.lights=!0;this.setValues(a)}function dc(a){Ba.call(this,a);this.type="RawShaderMaterial"}function Sa(a){N.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new G(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=
new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function xb(a){Sa.call(this);
this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ha(a){N.call(this);this.type="MeshPhongMaterial";this.color=new G(16777215);this.specular=new G(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,
1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function yb(a){Ha.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function zb(a){N.call(this);
this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function Ab(a){N.call(this);this.type="MeshLambertMaterial";this.color=new G(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=
1;this.emissive=new G(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Bb(a){W.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function fe(a,b,c){var d=this,e=!1,f=
0,g=0,h=void 0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return h?h(a):a};this.setURLModifier=function(a){h=a;return this}}function Ia(a){this.manager=void 0!==a?a:ua}function gf(a){this.manager=
void 0!==a?a:ua;this._parser=null}function ge(a){this.manager=void 0!==a?a:ua;this._parser=null}function Zc(a){this.manager=void 0!==a?a:ua}function he(a){this.manager=void 0!==a?a:ua}function wd(a){this.manager=void 0!==a?a:ua}function H(){this.type="Curve";this.arcLengthDivisions=200}function ka(a,b,c,d,e,f,g,h){H.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=
h||0}function ec(a,b,c,d,e,f){ka.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function ie(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,k){e=k*(g-e);h=k*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,k,m,t){e=((f-e)/k-(g-e)/(k+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+t)+(h-g)/t)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function ha(a,b,c,d){H.call(this);this.type="CatmullRomCurve3";this.points=a||
[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function hf(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function $c(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function ad(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Ja(a,b,c,d){H.call(this);this.type="CubicBezierCurve";this.v0=a||new C;this.v1=b||new C;this.v2=c||new C;this.v3=d||new C}function Ta(a,b,c,d){H.call(this);this.type="CubicBezierCurve3";
this.v0=a||new p;this.v1=b||new p;this.v2=c||new p;this.v3=d||new p}function va(a,b){H.call(this);this.type="LineCurve";this.v1=a||new C;this.v2=b||new C}function Ka(a,b){H.call(this);this.type="LineCurve3";this.v1=a||new p;this.v2=b||new p}function La(a,b,c){H.call(this);this.type="QuadraticBezierCurve";this.v0=a||new C;this.v1=b||new C;this.v2=c||new C}function Ua(a,b,c){H.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new p;this.v1=b||new p;this.v2=c||new p}function Ma(a){H.call(this);
this.type="SplineCurve";this.points=a||[]}function $a(){H.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}function Na(a){$a.call(this);this.type="Path";this.currentPoint=new C;a&&this.setFromPoints(a)}function hb(a){Na.call(this,a);this.uuid=S.generateUUID();this.type="Shape";this.holes=[]}function ca(a,b){B.call(this);this.type="Light";this.color=new G(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function xd(a,b,c){ca.call(this,a,c);this.type="HemisphereLight";this.castShadow=
void 0;this.position.copy(B.DefaultUp);this.updateMatrix();this.groundColor=new G(b)}function Cb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new C(512,512);this.map=null;this.matrix=new O}function yd(){Cb.call(this,new Z(50,1,.5,500))}function zd(a,b,c,d,e,f){ca.call(this,a,b);this.type="SpotLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});
this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new yd}function Ad(a,b,c,d){ca.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new Cb(new Z(90,1,.5,500))}function Bd(){Cb.call(this,new Ib(-5,5,5,-5,.5,500))}function Cd(a,b){ca.call(this,
a,b);this.type="DirectionalLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B;this.shadow=new Bd}function Dd(a,b){ca.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function Ed(a,b,c,d){ca.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Fd(a,b,c,d){T.call(this,a,b,c,d)}function Gd(a,b,c){T.call(this,a,b,c)}function ya(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?
d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Hd(a,b,c,d){ya.call(this,a,b,c,d)}function bd(a,b,c,d){T.call(this,a,b,c,d)}function Id(a,b,c,d){T.call(this,a,b,c,d)}function fc(a,b,c,d){T.call(this,a,b,c,d)}function Jd(a,b,c,d){ya.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function cd(a,b,c,d){ya.call(this,a,b,c,d)}function Kd(a,b,c,d){ya.call(this,a,b,c,d)}function T(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");
if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=oa.convertArray(b,this.TimeBufferType);this.values=oa.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function gc(a,b,c,d){T.call(this,a,b,c,d)}function Ca(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=S.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Ld(a){this.manager=
void 0!==a?a:ua;this.textures={}}function je(a){this.manager=void 0!==a?a:ua}function hc(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function ke(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:ua;this.withCredentials=!1}function jf(a){this.manager=void 0!==a?a:ua;this.texturePath=""}function le(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.manager=void 0!==a?a:ua;this.options=void 0}function me(){this.type="ShapePath";this.subPaths=[];this.currentPath=null}function ne(a){this.type="Font";this.data=a}function kf(a){this.manager=void 0!==a?a:ua}function oe(a){this.manager=void 0!==a?a:ua}function lf(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Z;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=
new Z;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function dd(a,b,c){B.call(this);this.type="CubeCamera";var d=new Z(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new p(1,0,0));this.add(d);var e=new Z(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new p(-1,0,0));this.add(e);var f=new Z(90,1,a,b);f.up.set(0,0,1);f.lookAt(new p(0,1,0));this.add(f);var g=new Z(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new p(0,-1,0));this.add(g);var h=new Z(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new p(0,0,1));this.add(h);var k=
new Z(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new p(0,0,-1));this.add(k);this.renderTarget=new Gb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,m=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,
h,c);c.texture.generateMipmaps=m;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)};this.clear=function(a,b,c,d){for(var e=this.renderTarget,f=0;6>f;f++)e.activeCubeFace=f,a.setRenderTarget(e),a.clear(b,c,d);a.setRenderTarget(null)}}function pe(){B.call(this);this.type="AudioListener";this.context=qe.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function ic(a){B.call(this);this.type="Audio";this.context=a.context;this.gain=this.context.createGain();
this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.offset=this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function re(a){ic.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function se(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}
function te(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function mf(a,b,c){c=c||pa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)}function pa(a,b,c){this.path=b;this.parsedPath=c||pa.parseTrackName(b);this.node=pa.findNode(a,this.parsedPath.nodeName)||
a;this.rootNode=a}function nf(){this.uuid=S.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length},get inUse(){return this.total-d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}function of(a,b,
c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=
this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function ue(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Md(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function ve(){E.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function we(a,b,c,d){this.uuid=S.generateUUID();
this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function jc(a,b){this.uuid=S.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function xe(a,b,c){jc.call(this,a,b);this.meshPerAttribute=c||1}function ye(a,b,c){L.call(this,a,b);this.meshPerAttribute=c||1}function pf(a,b,c,d){this.ray=new pb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},
LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function qf(a,b){return a.distance-b.distance}function ze(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)ze(a[d],b,c,!0)}}function rf(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function sf(a,
b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function tf(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function Ae(a,b){this.min=void 0!==a?a:new C(Infinity,Infinity);this.max=void 0!==b?b:new C(-Infinity,-Infinity)}function ed(a){B.call(this);this.material=a;this.render=function(){}}function fd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&
c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new E;b=new D(6*b,3);c.addAttribute("position",b);V.call(this,c,new W({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function kc(a,b){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new E;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),
Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new D(b,3));b=new W({fog:!1});this.cone=new V(a,b);this.add(this.cone);this.update()}function uf(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,uf(a.children[c]));return b}function lc(a){for(var b=uf(a),c=new E,d=[],e=[],f=new G(0,0,1),g=new G(0,1,0),h=0;h<b.length;h++){var k=b[h];k.parent&&k.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.addAttribute("position",
new D(d,3));c.addAttribute("color",new D(e,3));d=new W({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});V.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1}function mc(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new tb(b,4,2);b=new ma({wireframe:!0,fog:!1});ra.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function nc(a,b){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=
a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new W({fog:!1});b=new E;b.addAttribute("position",new L(new Float32Array(15),3));this.line=new ja(b,a);this.add(this.line);this.update()}function oc(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new rb(b);a.rotateY(.5*Math.PI);this.material=new ma({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");b=new Float32Array(3*
b.count);a.addAttribute("color",new L(b,3));this.add(new ra(a,this.material));this.update()}function gd(a,b,c,d){a=a||10;b=b||10;c=new G(void 0!==c?c:4473924);d=new G(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],k=0,m=0,l=-g;k<=b;k++,l+=f){a.push(-g,0,l,g,0,l);a.push(l,0,-g,l,0,g);var n=k===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3}b=new E;b.addAttribute("position",new D(a,3));b.addAttribute("color",new D(h,3));c=new W({vertexColors:2});
V.call(this,b,c)}function Nd(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new G(void 0!==e?e:4473924);f=new G(void 0!==f?f:8947848);var g=[],h=[],k;for(k=0;k<=b;k++){var m=k/b*2*Math.PI;var l=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(l,0,m);var n=k&1?e:f;h.push(n.r,n.g,n.b);h.push(n.r,n.g,n.b)}for(k=0;k<=c;k++){n=k&1?e:f;var p=a-a/c*k;for(b=0;b<d;b++)m=b/d*2*Math.PI,l=Math.sin(m)*p,m=Math.cos(m)*p,g.push(l,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,l=Math.sin(m)*p,m=Math.cos(m)*p,g.push(l,
0,m),h.push(n.r,n.g,n.b)}a=new E;a.addAttribute("position",new D(g,3));a.addAttribute("color",new D(h,3));g=new W({vertexColors:2});V.call(this,a,g)}function hd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new E;b=new D(6*b,3);c.addAttribute("position",b);V.call(this,c,new W({color:a,
linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function pc(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new E;a.addAttribute("position",new D([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new W({fog:!1});this.lightPlane=new ja(a,b);this.add(this.lightPlane);a=new E;a.addAttribute("position",new D([0,0,0,0,0,1],3));this.targetLine=new ja(a,b);this.add(this.targetLine);this.update()}function id(a){function b(a,
b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new E,e=new W({color:16777215,vertexColors:1}),f=[],g=[],h={},k=new G(16755200),m=new G(16711680),l=new G(43775),n=new G(16777215),p=new G(3355443);b("n1","n2",k);b("n2","n4",k);b("n4","n3",k);b("n3","n1",k);b("f1","f2",k);b("f2","f4",k);b("f4","f3",k);b("f3","f1",k);b("n1","f1",k);b("n2","f2",k);b("n3","f3",k);b("n4","f4",k);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",
m);b("u1","u2",l);b("u2","u3",l);b("u3","u1",l);b("c","t",n);b("p","c",p);b("cn1","cn2",p);b("cn3","cn4",p);b("cf1","cf2",p);b("cf3","cf4",p);d.addAttribute("position",new D(f,3));d.addAttribute("color",new D(g,3));V.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function Db(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,
7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new E;d.setIndex(new L(a,1));d.addAttribute("position",new L(c,3));V.call(this,d,new W({color:b}));this.matrixAutoUpdate=!1;this.update()}function jd(a,b){this.type="Box3Helper";this.box=a;a=void 0!==b?b:16776960;b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new E;c.setIndex(new L(b,1));c.addAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));V.call(this,c,new W({color:a}));this.geometry.computeBoundingSphere()}
function kd(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new E;b.addAttribute("position",new D([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();ja.call(this,b,new W({color:a}));b=new E;b.addAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ra(b,new ma({color:a,opacity:.2,transparent:!0,depthWrite:!1})))}function Eb(a,b,c,d,e,f){B.call(this);
void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Od&&(Od=new E,Od.addAttribute("position",new D([0,0,0,0,1,0],3)),Be=new Za(0,.5,1,5,1),Be.translate(0,-.5,0));this.position.copy(b);this.line=new ja(Od,new W({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ra(Be,new ma({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function ld(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,
0,0,0,0,a];a=new E;a.addAttribute("position",new D(b,3));a.addAttribute("color",new D([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new W({vertexColors:2});V.call(this,a,b)}function vf(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ha.call(this,a);this.type="catmullrom";this.closed=!0}function wf(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ha.call(this,a);this.type="catmullrom"}function Ce(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
ha.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===
a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();Object.assign(wa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;
var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var b=b.slice(0),c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});var S={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var a=[],b=0;256>b;b++)a[b]=(16>b?"0":"")+b.toString(16).toUpperCase();
return function(){var b=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0,f=4294967295*Math.random()|0;return a[b&255]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[d&255]+a[d>>8&255]+"-"+a[d>>16&15|64]+a[d>>24&255]+"-"+a[e&63|128]+a[e>>8&255]+"-"+a[e>>16&255]+a[e>>24&255]+a[f&255]+a[f>>8&255]+a[f>>16&255]+a[f>>24&255]}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-
b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*S.DEG2RAD},radToDeg:function(a){return a*
S.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}};Object.defineProperties(C.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(C.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=
this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=
a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a=new C,b=new C;return function(c,d){a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||
1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*
a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-
a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,
b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this}});Object.assign(O.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,k,m,l,n,p,r,q,u){var t=this.elements;t[0]=a;t[4]=b;t[8]=c;t[12]=d;t[1]=e;t[5]=f;t[9]=g;t[13]=h;t[2]=k;t[6]=m;t[10]=l;t[14]=n;t[3]=p;t[7]=r;t[11]=
q;t[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new O).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,
b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new p;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;
c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){var k=f*h;var m=f*e;var l=c*h;a=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=m+l*d;b[5]=k-a*d;b[9]=-c*g;b[2]=a-k*d;b[6]=l+m*d;b[10]=f*g}else"YXZ"===a.order?(k=g*
h,m=g*e,l=d*h,a=d*e,b[0]=k+a*c,b[4]=l*c-m,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=m*c-l,b[6]=a+k*c,b[10]=f*g):"ZXY"===a.order?(k=g*h,m=g*e,l=d*h,a=d*e,b[0]=k-a*c,b[4]=-f*e,b[8]=l+m*c,b[1]=m+l*c,b[5]=f*h,b[9]=a-k*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(k=f*h,m=f*e,l=c*h,a=c*e,b[0]=g*h,b[4]=l*d-m,b[8]=k*d+a,b[1]=g*e,b[5]=a*d+k,b[9]=m*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(k=f*g,m=f*d,l=c*g,a=c*d,b[0]=g*h,b[4]=a-k*e,b[8]=l*e+m,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=m*e+l,b[10]=k-a*
e):"XZY"===a.order&&(k=f*g,m=f*d,l=c*g,a=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=k*e+a,b[5]=f*h,b[9]=m*e-l,b[2]=l*e-m,b[6]=c*h,b[10]=a*e+k);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a._x,d=a._y,e=a._z,f=a._w,g=c+c,h=d+d,k=e+e;a=c*g;var m=c*h,c=c*k,l=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(l+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=
0;b[15]=1;return this},lookAt:function(){var a=new p,b=new p,c=new p;return function(d,e,f){var g=this.elements;c.subVectors(d,e);0===c.lengthSq()&&(c.z=1);c.normalize();a.crossVectors(f,c);0===a.lengthSq()&&(1===Math.abs(f.z)?c.x+=1E-4:c.z+=1E-4,c.normalize(),a.crossVectors(f,c));a.normalize();b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],k=c[5],m=c[9],l=c[13],n=c[2],p=c[6],r=c[10],q=c[14],u=c[3],w=c[7],x=c[11],c=c[15],z=d[0],A=d[4],y=d[8],R=d[12],C=d[1],B=d[5],D=d[9],E=d[13],G=d[2],H=d[6],Y=d[10],K=d[14],J=d[3],M=d[7],P=d[11],d=d[15];b[0]=a*z+e*C+f*G+g*J;b[4]=a*A+e*B+f*H+g*M;b[8]=a*y+e*D+f*Y+g*P;
b[12]=a*R+e*E+f*K+g*d;b[1]=h*z+k*C+m*G+l*J;b[5]=h*A+k*B+m*H+l*M;b[9]=h*y+k*D+m*Y+l*P;b[13]=h*R+k*E+m*K+l*d;b[2]=n*z+p*C+r*G+q*J;b[6]=n*A+p*B+r*H+q*M;b[10]=n*y+p*D+r*Y+q*P;b[14]=n*R+p*E+r*K+q*d;b[3]=u*z+w*C+x*G+c*J;b[7]=u*A+w*B+x*H+c*M;b[11]=u*y+w*D+x*Y+c*P;b[15]=u*R+w*E+x*K+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a=
new p;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],l=a[6],n=a[10],p=a[14];return a[3]*(+e*h*l-d*k*l-e*g*n+c*k*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*k*n+e*f*n-d*f*p+d*k*m-e*h*m)+a[11]*(+b*k*l-b*g*p-e*f*l+c*f*p+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*l+b*g*n+d*f*l-c*f*n+c*h*m)},transpose:function(){var a=this.elements;
var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],k=d[5],m=d[6],l=d[7],n=d[8],p=d[9],r=d[10],q=d[11],u=d[12],w=d[13],x=d[14],d=d[15],z=p*x*l-w*r*l+w*m*q-k*x*q-p*m*d+k*r*d,A=u*r*l-n*x*l-u*m*q+h*x*q+n*
m*d-h*r*d,y=n*w*l-u*p*l+u*k*q-h*w*q-n*k*d+h*p*d,R=u*p*m-n*w*m-u*k*r+h*w*r+n*k*x-h*p*x,C=a*z+e*A+f*y+g*R;if(0===C){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/C;c[0]=z*b;c[1]=(w*r*g-p*x*g-w*f*q+e*x*q+p*f*d-e*r*d)*b;c[2]=(k*x*g-w*m*g+w*f*l-e*x*l-k*f*d+e*m*d)*b;c[3]=(p*m*g-k*r*g-p*f*l+e*r*l+k*f*q-e*m*q)*b;c[4]=A*b;c[5]=(n*x*g-u*r*g+u*f*q-a*x*q-
n*f*d+a*r*d)*b;c[6]=(u*m*g-h*x*g-u*f*l+a*x*l+h*f*d-a*m*d)*b;c[7]=(h*r*g-n*m*g+n*f*l-a*r*l-h*f*q+a*m*q)*b;c[8]=y*b;c[9]=(u*p*g-n*w*g-u*e*q+a*w*q+n*e*d-a*p*d)*b;c[10]=(h*w*g-u*k*g+u*e*l-a*w*l-h*e*d+a*k*d)*b;c[11]=(n*k*g-h*p*g-n*e*l+a*p*l+h*e*q-a*k*q)*b;c[12]=R*b;c[13]=(n*w*f-u*p*f+u*e*r-a*w*r-n*e*x+a*p*x)*b;c[14]=(u*k*f-h*w*f-u*e*m+a*w*m+h*e*x-a*k*x)*b;c[15]=(h*p*f-n*k*f+n*e*m-a*p*m-h*e*r+a*k*r)*b;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=
d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);
this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,
c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new p,b=new O;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.copy(this);c=1/g;var f=1/h,m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=
f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},
makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);
void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});Object.assign(ea,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==l||m!==n){f=1-g;var p=h*d+k*l+m*n+c*e,r=0<=
p?1:-1,q=1-p*p;q>Number.EPSILON&&(q=Math.sqrt(q),p=Math.atan2(q,p*r),f=Math.sin(f*p)/q,g=Math.sin(g*p)/q);r*=g;h=h*f+d*r;k=k*f+l*r;m=m*f+n*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});Object.defineProperties(ea.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=
a;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this.onChangeCallback()}}});Object.assign(ea.prototype,{set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),k=f(d/2),f=f(e/2),c=g(c/2),d=g(d/2),e=g(e/2);"XYZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"YXZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"ZXY"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"ZYX"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"YZX"===a?(this._x=
c*k*f+h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f-c*d*e):"XZY"===a&&(this._x=c*k*f-h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f+c*d*e);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],m=c+f+b;0<m?(c=.5/
Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a=new p,b;return function(c,d){void 0===a&&(a=new p);b=c.dot(d)+1;1E-6>b?(b=0,
Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,
this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=
d,this._z=e,this;a=Math.sqrt(1-g*g);if(.001>Math.abs(a))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var h=Math.atan2(a,g),g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+
1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(p.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=
a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},
add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a=new ea;return function(b){b&&b.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new ea;return function(b,c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;
a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*
-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(){var a=new O;return function(b){a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a=new O;return function(b){a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+
a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,
this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a=new p,b=new p;return function(c,d){a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},
round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},
length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==
b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new p;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=
new p;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(S.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*
a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromCylindrical:function(a){this.x=a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=
c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});Object.assign(na.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=
a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a=new p;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;
b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],k=c[7],m=c[2],l=c[5],c=c[8],n=d[0],p=d[3],r=d[6],q=d[1],u=d[4],w=d[7],x=d[2],z=d[5],d=d[8];b[0]=a*n+e*q+f*x;b[3]=a*p+e*u+f*z;b[6]=a*r+e*w+f*d;b[1]=g*n+h*q+k*x;b[4]=g*p+h*u+k*z;b[7]=g*r+h*w+k*d;b[2]=m*n+l*q+c*x;b[5]=m*p+l*u+c*z;b[8]=m*r+l*w+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],
d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],k=c[5],m=c[6],l=c[7],c=c[8],n=c*h-k*l,p=k*m-c*g,r=l*g-h*m,q=d*n+e*p+f*r;if(0===q){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
return this.identity()}b=1/q;a[0]=n*b;a[1]=(f*l-c*e)*b;a[2]=(k*e-f*h)*b;a[3]=p*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-k*d)*b;a[6]=r*b;a[7]=(e*m-l*d)*b;a[8]=(h*d-e*g)*b;return this},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],k=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*k;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*k;return this},translate:function(a,
b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];
return a}});var Af=0;da.DEFAULT_IMAGE=void 0;da.DEFAULT_MAPPING=300;da.prototype=Object.assign(Object.create(wa.prototype),{constructor:da,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);
this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},
uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=S.generateUUID());if(!b&&void 0===a.images[d.uuid]){var e=a.images,f=d.uuid,g=d.uuid;if(d instanceof HTMLCanvasElement)var h=d;
else{h=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");h.width=d.width;h.height=d.height;var k=h.getContext("2d");d instanceof ImageData?k.putImageData(d,0,0):k.drawImage(d,0,0,d.width,d.height)}h=2048<h.width||2048<h.height?h.toDataURL("image/jpeg",.6):h.toDataURL("image/png");e[f]={uuid:g,url:h}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.applyMatrix3(this.matrix);
if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}});Object.defineProperty(da.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(fa.prototype,
{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/
a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var k=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-k)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+k)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;
b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+k)/4;b>f&&b>m?.01>b?(k=0,c=h=.707106781):(k=Math.sqrt(b),h=c/k,c=d/k):f>m?.01>f?(k=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),k=c/h,c=g/h):.01>m?(h=k=.707106781,c=0):(c=Math.sqrt(m),k=d/c,h=g/c);this.set(k,h,c,a);return this}a=Math.sqrt((k-g)*(k-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(k-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,
a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new fa,b=new fa);a.set(c,
c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);
this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,
b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});ib.prototype=Object.assign(Object.create(wa.prototype),{constructor:ib,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();
this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Gb.prototype=Object.create(ib.prototype);Gb.prototype.constructor=Gb;Gb.prototype.isWebGLRenderTargetCube=!0;jb.prototype=Object.create(da.prototype);jb.prototype.constructor=jb;jb.prototype.isDataTexture=!0;bb.prototype=Object.create(da.prototype);bb.prototype.constructor=bb;bb.prototype.isCubeTexture=!0;Object.defineProperty(bb.prototype,
"images",{get:function(){return this.image},set:function(a){this.image=a}});var Me=new da,Ne=new bb,He=[],Je=[],Le=new Float32Array(16),Ke=new Float32Array(9);Re.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Rd=/([\w\d_]+)(\])?(\[|\.)?/g;kb.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};kb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};kb.upload=function(a,
b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};kb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,
cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,
dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,
lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,
mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,
seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(G.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===
typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=S.euclideanModulo(b,1);c=S.clamp(c,0,1);d=S.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=
.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/
255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,
e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=Jg[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},
clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*
c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=
(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,
this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});var K={common:{diffuse:{value:new G(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new na},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},
emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new C(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},
directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},
shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new G(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new na}}},Aa={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),
e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},U={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"},
qb={basic:{uniforms:Aa.merge([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:Aa.merge([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new G(0)}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:Aa.merge([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,
K.fog,K.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:Aa.merge([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new G(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},points:{uniforms:Aa.merge([K.points,
K.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:Aa.merge([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:Aa.merge([K.common,K.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:Aa.merge([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:U.normal_vert,fragmentShader:U.normal_frag},cube:{uniforms:{tCube:{value:null},
tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distanceRGBA:{uniforms:Aa.merge([K.common,K.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:U.distanceRGBA_vert,fragmentShader:U.distanceRGBA_frag},shadow:{uniforms:Aa.merge([K.lights,K.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,
fragmentShader:U.shadow_frag}};qb.physical={uniforms:Aa.merge([qb.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};qc.prototype=Object.create(da.prototype);qc.prototype.constructor=qc;var $f=0;N.prototype=Object.assign(Object.create(wa.prototype),{constructor:N,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+
b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=
void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);
this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&
this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);
this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&
(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0!==this.rotation&&(d.rotation=this.rotation);
1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&
(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;
this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=
a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.userData=JSON.parse(JSON.stringify(a.userData));this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b)for(var d=b.length,c=Array(d),e=0;e!==d;++e)c[e]=
b[e].clone();this.clippingPlanes=c;this.shadowSide=a.shadowSide;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});cb.prototype=Object.create(N.prototype);cb.prototype.constructor=cb;cb.prototype.isMeshDepthMaterial=!0;cb.prototype.copy=function(a){N.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;
this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};db.prototype=Object.create(N.prototype);db.prototype.constructor=db;db.prototype.isMeshDistanceMaterial=!0;db.prototype.copy=function(a){N.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this};Object.assign(Va.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],l=a[h+1],n=a[h+2];m<b&&(b=m);l<c&&(c=l);n<d&&(d=n);m>e&&(e=m);l>f&&(f=l);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);
return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.count;h<k;h++){var m=a.getX(h),l=a.getY(h),n=a.getZ(h);m<b&&(b=m);l<c&&(c=l);n<d&&(d=n);m>e&&(e=m);l>f&&(f=l);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new p;return function(b,c){c=a.copy(c).multiplyScalar(.5);
this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=
a||new p;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new p;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(){function a(a){var f=a.geometry;if(void 0!==f)if(f.isGeometry)for(f=
f.vertices,c=0,d=f.length;c<d;c++)e.copy(f[c]),e.applyMatrix4(a.matrixWorld),b.expandByPoint(e);else if(f.isBufferGeometry&&(f=f.attributes.position,void 0!==f))for(c=0,d=f.count;c<d;c++)e.fromBufferAttribute(f,c).applyMatrix4(a.matrixWorld),b.expandByPoint(e)}var b,c,d,e=new p;return function(c){b=this;c.updateMatrixWorld(!0);c.traverse(a);return this}}(),containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=
a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new p).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a=new p;return function(b){this.clampPoint(b.center,
a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},intersectsTriangle:function(){function a(a){var e;
var f=0;for(e=a.length-3;f<=e;f+=3){h.fromArray(a,f);var g=m.x*Math.abs(h.x)+m.y*Math.abs(h.y)+m.z*Math.abs(h.z),k=b.dot(h),l=c.dot(h),n=d.dot(h);if(Math.max(-Math.max(k,l,n),Math.min(k,l,n))>g)return!1}return!0}var b=new p,c=new p,d=new p,e=new p,f=new p,g=new p,h=new p,k=new p,m=new p,l=new p;return function(h){if(this.isEmpty())return!1;this.getCenter(k);m.subVectors(this.max,k);b.subVectors(h.a,k);c.subVectors(h.b,k);d.subVectors(h.c,k);e.subVectors(c,b);f.subVectors(d,c);g.subVectors(b,d);h=
[0,-e.z,e.y,0,-f.z,f.y,0,-g.z,g.y,e.z,0,-e.x,f.z,0,-f.x,g.z,0,-g.x,-e.y,e.x,0,-f.y,f.x,0,-g.y,g.x,0];if(!a(h))return!1;h=[1,0,0,0,1,0,0,0,1];if(!a(h))return!1;l.crossVectors(e,f);h=[l.x,l.y,l.z];return a(h)}}(),clampPoint:function(a,b){return(b||new p).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new p;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new p;return function(b){b=b||new Da;this.getCenter(b.center);
b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new p,new p,new p,new p,new p,new p,new p,new p];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,
this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});
Object.assign(Da.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new Va;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=c=0,f=b.length;e<f;e++)c=Math.max(c,d.distanceToSquared(b[e]));this.radius=Math.sqrt(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},
containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);b=b||new p;b.copy(a);
c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){a=a||new Va;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});Object.assign(xa.prototype,{set:function(a,
b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new p,b=new p;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);
this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return(b||new p).copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(){var a=
new p;return function(b,c){c=c||new p;var d=b.delta(a),e=this.normal.dot(d);if(0===e){if(0===this.distanceToPoint(b.start))return c.copy(b.start)}else if(e=-(b.start.dot(this.normal)+this.constant)/e,!(0>e||1<e))return c.copy(d).multiplyScalar(e).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},
coplanarPoint:function(a){return(a||new p).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new p,b=new na;return function(c,d){d=d||b.getNormalMatrix(c);c=this.coplanarPoint(a).applyMatrix4(c);d=this.normal.applyMatrix3(d).normalize();this.constant=-c.dot(d);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});Object.assign(nd.prototype,{set:function(a,
b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],l=c[8],n=c[9],p=c[10],r=c[11],q=c[12],u=c[13],w=c[14],c=c[15];b[0].setComponents(f-a,m-g,r-l,c-q).normalize();b[1].setComponents(f+
a,m+g,r+l,c+q).normalize();b[2].setComponents(f+d,m+h,r+n,c+u).normalize();b[3].setComponents(f-d,m-h,r-n,c-u).normalize();b[4].setComponents(f-e,m-k,r-p,c-w).normalize();b[5].setComponents(f+e,m+k,r+p,c+w).normalize();return this},intersectsObject:function(){var a=new Da;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Da;return function(b){a.center.set(0,
0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new p,b=new p;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:
c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});eb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");eb.DefaultOrder="XYZ";Object.defineProperties(eb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},
z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this.onChangeCallback()}}});Object.assign(eb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;
this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=S.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],l=e[2],n=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=
Math.asin(d(n,-1,1)),.99999>Math.abs(n)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-m,k),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(n,
k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a=new O;return function(b,c,d){a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ea;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,
b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new p(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){}});Object.assign(Ud.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},test:function(a){return 0!==(this.mask&a.mask)}});var bg=0;B.DefaultUp=new p(0,1,0);B.DefaultMatrixAutoUpdate=!0;B.prototype=Object.assign(Object.create(wa.prototype),{constructor:B,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrix.multiplyMatrices(a,
this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new ea;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateOnWorldAxis:function(){var a=new ea;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.premultiply(a);return this}}(),rotateX:function(){var a=new p(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new p(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new p(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new p;return function(b,
c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new p(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new p(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new p(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new O;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new O,b=new p;return function(c,d,e){c.isVector3?b.copy(c):b.set(c,d,e);this.isCamera?a.lookAt(this.position,b,this.up):a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=
this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1));return this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",
a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new p;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new p,b=new p;return function(c){c=c||new ea;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new ea;return function(b){b=
b||new eb;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new p,b=new ea;return function(c){c=c||new p;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new ea;return function(b){b=b||new p;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},
traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;
f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.matrix=this.matrix.toArray();if(void 0!==this.geometry){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=0,k=g.length;h<k;h++)b(a.shapes,g[h]);else b(a.shapes,g)}if(void 0!==
this.material)if(Array.isArray(this.material)){g=[];h=0;for(k=this.material.length;h<k;h++)g.push(b(a.materials,this.material[h]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);if(d){var d=c(a.geometries),h=c(a.materials),k=c(a.textures),m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<k.length&&(e.textures=k);0<m.length&&(e.images=
m);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=
a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});Qa.prototype=Object.assign(Object.create(B.prototype),{constructor:Qa,isCamera:!0,copy:function(a,b){B.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this},getWorldDirection:function(){var a=
new ea;return function(b){b=b||new p;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}(),updateMatrixWorld:function(a){B.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});Ib.prototype=Object.assign(Object.create(Qa.prototype),{constructor:Ib,isOrthographicCamera:!0,copy:function(a,b){Qa.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=
a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=
!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view&&this.view.enabled)var c=this.zoom/(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/
c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});Object.assign(Wa.prototype,{clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var cg=0;J.prototype=Object.assign(Object.create(wa.prototype),{constructor:J,isGeometry:!0,applyMatrix:function(a){for(var b=(new na).getNormalMatrix(a),c=0,d=this.vertices.length;c<
d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a=new O;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=
new O;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new O;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new O;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new O;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new B;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),
fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:[],t=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new Wa(a,b,d,f,t,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([n[a].clone(),n[b].clone(),n[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([v[a].clone(),v[b].clone(),v[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:
void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var l=[],n=[],v=[],r=e=0;e<f.length;e+=3,r+=2)c.vertices.push(new p(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new p(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new G(h[e],h[e+1],h[e+2])),void 0!==k&&n.push(new C(k[r],k[r+1])),void 0!==m&&v.push(new C(m[r],m[r+1]));var q=a.groups;if(0<q.length)for(e=0;e<q.length;e++)for(var f=q[e],u=f.start,
w=f.count,r=u,u=u+w;r<u;r+=3)void 0!==d?b(d[r],d[r+1],d[r+2],f.materialIndex):b(r,r+1,r+2,f.materialIndex);else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,
a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new O;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new p,b=new p,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new p;if(a){var e=new p,f=new p;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var k=this.vertices[b.c];e.subVectors(k,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=
this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),
d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):
d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new J;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new p;var k={a:new p,b:new p,c:new p};d.push(h);g.push(k)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();
f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(d.normal),k.a.copy(d.vertexNormals[0]),k.b.copy(d.vertexNormals[1]),k.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===
this.boundingBox&&(this.boundingBox=new Va);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Da);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],l=a.faceVertexUvs[0],n=this.colors,p=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new na).getNormalMatrix(b));a=0;for(var r=g.length;a<
r;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=0;for(r=p.length;a<r;a++)n.push(p[a].clone());a=0;for(r=k.length;a<r;a++){var g=k[a],u=g.vertexNormals,p=g.vertexColors,n=new Wa(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=u.length;b<f;b++)q=u[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),n.vertexNormals.push(q);n.color.copy(g.color);b=0;for(f=p.length;b<f;b++)q=p[b],n.vertexColors.push(q.clone());n.materialIndex=g.materialIndex+
c;h.push(n)}a=0;for(r=l.length;a<r;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<
e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=
b;return f},setFromPoints:function(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new p(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);
g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==n[b])return n[b];n[b]=l.length;l.push(a.getHex());return n[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=p.length/2;p.push(a.x,a.y);return r[b]}var e=
{metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],m={},l=[],n={},p=[],r={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],w=0<q.normal.length(),x=0<q.vertexNormals.length,z=
1!==q.color.r||1!==q.color.g||1!==q.color.b,A=0<q.vertexColors.length,y=0,y=a(y,0,0),y=a(y,1,!0),y=a(y,2,!1),y=a(y,3,u),y=a(y,4,w),y=a(y,5,x),y=a(y,6,z),y=a(y,7,A);h.push(y);h.push(q.a,q.b,q.c);h.push(q.materialIndex);u&&(u=this.faceVertexUvs[0][g],h.push(d(u[0]),d(u[1]),d(u[2])));w&&h.push(b(q.normal));x&&(w=q.vertexNormals,h.push(b(w[0]),b(w[1]),b(w[2])));z&&h.push(c(q.color));A&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<l.length&&(e.data.colors=
l);0<p.length&&(e.data.uvs=[p]);e.data.faces=h;return e},clone:function(){return(new J).copy(this)},copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());
e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],k=[];var m=0;for(d=h.length;m<d;m++)k.push(h[m].clone());this.faceVertexUvs[f].push(k)}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++)d.vertices.push(m[f].vertices[e].clone());
if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++)d.normals.push(m[f].normals[e].clone());this.morphTargets.push(d)}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++)g=m[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++)d.faceNormals.push(m[f].faceNormals[e].clone());
this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=
a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(L.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(L.prototype,{isBufferAttribute:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==
a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=
0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new G);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new C);
b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new p);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new fa);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;
b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},
setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,
this.itemSize)).copy(this)}});tc.prototype=Object.create(L.prototype);tc.prototype.constructor=tc;uc.prototype=Object.create(L.prototype);uc.prototype.constructor=uc;vc.prototype=Object.create(L.prototype);vc.prototype.constructor=vc;wc.prototype=Object.create(L.prototype);wc.prototype.constructor=wc;lb.prototype=Object.create(L.prototype);lb.prototype.constructor=lb;xc.prototype=Object.create(L.prototype);xc.prototype.constructor=xc;mb.prototype=Object.create(L.prototype);mb.prototype.constructor=
mb;D.prototype=Object.create(L.prototype);D.prototype.constructor=D;yc.prototype=Object.create(L.prototype);yc.prototype.constructor=yc;Object.assign(Ue.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,
e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var k=[];for(var m=0;m<h;m++)k[m]=[];this.morphTargets.position=k}var l=a.morphNormals,n=l.length;if(0<n){var p=[];for(m=0;m<n;m++)p[m]=[];this.morphTargets.normal=p}for(var r=a.skinIndices,q=a.skinWeights,u=r.length===c.length,w=q.length===c.length,m=0;m<b.length;m++){var x=b[m];this.vertices.push(c[x.a],c[x.b],c[x.c]);var z=x.vertexNormals;3===z.length?this.normals.push(z[0],z[1],z[2]):(z=x.normal,this.normals.push(z,
z,z));z=x.vertexColors;3===z.length?this.colors.push(z[0],z[1],z[2]):(z=x.color,this.colors.push(z,z,z));!0===e&&(z=d[0][m],void 0!==z?this.uvs.push(z[0],z[1],z[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new C,new C,new C)));!0===f&&(z=d[1][m],void 0!==z?this.uvs2.push(z[0],z[1],z[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new C,new C,new C)));for(z=0;z<h;z++){var A=g[z].vertices;k[z].push(A[x.a],
A[x.b],A[x.c])}for(z=0;z<n;z++)A=l[z].vertexNormals[m],p[z].push(A.a,A.b,A.c);u&&this.skinIndices.push(r[x.a],r[x.b],r[x.c]);w&&this.skinWeights.push(q[x.a],q[x.b],q[x.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var dg=1;E.prototype=Object.assign(Object.create(wa.prototype),{constructor:E,isBufferGeometry:!0,
getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<Vd(a)?mb:lb)(a,1):this.index=a},addAttribute:function(a,b,c){if(b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute)if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this;else console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new L(b,c))},
getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new na).getNormalMatrix(a).applyToBufferAttribute(b),
b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a=new O;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new O;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new O;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new O;return function(b,
c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new O;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new B;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new D(3*b.vertices.length,
3);var c=new D(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new D(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);
return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0)}this.addAttribute("position",new D(b,3));return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;
c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),
c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Ue).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},
fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new L(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new L(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new L(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new L(b,2)).copyVector2sArray(a.uvs)));
0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new L(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<Vd(a.indices)?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new L(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new D(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new D(4*
a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new D(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Va);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):
this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new Va,b=new p;return function(){null===this.boundingSphere&&(this.boundingSphere=new Da);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);
a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;
if(void 0===b.normal)this.addAttribute("normal",new L(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h=new p,k=new p,m=new p,l=new p,n=new p;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var v=0,r=c.length;v<r;++v){f=c[v];g=f.start;var q=f.count;f=g;for(g+=q;f<g;f+=3){q=3*a[f+0];var u=3*a[f+1];var w=3*a[f+2];h.fromArray(d,q);k.fromArray(d,u);m.fromArray(d,w);l.subVectors(m,k);n.subVectors(h,k);l.cross(n);e[q]+=l.x;e[q+
1]+=l.y;e[q+2]+=l.z;e[u]+=l.x;e[u+1]+=l.y;e[u+2]+=l.z;e[w]+=l.x;e[w+1]+=l.y;e[w+2]+=l.z}}}else for(f=0,g=d.length;f<g;f+=9)h.fromArray(d,f),k.fromArray(d,f+3),m.fromArray(d,f+6),l.subVectors(m,k),n.subVectors(h,k),l.cross(n),e[f]=l.x,e[f+1]=l.y,e[f+2]=l.z,e[f+3]=l.x,e[f+4]=l.y,e[f+5]=l.z,e[f+6]=l.x,e[f+7]=l.y,e[f+8]=l.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=
c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){var a=new p;return function(){for(var b=this.attributes.normal,c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.normalize(),b.setXYZ(c,a.x,a.y,a.z)}}(),toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
this;var a=new E,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,k=0,m=0,l=b.length;m<l;m++){h=b[m]*e;for(var n=0;n<e;n++)g[k++]=f[h++]}a.addAttribute(d,new L(g,e))}return a},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters;for(var c in b)void 0!==b[c]&&
(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c];b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),
radius:c.radius});return a},clone:function(){return(new E).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.addAttribute(g,c[g].clone());var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e}var g=a.groups;c=0;for(b=g.length;c<b;c++)d=
g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Jb.prototype=Object.create(J.prototype);Jb.prototype.constructor=Jb;nb.prototype=Object.create(E.prototype);nb.prototype.constructor=nb;zc.prototype=Object.create(J.prototype);zc.prototype.constructor=
zc;ob.prototype=Object.create(E.prototype);ob.prototype.constructor=ob;ma.prototype=Object.create(N.prototype);ma.prototype.constructor=ma;ma.prototype.isMeshBasicMaterial=!0;ma.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=
a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};Ba.prototype=Object.create(N.prototype);Ba.prototype.constructor=Ba;Ba.prototype.isShaderMaterial=!0;Ba.prototype.copy=function(a){N.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;
this.uniforms=Aa.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Ba.prototype.toJSON=function(a){a=N.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};Object.assign(pb.prototype,
{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new p).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(){var a=new p;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,
b){b=b||new p;b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new p;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=
new p,b=new p,c=new p;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),l=-c.dot(b),n=c.lengthSq(),p=Math.abs(1-k*k);if(0<p){d=k*l-m;e=k*m-l;var r=h*p;0<=d?e>=-r?e<=r?(h=1/p,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*l)+n):(e=h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):e<=-r?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,
-l),h),k=-d*d+e*(e+2*l)+n):e<=r?(d=0,e=Math.min(Math.max(-h,-l),h),k=e*(e+2*l)+n):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+n)}else e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n;f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new p;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d;b=b.radius*b.radius;if(e>b)return null;
b=Math.sqrt(b-e);e=d-b;d+=b;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);
return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;
if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(){var a=new p;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new p,b=new p,c=new p,d=new p;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;
g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});Object.assign(Kb.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);
this.end.copy(a.end);return this},getCenter:function(a){return(a||new p).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new p).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){b=b||new p;return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new p,b=new p;return function(c,d){a.subVectors(c,
this.start);b.subVectors(this.end,this.start);c=b.dot(b);c=b.dot(a)/c;d&&(c=S.clamp(c,0,1));return c}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new p;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});Object.assign(Xa,{normal:function(){var a=new p;return function(b,c,d,e){e=e||new p;
e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}(),barycoordFromPoint:function(){var a=new p,b=new p,c=new p;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=d*k-e*e;h=h||new p;if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-k-d,d,k)}}(),containsPoint:function(){var a=new p;return function(b,c,d,e){b=
Xa.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}()});Object.assign(Xa.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new p,b=new p;return function(){a.subVectors(this.c,
this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new p).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Xa.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new xa).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Xa.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return Xa.containsPoint(a,this.a,this.b,this.c)},intersectsBox:function(a){return a.intersectsTriangle(this)},
closestPointToPoint:function(){var a=new xa,b=[new Kb,new Kb,new Kb],c=new p,d=new p;return function(e,f){f=f||new p;var g=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))f.copy(c);else for(b[0].set(this.a,this.b),b[1].set(this.b,this.c),b[2].set(this.c,this.a),e=0;e<b.length;e++){b[e].closestPointToPoint(c,!0,d);var h=c.distanceToSquared(d);h<g&&(g=h,f.copy(d))}return f}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&
a.c.equals(this.c)}});ra.prototype=Object.assign(Object.create(B.prototype),{constructor:ra,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){B.prototype.copy.call(this,a);this.drawMode=a.drawMode;void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=
a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else if(c=a.morphTargets,void 0!==c&&0<c.length)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++)d=c[a].name||String(a),this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a},raycast:function(){function a(a,
b,c,d,e,f,g){Xa.barycoordFromPoint(a,b,c,d,u);e.multiplyScalar(u.x);f.multiplyScalar(u.y);g.multiplyScalar(u.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;x.copy(h);x.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(x);return b<c.near||b>c.far?null:{distance:b,point:x.clone(),object:a}}function c(c,d,e,f,m,l,n,p){g.fromBufferAttribute(f,l);h.fromBufferAttribute(f,n);k.fromBufferAttribute(f,
p);if(c=b(c,c.material,d,e,g,h,k,w))m&&(v.fromBufferAttribute(m,l),r.fromBufferAttribute(m,n),q.fromBufferAttribute(m,p),c.uv=a(w,g,h,k,v,r,q)),c.face=new Wa(l,n,p,Xa.normal(g,h,k)),c.faceIndex=l;return c}var d=new O,e=new pb,f=new Da,g=new p,h=new p,k=new p,m=new p,l=new p,n=new p,v=new C,r=new C,q=new C,u=new p,w=new p,x=new p;return function(p,t){var u=this.geometry,x=this.material,z=this.matrixWorld;if(void 0!==x&&(null===u.boundingSphere&&u.computeBoundingSphere(),f.copy(u.boundingSphere),f.applyMatrix4(z),
!1!==p.ray.intersectsSphere(f)&&(d.getInverse(z),e.copy(p.ray).applyMatrix4(d),null===u.boundingBox||!1!==e.intersectsBox(u.boundingBox)))){var A;if(u.isBufferGeometry){var x=u.index,C=u.attributes.position,z=u.attributes.uv,B;if(null!==x){var D=0;for(B=x.count;D<B;D+=3){u=x.getX(D);var E=x.getX(D+1);var G=x.getX(D+2);if(A=c(this,p,e,C,z,u,E,G))A.faceIndex=Math.floor(D/3),t.push(A)}}else if(void 0!==C)for(D=0,B=C.count;D<B;D+=3)if(u=D,E=D+1,G=D+2,A=c(this,p,e,C,z,u,E,G))A.index=u,t.push(A)}else if(u.isGeometry){var z=
Array.isArray(x);D=u.vertices;B=u.faces;E=u.faceVertexUvs[0];0<E.length&&(C=E);for(var H=0,K=B.length;H<K;H++){var M=B[H];A=z?x[M.materialIndex]:x;if(void 0!==A){E=D[M.a];G=D[M.b];var P=D[M.c];if(!0===A.morphTargets){var J=u.morphTargets,L=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var N=0,O=J.length;N<O;N++){var S=L[N];if(0!==S){var U=J[N].vertices;g.addScaledVector(m.subVectors(U[M.a],E),S);h.addScaledVector(l.subVectors(U[M.b],G),S);k.addScaledVector(n.subVectors(U[M.c],
P),S)}}g.add(E);h.add(G);k.add(P);E=g;G=h;P=k}if(A=b(this,A,p,e,E,G,P,w))C&&C[H]&&(J=C[H],v.copy(J[0]),r.copy(J[1]),q.copy(J[2]),A.uv=a(w,E,G,P,v,r,q)),A.face=M,A.faceIndex=H,t.push(A)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var xg=0;Z.prototype=Object.assign(Object.create(Qa.prototype),{constructor:Z,isPerspectiveCamera:!0,copy:function(a,b){Qa.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=
a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*S.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*S.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*S.RAD2DEG*Math.atan(Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*
Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},
updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=
this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});pd.prototype=Object.assign(Object.create(Z.prototype),{constructor:pd,isArrayCamera:!0});Mb.prototype.isFogExp2=!0;Mb.prototype.clone=function(){return new Mb(this.color.getHex(),this.density)};Mb.prototype.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),
density:this.density}};Nb.prototype.isFog=!0;Nb.prototype.clone=function(){return new Nb(this.color.getHex(),this.near,this.far)};Nb.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};qd.prototype=Object.assign(Object.create(B.prototype),{constructor:qd,copy:function(a,b){B.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=
a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=B.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b}});fb.prototype=Object.create(N.prototype);fb.prototype.constructor=fb;fb.prototype.isSpriteMaterial=!0;fb.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;
this.rotation=a.rotation;return this};Bc.prototype=Object.assign(Object.create(B.prototype),{constructor:Bc,isSprite:!0,raycast:function(){var a=new p,b=new p,c=new p;return function(d,e){b.setFromMatrixPosition(this.matrixWorld);d.ray.closestPointToPoint(b,a);c.setFromMatrixScale(this.matrixWorld);var f=c.x*c.y/4;b.distanceToSquared(a)>f||(f=d.ray.origin.distanceTo(a),f<d.near||f>d.far||e.push({distance:f,point:a.clone(),face:null,object:this}))}}(),clone:function(){return(new this.constructor(this.material)).copy(this)},
copy:function(a){B.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});Cc.prototype=Object.assign(Object.create(B.prototype),{constructor:Cc,copy:function(a){B.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},
getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new p;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new p,b=new p;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=
!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Object.assign(Dc.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new O;this.bones[a]&&
c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new O,b=new O;return function(){for(var c=
this.bones,d=this.boneInverses,e=this.boneMatrices,f=this.boneTexture,g=0,h=c.length;g<h;g++)a.multiplyMatrices(c[g]?c[g].matrixWorld:b,d[g]),a.toArray(e,16*g);void 0!==f&&(f.needsUpdate=!0)}}(),clone:function(){return new Dc(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d}}});rd.prototype=Object.assign(Object.create(B.prototype),{constructor:rd,isBone:!0});sd.prototype=Object.assign(Object.create(ra.prototype),
{constructor:sd,isSkinnedMesh:!0,initBones:function(){var a=[],b;if(this.geometry&&void 0!==this.geometry.bones){var c=0;for(b=this.geometry.bones.length;c<b;c++){var d=this.geometry.bones[c];var e=new rd;a.push(e);e.name=d.name;e.position.fromArray(d.pos);e.quaternion.fromArray(d.rotq);void 0!==d.scl&&e.scale.fromArray(d.scl)}c=0;for(b=this.geometry.bones.length;c<b;c++)d=this.geometry.bones[c],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[c]):this.add(a[c])}this.updateMatrixWorld(!0);
return a},bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){var a;if(this.geometry&&this.geometry.isGeometry)for(a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a];var c=1/b.manhattanLength();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&
this.geometry.isBufferGeometry){var b=new fa,d=this.geometry.attributes.skinWeight;for(a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.manhattanLength(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)}},updateMatrixWorld:function(a){ra.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+
this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});W.prototype=Object.create(N.prototype);W.prototype.constructor=W;W.prototype.isLineBasicMaterial=!0;W.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};ja.prototype=Object.assign(Object.create(B.prototype),{constructor:ja,isLine:!0,raycast:function(){var a=new O,b=new pb,c=new Da;
return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new p,m=new p,h=new p,l=new p,n=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var v=g.index;var r=g.attributes.position.array;if(null!==v)for(var q=v.array,g=0,u=q.length-1;g<u;g+=n)v=q[g+1],k.fromArray(r,3*q[g]),m.fromArray(r,3*
v),v=b.distanceSqToSegment(k,m,l,h),v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}));else for(g=0,u=r.length/3-1;g<u;g+=n)k.fromArray(r,3*g),m.fromArray(r,3*g+3),v=b.distanceSqToSegment(k,m,l,h),v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,
face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=n)v=b.distanceSqToSegment(k[g],k[g+1],l,h),v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});V.prototype=Object.assign(Object.create(ja.prototype),{constructor:V,
isLineSegments:!0});td.prototype=Object.assign(Object.create(ja.prototype),{constructor:td,isLineLoop:!0});Fa.prototype=Object.create(N.prototype);Fa.prototype.constructor=Fa;Fa.prototype.isPointsMaterial=!0;Fa.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Ob.prototype=Object.assign(Object.create(B.prototype),{constructor:Ob,isPoints:!0,raycast:function(){var a=new O,b=new pb,c=
new Da;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){a=b.closestPointToPoint(a);a.applyMatrix4(k);var h=d.ray.origin.distanceTo(a);h<d.near||h>d.far||e.push({distance:h,distanceToRay:Math.sqrt(f),point:a.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);c.radius+=m;if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);
b.copy(d.ray).applyMatrix4(a);var m=m/((this.scale.x+this.scale.y+this.scale.z)/3),l=m*m,m=new p;if(h.isBufferGeometry){var n=h.index,h=h.attributes.position.array;if(null!==n)for(var v=n.array,n=0,r=v.length;n<r;n++){var q=v[n];m.fromArray(h,3*q);f(m,q)}else for(n=0,v=h.length/3;n<v;n++)m.fromArray(h,3*n),f(m,n)}else for(m=h.vertices,n=0,v=m.length;n<v;n++)f(m[n],n)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});ud.prototype=Object.assign(Object.create(B.prototype),
{constructor:ud,isGroup:!0});ce.prototype=Object.assign(Object.create(da.prototype),{constructor:ce,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Pb.prototype=Object.create(da.prototype);Pb.prototype.constructor=Pb;Pb.prototype.isCompressedTexture=!0;Ec.prototype=Object.create(da.prototype);Ec.prototype.constructor=Ec;Ec.prototype.isDepthTexture=!0;Qb.prototype=Object.create(E.prototype);Qb.prototype.constructor=Qb;Fc.prototype=Object.create(J.prototype);
Fc.prototype.constructor=Fc;Rb.prototype=Object.create(E.prototype);Rb.prototype.constructor=Rb;Gc.prototype=Object.create(J.prototype);Gc.prototype.constructor=Gc;ta.prototype=Object.create(E.prototype);ta.prototype.constructor=ta;Hc.prototype=Object.create(J.prototype);Hc.prototype.constructor=Hc;Sb.prototype=Object.create(ta.prototype);Sb.prototype.constructor=Sb;Ic.prototype=Object.create(J.prototype);Ic.prototype.constructor=Ic;rb.prototype=Object.create(ta.prototype);rb.prototype.constructor=
rb;Jc.prototype=Object.create(J.prototype);Jc.prototype.constructor=Jc;Tb.prototype=Object.create(ta.prototype);Tb.prototype.constructor=Tb;Kc.prototype=Object.create(J.prototype);Kc.prototype.constructor=Kc;Ub.prototype=Object.create(ta.prototype);Ub.prototype.constructor=Ub;Lc.prototype=Object.create(J.prototype);Lc.prototype.constructor=Lc;Vb.prototype=Object.create(E.prototype);Vb.prototype.constructor=Vb;Mc.prototype=Object.create(J.prototype);Mc.prototype.constructor=Mc;Wb.prototype=Object.create(E.prototype);
Wb.prototype.constructor=Wb;Nc.prototype=Object.create(J.prototype);Nc.prototype.constructor=Nc;Xb.prototype=Object.create(E.prototype);Xb.prototype.constructor=Xb;var Kg={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=$e(a,0,e,c,!0),g=[];if(!f)return g;var h;if(d){var k=c,d=[],m;var l=0;for(m=b.length;l<m;l++){var n=b[l]*k;var p=l<m-1?b[l+1]*k:a.length;n=$e(a,n,p,k,!1);n===n.next&&(n.steiner=!0);d.push(Ig(n))}d.sort(Gg);for(l=0;l<d.length;l++){b=d[l];k=f;if(k=Hg(b,k))b=
cf(k,b),Pc(b,b.next);f=Pc(f,f.next)}}if(a.length>80*c){var r=h=a[0];var q=d=a[1];for(k=c;k<e;k+=c)l=a[k],b=a[k+1],l<r&&(r=l),b<q&&(q=b),l>h&&(h=l),b>d&&(d=b);h=Math.max(h-r,d-q);h=0!==h?1/h:0}Qc(f,g,c,r,q,h);return g}},Ya={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>Ya.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];df(a);ef(c,a);var f=a.length;b.forEach(df);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,
ef(c,b[a]);b=Kg.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};gb.prototype=Object.create(J.prototype);gb.prototype.constructor=gb;Ga.prototype=Object.create(E.prototype);Ga.prototype.constructor=Ga;Ga.prototype.getArrays=function(){var a=this.getAttribute("position"),a=a?Array.prototype.slice.call(a.array):[],b=this.getAttribute("uv"),b=b?Array.prototype.slice.call(b.array):[],c=this.index,c=c?Array.prototype.slice.call(c.array):[];return{position:a,uv:b,index:c}};Ga.prototype.addShapeList=
function(a,b){var c=a.length;b.arrays=this.getArrays();for(var d=0;d<c;d++)this.addShape(a[d],b);this.setIndex(b.arrays.index);this.addAttribute("position",new D(b.arrays.position,3));this.addAttribute("uv",new D(b.arrays.uv,2))};Ga.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var k=
Math.sqrt(h),m=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new C(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new C(f/e,d/e)}function e(a,b){for(I=a.length;0<=--I;){var c=I;var d=I-1;0>d&&(d=a.length-1);var e,f=A+2*w;for(e=0;e<f;e++){var g=Z*e,m=Z*
(e+1),n=b+d+g,p=b+d+m,m=b+c+m;h(b+c+g);h(n);h(m);h(n);h(p);h(m);g=l.length/3;g=E.generateSideWallUV(S,l,g-6,g-3,g-2,g-1);k(g[0]);k(g[1]);k(g[3]);k(g[1]);k(g[2]);k(g[3])}}}function f(a,b,c){r.push(a);r.push(b);r.push(c)}function g(a,b,c){h(a);h(b);h(c);a=l.length/3;a=E.generateTopUV(S,l,a-3,a-2,a-1);k(a[0]);k(a[1]);k(a[2])}function h(a){n.push(l.length/3);l.push(r[3*a+0]);l.push(r[3*a+1]);l.push(r[3*a+2])}function k(a){v.push(a.x);v.push(a.y)}var m=b.arrays?b.arrays:this.getArrays(),l=m.position,n=
m.index,v=m.uv,r=[],m=void 0!==b.amount?b.amount:100,q=void 0!==b.bevelThickness?b.bevelThickness:6,u=void 0!==b.bevelSize?b.bevelSize:q-2,w=void 0!==b.bevelSegments?b.bevelSegments:3,x=void 0!==b.bevelEnabled?b.bevelEnabled:!0,z=void 0!==b.curveSegments?b.curveSegments:12,A=void 0!==b.steps?b.steps:1,y=b.extrudePath,B=!1,E=void 0!==b.UVGenerator?b.UVGenerator:gb.WorldUVGenerator;if(y){var G=y.getSpacedPoints(A);B=!0;x=!1;var H=void 0!==b.frames?b.frames:y.computeFrenetFrames(A,!1);var J=new p;var K=
new p;var N=new p}x||(u=q=w=0);var L,S=this,z=a.extractPoints(z);a=z.shape;var O=z.holes;if(!Ya.isClockWise(a)){a=a.reverse();var M=0;for(L=O.length;M<L;M++){var P=O[M];Ya.isClockWise(P)&&(O[M]=P.reverse())}}var U=Ya.triangulateShape(a,O),W=a;M=0;for(L=O.length;M<L;M++)P=O[M],a=a.concat(P);var T,Z=a.length,V,da=U.length,z=[],I=0;var X=W.length;var Q=X-1;for(T=I+1;I<X;I++,Q++,T++)Q===X&&(Q=0),T===X&&(T=0),z[I]=d(W[I],W[Q],W[T]);var y=[],fa=z.concat();M=0;for(L=O.length;M<L;M++){P=O[M];var ca=[];I=
0;X=P.length;Q=X-1;for(T=I+1;I<X;I++,Q++,T++)Q===X&&(Q=0),T===X&&(T=0),ca[I]=d(P[I],P[Q],P[T]);y.push(ca);fa=fa.concat(ca)}for(Q=0;Q<w;Q++){X=Q/w;var ea=q*Math.cos(X*Math.PI/2);T=u*Math.sin(X*Math.PI/2);I=0;for(X=W.length;I<X;I++){var ga=c(W[I],z[I],T);f(ga.x,ga.y,-ea)}M=0;for(L=O.length;M<L;M++)for(P=O[M],ca=y[M],I=0,X=P.length;I<X;I++)ga=c(P[I],ca[I],T),f(ga.x,ga.y,-ea)}T=u;for(I=0;I<Z;I++)ga=x?c(a[I],fa[I],T):a[I],B?(K.copy(H.normals[0]).multiplyScalar(ga.x),J.copy(H.binormals[0]).multiplyScalar(ga.y),
N.copy(G[0]).add(K).add(J),f(N.x,N.y,N.z)):f(ga.x,ga.y,0);for(X=1;X<=A;X++)for(I=0;I<Z;I++)ga=x?c(a[I],fa[I],T):a[I],B?(K.copy(H.normals[X]).multiplyScalar(ga.x),J.copy(H.binormals[X]).multiplyScalar(ga.y),N.copy(G[X]).add(K).add(J),f(N.x,N.y,N.z)):f(ga.x,ga.y,m/A*X);for(Q=w-1;0<=Q;Q--){X=Q/w;ea=q*Math.cos(X*Math.PI/2);T=u*Math.sin(X*Math.PI/2);I=0;for(X=W.length;I<X;I++)ga=c(W[I],z[I],T),f(ga.x,ga.y,m+ea);M=0;for(L=O.length;M<L;M++)for(P=O[M],ca=y[M],I=0,X=P.length;I<X;I++)ga=c(P[I],ca[I],T),B?f(ga.x,
ga.y+G[A-1].y,G[A-1].x+ea):f(ga.x,ga.y,m+ea)}(function(){var a=l.length/3;if(x){var c=0*Z;for(I=0;I<da;I++)V=U[I],g(V[2]+c,V[1]+c,V[0]+c);c=Z*(A+2*w);for(I=0;I<da;I++)V=U[I],g(V[0]+c,V[1]+c,V[2]+c)}else{for(I=0;I<da;I++)V=U[I],g(V[2],V[1],V[0]);for(I=0;I<da;I++)V=U[I],g(V[0]+Z*A,V[1]+Z*A,V[2]+Z*A)}S.addGroup(a,l.length/3-a,void 0!==b.material?b.material:0)})();(function(){var a=l.length/3,c=0;e(W,c);c+=W.length;M=0;for(L=O.length;M<L;M++)P=O[M],e(P,c),c+=P.length;S.addGroup(a,l.length/3-a,void 0!==
b.extrudeMaterial?b.extrudeMaterial:1)})();b.arrays||(this.setIndex(n),this.addAttribute("position",new D(l,3)),this.addAttribute("uv",new D(v,2)))};gb.WorldUVGenerator={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new C(b[3*c],b[3*c+1]),new C(a,d),new C(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],k=b[3*d+1];d=b[3*d+2];var m=b[3*e],l=b[3*e+1];e=b[3*e+2];var n=b[3*f],p=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-
k)?[new C(a,1-c),new C(h,1-d),new C(m,1-e),new C(n,1-b)]:[new C(g,1-c),new C(k,1-d),new C(l,1-e),new C(p,1-b)]}};Sc.prototype=Object.create(J.prototype);Sc.prototype.constructor=Sc;Yb.prototype=Object.create(Ga.prototype);Yb.prototype.constructor=Yb;Tc.prototype=Object.create(J.prototype);Tc.prototype.constructor=Tc;tb.prototype=Object.create(E.prototype);tb.prototype.constructor=tb;Uc.prototype=Object.create(J.prototype);Uc.prototype.constructor=Uc;Zb.prototype=Object.create(E.prototype);Zb.prototype.constructor=
Zb;Vc.prototype=Object.create(J.prototype);Vc.prototype.constructor=Vc;$b.prototype=Object.create(E.prototype);$b.prototype.constructor=$b;ub.prototype=Object.create(J.prototype);ub.prototype.constructor=ub;ub.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);return ff(this.parameters.shapes,a)};vb.prototype=Object.create(E.prototype);vb.prototype.constructor=vb;vb.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);return ff(this.parameters.shapes,a)};ac.prototype=Object.create(E.prototype);
ac.prototype.constructor=ac;wb.prototype=Object.create(J.prototype);wb.prototype.constructor=wb;Za.prototype=Object.create(E.prototype);Za.prototype.constructor=Za;Wc.prototype=Object.create(wb.prototype);Wc.prototype.constructor=Wc;Xc.prototype=Object.create(Za.prototype);Xc.prototype.constructor=Xc;Yc.prototype=Object.create(J.prototype);Yc.prototype.constructor=Yc;bc.prototype=Object.create(E.prototype);bc.prototype.constructor=bc;var za=Object.freeze({WireframeGeometry:Qb,ParametricGeometry:Fc,
ParametricBufferGeometry:Rb,TetrahedronGeometry:Hc,TetrahedronBufferGeometry:Sb,OctahedronGeometry:Ic,OctahedronBufferGeometry:rb,IcosahedronGeometry:Jc,IcosahedronBufferGeometry:Tb,DodecahedronGeometry:Kc,DodecahedronBufferGeometry:Ub,PolyhedronGeometry:Gc,PolyhedronBufferGeometry:ta,TubeGeometry:Lc,TubeBufferGeometry:Vb,TorusKnotGeometry:Mc,TorusKnotBufferGeometry:Wb,TorusGeometry:Nc,TorusBufferGeometry:Xb,TextGeometry:Sc,TextBufferGeometry:Yb,SphereGeometry:Tc,SphereBufferGeometry:tb,RingGeometry:Uc,
RingBufferGeometry:Zb,PlaneGeometry:zc,PlaneBufferGeometry:ob,LatheGeometry:Vc,LatheBufferGeometry:$b,ShapeGeometry:ub,ShapeBufferGeometry:vb,ExtrudeGeometry:gb,ExtrudeBufferGeometry:Ga,EdgesGeometry:ac,ConeGeometry:Wc,ConeBufferGeometry:Xc,CylinderGeometry:wb,CylinderBufferGeometry:Za,CircleGeometry:Yc,CircleBufferGeometry:bc,BoxGeometry:Jb,BoxBufferGeometry:nb});cc.prototype=Object.create(N.prototype);cc.prototype.constructor=cc;cc.prototype.isShadowMaterial=!0;dc.prototype=Object.create(Ba.prototype);
dc.prototype.constructor=dc;dc.prototype.isRawShaderMaterial=!0;Sa.prototype=Object.create(N.prototype);Sa.prototype.constructor=Sa;Sa.prototype.isMeshStandardMaterial=!0;Sa.prototype.copy=function(a){N.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);
this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;
this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};xb.prototype=Object.create(Sa.prototype);xb.prototype.constructor=xb;xb.prototype.isMeshPhysicalMaterial=!0;xb.prototype.copy=function(a){Sa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=
a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ha.prototype=Object.create(N.prototype);Ha.prototype.constructor=Ha;Ha.prototype.isMeshPhongMaterial=!0;Ha.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=
a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=
a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};yb.prototype=Object.create(Ha.prototype);yb.prototype.constructor=yb;yb.prototype.isMeshToonMaterial=!0;yb.prototype.copy=function(a){Ha.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};zb.prototype=Object.create(N.prototype);zb.prototype.constructor=zb;zb.prototype.isMeshNormalMaterial=
!0;zb.prototype.copy=function(a){N.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Ab.prototype=Object.create(N.prototype);
Ab.prototype.constructor=Ab;Ab.prototype.isMeshLambertMaterial=!0;Ab.prototype.copy=function(a){N.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=
a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Bb.prototype=Object.create(W.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isLineDashedMaterial=!0;Bb.prototype.copy=function(a){W.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=
a.dashSize;this.gapSize=a.gapSize;return this};var Lg=Object.freeze({ShadowMaterial:cc,SpriteMaterial:fb,RawShaderMaterial:dc,ShaderMaterial:Ba,PointsMaterial:Fa,MeshPhysicalMaterial:xb,MeshStandardMaterial:Sa,MeshPhongMaterial:Ha,MeshToonMaterial:yb,MeshNormalMaterial:zb,MeshLambertMaterial:Ab,MeshDepthMaterial:cb,MeshDistanceMaterial:db,MeshBasicMaterial:ma,LineDashedMaterial:Bb,LineBasicMaterial:W,Material:N}),Fb={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==
this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},ua=new fe,ab={};Object.assign(Ia.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==ab[a])ab[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=
g[1];var h=!!g[2],g=g[3],g=window.decodeURIComponent(g);h&&(g=window.atob(g));try{var k=(this.responseType||"").toLowerCase();switch(k){case "arraybuffer":case "blob":for(var m=new Uint8Array(g.length),h=0;h<g.length;h++)m[h]=g.charCodeAt(h);var l="blob"===k?new Blob([m.buffer],{type:c}):m.buffer;break;case "document":l=(new DOMParser).parseFromString(g,c);break;case "json":l=JSON.parse(g);break;default:l=g}window.setTimeout(function(){b&&b(l);e.manager.itemEnd(a)},0)}catch(v){window.setTimeout(function(){d&&
d(v);e.manager.itemEnd(a);e.manager.itemError(a)},0)}}else{ab[a]=[];ab[a].push({onLoad:b,onProgress:c,onError:d});var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(b){var c=this.response;Fb.add(a,c);var d=ab[a];delete ab[a];if(200===this.status){for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c)}e.manager.itemEnd(a)}else if(0===this.status){console.warn("THREE.FileLoader: HTTP Status 0 received.");f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onLoad)h.onLoad(c);
e.manager.itemEnd(a)}else{f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onError)h.onError(b);e.manager.itemEnd(a);e.manager.itemError(a)}},!1);n.addEventListener("progress",function(b){for(var c=ab[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);n.addEventListener("error",function(b){var c=ab[a];delete ab[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemEnd(a);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);
void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)n.setRequestHeader(h,this.requestHeader[h]);n.send(null)}e.manager.itemStart(a);return n}},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this},
setRequestHeader:function(a){this.requestHeader=a;return this}});Object.assign(gf.prototype,{load:function(a,b,c,d){function e(e){m.load(a[e],function(a){a=g._parser(a,!0);h[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};f+=1;6===f&&(1===a.mipmapCount&&(k.minFilter=1006),k.format=a.format,k.needsUpdate=!0,b&&b(k))},c,d)}var f,g=this,h=[],k=new Pb;k.image=h;var m=new Ia(this.manager);m.setPath(this.path);m.setResponseType("arraybuffer");if(Array.isArray(a))for(var l=f=0,n=a.length;l<
n;++l)e(l);else m.load(a,function(a){a=g._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){h[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)h[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),h[d].format=a.format,h[d].width=a.width,h[d].height=a.height}else k.image.width=a.width,k.image.height=a.height,k.mipmaps=a.mipmaps;1===a.mipmapCount&&(k.minFilter=1006);k.format=a.format;k.needsUpdate=!0;b&&b(k)},c,d);return k},setPath:function(a){this.path=a;return this}});Object.assign(ge.prototype,
{load:function(a,b,c,d){var e=this,f=new jb,g=new Ia(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&
(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Zc.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml",
"img");c.addEventListener("load",function(){Fb.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemEnd(a);e.manager.itemError(a)},!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(he.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){function e(c){g.load(a[c],
function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new bb,g=new Zc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(wd.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){var e=new da,f=new Zc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=
c;c=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(H.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/
a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=
b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);
return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new p,d=[],e=[],f=[],g=new p,h=new O,k;for(k=0;k<=a;k++){var m=k/a;d[k]=this.getTangentAt(m);d[k].normalize()}e[0]=new p;f[0]=new p;k=Number.MAX_VALUE;m=Math.abs(d[0].x);var l=Math.abs(d[0].y),n=Math.abs(d[0].z);m<=k&&(k=m,c.set(1,0,0));l<=k&&(k=l,c.set(0,1,0));n<=k&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-
1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(S.clamp(d[k-1].dot(d[k]),-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(S.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],c*k)),f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=
a.arcLengthDivisions;return this},toJSON:function(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});ka.prototype=Object.create(H.prototype);ka.prototype.constructor=ka;ka.prototype.isEllipseCurve=!0;ka.prototype.getPoint=function(a,b){b=b||new C;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>
d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f)};ka.prototype.copy=function(a){H.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;
this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};ka.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a};ka.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=
a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};ec.prototype=Object.create(ka.prototype);ec.prototype.constructor=ec;ec.prototype.isArcCurve=!0;var Pd=new p,De=new ie,Ee=new ie,Fe=new ie;ha.prototype=Object.create(H.prototype);ha.prototype.constructor=ha;ha.prototype.isCatmullRomCurve3=!0;ha.prototype.getPoint=function(a,b){b=b||new p;var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/
c.length)+1)*c.length:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Pd.subVectors(c[0],c[1]).add(c[0]),f=Pd;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Pd.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Pd);if("centripetal"===this.curveType||"chordal"===this.curveType){var k="chordal"===this.curveType?.5:.25,d=Math.pow(f.distanceToSquared(g),k),e=Math.pow(g.distanceToSquared(h),k),k=Math.pow(h.distanceToSquared(c),k);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>k&&(k=e);De.initNonuniformCatmullRom(f.x,
g.x,h.x,c.x,d,e,k);Ee.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,k);Fe.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,k)}else"catmullrom"===this.curveType&&(De.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),Ee.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),Fe.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(De.calc(a),Ee.calc(a),Fe.calc(a));return b};ha.prototype.copy=function(a){H.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());
this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};ha.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};ha.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new p).fromArray(d))}this.closed=
a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Ja.prototype=Object.create(H.prototype);Ja.prototype.constructor=Ja;Ja.prototype.isCubicBezierCurve=!0;Ja.prototype.getPoint=function(a,b){b=b||new C;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(ad(a,c.x,d.x,e.x,f.x),ad(a,c.y,d.y,e.y,f.y));return b};Ja.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ja.prototype.toJSON=function(){var a=
H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ja.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};Ta.prototype=Object.create(H.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isCubicBezierCurve3=!0;Ta.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;
b.set(ad(a,c.x,d.x,e.x,f.x),ad(a,c.y,d.y,e.y,f.y),ad(a,c.z,d.z,e.z,f.z));return b};Ta.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ta.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ta.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);
this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};va.prototype=Object.create(H.prototype);va.prototype.constructor=va;va.prototype.isLineCurve=!0;va.prototype.getPoint=function(a,b){b=b||new C;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};va.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};va.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};va.prototype.copy=function(a){H.prototype.copy.call(this,
a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};va.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};va.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ka.prototype=Object.create(H.prototype);Ka.prototype.constructor=Ka;Ka.prototype.isLineCurve3=!0;Ka.prototype.getPoint=function(a,b){b=b||new p;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),
b.multiplyScalar(a).add(this.v1));return b};Ka.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ka.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ka.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ka.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};La.prototype=Object.create(H.prototype);
La.prototype.constructor=La;La.prototype.isQuadraticBezierCurve=!0;La.prototype.getPoint=function(a,b){b=b||new C;var c=this.v0,d=this.v1,e=this.v2;b.set($c(a,c.x,d.x,e.x),$c(a,c.y,d.y,e.y));return b};La.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};La.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};La.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,
a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ua.prototype=Object.create(H.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isQuadraticBezierCurve3=!0;Ua.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2;b.set($c(a,c.x,d.x,e.x),$c(a,c.y,d.y,e.y),$c(a,c.z,d.z,e.z));return b};Ua.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ua.prototype.toJSON=function(){var a=
H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ua.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ma.prototype=Object.create(H.prototype);Ma.prototype.constructor=Ma;Ma.prototype.isSplineCurve=!0;Ma.prototype.getPoint=function(a,b){b=b||new C;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);var d=d-a,e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-
2?c.length-1:a+1],c=c[a>c.length-3?c.length-1:a+2];b.set(hf(d,e.x,f.x,g.x,c.x),hf(d,e.y,f.y,g.y,c.y));return b};Ma.prototype.copy=function(a){H.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};Ma.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a};Ma.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,
a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new C).fromArray(d))}return this};var Mg=Object.freeze({ArcCurve:ec,CatmullRomCurve3:ha,CubicBezierCurve:Ja,CubicBezierCurve3:Ta,EllipseCurve:ka,LineCurve:va,LineCurve3:Ka,QuadraticBezierCurve:La,QuadraticBezierCurve3:Ua,SplineCurve:Ma});$a.prototype=Object.assign(Object.create(H.prototype),{constructor:$a,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-
1].getPoint(1);a.equals(b)||this.curves.push(new va(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;
for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),
c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){H.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},toJSON:function(){var a=H.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){H.prototype.fromJSON.call(this,a);
this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new Mg[d.type]).fromJSON(d))}return this}});Na.prototype=Object.assign(Object.create($a.prototype),{constructor:Na,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new va(this.currentPoint.clone(),new C(a,b));this.curves.push(c);this.currentPoint.set(a,
b)},quadraticCurveTo:function(a,b,c,d){a=new La(this.currentPoint.clone(),new C(a,b),new C(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new Ja(this.currentPoint.clone(),new C(a,b),new C(c,d),new C(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),b=new Ma(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,
c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new ka(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)},copy:function(a){$a.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=
$a.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){$a.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});hb.prototype=Object.assign(Object.create(Na.prototype),{constructor:hb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){Na.prototype.copy.call(this,
a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=Na.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a},fromJSON:function(a){Na.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new Na).fromJSON(d))}return this}});ca.prototype=Object.assign(Object.create(B.prototype),
{constructor:ca,isLight:!0,copy:function(a){B.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==
this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});xd.prototype=Object.assign(Object.create(ca.prototype),{constructor:xd,isHemisphereLight:!0,copy:function(a){ca.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(Cb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},
toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});yd.prototype=Object.assign(Object.create(Cb.prototype),{constructor:yd,isSpotLightShadow:!0,update:function(a){var b=this.camera,c=2*S.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height;a=a.distance||b.far;if(c!==b.fov||d!==b.aspect||a!==b.far)b.fov=
c,b.aspect=d,b.far=a,b.updateProjectionMatrix()}});zd.prototype=Object.assign(Object.create(ca.prototype),{constructor:zd,isSpotLight:!0,copy:function(a){ca.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Ad.prototype=Object.assign(Object.create(ca.prototype),{constructor:Ad,isPointLight:!0,copy:function(a){ca.prototype.copy.call(this,a);this.distance=a.distance;
this.decay=a.decay;this.shadow=a.shadow.clone();return this}});Bd.prototype=Object.assign(Object.create(Cb.prototype),{constructor:Bd});Cd.prototype=Object.assign(Object.create(ca.prototype),{constructor:Cd,isDirectionalLight:!0,copy:function(a){ca.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Dd.prototype=Object.assign(Object.create(ca.prototype),{constructor:Dd,isAmbientLight:!0});Ed.prototype=Object.assign(Object.create(ca.prototype),{constructor:Ed,
isRectAreaLight:!0,copy:function(a){ca.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=ca.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});Fd.prototype=Object.assign(Object.create(T.prototype),{constructor:Fd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Gd.prototype=Object.assign(Object.create(T.prototype),
{constructor:Gd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Object.assign(ya.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&
(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||
this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(ya.prototype,{beforeStart_:ya.prototype.copySampleValue_,afterEnd_:ya.prototype.copySampleValue_});Hd.prototype=Object.assign(Object.create(ya.prototype),{constructor:Hd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,
g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ea.slerpFlat(e,0,f,a-g,f,a,b);return e}});bd.prototype=Object.assign(Object.create(T.prototype),{constructor:bd,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Hd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});Id.prototype=Object.assign(Object.create(T.prototype),{constructor:Id,ValueTypeName:"color"});fc.prototype=Object.assign(Object.create(T.prototype),
{constructor:fc,ValueTypeName:"number"});Jd.prototype=Object.assign(Object.create(ya.prototype),{constructor:Jd,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];
break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,n=this._weightNext,p=(c-b)/(d-b);c=p*p;d=c*p;b=-l*d+2*l*c-l*p;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*p+1;p=(-1-n)*d+(1.5+n)*c+.5*p;n=n*d-n*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+p*f[a+c]+n*f[m+c];
return e}});cd.prototype=Object.assign(Object.create(ya.prototype),{constructor:cd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Kd.prototype=Object.assign(Object.create(ya.prototype),{constructor:Kd,interpolate_:function(a){return this.copySampleValue_(a-1)}});var oa={arraySlice:function(a,b,c){return oa.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:
a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=
a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};Object.assign(T,{parse:function(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
var b=T._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];oa.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{var b={name:a.name,times:oa.convertArray(a.times,Array),values:oa.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return fc;
case "vector":case "vector2":case "vector3":case "vector4":return gc;case "color":return Id;case "quaternion":return bd;case "bool":case "boolean":return Gd;case "string":return Fd}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}});Object.assign(T.prototype,{constructor:T,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Kd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new cd(this.times,
this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Jd(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn("THREE.KeyframeTrack:",b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=
this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=oa.arraySlice(c,e,f),this.values=oa.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times,b=this.values,
d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&oa.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,
d);a=!1;break}return a},optimize:function(){for(var a,b,c=this.times,d=this.values,e=this.getValueSize(),f=2302===this.getInterpolation(),g=1,h=c.length-1,k=1;k<h;++k){a=!1;var m=c[k];if(m!==c[k+1]&&(1!==k||m!==m[0]))if(f)a=!0;else{b=k*e;for(var l=b-e,n=b+e,m=0;m!==e;++m){var p=d[b+m];if(p!==d[l+m]||p!==d[n+m]){a=!0;break}}}if(a){if(k!==g)for(c[g]=c[k],b=k*e,a=g*e,m=0;m!==e;++m)d[a+m]=d[b+m];++g}}if(0<h){c[g]=c[h];b=h*e;a=g*e;for(m=0;m!==e;++m)d[a+m]=d[b+m];++g}g!==c.length&&(this.times=oa.arraySlice(c,
0,g),this.values=oa.arraySlice(d,0,g*e));return this}});gc.prototype=Object.assign(Object.create(T.prototype),{constructor:gc,ValueTypeName:"vector"});Object.assign(Ca,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(T.parse(c[e]).scale(d));return new Ca(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(T.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,
b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=oa.getKeyframeOrder(h),h=oa.sortedArray(h,1,m),k=oa.sortedArray(k,1,m);d||0!==h[0]||(h.push(e),k.push(k[0]));f.push((new fc(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new Ca(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,
b,c){for(var d,e={},f=/^([\w-]*?)([\d]+)$/,g=0,h=a.length;g<h;g++){var k=a[g],m=k.name.match(f);m&&1<m.length&&(d=m[1],(m=e[d])||(e[d]=m=[]),m.push(k))}a=[];for(d in e)a.push(Ca.CreateFromMorphTargetSequence(d,e[d],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];oa.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||
-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var k=a[h].keys;if(k&&0!==k.length)if(k[0].morphTargets){for(var f={},m=0;m<k.length;m++)if(k[m].morphTargets)for(var l=0;l<k[m].morphTargets.length;l++)f[k[m].morphTargets[l]]=-1;for(var n in f){for(var p=[],r=[],l=0;l!==k[m].morphTargets.length;++l){var q=k[m];p.push(q.time);r.push(q.morphTarget===n?1:0)}d.push(new fc(".morphTargetInfluence["+n+"]",p,r))}f=f.length*(g||1)}else m=".bones["+b[h].name+"]",c(gc,m+".position",k,"pos",d),c(bd,
m+".quaternion",k,"rot",d),c(gc,m+".scale",k,"scl",d)}return 0===d.length?null:new Ca(e,f,d)}});Object.assign(Ca.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}});Object.assign(Ld.prototype,
{load:function(a,b,c,d){var e=this;(new Ia(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Lg[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);
void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==
a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==
a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=
a.morphTargets);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.userData&&(d.userData=a.userData);void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&
(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new C).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=
b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=
b(a.gradientMap));return d}});Object.assign(je.prototype,{load:function(a,b,c,d){var e=this;(new Ia(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new E;var c=a.data.index;void 0!==c&&(c=new xf[c.type](c.array),b.setIndex(new L(c,1)));var d=a.data.attributes;for(f in d){var e=d[f];c=new xf[e.type](e.array);b.addAttribute(f,new L(c,e.itemSize,e.normalized))}var f=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==f)for(c=0,d=f.length;c!==d;++c)e=f[c],
b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(f=new p,void 0!==a.center&&f.fromArray(a.center),b.boundingSphere=new Da(f,a.radius));return b}});var xf={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};hc.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,
b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(hc.prototype,{crossOrigin:void 0,initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b=new G,c=new wd,d=new Ld;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var m=hc.Handlers.get(a);
null!==m?a=m.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=S.generateUUID();k[b]=a;return b}var k={},m={uuid:S.generateUUID(),type:"MeshLambertMaterial"},l;for(l in e){var n=e[l];switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;
case "DbgName":m.name=n;break;case "blending":m.blending=a[n];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case "colorDiffuse":m.color=b.fromArray(n).getHex();break;case "colorSpecular":m.specular=b.fromArray(n).getHex();break;case "colorEmissive":m.emissive=b.fromArray(n).getHex();break;case "specularCoef":m.shininess=n;break;case "shading":"basic"===n.toLowerCase()&&(m.type="MeshBasicMaterial");"phong"===n.toLowerCase()&&
(m.type="MeshPhongMaterial");"standard"===n.toLowerCase()&&(m.type="MeshStandardMaterial");break;case "mapDiffuse":m.map=h(n,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":m.emissiveMap=h(n,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;
case "mapLight":m.lightMap=h(n,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":m.aoMap=h(n,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":m.bumpMap=h(n,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":m.bumpScale=
n;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":m.normalMap=h(n,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":m.normalScale=[n,n];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":m.specularMap=h(n,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;
case "mapMetalness":m.metalnessMap=h(n,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":m.roughnessMap=h(n,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":m.alphaMap=
h(n,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":m.side=1;break;case "doubleSided":m.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");m.opacity=n;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":m[l]=
n;break;case "vertexColors":!0===n&&(m.vertexColors=2);"face"===n&&(m.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,n)}}"MeshBasicMaterial"===m.type&&delete m.emissive;"MeshPhongMaterial"!==m.type&&delete m.specular;1>m.opacity&&(m.transparent=!0);d.setTextures(k);return d.parse(m)}}()});var Ge={decodeText:function(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder).decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);return decodeURIComponent(escape(b))},
extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"}};Object.assign(ke.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:Ge.extractUrlBase(a),g=new Ia(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");
return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(){return function(a,b){void 0!==a.data&&(a=a.data);a.scale=void 0!==a.scale?1/a.scale:1;var c=new J,d=a,e,f,g,h=d.faces;var k=d.vertices;var m=d.normals,l=d.colors;var n=d.scale;var v=0;if(void 0!==d.uvs){for(e=0;e<d.uvs.length;e++)d.uvs[e].length&&v++;for(e=
0;e<v;e++)c.faceVertexUvs[e]=[]}var r=0;for(g=k.length;r<g;)e=new p,e.x=k[r++]*n,e.y=k[r++]*n,e.z=k[r++]*n,c.vertices.push(e);r=0;for(g=h.length;r<g;){k=h[r++];var q=k&1;var u=k&2;e=k&8;var w=k&16;var x=k&32;n=k&64;k&=128;if(q){q=new Wa;q.a=h[r];q.b=h[r+1];q.c=h[r+3];var z=new Wa;z.a=h[r+1];z.b=h[r+2];z.c=h[r+3];r+=4;u&&(u=h[r++],q.materialIndex=u,z.materialIndex=u);u=c.faces.length;if(e)for(e=0;e<v;e++){var A=d.uvs[e];c.faceVertexUvs[e][u]=[];c.faceVertexUvs[e][u+1]=[];for(f=0;4>f;f++){var y=h[r++];
var B=A[2*y];y=A[2*y+1];B=new C(B,y);2!==f&&c.faceVertexUvs[e][u].push(B);0!==f&&c.faceVertexUvs[e][u+1].push(B)}}w&&(w=3*h[r++],q.normal.set(m[w++],m[w++],m[w]),z.normal.copy(q.normal));if(x)for(e=0;4>e;e++)w=3*h[r++],x=new p(m[w++],m[w++],m[w]),2!==e&&q.vertexNormals.push(x),0!==e&&z.vertexNormals.push(x);n&&(n=h[r++],n=l[n],q.color.setHex(n),z.color.setHex(n));if(k)for(e=0;4>e;e++)n=h[r++],n=l[n],2!==e&&q.vertexColors.push(new G(n)),0!==e&&z.vertexColors.push(new G(n));c.faces.push(q);c.faces.push(z)}else{q=
new Wa;q.a=h[r++];q.b=h[r++];q.c=h[r++];u&&(u=h[r++],q.materialIndex=u);u=c.faces.length;if(e)for(e=0;e<v;e++)for(A=d.uvs[e],c.faceVertexUvs[e][u]=[],f=0;3>f;f++)y=h[r++],B=A[2*y],y=A[2*y+1],B=new C(B,y),c.faceVertexUvs[e][u].push(B);w&&(w=3*h[r++],q.normal.set(m[w++],m[w++],m[w]));if(x)for(e=0;3>e;e++)w=3*h[r++],x=new p(m[w++],m[w++],m[w]),q.vertexNormals.push(x);n&&(n=h[r++],q.color.setHex(l[n]));if(k)for(e=0;3>e;e++)n=h[r++],q.vertexColors.push(new G(l[n]));c.faces.push(q)}}d=a;r=void 0!==d.influencesPerVertex?
d.influencesPerVertex:2;if(d.skinWeights)for(g=0,h=d.skinWeights.length;g<h;g+=r)c.skinWeights.push(new fa(d.skinWeights[g],1<r?d.skinWeights[g+1]:0,2<r?d.skinWeights[g+2]:0,3<r?d.skinWeights[g+3]:0));if(d.skinIndices)for(g=0,h=d.skinIndices.length;g<h;g+=r)c.skinIndices.push(new fa(d.skinIndices[g],1<r?d.skinIndices[g+1]:0,2<r?d.skinIndices[g+2]:0,3<r?d.skinIndices[g+3]:0));c.bones=d.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&
console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");g=a;h=g.scale;if(void 0!==g.morphTargets)for(d=0,r=g.morphTargets.length;d<r;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=g.morphTargets[d].name,c.morphTargets[d].vertices=[],m=c.morphTargets[d].vertices,l=g.morphTargets[d].vertices,v=0,k=l.length;v<k;v+=3)n=new p,n.x=l[v]*h,n.y=l[v+1]*h,n.z=l[v+2]*h,m.push(n);if(void 0!==
g.morphColors&&0<g.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),h=c.faces,g=g.morphColors[0].colors,d=0,r=h.length;d<r;d++)h[d].color.fromArray(g,3*d);g=a;d=[];r=[];void 0!==g.animation&&r.push(g.animation);void 0!==g.animations&&(g.animations.length?r=r.concat(g.animations):r.push(g.animations));for(g=0;g<r.length;g++)(h=Ca.parseAnimation(r[g],c.bones))&&d.push(h);c.morphTargets&&(r=Ca.CreateClipsFromMorphTargetSequences(c.morphTargets,
10),d=d.concat(r));0<d.length&&(c.animations=d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};a=hc.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:a}}}()});Object.assign(jf.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new Ia(e.manager)).load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(h){void 0!==d&&d(h);console.error("THREE:ObjectLoader: Can't parse "+
a+".",h.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a+". Use THREE.JSONLoader instead."):e.parse(f,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseShape(a.shapes),c=this.parseGeometries(a.geometries,c),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,
d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new hb).fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new ke,e=new je,f=0,g=a.length;f<g;f++){var h=a[f];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":var k=new za[h.type](h.width,
h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":k=new za[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":k=new za[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":k=new za[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
break;case "ConeGeometry":case "ConeBufferGeometry":k=new za[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":k=new za[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":k=
new za[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":k=new za[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":k=new za[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":k=new za[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":k=
new za[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":k=new za[h.type](h.vertices,h.indices,h.radius,h.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":k=[];f=0;for(g=h.shapes.length;f<g;f++)k.push(b[h.shapes[f]]);k=new za[h.type](k,h.curveSegments);break;case "BufferGeometry":k=e.parse(h);break;case "Geometry":k=d.parse(h,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+
h.type+'"');continue}k.uuid=h.uuid;void 0!==h.name&&(k.name=h.name);c[h.uuid]=k}return c},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new Ld;d.setTextures(b);b=0;for(var e=a.length;b<e;b++){var f=a[b];if("MultiMaterial"===f.type){for(var g=[],h=0;h<f.materials.length;h++)g.push(d.parse(f.materials[h]));c[f.uuid]=g}else c[f.uuid]=d.parse(f)}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=Ca.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);
return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemEnd(a);d.manager.itemError(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new fe(b);var f=new Zc(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.texturePath+h.url;e[h.uuid]=c(k)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new da(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Ng));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);
void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],yf),h.wrapT=c(g.wrap[1],yf));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,zf));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,zf));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h}return d},parseObject:function(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=
[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}switch(a.type){case "Scene":var f=new qd;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new G(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Nb(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Mb(a.fog.color,a.fog.density)));break;
case "PerspectiveCamera":f=new Z(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new Ib(a.left,a.right,a.top,a.bottom,a.near,a.far);break;case "AmbientLight":f=new Dd(a.color,a.intensity);break;case "DirectionalLight":f=new Cd(a.color,a.intensity);break;case "PointLight":f=
new Ad(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new Ed(a.color,a.intensity,a.width,a.height);break;case "SpotLight":f=new zd(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new xd(a.color,a.groundColor,a.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new sd(f,g):new ra(f,g);break;case "LOD":f=
new Cc;break;case "Line":f=new ja(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new td(d(a.geometry),e(a.material));break;case "LineSegments":f=new V(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=new Ob(d(a.geometry),e(a.material));break;case "Sprite":f=new Bc(e(a.material));break;case "Group":f=new ud;break;default:f=new B}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),f.matrix.decompose(f.position,f.quaternion,
f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),
void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.userData&&(f.userData=a.userData);if(void 0!==a.children)for(var g=a.children,h=0;h<g.length;h++)f.add(this.parseObject(g[h],b,c));if("LOD"===a.type)for(a=a.levels,g=0;g<a.length;g++){var h=a[g],k=f.getObjectByProperty("uuid",h.object);void 0!==k&&f.addLevel(k,h.distance)}return f}});var Ng={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,
EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},yf={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},zf={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008};le.prototype={constructor:le,setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&
(a=this.path+a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,e.options)}).then(function(c){Fb.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&d(b);e.manager.itemEnd(a);e.manager.itemError(a)})},setCrossOrigin:function(){return this},setPath:function(a){this.path=a;return this}};Object.assign(me.prototype,{moveTo:function(a,
b){this.currentPath=new Na;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new hb;f.curves=e.curves;b.push(f)}return b}function d(a,
b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=Ya.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new hb;h.curves=g.curves;b.push(h);
return b}var k=!e(f[0].getPoints()),k=a?!k:k;h=[];var l=[],p=[],n=0;l[n]=void 0;p[n]=[];for(var v=0,r=f.length;v<r;v++){g=f[v];var q=g.getPoints();var u=e(q);(u=a?!u:u)?(!k&&l[n]&&n++,l[n]={s:new hb,p:q},l[n].s.curves=g.curves,k&&n++,p[n]=[]):p[n].push({h:g,p:q[0]})}if(!l[0])return c(f);if(1<l.length){v=!1;a=[];e=0;for(f=l.length;e<f;e++)h[e]=[];e=0;for(f=l.length;e<f;e++)for(g=p[e],u=0;u<g.length;u++){k=g[u];n=!0;for(q=0;q<l.length;q++)d(k.p,l[q].p)&&(e!==q&&a.push({froms:e,tos:q,hole:u}),n?(n=!1,
h[q].push(k)):v=!0);n&&h[e].push(k)}0<a.length&&(v||(p=h))}v=0;for(e=l.length;v<e;v++)for(h=l[v].s,b.push(h),a=p[v],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(ne.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);c=[];var d=b;b=this.data;var e=String(a).split(""),d=d/b.resolution,f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,k=0;k<e.length;k++){var l=e[k];if("\n"===l)g=0,h-=f;else{var p=d;var n=g,v=h;if(l=b.glyphs[l]||
b.glyphs["?"]){var r=new me;if(l.o)for(var q=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),u=0,w=q.length;u<w;)switch(q[u++]){case "m":var x=q[u++]*p+n;var z=q[u++]*p+v;r.moveTo(x,z);break;case "l":x=q[u++]*p+n;z=q[u++]*p+v;r.lineTo(x,z);break;case "q":var A=q[u++]*p+n;var y=q[u++]*p+v;var B=q[u++]*p+n;var C=q[u++]*p+v;r.quadraticCurveTo(B,C,A,y);break;case "b":A=q[u++]*p+n,y=q[u++]*p+v,B=q[u++]*p+n,C=q[u++]*p+v,x=q[u++]*p+n,z=q[u++]*p+v,r.bezierCurveTo(B,C,x,z,A,y)}p={offsetX:l.ha*p,path:r}}else p=
void 0;g+=p.offsetX;a.push(p.path)}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});Object.assign(kf.prototype,{load:function(a,b,c,d){var e=this,f=new Ia(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(k){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new ne(a)},setPath:function(a){this.path=
a;return this}});var Qd,qe={getContext:function(){void 0===Qd&&(Qd=new (window.AudioContext||window.webkitAudioContext));return Qd},setContext:function(a){Qd=a}};Object.assign(oe.prototype,{load:function(a,b,c,d){var e=new Ia(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){qe.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Object.assign(lf.prototype,{update:function(){var a,b,c,d,e,f,g,h,k=new O,l=new O;return function(m){if(a!==this||b!==m.focus||c!==m.fov||d!==m.aspect*
this.aspect||e!==m.near||f!==m.far||g!==m.zoom||h!==this.eyeSep){a=this;b=m.focus;c=m.fov;d=m.aspect*this.aspect;e=m.near;f=m.far;g=m.zoom;var n=m.projectionMatrix.clone();h=this.eyeSep/2;var p=h*e/b,r=e*Math.tan(S.DEG2RAD*c*.5)/g;l.elements[12]=-h;k.elements[12]=h;var q=-r*d+p;var t=r*d+p;n.elements[0]=2*e/(t-q);n.elements[8]=(t+q)/(t-q);this.cameraL.projectionMatrix.copy(n);q=-r*d-p;t=r*d-p;n.elements[0]=2*e/(t-q);n.elements[8]=(t+q)/(t-q);this.cameraR.projectionMatrix.copy(n)}this.cameraL.matrixWorld.copy(m.matrixWorld).multiply(l);
this.cameraR.matrixWorld.copy(m.matrixWorld).multiply(k)}}()});dd.prototype=Object.create(B.prototype);dd.prototype.constructor=dd;pe.prototype=Object.assign(Object.create(B.prototype),{constructor:pe,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?
(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new p,b=new ea,c=new p,d=new p;return function(e){B.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,
b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,
this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});ic.prototype=Object.assign(Object.create(B.prototype),{constructor:ic,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");
else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,this.startTime);this.startTime=this.context.currentTime;a.start(this.startTime,this.offset);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return!0===this.isPlaying&&(this.source.stop(),this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.offset=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-
1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=
a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=
!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.value=a;return this}});re.prototype=Object.assign(Object.create(ic.prototype),
{constructor:re,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=
a},updateMatrixWorld:function(){var a=new p;return function(b){B.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(se.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(te.prototype,{accumulate:function(a,b){var c=this.buffer,d=
this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);
for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){ea.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});Object.assign(mf.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,
b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(pa,{Composite:mf,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new pa.Composite(a,b,c):new pa(a,b,c)},sanitizeNodeName:function(){var a=
/[\[\]\.:\/]/g;return function(b){return b.replace(/\s/g,"_").replace(a,"")}}(),parseTrackName:function(){var a="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",b=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),a=/(WCOD+)?/.source.replace("WCOD",a),c=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),e=new RegExp("^"+b+a+c+d+"$"),f=["material","materials","bones"];return function(a){var b=e.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+
a);var b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]},c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==f.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b}}(),findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;
if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(pa.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,
b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=
!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,
b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,
d=b.propertyName,e=b.propertyIndex;a||(this.node=a=pa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});Object.assign(pa.prototype,{_getValue_unbound:pa.prototype.getValue,_setValue_unbound:pa.prototype.setValue});Object.assign(nf.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,k=void 0,l=0,p=arguments.length;l!==
p;++l){var n=arguments[l],v=n.uuid,r=d[v];if(void 0===r){r=b++;d[v]=r;a.push(n);for(var v=0,q=h;v!==q;++v)g[v].push(new pa(n,e[v],f[v]))}else if(r<c){var k=a[r],u=--c,q=a[u];d[q.uuid]=r;a[r]=q;d[v]=u;a[u]=n;v=0;for(q=h;v!==q;++v){var w=g[v],x=w[r];w[r]=w[u];void 0===x&&(x=new pa(n,e[v],f[v]));w[u]=x}}else a[r]!==k&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=
c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],k=h.uuid,l=c[k];if(void 0!==l&&l>=b){var p=b++,n=a[p];c[n.uuid]=l;a[l]=n;c[k]=p;a[p]=h;h=0;for(k=e;h!==k;++h){var n=d[h],v=n[l];n[l]=n[p];n[p]=v}}}this.nCachedObjects_=b},uncache:function(){for(var a,b,c=this._objects,d=c.length,e=this.nCachedObjects_,f=this._indicesByUUID,g=this._bindings,h=g.length,k=0,l=arguments.length;k!==l;++k){b=
arguments[k].uuid;var p=f[b];if(void 0!==p)if(delete f[b],p<e){var n=--e,v=c[n];b=--d;a=c[b];f[v.uuid]=p;c[p]=v;f[a.uuid]=n;c[n]=a;c.pop();for(var v=0,r=h;v!==r;++v){a=g[v];var q=a[b];a[p]=a[n];a[n]=q;a.pop()}}else for(b=--d,a=c[b],f[a.uuid]=p,c[p]=a,c.pop(),v=0,r=h;v!==r;++v)a=g[v],a[p]=a[b],a.pop()}this.nCachedObjects_=e},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,
l=Array(h.length),d=e.length;c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new pa(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(of.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},
reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;
this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;
null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,
0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],
b=b*d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===
d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?
c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,
b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});ue.prototype=Object.assign(Object.create(wa.prototype),{constructor:ue,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var l=
d[h],p=l.name,n=k[p];if(void 0===n){n=f[h];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,g,p));continue}n=new te(pa.create(c,p,b&&b._propertyBindings[h].binding.parsedPath),l.ValueTypeName,l.getValueSize());++n.referenceCount;this._addInactiveBinding(n,g,p)}f[h]=n;a[h].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,
d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip=
{};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;
return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var b=a._clip.uuid,c=this._actionsByClip,d=c[b],e=
d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=
d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;
g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new cd(new Float32Array(2),
new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?Ca.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=
e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip)}if(null===c)return null;b=new of(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Ca.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=
this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,
e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},
uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});Md.prototype.clone=function(){return new Md(void 0===this.value.clone?this.value:this.value.clone())};ve.prototype=Object.assign(Object.create(E.prototype),{constructor:ve,isInstancedBufferGeometry:!0,copy:function(a){E.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this},clone:function(){return(new this.constructor).copy(this)}});Object.defineProperties(we.prototype,
{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(we.prototype,{isInterleavedBufferAttribute:!0,setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*
this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},
setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});Object.defineProperty(jc.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(jc.prototype,{isInterleavedBuffer:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=
a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=a;return this}});xe.prototype=Object.assign(Object.create(jc.prototype),
{constructor:xe,isInstancedInterleavedBuffer:!0,copy:function(a){jc.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});ye.prototype=Object.assign(Object.create(L.prototype),{constructor:ye,isInstancedBufferAttribute:!0,copy:function(a){L.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(pf.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),
this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];ze(a,this,c,b);c.sort(qf);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
c;for(var d=0,e=a.length;d<e;d++)ze(a[d],this,c,b);c.sort(qf);return c}});Object.assign(rf.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?
Date:performance).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});Object.assign(sf.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=
0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(S.clamp(a.y/this.radius,-1,1)));return this}});Object.assign(tf.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*a.x+a.z*a.z);this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}});Object.assign(Ae.prototype,{set:function(a,
b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new C;return function(b,c){c=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;
this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new C;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new C;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new C).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},
clampPoint:function(a,b){return(b||new C).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new C;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});ed.prototype=Object.create(B.prototype);
ed.prototype.constructor=ed;ed.prototype.isImmediateRenderObject=!0;fd.prototype=Object.create(V.prototype);fd.prototype.constructor=fd;fd.prototype.update=function(){var a=new p,b=new p,c=new na;return function(){var d,e=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var f=this.object.matrixWorld,g=this.geometry.attributes.position;if((d=this.object.geometry)&&d.isGeometry)for(var h=d.vertices,k=d.faces,l=d=0,p=k.length;l<p;l++)for(var n=k[l],v=0,r=n.vertexNormals.length;v<
r;v++){var q=n.vertexNormals[v];a.copy(h[n[e[v]]]).applyMatrix4(f);b.copy(q).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);g.setXYZ(d,a.x,a.y,a.z);d+=1;g.setXYZ(d,b.x,b.y,b.z);d+=1}else if(d&&d.isBufferGeometry)for(e=d.attributes.position,h=d.attributes.normal,v=d=0,r=e.count;v<r;v++)a.set(e.getX(v),e.getY(v),e.getZ(v)).applyMatrix4(f),b.set(h.getX(v),h.getY(v),h.getZ(v)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),g.setXYZ(d,a.x,a.y,a.z),d+=1,g.setXYZ(d,b.x,b.y,
b.z),d+=1;g.needsUpdate=!0}}();kc.prototype=Object.create(B.prototype);kc.prototype.constructor=kc;kc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};kc.prototype.update=function(){var a=new p,b=new p;return function(){this.light.updateMatrixWorld();var c=this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);
this.cone.lookAt(b.sub(a));void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}();lc.prototype=Object.create(V.prototype);lc.prototype.constructor=lc;lc.prototype.updateMatrixWorld=function(){var a=new p,b=new O,c=new O;return function(d){var e=this.bones,f=this.geometry,g=f.getAttribute("position");c.getInverse(this.root.matrixWorld);for(var h=0,k=0;h<e.length;h++){var l=e[h];l.parent&&l.parent.isBone&&(b.multiplyMatrices(c,l.matrixWorld),
a.setFromMatrixPosition(b),g.setXYZ(k,a.x,a.y,a.z),b.multiplyMatrices(c,l.parent.matrixWorld),a.setFromMatrixPosition(b),g.setXYZ(k+1,a.x,a.y,a.z),k+=2)}f.getAttribute("position").needsUpdate=!0;B.prototype.updateMatrixWorld.call(this,d)}}();mc.prototype=Object.create(ra.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};mc.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};
nc.prototype=Object.create(B.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};nc.prototype.update=function(){var a=.5*this.light.width,b=.5*this.light.height,c=this.line.geometry.attributes.position,d=c.array;d[0]=a;d[1]=-b;d[2]=0;d[3]=a;d[4]=b;d[5]=0;d[6]=-a;d[7]=b;d[8]=0;d[9]=-a;d[10]=-b;d[11]=0;d[12]=a;d[13]=-b;d[14]=0;c.needsUpdate=!0;void 0!==this.color?this.line.material.color.set(this.color):this.line.material.color.copy(this.light.color)};
oc.prototype=Object.create(B.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};oc.prototype.update=function(){var a=new p,b=new G,c=new G;return function(){var d=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var e=d.geometry.getAttribute("color");b.copy(this.light.color);c.copy(this.light.groundColor);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}e.needsUpdate=
!0}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate())}}();gd.prototype=Object.create(V.prototype);gd.prototype.constructor=gd;Nd.prototype=Object.create(V.prototype);Nd.prototype.constructor=Nd;hd.prototype=Object.create(V.prototype);hd.prototype.constructor=hd;hd.prototype.update=function(){var a=new p,b=new p,c=new na;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,
f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<l;k++){var p=f[k],n=p.normal;a.copy(g[p.a]).add(g[p.b]).add(g[p.c]).divideScalar(3).applyMatrix4(d);b.copy(n).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0}}();pc.prototype=Object.create(B.prototype);pc.prototype.constructor=pc;pc.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();
this.targetLine.material.dispose()};pc.prototype.update=function(){var a=new p,b=new p,c=new p;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(c);
this.targetLine.scale.z=c.length()}}();id.prototype=Object.create(V.prototype);id.prototype.constructor=id;id.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,k=a.length;h<k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new p,e=new Qa;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,
1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();Db.prototype=Object.create(V.prototype);Db.prototype.constructor=Db;Db.prototype.update=function(){var a=new Va;return function(b){void 0!==b&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");
void 0!==this.object&&a.setFromObject(this.object);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();Db.prototype.setFromObject=function(a){this.object=a;this.update();return this};
jd.prototype=Object.create(V.prototype);jd.prototype.constructor=jd;jd.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),B.prototype.updateMatrixWorld.call(this,a))};kd.prototype=Object.create(ja.prototype);kd.prototype.constructor=kd;kd.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.lookAt(this.plane.normal);
B.prototype.updateMatrixWorld.call(this,a)};var Od,Be;Eb.prototype=Object.create(B.prototype);Eb.prototype.constructor=Eb;Eb.prototype.setDirection=function(){var a=new p,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Eb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();
this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Eb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};ld.prototype=Object.create(V.prototype);ld.prototype.constructor=ld;H.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(H.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Object.assign($a.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new J,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new p(e.x,
e.y,e.z||0))}return b}});Object.assign(Na.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");this.setFromPoints(a)}});vf.prototype=Object.create(ha.prototype);wf.prototype=Object.create(ha.prototype);Ce.prototype=Object.create(ha.prototype);Object.assign(Ce.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});gd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};lc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(hc.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
return Ge.extractUrlBase(a)}});Object.assign(Ae.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");
return this.getSize(a)}});Object.assign(Va.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});Kb.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(S,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
return S.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return S.ceilPowerOfTwo(a)}});Object.assign(na.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(O.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new p);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},
rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},
rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
return this.makePerspective(a,b,d,c,e,f)}});xa.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};ea.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(pb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(hb.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a)},
extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new gb(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new ub(this,a)}});Object.assign(C.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(p.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
return this.manhattanLength()}});Object.assign(fa.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});J.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(B.prototype,
{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(B.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Cc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");
return this.levels}}});Object.defineProperty(Dc.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Object.defineProperty(H.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
this.arcLengthDivisions=a}});Z.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ca.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},
shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(L.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
return this.array.length}}});Object.assign(E.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(E.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});
Object.defineProperties(Md.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.defineProperties(N.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},
wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new G}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}}});Object.defineProperties(Ha.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ba.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(be.prototype,
{getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},
supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});
Object.defineProperties(be.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},
set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Te.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},
set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(ib.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},
set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},
set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.assign(ae.prototype,{getStandingMatrix:function(){console.warn("THREE.WebVRManager: .getStandingMatrix() has been removed.")}});Object.defineProperties(ae.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}}});ic.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
var b=this;(new oe).load(a,function(a){b.setBuffer(a)});return this};se.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};dd.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};l.WebGLRenderTargetCube=Gb;l.WebGLRenderTarget=ib;l.WebGLRenderer=be;l.ShaderLib=qb;l.UniformsLib=K;l.UniformsUtils=Aa;l.ShaderChunk=U;l.FogExp2=Mb;l.Fog=Nb;
l.Scene=qd;l.Sprite=Bc;l.LOD=Cc;l.SkinnedMesh=sd;l.Skeleton=Dc;l.Bone=rd;l.Mesh=ra;l.LineSegments=V;l.LineLoop=td;l.Line=ja;l.Points=Ob;l.Group=ud;l.VideoTexture=ce;l.DataTexture=jb;l.CompressedTexture=Pb;l.CubeTexture=bb;l.CanvasTexture=qc;l.DepthTexture=Ec;l.Texture=da;l.CompressedTextureLoader=gf;l.DataTextureLoader=ge;l.CubeTextureLoader=he;l.TextureLoader=wd;l.ObjectLoader=jf;l.MaterialLoader=Ld;l.BufferGeometryLoader=je;l.DefaultLoadingManager=ua;l.LoadingManager=fe;l.JSONLoader=ke;l.ImageLoader=
Zc;l.ImageBitmapLoader=le;l.FontLoader=kf;l.FileLoader=Ia;l.Loader=hc;l.LoaderUtils=Ge;l.Cache=Fb;l.AudioLoader=oe;l.SpotLightShadow=yd;l.SpotLight=zd;l.PointLight=Ad;l.RectAreaLight=Ed;l.HemisphereLight=xd;l.DirectionalLightShadow=Bd;l.DirectionalLight=Cd;l.AmbientLight=Dd;l.LightShadow=Cb;l.Light=ca;l.StereoCamera=lf;l.PerspectiveCamera=Z;l.OrthographicCamera=Ib;l.CubeCamera=dd;l.ArrayCamera=pd;l.Camera=Qa;l.AudioListener=pe;l.PositionalAudio=re;l.AudioContext=qe;l.AudioAnalyser=se;l.Audio=ic;l.VectorKeyframeTrack=
gc;l.StringKeyframeTrack=Fd;l.QuaternionKeyframeTrack=bd;l.NumberKeyframeTrack=fc;l.ColorKeyframeTrack=Id;l.BooleanKeyframeTrack=Gd;l.PropertyMixer=te;l.PropertyBinding=pa;l.KeyframeTrack=T;l.AnimationUtils=oa;l.AnimationObjectGroup=nf;l.AnimationMixer=ue;l.AnimationClip=Ca;l.Uniform=Md;l.InstancedBufferGeometry=ve;l.BufferGeometry=E;l.Geometry=J;l.InterleavedBufferAttribute=we;l.InstancedInterleavedBuffer=xe;l.InterleavedBuffer=jc;l.InstancedBufferAttribute=ye;l.Face3=Wa;l.Object3D=B;l.Raycaster=
pf;l.Layers=Ud;l.EventDispatcher=wa;l.Clock=rf;l.QuaternionLinearInterpolant=Hd;l.LinearInterpolant=cd;l.DiscreteInterpolant=Kd;l.CubicInterpolant=Jd;l.Interpolant=ya;l.Triangle=Xa;l.Math=S;l.Spherical=sf;l.Cylindrical=tf;l.Plane=xa;l.Frustum=nd;l.Sphere=Da;l.Ray=pb;l.Matrix4=O;l.Matrix3=na;l.Box3=Va;l.Box2=Ae;l.Line3=Kb;l.Euler=eb;l.Vector4=fa;l.Vector3=p;l.Vector2=C;l.Quaternion=ea;l.Color=G;l.ImmediateRenderObject=ed;l.VertexNormalsHelper=fd;l.SpotLightHelper=kc;l.SkeletonHelper=lc;l.PointLightHelper=
mc;l.RectAreaLightHelper=nc;l.HemisphereLightHelper=oc;l.GridHelper=gd;l.PolarGridHelper=Nd;l.FaceNormalsHelper=hd;l.DirectionalLightHelper=pc;l.CameraHelper=id;l.BoxHelper=Db;l.Box3Helper=jd;l.PlaneHelper=kd;l.ArrowHelper=Eb;l.AxesHelper=ld;l.Shape=hb;l.Path=Na;l.ShapePath=me;l.Font=ne;l.CurvePath=$a;l.Curve=H;l.ShapeUtils=Ya;l.WebGLUtils=Ze;l.WireframeGeometry=Qb;l.ParametricGeometry=Fc;l.ParametricBufferGeometry=Rb;l.TetrahedronGeometry=Hc;l.TetrahedronBufferGeometry=Sb;l.OctahedronGeometry=Ic;
l.OctahedronBufferGeometry=rb;l.IcosahedronGeometry=Jc;l.IcosahedronBufferGeometry=Tb;l.DodecahedronGeometry=Kc;l.DodecahedronBufferGeometry=Ub;l.PolyhedronGeometry=Gc;l.PolyhedronBufferGeometry=ta;l.TubeGeometry=Lc;l.TubeBufferGeometry=Vb;l.TorusKnotGeometry=Mc;l.TorusKnotBufferGeometry=Wb;l.TorusGeometry=Nc;l.TorusBufferGeometry=Xb;l.TextGeometry=Sc;l.TextBufferGeometry=Yb;l.SphereGeometry=Tc;l.SphereBufferGeometry=tb;l.RingGeometry=Uc;l.RingBufferGeometry=Zb;l.PlaneGeometry=zc;l.PlaneBufferGeometry=
ob;l.LatheGeometry=Vc;l.LatheBufferGeometry=$b;l.ShapeGeometry=ub;l.ShapeBufferGeometry=vb;l.ExtrudeGeometry=gb;l.ExtrudeBufferGeometry=Ga;l.EdgesGeometry=ac;l.ConeGeometry=Wc;l.ConeBufferGeometry=Xc;l.CylinderGeometry=wb;l.CylinderBufferGeometry=Za;l.CircleGeometry=Yc;l.CircleBufferGeometry=bc;l.BoxGeometry=Jb;l.BoxBufferGeometry=nb;l.ShadowMaterial=cc;l.SpriteMaterial=fb;l.RawShaderMaterial=dc;l.ShaderMaterial=Ba;l.PointsMaterial=Fa;l.MeshPhysicalMaterial=xb;l.MeshStandardMaterial=Sa;l.MeshPhongMaterial=
Ha;l.MeshToonMaterial=yb;l.MeshNormalMaterial=zb;l.MeshLambertMaterial=Ab;l.MeshDepthMaterial=cb;l.MeshDistanceMaterial=db;l.MeshBasicMaterial=ma;l.LineDashedMaterial=Bb;l.LineBasicMaterial=W;l.Material=N;l.Float64BufferAttribute=yc;l.Float32BufferAttribute=D;l.Uint32BufferAttribute=mb;l.Int32BufferAttribute=xc;l.Uint16BufferAttribute=lb;l.Int16BufferAttribute=wc;l.Uint8ClampedBufferAttribute=vc;l.Uint8BufferAttribute=uc;l.Int8BufferAttribute=tc;l.BufferAttribute=L;l.ArcCurve=ec;l.CatmullRomCurve3=
ha;l.CubicBezierCurve=Ja;l.CubicBezierCurve3=Ta;l.EllipseCurve=ka;l.LineCurve=va;l.LineCurve3=Ka;l.QuadraticBezierCurve=La;l.QuadraticBezierCurve3=Ua;l.SplineCurve=Ma;l.REVISION="90dev";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=
1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=
210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=
306;l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;
l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=33776;l.RGBA_S3TC_DXT1_Format=33777;l.RGBA_S3TC_DXT3_Format=33778;l.RGBA_S3TC_DXT5_Format=33779;l.RGB_PVRTC_4BPPV1_Format=35840;l.RGB_PVRTC_2BPPV1_Format=35841;l.RGBA_PVRTC_4BPPV1_Format=35842;l.RGBA_PVRTC_2BPPV1_Format=35843;l.RGB_ETC1_Format=36196;l.RGBA_ASTC_4x4_Format=
37808;l.RGBA_ASTC_5x4_Format=37809;l.RGBA_ASTC_5x5_Format=37810;l.RGBA_ASTC_6x5_Format=37811;l.RGBA_ASTC_6x6_Format=37812;l.RGBA_ASTC_8x5_Format=37813;l.RGBA_ASTC_8x6_Format=37814;l.RGBA_ASTC_8x8_Format=37815;l.RGBA_ASTC_10x5_Format=37816;l.RGBA_ASTC_10x6_Format=37817;l.RGBA_ASTC_10x8_Format=37818;l.RGBA_ASTC_10x10_Format=37819;l.RGBA_ASTC_12x10_Format=37820;l.RGBA_ASTC_12x12_Format=37821;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=
2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=Jb;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
return new Wa(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};l.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Ob(a,b)};l.Particle=
function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Bc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Ob(a,b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.ParticleSystemMaterial=
function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new p(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new L(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
return new tc(a,b)};l.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new uc(a,b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new vc(a,b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new wc(a,b)};l.Uint16Attribute=
function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new lb(a,b)};l.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new xc(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new mb(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
return new D(a,b)};l.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new yc(a,b)};l.ClosedSplineCurve3=vf;l.SplineCurve3=wf;l.Spline=Ce;l.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new ld(a)};l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new Db(a,b)};l.EdgesHelper=
function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new V(new ac(a.geometry),new W({color:void 0!==b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new V(new Qb(a.geometry),new W({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Ia(a)};l.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
return new ge(a)};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
var e=new wd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new he;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};l.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};
l.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/LensFlare.js")};Object.defineProperty(l,"__esModule",{value:!0})});

define('three_main',['three_js'], function (three) {
    window.THREE = three;
});
(function (root, factory) {

    // 由於Panolens有內有使用其他 define 因此不能使用匿名module  必須使用明確定義 panolens_js 讓 panolens/main 引用
    // 相依性必須在此指定，不能使用require.shim 內的定義
    define('panolens_js', ['three_main'], factory);

}(typeof self !== 'undefined' ? self : this, function () {



    var PANOLENS = {
        REVISION: "10-dev"
    }
        , enableInlineVideo = function () {
            "use strict";
            function t(t, e, i, n) {
                function o(i) {
                    r = e(o, n),
                        t(i - (a || i)),
                        a = i
                }
                var r, a;
                return {
                    start: function () {
                        r || o(0)
                    },
                    stop: function () {
                        i(r),
                            r = null,
                            a = 0
                    }
                }
            }
            function e(e) {
                return t(e, requestAnimationFrame, cancelAnimationFrame)
            }
            function i(t, e, i) {
                function n(n) {
                    i && !i(t, e) || n.stopImmediatePropagation()
                }
                return t.addEventListener(e, n),
                    n
            }
            function n(t, e, i, n) {
                function o() {
                    return i[e]
                }
                function r(t) {
                    i[e] = t
                }
                n && r(t[e]),
                    Object.defineProperty(t, e, {
                        get: o,
                        set: r
                    })
            }
            function o(t, e, i) {
                i.addEventListener(e, function () {
                    return t.dispatchEvent(new Event(e))
                })
            }
            function r(t, e) {
                Promise.resolve().then(function () {
                    t.dispatchEvent(new Event(e))
                })
            }
            function a(t) {
                var e = new Audio;
                return o(t, "play", e),
                    o(t, "playing", e),
                    o(t, "pause", e),
                    e.crossOrigin = t.crossOrigin,
                    e.src = t.src || t.currentSrc || "data:",
                    e
            }
            function s(t, e, i) {
                (m || 0) + 200 < Date.now() && (t[y] = !0,
                    m = Date.now()),
                    i || (t.currentTime = e),
                    A[++L % 3] = 100 * e | 0
            }
            function h(t) {
                return t.driver.currentTime >= t.video.duration
            }
            function c(t) {
                var e = this;
                e.video.readyState >= e.video.HAVE_FUTURE_DATA ? (e.hasAudio || (e.driver.currentTime = e.video.currentTime + t * e.video.playbackRate / 1e3,
                    e.video.loop && h(e) && (e.driver.currentTime = 0)),
                    s(e.video, e.driver.currentTime)) : e.video.networkState === e.video.NETWORK_IDLE && 0 === e.video.buffered.length && e.video.load(),
                    e.video.ended && (delete e.video[y],
                        e.video.pause(!0))
            }
            function l() {
                var t = this
                    , e = t[g];
                if (t.webkitDisplayingFullscreen)
                    return void t[N]();
                "data:" !== e.driver.src && e.driver.src !== t.src && (s(t, 0, !0),
                    e.driver.src = t.src),
                    t.paused && (e.paused = !1,
                        0 === t.buffered.length && t.load(),
                        e.driver.play(),
                        e.updater.start(),
                        e.hasAudio || (r(t, "play"),
                            e.video.readyState >= e.video.HAVE_ENOUGH_DATA && r(t, "playing")))
            }
            function u(t) {
                var e = this
                    , i = e[g];
                i.driver.pause(),
                    i.updater.stop(),
                    e.webkitDisplayingFullscreen && e[w](),
                    i.paused && !t || (i.paused = !0,
                        i.hasAudio || r(e, "pause"),
                        e.ended && !e.webkitDisplayingFullscreen && (e[y] = !0,
                            r(e, "ended")))
            }
            function d(t, i) {
                var n = {};
                t[g] = n,
                    n.paused = !0,
                    n.hasAudio = i,
                    n.video = t,
                    n.updater = e(c.bind(n)),
                    i ? n.driver = a(t) : (t.addEventListener("canplay", function () {
                        t.paused || r(t, "playing")
                    }),
                        n.driver = {
                            src: t.src || t.currentSrc || "data:",
                            muted: !0,
                            paused: !0,
                            pause: function () {
                                n.driver.paused = !0
                            },
                            play: function () {
                                n.driver.paused = !1,
                                    h(n) && s(t, 0)
                            },
                            get ended() {
                                return h(n)
                            }
                        }),
                    t.addEventListener("emptied", function () {
                        var e = !n.driver.src || "data:" === n.driver.src;
                        n.driver.src && n.driver.src !== t.src && (s(t, 0, !0),
                            n.driver.src = t.src,
                            e || !i && t.autoplay ? n.driver.play() : n.updater.stop())
                    }, !1),
                    t.addEventListener("webkitbeginfullscreen", function () {
                        t.paused ? i && 0 === n.driver.buffered.length && n.driver.load() : (t.pause(),
                            t[N]())
                    }),
                    i && (t.addEventListener("webkitendfullscreen", function () {
                        n.driver.currentTime = t.currentTime
                    }),
                        t.addEventListener("seeking", function () {
                            A.indexOf(100 * t.currentTime | 0) < 0 && (n.driver.currentTime = t.currentTime)
                        }))
            }
            function p(t) {
                var e = t[y];
                return delete t[y],
                    !t.webkitDisplayingFullscreen && !e
            }
            function f(t) {
                var e = t[g];
                t[N] = t.play,
                    t[w] = t.pause,
                    t.play = l,
                    t.pause = u,
                    n(t, "paused", e.driver),
                    n(t, "muted", e.driver, !0),
                    n(t, "playbackRate", e.driver, !0),
                    n(t, "ended", e.driver),
                    n(t, "loop", e.driver, !0),
                    i(t, "seeking", function (t) {
                        return !t.webkitDisplayingFullscreen
                    }),
                    i(t, "seeked", function (t) {
                        return !t.webkitDisplayingFullscreen
                    }),
                    i(t, "timeupdate", p),
                    i(t, "ended", p)
            }
            function E(t, e) {
                if (void 0 === e && (e = {}),
                    !t[g]) {
                    if (!e.everywhere) {
                        if (!v)
                            return;
                        if (!(e.iPad || e.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent))
                            return
                    }
                    t.pause();
                    var i = t.autoplay;
                    t.autoplay = !1,
                        d(t, !t.muted),
                        f(t),
                        t.classList.add("IIV"),
                        t.muted && i && (t.play(),
                            t.addEventListener("playing", function e() {
                                t.autoplay = !0,
                                    t.removeEventListener("playing", e)
                            })),
                        /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments")
                }
            }
            var m, v = "object" == typeof document && "object-fit" in document.head.style && !matchMedia("(-webkit-video-playable-inline)").matches, g = "bfred-it:iphone-inline-video", y = "bfred-it:iphone-inline-video:event", N = "bfred-it:iphone-inline-video:nativeplay", w = "bfred-it:iphone-inline-video:nativepause", A = [], L = 0;
            return E
        }()
        , TWEEN = TWEEN || function () {
            var t = [];
            return {
                getAll: function () {
                    return t
                },
                removeAll: function () {
                    t = []
                },
                add: function (e) {
                    t.push(e)
                },
                remove: function (e) {
                    var i = t.indexOf(e);
                    -1 !== i && t.splice(i, 1)
                },
                update: function (e, i) {
                    if (0 === t.length)
                        return !1;
                    var n = 0;
                    for (e = void 0 !== e ? e : TWEEN.now(); n < t.length;)
                        t[n].update(e) || i ? n++ : t.splice(n, 1);
                    return !0
                }
            }
        }();
    "undefined" == typeof window && "undefined" != typeof process ? TWEEN.now = function () {
        var t = process.hrtime();
        return 1e3 * t[0] + t[1] / 1e6
    }
        : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? TWEEN.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? TWEEN.now = Date.now : TWEEN.now = function () {
            return (new Date).getTime()
        }
        ,
        TWEEN.Tween = function (t) {
            var e, i = t, n = {}, o = {}, r = {}, a = 1e3, s = 0, h = !1, c = !1, l = !1, u = 0, d = null, p = TWEEN.Easing.Linear.None, f = TWEEN.Interpolation.Linear, E = [], m = null, v = !1, g = null, y = null, N = null;
            this.to = function (t, e) {
                return o = t,
                    void 0 !== e && (a = e),
                    this
            }
                ,
                this.start = function (t) {
                    TWEEN.add(this),
                        c = !0,
                        v = !1,
                        d = void 0 !== t ? t : TWEEN.now(),
                        d += u;
                    for (var e in o) {
                        if (o[e] instanceof Array) {
                            if (0 === o[e].length)
                                continue;
                            o[e] = [i[e]].concat(o[e])
                        }
                        void 0 !== i[e] && (n[e] = i[e],
                            n[e] instanceof Array == !1 && (n[e] *= 1),
                            r[e] = n[e] || 0)
                    }
                    return this
                }
                ,
                this.stop = function () {
                    return c ? (TWEEN.remove(this),
                        c = !1,
                        null !== N && N.call(i, i),
                        this.stopChainedTweens(),
                        this) : this
                }
                ,
                this.end = function () {
                    return this.update(d + a),
                        this
                }
                ,
                this.stopChainedTweens = function () {
                    for (var t = 0, e = E.length; t < e; t++)
                        E[t].stop()
                }
                ,
                this.delay = function (t) {
                    return u = t,
                        this
                }
                ,
                this.repeat = function (t) {
                    return s = t,
                        this
                }
                ,
                this.repeatDelay = function (t) {
                    return e = t,
                        this
                }
                ,
                this.yoyo = function (t) {
                    return h = t,
                        this
                }
                ,
                this.easing = function (t) {
                    return p = t,
                        this
                }
                ,
                this.interpolation = function (t) {
                    return f = t,
                        this
                }
                ,
                this.chain = function () {
                    return E = arguments,
                        this
                }
                ,
                this.onStart = function (t) {
                    return m = t,
                        this
                }
                ,
                this.onUpdate = function (t) {
                    return g = t,
                        this
                }
                ,
                this.onComplete = function (t) {
                    return y = t,
                        this
                }
                ,
                this.onStop = function (t) {
                    return N = t,
                        this
                }
                ,
                this.update = function (t) {
                    var c, N, w;
                    if (t < d)
                        return !0;
                    !1 === v && (null !== m && m.call(i, i),
                        v = !0),
                        N = (t - d) / a,
                        N = N > 1 ? 1 : N,
                        w = p(N);
                    for (c in o)
                        if (void 0 !== n[c]) {
                            var A = n[c] || 0
                                , L = o[c];
                            L instanceof Array ? i[c] = f(L, w) : ("string" == typeof L && (L = "+" === L.charAt(0) || "-" === L.charAt(0) ? A + parseFloat(L) : parseFloat(L)),
                                "number" == typeof L && (i[c] = A + (L - A) * w))
                        }
                    if (null !== g && g.call(i, w),
                        1 === N) {
                        if (s > 0) {
                            isFinite(s) && s--;
                            for (c in r) {
                                if ("string" == typeof o[c] && (r[c] = r[c] + parseFloat(o[c])),
                                    h) {
                                    var P = r[c];
                                    r[c] = o[c],
                                        o[c] = P
                                }
                                n[c] = r[c]
                            }
                            return h && (l = !l),
                                d = void 0 !== e ? t + e : t + u,
                                !0
                        }
                        null !== y && y.call(i, i);
                        for (var b = 0, O = E.length; b < O; b++)
                            E[b].start(d + a);
                        return !1
                    }
                    return !0
                }
        }
        ,
        TWEEN.Easing = {
            Linear: {
                None: function (t) {
                    return t
                }
            },
            Quadratic: {
                In: function (t) {
                    return t * t
                },
                Out: function (t) {
                    return t * (2 - t)
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            },
            Cubic: {
                In: function (t) {
                    return t * t * t
                },
                Out: function (t) {
                    return --t * t * t + 1
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            },
            Quartic: {
                In: function (t) {
                    return t * t * t * t
                },
                Out: function (t) {
                    return 1 - --t * t * t * t
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            },
            Quintic: {
                In: function (t) {
                    return t * t * t * t * t
                },
                Out: function (t) {
                    return --t * t * t * t * t + 1
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            },
            Sinusoidal: {
                In: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Out: function (t) {
                    return Math.sin(t * Math.PI / 2)
                },
                InOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            },
            Exponential: {
                In: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                Out: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                InOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                }
            },
            Circular: {
                In: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Out: function (t) {
                    return Math.sqrt(1 - --t * t)
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            },
            Elastic: {
                In: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
                },
                Out: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
                },
                InOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2,
                        t < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1)
                }
            },
            Back: {
                In: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                Out: function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                InOut: function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            },
            Bounce: {
                In: function (t) {
                    return 1 - TWEEN.Easing.Bounce.Out(1 - t)
                },
                Out: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                InOut: function (t) {
                    return t < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * t) : .5 * TWEEN.Easing.Bounce.Out(2 * t - 1) + .5
                }
            }
        },
        TWEEN.Interpolation = {
            Linear: function (t, e) {
                var i = t.length - 1
                    , n = i * e
                    , o = Math.floor(n)
                    , r = TWEEN.Interpolation.Utils.Linear;
                return e < 0 ? r(t[0], t[1], n) : e > 1 ? r(t[i], t[i - 1], i - n) : r(t[o], t[o + 1 > i ? i : o + 1], n - o)
            },
            Bezier: function (t, e) {
                for (var i = 0, n = t.length - 1, o = Math.pow, r = TWEEN.Interpolation.Utils.Bernstein, a = 0; a <= n; a++)
                    i += o(1 - e, n - a) * o(e, a) * t[a] * r(n, a);
                return i
            },
            CatmullRom: function (t, e) {
                var i = t.length - 1
                    , n = i * e
                    , o = Math.floor(n)
                    , r = TWEEN.Interpolation.Utils.CatmullRom;
                return t[0] === t[i] ? (e < 0 && (o = Math.floor(n = i * (1 + e))),
                    r(t[(o - 1 + i) % i], t[o], t[(o + 1) % i], t[(o + 2) % i], n - o)) : e < 0 ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (r(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : r(t[o ? o - 1 : 0], t[o], t[i < o + 1 ? i : o + 1], t[i < o + 2 ? i : o + 2], n - o)
            },
            Utils: {
                Linear: function (t, e, i) {
                    return (e - t) * i + t
                },
                Bernstein: function (t, e) {
                    var i = TWEEN.Interpolation.Utils.Factorial;
                    return i(t) / i(e) / i(t - e)
                },
                Factorial: function () {
                    var t = [1];
                    return function (e) {
                        var i = 1;
                        if (t[e])
                            return t[e];
                        for (var n = e; n > 1; n--)
                            i *= n;
                        return t[e] = i,
                            i
                    }
                }(),
                CatmullRom: function (t, e, i, n, o) {
                    var r = .5 * (i - t)
                        , a = .5 * (n - e)
                        , s = o * o;
                    return (2 * e - 2 * i + r + a) * (o * s) + (-3 * e + 3 * i - 2 * r - a) * s + r * o + e
                }
            }
        },
        function (t) {
            "function" == typeof define && define.amd ? define('panolens_js',[], function () {
                return TWEEN
            }) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== t && (t.TWEEN = TWEEN)
        }(this),
        THREE.OrbitControls = function (t, e) {
            function i() {
                return 2 * Math.PI / 60 / 60 * N.autoRotateSpeed
            }
            function n() {
                return Math.pow(.95, N.zoomSpeed)
            }
            function o(t) {
                if (B = !1,
                    U = k = 0,
                    !1 !== N.enabled) {
                    if (t.preventDefault(),
                        t.button === N.mouseButtons.ORBIT) {
                        if (!0 === N.noRotate)
                            return;
                        F = j.ROTATE,
                            w.set(t.clientX, t.clientY)
                    } else if (t.button === N.mouseButtons.ZOOM) {
                        if (!0 === N.noZoom)
                            return;
                        F = j.DOLLY,
                            R.set(t.clientX, t.clientY)
                    } else if (t.button === N.mouseButtons.PAN) {
                        if (!0 === N.noPan)
                            return;
                        F = j.PAN,
                            P.set(t.clientX, t.clientY)
                    }
                    F !== j.NONE && (document.addEventListener("mousemove", r, !1),
                        document.addEventListener("mouseup", a, !1),
                        N.dispatchEvent(X)),
                        N.update()
                }
            }
            function r(t) {
                if (!1 !== N.enabled) {
                    t.preventDefault();
                    var e = N.domElement === document ? N.domElement.body : N.domElement;
                    if (F === j.ROTATE) {
                        if (!0 === N.noRotate)
                            return;
                        A.set(t.clientX, t.clientY),
                            L.subVectors(A, w),
                            N.rotateLeft(2 * Math.PI * L.x / e.clientWidth * N.rotateSpeed),
                            N.rotateUp(2 * Math.PI * L.y / e.clientHeight * N.rotateSpeed),
                            w.copy(A),
                            E && (U = t.clientX - E.clientX,
                                k = t.clientY - E.clientY),
                            E = t
                    } else if (F === j.DOLLY) {
                        if (!0 === N.noZoom)
                            return;
                        x.set(t.clientX, t.clientY),
                            M.subVectors(x, R),
                            M.y > 0 ? N.dollyIn() : M.y < 0 && N.dollyOut(),
                            R.copy(x)
                    } else if (F === j.PAN) {
                        if (!0 === N.noPan)
                            return;
                        b.set(t.clientX, t.clientY),
                            O.subVectors(b, P),
                            N.pan(O.x, O.y),
                            P.copy(b)
                    }
                    F !== j.NONE && N.update()
                }
            }
            function a() {
                B = !0,
                    E = void 0,
                    !1 !== N.enabled && (document.removeEventListener("mousemove", r, !1),
                        document.removeEventListener("mouseup", a, !1),
                        N.dispatchEvent(q),
                        F = j.NONE)
            }
            function s(t) {
                if (!1 !== N.enabled && !0 !== N.noZoom && F === j.NONE) {
                    t.preventDefault(),
                        t.stopPropagation();
                    var e = 0;
                    void 0 !== t.wheelDelta ? e = t.wheelDelta : void 0 !== t.detail && (e = -t.detail),
                        e > 0 ? (N.object.fov = N.object.fov < N.maxFov ? N.object.fov + 1 : N.maxFov,
                            N.object.updateProjectionMatrix()) : e < 0 && (N.object.fov = N.object.fov > N.minFov ? N.object.fov - 1 : N.minFov,
                                N.object.updateProjectionMatrix()),
                        N.update(),
                        N.dispatchEvent(Y),
                        N.dispatchEvent(X),
                        N.dispatchEvent(q)
                }
            }
            function h(t) {
                switch (t.keyCode) {
                    case N.keys.UP:
                        m = !1;
                        break;
                    case N.keys.BOTTOM:
                        v = !1;
                        break;
                    case N.keys.LEFT:
                        g = !1;
                        break;
                    case N.keys.RIGHT:
                        y = !1
                }
            }
            function c(t) {
                if (!1 !== N.enabled && !0 !== N.noKeys && !0 !== N.noRotate) {
                    switch (t.keyCode) {
                        case N.keys.UP:
                            m = !0;
                            break;
                        case N.keys.BOTTOM:
                            v = !0;
                            break;
                        case N.keys.LEFT:
                            g = !0;
                            break;
                        case N.keys.RIGHT:
                            y = !0
                    }
                    (m || v || g || y) && (B = !0,
                        m && (k = -N.rotateSpeed * N.momentumKeydownFactor),
                        v && (k = N.rotateSpeed * N.momentumKeydownFactor),
                        g && (U = -N.rotateSpeed * N.momentumKeydownFactor),
                        y && (U = N.rotateSpeed * N.momentumKeydownFactor))
                }
            }
            function l(t) {
                if (B = !1,
                    U = k = 0,
                    !1 !== N.enabled) {
                    switch (t.touches.length) {
                        case 1:
                            if (!0 === N.noRotate)
                                return;
                            F = j.TOUCH_ROTATE,
                                w.set(t.touches[0].pageX, t.touches[0].pageY);
                            break;
                        case 2:
                            if (!0 === N.noZoom)
                                return;
                            F = j.TOUCH_DOLLY;
                            var e = t.touches[0].pageX - t.touches[1].pageX
                                , i = t.touches[0].pageY - t.touches[1].pageY
                                , n = Math.sqrt(e * e + i * i);
                            R.set(0, n);
                            break;
                        case 3:
                            if (!0 === N.noPan)
                                return;
                            F = j.TOUCH_PAN,
                                P.set(t.touches[0].pageX, t.touches[0].pageY);
                            break;
                        default:
                            F = j.NONE
                    }
                    F !== j.NONE && N.dispatchEvent(X)
                }
            }
            function u(t) {
                if (!1 !== N.enabled) {
                    t.preventDefault(),
                        t.stopPropagation();
                    var e = N.domElement === document ? N.domElement.body : N.domElement;
                    switch (t.touches.length) {
                        case 1:
                            if (!0 === N.noRotate)
                                return;
                            if (F !== j.TOUCH_ROTATE)
                                return;
                            A.set(t.touches[0].pageX, t.touches[0].pageY),
                                L.subVectors(A, w),
                                N.rotateLeft(2 * Math.PI * L.x / e.clientWidth * N.rotateSpeed),
                                N.rotateUp(2 * Math.PI * L.y / e.clientHeight * N.rotateSpeed),
                                w.copy(A),
                                E && (U = t.touches[0].pageX - E.pageX,
                                    k = t.touches[0].pageY - E.pageY),
                                E = {
                                    pageX: t.touches[0].pageX,
                                    pageY: t.touches[0].pageY
                                },
                                N.update();
                            break;
                        case 2:
                            if (!0 === N.noZoom)
                                return;
                            if (F !== j.TOUCH_DOLLY)
                                return;
                            var i = t.touches[0].pageX - t.touches[1].pageX
                                , n = t.touches[0].pageY - t.touches[1].pageY
                                , o = Math.sqrt(i * i + n * n);
                            x.set(0, o),
                                M.subVectors(x, R),
                                M.y < 0 ? (N.object.fov = N.object.fov < N.maxFov ? N.object.fov + 1 : N.maxFov,
                                    N.object.updateProjectionMatrix()) : M.y > 0 && (N.object.fov = N.object.fov > N.minFov ? N.object.fov - 1 : N.minFov,
                                        N.object.updateProjectionMatrix()),
                                R.copy(x),
                                N.update(),
                                N.dispatchEvent(Y);
                            break;
                        case 3:
                            if (!0 === N.noPan)
                                return;
                            if (F !== j.TOUCH_PAN)
                                return;
                            b.set(t.touches[0].pageX, t.touches[0].pageY),
                                O.subVectors(b, P),
                                N.pan(O.x, O.y),
                                P.copy(b),
                                N.update();
                            break;
                        default:
                            F = j.NONE
                    }
                }
            }
            function d() {
                B = !0,
                    E = void 0,
                    !1 !== N.enabled && (N.dispatchEvent(q),
                        F = j.NONE)
            }
            this.object = t,
                this.domElement = void 0 !== e ? e : document,
                this.frameId,
                this.enabled = !0,
                this.target = new THREE.Vector3,
                this.center = this.target,
                this.noZoom = !1,
                this.zoomSpeed = 1,
                this.minDistance = 0,
                this.maxDistance = 1 / 0,
                this.minZoom = 0,
                this.maxZoom = 1 / 0,
                this.noRotate = !1,
                this.rotateSpeed = -.15,
                this.noPan = !0,
                this.keyPanSpeed = 7,
                this.autoRotate = !1,
                this.autoRotateSpeed = 2,
                this.minPolarAngle = 0,
                this.maxPolarAngle = Math.PI,
                this.momentumDampingFactor = .9,
                this.momentumScalingFactor = -.005,
                this.momentumKeydownFactor = 20,
                this.minFov = 30,
                this.maxFov = 120,
                this.minAzimuthAngle = -1 / 0,
                this.maxAzimuthAngle = 1 / 0,
                this.noKeys = !1,
                this.keys = {
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    BOTTOM: 40
                },
                this.mouseButtons = {
                    ORBIT: THREE.MOUSE.LEFT,
                    ZOOM: THREE.MOUSE.MIDDLE,
                    PAN: THREE.MOUSE.RIGHT
                };
            var p, f, E, m, v, g, y, N = this, w = new THREE.Vector2, A = new THREE.Vector2, L = new THREE.Vector2, P = new THREE.Vector2, b = new THREE.Vector2, O = new THREE.Vector2, S = new THREE.Vector3, T = new THREE.Vector3, R = new THREE.Vector2, x = new THREE.Vector2, M = new THREE.Vector2, I = 0, C = 0, H = 1, D = new THREE.Vector3, V = new THREE.Vector3, _ = new THREE.Quaternion, U = 0, k = 0, B = !1, j = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_DOLLY: 4,
                TOUCH_PAN: 5
            }, F = j.NONE;
            this.target0 = this.target.clone(),
                this.position0 = this.object.position.clone(),
                this.zoom0 = this.object.zoom;
            var W = (new THREE.Quaternion).setFromUnitVectors(t.up, new THREE.Vector3(0, 1, 0))
                , z = W.clone().inverse()
                , Y = {
                    type: "change"
                }
                , X = {
                    type: "start"
                }
                , q = {
                    type: "end"
                };
            this.setLastQuaternion = function (t) {
                _.copy(t),
                    N.object.quaternion.copy(t)
            }
                ,
                this.getLastPosition = function () {
                    return V
                }
                ,
                this.rotateLeft = function (t) {
                    void 0 === t && (t = i()),
                        C -= t
                }
                ,
                this.rotateUp = function (t) {
                    void 0 === t && (t = i()),
                        I -= t
                }
                ,
                this.panLeft = function (t) {
                    var e = this.object.matrix.elements;
                    S.set(e[0], e[1], e[2]),
                        S.multiplyScalar(-t),
                        D.add(S)
                }
                ,
                this.panUp = function (t) {
                    var e = this.object.matrix.elements;
                    S.set(e[4], e[5], e[6]),
                        S.multiplyScalar(t),
                        D.add(S)
                }
                ,
                this.pan = function (t, e) {
                    var i = N.domElement === document ? N.domElement.body : N.domElement;
                    if (N.object instanceof THREE.PerspectiveCamera) {
                        var n = N.object.position
                            , o = n.clone().sub(N.target)
                            , r = o.length();
                        r *= Math.tan(N.object.fov / 2 * Math.PI / 180),
                            N.panLeft(2 * t * r / i.clientHeight),
                            N.panUp(2 * e * r / i.clientHeight)
                    } else
                        N.object instanceof THREE.OrthographicCamera ? (N.panLeft(t * (N.object.right - N.object.left) / i.clientWidth),
                            N.panUp(e * (N.object.top - N.object.bottom) / i.clientHeight)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
                }
                ,
                this.momentum = function () {
                    if (B) {
                        if (Math.abs(U) < 1e-4 && Math.abs(k) < 1e-4)
                            return void (B = !1);
                        k *= this.momentumDampingFactor,
                            U *= this.momentumDampingFactor,
                            C -= this.momentumScalingFactor * U,
                            I -= this.momentumScalingFactor * k
                    }
                }
                ,
                this.dollyIn = function (t) {
                    void 0 === t && (t = n()),
                        N.object instanceof THREE.PerspectiveCamera ? H /= t : N.object instanceof THREE.OrthographicCamera ? (N.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)),
                            N.object.updateProjectionMatrix(),
                            N.dispatchEvent(Y)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
                }
                ,
                this.dollyOut = function (t) {
                    void 0 === t && (t = n()),
                        N.object instanceof THREE.PerspectiveCamera ? H *= t : N.object instanceof THREE.OrthographicCamera ? (N.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)),
                            N.object.updateProjectionMatrix(),
                            N.dispatchEvent(Y)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
                }
                ,
                this.update = function (t) {
                    var e = this.object.position;
                    T.copy(e).sub(this.target),
                        T.applyQuaternion(W),
                        p = Math.atan2(T.x, T.z),
                        f = Math.atan2(Math.sqrt(T.x * T.x + T.z * T.z), T.y),
                        this.autoRotate && F === j.NONE && this.rotateLeft(i()),
                        this.momentum(),
                        p += C,
                        f += I,
                        p = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, p)),
                        f = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, f)),
                        f = Math.max(1e-7, Math.min(Math.PI - 1e-7, f));
                    var n = T.length() * H;
                    n = Math.max(this.minDistance, Math.min(this.maxDistance, n)),
                        this.target.add(D),
                        T.x = n * Math.sin(f) * Math.sin(p),
                        T.y = n * Math.cos(f),
                        T.z = n * Math.sin(f) * Math.cos(p),
                        T.applyQuaternion(z),
                        e.copy(this.target).add(T),
                        this.object.lookAt(this.target),
                        C = 0,
                        I = 0,
                        H = 1,
                        D.set(0, 0, 0),
                        (V.distanceToSquared(this.object.position) > 1e-7 || 8 * (1 - _.dot(this.object.quaternion)) > 1e-7) && (!0 !== t && this.dispatchEvent(Y),
                            V.copy(this.object.position),
                            _.copy(this.object.quaternion))
                }
                ,
                this.reset = function () {
                    F = j.NONE,
                        this.target.copy(this.target0),
                        this.object.position.copy(this.position0),
                        this.object.zoom = this.zoom0,
                        this.object.updateProjectionMatrix(),
                        this.dispatchEvent(Y),
                        this.update()
                }
                ,
                this.getPolarAngle = function () {
                    return f
                }
                ,
                this.getAzimuthalAngle = function () {
                    return p
                }
                ,
                this.domElement.addEventListener("mousedown", o, !1),
                this.domElement.addEventListener("mousewheel", s, !1),
                this.domElement.addEventListener("DOMMouseScroll", s, !1),
                this.domElement.addEventListener("touchstart", l, !1),
                this.domElement.addEventListener("touchend", d, !1),
                this.domElement.addEventListener("touchmove", u, !1),
                window.addEventListener("keyup", h, !1),
                window.addEventListener("keydown", c, !1),
                this.update()
        }
        ,
        THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype),
        THREE.OrbitControls.prototype.constructor = THREE.OrbitControls,
        THREE.DeviceOrientationControls = function (t, e) {
            var i = this
                , n = {
                    type: "change"
                }
                , o = 0
                , r = 0
                , a = 0
                , s = 0;
            this.camera = t,
                this.camera.rotation.reorder("YXZ"),
                this.domElement = void 0 !== e ? e : document,
                this.enabled = !0,
                this.deviceOrientation = {},
                this.screenOrientation = 0,
                this.alpha = 0,
                this.alphaOffsetAngle = 0;
            var h = function (t) {
                i.deviceOrientation = t
            }
                , c = function () {
                    i.screenOrientation = window.orientation || 0
                }
                , l = function (t) {
                    t.preventDefault(),
                        t.stopPropagation(),
                        a = t.touches[0].pageX,
                        s = t.touches[0].pageY
                }
                , u = function (t) {
                    t.preventDefault(),
                        t.stopPropagation(),
                        o += THREE.Math.degToRad((t.touches[0].pageX - a) / 4),
                        r += THREE.Math.degToRad((s - t.touches[0].pageY) / 4),
                        i.updateAlphaOffsetAngle(o),
                        a = t.touches[0].pageX,
                        s = t.touches[0].pageY
                }
                , d = function (t, e, n, o, a) {
                    var s, h = new THREE.Vector3(0, 0, 1), c = new THREE.Euler, l = new THREE.Quaternion, u = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), d = new THREE.Quaternion, p = new THREE.Quaternion;
                    0 == i.screenOrientation ? (s = new THREE.Vector3(1, 0, 0),
                        d.setFromAxisAngle(s, -r)) : 180 == i.screenOrientation ? (s = new THREE.Vector3(1, 0, 0),
                            d.setFromAxisAngle(s, r)) : 90 == i.screenOrientation ? (s = new THREE.Vector3(0, 1, 0),
                                d.setFromAxisAngle(s, r)) : -90 == i.screenOrientation && (s = new THREE.Vector3(0, 1, 0),
                                    d.setFromAxisAngle(s, -r)),
                        u.multiply(d),
                        u.multiply(p),
                        c.set(n, e, -o, "YXZ"),
                        t.setFromEuler(c),
                        t.multiply(u),
                        t.multiply(l.setFromAxisAngle(h, -a))
                };
            this.connect = function () {
                c(),
                    window.addEventListener("orientationchange", c, !1),
                    window.addEventListener("deviceorientation", h, !1),
                    window.addEventListener("deviceorientation", this.update.bind(this), !1),
                    i.domElement.addEventListener("touchstart", l, !1),
                    i.domElement.addEventListener("touchmove", u, !1),
                    i.enabled = !0
            }
                ,
                this.disconnect = function () {
                    window.removeEventListener("orientationchange", c, !1),
                        window.removeEventListener("deviceorientation", h, !1),
                        window.removeEventListener("deviceorientation", this.update.bind(this), !1),
                        i.domElement.removeEventListener("touchstart", l, !1),
                        i.domElement.removeEventListener("touchmove", u, !1),
                        i.enabled = !1
                }
                ,
                this.update = function (t) {
                    if (!1 !== i.enabled) {
                        var e = i.deviceOrientation.alpha ? THREE.Math.degToRad(i.deviceOrientation.alpha) + this.alphaOffsetAngle : 0
                            , o = i.deviceOrientation.beta ? THREE.Math.degToRad(i.deviceOrientation.beta) : 0
                            , r = i.deviceOrientation.gamma ? THREE.Math.degToRad(i.deviceOrientation.gamma) : 0
                            , a = i.screenOrientation ? THREE.Math.degToRad(i.screenOrientation) : 0;
                        d(i.camera.quaternion, e, o, r, a),
                            this.alpha = e,
                            !0 !== t && this.dispatchEvent(n)
                    }
                }
                ,
                this.updateAlphaOffsetAngle = function (t) {
                    this.alphaOffsetAngle = t,
                        this.update()
                }
                ,
                this.dispose = function () {
                    this.disconnect()
                }
                ,
                this.connect()
        }
        ,
        THREE.DeviceOrientationControls.prototype = Object.create(THREE.EventDispatcher.prototype),
        THREE.DeviceOrientationControls.prototype.constructor = THREE.DeviceOrientationControls,
        THREE.BendModifier = function () { }
        ,
        THREE.BendModifier.prototype = {
            constructor: THREE.BendModifier,
            set: function (t, e, i) {
                return this.direction = new THREE.Vector3,
                    this.direction.copy(t),
                    this.axis = new THREE.Vector3,
                    this.axis.copy(e),
                    this.angle = i,
                    this
            },
            _sign: function (t) {
                return 0 > t ? -1 : 0 < t ? 1 : 0
            },
            _cosh: function (t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            },
            _sinhInverse: function (t) {
                return Math.log(Math.abs(t) + Math.sqrt(t * t + 1))
            },
            modify: function (t) {
                var e = new THREE.Vector3;
                e.crossVectors(this.direction, this.axis);
                var i = new THREE.Matrix4;
                i.set(e.x, e.y, e.z, 0, this.direction.x, this.direction.y, this.direction.z, 0, this.axis.x, this.axis.y, this.axis.z, 0, 0, 0, 0, 1).transpose();
                for (var n = (new THREE.Matrix4).getInverse(i), o = [], r = [], a = [], s = 0, h = 0, c = 0, l = 0, u = 0; u < t.vertices.length; u++)
                    o[u] = new THREE.Vector3,
                        o[u].copy(t.vertices[u]).applyMatrix4(n),
                        o[u].x > s && (s = o[u].x),
                        o[u].x < h && (h = o[u].x),
                        o[u].y > c && (c = o[u].y),
                        o[u].y < l && (l = o[u].y);
                for (var d = s - h, p = c - l, f = 2 * this._sinhInverse(Math.tan(this.angle)) / d, E = (s + h) / 2, m = (c + l) / 2, u = 0; u < t.vertices.length; u++)
                    r[u] = new THREE.Vector3,
                        r[u].copy(o[u]),
                        o[u].x = 1 * this._sign(o[u].x - E) / f * this._sinhInverse((o[u].x - E) * f);
                var v = 2 / f * this._sinhInverse(d / 2 * f)
                    , g = 2 * this._sinhInverse(Math.tan(this.angle)) / v
                    , y = new THREE.Vector3(v / 2, -p / 2, 0);
                y.y = 1 / g * this._cosh(g * y.x) - 1 / g - p / 2;
                for (var N = new THREE.Vector3(0, y.y + y.x / Math.tan(this.angle), 0), u = 0; u < t.vertices.length; u++) {
                    var w = 1 * this._sign(r[u].x - E) / f * this._sinhInverse((r[u].x - E) * f)
                        , A = 1 / g * this._cosh(g * w) - 1 / g
                        , L = new THREE.Vector3(N.x - w, N.y - (A - p / 2), N.z).normalize()
                        , P = new THREE.Vector3;
                    P.addVectors(new THREE.Vector3(w, A - p / 2, r[u].z), L.multiplyScalar(r[u].y + p / 2)),
                        o[u].x = P.x,
                        o[u].y = P.y
                }
                for (var b = E * v / d, u = 0; u < t.vertices.length; u++) {
                    var O = new THREE.Vector3(E, m, r[u].z);
                    (new THREE.Vector3).subVectors(r[u], O);
                    (new THREE.Vector3).subVectors(o[u], O),
                        a[u] = Math.acos(1 / this._cosh(f * o[u].x)) * this._sign(o[u].x),
                        o[u].x = o[u].x + b,
                        t.vertices[u].copy(o[u].applyMatrix4(i))
                }
                t.computeFaceNormals(),
                    t.verticesNeedUpdate = !0,
                    t.normalsNeedUpdate = !0;
                for (var S = ["a", "b", "c", "d"], T = 0, R = t.faces.length; T < R; T++) {
                    var x = t.faces[T];
                    if (void 0 !== x.vertexNormals)
                        for (var M = 0, I = x.vertexNormals.length; M < I; M++) {
                            var C = a[x[S[M]]]
                                , H = this.axis.x
                                , D = this.axis.y
                                , V = this.axis.z
                                , _ = new THREE.Matrix3;
                            _.set(Math.cos(C) + (1 - Math.cos(C)) * H * H, (1 - Math.cos(C)) * H * D - Math.sin(C) * V, (1 - Math.cos(C)) * H * V + Math.sin(C) * D, (1 - Math.cos(C)) * D * H + Math.sin(C) * V, Math.cos(C) + (1 - Math.cos(C)) * D * D, (1 - Math.cos(C)) * D * V - Math.sin(C) * H, (1 - Math.cos(C)) * V * H - Math.sin(C) * D, (1 - Math.cos(C)) * V * D + Math.sin(C) * H, Math.cos(C) + (1 - Math.cos(C)) * V * V),
                                x.vertexNormals[M].applyMatrix3(_)
                        }
                }
                return this
            }
        },
        THREE.CardboardEffect = function (t) {
            var e = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
                , i = new THREE.Scene
                , n = new THREE.StereoCamera;
            n.aspect = .5;
            var o = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.NearestFilter,
                format: THREE.RGBAFormat
            }
                , r = new THREE.WebGLRenderTarget(512, 512, o);
            r.scissorTest = !0,
                r.texture.generateMipmaps = !1;
            var a = new THREE.Vector2(.441, .156)
                , s = new THREE.PlaneBufferGeometry(1, 1, 10, 20).removeAttribute("normal").toNonIndexed()
                , h = s.attributes.position.array
                , c = s.attributes.uv.array;
            s.attributes.position.count *= 2,
                s.attributes.uv.count *= 2;
            var l = new Float32Array(2 * h.length);
            l.set(h),
                l.set(h, h.length);
            var u = new Float32Array(2 * c.length);
            u.set(c),
                u.set(c, c.length);
            for (var d = new THREE.Vector2, p = h.length / 3, f = 0, E = l.length / 3; f < E; f++) {
                d.x = l[3 * f + 0],
                    d.y = l[3 * f + 1];
                var m = d.dot(d)
                    , v = 1.5 + (a.x + a.y * m) * m
                    , g = f < p ? 0 : 1;
                l[3 * f + 0] = d.x / v * 1.5 - .5 + g,
                    l[3 * f + 1] = d.y / v * 3,
                    u[2 * f] = .5 * (u[2 * f] + g)
            }
            s.attributes.position.array = l,
                s.attributes.uv.array = u;
            var y = new THREE.MeshBasicMaterial({
                map: r.texture
            })
                , N = new THREE.Mesh(s, y);
            i.add(N),
                this.setSize = function (e, i) {
                    t.setSize(e, i);
                    var n = t.getPixelRatio();
                    r.setSize(e * n, i * n)
                }
                ,
                this.render = function (o, a) {
                    o.updateMatrixWorld(),
                        null === a.parent && a.updateMatrixWorld(),
                        n.update(a);
                    var s = r.width / 2
                        , h = r.height;
                    r.scissor.set(0, 0, s, h),
                        r.viewport.set(0, 0, s, h),
                        t.render(o, n.cameraL, r),
                        r.scissor.set(s, 0, s, h),
                        r.viewport.set(s, 0, s, h),
                        t.render(o, n.cameraR, r),
                        t.render(i, e)
                }
        }
        ,
        THREE.StereoEffect = function (t) {
            var e = new THREE.StereoCamera;
            e.aspect = .5,
                this.setEyeSeparation = function (t) {
                    e.eyeSep = t
                }
                ,
                this.setSize = function (e, i) {
                    t.setSize(e, i)
                }
                ,
                this.render = function (i, n) {
                    i.updateMatrixWorld(),
                        null === n.parent && n.updateMatrixWorld(),
                        e.update(n);
                    var o = t.getSize();
                    t.autoClear && t.clear(),
                        t.setScissorTest(!0),
                        t.setScissor(0, 0, o.width / 2, o.height),
                        t.setViewport(0, 0, o.width / 2, o.height),
                        t.render(i, e.cameraL),
                        t.setScissor(o.width / 2, 0, o.width / 2, o.height),
                        t.setViewport(o.width / 2, 0, o.width / 2, o.height),
                        t.render(i, e.cameraR),
                        t.setScissorTest(!1)
                }
        }
        ;
    var GSVPANO = GSVPANO || {};
    GSVPANO.PanoLoader = function (t) {
        "use strict";
        var e, i, n = t || {}, o = new google.maps.StreetViewService, r = 0, a = 0, s = [], h = [], c = 0, l = 0, u = "", d = [1, 2, 4, 7, 13, 26], p = [1, 1, 2, 4, 7, 13], f = [416, 832, 1664, 3328, 6656, 13312], E = [416, 416, 832, 1664, 3328, 6656], m = null;
        try {
            var v = document.createElement("canvas");
            m = v.getContext("experimental-webgl"),
                null == m && (m = v.getContext("webgl"))
        } catch (t) { }
        var g = 1024
            , y = 1024;
        if (m) {
            var N = Math.max(m.getParameter(m.MAX_TEXTURE_SIZE), 6656);
            g = y = N
        }
        this.setProgress = function (t, e) {
            this.onProgress && this.onProgress({
                loaded: t,
                total: e
            })
        }
            ,
            this.throwError = function (t) {
                this.onError ? this.onError(t) : console.error(t)
            }
            ,
            this.adaptTextureToZoom = function () {
                var t = 416 * d[e]
                    , i = 416 * p[e];
                t = f[e],
                    i = E[e],
                    c = Math.ceil(t / g),
                    l = Math.ceil(i / y),
                    s = [],
                    h = [];
                for (var n = 0, o = 0; o < l; o++)
                    for (var r = 0; r < c; r++) {
                        var a = document.createElement("canvas");
                        a.width = r < c - 1 ? g : t - g * r,
                            a.height = o < l - 1 ? y : i - y * o,
                            s.push(a),
                            h.push(a.getContext("2d")),
                            n++
                    }
            }
            ,
            this.composeFromTile = function (t, e, i) {
                t *= 512,
                    e *= 512;
                var n = Math.floor(t / g)
                    , o = Math.floor(e / y);
                t -= n * g,
                    e -= o * y,
                    h[o * c + n].drawImage(i, 0, 0, i.width, i.height, t, e, 512, 512),
                    this.progress()
            }
            ,
            this.progress = function () {
                r++;
                Math.round(100 * r / a);
                this.setProgress(r, a),
                    r === a && (this.canvas = s,
                        this.panoId = i,
                        this.zoom = e,
                        this.onPanoramaLoad && this.onPanoramaLoad(s[0]))
            }
            ,
            this.loadFromId = function (t) {
                i = t,
                    this.composePanorama()
            }
            ,
            this.composePanorama = function () {
                this.setProgress(0, 1);
                var t, o, s, h = d[e], c = p[e], l = this;
                r = 0,
                    a = h * c;
                for (var u = new THREE.TextureLoader, l = this, s = 0; s < c; s++)
                    for (var o = 0; o < h; o++) {
                        var t = "https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&output=tile&zoom=" + e + "&x=" + o + "&y=" + s + "&panoid=" + i + "&nbt&fover=2";
                        !function (e, i) {
                            if (n.useWebGL)
                                var o = u.load(t, null, function () {
                                    l.composeFromTile(e, i, o)
                                });
                            else {
                                var r = new Image;
                                r.addEventListener("load", function () {
                                    l.composeFromTile(e, i, this)
                                }),
                                    r.crossOrigin = "",
                                    r.src = t
                            }
                        }(o, s)
                    }
            }
            ,
            this.load = function (t) {
                this.loadPano(t)
            }
            ,
            this.loadPano = function (t) {
                var e = this;
                o.getPanoramaById(t, function (t, n) {
                    n === google.maps.StreetViewStatus.OK ? (e.result = t,
                        e.onPanoramaData && e.onPanoramaData(t),
                        u = t.copyright,
                        e.copyright = t.copyright,
                        i = t.location.pano,
                        e.location = location,
                        e.composePanorama()) : (e.onNoPanoramaData && e.onNoPanoramaData(n),
                            e.throwError("Could not retrieve panorama for the following reason: " + n))
                })
            }
            ,
            this.setZoom = function (t) {
                e = t,
                    this.adaptTextureToZoom()
            }
            ,
            this.setZoom(n.zoom || 1)
    }
        ,
        function () {
            "use strict";
            PANOLENS.DataImageSource = "https://pchen66.github.io/Panolens/asset/icon/",
                PANOLENS.DataImage = {
                    Info: PANOLENS.DataImageSource + "information.png",
                    Arrow: PANOLENS.DataImageSource + "arrow-up.png",
                    FullscreenEnter: PANOLENS.DataImageSource + "fullscreen.png",
                    FullscreenLeave: PANOLENS.DataImageSource + "fullscreen-exit.png",
                    VideoPlay: PANOLENS.DataImageSource + "video-play.png",
                    VideoPause: PANOLENS.DataImageSource + "pause.png",
                    WhiteTile: PANOLENS.DataImageSource + "tiles.png",
                    ReticleIdle: PANOLENS.DataImageSource + "reticle-idle.png",
                    Setting: PANOLENS.DataImageSource + "setting.png",
                    ChevronRight: PANOLENS.DataImageSource + "chevron-right.png",
                    Check: PANOLENS.DataImageSource + "check.png",
                    ViewIndicator: PANOLENS.DataImageSource + "view-indicator.svg",
                    ReticleDwell: PANOLENS.DataImageSource + "reticle-animation.png"
                }
        }(),
        function () {
            "use strict";
            PANOLENS.Controls = {
                ORBIT: 0,
                DEVICEORIENTATION: 1
            },
                PANOLENS.Modes = {
                    UNKNOWN: 0,
                    NORMAL: 1,
                    CARDBOARD: 2,
                    STEREO: 3
                }
        }(),
        function () {
            "use strict";
            PANOLENS.Utils = {},
                PANOLENS.Utils.checkTouchSupported = function () {
                    return !!window && ("ontouchstart" in window || window.navigator.msMaxTouchPoints)
                }
                ,
                PANOLENS.Utils.isIOS = !!window && /iPhone|iPad|iPod/i.test(window.navigator.userAgent),
                PANOLENS.Utils.isAndroid = !!window && /Android/i.test(window.navigator.userAgent),
                PANOLENS.Utils.isMobile = !!window && (PANOLENS.Utils.isIOS || PANOLENS.Utils.isAndroid || /BlackBerry|Opera Mini|IEMobile/i.test(window.navigator.userAgent))
        }(),
        function () {
            "use strict";
            PANOLENS.Utils.ImageLoader = {},
                PANOLENS.Utils.ImageLoader.load = function (t, e, i, n) {
                    function o() {
                        c.revokeObjectURL(l.src),
                            e && e(l)
                    }
                    var r, a, s, h, c, l, u;
                    for (var d in PANOLENS.DataImage)
                        PANOLENS.DataImage.hasOwnProperty(d) && t === PANOLENS.DataImage[d] && (u = d);
                    return void 0 !== (r = THREE.Cache.get(u || t)) ? (e && setTimeout(function () {
                        i && i({
                            loaded: 1,
                            total: 1
                        }),
                            e(r)
                    }, 0),
                        r) : (c = window.URL || window.webkitURL,
                            l = document.createElementNS("http://www.w3.org/1999/xhtml", "img"),
                            THREE.Cache.add(u || t, l),
                            0 === t.indexOf("data:") ? (l.addEventListener("load", o, !1),
                                l.src = t,
                                l) : (l.crossOrigin = void 0 !== this.crossOrigin ? this.crossOrigin : "",
                                    a = new XMLHttpRequest,
                                    a.open("GET", t, !0),
                                    a.responseType = "arraybuffer",
                                    a.onprogress = function (t) {
                                        t.lengthComputable && i && i({
                                            loaded: t.loaded,
                                            total: t.total
                                        })
                                    }
                                    ,
                                    a.onloadend = function (t) {
                                        s = new Uint8Array(this.response),
                                            h = new Blob([s]),
                                            l.addEventListener("load", o, !1),
                                            l.src = c.createObjectURL(h)
                                    }
                                    ,
                                    void a.send(null)))
                }
                ,
                THREE.Cache.enabled = !0
        }(),
        function () {
            "use strict";
            PANOLENS.Utils.TextureLoader = {},
                PANOLENS.Utils.TextureLoader.load = function (t, e, i, n) {
                    var o = new THREE.Texture;
                    return PANOLENS.Utils.ImageLoader.load(t, function (i) {
                        o.image = i;
                        var n = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                        o.format = n ? THREE.RGBFormat : THREE.RGBAFormat,
                            o.needsUpdate = !0,
                            e && e(o)
                    }, i, n),
                        o
                }
        }(),
        function () {
            "use strict";
            PANOLENS.Utils.CubeTextureLoader = {},
                PANOLENS.Utils.CubeTextureLoader.load = function (t, e, i, n) {
                    var o, r, a, s, h;
                    return o = new THREE.CubeTexture([]),
                        r = 0,
                        a = {},
                        s = {},
                        t.map(function (t, c) {
                            PANOLENS.Utils.ImageLoader.load(t, function (t) {
                                o.images[c] = t,
                                    6 === ++r && (o.needsUpdate = !0,
                                        e && e(o))
                            }, function (t) {
                                a[c] = {
                                    loaded: t.loaded,
                                    total: t.total
                                },
                                    s.loaded = 0,
                                    s.total = 0,
                                    h = 0;
                                for (var e in a)
                                    h++ ,
                                        s.loaded += a[e].loaded,
                                        s.total += a[e].total;
                                h < 6 && (s.total = s.total / h * 6),
                                    i && i(s)
                            }, n)
                        }),
                        o
                }
        }(),
        PANOLENS.StereographicShader = {
            uniforms: {
                tDiffuse: {
                    value: new THREE.Texture
                },
                resolution: {
                    value: 1
                },
                transform: {
                    value: new THREE.Matrix4
                },
                zoom: {
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float resolution;", "uniform mat4 transform;", "uniform float zoom;", "varying vec2 vUv;", "const float PI = 3.141592653589793;", "void main(){", "vec2 position = -1.0 +  2.0 * vUv;", "position *= vec2( zoom * resolution, zoom * 0.5 );", "float x2y2 = position.x * position.x + position.y * position.y;", "vec3 sphere_pnt = vec3( 2. * position, x2y2 - 1. ) / ( x2y2 + 1. );", "sphere_pnt = vec3( transform * vec4( sphere_pnt, 1.0 ) );", "vec2 sampleUV = vec2(", "(atan(sphere_pnt.y, sphere_pnt.x) / PI + 1.0) * 0.5,", "(asin(sphere_pnt.z) / PI + 0.5)", ");", "gl_FragColor = texture2D( tDiffuse, sampleUV );", "}"].join("\n")
        },
        function () {
            "use strict";
            PANOLENS.Panorama = function (t, e) {
                THREE.Mesh.call(this),
                    this.type = "panorama",
                    this.ImageQualityLow = 1,
                    this.ImageQualityFair = 2,
                    this.ImageQualityMedium = 3,
                    this.ImageQualityHigh = 4,
                    this.ImageQualitySuperHigh = 5,
                    this.animationDuration = 1e3,
                    this.defaultInfospotSize = 350,
                    this.container = void 0,
                    this.loaded = !1,
                    this.linkedSpots = [],
                    this.isInfospotVisible = !1,
                    this.linkingImageURL = void 0,
                    this.linkingImageScale = void 0,
                    this.geometry = t,
                    this.material = e,
                    this.material.side = THREE.BackSide,
                    this.material.visible = !1,
                    this.scale.x *= -1,
                    this.infospotAnimation = new TWEEN.Tween(this).to({}, this.animationDuration / 2),
                    this.addEventListener("load", this.fadeIn.bind(this)),
                    this.addEventListener("panolens-container", this.setContainer.bind(this)),
                    this.addEventListener("click", this.onClick.bind(this)),
                    this.setupTransitions()
            }
                ,
                PANOLENS.Panorama.prototype = Object.create(THREE.Mesh.prototype),
                PANOLENS.Panorama.prototype.constructor = PANOLENS.Panorama,
                PANOLENS.Panorama.prototype.add = function (t) {
                    var e, i;
                    if (e = this,
                        arguments.length > 1) {
                        for (var n = 0; n < arguments.length; n++)
                            this.add(arguments[n]);
                        return this
                    }
                    t instanceof PANOLENS.Infospot ? (i = t,
                        t.dispatchEvent && (this.container && t.dispatchEvent({
                            type: "panolens-container",
                            container: this.container
                        }),
                            t.dispatchEvent({
                                type: "panolens-infospot-focus",
                                method: function (t, i, n) {
                                    e.dispatchEvent({
                                        type: "panolens-viewer-handler",
                                        method: "tweenControlCenter",
                                        data: [t, i, n]
                                    })
                                }
                            }))) : (i = new THREE.Object3D,
                                i.scale.x = -1,
                                i.scalePlaceHolder = !0,
                                i.add(t)),
                        THREE.Object3D.prototype.add.call(this, i)
                }
                ,
                PANOLENS.Panorama.prototype.load = function () {
                    this.onLoad()
                }
                ,
                PANOLENS.Panorama.prototype.onClick = function (t) {
                    t.intersects && 0 === t.intersects.length && this.traverse(function (t) {
                        t.dispatchEvent({
                            type: "dismiss"
                        })
                    })
                }
                ,
                PANOLENS.Panorama.prototype.setContainer = function (t) {
                    var e;
                    t instanceof HTMLElement ? e = t : t && t.container && (e = t.container),
                        e && (this.children.forEach(function (t) {
                            t instanceof PANOLENS.Infospot && t.dispatchEvent && t.dispatchEvent({
                                type: "panolens-container",
                                container: e
                            })
                        }),
                            this.container = e)
                }
                ,
                PANOLENS.Panorama.prototype.onLoad = function () {
                    this.loaded = !0,
                        this.dispatchEvent({
                            type: "load"
                        })
                }
                ,
                PANOLENS.Panorama.prototype.onProgress = function (t) {
                    this.dispatchEvent({
                        type: "progress",
                        progress: t
                    })
                }
                ,
                PANOLENS.Panorama.prototype.onError = function () {
                    this.dispatchEvent({
                        type: "error"
                    })
                }
                ,
                PANOLENS.Panorama.prototype.getZoomLevel = function () {
                    return window.innerWidth <= 800 ? this.ImageQualityFair : window.innerWidth > 800 && window.innerWidth <= 1280 ? this.ImageQualityMedium : window.innerWidth > 1280 && window.innerWidth <= 1920 ? this.ImageQualityHigh : window.innerWidth > 1920 ? this.ImageQualitySuperHigh : this.ImageQualityLow
                }
                ,
                PANOLENS.Panorama.prototype.updateTexture = function (t) {
                    this.material.map = t,
                        this.material.needsUpdate = !0
                }
                ,
                PANOLENS.Panorama.prototype.toggleInfospotVisibility = function (t, e) {
                    e = void 0 !== e ? e : 0;
                    var i, n;
                    i = this,
                        n = void 0 !== t ? t : !this.isInfospotVisible,
                        this.traverse(function (t) {
                            t instanceof PANOLENS.Infospot && (n ? t.show(e) : t.hide(e))
                        }),
                        this.isInfospotVisible = n,
                        this.infospotAnimation.onComplete(function () {
                            i.dispatchEvent({
                                type: "infospot-animation-complete",
                                visible: n
                            })
                        }).delay(e).start()
                }
                ,
                PANOLENS.Panorama.prototype.setLinkingImage = function (t, e) {
                    this.linkingImageURL = t,
                        this.linkingImageScale = e
                }
                ,
                PANOLENS.Panorama.prototype.link = function (t, e, i, n) {
                    var o, r, a, s = this;
                    if (this.visible = !0,
                        !e)
                        return void console.warn("Please specify infospot position for linking");
                    r = void 0 !== i ? i : void 0 !== t.linkingImageScale ? t.linkingImageScale : 300,
                        a = n || (t.linkingImageURL ? t.linkingImageURL : PANOLENS.DataImage.Arrow),
                        o = new PANOLENS.Infospot(r, a),
                        o.position.copy(e),
                        o.toPanorama = t,
                        o.addEventListener("click", function () {
                            s.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "setPanorama",
                                data: t
                            })
                        }),
                        this.linkedSpots.push(o),
                        this.add(o),
                        this.visible = !1
                }
                ,
                PANOLENS.Panorama.prototype.reset = function () {
                    this.children.length = 0
                }
                ,
                PANOLENS.Panorama.prototype.setupTransitions = function () {
                    this.fadeInAnimation = new TWEEN.Tween(this.material).easing(TWEEN.Easing.Quartic.Out).onStart(function () {
                        this.visible = !0,
                            this.material.visible = !0,
                            this.dispatchEvent({
                                type: "enter-fade-start"
                            })
                    }
                        .bind(this)),
                        this.fadeOutAnimation = new TWEEN.Tween(this.material).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                            this.visible = !1,
                                this.material.visible = !0,
                                this.dispatchEvent({
                                    type: "leave-complete"
                                })
                        }
                            .bind(this)),
                        this.enterTransition = new TWEEN.Tween(this).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                            this.dispatchEvent({
                                type: "enter-animation-complete"
                            })
                        }
                            .bind(this)).start(),
                        this.leaveTransition = new TWEEN.Tween(this).easing(TWEEN.Easing.Quartic.Out)
                }
                ,
                PANOLENS.Panorama.prototype.fadeIn = function (t) {
                    t = t >= 0 ? t : this.animationDuration,
                        this.fadeOutAnimation.stop(),
                        this.fadeInAnimation.to({
                            opacity: 1
                        }, t).onComplete(function () {
                            this.toggleInfospotVisibility(!0, t / 2),
                                this.dispatchEvent({
                                    type: "enter-fade-complete"
                                })
                        }
                            .bind(this)).start()
                }
                ,
                PANOLENS.Panorama.prototype.fadeOut = function (t) {
                    t = t >= 0 ? t : this.animationDuration,
                        this.fadeInAnimation.stop(),
                        this.fadeOutAnimation.to({
                            opacity: 0
                        }, t).start()
                }
                ,
                PANOLENS.Panorama.prototype.onEnter = function () {
                    var t = this.animationDuration;
                    this.leaveTransition.stop(),
                        this.enterTransition.to({}, t).onStart(function () {
                            this.dispatchEvent({
                                type: "enter-animation-start"
                            }),
                                this.loaded ? this.fadeIn(t) : this.load()
                        }
                            .bind(this)).start(),
                        this.dispatchEvent({
                            type: "enter"
                        })
                }
                ,
                PANOLENS.Panorama.prototype.onLeave = function () {
                    var t = this.animationDuration;
                    this.enterTransition.stop(),
                        this.leaveTransition.to({}, t).onStart(function () {
                            this.dispatchEvent({
                                type: "leave-animation-start"
                            }),
                                this.fadeOut(t),
                                this.toggleInfospotVisibility(!1)
                        }
                            .bind(this)).start(),
                        this.dispatchEvent({
                            type: "leave"
                        })
                }
                ,
                PANOLENS.Panorama.prototype.dispose = function () {
                    function t(e) {
                        for (var i = e.children.length - 1; i >= 0; i--)
                            t(e.children[i]),
                                e.remove(e.children[i]);
                        e instanceof PANOLENS.Infospot && e.dispose(),
                            e.geometry && e.geometry.dispose(),
                            e.material && e.material.dispose()
                    }
                    this.dispatchEvent({
                        type: "panolens-viewer-handler",
                        method: "onPanoramaDispose",
                        data: this
                    }),
                        t(this),
                        this.parent && this.parent.remove(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.ImagePanorama = function (t, e) {
                e = e || 5e3;
                var i = new THREE.SphereBufferGeometry(e, 60, 40)
                    , n = new THREE.MeshBasicMaterial({
                        opacity: 0,
                        transparent: !0
                    });
                PANOLENS.Panorama.call(this, i, n),
                    this.src = t
            }
                ,
                PANOLENS.ImagePanorama.prototype = Object.create(PANOLENS.Panorama.prototype),
                PANOLENS.ImagePanorama.prototype.constructor = PANOLENS.ImagePanorama,
                PANOLENS.ImagePanorama.prototype.load = function (t) {
                    if (!(t = t || this.src))
                        return void console.warn("Image source undefined");
                    "string" == typeof t ? PANOLENS.Utils.TextureLoader.load(t, this.onLoad.bind(this), this.onProgress.bind(this), this.onError.bind(this)) : t instanceof HTMLImageElement && this.onLoad(new THREE.Texture(t))
                }
                ,
                PANOLENS.ImagePanorama.prototype.onLoad = function (t) {
                    t.minFilter = t.magFilter = THREE.LinearFilter,
                        t.needsUpdate = !0,
                        this.updateTexture(t),
                        window.requestAnimationFrame(function () {
                            window.requestAnimationFrame(function () {
                                PANOLENS.Panorama.prototype.onLoad.call(this)
                            }
                                .bind(this))
                        }
                            .bind(this))
                }
                ,
                PANOLENS.ImagePanorama.prototype.reset = function () {
                    PANOLENS.Panorama.prototype.reset.call(this)
                }
                ,
                PANOLENS.ImagePanorama.prototype.dispose = function () {
                    THREE.Cache.remove(this.src),
                        this.material.map && this.material.map.dispose(),
                        PANOLENS.Panorama.prototype.dispose.call(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.GoogleStreetviewPanorama = function (t, e) {
                PANOLENS.ImagePanorama.call(this, void 0, e),
                    this.panoId = t,
                    this.gsvLoader = void 0,
                    this.loadRequested = !1,
                    this.setupGoogleMapAPI()
            }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype = Object.create(PANOLENS.ImagePanorama.prototype),
                PANOLENS.GoogleStreetviewPanorama.constructor = PANOLENS.GoogleStreetviewPanorama,
                PANOLENS.GoogleStreetviewPanorama.prototype.load = function (t) {
                    this.loadRequested = !0,
                        t = t || this.panoId || {},
                        t && this.gsvLoader ? this.loadGSVLoader(t) : this.gsvLoader = {}
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.setupGoogleMapAPI = function () {
                    var t = document.createElement("script");
                    t.src = "https://maps.googleapis.com/maps/api/js",
                        t.onreadystatechange = this.setGSVLoader.bind(this),
                        t.onload = this.setGSVLoader.bind(this),
                        document.getElementsByTagName("head")[0].appendChild(t)
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.setGSVLoader = function () {
                    this.gsvLoader = new GSVPANO.PanoLoader,
                        (this.gsvLoader === {} || this.loadRequested) && this.load()
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.getGSVLoader = function () {
                    return this.gsvLoader
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.loadGSVLoader = function (t) {
                    this.loadRequested = !1,
                        this.gsvLoader.onProgress = this.onProgress.bind(this),
                        this.gsvLoader.onPanoramaLoad = this.onLoad.bind(this),
                        this.gsvLoader.setZoom(this.getZoomLevel()),
                        this.gsvLoader.load(t),
                        this.gsvLoader.loaded = !0
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.onLoad = function (t) {
                    this.gsvLoader && PANOLENS.ImagePanorama.prototype.onLoad.call(this, new THREE.Texture(t))
                }
                ,
                PANOLENS.GoogleStreetviewPanorama.prototype.reset = function () {
                    this.gsvLoader = void 0,
                        PANOLENS.ImagePanorama.prototype.reset.call(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.CubePanorama = function (t, e) {
                var i, n, o;
                this.images = t || [],
                    e = e || 1e4,
                    i = JSON.parse(JSON.stringify(THREE.ShaderLib.cube)),
                    n = new THREE.BoxBufferGeometry(e, e, e),
                    o = new THREE.ShaderMaterial({
                        fragmentShader: i.fragmentShader,
                        vertexShader: i.vertexShader,
                        uniforms: i.uniforms,
                        side: THREE.BackSide
                    }),
                    PANOLENS.Panorama.call(this, n, o)
            }
                ,
                PANOLENS.CubePanorama.prototype = Object.create(PANOLENS.Panorama.prototype),
                PANOLENS.CubePanorama.prototype.constructor = PANOLENS.CubePanorama,
                PANOLENS.CubePanorama.prototype.load = function () {
                    PANOLENS.Utils.CubeTextureLoader.load(this.images, this.onLoad.bind(this), this.onProgress.bind(this), this.onError.bind(this))
                }
                ,
                PANOLENS.CubePanorama.prototype.onLoad = function (t) {
                    this.material.uniforms.tCube.value = t,
                        PANOLENS.Panorama.prototype.onLoad.call(this)
                }
                ,
                PANOLENS.CubePanorama.prototype.dispose = function () {
                    this.images.forEach(function (t) {
                        THREE.Cache.remove(t)
                    }),
                        this.material.uniforms.tCube && this.material.uniforms.tCube.value.dispose(),
                        PANOLENS.Panorama.prototype.dispose.call(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.BasicPanorama = function (t) {
                var e = PANOLENS.DataImage.WhiteTile;
                PANOLENS.CubePanorama.call(this, [e, e, e, e, e, e], t)
            }
                ,
                PANOLENS.BasicPanorama.prototype = Object.create(PANOLENS.CubePanorama.prototype),
                PANOLENS.BasicPanorama.prototype.constructor = PANOLENS.BasicPanorama
        }(),
        function () {
            "use strict";
            PANOLENS.VideoPanorama = function (t, e, i) {
                i = i || 5e3;
                var n = new THREE.SphereBufferGeometry(i, 60, 40)
                    , o = new THREE.MeshBasicMaterial({
                        opacity: 0,
                        transparent: !0
                    });
                PANOLENS.Panorama.call(this, n, o),
                    this.src = t,
                    this.options = e || {},
                    this.options.playsinline = !1 !== this.options.playsinline,
                    this.videoElement = void 0,
                    this.videoProgress = 0,
                    this.isIOS = PANOLENS.Utils.isIOS,
                    this.isMobile = PANOLENS.Utils.isMobile,
                    this.addEventListener("leave", this.pauseVideo.bind(this)),
                    this.addEventListener("enter-fade-start", this.resumeVideoProgress.bind(this)),
                    this.addEventListener("video-toggle", this.toggleVideo.bind(this)),
                    this.addEventListener("video-time", this.setVideoCurrentTime.bind(this))
            }
                ,
                PANOLENS.VideoPanorama.prototype = Object.create(PANOLENS.Panorama.prototype),
                PANOLENS.VideoPanorama.constructor = PANOLENS.VideoPanorama,
                PANOLENS.VideoPanorama.prototype.load = function (t, e) {
                    var i = this;
                    t = t || this.src || "",
                        e = e || this.options || {},
                        this.videoElement = e.videoElement || document.createElement("video"),
                        this.videoElement.muted = e.muted || !1,
                        this.videoElement.loop = void 0 === e.loop || e.loop,
                        this.videoElement.autoplay = void 0 !== e.autoplay && e.autoplay,
                        this.videoElement.crossOrigin = void 0 !== e.crossOrigin ? e.crossOrigin : "anonymous",
                        e.playsinline && (this.videoElement.setAttribute("playsinline", ""),
                            this.videoElement.setAttribute("webkit-playsinline", ""));
                    var n = function () {
                        i.setVideoTexture(i.videoElement),
                            i.videoElement.autoplay && i.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "updateVideoPlayButton",
                                data: !1
                            }),
                            i.isMobile && (i.videoElement.pause(),
                                i.videoElement.autoplay && i.videoElement.muted ? i.dispatchEvent({
                                    type: "panolens-viewer-handler",
                                    method: "updateVideoPlayButton",
                                    data: !1
                                }) : i.dispatchEvent({
                                    type: "panolens-viewer-handler",
                                    method: "updateVideoPlayButton",
                                    data: !0
                                })),
                            setTimeout(function () {
                                i.material.map.needsUpdate = !0,
                                    i.onProgress({
                                        loaded: 1,
                                        total: 1
                                    }),
                                    i.onLoad()
                            }, 0)
                    };
                    this.videoElement.readyState > 2 ? n() : (this.videoElement.querySelectorAll("source").length && this.videoElement.src || (this.videoElement.src = t),
                        this.videoElement.load()),
                        this.videoElement.onloadeddata = n,
                        this.videoElement.ontimeupdate = function (t) {
                            i.videoProgress = this.duration >= 0 ? this.currentTime / this.duration : 0,
                                i.dispatchEvent({
                                    type: "panolens-viewer-handler",
                                    method: "onVideoUpdate",
                                    data: i.videoProgress
                                })
                        }
                        ,
                        this.videoElement.addEventListener("ended", function () {
                            i.options.loop || (i.resetVideo(),
                                i.dispatchEvent({
                                    type: "panolens-viewer-handler",
                                    method: "updateVideoPlayButton",
                                    data: !0
                                }))
                        }, !1)
                }
                ,
                PANOLENS.VideoPanorama.prototype.setVideoTexture = function (t) {
                    var e;
                    t && (e = new THREE.VideoTexture(t),
                        e.minFilter = THREE.LinearFilter,
                        e.magFilter = THREE.LinearFilter,
                        e.format = THREE.RGBFormat,
                        this.isIOS && enableInlineVideo(t),
                        this.updateTexture(e))
                }
                ,
                PANOLENS.VideoPanorama.prototype.reset = function () {
                    this.videoElement = void 0,
                        PANOLENS.Panorama.prototype.reset.call(this)
                }
                ,
                PANOLENS.VideoPanorama.prototype.isVideoPaused = function () {
                    return this.videoElement.paused
                }
                ,
                PANOLENS.VideoPanorama.prototype.toggleVideo = function () {
                    this.videoElement && (this.isVideoPaused() ? this.videoElement.play() : this.videoElement.pause())
                }
                ,
                PANOLENS.VideoPanorama.prototype.setVideoCurrentTime = function (t) {
                    this.videoElement && !Number.isNaN(t.percentage) && 1 !== t.percentage && (this.videoElement.currentTime = this.videoElement.duration * t.percentage,
                        this.dispatchEvent({
                            type: "panolens-viewer-handler",
                            method: "onVideoUpdate",
                            data: t.percentage
                        }))
                }
                ,
                PANOLENS.VideoPanorama.prototype.playVideo = function () {
                    this.videoElement && this.isVideoPaused() && this.videoElement.play(),
                        this.dispatchEvent({
                            type: "play"
                        })
                }
                ,
                PANOLENS.VideoPanorama.prototype.pauseVideo = function () {
                    this.videoElement && !this.isVideoPaused() && this.videoElement.pause(),
                        this.dispatchEvent({
                            type: "pause"
                        })
                }
                ,
                PANOLENS.VideoPanorama.prototype.resumeVideoProgress = function () {
                    this.videoElement.autoplay && !this.isMobile ? (this.playVideo(),
                        this.dispatchEvent({
                            type: "panolens-viewer-handler",
                            method: "updateVideoPlayButton",
                            data: !1
                        })) : (this.pauseVideo(),
                            this.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "updateVideoPlayButton",
                                data: !0
                            })),
                        this.setVideoCurrentTime({
                            percentage: this.videoProgress
                        })
                }
                ,
                PANOLENS.VideoPanorama.prototype.resetVideo = function () {
                    this.videoElement && this.setVideoCurrentTime({
                        percentage: 0
                    })
                }
                ,
                PANOLENS.VideoPanorama.prototype.isVideoMuted = function () {
                    return this.videoElement.muted
                }
                ,
                PANOLENS.VideoPanorama.prototype.muteVideo = function () {
                    this.videoElement && !this.isVideoMuted() && (this.videoElement.muted = !0),
                        this.dispatchEvent({
                            type: "volumechange"
                        })
                }
                ,
                PANOLENS.VideoPanorama.prototype.unmuteVideo = function () {
                    this.videoElement && this.isVideoMuted() && (this.videoElement.muted = !1),
                        this.dispatchEvent({
                            type: "volumechange"
                        })
                }
                ,
                PANOLENS.VideoPanorama.prototype.getVideoElement = function () {
                    return this.videoElement
                }
                ,
                PANOLENS.VideoPanorama.prototype.dispose = function () {
                    this.resetVideo(),
                        this.pauseVideo(),
                        this.removeEventListener("leave", this.pauseVideo.bind(this)),
                        this.removeEventListener("enter-fade-start", this.resumeVideoProgress.bind(this)),
                        this.removeEventListener("video-toggle", this.toggleVideo.bind(this)),
                        this.removeEventListener("video-time", this.setVideoCurrentTime.bind(this)),
                        this.material.map && this.material.map.dispose(),
                        PANOLENS.Panorama.prototype.dispose.call(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.EmptyPanorama = function (t) {
                t = t || 5e3;
                var e = new THREE.BufferGeometry
                    , i = new THREE.MeshBasicMaterial({
                        color: 0,
                        opacity: 1,
                        transparent: !0
                    });
                PANOLENS.Panorama.call(this, e, i)
            }
                ,
                PANOLENS.EmptyPanorama.prototype = Object.create(PANOLENS.Panorama.prototype),
                PANOLENS.EmptyPanorama.prototype.constructor = PANOLENS.EmptyPanorama
        }(),
        function () {
            PANOLENS.LittlePlanet = function (t, e, i, n) {
                t = t || "image",
                    "image" === t && PANOLENS.ImagePanorama.call(this, e, i),
                    this.size = i || 1e4,
                    this.ratio = n || .5,
                    this.EPS = 1e-6,
                    this.frameId,
                    this.geometry = this.createGeometry(),
                    this.material = this.createMaterial(this.size),
                    this.dragging = !1,
                    this.userMouse = new THREE.Vector2,
                    this.quatA = new THREE.Quaternion,
                    this.quatB = new THREE.Quaternion,
                    this.quatCur = new THREE.Quaternion,
                    this.quatSlerp = new THREE.Quaternion,
                    this.vectorX = new THREE.Vector3(1, 0, 0),
                    this.vectorY = new THREE.Vector3(0, 1, 0),
                    this.addEventListener("window-resize", this.onWindowResize)
            }
                ,
                PANOLENS.LittlePlanet.prototype = Object.create(PANOLENS.ImagePanorama.prototype),
                PANOLENS.LittlePlanet.prototype.constructor = PANOLENS.LittlePlanet,
                PANOLENS.LittlePlanet.prototype.createGeometry = function () {
                    return new THREE.PlaneBufferGeometry(this.size, this.size * this.ratio)
                }
                ,
                PANOLENS.LittlePlanet.prototype.createMaterial = function (t) {
                    var e = PANOLENS.StereographicShader
                        , i = e.uniforms;
                    return i.zoom.value = t,
                        new THREE.ShaderMaterial({
                            uniforms: i,
                            vertexShader: e.vertexShader,
                            fragmentShader: e.fragmentShader,
                            side: THREE.BackSide
                        })
                }
                ,
                PANOLENS.LittlePlanet.prototype.registerMouseEvents = function () {
                    this.container.addEventListener("mousedown", this.onMouseDown.bind(this), !1),
                        this.container.addEventListener("mousemove", this.onMouseMove.bind(this), !1),
                        this.container.addEventListener("mouseup", this.onMouseUp.bind(this), !1),
                        this.container.addEventListener("touchstart", this.onMouseDown.bind(this), !1),
                        this.container.addEventListener("touchmove", this.onMouseMove.bind(this), !1),
                        this.container.addEventListener("touchend", this.onMouseUp.bind(this), !1),
                        this.container.addEventListener("mousewheel", this.onMouseWheel.bind(this), !1),
                        this.container.addEventListener("DOMMouseScroll", this.onMouseWheel.bind(this), !1),
                        this.container.addEventListener("contextmenu", this.onContextMenu.bind(this), !1)
                }
                ,
                PANOLENS.LittlePlanet.prototype.unregisterMouseEvents = function () {
                    this.container.removeEventListener("mousedown", this.onMouseDown.bind(this), !1),
                        this.container.removeEventListener("mousemove", this.onMouseMove.bind(this), !1),
                        this.container.removeEventListener("mouseup", this.onMouseUp.bind(this), !1),
                        this.container.removeEventListener("touchstart", this.onMouseDown.bind(this), !1),
                        this.container.removeEventListener("touchmove", this.onMouseMove.bind(this), !1),
                        this.container.removeEventListener("touchend", this.onMouseUp.bind(this), !1),
                        this.container.removeEventListener("mousewheel", this.onMouseWheel.bind(this), !1),
                        this.container.removeEventListener("DOMMouseScroll", this.onMouseWheel.bind(this), !1),
                        this.container.removeEventListener("contextmenu", this.onContextMenu.bind(this), !1)
                }
                ,
                PANOLENS.LittlePlanet.prototype.onMouseDown = function (t) {
                    var e = t.clientX >= 0 ? t.clientX : t.touches[0].clientX
                        , i = t.clientY >= 0 ? t.clientY : t.touches[0].clientY;
                    switch (t.touches && t.touches.length || 1) {
                        case 1:
                            this.dragging = !0,
                                this.userMouse.set(e, i);
                            break;
                        case 2:
                            var n = t.touches[0].pageX - t.touches[1].pageX
                                , o = t.touches[0].pageY - t.touches[1].pageY
                                , r = Math.sqrt(n * n + o * o);
                            this.userMouse.pinchDistance = r
                    }
                    this.onUpdateCallback()
                }
                ,
                PANOLENS.LittlePlanet.prototype.onMouseMove = function (t) {
                    var e = t.clientX >= 0 ? t.clientX : t.touches[0].clientX
                        , i = t.clientY >= 0 ? t.clientY : t.touches[0].clientY;
                    switch (t.touches && t.touches.length || 1) {
                        case 1:
                            var n = .4 * THREE.Math.degToRad(e - this.userMouse.x)
                                , o = .4 * THREE.Math.degToRad(i - this.userMouse.y);
                            this.dragging && (this.quatA.setFromAxisAngle(this.vectorY, n),
                                this.quatB.setFromAxisAngle(this.vectorX, o),
                                this.quatCur.multiply(this.quatA).multiply(this.quatB),
                                this.userMouse.set(e, i));
                            break;
                        case 2:
                            var r = t.touches[0].pageX - t.touches[1].pageX
                                , a = t.touches[0].pageY - t.touches[1].pageY
                                , s = Math.sqrt(r * r + a * a);
                            this.addZoomDelta(this.userMouse.pinchDistance - s)
                    }
                }
                ,
                PANOLENS.LittlePlanet.prototype.onMouseUp = function (t) {
                    this.dragging = !1
                }
                ,
                PANOLENS.LittlePlanet.prototype.onMouseWheel = function (t) {
                    t.preventDefault(),
                        t.stopPropagation();
                    var e = 0;
                    void 0 !== t.wheelDelta ? e = t.wheelDelta : void 0 !== t.detail && (e = -t.detail),
                        this.addZoomDelta(e),
                        this.onUpdateCallback()
                }
                ,
                PANOLENS.LittlePlanet.prototype.addZoomDelta = function (t) {
                    var e = this.material.uniforms
                        , i = .1 * this.size
                        , n = 10 * this.size;
                    e.zoom.value += t,
                        e.zoom.value <= i ? e.zoom.value = i : e.zoom.value >= n && (e.zoom.value = n)
                }
                ,
                PANOLENS.LittlePlanet.prototype.onUpdateCallback = function () {
                    this.frameId = window.requestAnimationFrame(this.onUpdateCallback.bind(this)),
                        this.quatSlerp.slerp(this.quatCur, .1),
                        this.material.uniforms.transform.value.makeRotationFromQuaternion(this.quatSlerp),
                        !this.dragging && 1 - this.quatSlerp.clone().dot(this.quatCur) < this.EPS && window.cancelAnimationFrame(this.frameId)
                }
                ,
                PANOLENS.LittlePlanet.prototype.reset = function () {
                    this.quatCur.set(0, 0, 0, 1),
                        this.quatSlerp.set(0, 0, 0, 1),
                        this.onUpdateCallback()
                }
                ,
                PANOLENS.LittlePlanet.prototype.onLoad = function () {
                    this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight,
                        this.registerMouseEvents(),
                        this.onUpdateCallback(),
                        this.dispatchEvent({
                            type: "panolens-viewer-handler",
                            method: "disableControl"
                        })
                }
                ,
                PANOLENS.LittlePlanet.prototype.onLeave = function () {
                    this.unregisterMouseEvents(),
                        this.dispatchEvent({
                            type: "panolens-viewer-handler",
                            method: "enableControl",
                            data: PANOLENS.Controls.ORBIT
                        }),
                        window.cancelAnimationFrame(this.frameId),
                        PANOLENS.Panorama.prototype.onLeave.call(this)
                }
                ,
                PANOLENS.LittlePlanet.prototype.onWindowResize = function () {
                    this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight
                }
                ,
                PANOLENS.LittlePlanet.prototype.onContextMenu = function () {
                    this.dragging = !1
                }
                ,
                PANOLENS.LittlePlanet.prototype.dispose = function () {
                    PANOLENS.ImagePanorama.prototype.dispose.call(this)
                }
        }(),
        function () {
            PANOLENS.ImageLittlePlanet = function (t, e, i) {
                PANOLENS.LittlePlanet.call(this, "image", t, e, i)
            }
                ,
                PANOLENS.ImageLittlePlanet.prototype = Object.create(PANOLENS.LittlePlanet.prototype),
                PANOLENS.ImageLittlePlanet.prototype.constructor = PANOLENS.ImageLittlePlanet,
                PANOLENS.ImageLittlePlanet.prototype.onLoad = function (t) {
                    this.updateTexture(t),
                        PANOLENS.ImagePanorama.prototype.onLoad.call(this, t),
                        PANOLENS.LittlePlanet.prototype.onLoad.call(this)
                }
                ,
                PANOLENS.ImageLittlePlanet.prototype.updateTexture = function (t) {
                    t.minFilter = t.magFilter = THREE.LinearFilter,
                        this.material.uniforms.tDiffuse.value = t
                }
                ,
                PANOLENS.ImageLittlePlanet.prototype.dispose = function () {
                    this.material.uniforms.tDiffuse && this.material.uniforms.tDiffuse.value.dispose(),
                        PANOLENS.LittlePlanet.prototype.dispose.call(this)
                }
        }(),
        function () {
            PANOLENS.Reticle = function (t, e, i, n, o, r) {
                t = t || 16777215,
                    this.autoSelect = void 0 == e || e,
                    this.dwellTime = o || 1500,
                    this.dwellSpriteAmount = r || 45,
                    this.dwellInterval = this.dwellTime / this.dwellSpriteAmount,
                    this.IDLE = 0,
                    this.DWELLING = 1,
                    this.status,
                    this.scaleIdle = new THREE.Vector3(.2, .2, 1),
                    this.scaleDwell = new THREE.Vector3(1, .8, 1),
                    this.textureLoaded = !1,
                    this.idleImageUrl = i || PANOLENS.DataImage.ReticleIdle,
                    this.dwellImageUrl = n || PANOLENS.DataImage.ReticleDwell,
                    this.idleTexture = new THREE.Texture,
                    this.dwellTexture = new THREE.Texture,
                    THREE.Sprite.call(this, new THREE.SpriteMaterial({
                        color: t,
                        depthTest: !1
                    })),
                    this.currentTile = 0,
                    this.startTime = 0,
                    this.visible = !1,
                    this.renderOrder = 10,
                    this.timerId,
                    this.updateStatus(this.IDLE)
            }
                ,
                PANOLENS.Reticle.prototype = Object.create(THREE.Sprite.prototype),
                PANOLENS.Reticle.prototype.constructor = PANOLENS.Reticle,
                PANOLENS.Reticle.prototype.show = function () {
                    this.visible = !0
                }
                ,
                PANOLENS.Reticle.prototype.hide = function () {
                    this.visible = !1
                }
                ,
                PANOLENS.Reticle.prototype.loadTextures = function () {
                    this.idleTexture = PANOLENS.Utils.TextureLoader.load(this.idleImageUrl),
                        this.dwellTexture = PANOLENS.Utils.TextureLoader.load(this.dwellImageUrl),
                        this.material.map = this.idleTexture,
                        this.setupDwellSprite(this.dwellTexture),
                        this.textureLoaded = !0
                }
                ,
                PANOLENS.Reticle.prototype.select = function (t) {
                    performance.now() - this.startTime >= this.dwellTime ? (this.completeDwelling(),
                        t()) : this.autoSelect && (this.updateDwelling(performance.now()),
                            this.timerId = window.requestAnimationFrame(this.select.bind(this, t)))
                }
                ,
                PANOLENS.Reticle.prototype.clearTimer = function () {
                    window.cancelAnimationFrame(this.timerId),
                        this.timerId = null
                }
                ,
                PANOLENS.Reticle.prototype.setupDwellSprite = function (t) {
                    t.wrapS = THREE.RepeatWrapping,
                        t.repeat.set(1 / this.dwellSpriteAmount, 1)
                }
                ,
                PANOLENS.Reticle.prototype.updateStatus = function (t) {
                    this.status = t,
                        t === this.IDLE ? (this.scale.copy(this.scaleIdle),
                            this.material.map = this.idleTexture) : t === this.DWELLING && (this.scale.copy(this.scaleDwell),
                                this.material.map = this.dwellTexture),
                        this.currentTile = 0,
                        this.material.map.offset.x = 0
                }
                ,
                PANOLENS.Reticle.prototype.startDwelling = function (t) {
                    this.autoSelect && (this.startTime = performance.now(),
                        this.updateStatus(this.DWELLING),
                        this.select(t))
                }
                ,
                PANOLENS.Reticle.prototype.updateDwelling = function (t) {
                    var e = t - this.startTime;
                    this.currentTile <= this.dwellSpriteAmount ? (this.currentTile = Math.floor(e / this.dwellTime * this.dwellSpriteAmount),
                        this.material.map.offset.x = this.currentTile / this.dwellSpriteAmount) : this.updateStatus(this.IDLE)
                }
                ,
                PANOLENS.Reticle.prototype.cancelDwelling = function () {
                    this.clearTimer(),
                        this.updateStatus(this.IDLE)
                }
                ,
                PANOLENS.Reticle.prototype.completeDwelling = function () {
                    this.clearTimer(),
                        this.updateStatus(this.IDLE)
                }
        }(),
        function () {
            PANOLENS.Tile = function (t, e, i, n, o, r, a) {
                this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: i,
                    heightSegments: n,
                    forceDirection: o,
                    forceAxis: r,
                    forceAngle: a
                },
                    t = t || 10,
                    e = e || 5,
                    i = i || 1,
                    n = n || 1,
                    o = o || new THREE.Vector3(0, 0, 1),
                    r = r || new THREE.Vector3(0, 1, 0),
                    a = void 0 !== a ? a : 0,
                    THREE.Mesh.call(this, new THREE.PlaneGeometry(t, e, i, n), new THREE.MeshBasicMaterial({
                        color: 16777215,
                        transparent: !0
                    })),
                    this.bendModifier = new THREE.BendModifier,
                    this.entity = void 0,
                    this.animationDuration = 500,
                    this.animationFadeOut = void 0,
                    this.animationFadeIn = void 0,
                    this.animationTranslation = void 0,
                    this.tweens = {},
                    0 !== a && this.bend(o, r, a),
                    this.originalGeometry = this.geometry.clone()
            }
                ,
                PANOLENS.Tile.prototype = Object.create(THREE.Mesh.prototype),
                PANOLENS.Tile.prototype.constructor = PANOLENS.Tile,
                PANOLENS.Tile.prototype.clone = function () {
                    var t, e = this.parameters;
                    return t = new PANOLENS.Tile(e.width, e.height, e.widthSegments, e.heightSegments, e.forceDirection, e.forceAxis, e.forceAngle),
                        t.setEntity(this.entity),
                        t.material = this.material.clone(),
                        t
                }
                ,
                PANOLENS.Tile.prototype.bend = function (t, e, i) {
                    this.bendModifier.set(t, e, i).modify(this.geometry)
                }
                ,
                PANOLENS.Tile.prototype.unbend = function () {
                    var t = this.geometry;
                    this.geometry = this.originalGeometry,
                        this.originalGeometry = this.geometry.clone(),
                        t.dispose(),
                        t = null
                }
                ,
                PANOLENS.Tile.prototype.tween = function (t, e, i, n, o, r, a, s, h) {
                    return e = e || this,
                        i = i || {},
                        n = n || this.animationDuration,
                        o = o || TWEEN.Easing.Exponential.Out,
                        r = void 0 !== r ? r : 0,
                        a = a || null,
                        s = s || null,
                        h = h || null,
                        this.tweens[t] || (this.tweens[t] = new TWEEN.Tween(e).to(i, n).easing(o).delay(r).onStart(a).onUpdate(s).onComplete(h)),
                        this.tweens[t]
                }
                ,
                PANOLENS.Tile.prototype.ripple = function (t, e, i) {
                    t = t || 2,
                        e = e || 200,
                        i = i || TWEEN.Easing.Cubic.Out;
                    var n = this
                        , o = this.clone();
                    new TWEEN.Tween(o.scale).to({
                        x: t,
                        y: t
                    }, e).easing(i).start(),
                        new TWEEN.Tween(o.material).to({
                            opacity: 0
                        }, e).easing(i).onComplete(function () {
                            n.remove(o),
                                o.geometry.dispose(),
                                o.material.dispose()
                        }).start(),
                        this.add(o)
                }
                ,
                PANOLENS.Tile.prototype.setEntity = function (t) {
                    this.entity = t
                }
        }(),
        function () {
            "use strict";
            PANOLENS.TileGroup = function (t, e, i, n, o) {
                var r = this;
                THREE.Object3D.call(this),
                    this.tileArray = t || [],
                    this.offset = void 0 !== o ? o : 0,
                    this.v_gap = void 0 !== e ? e : 6,
                    this.d_gap = void 0 !== i ? i : 2,
                    this.animationDuration = void 0 !== n ? n : 200,
                    this.animationEasing = TWEEN.Easing.Exponential.Out,
                    this.visibleDelta = 2,
                    this.tileArray.map(function (t, e) {
                        t.image && PANOLENS.Utils.TextureLoader.load(t.image, r.setTexture.bind(t)),
                            t.position.set(0, e * -r.v_gap, e * -r.d_gap),
                            t.originalPosition = t.position.clone(),
                            t.setEntity(r),
                            r.add(t)
                    }),
                    this.updateVisbility()
            }
                ,
                PANOLENS.TileGroup.prototype = Object.create(THREE.Object3D.prototype),
                PANOLENS.TileGroup.prototype.constructor = PANOLENS.TileGroup,
                PANOLENS.TileGroup.prototype.updateTexture = function (t) {
                    var e = this;
                    t = t || [],
                        this.children.map(function (i, n) {
                            i instanceof PANOLENS.Tile && t[n] && (PANOLENS.Utils.TextureLoader.load(t[n], e.setTexture.bind(i)),
                                i.outline && (i.outline.material.visible = !0))
                        })
                }
                ,
                PANOLENS.TileGroup.prototype.updateAllTexture = function (t) {
                    if (this.updateTexture(t),
                        t.length < this.children.length)
                        for (var e = t.length; e < this.children.length; e++)
                            this.children[e] instanceof PANOLENS.Tile && (this.children[e].material.visible = !1,
                                this.children[e].outline && (this.children[e].outline.material.visible = !1))
                }
                ,
                PANOLENS.TileGroup.prototype.setTexture = function (t) {
                    t.minFilter = THREE.LinearFilter,
                        t.magFilter = THREE.LinearFilter,
                        this.material.visible = !0,
                        this.material.map = t,
                        this.material.needsUpdate = !0
                }
                ,
                PANOLENS.TileGroup.prototype.updateVisbility = function () {
                    this.children[this.offset].visible = !0,
                        new TWEEN.Tween(this.children[this.offset].material).to({
                            opacity: 1
                        }, this.animationDuration).easing(this.animationEasing).start(),
                        this.children[this.offset].outline && (this.children[this.offset].outline.visible = !0);
                    for (var t = this.offset - 1; t >= 0; t--)
                        -1 !== this.tileArray.indexOf(this.children[t]) && (this.offset - t <= this.visibleDelta ? (this.children[t].visible = !0,
                            new TWEEN.Tween(this.children[t].material).to({
                                opacity: 1 / (this.offset - t) * .5
                            }, this.animationDuration).easing(this.animationEasing).start()) : this.children[t].visible = !1,
                            this.children[t].outline && (this.children[t].outline.visible = !1));
                    for (var t = this.offset + 1; t < this.children.length; t++)
                        -1 !== this.tileArray.indexOf(this.children[t]) && (t - this.offset <= this.visibleDelta ? (this.children[t].visible = !0,
                            new TWEEN.Tween(this.children[t].material).to({
                                opacity: 1 / (t - this.offset) * .5
                            }, this.animationDuration).easing(this.animationEasing).start()) : this.children[t].visible = !1,
                            this.children[t].outline && (this.children[t].outline.visible = !1))
                }
                ,
                PANOLENS.TileGroup.prototype.scrollUp = function (t) {
                    var e, i = this.tileArray;
                    if (t = void 0 !== t ? t : this.animationDuration,
                        e = this.offset + 1,
                        this.offset < i.length - 1 && i[this.offset + 1].material.visible) {
                        for (var n = i.length - 1; n >= 0; n--)
                            new TWEEN.Tween(i[n].position).to({
                                y: (n - e) * -this.v_gap,
                                z: Math.abs(n - e) * -this.d_gap
                            }, t).easing(this.animationEasing).start();
                        this.offset++ ,
                            this.updateVisbility(),
                            this.dispatchEvent({
                                type: "scroll",
                                direction: "up"
                            })
                    }
                }
                ,
                PANOLENS.TileGroup.prototype.scrollDown = function (t) {
                    var e, i = this.tileArray;
                    if (t = void 0 !== t ? t : this.animationDuration,
                        e = this.offset - 1,
                        this.offset > 0 && i[this.offset - 1].material.visible) {
                        for (var n = 0; n < i.length; n++)
                            new TWEEN.Tween(i[n].position).to({
                                y: (n - e) * -this.v_gap,
                                z: Math.abs(n - e) * -this.d_gap
                            }, t).easing(this.animationEasing).start();
                        this.offset-- ,
                            this.updateVisbility(),
                            this.dispatchEvent({
                                type: "scroll",
                                direction: "down"
                            })
                    }
                }
                ,
                PANOLENS.TileGroup.prototype.reset = function () {
                    this.tileArray.map(function (t, e) {
                        t.position.copy(t.originalPosition)
                    }),
                        this.offset = 0,
                        this.updateVisbility()
                }
                ,
                PANOLENS.TileGroup.prototype.getIndex = function () {
                    return this.offset
                }
                ,
                PANOLENS.TileGroup.prototype.getTileCount = function () {
                    var t = 0;
                    return this.tileArray.map(function (e) {
                        e.material.visible && t++
                    }),
                        t
                }
        }(),
        function () {
            "use strict";
            var t, e, i = [];
            PANOLENS.SpriteText = function (t, e, i, n, o) {
                THREE.Object3D.call(this),
                    this.text = t || "",
                    this.maxWidth = e || 2e3,
                    this.color = i || 16777215,
                    this.opacity = void 0 !== n ? n : 1,
                    this.options = o || {},
                    this.animationDuration = 500,
                    this.animationFadeOut = void 0,
                    this.animationFadeIn = void 0,
                    this.tweens = {},
                    this.addText(t)
            }
                ,
                PANOLENS.SpriteText.prototype = Object.create(THREE.Object3D.prototype),
                PANOLENS.SpriteText.prototype.constructor = PANOLENS.SpriteText,
                PANOLENS.SpriteText.prototype.generateTextGeometry = function () { }
                ,
                PANOLENS.SpriteText.prototype.generateSDFShader = function () { }
                ,
                PANOLENS.SpriteText.prototype.setBMFont = function (n, o, r) {
                    r.needsUpdate = !0,
                        r.minFilter = THREE.LinearMipMapLinearFilter,
                        r.magFilter = THREE.LinearFilter,
                        r.generateMipmaps = !0,
                        r.anisotropy = 8,
                        t = o,
                        e = r;
                    for (var a = i.length - 1; a >= 0; a--)
                        i[a].target.addText(i[a].text);
                    for (; i.length > 0;)
                        i.pop();
                    n && n()
                }
                ,
                PANOLENS.SpriteText.prototype.addText = function (n) {
                    if (!t || !e)
                        return void i.push({
                            target: this,
                            text: n
                        });
                    var o = new THREE.Object3D;
                    this.options.text = n,
                        this.options.font = t,
                        this.options.width = this.maxWidth;
                    var r = this.generateTextGeometry(this.options);
                    r.computeBoundingBox(),
                        r.computeBoundingSphere();
                    var a = new THREE.RawShaderMaterial(this.generateSDFShader({
                        map: e,
                        side: THREE.DoubleSide,
                        transparent: !0,
                        color: this.color,
                        opacity: this.opacity
                    }))
                        , s = r.layout
                        , h = new THREE.Mesh(r, a);
                    h.entity = this,
                        h.position.x = -s.width / 2,
                        h.position.y = 1.035 * s.height,
                        o.scale.x = o.scale.y = -.05,
                        o.add(h),
                        this.mesh = h,
                        this.add(o)
                }
                ,
                PANOLENS.SpriteText.prototype.update = function (t) {
                    var e;
                    t = t || {},
                        e = this.mesh,
                        e.geometry.update(t),
                        e.position.x = -e.geometry.layout.width / 2,
                        e.position.y = 1.035 * e.geometry.layout.height
                }
                ,
                PANOLENS.SpriteText.prototype.tween = function (t, e, i, n, o, r, a, s, h) {
                    return e = e || this,
                        i = i || {},
                        n = n || this.animationDuration,
                        o = o || TWEEN.Easing.Exponential.Out,
                        r = void 0 !== r ? r : 0,
                        a = a || null,
                        s = s || null,
                        h = h || null,
                        this.tweens[t] || (this.tweens[t] = new TWEEN.Tween(e).to(i, n).easing(o).delay(r).onStart(a).onUpdate(s).onComplete(h)),
                        this.tweens[t]
                }
                ,
                PANOLENS.SpriteText.prototype.getLayout = function () {
                    return this.mesh && this.mesh.geometry && this.mesh.geometry.layout || {}
                }
                ,
                PANOLENS.SpriteText.prototype.setEntity = function (t) {
                    this.entity = t
                }
        }(),
        function () {
            PANOLENS.Widget = function (t) {
                THREE.EventDispatcher.call(this),
                    this.DEFAULT_TRANSITION = "all 0.27s ease",
                    this.TOUCH_ENABLED = PANOLENS.Utils.checkTouchSupported(),
                    this.PREVENT_EVENT_HANDLER = function (t) {
                        t.preventDefault(),
                            t.stopPropagation()
                    }
                    ,
                    this.container = t,
                    this.barElement,
                    this.fullscreenElement,
                    this.videoElement,
                    this.settingElement,
                    this.mainMenu,
                    this.activeMainItem,
                    this.activeSubMenu,
                    this.mask
            }
                ,
                PANOLENS.Widget.prototype = Object.create(THREE.EventDispatcher.prototype),
                PANOLENS.Widget.prototype.constructor = PANOLENS.Widget,
                PANOLENS.Widget.prototype.addControlBar = function () {
                    if (!this.container)
                        return void console.warn("Widget container not set");
                    var t, e, i, n, o = this;
                    n = "linear-gradient(bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))",
                        t = document.createElement("div"),
                        t.style.width = "100%",
                        t.style.height = "44px",
                        t.style.float = "left",
                        t.style.transform = t.style.webkitTransform = t.style.msTransform = "translateY(-100%)",
                        t.style.background = "-webkit-" + n,
                        t.style.background = "-moz-" + n,
                        t.style.background = "-o-" + n,
                        t.style.background = "-ms-" + n,
                        t.style.background = n,
                        t.style.transition = this.DEFAULT_TRANSITION,
                        t.style.pointerEvents = "none",
                        t.isHidden = !1,
                        t.toggle = function () {
                            t.isHidden = !t.isHidden,
                                e = t.isHidden ? "translateY(0)" : "translateY(-100%)",
                                i = t.isHidden ? 0 : 1,
                                t.style.transform = t.style.webkitTransform = t.style.msTransform = e,
                                t.style.opacity = i
                        }
                        ;
                    var r = this.createDefaultMenu();
                    this.mainMenu = this.createMainMenu(r),
                        t.appendChild(this.mainMenu);
                    var a = this.createMask();
                    this.mask = a,
                        this.container.appendChild(a),
                        t.dispose = function () {
                            o.fullscreenElement && (t.removeChild(o.fullscreenElement),
                                o.fullscreenElement.dispose(),
                                o.fullscreenElement = null),
                                o.settingElement && (t.removeChild(o.settingElement),
                                    o.settingElement.dispose(),
                                    o.settingElement = null),
                                o.videoElement && (t.removeChild(o.videoElement),
                                    o.videoElement.dispose(),
                                    o.videoElement = null)
                        }
                        ,
                        this.container.appendChild(t),
                        this.mask.addEventListener("mousemove", this.PREVENT_EVENT_HANDLER, !0),
                        this.mask.addEventListener("mouseup", this.PREVENT_EVENT_HANDLER, !0),
                        this.mask.addEventListener("mousedown", this.PREVENT_EVENT_HANDLER, !0),
                        this.mask.addEventListener(o.TOUCH_ENABLED ? "touchend" : "click", function (t) {
                            t.preventDefault(),
                                t.stopPropagation(),
                                o.mask.hide(),
                                o.settingElement.deactivate()
                        }, !1),
                        this.addEventListener("control-bar-toggle", t.toggle),
                        this.barElement = t
                }
                ,
                PANOLENS.Widget.prototype.createDefaultMenu = function () {
                    var t, e = this;
                    return t = function (t, i) {
                        return function () {
                            e.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: t,
                                data: i
                            })
                        }
                    }
                        ,
                        [{
                            title: "Control",
                            subMenu: [{
                                title: this.TOUCH_ENABLED ? "Touch" : "Mouse",
                                handler: t("enableControl", PANOLENS.Controls.ORBIT)
                            }, {
                                title: "Sensor",
                                handler: t("enableControl", PANOLENS.Controls.DEVICEORIENTATION)
                            }]
                        }, {
                            title: "Mode",
                            subMenu: [{
                                title: "Normal",
                                handler: t("disableEffect")
                            }, {
                                title: "Cardboard",
                                handler: t("enableEffect", PANOLENS.Modes.CARDBOARD)
                            }, {
                                title: "Stereoscopic",
                                handler: t("enableEffect", PANOLENS.Modes.STEREO)
                            }]
                        }]
                }
                ,
                PANOLENS.Widget.prototype.addControlButton = function (t) {
                    var e;
                    switch (t) {
                        case "fullscreen":
                            e = this.createFullscreenButton(),
                                this.fullscreenElement = e;
                            break;
                        case "setting":
                            e = this.createSettingButton(),
                                this.settingElement = e;
                            break;
                        case "video":
                            e = this.createVideoControl(),
                                this.videoElement = e;
                            break;
                        default:
                            return
                    }
                    e && this.barElement.appendChild(e)
                }
                ,
                PANOLENS.Widget.prototype.createMask = function () {
                    var t = document.createElement("div");
                    return t.style.position = "absolute",
                        t.style.top = 0,
                        t.style.left = 0,
                        t.style.width = "100%",
                        t.style.height = "100%",
                        t.style.background = "transparent",
                        t.style.display = "none",
                        t.show = function () {
                            this.style.display = "block"
                        }
                        ,
                        t.hide = function () {
                            this.style.display = "none"
                        }
                        ,
                        t
                }
                ,
                PANOLENS.Widget.prototype.createSettingButton = function () {
                    function t(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            i.mainMenu.toggle(),
                            this.activated ? this.deactivate() : this.activate()
                    }
                    var e, i = this;
                    return e = this.createCustomItem({
                        style: {
                            backgroundImage: 'url("' + PANOLENS.DataImage.Setting + '")',
                            webkitTransition: this.DEFAULT_TRANSITION,
                            transition: this.DEFAULT_TRANSITION
                        },
                        onTap: t
                    }),
                        e.activate = function () {
                            this.style.transform = "rotate3d(0,0,1,90deg)",
                                this.activated = !0,
                                i.mask.show()
                        }
                        ,
                        e.deactivate = function () {
                            this.style.transform = "rotate3d(0,0,0,0)",
                                this.activated = !1,
                                i.mask.hide(),
                                i.mainMenu && i.mainMenu.visible && i.mainMenu.hide(),
                                i.activeSubMenu && i.activeSubMenu.visible && i.activeSubMenu.hide(),
                                i.mainMenu && i.mainMenu._width && (i.mainMenu.changeSize(i.mainMenu._width),
                                    i.mainMenu.unslideAll())
                        }
                        ,
                        e.activated = !1,
                        e
                }
                ,
                PANOLENS.Widget.prototype.createFullscreenButton = function () {
                    function t(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            a = !1,
                            r ? (document.exitFullscreen && document.exitFullscreen(),
                                document.msExitFullscreen && document.msExitFullscreen(),
                                document.mozCancelFullScreen && document.mozCancelFullScreen(),
                                document.webkitExitFullscreen && document.webkitExitFullscreen(),
                                r = !1) : (o.container.requestFullscreen && o.container.requestFullscreen(),
                                    o.container.msRequestFullscreen && o.container.msRequestFullscreen(),
                                    o.container.mozRequestFullScreen && o.container.mozRequestFullScreen(),
                                    o.container.webkitRequestFullscreen && o.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
                                    r = !0),
                            this.style.backgroundImage = r ? 'url("' + PANOLENS.DataImage.FullscreenLeave + '")' : 'url("' + PANOLENS.DataImage.FullscreenEnter + '")'
                    }
                    function e(t) {
                        a && (r = !r,
                            i.style.backgroundImage = r ? 'url("' + PANOLENS.DataImage.FullscreenLeave + '")' : 'url("' + PANOLENS.DataImage.FullscreenEnter + '")'),
                            o.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "onWindowResize",
                                data: !1
                            }),
                            a = !0
                    }
                    var i, n, o = this, r = !1, a = !0;
                    if (n = "panolens-style-addon",
                        document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                        if (document.addEventListener("fullscreenchange", e, !1),
                            document.addEventListener("webkitfullscreenchange", e, !1),
                            document.addEventListener("mozfullscreenchange", e, !1),
                            document.addEventListener("MSFullscreenChange", e, !1),
                            i = this.createCustomItem({
                                style: {
                                    backgroundImage: 'url("' + PANOLENS.DataImage.FullscreenEnter + '")'
                                },
                                onTap: t
                            }),
                            !document.querySelector(n)) {
                            var s = document.createElement("style");
                            s.id = n,
                                s.innerHTML = ":-webkit-full-screen { width: 100% !important; height: 100% !important }",
                                document.body.appendChild(s)
                        }
                        return i
                    }
                }
                ,
                PANOLENS.Widget.prototype.createVideoControl = function () {
                    var t;
                    return t = document.createElement("span"),
                        t.style.display = "none",
                        t.show = function () {
                            t.style.display = ""
                        }
                        ,
                        t.hide = function () {
                            t.style.display = "none",
                                t.controlButton.paused = !0,
                                t.controlButton.update()
                        }
                        ,
                        t.controlButton = this.createVideoControlButton(),
                        t.seekBar = this.createVideoControlSeekbar(),
                        t.appendChild(t.controlButton),
                        t.appendChild(t.seekBar),
                        t.dispose = function () {
                            t.removeChild(t.controlButton),
                                t.removeChild(t.seekBar),
                                t.controlButton.dispose(),
                                t.controlButton = null,
                                t.seekBar.dispose(),
                                t.seekBar = null
                        }
                        ,
                        this.addEventListener("video-control-show", t.show),
                        this.addEventListener("video-control-hide", t.hide),
                        t
                }
                ,
                PANOLENS.Widget.prototype.createVideoControlButton = function () {
                    function t(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            i.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "toggleVideoPlay",
                                data: !this.paused
                            }),
                            this.paused = !this.paused,
                            e.update()
                    }
                    var e, i = this;
                    return e = this.createCustomItem({
                        style: {
                            float: "left",
                            backgroundImage: 'url("' + PANOLENS.DataImage.VideoPlay + '")'
                        },
                        onTap: t
                    }),
                        e.paused = !0,
                        e.update = function (t) {
                            this.paused = void 0 !== t ? t : this.paused,
                                this.style.backgroundImage = 'url("' + (this.paused ? PANOLENS.DataImage.VideoPlay : PANOLENS.DataImage.VideoPause) + '")'
                        }
                        ,
                        e
                }
                ,
                PANOLENS.Widget.prototype.createVideoControlSeekbar = function () {
                    function t(t) {
                        t.stopPropagation(),
                            f = !0,
                            l = t.clientX || t.changedTouches && t.changedTouches[0].clientX,
                            u = parseInt(h.style.width) / 100,
                            n()
                    }
                    function e(t) {
                        var e;
                        f && (e = t.clientX || t.changedTouches && t.changedTouches[0].clientX,
                            d = (e - l) / s.clientWidth,
                            d = u + d,
                            d = d > 1 ? 1 : d < 0 ? 0 : d,
                            s.setProgress(d),
                            p.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "setVideoCurrentTime",
                                data: d
                            }))
                    }
                    function i(t) {
                        t.stopPropagation(),
                            f = !1,
                            o()
                    }
                    function n() {
                        p.container.addEventListener("mousemove", e, !1),
                            p.container.addEventListener("mouseup", i, !1),
                            p.container.addEventListener("touchmove", e, !1),
                            p.container.addEventListener("touchend", i, !1)
                    }
                    function o() {
                        p.container.removeEventListener("mousemove", e, !1),
                            p.container.removeEventListener("mouseup", i, !1),
                            p.container.removeEventListener("touchmove", e, !1),
                            p.container.removeEventListener("touchend", i, !1)
                    }
                    function r(t) {
                        t.preventDefault(),
                            t.stopPropagation();
                        var e;
                        t.target !== c && (e = t.changedTouches && t.changedTouches.length > 0 ? (t.changedTouches[0].pageX - t.target.getBoundingClientRect().left) / this.clientWidth : t.offsetX / this.clientWidth,
                            p.dispatchEvent({
                                type: "panolens-viewer-handler",
                                method: "setVideoCurrentTime",
                                data: e
                            }),
                            s.setProgress(t.offsetX / this.clientWidth))
                    }
                    function a() {
                        o(),
                            h = null,
                            c = null
                    }
                    var s, h, c, l, u, d, p = this, f = !1;
                    return h = document.createElement("div"),
                        h.style.width = "0%",
                        h.style.height = "100%",
                        h.style.backgroundColor = "#fff",
                        c = document.createElement("div"),
                        c.style.float = "right",
                        c.style.width = "14px",
                        c.style.height = "14px",
                        c.style.transform = "translate(7px, -5px)",
                        c.style.borderRadius = "50%",
                        c.style.backgroundColor = "#ddd",
                        c.addEventListener("mousedown", t, !1),
                        c.addEventListener("touchstart", t, !1),
                        h.appendChild(c),
                        s = this.createCustomItem({
                            style: {
                                float: "left",
                                width: "30%",
                                height: "4px",
                                marginTop: "20px",
                                backgroundColor: "rgba(188,188,188,0.8)"
                            },
                            onTap: r,
                            onDispose: a
                        }),
                        s.appendChild(h),
                        s.setProgress = function (t) {
                            h.style.width = 100 * t + "%"
                        }
                        ,
                        this.addEventListener("video-update", function (t) {
                            s.setProgress(t.percentage)
                        }),
                        s
                }
                ,
                PANOLENS.Widget.prototype.createMenuItem = function (t) {
                    var e = this
                        , i = document.createElement("a");
                    return i.textContent = t,
                        i.style.display = "block",
                        i.style.padding = "10px",
                        i.style.textDecoration = "none",
                        i.style.cursor = "pointer",
                        i.style.pointerEvents = "auto",
                        i.style.transition = this.DEFAULT_TRANSITION,
                        i.slide = function (t) {
                            this.style.transform = "translateX(" + (t ? "" : "-") + "100%)"
                        }
                        ,
                        i.unslide = function () {
                            this.style.transform = "translateX(0)"
                        }
                        ,
                        i.setIcon = function (t) {
                            this.icon && (this.icon.style.backgroundImage = "url(" + t + ")")
                        }
                        ,
                        i.setSelectionTitle = function (t) {
                            this.selection && (this.selection.textContent = t)
                        }
                        ,
                        i.addSelection = function (t) {
                            var e = document.createElement("span");
                            return e.style.fontSize = "13px",
                                e.style.fontWeight = "300",
                                e.style.float = "right",
                                this.selection = e,
                                this.setSelectionTitle(t),
                                this.appendChild(e),
                                this
                        }
                        ,
                        i.addIcon = function (t, e, i) {
                            t = t || PANOLENS.DataImage.ChevronRight,
                                e = e || !1,
                                i = i || !1;
                            var n = document.createElement("span");
                            return n.style.float = e ? "left" : "right",
                                n.style.width = "17px",
                                n.style.height = "17px",
                                n.style["margin" + (e ? "Right" : "Left")] = "12px",
                                n.style.backgroundSize = "cover",
                                i && (n.style.transform = "rotateZ(180deg)"),
                                this.icon = n,
                                this.setIcon(t),
                                this.appendChild(n),
                                this
                        }
                        ,
                        i.addSubMenu = function (t, i) {
                            return this.subMenu = e.createSubMenu(t, i),
                                this
                        }
                        ,
                        i.addEventListener("mouseenter", function () {
                            this.style.backgroundColor = "#e0e0e0"
                        }, !1),
                        i.addEventListener("mouseleave", function () {
                            this.style.backgroundColor = "#fafafa"
                        }, !1),
                        i
                }
                ,
                PANOLENS.Widget.prototype.createMenuItemHeader = function (t) {
                    var e = this.createMenuItem(t);
                    return e.style.borderBottom = "1px solid #333",
                        e.style.paddingBottom = "15px",
                        e
                }
                ,
                PANOLENS.Widget.prototype.createMainMenu = function (t) {
                    function e(t) {
                        function e() {
                            n.changeSize(o.clientWidth),
                                o.show(),
                                o.unslideAll()
                        }
                        t.preventDefault(),
                            t.stopPropagation();
                        var n = i.mainMenu
                            , o = this.subMenu;
                        n.hide(),
                            n.slideAll(),
                            n.parentElement.appendChild(o),
                            i.activeMainItem = this,
                            i.activeSubMenu = o,
                            window.requestAnimationFrame(e)
                    }
                    var i = this
                        , n = this.createMenu();
                    n._width = 200,
                        n.changeSize(n._width);
                    for (var o = 0; o < t.length; o++) {
                        var r = n.addItem(t[o].title);
                        if (r.style.paddingLeft = "20px",
                            r.addIcon().addEventListener(i.TOUCH_ENABLED ? "touchend" : "click", e, !1),
                            t[o].subMenu && t[o].subMenu.length > 0) {
                            var a = t[o].subMenu[0].title;
                            r.addSelection(a).addSubMenu(t[o].title, t[o].subMenu)
                        }
                    }
                    return n
                }
                ,
                PANOLENS.Widget.prototype.createSubMenu = function (t, e) {
                    function i(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            n = o.mainMenu,
                            n.changeSize(n._width),
                            n.unslideAll(),
                            n.show(),
                            r.slideAll(!0),
                            r.hide(),
                            "header" !== this.type && (r.setActiveItem(this),
                                o.activeMainItem.setSelectionTitle(this.textContent),
                                this.handler && this.handler())
                    }
                    var n, o = this, r = this.createMenu();
                    r.items = e,
                        r.activeItem,
                        r.addHeader(t).addIcon(void 0, !0, !0).addEventListener(o.TOUCH_ENABLED ? "touchend" : "click", i, !1);
                    for (var a = 0; a < e.length; a++) {
                        var s = r.addItem(e[a].title);
                        s.style.fontWeight = 300,
                            s.handler = e[a].handler,
                            s.addIcon(" ", !0),
                            s.addEventListener(o.TOUCH_ENABLED ? "touchend" : "click", i, !1),
                            r.activeItem || r.setActiveItem(s)
                    }
                    return r.slideAll(!0),
                        r
                }
                ,
                PANOLENS.Widget.prototype.createMenu = function () {
                    var t, e = this, i = document.createElement("span");
                    return t = i.style,
                        t.padding = "5px 0",
                        t.position = "fixed",
                        t.bottom = "100%",
                        t.right = "14px",
                        t.backgroundColor = "#fafafa",
                        t.fontFamily = "Helvetica Neue",
                        t.fontSize = "14px",
                        t.visibility = "hidden",
                        t.opacity = 0,
                        t.boxShadow = "0 0 12pt rgba(0,0,0,0.25)",
                        t.borderRadius = "2px",
                        t.overflow = "hidden",
                        t.willChange = "width, height, opacity",
                        t.pointerEvents = "auto",
                        t.transition = this.DEFAULT_TRANSITION,
                        i.visible = !1,
                        i.changeSize = function (t, e) {
                            t && (this.style.width = t + "px"),
                                e && (this.style.height = e + "px")
                        }
                        ,
                        i.show = function () {
                            this.style.opacity = 1,
                                this.style.visibility = "visible",
                                this.visible = !0
                        }
                        ,
                        i.hide = function () {
                            this.style.opacity = 0,
                                this.style.visibility = "hidden",
                                this.visible = !1
                        }
                        ,
                        i.toggle = function () {
                            this.visible ? this.hide() : this.show()
                        }
                        ,
                        i.slideAll = function (t) {
                            for (var e = 0; e < i.children.length; e++)
                                i.children[e].slide && i.children[e].slide(t)
                        }
                        ,
                        i.unslideAll = function () {
                            for (var t = 0; t < i.children.length; t++)
                                i.children[t].unslide && i.children[t].unslide()
                        }
                        ,
                        i.addHeader = function (t) {
                            var i = e.createMenuItemHeader(t);
                            return i.type = "header",
                                this.appendChild(i),
                                i
                        }
                        ,
                        i.addItem = function (t) {
                            var i = e.createMenuItem(t);
                            return i.type = "item",
                                this.appendChild(i),
                                i
                        }
                        ,
                        i.setActiveItem = function (t) {
                            this.activeItem && this.activeItem.setIcon(" "),
                                t.setIcon(PANOLENS.DataImage.Check),
                                this.activeItem = t
                        }
                        ,
                        i.addEventListener("mousemove", this.PREVENT_EVENT_HANDLER, !0),
                        i.addEventListener("mouseup", this.PREVENT_EVENT_HANDLER, !0),
                        i.addEventListener("mousedown", this.PREVENT_EVENT_HANDLER, !0),
                        i
                }
                ,
                PANOLENS.Widget.prototype.createCustomItem = function (t) {
                    t = t || {};
                    var e = this
                        , i = t.element || document.createElement("span");
                    return i.style.cursor = "pointer",
                        i.style.float = "right",
                        i.style.width = "44px",
                        i.style.height = "100%",
                        i.style.backgroundSize = "60%",
                        i.style.backgroundRepeat = "no-repeat",
                        i.style.backgroundPosition = "center",
                        i.style.webkitUserSelect = i.style.MozUserSelect = i.style.userSelect = "none",
                        i.style.position = "relative",
                        i.style.pointerEvents = "auto",
                        i.addEventListener(e.TOUCH_ENABLED ? "touchstart" : "mouseenter", function () {
                            i.style.filter = i.style.webkitFilter = "drop-shadow(0 0 5px rgba(255,255,255,1))"
                        }),
                        i.addEventListener(e.TOUCH_ENABLED ? "touchend" : "mouseleave", function () {
                            i.style.filter = i.style.webkitFilter = ""
                        }),
                        i = this.mergeStyleOptions(i, t.style),
                        t.onTap && i.addEventListener(e.TOUCH_ENABLED ? "touchend" : "click", t.onTap, !1),
                        i.dispose = function () {
                            i.removeEventListener(e.TOUCH_ENABLED ? "touchend" : "click", t.onTap, !1),
                                t.onDispose && t.onDispose()
                        }
                        ,
                        i
                }
                ,
                PANOLENS.Widget.prototype.mergeStyleOptions = function (t, e) {
                    e = e || {};
                    for (var i in e)
                        e.hasOwnProperty(i) && (t.style[i] = e[i]);
                    return t
                }
                ,
                PANOLENS.Widget.prototype.dispose = function () {
                    this.barElement && (this.container.removeChild(this.barElement),
                        this.barElement.dispose(),
                        this.barElement = null)
                }
        }(),
        function () {
            PANOLENS.Infospot = function (t, e, i) {
                function n(e) {
                    e.wrapS = THREE.RepeatWrapping,
                        e.repeat.x = -1,
                        e.image.width = e.image.naturalWidth || 64,
                        e.image.height = e.image.naturalHeight || 64,
                        a = e.image.width / e.image.height,
                        c.scale.set(a * t, t, 1),
                        s = c.scale.clone(),
                        c.scaleUpAnimation = new TWEEN.Tween(c.scale).to({
                            x: s.x * c.scaleFactor,
                            y: s.y * c.scaleFactor
                        }, h).easing(TWEEN.Easing.Elastic.Out),
                        c.scaleDownAnimation = new TWEEN.Tween(c.scale).to({
                            x: s.x,
                            y: s.y
                        }, h).easing(TWEEN.Easing.Elastic.Out),
                        c.material.side = THREE.DoubleSide,
                        c.material.map = e,
                        c.material.depthTest = !1,
                        c.material.needsUpdate = !0
                }
                function o() {
                    this.visible = !0
                }
                function r() {
                    this.visible = !1
                }
                var a, s, h, c = this;
                t = t || 300,
                    e = e || PANOLENS.DataImage.Info,
                    h = 500,
                    THREE.Sprite.call(this),
                    this.type = "infospot",
                    this.animated = void 0 === i || i,
                    this.isHovering = !1,
                    this.visible = !1,
                    this.element,
                    this.toPanorama,
                    this.cursorStyle,
                    this.mode = PANOLENS.Modes.UNKNOWN,
                    this.scale.set(t, t, 1),
                    this.rotation.y = Math.PI,
                    this.scaleFactor = 1.3,
                    this.container,
                    this.HANDLER_FOCUS,
                    PANOLENS.Utils.TextureLoader.load(e, n),
                    this.showAnimation = new TWEEN.Tween(this.material).to({
                        opacity: 1
                    }, h).onStart(o.bind(this)).easing(TWEEN.Easing.Quartic.Out),
                    this.hideAnimation = new TWEEN.Tween(this.material).to({
                        opacity: 0
                    }, h).onComplete(r.bind(this)).easing(TWEEN.Easing.Quartic.Out),
                    this.addEventListener("click", this.onClick),
                    this.addEventListener("hover", this.onHover),
                    this.addEventListener("hoverenter", this.onHoverStart),
                    this.addEventListener("hoverleave", this.onHoverEnd),
                    this.addEventListener("panolens-dual-eye-effect", this.onDualEyeEffect),
                    this.addEventListener("panolens-container", this.setContainer.bind(this)),
                    this.addEventListener("dismiss", this.onDismiss),
                    this.addEventListener("panolens-infospot-focus", this.setFocusMethod)
            }
                ,
                PANOLENS.Infospot.prototype = Object.create(THREE.Sprite.prototype),
                PANOLENS.Infospot.prototype.setContainer = function (t) {
                    var e;
                    t instanceof HTMLElement ? e = t : t && t.container && (e = t.container),
                        e && this.element && e.appendChild(this.element),
                        this.container = e
                }
                ,
                PANOLENS.Infospot.prototype.getContainer = function () {
                    return this.container
                }
                ,
                PANOLENS.Infospot.prototype.onClick = function (t) {
                    this.element && this.getContainer() && (this.onHoverStart(t),
                        this.lockHoverElement())
                }
                ,
                PANOLENS.Infospot.prototype.onDismiss = function (t) {
                    this.element && (this.unlockHoverElement(),
                        this.onHoverEnd())
                }
                ,
                PANOLENS.Infospot.prototype.onHover = function (t) { }
                ,
                PANOLENS.Infospot.prototype.onHoverStart = function (t) {
                    if (this.getContainer()) {
                        var e = this.cursorStyle || (this.mode === PANOLENS.Modes.NORMAL ? "pointer" : "default");
                        this.isHovering = !0,
                            this.container.style.cursor = e,
                            this.animated && (this.scaleDownAnimation && this.scaleDownAnimation.stop(),
                                this.scaleUpAnimation && this.scaleUpAnimation.start()),
                            this.element && t.mouseEvent.clientX >= 0 && t.mouseEvent.clientY >= 0 && (this.mode === PANOLENS.Modes.CARDBOARD || this.mode === PANOLENS.Modes.STEREO ? (this.element.style.display = "none",
                                this.element.left && (this.element.left.style.display = "block"),
                                this.element.right && (this.element.right.style.display = "block"),
                                this.element._width = this.element.left.clientWidth,
                                this.element._height = this.element.left.clientHeight) : (this.element.style.display = "block",
                                    this.element.left && (this.element.left.style.display = "none"),
                                    this.element.right && (this.element.right.style.display = "none"),
                                    this.element._width = this.element.clientWidth,
                                    this.element._height = this.element.clientHeight))
                    }
                }
                ,
                PANOLENS.Infospot.prototype.onHoverEnd = function () {
                    this.getContainer() && (this.isHovering = !1,
                        this.container.style.cursor = "default",
                        this.animated && (this.scaleUpAnimation && this.scaleUpAnimation.stop(),
                            this.scaleDownAnimation && this.scaleDownAnimation.start()),
                        this.element && !this.element.locked && (this.element.style.display = "none",
                            this.element.left && (this.element.left.style.display = "none"),
                            this.element.right && (this.element.right.style.display = "none"),
                            this.unlockHoverElement()))
                }
                ,
                PANOLENS.Infospot.prototype.onDualEyeEffect = function (t) {
                    if (this.getContainer()) {
                        var e, i, n;
                        this.mode = t.mode,
                            e = this.element,
                            i = this.container.clientWidth / 2,
                            n = this.container.clientHeight / 2,
                            e && (e.left && e.right || (e.left = e.cloneNode(!0),
                                e.right = e.cloneNode(!0)),
                                this.mode === PANOLENS.Modes.CARDBOARD || this.mode === PANOLENS.Modes.STEREO ? (e.left.style.display = e.style.display,
                                    e.right.style.display = e.style.display,
                                    e.style.display = "none") : (e.style.display = e.left.style.display,
                                        e.left.style.display = "none",
                                        e.right.style.display = "none"),
                                this.translateElement(i, n),
                                this.container.appendChild(e.left),
                                this.container.appendChild(e.right))
                    }
                }
                ,
                PANOLENS.Infospot.prototype.translateElement = function (t, e) {
                    if (this.element._width && this.element._height && this.getContainer()) {
                        var i, n, o, r, a, s, h;
                        h = this.container,
                            o = this.element,
                            r = o._width / 2,
                            a = o._height / 2,
                            s = void 0 !== o.verticalDelta ? o.verticalDelta : 40,
                            i = t - r,
                            n = e - a - s,
                            this.mode !== PANOLENS.Modes.CARDBOARD && this.mode !== PANOLENS.Modes.STEREO || !o.left || !o.right || t === h.clientWidth / 2 && e === h.clientHeight / 2 ? this.setElementStyle("transform", o, "translate(" + i + "px, " + n + "px)") : (i = h.clientWidth / 4 - r + (t - h.clientWidth / 2),
                                n = h.clientHeight / 2 - a - s + (e - h.clientHeight / 2),
                                this.setElementStyle("transform", o.left, "translate(" + i + "px, " + n + "px)"),
                                i += h.clientWidth / 2,
                                this.setElementStyle("transform", o.right, "translate(" + i + "px, " + n + "px)"))
                    }
                }
                ,
                PANOLENS.Infospot.prototype.setElementStyle = function (t, e, i) {
                    var n = e.style;
                    "transform" === t && (n.webkitTransform = n.msTransform = n.transform = i)
                }
                ,
                PANOLENS.Infospot.prototype.setText = function (t) {
                    this.element && (this.element.textContent = t)
                }
                ,
                PANOLENS.Infospot.prototype.setCursorHoverStyle = function (t) {
                    this.cursorStyle = t
                }
                ,
                PANOLENS.Infospot.prototype.addHoverText = function (t, e) {
                    this.element || (this.element = document.createElement("div"),
                        this.element.style.display = "none",
                        this.element.style.color = "#fff",
                        this.element.style.top = 0,
                        this.element.style.maxWidth = "50%",
                        this.element.style.maxHeight = "50%",
                        this.element.style.textShadow = "0 0 3px #000000",
                        this.element.style.fontFamily = '"Trebuchet MS", Helvetica, sans-serif',
                        this.element.style.position = "absolute",
                        this.element.classList.add("panolens-infospot"),
                        this.element.verticalDelta = void 0 !== e ? e : 40),
                        this.setText(t)
                }
                ,
                PANOLENS.Infospot.prototype.addHoverElement = function (t, e) {
                    this.element || (this.element = t.cloneNode(!0),
                        this.element.style.display = "none",
                        this.element.style.top = 0,
                        this.element.style.position = "absolute",
                        this.element.classList.add("panolens-infospot"),
                        this.element.verticalDelta = void 0 !== e ? e : 40)
                }
                ,
                PANOLENS.Infospot.prototype.removeHoverElement = function () {
                    this.element && (this.element.left && (this.container.removeChild(this.element.left),
                        this.element.left = null),
                        this.element.right && (this.container.removeChild(this.element.right),
                            this.element.right = null),
                        this.container.removeChild(this.element),
                        this.element = null)
                }
                ,
                PANOLENS.Infospot.prototype.lockHoverElement = function () {
                    this.element && (this.element.locked = !0)
                }
                ,
                PANOLENS.Infospot.prototype.unlockHoverElement = function () {
                    this.element && (this.element.locked = !1)
                }
                ,
                PANOLENS.Infospot.prototype.show = function (t) {
                    t = t || 0,
                        this.animated ? (this.hideAnimation && this.hideAnimation.stop(),
                            this.showAnimation && this.showAnimation.delay(t).start()) : this.visible = !0
                }
                ,
                PANOLENS.Infospot.prototype.hide = function (t) {
                    t = t || 0,
                        this.animated ? (this.showAnimation && this.showAnimation.stop(),
                            this.hideAnimation && this.hideAnimation.delay(t).start()) : this.visible = !1
                }
                ,
                PANOLENS.Infospot.prototype.setFocusMethod = function (t) {
                    t && (this.HANDLER_FOCUS = t.method)
                }
                ,
                PANOLENS.Infospot.prototype.focus = function (t, e) {
                    this.HANDLER_FOCUS && (this.HANDLER_FOCUS(this.position, t, e),
                        this.onDismiss())
                }
                ,
                PANOLENS.Infospot.prototype.dispose = function () {
                    this.removeHoverElement(),
                        this.material.dispose(),
                        this.parent && this.parent.remove(this)
                }
        }(),
        function () {
            "use strict";
            PANOLENS.Viewer = function (t) {
                if (THREE.EventDispatcher.call(this),
                    !THREE)
                    return void console.error("Three.JS not found");
                var e;
                t = t || {},
                    t.controlBar = void 0 === t.controlBar || t.controlBar,
                    t.controlButtons = t.controlButtons || ["fullscreen", "setting", "video"],
                    t.autoHideControlBar = void 0 !== t.autoHideControlBar && t.autoHideControlBar,
                    t.autoHideInfospot = void 0 === t.autoHideInfospot || t.autoHideInfospot,
                    t.horizontalView = void 0 !== t.horizontalView && t.horizontalView,
                    t.clickTolerance = t.clickTolerance || 10,
                    t.cameraFov = t.cameraFov || 60,
                    t.reverseDragging = t.reverseDragging || !1,
                    t.enableReticle = t.enableReticle || !1,
                    t.dwellTime = t.dwellTime || 1500,
                    t.autoReticleSelect = void 0 === t.autoReticleSelect || t.autoReticleSelect,
                    t.viewIndicator = void 0 !== t.viewIndicator && t.viewIndicator,
                    t.indicatorSize = t.indicatorSize || 30,
                    t.output = t.output ? t.output : "none",
                    t.autoRotate = t.autoRotate || !1,
                    t.autoRotateSpeed = t.autoRotateSpeed || 2,
                    t.autoRotateActivationDuration = t.autoRotateActivationDuration || 5e3,
                    this.options = t,
                    t.container ? (e = t.container,
                        e._width = e.clientWidth,
                        e._height = e.clientHeight) : (e = document.createElement("div"),
                            e.classList.add("panolens-container"),
                            e.style.width = "100%",
                            e.style.height = "100%",
                            e._width = window.innerWidth,
                            e._height = window.innerHeight,
                            document.body.appendChild(e)),
                    this.container = e,
                    this.camera = t.camera || new THREE.PerspectiveCamera(this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 1e4),
                    this.scene = t.scene || new THREE.Scene,
                    this.renderer = t.renderer || new THREE.WebGLRenderer({
                        alpha: !0,
                        antialias: !1
                    }),
                    this.viewIndicatorSize = this.options.indicatorSize,
                    this.reticle = {},
                    this.tempEnableReticle = this.options.enableReticle,
                    this.mode = PANOLENS.Modes.NORMAL,
                    this.OrbitControls,
                    this.DeviceOrientationControls,
                    this.CardboardEffect,
                    this.StereoEffect,
                    this.controls,
                    this.effect,
                    this.panorama,
                    this.widget,
                    this.hoverObject,
                    this.infospot,
                    this.pressEntityObject,
                    this.pressObject,
                    this.raycaster = new THREE.Raycaster,
                    this.raycasterPoint = new THREE.Vector2,
                    this.userMouse = new THREE.Vector2,
                    this.updateCallbacks = [],
                    this.requestAnimationId,
                    this.cameraFrustum = new THREE.Frustum,
                    this.cameraViewProjectionMatrix = new THREE.Matrix4,
                    this.autoRotateRequestId,
                    this.outputDivElement,
                    this.HANDLER_MOUSE_DOWN = this.onMouseDown.bind(this),
                    this.HANDLER_MOUSE_UP = this.onMouseUp.bind(this),
                    this.HANDLER_MOUSE_MOVE = this.onMouseMove.bind(this),
                    this.HANDLER_WINDOW_RESIZE = this.onWindowResize.bind(this),
                    this.HANDLER_KEY_DOWN = this.onKeyDown.bind(this),
                    this.HANDLER_KEY_UP = this.onKeyUp.bind(this),
                    this.HANDLER_TAP = this.onTap.bind(this, {
                        clientX: this.container.clientWidth / 2,
                        clientY: this.container.clientHeight / 2
                    }),
                    this.OUTPUT_INFOSPOT = !1,
                    this.tweenLeftAnimation = new TWEEN.Tween,
                    this.tweenUpAnimation = new TWEEN.Tween,
                    this.renderer.setPixelRatio(window.devicePixelRatio),
                    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight),
                    this.renderer.setClearColor(0, 1),
                    this.renderer.sortObjects = !1,
                    this.renderer.domElement.classList.add("panolens-canvas"),
                    this.renderer.domElement.style.display = "block",
                    this.container.style.backgroundColor = "#000",
                    this.container.appendChild(this.renderer.domElement),
                    this.OrbitControls = new THREE.OrbitControls(this.camera, this.container),
                    this.OrbitControls.name = "orbit",
                    this.OrbitControls.minDistance = 1,
                    this.OrbitControls.noPan = !0,
                    this.OrbitControls.autoRotate = this.options.autoRotate,
                    this.OrbitControls.autoRotateSpeed = this.options.autoRotateSpeed,
                    this.DeviceOrientationControls = new THREE.DeviceOrientationControls(this.camera, this.container),
                    this.DeviceOrientationControls.name = "device-orientation",
                    this.DeviceOrientationControls.enabled = !1,
                    this.camera.position.z = 1,
                    this.options.passiveRendering && console.warn("passiveRendering is now deprecated"),
                    this.controls = [this.OrbitControls, this.DeviceOrientationControls],
                    this.control = this.OrbitControls,
                    this.CardboardEffect = new THREE.CardboardEffect(this.renderer),
                    this.CardboardEffect.setSize(this.container.clientWidth, this.container.clientHeight),
                    this.StereoEffect = new THREE.StereoEffect(this.renderer),
                    this.StereoEffect.setSize(this.container.clientWidth, this.container.clientHeight),
                    this.effect = this.CardboardEffect,
                    this.addReticle(),
                    this.options.horizontalView && (this.OrbitControls.minPolarAngle = Math.PI / 2,
                        this.OrbitControls.maxPolarAngle = Math.PI / 2),
                    !1 !== this.options.controlBar && this.addDefaultControlBar(this.options.controlButtons),
                    this.options.viewIndicator && this.addViewIndicator(),
                    this.options.reverseDragging && this.reverseDraggingDirection(),
                    this.options.enableReticle ? this.enableReticleControl() : this.registerMouseAndTouchEvents(),
                    "overlay" === this.options.output && this.addOutputElement(),
                    this.registerEventListeners(),
                    this.animate.call(this)
            }
                ,
                PANOLENS.Viewer.prototype = Object.create(THREE.EventDispatcher.prototype),
                PANOLENS.Viewer.prototype.constructor = PANOLENS.Viewer,
                PANOLENS.Viewer.prototype.add = function (t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++)
                            this.add(arguments[e]);
                        return this
                    }
                    this.scene.add(t),
                        t.addEventListener && t.addEventListener("panolens-viewer-handler", this.eventHandler.bind(this)),
                        t instanceof PANOLENS.Panorama && t.dispatchEvent && t.dispatchEvent({
                            type: "panolens-container",
                            container: this.container
                        }),
                        "panorama" === t.type && (this.addPanoramaEventListener(t),
                            this.panorama || this.setPanorama(t))
                }
                ,
                PANOLENS.Viewer.prototype.remove = function (t) {
                    t.removeEventListener && t.removeEventListener("panolens-viewer-handler", this.eventHandler.bind(this)),
                        this.scene.remove(t)
                }
                ,
                PANOLENS.Viewer.prototype.addDefaultControlBar = function (t) {
                    var e = this;
                    if (this.widget)
                        return void console.warn("Default control bar exists");
                    this.widget = new PANOLENS.Widget(this.container),
                        this.widget.addEventListener("panolens-viewer-handler", this.eventHandler.bind(this)),
                        this.widget.addControlBar(),
                        t.forEach(function (t) {
                            e.widget.addControlButton(t)
                        })
                }
                ,
                PANOLENS.Viewer.prototype.setPanorama = function (t) {
                    var e = this.panorama;
                    if ("panorama" === t.type && e !== t) {
                        this.hideInfospot();
                        var i = function () {
                            e && e.onLeave(),
                                t.removeEventListener("enter-fade-start", i)
                        };
                        t.addEventListener("enter-fade-start", i),
                            (this.panorama = t).onEnter()
                    }
                }
                ,
                PANOLENS.Viewer.prototype.eventHandler = function (t) {
                    t.method && this[t.method] && this[t.method](t.data)
                }
                ,
                PANOLENS.Viewer.prototype.dispatchEventToChildren = function (t) {
                    this.scene.traverse(function (e) {
                        e.dispatchEvent && e.dispatchEvent(t)
                    })
                }
                ,
                PANOLENS.Viewer.prototype.activateWidgetItem = function (t, e) {
                    var i, n = this.widget.mainMenu, o = n.children[0], r = n.children[1];
                    if (void 0 !== t) {
                        switch (t) {
                            case 0:
                                i = o.subMenu.children[1];
                                break;
                            case 1:
                                i = o.subMenu.children[2];
                                break;
                            default:
                                i = o.subMenu.children[1]
                        }
                        o.subMenu.setActiveItem(i),
                            o.setSelectionTitle(i.textContent)
                    }
                    if (void 0 !== e) {
                        switch (e) {
                            case PANOLENS.Modes.CARDBOARD:
                                i = r.subMenu.children[2];
                                break;
                            case PANOLENS.Modes.STEREO:
                                i = r.subMenu.children[3];
                                break;
                            default:
                                i = r.subMenu.children[1]
                        }
                        r.subMenu.setActiveItem(i),
                            r.setSelectionTitle(i.textContent)
                    }
                }
                ,
                PANOLENS.Viewer.prototype.enableEffect = function (t) {
                    if (this.mode !== t) {
                        if (t === PANOLENS.Modes.NORMAL)
                            return void this.disableEffect();
                        this.mode = t;
                        var e = this.camera.fov;
                        switch (t) {
                            case PANOLENS.Modes.CARDBOARD:
                                this.effect = this.CardboardEffect,
                                    this.enableReticleControl();
                                break;
                            case PANOLENS.Modes.STEREO:
                                this.effect = this.StereoEffect,
                                    this.enableReticleControl();
                                break;
                            default:
                                this.effect = null,
                                    this.disableReticleControl()
                        }
                        this.activateWidgetItem(void 0, this.mode),
                            this.dispatchEventToChildren({
                                type: "panolens-dual-eye-effect",
                                mode: this.mode
                            }),
                            this.camera.fov = e + .01,
                            this.effect.setSize(this.container.clientWidth, this.container.clientHeight),
                            this.render(),
                            this.camera.fov = e
                    }
                }
                ,
                PANOLENS.Viewer.prototype.disableEffect = function () {
                    this.mode !== PANOLENS.Modes.NORMAL && (this.mode = PANOLENS.Modes.NORMAL,
                        this.disableReticleControl(),
                        this.activateWidgetItem(void 0, this.mode),
                        this.dispatchEventToChildren({
                            type: "panolens-dual-eye-effect",
                            mode: this.mode
                        }),
                        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight),
                        this.render())
                }
                ,
                PANOLENS.Viewer.prototype.enableReticleControl = function () {
                    this.reticle.visible || (this.reticle.textureLoaded || this.reticle.loadTextures(),
                        this.tempEnableReticle = !0,
                        this.unregisterMouseAndTouchEvents(),
                        this.reticle.show(),
                        this.registerReticleEvent(),
                        this.updateReticleEvent())
                }
                ,
                PANOLENS.Viewer.prototype.disableReticleControl = function () {
                    this.tempEnableReticle = !1,
                        this.options.enableReticle ? this.updateReticleEvent() : (this.reticle.hide(),
                            this.unregisterReticleEvent(),
                            this.registerMouseAndTouchEvents())
                }
                ,
                PANOLENS.Viewer.prototype.enableAutoRate = function () {
                    this.options.autoRotate = !0,
                        this.OrbitControls.autoRotate = !0
                }
                ,
                PANOLENS.Viewer.prototype.disableAutoRate = function () {
                    clearTimeout(this.autoRotateRequestId),
                        this.options.autoRotate = !1,
                        this.OrbitControls.autoRotate = !1
                }
                ,
                PANOLENS.Viewer.prototype.toggleVideoPlay = function (t) {
                    this.panorama instanceof PANOLENS.VideoPanorama && this.panorama.dispatchEvent({
                        type: "video-toggle",
                        pause: t
                    })
                }
                ,
                PANOLENS.Viewer.prototype.setVideoCurrentTime = function (t) {
                    this.panorama instanceof PANOLENS.VideoPanorama && this.panorama.dispatchEvent({
                        type: "video-time",
                        percentage: t
                    })
                }
                ,
                PANOLENS.Viewer.prototype.onVideoUpdate = function (t) {
                    this.widget && this.widget.dispatchEvent({
                        type: "video-update",
                        percentage: t
                    })
                }
                ,
                PANOLENS.Viewer.prototype.addUpdateCallback = function (t) {
                    t && this.updateCallbacks.push(t)
                }
                ,
                PANOLENS.Viewer.prototype.removeUpdateCallback = function (t) {
                    var e = this.updateCallbacks.indexOf(t);
                    t && e >= 0 && this.updateCallbacks.splice(e, 1)
                }
                ,
                PANOLENS.Viewer.prototype.showVideoWidget = function () {
                    this.widget && this.widget.dispatchEvent({
                        type: "video-control-show"
                    })
                }
                ,
                PANOLENS.Viewer.prototype.hideVideoWidget = function () {
                    this.widget && this.widget.dispatchEvent({
                        type: "video-control-hide"
                    })
                }
                ,
                PANOLENS.Viewer.prototype.updateVideoPlayButton = function (t) {
                    this.widget && this.widget.videoElement && this.widget.videoElement.controlButton && this.widget.videoElement.controlButton.update(t)
                }
                ,
                PANOLENS.Viewer.prototype.addPanoramaEventListener = function (t) {
                    t.addEventListener("enter-fade-start", this.setCameraControl.bind(this)),
                        t instanceof PANOLENS.VideoPanorama && (t.addEventListener("enter-fade-start", this.showVideoWidget.bind(this)),
                            t.addEventListener("leave", function () {
                                this.panorama instanceof PANOLENS.VideoPanorama || this.hideVideoWidget.call(this)
                            }
                                .bind(this)))
                }
                ,
                PANOLENS.Viewer.prototype.setCameraControl = function () {
                    this.OrbitControls.target.copy(this.panorama.position)
                }
                ,
                PANOLENS.Viewer.prototype.getControl = function () {
                    return this.control
                }
                ,
                PANOLENS.Viewer.prototype.getScene = function () {
                    return this.scene
                }
                ,
                PANOLENS.Viewer.prototype.getCamera = function () {
                    return this.camera
                }
                ,
                PANOLENS.Viewer.prototype.getRenderer = function () {
                    return this.renderer
                }
                ,
                PANOLENS.Viewer.prototype.getContainer = function () {
                    return this.container
                }
                ,
                PANOLENS.Viewer.prototype.getControlName = function () {
                    return this.control.name
                }
                ,
                PANOLENS.Viewer.prototype.getNextControlName = function () {
                    return this.controls[this.getNextControlIndex()].name
                }
                ,
                PANOLENS.Viewer.prototype.getNextControlIndex = function () {
                    var t, e, i;
                    return t = this.controls,
                        e = this.control,
                        i = t.indexOf(e) + 1,
                        i >= t.length ? 0 : i
                }
                ,
                PANOLENS.Viewer.prototype.setCameraFov = function (t) {
                    this.camera.fov = t,
                        this.camera.updateProjectionMatrix()
                }
                ,
                PANOLENS.Viewer.prototype.enableControl = function (t) {
                    switch (t = t >= 0 && t < this.controls.length ? t : 0,
                    this.control.enabled = !1,
                    this.control = this.controls[t],
                    this.control.enabled = !0,
                    t) {
                        case PANOLENS.Controls.ORBIT:
                            this.camera.position.copy(this.panorama.position),
                                this.camera.position.z += 1;
                            break;
                        case PANOLENS.Controls.DEVICEORIENTATION:
                            this.camera.position.copy(this.panorama.position)
                    }
                    this.control.update(),
                        this.activateWidgetItem(t, void 0)
                }
                ,
                PANOLENS.Viewer.prototype.disableControl = function () {
                    this.control.enabled = !1
                }
                ,
                PANOLENS.Viewer.prototype.toggleNextControl = function () {
                    this.enableControl(this.getNextControlIndex())
                }
                ,
                PANOLENS.Viewer.prototype.getScreenVector = function (t) {
                    var e = t.clone()
                        , i = this.container.clientWidth / 2
                        , n = this.container.clientHeight / 2;
                    return e.project(this.camera),
                        e.x = e.x * i + i,
                        e.y = -e.y * n + n,
                        e.z = 0,
                        e
                }
                ,
                PANOLENS.Viewer.prototype.checkSpriteInViewport = function (t) {
                    return this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld),
                        this.cameraViewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse),
                        this.cameraFrustum.setFromMatrix(this.cameraViewProjectionMatrix),
                        t.visible && this.cameraFrustum.intersectsSprite(t)
                }
                ,
                PANOLENS.Viewer.prototype.reverseDraggingDirection = function () {
                    this.OrbitControls.rotateSpeed *= -1,
                        this.OrbitControls.momentumScalingFactor *= -1
                }
                ,
                PANOLENS.Viewer.prototype.addReticle = function () {
                    this.reticle = new PANOLENS.Reticle(16777215, this.options.autoReticleSelect, PANOLENS.DataImage.ReticleIdle, PANOLENS.DataImage.ReticleDwell, this.options.dwellTime, 45),
                        this.reticle.position.z = -10,
                        this.camera.add(this.reticle),
                        this.scene.add(this.camera)
                }
                ,
                PANOLENS.Viewer.prototype.tweenControlCenter = function (t, e, i) {
                    if (this.control === this.OrbitControls) {
                        t instanceof Array && (e = t[1],
                            i = t[2],
                            t = t[0]),
                            e = void 0 !== e ? e : 1e3,
                            i = i || TWEEN.Easing.Exponential.Out;
                        var n, o, r, a, s, h, c, l, u, d;
                        n = this,
                            a = this.camera.getWorldDirection(),
                            s = a.clone(),
                            l = this.panorama.getWorldPosition().sub(this.camera.getWorldPosition()),
                            h = t.clone(),
                            h.x *= -1,
                            h.add(l).normalize(),
                            c = h.clone(),
                            a.y = 0,
                            h.y = 0,
                            o = Math.atan2(h.z, h.x) - Math.atan2(a.z, a.x),
                            o = o > Math.PI ? o - 2 * Math.PI : o,
                            o = o < -Math.PI ? o + 2 * Math.PI : o,
                            r = Math.abs(s.angleTo(a) + (s.y * c.y <= 0 ? c.angleTo(h) : -c.angleTo(h))),
                            r *= c.y < s.y ? 1 : -1,
                            u = {
                                left: 0,
                                up: 0
                            },
                            d = {
                                left: 0,
                                up: 0
                            },
                            this.tweenLeftAnimation.stop(),
                            this.tweenUpAnimation.stop(),
                            this.tweenLeftAnimation = new TWEEN.Tween(u).to({
                                left: o
                            }, e).easing(i).onUpdate(function () {
                                n.control.rotateLeft(this.left - d.left),
                                    d.left = this.left
                            }).start(),
                            this.tweenUpAnimation = new TWEEN.Tween(u).to({
                                up: r
                            }, e).easing(i).onUpdate(function () {
                                n.control.rotateUp(this.up - d.up),
                                    d.up = this.up
                            }).start()
                    }
                }
                ,
                PANOLENS.Viewer.prototype.tweenControlCenterByObject = function (t, e, i) {
                    var n = !1;
                    if (t.traverseAncestors(function (t) {
                        t.scalePlaceHolder && (n = !0)
                    }),
                        n) {
                        var o = new THREE.Vector3(-1, 1, 1);
                        this.tweenControlCenter(t.getWorldPosition().multiply(o), e, i)
                    } else
                        this.tweenControlCenter(t.getWorldPosition(), e, i)
                }
                ,
                PANOLENS.Viewer.prototype.onWindowResize = function (t, e) {
                    var i, n, o;
                    if (o = this.container.classList.contains("panolens-container") || this.container.isFullscreen,
                        void 0 !== t && void 0 !== e)
                        i = t,
                            n = e,
                            this.container._width = t,
                            this.container._height = e;
                    else {
                        var r, a;
                        r = PANOLENS.Utils.isAndroid ? Math.min(document.documentElement.clientWidth, window.innerWidth || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            a = PANOLENS.Utils.isAndroid ? Math.min(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                            i = o ? r : this.container.clientWidth,
                            n = o ? a : this.container.clientHeight,
                            this.container._width = i,
                            this.container._height = n
                    }
                    this.camera.aspect = i / n,
                        this.camera.updateProjectionMatrix(),
                        this.renderer.setSize(i, n),
                        (this.options.enableReticle || this.tempEnableReticle) && this.updateReticleEvent(),
                        this.dispatchEvent({
                            type: "window-resize",
                            width: i,
                            height: n
                        }),
                        this.scene.traverse(function (t) {
                            t.dispatchEvent && t.dispatchEvent({
                                type: "window-resize",
                                width: i,
                                height: n
                            })
                        })
                }
                ,
                PANOLENS.Viewer.prototype.addOutputElement = function () {
                    var t = document.createElement("div");
                    t.style.position = "absolute",
                        t.style.right = "10px",
                        t.style.top = "10px",
                        t.style.color = "#fff",
                        this.container.appendChild(t),
                        this.outputDivElement = t
                }
                ,
                PANOLENS.Viewer.prototype.outputInfospotPosition = function () {
                    var t, e, i, n;
                    if (t = this.raycaster.intersectObject(this.panorama, !0),
                        t.length > 0) {
                        if (e = t[0].point,
                            i = this.panorama.getWorldPosition(),
                            n = new THREE.Vector3(-(e.x - i.x).toFixed(2), (e.y - i.y).toFixed(2), (e.z - i.z).toFixed(2)),
                            0 === n.length())
                            return;
                        switch (this.options.output) {
                            case "console":
                                console.info(n.x + ", " + n.y + ", " + n.z);
                                break;
                            case "overlay":
                                this.outputDivElement.textContent = n.x + ", " + n.y + ", " + n.z
                        }
                    }
                }
                ,
                PANOLENS.Viewer.prototype.onMouseDown = function (t) {
                    t.preventDefault(),
                        this.userMouse.x = t.clientX >= 0 ? t.clientX : t.touches[0].clientX,
                        this.userMouse.y = t.clientY >= 0 ? t.clientY : t.touches[0].clientY,
                        this.userMouse.type = "mousedown",
                        this.onTap(t)
                }
                ,
                PANOLENS.Viewer.prototype.onMouseMove = function (t) {
                    t.preventDefault(),
                        this.userMouse.type = "mousemove",
                        this.onTap(t)
                }
                ,
                PANOLENS.Viewer.prototype.onMouseUp = function (t) {
                    var e, i = !1;
                    this.userMouse.type = "mouseup",
                        e = this.userMouse.x >= t.clientX - this.options.clickTolerance && this.userMouse.x <= t.clientX + this.options.clickTolerance && this.userMouse.y >= t.clientY - this.options.clickTolerance && this.userMouse.y <= t.clientY + this.options.clickTolerance || t.changedTouches && this.userMouse.x >= t.changedTouches[0].clientX - this.options.clickTolerance && this.userMouse.x <= t.changedTouches[0].clientX + this.options.clickTolerance && this.userMouse.y >= t.changedTouches[0].clientY - this.options.clickTolerance && this.userMouse.y <= t.changedTouches[0].clientY + this.options.clickTolerance ? "click" : void 0,
                        t && t.target && !t.target.classList.contains("panolens-canvas") || (t.preventDefault(),
                            i = t.changedTouches && 1 === t.changedTouches.length ? this.onTap({
                                clientX: t.changedTouches[0].clientX,
                                clientY: t.changedTouches[0].clientY
                            }, e) : this.onTap(t, e),
                            this.userMouse.type = "none",
                            i || "click" === e && (this.options.autoHideInfospot && this.panorama && this.panorama.toggleInfospotVisibility(),
                                this.options.autoHideControlBar && this.toggleControlBar()))
                }
                ,
                PANOLENS.Viewer.prototype.onTap = function (t, e) {
                    var i, n, o, r = this.container.getBoundingClientRect();
                    if (this.raycasterPoint.x = (t.clientX - r.left) / this.container.clientWidth * 2 - 1,
                        this.raycasterPoint.y = -(t.clientY - r.top) / this.container.clientHeight * 2 + 1,
                        this.raycaster.setFromCamera(this.raycasterPoint, this.camera),
                        this.panorama) {
                        if (("mousedown" !== t.type && PANOLENS.Utils.checkTouchSupported() || this.OUTPUT_INFOSPOT) && this.outputInfospotPosition(),
                            i = this.raycaster.intersectObjects(this.panorama.children, !0),
                            n = this.getConvertedIntersect(i),
                            o = i.length > 0 ? i[0].object : o,
                            "mouseup" === this.userMouse.type && (n && this.pressEntityObject === n && this.pressEntityObject.dispatchEvent && this.pressEntityObject.dispatchEvent({
                                type: "pressstop-entity",
                                mouseEvent: t
                            }),
                                this.pressEntityObject = void 0),
                            "mouseup" === this.userMouse.type && (o && this.pressObject === o && this.pressObject.dispatchEvent && this.pressObject.dispatchEvent({
                                type: "pressstop",
                                mouseEvent: t
                            }),
                                this.pressObject = void 0),
                            "click" === e ? (this.panorama.dispatchEvent({
                                type: "click",
                                intersects: i,
                                mouseEvent: t
                            }),
                                n && n.dispatchEvent && n.dispatchEvent({
                                    type: "click-entity",
                                    mouseEvent: t
                                }),
                                o && o.dispatchEvent && o.dispatchEvent({
                                    type: "click",
                                    mouseEvent: t
                                })) : (this.panorama.dispatchEvent({
                                    type: "hover",
                                    intersects: i,
                                    mouseEvent: t
                                }),
                                    (this.hoverObject && i.length > 0 && this.hoverObject !== n || this.hoverObject && 0 === i.length) && (this.hoverObject.dispatchEvent && (this.hoverObject.dispatchEvent({
                                        type: "hoverleave",
                                        mouseEvent: t
                                    }),
                                        this.reticle.cancelDwelling()),
                                        this.hoverObject = void 0),
                                    n && i.length > 0 && (this.hoverObject !== n && (this.hoverObject = n,
                                        this.hoverObject.dispatchEvent && (this.hoverObject.dispatchEvent({
                                            type: "hoverenter",
                                            mouseEvent: t
                                        }),
                                            (this.options.autoReticleSelect && this.options.enableReticle || this.tempEnableReticle) && this.reticle.startDwelling(this.onTap.bind(this, t, "click")))),
                                        "mousedown" === this.userMouse.type && this.pressEntityObject != n && (this.pressEntityObject = n,
                                            this.pressEntityObject.dispatchEvent && this.pressEntityObject.dispatchEvent({
                                                type: "pressstart-entity",
                                                mouseEvent: t
                                            })),
                                        "mousedown" === this.userMouse.type && this.pressObject != o && (this.pressObject = o,
                                            this.pressObject.dispatchEvent && this.pressObject.dispatchEvent({
                                                type: "pressstart",
                                                mouseEvent: t
                                            })),
                                        ("mousemove" === this.userMouse.type || this.options.enableReticle) && (o && o.dispatchEvent && o.dispatchEvent({
                                            type: "hover",
                                            mouseEvent: t
                                        }),
                                            this.pressEntityObject && this.pressEntityObject.dispatchEvent && this.pressEntityObject.dispatchEvent({
                                                type: "pressmove-entity",
                                                mouseEvent: t
                                            }),
                                            this.pressObject && this.pressObject.dispatchEvent && this.pressObject.dispatchEvent({
                                                type: "pressmove",
                                                mouseEvent: t
                                            }))),
                                    !n && this.pressEntityObject && this.pressEntityObject.dispatchEvent && (this.pressEntityObject.dispatchEvent({
                                        type: "pressstop-entity",
                                        mouseEvent: t
                                    }),
                                        this.pressEntityObject = void 0),
                                    !o && this.pressObject && this.pressObject.dispatchEvent && (this.pressObject.dispatchEvent({
                                        type: "pressstop",
                                        mouseEvent: t
                                    }),
                                        this.pressObject = void 0)),
                            o && o instanceof PANOLENS.Infospot) {
                            if (this.infospot = o,
                                "click" === e)
                                return !0
                        } else
                            this.infospot && this.hideInfospot();
                        this.options.autoRotate && "mousemove" !== this.userMouse.type && (clearTimeout(this.autoRotateRequestId),
                            this.control === this.OrbitControls && (this.OrbitControls.autoRotate = !1,
                                this.autoRotateRequestId = window.setTimeout(this.enableAutoRate.bind(this), this.options.autoRotateActivationDuration)))
                    }
                }
                ,
                PANOLENS.Viewer.prototype.getConvertedIntersect = function (t) {
                    for (var e, i = 0; i < t.length; i++)
                        if (t[i].distance >= 0 && t[i].object && !t[i].object.passThrough) {
                            if (t[i].object.entity && t[i].object.entity.passThrough)
                                continue;
                            if (t[i].object.entity && !t[i].object.entity.passThrough) {
                                e = t[i].object.entity;
                                break
                            }
                            e = t[i].object;
                            break
                        }
                    return e
                }
                ,
                PANOLENS.Viewer.prototype.hideInfospot = function (t) {
                    this.infospot && (this.infospot.onHoverEnd(),
                        this.infospot = void 0)
                }
                ,
                PANOLENS.Viewer.prototype.toggleControlBar = function () {
                    this.widget && this.widget.dispatchEvent({
                        type: "control-bar-toggle"
                    })
                }
                ,
                PANOLENS.Viewer.prototype.onKeyDown = function (t) {
                    this.options.output && "none" !== this.options.output && "Control" === t.key && (this.OUTPUT_INFOSPOT = !0)
                }
                ,
                PANOLENS.Viewer.prototype.onKeyUp = function (t) {
                    this.OUTPUT_INFOSPOT = !1
                }
                ,
                PANOLENS.Viewer.prototype.update = function () {
                    TWEEN.update(),
                        this.updateCallbacks.forEach(function (t) {
                            t()
                        }),
                        this.control.update(),
                        this.scene.traverse(function (t) {
                            if (t instanceof PANOLENS.Infospot && t.element && (this.hoverObject === t || "none" !== t.element.style.display || t.element.left && "none" !== t.element.left.style.display || t.element.right && "none" !== t.element.right.style.display))
                                if (this.checkSpriteInViewport(t)) {
                                    var e = this.getScreenVector(t.getWorldPosition());
                                    t.translateElement(e.x, e.y)
                                } else
                                    t.onDismiss()
                        }
                            .bind(this))
                }
                ,
                PANOLENS.Viewer.prototype.render = function () {
                    this.mode === PANOLENS.Modes.CARDBOARD || this.mode === PANOLENS.Modes.STEREO ? this.effect.render(this.scene, this.camera) : this.renderer.render(this.scene, this.camera)
                }
                ,
                PANOLENS.Viewer.prototype.animate = function () {
                    this.requestAnimationId = window.requestAnimationFrame(this.animate.bind(this)),
                        this.onChange()
                }
                ,
                PANOLENS.Viewer.prototype.onChange = function () {
                    this.update(),
                        this.render()
                }
                ,
                PANOLENS.Viewer.prototype.registerMouseAndTouchEvents = function () {
                    this.container.addEventListener("mousedown", this.HANDLER_MOUSE_DOWN, !1),
                        this.container.addEventListener("mousemove", this.HANDLER_MOUSE_MOVE, !1),
                        this.container.addEventListener("mouseup", this.HANDLER_MOUSE_UP, !1),
                        this.container.addEventListener("touchstart", this.HANDLER_MOUSE_DOWN, !1),
                        this.container.addEventListener("touchend", this.HANDLER_MOUSE_UP, !1)
                }
                ,
                PANOLENS.Viewer.prototype.unregisterMouseAndTouchEvents = function () {
                    this.container.removeEventListener("mousedown", this.HANDLER_MOUSE_DOWN, !1),
                        this.container.removeEventListener("mousemove", this.HANDLER_MOUSE_MOVE, !1),
                        this.container.removeEventListener("mouseup", this.HANDLER_MOUSE_UP, !1),
                        this.container.removeEventListener("touchstart", this.HANDLER_MOUSE_DOWN, !1),
                        this.container.removeEventListener("touchend", this.HANDLER_MOUSE_UP, !1)
                }
                ,
                PANOLENS.Viewer.prototype.registerReticleEvent = function () {
                    this.addUpdateCallback(this.HANDLER_TAP)
                }
                ,
                PANOLENS.Viewer.prototype.unregisterReticleEvent = function () {
                    this.removeUpdateCallback(this.HANDLER_TAP)
                }
                ,
                PANOLENS.Viewer.prototype.updateReticleEvent = function () {
                    var t, e;
                    t = this.container.clientWidth / 2 + this.container.offsetLeft,
                        e = this.container.clientHeight / 2,
                        this.removeUpdateCallback(this.HANDLER_TAP),
                        this.HANDLER_TAP = this.onTap.bind(this, {
                            clientX: t,
                            clientY: e
                        }),
                        this.addUpdateCallback(this.HANDLER_TAP)
                }
                ,
                PANOLENS.Viewer.prototype.registerEventListeners = function () {
                    window.addEventListener("resize", this.HANDLER_WINDOW_RESIZE, !0),
                        window.addEventListener("keydown", this.HANDLER_KEY_DOWN, !0),
                        window.addEventListener("keyup", this.HANDLER_KEY_UP, !0)
                }
                ,
                PANOLENS.Viewer.prototype.unregisterEventListeners = function () {
                    window.removeEventListener("resize", this.HANDLER_WINDOW_RESIZE, !0),
                        window.removeEventListener("keydown", this.HANDLER_KEY_DOWN, !0),
                        window.removeEventListener("keyup", this.HANDLER_KEY_UP, !0)
                }
                ,
                PANOLENS.Viewer.prototype.dispose = function () {
                    function t(e) {
                        for (var i = e.children.length - 1; i >= 0; i--)
                            t(e.children[i]),
                                e.remove(e.children[i]);
                        e instanceof PANOLENS.Infospot && e.dispose(),
                            e.geometry && e.geometry.dispose(),
                            e.material && e.material.dispose()
                    }
                    this.unregisterEventListeners(),
                        t(this.scene),
                        this.widget && (this.widget.dispose(),
                            this.widget = null),
                        THREE.Cache && THREE.Cache.enabled && THREE.Cache.clear()
                }
                ,
                PANOLENS.Viewer.prototype.destory = function () {
                    this.dispose(),
                        this.render(),
                        window.cancelAnimationFrame(this.requestAnimationId)
                }
                ,
                PANOLENS.Viewer.prototype.onPanoramaDispose = function (t) {
                    t instanceof PANOLENS.VideoPanorama && this.hideVideoWidget(),
                        t === this.panorama && (this.panorama = null)
                }
                ,
                PANOLENS.Viewer.prototype.loadAsyncRequest = function (t, e) {
                    var i = new XMLHttpRequest;
                    i.onloadend = function (t) {
                        e && e(t)
                    }
                        ,
                        i.open("GET", t, !0),
                        i.send(null)
                }
                ,
                PANOLENS.Viewer.prototype.addViewIndicator = function () {
                    function t(t) {
                        if (0 !== t.loaded) {
                            var i = t.target.responseXML.documentElement;
                            i.style.width = e.viewIndicatorSize + "px",
                                i.style.height = e.viewIndicatorSize + "px",
                                i.style.position = "absolute",
                                i.style.top = "10px",
                                i.style.left = "10px",
                                i.style.opacity = "0.5",
                                i.style.cursor = "pointer",
                                i.id = "panolens-view-indicator-container",
                                e.container.appendChild(i);
                            var n = i.querySelector("#indicator")
                                , o = function () {
                                    e.radius = .225 * e.viewIndicatorSize,
                                        e.currentPanoAngle = e.camera.rotation.y - THREE.Math.degToRad(90),
                                        e.fovAngle = THREE.Math.degToRad(e.camera.fov),
                                        e.leftAngle = -e.currentPanoAngle - e.fovAngle / 2,
                                        e.rightAngle = -e.currentPanoAngle + e.fovAngle / 2,
                                        e.leftX = e.radius * Math.cos(e.leftAngle),
                                        e.leftY = e.radius * Math.sin(e.leftAngle),
                                        e.rightX = e.radius * Math.cos(e.rightAngle),
                                        e.rightY = e.radius * Math.sin(e.rightAngle),
                                        e.indicatorD = "M " + e.leftX + " " + e.leftY + " A " + e.radius + " " + e.radius + " 0 0 1 " + e.rightX + " " + e.rightY,
                                        e.leftX && e.leftY && e.rightX && e.rightY && e.radius && n.setAttribute("d", e.indicatorD)
                                };
                            e.addUpdateCallback(o);
                            var r = function () {
                                this.style.opacity = "1"
                            }
                                , a = function () {
                                    this.style.opacity = "0.5"
                                };
                            i.addEventListener("mouseenter", r),
                                i.addEventListener("mouseleave", a)
                        }
                    }
                    var e = this;
                    this.loadAsyncRequest(PANOLENS.DataImage.ViewIndicator, t)
                }
                ,
                PANOLENS.Viewer.prototype.appendControlItem = function (t) {
                    var e = this.widget.createCustomItem(t);
                    return "video" === t.group ? this.widget.videoElement.appendChild(e) : this.widget.barElement.appendChild(e),
                        e
                }
                ,
                PANOLENS.Viewer.prototype.clearAllCache = function () {
                    THREE.Cache.clear()
                }
        }(),
        function t(e, i, n) {
            function o(a, s) {
                if (!i[a]) {
                    if (!e[a]) {
                        var h = "function" == typeof require && require;
                        if (!s && h)
                            return h(a, !0);
                        if (r)
                            return r(a, !0);
                        var c = new Error("Cannot find module '" + a + "'");
                        throw c.code = "MODULE_NOT_FOUND",
                        c
                    }
                    var l = i[a] = {
                        exports: {}
                    };
                    e[a][0].call(l.exports, function (t) {
                        var i = e[a][1][t];
                        return o(i || t)
                    }, l, l.exports, t, e, i, n)
                }
                return i[a].exports
            }
            for (var r = "function" == typeof require && require, a = 0; a < n.length; a++)
                o(n[a]);
            return o
        }({
            1: [function (t, e, i) {
                function n(t) {
                    u.call(this),
                        "string" == typeof t && (t = {
                            text: t
                        }),
                        this._opt = h({}, t),
                        t && this.update(t)
                }
                var o = t("layout-bmfont-text")
                    , r = t("inherits")
                    , a = t("quad-indices")
                    , s = t("three-buffer-vertex-data")
                    , h = t("object-assign")
                    , c = t("./lib/vertices")
                    , l = t("./lib/utils")
                    , u = THREE.BufferGeometry;
                e.exports = function (t) {
                    return new n(t)
                }
                    ,
                    r(n, u),
                    n.prototype.update = function (t) {
                        if ("string" == typeof t && (t = {
                            text: t
                        }),
                            t = h({}, this._opt, t),
                            !t.font)
                            throw new TypeError("must specify a { font } in options");
                        this.layout = o(t);
                        var e = !1 !== t.flipY
                            , i = t.font
                            , n = i.common.scaleW
                            , r = i.common.scaleH
                            , l = this.layout.glyphs.filter(function (t) {
                                var e = t.data;
                                return e.width * e.height > 0
                            });
                        this.visibleGlyphs = l;
                        var u = c.positions(l)
                            , d = c.uvs(l, n, r, e)
                            , p = a({
                                clockwise: !0,
                                type: "uint16",
                                count: l.length
                            });
                        if (s.index(this, p, 1, "uint16"),
                            s.attr(this, "position", u, 2),
                            s.attr(this, "uv", d, 2),
                            !t.multipage && "page" in this.attributes)
                            this.removeAttribute("page");
                        else if (t.multipage) {
                            var f = c.pages(l);
                            s.attr(this, "page", f, 1)
                        }
                    }
                    ,
                    n.prototype.computeBoundingSphere = function () {
                        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
                        var t = this.attributes.position.array
                            , e = this.attributes.position.itemSize;
                        if (!t || !e || t.length < 2)
                            return this.boundingSphere.radius = 0,
                                void this.boundingSphere.center.set(0, 0, 0);
                        l.computeSphere(t, this.boundingSphere),
                            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
                    }
                    ,
                    n.prototype.computeBoundingBox = function () {
                        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
                        var t = this.boundingBox
                            , e = this.attributes.position.array
                            , i = this.attributes.position.itemSize;
                        if (!e || !i || e.length < 2)
                            return void t.makeEmpty();
                        l.computeBox(e, t)
                    }
            }
                , {
                "./lib/utils": 2,
                "./lib/vertices": 3,
                inherits: 4,
                "layout-bmfont-text": 5,
                "object-assign": 26,
                "quad-indices": 27,
                "three-buffer-vertex-data": 31
            }],
            2: [function (t, e, i) {
                function n(t) {
                    var e = t.length / o;
                    r.min[0] = t[0],
                        r.min[1] = t[1],
                        r.max[0] = t[0],
                        r.max[1] = t[1];
                    for (var i = 0; i < e; i++) {
                        var n = t[i * o + 0]
                            , a = t[i * o + 1];
                        r.min[0] = Math.min(n, r.min[0]),
                            r.min[1] = Math.min(a, r.min[1]),
                            r.max[0] = Math.max(n, r.max[0]),
                            r.max[1] = Math.max(a, r.max[1])
                    }
                }
                var o = 2
                    , r = {
                        min: [0, 0],
                        max: [0, 0]
                    };
                e.exports.computeBox = function (t, e) {
                    n(t),
                        e.min.set(r.min[0], r.min[1], 0),
                        e.max.set(r.max[0], r.max[1], 0)
                }
                    ,
                    e.exports.computeSphere = function (t, e) {
                        n(t);
                        var i = r.min[0]
                            , o = r.min[1]
                            , a = r.max[0]
                            , s = r.max[1]
                            , h = a - i
                            , c = s - o
                            , l = Math.sqrt(h * h + c * c);
                        e.center.set(i + h / 2, o + c / 2, 0),
                            e.radius = l / 2
                    }
            }
                , {}],
            3: [function (t, e, i) {
                e.exports.pages = function (t) {
                    var e = new Float32Array(4 * t.length * 1)
                        , i = 0;
                    return t.forEach(function (t) {
                        var n = t.data.page || 0;
                        e[i++] = n,
                            e[i++] = n,
                            e[i++] = n,
                            e[i++] = n
                    }),
                        e
                }
                    ,
                    e.exports.uvs = function (t, e, i, n) {
                        var o = new Float32Array(4 * t.length * 2)
                            , r = 0;
                        return t.forEach(function (t) {
                            var a = t.data
                                , s = a.x + a.width
                                , h = a.y + a.height
                                , c = a.x / e
                                , l = a.y / i
                                , u = s / e
                                , d = h / i;
                            n && (l = (i - a.y) / i,
                                d = (i - h) / i),
                                o[r++] = c,
                                o[r++] = l,
                                o[r++] = c,
                                o[r++] = d,
                                o[r++] = u,
                                o[r++] = d,
                                o[r++] = u,
                                o[r++] = l
                        }),
                            o
                    }
                    ,
                    e.exports.positions = function (t) {
                        var e = new Float32Array(4 * t.length * 2)
                            , i = 0;
                        return t.forEach(function (t) {
                            var n = t.data
                                , o = t.position[0] + n.xoffset
                                , r = t.position[1] + n.yoffset
                                , a = n.width
                                , s = n.height;
                            e[i++] = o,
                                e[i++] = r,
                                e[i++] = o,
                                e[i++] = r + s,
                                e[i++] = o + a,
                                e[i++] = r + s,
                                e[i++] = o + a,
                                e[i++] = r
                        }),
                            e
                    }
            }
                , {}],
            4: [function (t, e, i) {
                "function" == typeof Object.create ? e.exports = function (t, e) {
                    t.super_ = e,
                        t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                }
                    : e.exports = function (t, e) {
                        t.super_ = e;
                        var i = function () { };
                        i.prototype = e.prototype,
                            t.prototype = new i,
                            t.prototype.constructor = t
                    }
            }
                , {}],
            5: [function (t, e, i) {
                function n(t) {
                    this.glyphs = [],
                        this._measure = this.computeMetrics.bind(this),
                        this.update(t)
                }
                function o(t) {
                    Object.defineProperty(n.prototype, t, {
                        get: r(t),
                        configurable: !0
                    })
                }
                function r(t) {
                    return new Function(["return function " + t + "() {", "  return this._" + t, "}"].join("\n"))()
                }
                function a(t, e) {
                    if (!t.chars || 0 === t.chars.length)
                        return null;
                    var i = f(t.chars, e);
                    return i >= 0 ? t.chars[i] : null
                }
                function s(t) {
                    for (var e = 0; e < m.length; e++) {
                        var i = m[e].charCodeAt(0)
                            , n = f(t.chars, i);
                        if (n >= 0)
                            return t.chars[n].height
                    }
                    return 0
                }
                function h(t) {
                    for (var e = 0; e < v.length; e++) {
                        var i = v[e].charCodeAt(0)
                            , n = f(t.chars, i);
                        if (n >= 0)
                            return t.chars[n]
                    }
                    return 0
                }
                function c(t) {
                    for (var e = 0; e < g.length; e++) {
                        var i = g[e].charCodeAt(0)
                            , n = f(t.chars, i);
                        if (n >= 0)
                            return t.chars[n].height
                    }
                    return 0
                }
                function l(t, e, i) {
                    if (!t.kernings || 0 === t.kernings.length)
                        return 0;
                    for (var n = t.kernings, o = 0; o < n.length; o++) {
                        var r = n[o];
                        if (r.first === e && r.second === i)
                            return r.amount
                    }
                    return 0
                }
                function u(t) {
                    return "center" === t ? A : "right" === t ? L : w
                }
                var d = t("word-wrapper")
                    , p = t("xtend")
                    , f = t("indexof-property")("id")
                    , E = t("as-number")
                    , m = ["x", "e", "a", "o", "n", "s", "r", "c", "u", "m", "v", "w", "z"]
                    , v = ["m", "w"]
                    , g = ["H", "I", "N", "E", "F", "K", "L", "T", "U", "V", "W", "X", "Y", "Z"]
                    , y = "\t".charCodeAt(0)
                    , N = " ".charCodeAt(0)
                    , w = 0
                    , A = 1
                    , L = 2;
                e.exports = function (t) {
                    return new n(t)
                }
                    ,
                    n.prototype.update = function (t) {
                        if (t = p({
                            measure: this._measure
                        }, t),
                            this._opt = t,
                            this._opt.tabSize = E(this._opt.tabSize, 4),
                            !t.font)
                            throw new Error("must provide a valid bitmap font");
                        var e = this.glyphs
                            , i = t.text || ""
                            , n = t.font;
                        this._setupSpaceGlyphs(n);
                        var o = d.lines(i, t)
                            , r = t.width || 0;
                        e.length = 0;
                        var a = o.reduce(function (t, e) {
                            return Math.max(t, e.width, r)
                        }, 0)
                            , h = 0
                            , f = 0
                            , m = E(t.lineHeight, n.common.lineHeight)
                            , v = n.common.base
                            , g = m - v
                            , y = t.letterSpacing || 0
                            , N = m * o.length - g
                            , w = u(this._opt.align);
                        f -= N,
                            this._width = a,
                            this._height = N,
                            this._descender = m - v,
                            this._baseline = v,
                            this._xHeight = s(n),
                            this._capHeight = c(n),
                            this._lineHeight = m,
                            this._ascender = m - g - this._xHeight;
                        var P = this;
                        o.forEach(function (t, o) {
                            for (var r, s = t.start, c = t.end, u = t.width, d = s; d < c; d++) {
                                var p = i.charCodeAt(d)
                                    , E = P.getGlyph(n, p);
                                if (E) {
                                    r && (h += l(n, r.id, E.id));
                                    var v = h;
                                    w === A ? v += (a - u) / 2 : w === L && (v += a - u),
                                        e.push({
                                            position: [v, f],
                                            data: E,
                                            index: d,
                                            line: o
                                        }),
                                        h += E.xadvance + y,
                                        r = E
                                }
                            }
                            f += m,
                                h = 0
                        }),
                            this._linesTotal = o.length
                    }
                    ,
                    n.prototype._setupSpaceGlyphs = function (t) {
                        if (this._fallbackSpaceGlyph = null,
                            this._fallbackTabGlyph = null,
                            t.chars && 0 !== t.chars.length) {
                            var e = a(t, N) || h(t) || t.chars[0]
                                , i = this._opt.tabSize * e.xadvance;
                            this._fallbackSpaceGlyph = e,
                                this._fallbackTabGlyph = p(e, {
                                    x: 0,
                                    y: 0,
                                    xadvance: i,
                                    id: y,
                                    xoffset: 0,
                                    yoffset: 0,
                                    width: 0,
                                    height: 0
                                })
                        }
                    }
                    ,
                    n.prototype.getGlyph = function (t, e) {
                        var i = a(t, e);
                        return i || (e === y ? this._fallbackTabGlyph : e === N ? this._fallbackSpaceGlyph : null)
                    }
                    ,
                    n.prototype.computeMetrics = function (t, e, i, n) {
                        var o, r, a = this._opt.letterSpacing || 0, s = this._opt.font, h = 0, c = 0, u = 0;
                        if (!s.chars || 0 === s.chars.length)
                            return {
                                start: e,
                                end: e,
                                width: 0
                            };
                        i = Math.min(t.length, i);
                        for (var d = e; d < i; d++) {
                            var p = t.charCodeAt(d)
                                , o = this.getGlyph(s, p);
                            if (o) {
                                o.xoffset;
                                h += r ? l(s, r.id, o.id) : 0;
                                var f = h + o.xadvance + a
                                    , E = h + o.width;
                                if (E >= n || f >= n)
                                    break;
                                h = f,
                                    c = E,
                                    r = o
                            }
                            u++
                        }
                        return r && (c += r.xoffset),
                            {
                                start: e,
                                end: e + u,
                                width: c
                            }
                    }
                    ,
                    ["width", "height", "descender", "ascender", "xHeight", "baseline", "capHeight", "lineHeight"].forEach(o)
            }
                , {
                "as-number": 6,
                "indexof-property": 7,
                "word-wrapper": 8,
                xtend: 9
            }],
            6: [function (t, e, i) {
                e.exports = function (t, e) {
                    return "number" == typeof t ? t : "number" == typeof e ? e : 0
                }
            }
                , {}],
            7: [function (t, e, i) {
                e.exports = function (t) {
                    if (!t || "string" != typeof t)
                        throw new Error("must specify property for indexof search");
                    return new Function("array", "value", "start", ["start = start || 0", "for (var i=start; i<array.length; i++)", '  if (array[i]["' + t + '"] === value)', "      return i", "return -1"].join("\n"))
                }
            }
                , {}],
            8: [function (t, e, i) {
                function n(t, e, i, n) {
                    var o = t.indexOf(e, i);
                    return -1 === o || o > n ? n : o
                }
                function o(t) {
                    return l.test(t)
                }
                function r(t, e, i, n, o) {
                    for (var r = [], a = i, s = i; s < n && s < e.length; s++) {
                        var c = e.charAt(s)
                            , l = h.test(c);
                        if (l || s === n - 1) {
                            var u = l ? s : s + 1
                                , d = t(e, a, u, o);
                            r.push(d),
                                a = s + 1
                        }
                    }
                    return r
                }
                function a(t, e, i, r, a, s) {
                    var h = []
                        , l = a;
                    for ("nowrap" === s && (l = Number.MAX_VALUE); i < r && i < e.length;) {
                        for (var u = n(e, c, i, r); i < u && o(e.charAt(i));)
                            i++;
                        var d = t(e, i, u, l)
                            , p = i + (d.end - d.start)
                            , f = p + c.length;
                        if (p < u) {
                            for (; p > i && !o(e.charAt(p));)
                                p--;
                            if (p === i)
                                f > i + c.length && f-- ,
                                    p = f;
                            else
                                for (f = p; p > i && o(e.charAt(p - c.length));)
                                    p--
                        }
                        if (p >= i) {
                            var E = t(e, i, p, l);
                            h.push(E)
                        }
                        i = f
                    }
                    return h
                }
                function s(t, e, i, n) {
                    return {
                        start: e,
                        end: e + Math.min(n, i - e)
                    }
                }
                var h = /\n/
                    , c = "\n"
                    , l = /\s/;
                e.exports = function (t, i) {
                    return e.exports.lines(t, i).map(function (e) {
                        return t.substring(e.start, e.end)
                    }).join("\n")
                }
                    ,
                    e.exports.lines = function (t, e) {
                        if (e = e || {},
                            0 === e.width && "nowrap" !== e.mode)
                            return [];
                        t = t || "";
                        var i = "number" == typeof e.width ? e.width : Number.MAX_VALUE
                            , n = Math.max(0, e.start || 0)
                            , o = "number" == typeof e.end ? e.end : t.length
                            , h = e.mode
                            , c = e.measure || s;
                        return "pre" === h ? r(c, t, n, o, i) : a(c, t, n, o, i, h)
                    }
            }
                , {}],
            9: [function (t, e, i) {
                function n() {
                    for (var t = {}, e = 0; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i)
                            o.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }
                e.exports = n;
                var o = Object.prototype.hasOwnProperty
            }
                , {}],
            10: [function (t, e, i) {
                (function (i) {
                    function n(t) {
                        return "[object ArrayBuffer]" === Object.prototype.toString.call(t)
                    }
                    function o(t) {
                        if (d)
                            return u(t, {
                                responseType: "arraybuffer"
                            });
                        if (void 0 === window.XMLHttpRequest)
                            throw new Error("your browser does not support XHR loading");
                        var e = new window.XMLHttpRequest;
                        return e.overrideMimeType("text/plain; charset=x-user-defined"),
                            u({
                                xhr: e
                            }, t)
                    }
                    var r = t("xhr")
                        , a = function () { }
                        , s = t("parse-bmfont-ascii")
                        , h = t("parse-bmfont-xml")
                        , c = t("parse-bmfont-binary")
                        , l = t("./lib/is-binary")
                        , u = t("xtend")
                        , d = function () {
                            return window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                        }();
                    e.exports = function (t, e) {
                        e = "function" == typeof e ? e : a,
                            "string" == typeof t ? t = {
                                uri: t
                            } : t || (t = {}),
                            t.binary && (t = o(t)),
                            r(t, function (o, r, u) {
                                if (o)
                                    return e(o);
                                if (!/^2/.test(r.statusCode))
                                    return e(new Error("http status code: " + r.statusCode));
                                if (!u)
                                    return e(new Error("no body result"));
                                var d = !1;
                                if (n(u)) {
                                    var p = new Uint8Array(u);
                                    u = new i(p, "binary")
                                }
                                l(u) && (d = !0,
                                    "string" == typeof u && (u = new i(u, "binary"))),
                                    d || (i.isBuffer(u) && (u = u.toString(t.encoding)),
                                        u = u.trim());
                                var f;
                                try {
                                    var E = r.headers["content-type"];
                                    f = d ? c(u) : /json/.test(E) || "{" === u.charAt(0) ? JSON.parse(u) : /xml/.test(E) || "<" === u.charAt(0) ? h(u) : s(u)
                                } catch (t) {
                                    e(new Error("error parsing font " + t.message)),
                                        e = a
                                }
                                e(null, f)
                            })
                    }
                }
                ).call(this, t("buffer").Buffer)
            }
                , {
                "./lib/is-binary": 11,
                buffer: 37,
                "parse-bmfont-ascii": 13,
                "parse-bmfont-binary": 14,
                "parse-bmfont-xml": 15,
                xhr: 18,
                xtend: 25
            }],
            11: [function (t, e, i) {
                (function (i) {
                    var n = t("buffer-equal")
                        , o = new i([66, 77, 70, 3]);
                    e.exports = function (t) {
                        return "string" == typeof t ? "BMF" === t.substring(0, 3) : t.length > 4 && n(t.slice(0, 4), o)
                    }
                }
                ).call(this, t("buffer").Buffer)
            }
                , {
                buffer: 37,
                "buffer-equal": 12
            }],
            12: [function (t, e, i) {
                var n = t("buffer").Buffer;
                e.exports = function (t, e) {
                    if (n.isBuffer(t) && n.isBuffer(e)) {
                        if ("function" == typeof t.equals)
                            return t.equals(e);
                        if (t.length !== e.length)
                            return !1;
                        for (var i = 0; i < t.length; i++)
                            if (t[i] !== e[i])
                                return !1;
                        return !0
                    }
                }
            }
                , {
                buffer: 37
            }],
            13: [function (t, e, i) {
                function n(t, e) {
                    if (!(t = t.replace(/\t+/g, " ").trim()))
                        return null;
                    var i = t.indexOf(" ");
                    if (-1 === i)
                        throw new Error("no named row at line " + e);
                    var n = t.substring(0, i);
                    t = t.substring(i + 1),
                        t = t.replace(/letter=[\'\"]\S+[\'\"]/gi, ""),
                        t = t.split("="),
                        t = t.map(function (t) {
                            return t.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)
                        });
                    for (var r = [], a = 0; a < t.length; a++) {
                        var s = t[a];
                        0 === a ? r.push({
                            key: s[0],
                            data: ""
                        }) : a === t.length - 1 ? r[r.length - 1].data = o(s[0]) : (r[r.length - 1].data = o(s[0]),
                            r.push({
                                key: s[1],
                                data: ""
                            }))
                    }
                    var h = {
                        key: n,
                        data: {}
                    };
                    return r.forEach(function (t) {
                        h.data[t.key] = t.data
                    }),
                        h
                }
                function o(t) {
                    return t && 0 !== t.length ? 0 === t.indexOf('"') || 0 === t.indexOf("'") ? t.substring(1, t.length - 1) : -1 !== t.indexOf(",") ? r(t) : parseInt(t, 10) : ""
                }
                function r(t) {
                    return t.split(",").map(function (t) {
                        return parseInt(t, 10)
                    })
                }
                e.exports = function (t) {
                    if (!t)
                        throw new Error("no data provided");
                    t = t.toString().trim();
                    var e = {
                        pages: [],
                        chars: [],
                        kernings: []
                    }
                        , i = t.split(/\r\n?|\n/g);
                    if (0 === i.length)
                        throw new Error("no data in BMFont file");
                    for (var o = 0; o < i.length; o++) {
                        var r = n(i[o], o);
                        if (r)
                            if ("page" === r.key) {
                                if ("number" != typeof r.data.id)
                                    throw new Error("malformed file at line " + o + " -- needs page id=N");
                                if ("string" != typeof r.data.file)
                                    throw new Error("malformed file at line " + o + ' -- needs page file="path"');
                                e.pages[r.data.id] = r.data.file
                            } else
                                "chars" === r.key || "kernings" === r.key || ("char" === r.key ? e.chars.push(r.data) : "kerning" === r.key ? e.kernings.push(r.data) : e[r.key] = r.data)
                    }
                    return e
                }
            }
                , {}],
            14: [function (t, e, i) {
                function n(t, e, i) {
                    if (i > e.length - 1)
                        return 0;
                    var n = e.readUInt8(i++)
                        , c = e.readInt32LE(i);
                    switch (i += 4,
                    n) {
                        case 1:
                            t.info = o(e, i);
                            break;
                        case 2:
                            t.common = r(e, i);
                            break;
                        case 3:
                            t.pages = a(e, i, c);
                            break;
                        case 4:
                            t.chars = s(e, i, c);
                            break;
                        case 5:
                            t.kernings = h(e, i, c)
                    }
                    return 5 + c
                }
                function o(t, e) {
                    var i = {};
                    i.size = t.readInt16LE(e);
                    var n = t.readUInt8(e + 2);
                    return i.smooth = n >> 7 & 1,
                        i.unicode = n >> 6 & 1,
                        i.italic = n >> 5 & 1,
                        i.bold = n >> 4 & 1,
                        n >> 3 & 1 && (i.fixedHeight = 1),
                        i.charset = t.readUInt8(e + 3) || "",
                        i.stretchH = t.readUInt16LE(e + 4),
                        i.aa = t.readUInt8(e + 6),
                        i.padding = [t.readInt8(e + 7), t.readInt8(e + 8), t.readInt8(e + 9), t.readInt8(e + 10)],
                        i.spacing = [t.readInt8(e + 11), t.readInt8(e + 12)],
                        i.outline = t.readUInt8(e + 13),
                        i.face = l(t, e + 14),
                        i
                }
                function r(t, e) {
                    var i = {};
                    i.lineHeight = t.readUInt16LE(e),
                        i.base = t.readUInt16LE(e + 2),
                        i.scaleW = t.readUInt16LE(e + 4),
                        i.scaleH = t.readUInt16LE(e + 6),
                        i.pages = t.readUInt16LE(e + 8);
                    t.readUInt8(e + 10);
                    return i.packed = 0,
                        i.alphaChnl = t.readUInt8(e + 11),
                        i.redChnl = t.readUInt8(e + 12),
                        i.greenChnl = t.readUInt8(e + 13),
                        i.blueChnl = t.readUInt8(e + 14),
                        i
                }
                function a(t, e, i) {
                    for (var n = [], o = c(t, e), r = o.length + 1, a = i / r, s = 0; s < a; s++)
                        n[s] = t.slice(e, e + o.length).toString("utf8"),
                            e += r;
                    return n
                }
                function s(t, e, i) {
                    for (var n = [], o = i / 20, r = 0; r < o; r++) {
                        var a = {}
                            , s = 20 * r;
                        a.id = t.readUInt32LE(e + 0 + s),
                            a.x = t.readUInt16LE(e + 4 + s),
                            a.y = t.readUInt16LE(e + 6 + s),
                            a.width = t.readUInt16LE(e + 8 + s),
                            a.height = t.readUInt16LE(e + 10 + s),
                            a.xoffset = t.readInt16LE(e + 12 + s),
                            a.yoffset = t.readInt16LE(e + 14 + s),
                            a.xadvance = t.readInt16LE(e + 16 + s),
                            a.page = t.readUInt8(e + 18 + s),
                            a.chnl = t.readUInt8(e + 19 + s),
                            n[r] = a
                    }
                    return n
                }
                function h(t, e, i) {
                    for (var n = [], o = i / 10, r = 0; r < o; r++) {
                        var a = {}
                            , s = 10 * r;
                        a.first = t.readUInt32LE(e + 0 + s),
                            a.second = t.readUInt32LE(e + 4 + s),
                            a.amount = t.readInt16LE(e + 8 + s),
                            n[r] = a
                    }
                    return n
                }
                function c(t, e) {
                    for (var i = e; i < t.length && 0 !== t[i]; i++)
                        ;
                    return t.slice(e, i)
                }
                function l(t, e) {
                    return c(t, e).toString("utf8")
                }
                var u = [66, 77, 70];
                e.exports = function (t) {
                    if (t.length < 6)
                        throw new Error("invalid buffer length for BMFont");
                    if (!u.every(function (e, i) {
                        return t.readUInt8(i) === e
                    }))
                        throw new Error("BMFont missing BMF byte header");
                    var e = 3;
                    if (t.readUInt8(e++) > 3)
                        throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");
                    for (var i = {
                        kernings: [],
                        chars: []
                    }, o = 0; o < 5; o++)
                        e += n(i, t, e);
                    return i
                }
            }
                , {}],
            15: [function (t, e, i) {
                function n(t) {
                    return o(t).reduce(function (t, e) {
                        return t[r(e.nodeName)] = e.nodeValue,
                            t
                    }, {})
                }
                function o(t) {
                    for (var e = [], i = 0; i < t.attributes.length; i++)
                        e.push(t.attributes[i]);
                    return e
                }
                function r(t) {
                    return h[t.toLowerCase()] || t
                }
                var a = t("./parse-attribs")
                    , s = t("xml-parse-from-string")
                    , h = {
                        scaleh: "scaleH",
                        scalew: "scaleW",
                        stretchh: "stretchH",
                        lineheight: "lineHeight",
                        alphachnl: "alphaChnl",
                        redchnl: "redChnl",
                        greenchnl: "greenChnl",
                        bluechnl: "blueChnl"
                    };
                e.exports = function (t) {
                    t = t.toString();
                    var e = s(t)
                        , i = {
                            pages: [],
                            chars: [],
                            kernings: []
                        };
                    ["info", "common"].forEach(function (t) {
                        var o = e.getElementsByTagName(t)[0];
                        o && (i[t] = a(n(o)))
                    });
                    var o = e.getElementsByTagName("pages")[0];
                    if (!o)
                        throw new Error("malformed file -- no <pages> element");
                    for (var r = o.getElementsByTagName("page"), h = 0; h < r.length; h++) {
                        var c = r[h]
                            , l = parseInt(c.getAttribute("id"), 10)
                            , u = c.getAttribute("file");
                        if (isNaN(l))
                            throw new Error('malformed file -- page "id" attribute is NaN');
                        if (!u)
                            throw new Error('malformed file -- needs page "file" attribute');
                        i.pages[parseInt(l, 10)] = u
                    }
                    return ["chars", "kernings"].forEach(function (t) {
                        var o = e.getElementsByTagName(t)[0];
                        if (o)
                            for (var r = t.substring(0, t.length - 1), s = o.getElementsByTagName(r), h = 0; h < s.length; h++) {
                                var c = s[h];
                                i[t].push(a(n(c)))
                            }
                    }),
                        i
                }
            }
                , {
                "./parse-attribs": 16,
                "xml-parse-from-string": 17
            }],
            16: [function (t, e, i) {
                function n(t) {
                    return t.split(",").map(function (t) {
                        return parseInt(t, 10)
                    })
                }
                e.exports = function (t) {
                    "chasrset" in t && (t.charset = t.chasrset,
                        delete t.chasrset);
                    for (var e in t)
                        "face" !== e && "charset" !== e && (t[e] = "padding" === e || "spacing" === e ? n(t[e]) : parseInt(t[e], 10));
                    return t
                }
            }
                , {}],
            17: [function (t, e, i) {
                e.exports = function () {
                    return void 0 !== window.DOMParser ? function (t) {
                        return (new window.DOMParser).parseFromString(t, "application/xml")
                    }
                        : void 0 !== window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM") ? function (t) {
                            var e = new window.ActiveXObject("Microsoft.XMLDOM");
                            return e.async = "false",
                                e.loadXML(t),
                                e
                        }
                            : function (t) {
                                var e = document.createElement("div");
                                return e.innerHTML = t,
                                    e
                            }
                }()
            }
                , {}],
            18: [function (t, e, i) {
                "use strict";
                function n(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e))
                            return !1;
                    return !0
                }
                function o(t, e, i) {
                    var n = t;
                    return l(e) ? (i = e,
                        "string" == typeof t && (n = {
                            uri: t
                        })) : n = d(e, {
                            uri: t
                        }),
                        n.callback = i,
                        n
                }
                function r(t, e, i) {
                    return e = o(t, e, i),
                        a(e)
                }
                function a(t) {
                    function e() {
                        4 === l.readyState && a()
                    }
                    function i() {
                        var t = void 0;
                        if (l.response ? t = l.response : "text" !== l.responseType && l.responseType || (t = l.responseText || l.responseXML),
                            N)
                            try {
                                t = JSON.parse(t)
                            } catch (t) { }
                        return t
                    }
                    function o(t) {
                        clearTimeout(f),
                            t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))),
                            t.statusCode = 0,
                            s(t, h)
                    }
                    function a() {
                        if (!p) {
                            var e;
                            clearTimeout(f),
                                e = t.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                            var n = h
                                , o = null;
                            0 !== e ? (n = {
                                body: i(),
                                statusCode: e,
                                method: m,
                                headers: {},
                                url: E,
                                rawRequest: l
                            },
                                l.getAllResponseHeaders && (n.headers = u(l.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"),
                                s(o, n, n.body)
                        }
                    }
                    var s = t.callback;
                    if (void 0 === s)
                        throw new Error("callback argument missing");
                    s = c(s);
                    var h = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: m,
                        url: E,
                        rawRequest: l
                    }
                        , l = t.xhr || null;
                    l || (l = t.cors || t.useXDR ? new r.XDomainRequest : new r.XMLHttpRequest);
                    var d, p, f, E = l.url = t.uri || t.url, m = l.method = t.method || "GET", v = t.body || t.data || null, g = l.headers = t.headers || {}, y = !!t.sync, N = !1;
                    if ("json" in t && (N = !0,
                        g.accept || g.Accept || (g.Accept = "application/json"),
                        "GET" !== m && "HEAD" !== m && (g["content-type"] || g["Content-Type"] || (g["Content-Type"] = "application/json"),
                            v = JSON.stringify(t.json))),
                        l.onreadystatechange = e,
                        l.onload = a,
                        l.onerror = o,
                        l.onprogress = function () { }
                        ,
                        l.ontimeout = o,
                        l.open(m, E, !y, t.username, t.password),
                        y || (l.withCredentials = !!t.withCredentials),
                        !y && t.timeout > 0 && (f = setTimeout(function () {
                            p = !0,
                                l.abort("timeout");
                            var t = new Error("XMLHttpRequest timeout");
                            t.code = "ETIMEDOUT",
                                o(t)
                        }, t.timeout)),
                        l.setRequestHeader)
                        for (d in g)
                            g.hasOwnProperty(d) && l.setRequestHeader(d, g[d]);
                    else if (t.headers && !n(t.headers))
                        throw new Error("Headers cannot be set on an XDomainRequest object");
                    return "responseType" in t && (l.responseType = t.responseType),
                        "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(l),
                        l.send(v),
                        l
                }
                function s() { }
                var h = t("global/window")
                    , c = t("once")
                    , l = t("is-function")
                    , u = t("parse-headers")
                    , d = t("xtend");
                e.exports = r,
                    r.XMLHttpRequest = h.XMLHttpRequest || s,
                    r.XDomainRequest = "withCredentials" in new r.XMLHttpRequest ? r.XMLHttpRequest : h.XDomainRequest,
                    function (t, e) {
                        for (var i = 0; i < t.length; i++)
                            e(t[i])
                    }(["get", "put", "post", "patch", "head", "delete"], function (t) {
                        r["delete" === t ? "del" : t] = function (e, i, n) {
                            return i = o(e, i, n),
                                i.method = t.toUpperCase(),
                                a(i)
                        }
                    })
            }
                , {
                "global/window": 19,
                "is-function": 20,
                once: 21,
                "parse-headers": 24,
                xtend: 25
            }],
            19: [function (t, e, i) {
                (function (t) {
                    "undefined" != typeof window ? e.exports = window : void 0 !== t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
                }
                ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }
                , {}],
            20: [function (t, e, i) {
                function n(t) {
                    var e = o.call(t);
                    return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
                }
                e.exports = n;
                var o = Object.prototype.toString
            }
                , {}],
            21: [function (t, e, i) {
                function n(t) {
                    var e = !1;
                    return function () {
                        if (!e)
                            return e = !0,
                                t.apply(this, arguments)
                    }
                }
                e.exports = n,
                    n.proto = n(function () {
                        Object.defineProperty(Function.prototype, "once", {
                            value: function () {
                                return n(this)
                            },
                            configurable: !0
                        })
                    })
            }
                , {}],
            22: [function (t, e, i) {
                function n(t, e, i) {
                    if (!s(e))
                        throw new TypeError("iterator must be a function");
                    arguments.length < 3 && (i = this),
                        "[object Array]" === h.call(t) ? o(t, e, i) : "string" == typeof t ? r(t, e, i) : a(t, e, i)
                }
                function o(t, e, i) {
                    for (var n = 0, o = t.length; n < o; n++)
                        c.call(t, n) && e.call(i, t[n], n, t)
                }
                function r(t, e, i) {
                    for (var n = 0, o = t.length; n < o; n++)
                        e.call(i, t.charAt(n), n, t)
                }
                function a(t, e, i) {
                    for (var n in t)
                        c.call(t, n) && e.call(i, t[n], n, t)
                }
                var s = t("is-function");
                e.exports = n;
                var h = Object.prototype.toString
                    , c = Object.prototype.hasOwnProperty
            }
                , {
                "is-function": 20
            }],
            23: [function (t, e, i) {
                function n(t) {
                    return t.replace(/^\s*|\s*$/g, "")
                }
                i = e.exports = n,
                    i.left = function (t) {
                        return t.replace(/^\s*/, "")
                    }
                    ,
                    i.right = function (t) {
                        return t.replace(/\s*$/, "")
                    }
            }
                , {}],
            24: [function (t, e, i) {
                var n = t("trim")
                    , o = t("for-each")
                    , r = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    };
                e.exports = function (t) {
                    if (!t)
                        return {};
                    var e = {};
                    return o(n(t).split("\n"), function (t) {
                        var i = t.indexOf(":")
                            , o = n(t.slice(0, i)).toLowerCase()
                            , a = n(t.slice(i + 1));
                        void 0 === e[o] ? e[o] = a : r(e[o]) ? e[o].push(a) : e[o] = [e[o], a]
                    }),
                        e
                }
            }
                , {
                "for-each": 22,
                trim: 23
            }],
            25: [function (t, e, i) {
                arguments[4][9][0].apply(i, arguments)
            }
                , {
                dup: 9
            }],
            26: [function (t, e, i) {
                "use strict";
                function n(t) {
                    if (null === t || void 0 === t)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }
                var o = Object.prototype.hasOwnProperty
                    , r = Object.prototype.propertyIsEnumerable;
                e.exports = Object.assign || function (t, e) {
                    for (var i, a, s = n(t), h = 1; h < arguments.length; h++) {
                        i = Object(arguments[h]);
                        for (var c in i)
                            o.call(i, c) && (s[c] = i[c]);
                        if (Object.getOwnPropertySymbols) {
                            a = Object.getOwnPropertySymbols(i);
                            for (var l = 0; l < a.length; l++)
                                r.call(i, a[l]) && (s[a[l]] = i[a[l]])
                        }
                    }
                    return s
                }
            }
                , {}],
            27: [function (t, e, i) {
                var n = t("dtype")
                    , o = t("an-array")
                    , r = t("is-buffer")
                    , a = [0, 2, 3]
                    , s = [2, 1, 3];
                e.exports = function (t, e) {
                    t && (o(t) || r(t)) || (e = t || {},
                        t = null),
                        e = "number" == typeof e ? {
                            count: e
                        } : e || {};
                    for (var i = "string" == typeof e.type ? e.type : "uint16", h = "number" == typeof e.count ? e.count : 1, c = e.start || 0, l = !1 !== e.clockwise ? a : s, u = l[0], d = l[1], p = l[2], f = 6 * h, E = t || new (n(i))(f), m = 0, v = 0; m < f; m += 6,
                        v += 4) {
                        var g = m + c;
                        E[g + 0] = v + 0,
                            E[g + 1] = v + 1,
                            E[g + 2] = v + 2,
                            E[g + 3] = v + u,
                            E[g + 4] = v + d,
                            E[g + 5] = v + p
                    }
                    return E
                }
            }
                , {
                "an-array": 28,
                dtype: 29,
                "is-buffer": 30
            }],
            28: [function (t, e, i) {
                function n(t) {
                    return t.BYTES_PER_ELEMENT && "[object ArrayBuffer]" === o.call(t.buffer) || Array.isArray(t)
                }
                var o = Object.prototype.toString;
                e.exports = n
            }
                , {}],
            29: [function (t, e, i) {
                e.exports = function (t) {
                    switch (t) {
                        case "int8":
                            return Int8Array;
                        case "int16":
                            return Int16Array;
                        case "int32":
                            return Int32Array;
                        case "uint8":
                            return Uint8Array;
                        case "uint16":
                            return Uint16Array;
                        case "uint32":
                            return Uint32Array;
                        case "float32":
                            return Float32Array;
                        case "float64":
                            return Float64Array;
                        case "array":
                            return Array;
                        case "uint8_clamped":
                            return Uint8ClampedArray
                    }
                }
            }
                , {}],
            30: [function (t, e, i) {
                e.exports = function (t) {
                    return !(null == t || !(t._isBuffer || t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)))
                }
            }
                , {}],
            31: [function (t, e, i) {
                function n(t, e, i, n) {
                    "number" != typeof i && (i = 1),
                        "number" != typeof n && (n = "uint16");
                    var o = !t.index && "function" != typeof t.setIndex
                        , a = o ? t.getAttribute("index") : t.index
                        , s = r(a, e, i, n);
                    s && (o ? t.addAttribute("index", s) : t.index = s)
                }
                function o(t, e, i, n, o) {
                    if ("number" != typeof n && (n = 3),
                        "number" != typeof o && (o = "float32"),
                        Array.isArray(i) && Array.isArray(i[0]) && i[0].length !== n)
                        throw new Error("Nested vertex array has unexpected size; expected " + n + " but found " + i[0].length);
                    var a = t.getAttribute(e)
                        , s = r(a, i, n, o);
                    s && t.addAttribute(e, s)
                }
                function r(t, e, i, n) {
                    return e = e || [],
                        !t || a(t, e, i) ? (e = s(e, n),
                            t = new THREE.BufferAttribute(e, i),
                            t.needsUpdate = !0,
                            t) : (s(e, t.array),
                                t.needsUpdate = !0,
                                null)
                }
                function a(t, e, i) {
                    if (t.itemSize !== i)
                        return !0;
                    if (!t.array)
                        return !0;
                    var n = t.array.length;
                    return Array.isArray(e) && Array.isArray(e[0]) ? n !== e.length * i : n !== e.length
                }
                var s = t("flatten-vertex-data");
                e.exports.attr = o,
                    e.exports.index = n
            }
                , {
                "flatten-vertex-data": 32
            }],
            32: [function (t, e, i) {
                function n(t, e, i) {
                    if (!t)
                        throw new TypeError("must specify data as first parameter");
                    if (i = 0 | +(i || 0),
                        Array.isArray(t) && Array.isArray(t[0])) {
                        var n = t[0].length
                            , r = t.length * n;
                        e && "string" != typeof e || (e = new (o(e || "float32"))(r + i));
                        var a = e.length - i;
                        if (r !== a)
                            throw new Error("source length " + r + " (" + n + "x" + t.length + ") does not match destination length " + a);
                        for (var s = 0, h = i; s < t.length; s++)
                            for (var c = 0; c < n; c++)
                                e[h++] = t[s][c]
                    } else if (e && "string" != typeof e)
                        e.set(t, i);
                    else {
                        var l = o(e || "float32");
                        0 === i ? e = new l(t) : (e = new l(t.length + i),
                            e.set(t, i))
                    }
                    return e
                }
                var o = t("dtype");
                e.exports = n
            }
                , {
                dtype: 33
            }],
            33: [function (t, e, i) {
                arguments[4][29][0].apply(i, arguments)
            }
                , {
                dup: 29
            }],
            34: [function (t, e, i) {
                var n = t("object-assign");
                e.exports = function (t) {
                    t = t || {};
                    var e = "number" == typeof t.opacity ? t.opacity : 1
                        , i = "number" == typeof t.alphaTest ? t.alphaTest : 1e-4
                        , o = t.precision || "highp"
                        , r = t.color
                        , a = t.map;
                    return delete t.map,
                        delete t.color,
                        delete t.precision,
                        delete t.opacity,
                        n({
                            uniforms: {
                                opacity: {
                                    type: "f",
                                    value: e
                                },
                                map: {
                                    type: "t",
                                    value: a || new THREE.Texture
                                },
                                color: {
                                    type: "c",
                                    value: new THREE.Color(r)
                                }
                            },
                            vertexShader: ["attribute vec2 uv;", "attribute vec4 position;", "uniform mat4 projectionMatrix;", "uniform mat4 modelViewMatrix;", "varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * position;", "}"].join("\n"),
                            fragmentShader: ["#ifdef GL_OES_standard_derivatives", "#extension GL_OES_standard_derivatives : enable", "#endif", "precision " + o + " float;", "uniform float opacity;", "uniform vec3 color;", "uniform sampler2D map;", "varying vec2 vUv;", "float aastep(float value) {", "  #ifdef GL_OES_standard_derivatives", "    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;", "  #else", "    float afwidth = (1.0 / 32.0) * (1.4142135623730951 / (2.0 * gl_FragCoord.w));", "  #endif", "  return smoothstep(0.5 - afwidth, 0.5 + afwidth, value);", "}", "void main() {", "  vec4 texColor = texture2D(map, vUv);", "  float alpha = aastep(texColor.a);", "  gl_FragColor = vec4(color, opacity * alpha);", 0 === i ? "" : "  if (gl_FragColor.a < " + i + ") discard;", "}"].join("\n")
                        }, t)
                }
            }
                , {
                "object-assign": 26
            }],
            35: [function (t, e, i) {
                var n = t("load-bmfont");
                e.exports = function (t, e) {
                    n(t.font, function (i, n) {
                        if (i)
                            throw i;
                        PANOLENS.Utils.TextureLoader.load(t.image, function (t) {
                            e(n, t)
                        })
                    })
                }
            }
                , {
                "load-bmfont": 10
            }],
            36: [function (t, e, i) {
                var n = t("../")
                    , o = t("../shaders/sdf");
                PANOLENS && PANOLENS.Utils && PANOLENS.SpriteText && (PANOLENS.Utils.loadBMFont = function (e, i) {
                    t("./load")(e, PANOLENS.SpriteText.prototype.setBMFont.bind(PANOLENS.SpriteText.prototype, i))
                }
                    ,
                    PANOLENS.SpriteText.prototype.generateTextGeometry = n,
                    PANOLENS.SpriteText.prototype.generateSDFShader = o)
            }
                , {
                "../": 1,
                "../shaders/sdf": 34,
                "./load": 35
            }],
            37: [function (t, e, i) {
                (function (e) {
                    "use strict";
                    function n() {
                        return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                    }
                    function o(t) {
                        return this instanceof o ? (o.TYPED_ARRAY_SUPPORT || (this.length = 0,
                            this.parent = void 0),
                            "number" == typeof t ? r(this, t) : "string" == typeof t ? a(this, t, arguments.length > 1 ? arguments[1] : "utf8") : s(this, t)) : arguments.length > 1 ? new o(t, arguments[1]) : new o(t)
                    }
                    function r(t, e) {
                        if (t = f(t, e < 0 ? 0 : 0 | E(e)),
                            !o.TYPED_ARRAY_SUPPORT)
                            for (var i = 0; i < e; i++)
                                t[i] = 0;
                        return t
                    }
                    function a(t, e, i) {
                        return "string" == typeof i && "" !== i || (i = "utf8"),
                            t = f(t, 0 | v(e, i)),
                            t.write(e, i),
                            t
                    }
                    function s(t, e) {
                        if (o.isBuffer(e))
                            return h(t, e);
                        if (Q(e))
                            return c(t, e);
                        if (null == e)
                            throw new TypeError("must start with number, buffer, array or string");
                        if ("undefined" != typeof ArrayBuffer) {
                            if (e.buffer instanceof ArrayBuffer)
                                return l(t, e);
                            if (e instanceof ArrayBuffer)
                                return u(t, e)
                        }
                        return e.length ? d(t, e) : p(t, e)
                    }
                    function h(t, e) {
                        var i = 0 | E(e.length);
                        return t = f(t, i),
                            e.copy(t, 0, 0, i),
                            t
                    }
                    function c(t, e) {
                        var i = 0 | E(e.length);
                        t = f(t, i);
                        for (var n = 0; n < i; n += 1)
                            t[n] = 255 & e[n];
                        return t
                    }
                    function l(t, e) {
                        var i = 0 | E(e.length);
                        t = f(t, i);
                        for (var n = 0; n < i; n += 1)
                            t[n] = 255 & e[n];
                        return t
                    }
                    function u(t, e) {
                        return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
                            t.__proto__ = o.prototype) : t = l(t, new Uint8Array(e)),
                            t
                    }
                    function d(t, e) {
                        var i = 0 | E(e.length);
                        t = f(t, i);
                        for (var n = 0; n < i; n += 1)
                            t[n] = 255 & e[n];
                        return t
                    }
                    function p(t, e) {
                        var i, n = 0;
                        "Buffer" === e.type && Q(e.data) && (i = e.data,
                            n = 0 | E(i.length)),
                            t = f(t, n);
                        for (var o = 0; o < n; o += 1)
                            t[o] = 255 & i[o];
                        return t
                    }
                    function f(t, e) {
                        return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
                            t.__proto__ = o.prototype) : t.length = e,
                            0 !== e && e <= o.poolSize >>> 1 && (t.parent = Z),
                            t
                    }
                    function E(t) {
                        if (t >= n())
                            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                        return 0 | t
                    }
                    function m(t, e) {
                        if (!(this instanceof m))
                            return new m(t, e);
                        var i = new o(t, e);
                        return delete i.parent,
                            i
                    }
                    function v(t, e) {
                        "string" != typeof t && (t = "" + t);
                        var i = t.length;
                        if (0 === i)
                            return 0;
                        for (var n = !1; ;)
                            switch (e) {
                                case "ascii":
                                case "binary":
                                case "raw":
                                case "raws":
                                    return i;
                                case "utf8":
                                case "utf-8":
                                    return F(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * i;
                                case "hex":
                                    return i >>> 1;
                                case "base64":
                                    return Y(t).length;
                                default:
                                    if (n)
                                        return F(t).length;
                                    e = ("" + e).toLowerCase(),
                                        n = !0
                            }
                    }
                    function g(t, e, i) {
                        var n = !1;
                        if (e |= 0,
                            i = void 0 === i || i === 1 / 0 ? this.length : 0 | i,
                            t || (t = "utf8"),
                            e < 0 && (e = 0),
                            i > this.length && (i = this.length),
                            i <= e)
                            return "";
                        for (; ;)
                            switch (t) {
                                case "hex":
                                    return x(this, e, i);
                                case "utf8":
                                case "utf-8":
                                    return O(this, e, i);
                                case "ascii":
                                    return T(this, e, i);
                                case "binary":
                                    return R(this, e, i);
                                case "base64":
                                    return b(this, e, i);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return M(this, e, i);
                                default:
                                    if (n)
                                        throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(),
                                        n = !0
                            }
                    }
                    function y(t, e, i, n) {
                        i = Number(i) || 0;
                        var o = t.length - i;
                        n ? (n = Number(n)) > o && (n = o) : n = o;
                        var r = e.length;
                        if (r % 2 != 0)
                            throw new Error("Invalid hex string");
                        n > r / 2 && (n = r / 2);
                        for (var a = 0; a < n; a++) {
                            var s = parseInt(e.substr(2 * a, 2), 16);
                            if (isNaN(s))
                                throw new Error("Invalid hex string");
                            t[i + a] = s
                        }
                        return a
                    }
                    function N(t, e, i, n) {
                        return X(F(e, t.length - i), t, i, n)
                    }
                    function w(t, e, i, n) {
                        return X(W(e), t, i, n)
                    }
                    function A(t, e, i, n) {
                        return w(t, e, i, n)
                    }
                    function L(t, e, i, n) {
                        return X(Y(e), t, i, n)
                    }
                    function P(t, e, i, n) {
                        return X(z(e, t.length - i), t, i, n)
                    }
                    function b(t, e, i) {
                        return 0 === e && i === t.length ? q.fromByteArray(t) : q.fromByteArray(t.slice(e, i))
                    }
                    function O(t, e, i) {
                        i = Math.min(t.length, i);
                        for (var n = [], o = e; o < i;) {
                            var r = t[o]
                                , a = null
                                , s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
                            if (o + s <= i) {
                                var h, c, l, u;
                                switch (s) {
                                    case 1:
                                        r < 128 && (a = r);
                                        break;
                                    case 2:
                                        h = t[o + 1],
                                            128 == (192 & h) && (u = (31 & r) << 6 | 63 & h) > 127 && (a = u);
                                        break;
                                    case 3:
                                        h = t[o + 1],
                                            c = t[o + 2],
                                            128 == (192 & h) && 128 == (192 & c) && (u = (15 & r) << 12 | (63 & h) << 6 | 63 & c) > 2047 && (u < 55296 || u > 57343) && (a = u);
                                        break;
                                    case 4:
                                        h = t[o + 1],
                                            c = t[o + 2],
                                            l = t[o + 3],
                                            128 == (192 & h) && 128 == (192 & c) && 128 == (192 & l) && (u = (15 & r) << 18 | (63 & h) << 12 | (63 & c) << 6 | 63 & l) > 65535 && u < 1114112 && (a = u)
                                }
                            }
                            null === a ? (a = 65533,
                                s = 1) : a > 65535 && (a -= 65536,
                                    n.push(a >>> 10 & 1023 | 55296),
                                    a = 56320 | 1023 & a),
                                n.push(a),
                                o += s
                        }
                        return S(n)
                    }
                    function S(t) {
                        var e = t.length;
                        if (e <= K)
                            return String.fromCharCode.apply(String, t);
                        for (var i = "", n = 0; n < e;)
                            i += String.fromCharCode.apply(String, t.slice(n, n += K));
                        return i
                    }
                    function T(t, e, i) {
                        var n = "";
                        i = Math.min(t.length, i);
                        for (var o = e; o < i; o++)
                            n += String.fromCharCode(127 & t[o]);
                        return n
                    }
                    function R(t, e, i) {
                        var n = "";
                        i = Math.min(t.length, i);
                        for (var o = e; o < i; o++)
                            n += String.fromCharCode(t[o]);
                        return n
                    }
                    function x(t, e, i) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0),
                            (!i || i < 0 || i > n) && (i = n);
                        for (var o = "", r = e; r < i; r++)
                            o += j(t[r]);
                        return o
                    }
                    function M(t, e, i) {
                        for (var n = t.slice(e, i), o = "", r = 0; r < n.length; r += 2)
                            o += String.fromCharCode(n[r] + 256 * n[r + 1]);
                        return o
                    }
                    function I(t, e, i) {
                        if (t % 1 != 0 || t < 0)
                            throw new RangeError("offset is not uint");
                        if (t + e > i)
                            throw new RangeError("Trying to access beyond buffer length")
                    }
                    function C(t, e, i, n, r, a) {
                        if (!o.isBuffer(t))
                            throw new TypeError("buffer must be a Buffer instance");
                        if (e > r || e < a)
                            throw new RangeError("value is out of bounds");
                        if (i + n > t.length)
                            throw new RangeError("index out of range")
                    }
                    function H(t, e, i, n) {
                        e < 0 && (e = 65535 + e + 1);
                        for (var o = 0, r = Math.min(t.length - i, 2); o < r; o++)
                            t[i + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                    }
                    function D(t, e, i, n) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (var o = 0, r = Math.min(t.length - i, 4); o < r; o++)
                            t[i + o] = e >>> 8 * (n ? o : 3 - o) & 255
                    }
                    function V(t, e, i, n, o, r) {
                        if (e > o || e < r)
                            throw new RangeError("value is out of bounds");
                        if (i + n > t.length)
                            throw new RangeError("index out of range");
                        if (i < 0)
                            throw new RangeError("index out of range")
                    }
                    function _(t, e, i, n, o) {
                        return o || V(t, e, i, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                            G.write(t, e, i, n, 23, 4),
                            i + 4
                    }
                    function U(t, e, i, n, o) {
                        return o || V(t, e, i, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                            G.write(t, e, i, n, 52, 8),
                            i + 8
                    }
                    function k(t) {
                        if (t = B(t).replace(J, ""),
                            t.length < 2)
                            return "";
                        for (; t.length % 4 != 0;)
                            t += "=";
                        return t
                    }
                    function B(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }
                    function j(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16)
                    }
                    function F(t, e) {
                        e = e || 1 / 0;
                        for (var i, n = t.length, o = null, r = [], a = 0; a < n; a++) {
                            if ((i = t.charCodeAt(a)) > 55295 && i < 57344) {
                                if (!o) {
                                    if (i > 56319) {
                                        (e -= 3) > -1 && r.push(239, 191, 189);
                                        continue
                                    }
                                    if (a + 1 === n) {
                                        (e -= 3) > -1 && r.push(239, 191, 189);
                                        continue
                                    }
                                    o = i;
                                    continue
                                }
                                if (i < 56320) {
                                    (e -= 3) > -1 && r.push(239, 191, 189),
                                        o = i;
                                    continue
                                }
                                i = 65536 + (o - 55296 << 10 | i - 56320)
                            } else
                                o && (e -= 3) > -1 && r.push(239, 191, 189);
                            if (o = null,
                                i < 128) {
                                if ((e -= 1) < 0)
                                    break;
                                r.push(i)
                            } else if (i < 2048) {
                                if ((e -= 2) < 0)
                                    break;
                                r.push(i >> 6 | 192, 63 & i | 128)
                            } else if (i < 65536) {
                                if ((e -= 3) < 0)
                                    break;
                                r.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                            } else {
                                if (!(i < 1114112))
                                    throw new Error("Invalid code point");
                                if ((e -= 4) < 0)
                                    break;
                                r.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                            }
                        }
                        return r
                    }
                    function W(t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            e.push(255 & t.charCodeAt(i));
                        return e
                    }
                    function z(t, e) {
                        for (var i, n, o, r = [], a = 0; a < t.length && !((e -= 2) < 0); a++)
                            i = t.charCodeAt(a),
                                n = i >> 8,
                                o = i % 256,
                                r.push(o),
                                r.push(n);
                        return r
                    }
                    function Y(t) {
                        return q.toByteArray(k(t))
                    }
                    function X(t, e, i, n) {
                        for (var o = 0; o < n && !(o + i >= e.length || o >= t.length); o++)
                            e[o + i] = t[o];
                        return o
                    }
                    var q = t("base64-js")
                        , G = t("ieee754")
                        , Q = t("isarray");
                    i.Buffer = o,
                        i.SlowBuffer = m,
                        i.INSPECT_MAX_BYTES = 50,
                        o.poolSize = 8192;
                    var Z = {};
                    o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                        try {
                            var t = new Uint8Array(1);
                            return t.foo = function () {
                                return 42
                            }
                                ,
                                42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                        } catch (t) {
                            return !1
                        }
                    }(),
                        o.TYPED_ARRAY_SUPPORT ? (o.prototype.__proto__ = Uint8Array.prototype,
                            o.__proto__ = Uint8Array) : (o.prototype.length = void 0,
                                o.prototype.parent = void 0),
                        o.isBuffer = function (t) {
                            return !(null == t || !t._isBuffer)
                        }
                        ,
                        o.compare = function (t, e) {
                            if (!o.isBuffer(t) || !o.isBuffer(e))
                                throw new TypeError("Arguments must be Buffers");
                            if (t === e)
                                return 0;
                            for (var i = t.length, n = e.length, r = 0, a = Math.min(i, n); r < a && t[r] === e[r];)
                                ++r;
                            return r !== a && (i = t[r],
                                n = e[r]),
                                i < n ? -1 : n < i ? 1 : 0
                        }
                        ,
                        o.isEncoding = function (t) {
                            switch (String(t).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "binary":
                                case "base64":
                                case "raw":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                        ,
                        o.concat = function (t, e) {
                            if (!Q(t))
                                throw new TypeError("list argument must be an Array of Buffers.");
                            if (0 === t.length)
                                return new o(0);
                            var i;
                            if (void 0 === e)
                                for (e = 0,
                                    i = 0; i < t.length; i++)
                                    e += t[i].length;
                            var n = new o(e)
                                , r = 0;
                            for (i = 0; i < t.length; i++) {
                                var a = t[i];
                                a.copy(n, r),
                                    r += a.length
                            }
                            return n
                        }
                        ,
                        o.byteLength = v,
                        o.prototype._isBuffer = !0,
                        o.prototype.toString = function () {
                            var t = 0 | this.length;
                            return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : g.apply(this, arguments)
                        }
                        ,
                        o.prototype.equals = function (t) {
                            if (!o.isBuffer(t))
                                throw new TypeError("Argument must be a Buffer");
                            return this === t || 0 === o.compare(this, t)
                        }
                        ,
                        o.prototype.inspect = function () {
                            var t = ""
                                , e = i.INSPECT_MAX_BYTES;
                            return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "),
                                this.length > e && (t += " ... ")),
                                "<Buffer " + t + ">"
                        }
                        ,
                        o.prototype.compare = function (t) {
                            if (!o.isBuffer(t))
                                throw new TypeError("Argument must be a Buffer");
                            return this === t ? 0 : o.compare(this, t)
                        }
                        ,
                        o.prototype.indexOf = function (t, e) {
                            function i(t, e, i) {
                                for (var n = -1, o = 0; i + o < t.length; o++)
                                    if (t[i + o] === e[-1 === n ? 0 : o - n]) {
                                        if (-1 === n && (n = o),
                                            o - n + 1 === e.length)
                                            return i + n
                                    } else
                                        n = -1;
                                return -1
                            }
                            if (e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648),
                                e >>= 0,
                                0 === this.length)
                                return -1;
                            if (e >= this.length)
                                return -1;
                            if (e < 0 && (e = Math.max(this.length + e, 0)),
                                "string" == typeof t)
                                return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, e);
                            if (o.isBuffer(t))
                                return i(this, t, e);
                            if ("number" == typeof t)
                                return o.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, e) : i(this, [t], e);
                            throw new TypeError("val must be string, number or Buffer")
                        }
                        ,
                        o.prototype.write = function (t, e, i, n) {
                            if (void 0 === e)
                                n = "utf8",
                                    i = this.length,
                                    e = 0;
                            else if (void 0 === i && "string" == typeof e)
                                n = e,
                                    i = this.length,
                                    e = 0;
                            else if (isFinite(e))
                                e |= 0,
                                    isFinite(i) ? (i |= 0,
                                        void 0 === n && (n = "utf8")) : (n = i,
                                            i = void 0);
                            else {
                                var o = n;
                                n = e,
                                    e = 0 | i,
                                    i = o
                            }
                            var r = this.length - e;
                            if ((void 0 === i || i > r) && (i = r),
                                t.length > 0 && (i < 0 || e < 0) || e > this.length)
                                throw new RangeError("attempt to write outside buffer bounds");
                            n || (n = "utf8");
                            for (var a = !1; ;)
                                switch (n) {
                                    case "hex":
                                        return y(this, t, e, i);
                                    case "utf8":
                                    case "utf-8":
                                        return N(this, t, e, i);
                                    case "ascii":
                                        return w(this, t, e, i);
                                    case "binary":
                                        return A(this, t, e, i);
                                    case "base64":
                                        return L(this, t, e, i);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return P(this, t, e, i);
                                    default:
                                        if (a)
                                            throw new TypeError("Unknown encoding: " + n);
                                        n = ("" + n).toLowerCase(),
                                            a = !0
                                }
                        }
                        ,
                        o.prototype.toJSON = function () {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        }
                        ;
                    var K = 4096;
                    o.prototype.slice = function (t, e) {
                        var i = this.length;
                        t = ~~t,
                            e = void 0 === e ? i : ~~e,
                            t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                            e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                            e < t && (e = t);
                        var n;
                        if (o.TYPED_ARRAY_SUPPORT)
                            n = this.subarray(t, e),
                                n.__proto__ = o.prototype;
                        else {
                            var r = e - t;
                            n = new o(r, void 0);
                            for (var a = 0; a < r; a++)
                                n[a] = this[a + t]
                        }
                        return n.length && (n.parent = this.parent || this),
                            n
                    }
                        ,
                        o.prototype.readUIntLE = function (t, e, i) {
                            t |= 0,
                                e |= 0,
                                i || I(t, e, this.length);
                            for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256);)
                                n += this[t + r] * o;
                            return n
                        }
                        ,
                        o.prototype.readUIntBE = function (t, e, i) {
                            t |= 0,
                                e |= 0,
                                i || I(t, e, this.length);
                            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);)
                                n += this[t + --e] * o;
                            return n
                        }
                        ,
                        o.prototype.readUInt8 = function (t, e) {
                            return e || I(t, 1, this.length),
                                this[t]
                        }
                        ,
                        o.prototype.readUInt16LE = function (t, e) {
                            return e || I(t, 2, this.length),
                                this[t] | this[t + 1] << 8
                        }
                        ,
                        o.prototype.readUInt16BE = function (t, e) {
                            return e || I(t, 2, this.length),
                                this[t] << 8 | this[t + 1]
                        }
                        ,
                        o.prototype.readUInt32LE = function (t, e) {
                            return e || I(t, 4, this.length),
                                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                        }
                        ,
                        o.prototype.readUInt32BE = function (t, e) {
                            return e || I(t, 4, this.length),
                                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                        }
                        ,
                        o.prototype.readIntLE = function (t, e, i) {
                            t |= 0,
                                e |= 0,
                                i || I(t, e, this.length);
                            for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256);)
                                n += this[t + r] * o;
                            return o *= 128,
                                n >= o && (n -= Math.pow(2, 8 * e)),
                                n
                        }
                        ,
                        o.prototype.readIntBE = function (t, e, i) {
                            t |= 0,
                                e |= 0,
                                i || I(t, e, this.length);
                            for (var n = e, o = 1, r = this[t + --n]; n > 0 && (o *= 256);)
                                r += this[t + --n] * o;
                            return o *= 128,
                                r >= o && (r -= Math.pow(2, 8 * e)),
                                r
                        }
                        ,
                        o.prototype.readInt8 = function (t, e) {
                            return e || I(t, 1, this.length),
                                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                        }
                        ,
                        o.prototype.readInt16LE = function (t, e) {
                            e || I(t, 2, this.length);
                            var i = this[t] | this[t + 1] << 8;
                            return 32768 & i ? 4294901760 | i : i
                        }
                        ,
                        o.prototype.readInt16BE = function (t, e) {
                            e || I(t, 2, this.length);
                            var i = this[t + 1] | this[t] << 8;
                            return 32768 & i ? 4294901760 | i : i
                        }
                        ,
                        o.prototype.readInt32LE = function (t, e) {
                            return e || I(t, 4, this.length),
                                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                        }
                        ,
                        o.prototype.readInt32BE = function (t, e) {
                            return e || I(t, 4, this.length),
                                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                        }
                        ,
                        o.prototype.readFloatLE = function (t, e) {
                            return e || I(t, 4, this.length),
                                G.read(this, t, !0, 23, 4)
                        }
                        ,
                        o.prototype.readFloatBE = function (t, e) {
                            return e || I(t, 4, this.length),
                                G.read(this, t, !1, 23, 4)
                        }
                        ,
                        o.prototype.readDoubleLE = function (t, e) {
                            return e || I(t, 8, this.length),
                                G.read(this, t, !0, 52, 8)
                        }
                        ,
                        o.prototype.readDoubleBE = function (t, e) {
                            return e || I(t, 8, this.length),
                                G.read(this, t, !1, 52, 8)
                        }
                        ,
                        o.prototype.writeUIntLE = function (t, e, i, n) {
                            t = +t,
                                e |= 0,
                                i |= 0,
                                n || C(this, t, e, i, Math.pow(2, 8 * i), 0);
                            var o = 1
                                , r = 0;
                            for (this[e] = 255 & t; ++r < i && (o *= 256);)
                                this[e + r] = t / o & 255;
                            return e + i
                        }
                        ,
                        o.prototype.writeUIntBE = function (t, e, i, n) {
                            t = +t,
                                e |= 0,
                                i |= 0,
                                n || C(this, t, e, i, Math.pow(2, 8 * i), 0);
                            var o = i - 1
                                , r = 1;
                            for (this[e + o] = 255 & t; --o >= 0 && (r *= 256);)
                                this[e + o] = t / r & 255;
                            return e + i
                        }
                        ,
                        o.prototype.writeUInt8 = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 1, 255, 0),
                                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                this[e] = 255 & t,
                                e + 1
                        }
                        ,
                        o.prototype.writeUInt16LE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 2, 65535, 0),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                    this[e + 1] = t >>> 8) : H(this, t, e, !0),
                                e + 2
                        }
                        ,
                        o.prototype.writeUInt16BE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 2, 65535, 0),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                                    this[e + 1] = 255 & t) : H(this, t, e, !1),
                                e + 2
                        }
                        ,
                        o.prototype.writeUInt32LE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 4, 4294967295, 0),
                                o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                                    this[e + 2] = t >>> 16,
                                    this[e + 1] = t >>> 8,
                                    this[e] = 255 & t) : D(this, t, e, !0),
                                e + 4
                        }
                        ,
                        o.prototype.writeUInt32BE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 4, 4294967295, 0),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                                    this[e + 1] = t >>> 16,
                                    this[e + 2] = t >>> 8,
                                    this[e + 3] = 255 & t) : D(this, t, e, !1),
                                e + 4
                        }
                        ,
                        o.prototype.writeIntLE = function (t, e, i, n) {
                            if (t = +t,
                                e |= 0,
                                !n) {
                                var o = Math.pow(2, 8 * i - 1);
                                C(this, t, e, i, o - 1, -o)
                            }
                            var r = 0
                                , a = 1
                                , s = t < 0 ? 1 : 0;
                            for (this[e] = 255 & t; ++r < i && (a *= 256);)
                                this[e + r] = (t / a >> 0) - s & 255;
                            return e + i
                        }
                        ,
                        o.prototype.writeIntBE = function (t, e, i, n) {
                            if (t = +t,
                                e |= 0,
                                !n) {
                                var o = Math.pow(2, 8 * i - 1);
                                C(this, t, e, i, o - 1, -o)
                            }
                            var r = i - 1
                                , a = 1
                                , s = t < 0 ? 1 : 0;
                            for (this[e + r] = 255 & t; --r >= 0 && (a *= 256);)
                                this[e + r] = (t / a >> 0) - s & 255;
                            return e + i
                        }
                        ,
                        o.prototype.writeInt8 = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 1, 127, -128),
                                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                t < 0 && (t = 255 + t + 1),
                                this[e] = 255 & t,
                                e + 1
                        }
                        ,
                        o.prototype.writeInt16LE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 2, 32767, -32768),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                    this[e + 1] = t >>> 8) : H(this, t, e, !0),
                                e + 2
                        }
                        ,
                        o.prototype.writeInt16BE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 2, 32767, -32768),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                                    this[e + 1] = 255 & t) : H(this, t, e, !1),
                                e + 2
                        }
                        ,
                        o.prototype.writeInt32LE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 4, 2147483647, -2147483648),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                    this[e + 1] = t >>> 8,
                                    this[e + 2] = t >>> 16,
                                    this[e + 3] = t >>> 24) : D(this, t, e, !0),
                                e + 4
                        }
                        ,
                        o.prototype.writeInt32BE = function (t, e, i) {
                            return t = +t,
                                e |= 0,
                                i || C(this, t, e, 4, 2147483647, -2147483648),
                                t < 0 && (t = 4294967295 + t + 1),
                                o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                                    this[e + 1] = t >>> 16,
                                    this[e + 2] = t >>> 8,
                                    this[e + 3] = 255 & t) : D(this, t, e, !1),
                                e + 4
                        }
                        ,
                        o.prototype.writeFloatLE = function (t, e, i) {
                            return _(this, t, e, !0, i)
                        }
                        ,
                        o.prototype.writeFloatBE = function (t, e, i) {
                            return _(this, t, e, !1, i)
                        }
                        ,
                        o.prototype.writeDoubleLE = function (t, e, i) {
                            return U(this, t, e, !0, i)
                        }
                        ,
                        o.prototype.writeDoubleBE = function (t, e, i) {
                            return U(this, t, e, !1, i)
                        }
                        ,
                        o.prototype.copy = function (t, e, i, n) {
                            if (i || (i = 0),
                                n || 0 === n || (n = this.length),
                                e >= t.length && (e = t.length),
                                e || (e = 0),
                                n > 0 && n < i && (n = i),
                                n === i)
                                return 0;
                            if (0 === t.length || 0 === this.length)
                                return 0;
                            if (e < 0)
                                throw new RangeError("targetStart out of bounds");
                            if (i < 0 || i >= this.length)
                                throw new RangeError("sourceStart out of bounds");
                            if (n < 0)
                                throw new RangeError("sourceEnd out of bounds");
                            n > this.length && (n = this.length),
                                t.length - e < n - i && (n = t.length - e + i);
                            var r, a = n - i;
                            if (this === t && i < e && e < n)
                                for (r = a - 1; r >= 0; r--)
                                    t[r + e] = this[r + i];
                            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                                for (r = 0; r < a; r++)
                                    t[r + e] = this[r + i];
                            else
                                Uint8Array.prototype.set.call(t, this.subarray(i, i + a), e);
                            return a
                        }
                        ,
                        o.prototype.fill = function (t, e, i) {
                            if (t || (t = 0),
                                e || (e = 0),
                                i || (i = this.length),
                                i < e)
                                throw new RangeError("end < start");
                            if (i !== e && 0 !== this.length) {
                                if (e < 0 || e >= this.length)
                                    throw new RangeError("start out of bounds");
                                if (i < 0 || i > this.length)
                                    throw new RangeError("end out of bounds");
                                var n;
                                if ("number" == typeof t)
                                    for (n = e; n < i; n++)
                                        this[n] = t;
                                else {
                                    var o = F(t.toString())
                                        , r = o.length;
                                    for (n = e; n < i; n++)
                                        this[n] = o[n % r]
                                }
                                return this
                            }
                        }
                        ;
                    var J = /[^+\/0-9A-Za-z-_]/g
                }
                ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }
                , {
                "base64-js": 38,
                ieee754: 39,
                isarray: 40
            }],
            38: [function (t, e, i) {
                !function (t) {
                    "use strict";
                    function e(t) {
                        var e = t.charCodeAt(0);
                        return e === a || e === u ? 62 : e === s || e === d ? 63 : e < h ? -1 : e < h + 10 ? e - h + 26 + 26 : e < l + 26 ? e - l : e < c + 26 ? e - c + 26 : void 0
                    }
                    function i(t) {
                        function i(t) {
                            c[u++] = t
                        }
                        var n, o, a, s, h, c;
                        if (t.length % 4 > 0)
                            throw new Error("Invalid string. Length must be a multiple of 4");
                        var l = t.length;
                        h = "=" === t.charAt(l - 2) ? 2 : "=" === t.charAt(l - 1) ? 1 : 0,
                            c = new r(3 * t.length / 4 - h),
                            a = h > 0 ? t.length - 4 : t.length;
                        var u = 0;
                        for (n = 0,
                            o = 0; n < a; n += 4,
                            o += 3)
                            s = e(t.charAt(n)) << 18 | e(t.charAt(n + 1)) << 12 | e(t.charAt(n + 2)) << 6 | e(t.charAt(n + 3)),
                                i((16711680 & s) >> 16),
                                i((65280 & s) >> 8),
                                i(255 & s);
                        return 2 === h ? (s = e(t.charAt(n)) << 2 | e(t.charAt(n + 1)) >> 4,
                            i(255 & s)) : 1 === h && (s = e(t.charAt(n)) << 10 | e(t.charAt(n + 1)) << 4 | e(t.charAt(n + 2)) >> 2,
                                i(s >> 8 & 255),
                                i(255 & s)),
                            c
                    }
                    function n(t) {
                        function e(t) {
                            return o.charAt(t)
                        }
                        var i, n, r, a = t.length % 3, s = "";
                        for (i = 0,
                            r = t.length - a; i < r; i += 3)
                            n = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2],
                                s += function (t) {
                                    return e(t >> 18 & 63) + e(t >> 12 & 63) + e(t >> 6 & 63) + e(63 & t)
                                }(n);
                        switch (a) {
                            case 1:
                                n = t[t.length - 1],
                                    s += e(n >> 2),
                                    s += e(n << 4 & 63),
                                    s += "==";
                                break;
                            case 2:
                                n = (t[t.length - 2] << 8) + t[t.length - 1],
                                    s += e(n >> 10),
                                    s += e(n >> 4 & 63),
                                    s += e(n << 2 & 63),
                                    s += "="
                        }
                        return s
                    }
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                        , r = "undefined" != typeof Uint8Array ? Uint8Array : Array
                        , a = "+".charCodeAt(0)
                        , s = "/".charCodeAt(0)
                        , h = "0".charCodeAt(0)
                        , c = "a".charCodeAt(0)
                        , l = "A".charCodeAt(0)
                        , u = "-".charCodeAt(0)
                        , d = "_".charCodeAt(0);
                    t.toByteArray = i,
                        t.fromByteArray = n
                }(void 0 === i ? this.base64js = {} : i)
            }
                , {}],
            39: [function (t, e, i) {
                i.read = function (t, e, i, n, o) {
                    var r, a, s = 8 * o - n - 1, h = (1 << s) - 1, c = h >> 1, l = -7, u = i ? o - 1 : 0, d = i ? -1 : 1, p = t[e + u];
                    for (u += d,
                        r = p & (1 << -l) - 1,
                        p >>= -l,
                        l += s; l > 0; r = 256 * r + t[e + u],
                        u += d,
                        l -= 8)
                        ;
                    for (a = r & (1 << -l) - 1,
                        r >>= -l,
                        l += n; l > 0; a = 256 * a + t[e + u],
                        u += d,
                        l -= 8)
                        ;
                    if (0 === r)
                        r = 1 - c;
                    else {
                        if (r === h)
                            return a ? NaN : 1 / 0 * (p ? -1 : 1);
                        a += Math.pow(2, n),
                            r -= c
                    }
                    return (p ? -1 : 1) * a * Math.pow(2, r - n)
                }
                    ,
                    i.write = function (t, e, i, n, o, r) {
                        var a, s, h, c = 8 * r - o - 1, l = (1 << c) - 1, u = l >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : r - 1, f = n ? 1 : -1, E = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e),
                            isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
                                a = l) : (a = Math.floor(Math.log(e) / Math.LN2),
                                    e * (h = Math.pow(2, -a)) < 1 && (a-- ,
                                        h *= 2),
                                    e += a + u >= 1 ? d / h : d * Math.pow(2, 1 - u),
                                    e * h >= 2 && (a++ ,
                                        h /= 2),
                                    a + u >= l ? (s = 0,
                                        a = l) : a + u >= 1 ? (s = (e * h - 1) * Math.pow(2, o),
                                            a += u) : (s = e * Math.pow(2, u - 1) * Math.pow(2, o),
                                                a = 0)); o >= 8; t[i + p] = 255 & s,
                                                p += f,
                                                s /= 256,
                            o -= 8)
                            ;
                        for (a = a << o | s,
                            c += o; c > 0; t[i + p] = 255 & a,
                            p += f,
                            a /= 256,
                            c -= 8)
                            ;
                        t[i + p - f] |= 128 * E
                    }
            }
                , {}],
            40: [function (t, e, i) {
                var n = {}.toString;
                e.exports = Array.isArray || function (t) {
                    return "[object Array]" == n.call(t)
                }
            }
                , {}]
        }, {}, [36]);





    // 必須回傳 module
    return PANOLENS;
}));
define('panolens_main',['panolens_js'], function (panolens) {
    // 相依於 panolens_js 所指定的路徑
    window.PANOLENS = panolens;
});

require.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    //enforceDefine: true,
    baseUrl: './scripts',
    paths: {
        'three_js': 'three/three.min',
        'three_main': 'three/main',
        'panolens_js': 'panolens/panolens.min.modify',
        'panolens_main': 'panolens/main'
    },
    shim: {

        // 將匿名Module的相依性定義在此，或者利用define定義在獨立的js檔案當中
        
        'panolens_js': {
            deps: ['three_main'],
            init: function () {
                alert('');
            }
        },
        

    },
    waitSeconds: 10000
});

require([

    'panolens_main',

], function (m) {
    //setTimeout 可避免 Opera 在DOM尚未完備時 偷跑 
    setTimeout(function () {
        var panorama1, panorama2, panorama3, viewer, container, infospot;
        var bar = document.querySelector('#bar');
        container = document.querySelector('#container');

        viewer = new PANOLENS.Viewer(
            {
                container: container,		// A DOM Element container
                controlBar: true, 			// Vsibility of bottom control bar
                controlButtons: ['fullscreen', 'setting' ,'video'],	// Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
                autoHideControlBar: false,		// Auto hide control bar
                autoHideInfospot: false,			// Auto hide infospots
                horizontalView: false,			// Allow only horizontal camera control
                cameraFov: 90,				// Camera field of view in degree
                reverseDragging: false,			// Reverse orbit control direction
                enableReticle: false,			// Enable reticle for mouseless interaction
                dwellTime: 1500,			// Dwell time for reticle selection in millisecond
                autoReticleSelect: true,		// Auto select a clickable target after dwellTime
                viewIndicator: false,			// Adds an angle view indicator in upper left corner
                indicatorSize: 30,			// Size of View Indicator
                output: 'console'			// Whether and where to output infospot position. Could be 'console' or 'overlay'
            }
        );


        /*
        function render() {
            viewer.renderer.render(viewer.scene, viewer.camera);
        }
        function onWindowResize() {
            controls.handleResize();
            render();
        }
        controls = new THREE.TrackballControls(viewer.camera, viewer.container);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [65, 83, 68];
        controls.addEventListener('change', render);
        window.addEventListener('resize', onWindowResize, false);
        */

        function onProgressUpdate(event) {
            var percentage = event.progress.loaded / event.progress.total * 100;
            bar.style.width = percentage + "%";
            if (percentage >= 100) {
                bar.classList.add('hide');
                setTimeout(function () {
                    bar.style.width = 0;
                }, 1000);
            }
        }

        panorama1 = new PANOLENS.ImagePanorama('images/1.jpg');
        panorama1.addEventListener('progress', onProgressUpdate);
        var lookAt1 = new THREE.Vector3(-4791.4, -470.28, -1315.23);
        panorama1.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(lookAt1, 0);
        });

        panorama2 = new PANOLENS.ImagePanorama('images/2.jpg');
        panorama2.addEventListener('progress', onProgressUpdate);
        panorama2.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(new THREE.Vector3(-3095.97, -69.23, -3914.42), 0);
        });

        panorama3 = new PANOLENS.ImagePanorama('images/3.jpg');
        panorama3.addEventListener('progress', onProgressUpdate);
        panorama3.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(new THREE.Vector3(2154.81, 529.90, 4470.48), 0);
        });

        //infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
        //infospot.position.set(0, -2000, -5000);
        //panorama1.add(infospot);

        panorama1.link(panorama2, new THREE.Vector3(-4888.91, -86.68, 1029.39));
        panorama2.link(panorama3, new THREE.Vector3(-2967.07, -1298.68, -3797.13));
        panorama2.link(panorama1, new THREE.Vector3(4806.78, 344.09, 1300.74));
        panorama3.link(panorama2, new THREE.Vector3(4672.92, -218.58, -1735.71));

        viewer.add(panorama1, panorama2, panorama3);

  
        // Maunal Set Panorama
        var button1 = document.querySelector('#btn1');
        var button2 = document.querySelector('#btn2');
        var button3 = document.querySelector('#btn3');

        // Enter panorama when load completes
        function onButtonClick(targetPanorama) {
            bar.classList.remove('hide');
            viewer.setPanorama(targetPanorama);
        }

        button1.addEventListener('click', onButtonClick.bind(this, panorama1));
        button2.addEventListener('click', onButtonClick.bind(this, panorama2));
        button3.addEventListener('click', onButtonClick.bind(this, panorama3));



    }, 0);


});
define("require/main", function(){});

