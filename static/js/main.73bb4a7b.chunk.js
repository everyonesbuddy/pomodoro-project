(this["webpackJsonppomodoro-project"]=this["webpackJsonppomodoro-project"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(4),r=n.n(a),l=n(2),s=(n(9),n(0)),o=function(e){var t=e.title,n=e.changeTime,c=e.type,i=e.time,a=e.formatTime;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"time-sets",children:[Object(s.jsx)("button",{className:"btn-small deep-purple lighten-2",onClick:function(){return n(-60,c)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(s.jsx)("h3",{children:a(i)}),Object(s.jsx)("button",{className:"btn-small deep-purple lighten-2",onClick:function(){return n(60,c)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})]})};var j=function(){var e=Object(c.useState)(1500),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(300),r=Object(l.a)(a,2),j=r[0],u=r[1],b=Object(c.useState)(1500),d=Object(l.a)(b,2),m=d[0],h=d[1],O=Object(c.useState)(!1),f=Object(l.a)(O,2),p=f[0],g=f[1],x=Object(c.useState)(!1),v=Object(l.a)(x,2),N=v[0],k=v[1],w=function(e,t){if("break"===t){if(j<=60&&e<0)return;u((function(t){return t+e}))}else{if(m<=60&&e<0)return;h((function(t){return t+e})),p||i(m+e)}},S=function(e){var t=Math.floor(e/60),n=e%60;return(t<10?"0"+t:t)+":"+(n<10?"0"+n:n)};return Object(s.jsxs)("div",{className:"center-align",children:[Object(s.jsx)("h1",{children:"Pomodoro Clock"}),Object(s.jsxs)("div",{className:"dual-container",children:[Object(s.jsx)(o,{title:"break length",changeTime:w,type:"break",time:j,formatTime:S}),Object(s.jsx)(o,{title:"session length",changeTime:w,type:"session",time:m,formatTime:S})]}),Object(s.jsx)("h3",{children:N?"Break":"Session"}),Object(s.jsx)("h1",{children:S(n)}),Object(s.jsx)("button",{className:"btn-large deep-purple lighten-2",onClick:function(){(new Date).getTime();var e=(new Date).getTime()+1e3,t=N;if(!p){var n=setInterval((function(){(new Date).getTime()>e&&(i((function(e){return e<=0&&!t?(t=!0,k(!0),j):e<=0&&t?(t=!0,k(!0),m):e-1})),e+=1e3)}),30);localStorage.clear(),localStorage.setItem("interval-id",n)}p&&clearInterval(localStorage.getItem("interval-id")),g(!p)},children:p?Object(s.jsx)("i",{className:"material-icons",children:"pause_circle_filled"}):Object(s.jsx)("i",{className:"material-icons",children:"play_circle_filled"})}),Object(s.jsx)("button",{className:"btn-large deep-purple lighten-2",onClick:function(){i(1500),u(300),m(1500)},children:Object(s.jsx)("i",{className:"material-icons",children:"autorenew"})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.73bb4a7b.chunk.js.map