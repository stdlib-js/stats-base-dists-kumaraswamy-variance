// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(u=r)&&i.call(u,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=e,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(y&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var v,h=l,w="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=v,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,x={uint16:A,uint8:_};(S=new x.uint16(1))[0]=4660;var N=52===new x.uint8(S.buffer)[0],k=!0===N?1:0,F=new h(1),j=new p(F.buffer);function T(r){return F[0]=r,j[k]}var O=!0===N?1:0,V=new h(1),$=new p(V.buffer);function G(r,e){return V[0]=r,$[O]=e>>>0,V[0]}var H=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY,C=1023,L=.6931471803691238,P=1.9082149292705877e-10,R=.41421356237309503,M=-.2928932188134525,Z=1.862645149230957e-9,X=5551115123125783e-32,Y=9007199254740992,q=.6666666666666666,z=Math.sqrt;function B(r){return Math.abs(r)}var D=Math.floor,J=Math.ceil;function K(r){return r<0?J(r):D(r)}var Q=1023,rr=-1023,er=-1074;function nr(r){return r===H||r===W}var tr=2147483648,ir=2147483647,ar="function"==typeof Object.defineProperty?Object.defineProperty:null,or=Object.defineProperty;function ur(r){return"number"==typeof r}function fr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function cr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+fr(i):fr(i)+r,t&&(r="-"+r)),r}var sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function pr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ur(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=cr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=cr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===lr.call(r.specifier)?lr.call(n):sr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var yr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,vr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,mr=/^(\d+)e/,Ar=/\.0$/,_r=/\.0*e/,Er=/(\..*[^0])0*e/;function Ur(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ur(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":yr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=vr.call(n,Er,"$1e"),n=vr.call(n,_r,"e"),n=vr.call(n,Ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=vr.call(n,hr,"e+0$1"),n=vr.call(n,wr,"e-0$1"),r.alternate&&(n=vr.call(n,br,"$1."),n=vr.call(n,mr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===dr.call(r.specifier)?dr.call(n):gr.call(n)}function Ir(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Sr=String.fromCharCode,xr=isNaN,Nr=Array.isArray;function kr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fr(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=kr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,xr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,xr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=pr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!xr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=xr(a)?String(t.arg):Sr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=cr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Ir(y):Ir(y)+s)),o+=t.arg||"",u+=1}return o}var jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Or(r){var e,n,t,i;for(n=[],i=0,t=jr.exec(r);t;)(e=r.slice(i,jr.lastIndex-t[0].length)).length&&n.push(e),n.push(Tr(t)),i=jr.lastIndex,t=jr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Vr(r){var e,n;if("string"!=typeof r)throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Or(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Fr.apply(null,e)}var $r,Gr,Hr=Object.prototype,Wr=Hr.toString,Cr=Hr.__defineGetter__,Lr=Hr.__defineSetter__,Pr=Hr.__lookupGetter__,Rr=Hr.__lookupSetter__,Mr=function(){try{return ar({},"x",{}),!0}catch(r){return!1}}()?or:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Wr.call(r))throw new TypeError(Vr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Wr.call(n))throw new TypeError(Vr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Pr.call(r,e)||Rr.call(r,e)?(t=r.__proto__,r.__proto__=Hr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Cr&&Cr.call(r,e,n.get),o&&Lr&&Lr.call(r,e,n.set),r};function Zr(r,e,n){Mr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===N?($r=1,Gr=0):($r=0,Gr=1);var Xr,Yr,qr={HIGH:$r,LOW:Gr},zr=new h(1),Br=new p(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e,n,t){return zr[0]=r,e[t]=Br[Dr],e[t+n]=Br[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}Zr(Qr,"assign",Kr),!0===N?(Xr=1,Yr=0):(Xr=0,Yr=1);var re={HIGH:Xr,LOW:Yr},ee=new h(1),ne=new p(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var oe=[0,0];function ue(r,e){var n,t;return Qr.assign(r,oe,1,0),n=oe[0],n&=ir,t=T(e),ae(n|=t&=tr,oe[1])}var fe=22250738585072014e-324,ce=4503599627370496;function se(e,n,t,i){return r(e)||nr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&B(e)<fe?(n[i]=e*ce,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Zr((function(r){return se(r,[0,0],1,0)}),"assign",se);var le=2146435072,pe=2220446049250313e-31,ye=2148532223,ge=[0,0],de=[0,0];function ve(e,n){var t,i;return 0===n||0===e||r(e)||nr(e)?e:(se(e,ge,1,0),e=ge[0],n+=ge[1],n+=function(r){var e=T(r);return(e=(e&le)>>>20)-C|0}(e),n<er?ue(0,e):n>Q?e<0?W:H:(n<=rr?(n+=52,i=pe):i=1,Qr.assign(e,de,1,0),t=de[0],t&=ye,i*ae(t|=n+C<<20,de[1])))}var he=.6931471803691238,we=1.9082149292705877e-10,be=1.4426950408889634,me=709.782712893384,Ae=-745.1332191019411,_e=1/(1<<28),Ee=-_e;function Ue(e){var n;return r(e)||e===H?e:e===W?0:e>me?H:e<Ae?0:e>Ee&&e<_e?1+e:function(r,e,n){var t,i,a,o;return ve(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-(n=K(e<0?be*e-.5:be*e+.5))*he,n*we,n)}function Ie(r){return D(r)===r}function Se(r){return Ie(r/2)}function xe(r){return Se(r>0?r-1:r+1)}var Ne=!0===N?0:1,ke=new h(1),Fe=new p(ke.buffer);function je(r,e){return ke[0]=r,Fe[Ne]=e>>>0,ke[0]}function Te(r){return 0|r}var Oe=1072693247,Ve=1e300,$e=1e-300,Ge=1048575,He=1048576,We=1072693248,Ce=536870912,Le=524288,Pe=20,Re=9007199254740992,Me=.9617966939259756,Ze=.9617967009544373,Xe=-7.028461650952758e-9,Ye=[1,1.5],qe=[0,.5849624872207642],ze=[0,1.350039202129749e-8],Be=1.4426950408889634,De=1.4426950216293335,Je=1.9259629911266175e-8,Ke=.6931471805599453,Qe=1048575,rn=1048576,en=1071644672,nn=20,tn=.6931471824645996,an=-1.904654299957768e-9,on=1072693247,un=1105199104,fn=1139802112,cn=1083179008,sn=1072693248,ln=1083231232,pn=3230714880,yn=31,gn=1e300,dn=1e-300,vn=8008566259537294e-32,hn=[0,0],wn=[0,0];function bn(e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v;if(r(e)||r(n))return NaN;if(Qr.assign(n,hn,1,0),u=hn[0],0===hn[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return z(e);if(-.5===n)return 1/z(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(nr(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(e===H)?0:H}(e,n)}if(Qr.assign(e,hn,1,0),o=hn[0],0===hn[1]){if(0===o)return function(r,e){return e===W?H:e===H?0:e>0?xe(e)?r:0:xe(e)?ue(H,r):H}(e,n);if(1===e)return 1;if(-1===e&&xe(n))return-1;if(nr(e))return e===W?bn(-0,-n):n<0?0:H}if(e<0&&!1===Ie(n))return(e-e)/(e-e);if(a=B(e),t=o&ir|0,i=u&ir|0,c=u>>>yn|0,f=(f=o>>>yn|0)&&xe(n)?-1:1,i>un){if(i>fn)return function(r,e){return(T(r)&ir)<=Oe?e<0?Ve*Ve:$e*$e:e>0?Ve*Ve:$e*$e}(e,n);if(t<on)return 1===c?f*gn*gn:f*dn*dn;if(t>sn)return 0===c?f*gn*gn:f*dn*dn;y=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Je-a*Be)-((t=je(t=(o=De*i)+u,0))-o),r[0]=t,r[1]=n,r}(wn,a)}else y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<He&&(m-=53,n=T(e*=Re)),m+=(n>>Pe)-C|0,n=(A=n&Ge|0)|We|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=He),o=je(i=(w=(e=G(e,n))-(c=Ye[_]))*(b=1/(e+c)),0),t=(n>>1|Ce)+Le,f=G(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=je(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=je(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Ze*l,d=(y=Xe*l+(b-(l-w))*Me+ze[_])-((g=je(g=p+y+(s=qe[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(wn,a,t);if(g=(p=(n-(s=je(n,0)))*y[0]+n*y[1])+(l=s*y[0]),Qr.assign(g,hn,1,0),d=Te(hn[0]),v=Te(hn[1]),d>=cn){if(0!=(d-cn|v))return f*gn*gn;if(p+vn>g-l)return f*gn*gn}else if((d&ir)>=ln){if(0!=(d-pn|v))return f*dn*dn;if(p<=g-l)return f*dn*dn}return g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ir|0)>>nn)-C|0,c=0,s>en&&(i=G(0,((c=r+(rn>>l+1)>>>0)&~(Qe>>(l=((c&ir)>>nn)-C|0)))>>>0),c=(c&Qe|rn)>>nn-l>>>0,r<0&&(c=-c),e-=i),r=Te(r=T(f=1-((f=(a=(i=je(i=n+e,0))*tn)+(o=(n-(i-e))*Ke+i*an))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<nn>>>0)>>nn<=0?ve(f,c):G(f,r)}(d,l,p),f*g}var mn=2.718281828459045,An=2220446049250313e-31;function _n(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var En=10.900511;function Un(e,n){var t,i,a,o,u,f,c;return r(e)||r(n)||e<0||n<0?NaN:1===n?1/e:1===e?1/n:(c=e+n)<An?(u=c/e,u/=n):c===e&&n<An?1/n:c===n&&e<An?1/e:(e<n&&(f=n,n=e,e=f),i=e+En-.5,a=n+En-.5,o=c+En-.5,u=_n(e)*(_n(n)/_n(c)),B(n*(t=e-.5-n))<100*o&&e>100?u*=Ue(t*function(e){var n,t,i,a,o,u,f,c,s,l;if(e<-1||r(e))return NaN;if(-1===e)return W;if(e===H)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<R){if(i<Z)return i<X?e:e-e*e*.5;e>M&&(l=0,a=e,t=1)}return 0!==l&&(i<Y?(o=(l=((t=T(s=1+e))>>20)-C)>0?1-(s-e):e-(s-1),o/=s):(l=((t=T(s=e))>>20)-C,o=0),(t&=1048575)<434334?s=G(s,1072693248|t):(l+=1,s=G(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*L+(o+=l*P):l*L-((c=n*(1-q*a))-(l*P+o)-a):(c=(f=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?a-(n-u*(n+c)):l*L-(n-(u*(n+c)+(l*P+o))-a))}(-n/o)):u*=bn(i/o,t),u*=bn(o>1e10?i/o*(a/o):i*a/(o*o),n),u*=z(mn/a))}return function(e,n){var t;return r(e)||e<=0||r(n)||n<=0?NaN:(t=n*Un(1+1/e,n),n*Un(1+2/e,n)-t*t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).variance=e();
//# sourceMappingURL=index.js.map
