/*! For license information please see downloader-0.9.6235.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{353:function(t,e){},354:function(t,e){},365:function(t,e){},367:function(t,e){},69:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(337)),o=i(n(355)),u=i(n(363)),d=i(n(332)),r=(i(n(379)),i(n(333))),f=i(n(8));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(e,n){var i={headers:{"Content-Type":"application/json"},method:"GET",encoding:"utf8",isBuffer:!1,json:!1};f.default.isString(e)?i.url=e:f.default.extend(i,e),i.data&&("GET"===i.method?i.url+="?"+r.default.stringify(i.data):(i.data=JSON.stringify(i.data),i.headers["Content-Length"]=new t(i.data).length)),f.default.extend(i,f.default.pick(d.default.parse(i.url),"protocol","hostname","port","path","auth")),delete i.url;var l=u.default.request(i,function(e){var u=[],d=0;e.on("data",function(t){u.push(t),d+=t.length}),e.on("end",function(){var r="";if(i.isBuffer)r=t.concat(u,d);else{for(var f=new t(d),l=0,c=0,s=u.length;l<s;l++){var p=u[l];p.copy(f,c),c+=p.length}r=a.default.decode(f,o.default.detect(f)).toString(),i.json&&(r=JSON.parse(r))}n(null,e,r)})});l.on("error",n),"GET"!==i.method&&i.data&&l.write(i.data),l.end()}}).call(this,n(305).Buffer)}}]);