// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,u=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,f,o,a;if(null==n)return e.call(n);t=n[i],a=i,r=null!=(o=n)&&u.call(o,a);try{n[i]=void 0}catch(r){return e.call(n)}return f=e.call(n),r?n[i]=t:delete n[i],f}:function(n){return e.call(n)},o="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var n,r,t;if("function"!=typeof a)return!1;try{r=new a(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(o&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?c:function(){throw new Error("not implemented")};var y,l=r,v="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;y=function(){var n,r,t;if("function"!=typeof p)return!1;try{r=new p([1,3.14,-3.14,NaN]),t=r,n=(v&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?A:function(){throw new Error("not implemented")};var b,w=y,U="function"==typeof Uint8Array,d="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,r,t;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,256,257]),t=r,n=(U&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var h,s=b,N="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,r,t;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,65536,65537]),t=r,n=(N&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?g:function(){throw new Error("not implemented")};var F,S={uint16:h,uint8:s};(F=new S.uint16(1))[0]=4660;var H=52===new S.uint8(F.buffer)[0],O=!0===H?1:0,T=new w(1),j=new l(T.buffer);function E(n){return T[0]=n,j[O]}var G=!0===H?1:0,L=new w(1),M=new l(L.buffer);function W(n,r){return L[0]=n,M[G]=r>>>0,L[0]}var x=Number.POSITIVE_INFINITY,P=Number.NEGATIVE_INFINITY,V=1023,Y=.6931471803691238,_=1.9082149292705877e-10,q=Math.sqrt;function k(n){return Math.abs(n)}var z,B,C=Math.floor,D=Math.ceil;function J(n){return n<0?D(n):C(n)}function K(n){return n===x||n===P}!0===H?(z=1,B=0):(z=0,B=1);var Q,R,X={HIGH:z,LOW:B},Z=new w(1),$=new l(Z.buffer),nn=X.HIGH,rn=X.LOW;function tn(n,r){return Z[0]=r,n[0]=$[nn],n[1]=$[rn],n}function en(n,r){return 1===arguments.length?tn([0,0],n):tn(n,r)}!0===H?(Q=1,R=0):(Q=0,R=1);var un={HIGH:Q,LOW:R},fn=new w(1),on=new l(fn.buffer),an=un.HIGH,cn=un.LOW;function yn(n,r){return on[an]=n,on[cn]=r,fn[0]}var ln=[0,0];function vn(n,r){var t,e;return en(ln,n),t=ln[0],t&=2147483647,e=E(r),yn(t|=e&=2147483648,ln[1])}function pn(r,t){return n(t)||K(t)?(r[0]=t,r[1]=0,r):0!==t&&k(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var An=[0,0],bn=[0,0];function wn(r,t){var e,u;return 0===t||0===r||n(r)||K(r)?r:(function(n,r){1===arguments.length?pn([0,0],n):pn(n,r)}(An,r),t+=An[1],t+=function(n){var r=E(n);return(r=(2146435072&r)>>>20)-V|0}(r=An[0]),t<-1074?vn(0,r):t>1023?r<0?P:x:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,en(bn,r),e=bn[0],e&=2148532223,u*yn(e|=t+V<<20,bn[1])))}var Un=1.4426950408889634,dn=1/(1<<28);function mn(r){var t;return n(r)||r===x?r:r===P?0:r>709.782712893384?x:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<dn?1+r:function(n,r,t){var e,u,i,f;return wn(1-(r-(e=n-r)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),t)}(r-.6931471803691238*(t=J(r<0?Un*r-.5:Un*r+.5)),1.9082149292705877e-10*t,t)}function hn(n){return C(n)===n}function sn(n){return hn(n/2)}function Nn(n){return sn(n>0?n-1:n+1)}var In=!0===H?0:1,gn=new w(1),Fn=new l(gn.buffer);function Sn(n,r){return gn[0]=n,Fn[In]=r>>>0,gn[0]}function Hn(n){return 0|n}var On=1048576,Tn=[1,1.5],jn=[0,.5849624872207642],En=[0,1.350039202129749e-8],Gn=2147483647,Ln=1048575,Mn=1048576,Wn=2147483647,xn=1083179008,Pn=1e300,Vn=1e-300,Yn=[0,0],_n=[0,0];function qn(r,t){var e,u,i,f,o,a,c,y,l,v,p,A,b,w;if(n(r)||n(t))return NaN;if(en(Yn,t),o=Yn[0],0===Yn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return q(r);if(-.5===t)return 1/q(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(K(t))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:k(n)<1==(r===x)?0:x}(r,t)}if(en(Yn,r),f=Yn[0],0===Yn[1]){if(0===f)return function(n,r){return r===P?x:r===x?0:r>0?Nn(r)?n:0:Nn(r)?vn(x,n):x}(r,t);if(1===r)return 1;if(-1===r&&Nn(t))return-1;if(K(r))return r===P?qn(-0,-t):t<0?0:x}if(r<0&&!1===hn(t))return(r-r)/(r-r);if(i=k(r),e=f&Wn|0,u=o&Wn|0,c=o>>>31|0,a=(a=f>>>31|0)&&Nn(t)?-1:1,u>1105199104){if(u>1139802112)return function(n,r){return(2147483647&E(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(r,t);if(e<1072693247)return 1===c?a*Pn*Pn:a*Vn*Vn;if(e>1072693248)return 0===c?a*Pn*Pn:a*Vn*Vn;p=function(n,r){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=r-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Sn(e=(i=1.4426950216293335*u)+f,0))-i),n[0]=e,n[1]=t,n}(_n,i)}else p=function(n,r,t){var e,u,i,f,o,a,c,y,l,v,p,A,b,w,U,d,m,h,s,N,I;return h=0,t<On&&(h-=53,t=E(r*=9007199254740992)),h+=(t>>20)-V|0,t=1072693248|(s=1048575&t|0),s<=235662?N=0:s<767610?N=1:(N=0,h+=1,t-=On),f=Sn(u=(d=(r=W(r,t))-(c=Tn[N]))*(m=1/(r+c)),0),e=524288+(t>>1|536870912),a=W(0,e+=N<<18),U=(i=u*u)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=Sn(a=3+(i=f*f)+(U+=(o=m*(d-f*a-f*(r-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(l=Sn(l=(d=f*a)+(m=o*a+(U-(a-3-i))*u),0))+.9617966939259756*(m-(l-d))+En[N])-((A=Sn(A=(v=.9617967009544373*l)+p+(y=jn[N])+(w=h),0))-w-y-v),n[0]=A,n[1]=b,n}(_n,i,e);if(v=(t-(y=Sn(t,0)))*p[0]+t*p[1],l=y*p[0],en(Yn,A=v+l),b=Hn(Yn[0]),w=Hn(Yn[1]),b>=xn){if(0!=(b-xn|w))return a*Pn*Pn;if(v+8008566259537294e-32>A-l)return a*Pn*Pn}else if((b&Wn)>=1083231232){if(0!=(b-3230714880|w))return a*Vn*Vn;if(v<=A-l)return a*Vn*Vn}return A=function(n,r,t){var e,u,i,f,o,a,c,y,l,v;return l=((y=n&Gn|0)>>20)-V|0,c=0,y>1071644672&&(u=W(0,((c=n+(Mn>>l+1)>>>0)&~(Ln>>(l=((c&Gn)>>20)-V|0)))>>>0),c=(c&Ln|Mn)>>20-l>>>0,n<0&&(c=-c),r-=u),n=Hn(n=E(a=1-((a=(i=.6931471824645996*(u=Sn(u=t+r,0)))+(f=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(n+=c<<20>>>0)>>20<=0?wn(a,c):W(a,n)}(b,l,v),a*A}var kn=2220446049250313e-31;function zn(n){var r,t;return 0===n?1/0:((n<0?-n:n)<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+4624429436045379e-20*n))))))))),t=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+1*n)))))))))):(r=4624429436045379e-20+(n=1/n)*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+709811.662581658*n))))))))),t=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+0*n)))))))))),r/t)}var Bn=10.900511;function Cn(r,t){var e,u,i,f,o,a,c;return n(r)||n(t)||r<0||t<0?NaN:1===t?1/r:1===r?1/t:(c=r+t)<kn?(o=c/r,o/=t):c===r&&t<kn?1/t:c===t&&r<kn?1/r:(r<t&&(a=t,t=r,r=a),u=r+Bn-.5,i=t+Bn-.5,f=c+Bn-.5,o=zn(r)*(zn(t)/zn(c)),k(t*(e=r-.5-t))<100*f&&r>100?o*=mn(e*function(r){var t,e,u,i,f,o,a,c,y,l;if(r<-1||n(r))return NaN;if(-1===r)return P;if(r===x)return r;if(0===r)return r;if(l=1,(u=r<0?-r:r)<.41421356237309503){if(u<1.862645149230957e-9)return u<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,e=1)}return 0!==l&&(u<9007199254740992?(f=(l=((e=E(y=1+r))>>20)-V)>0?1-(y-r):r-(y-1),f/=y):(l=((e=E(y=r))>>20)-V,f=0),(e&=1048575)<434334?y=W(y,1072693248|e):(l+=1,y=W(y,1071644672|e),e=1048576-e>>2),i=y-1),t=.5*i*i,0===e?0===i?l*Y+(f+=l*_):l*Y-((c=t*(1-.6666666666666666*i))-(l*_+f)-i):(c=(a=(o=i/(2+i))*o)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(t-o*(t+c)):l*Y-(t-(o*(t+c)+(l*_+f))-i))}(-t/f)):o*=qn(u/f,e),o*=qn(f>1e10?u/f*(i/f):u*i/(f*f),t),o*=q(2.718281828459045/i))}return function(r,t){var e;return n(r)||r<=0||n(t)||t<=0?NaN:(e=t*Cn(1+1/r,t),t*Cn(1+2/r,t)-e*e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).variance=r();
//# sourceMappingURL=index.js.map
