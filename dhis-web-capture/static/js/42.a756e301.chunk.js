(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{458:function(n,r,t){var e=t(260);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],o=["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],a=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],u=["AM","PM"],d=["am","pm"],i=["a.m.","p.m."],f={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){f[n+"o"]=function(r,t){return t[n](r)+"."}}),{formatters:f,formattingTokensRegExp:e(f)}}}}]);