(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(t,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),s=a(53),n=a.n(s),i=(a(66),a(54)),l=a(55),d=a(59),c=a(56),u=a(60),h=(a(67),a(68),a(10)),g=a(17),p=a.n(g),b=a(58),m=a.n(b),f=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(d.a)(this,Object(c.a)(e).call(this,t))).state={bulkdata:[],acctrans:[],accgas:[],time:[],users:[],fees:[],timestamp:[],transarr:[],accgasarray:[],cumgasprices:[]},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;m.a.get("https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0xbe233c4bc5c4e4f0c9c7d2b1908047dc51f98748&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken").then(function(e){for(var a=e.data,r=e.data.result.length,o=e.data.result[e.data.result.length-1].cumulativeGasUsed,s=[],n=[],i=[],l=Array.apply(null,{length:r}).map(Number.call,Number),d=0;d<e.data.result.length;d++)s.push(e.data.result[d].from);var c=[];for(d=0;d<e.data.result.length;d++)c.push(e.data.result[d].cumulativeGasUsed);for(d=0;d<e.data.result.length;d++)n.push(p.a.unix(e.data.result[d].timeStamp).utc().format("dddd, MMMM Do"));for(d=0;d<e.data.result.length;d++)i.push(parseInt(e.data.result[d].gasPrice));var u=0;for(d=0;d<i.length;d++)u+=i[d];var h=[];for(d=0;d<s.length;d++){var g=s.slice(0,d);h.push(Array.from(new Set(g)).length)}var b=[];for(d=0;d<s.length;d++)b.push(parseInt(e.data.result[d].gasPrice));var m=[];b.reduce(function(t,e,a){return m[a]=t+e},0);var f=p.a.unix(e.data.result[e.data.result.length-1].timeStamp).utc().format("dddd, MMMM Do, YYYY h:mm:ss A");t.setState({bulkdata:a}),t.setState({acctrans:r}),t.setState({accgas:o}),t.setState({time:f}),t.setState({users:h}),t.setState({fees:u}),t.setState({timestamp:n}),t.setState({transarr:l}),t.setState({accgasarray:c}),t.setState({cumgasprices:m}),console.log(a),console.log(o),console.log(f),console.log(s),console.log(n),console.log(u),console.log(h)})}},{key:"render",value:function(){var t={labels:this.state.timestamp,datasets:[{label:"Accumulative Users = "+this.state.users[this.state.users.length-1],fill:!1,lineTension:.1,backgroundColor:"orange",borderColor:"orange",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.users}]},e={labels:this.state.timestamp,datasets:[{label:"Accumulative Interactions = "+this.state.transarr[this.state.transarr.length-1],fill:!1,lineTension:.1,backgroundColor:"orange",borderColor:"orange",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.transarr}]},a={labels:this.state.timestamp,datasets:[{label:"Accumulative Gas Used = "+this.state.accgasarray[this.state.accgasarray.length-1],fill:!1,lineTension:.1,backgroundColor:"orange",borderColor:"orange",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.accgasarray}]},r={labels:this.state.timestamp,datasets:[{label:"Accumulative Gas Fees = "+this.state.cumgasprices[this.state.cumgasprices.length-1],fill:!1,lineTension:.1,backgroundColor:"orange",borderColor:"orange",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.cumgasprices}]};return o.a.createElement("div",{id:"chartHolder"},o.a.createElement("div",{id:"lineChart"},o.a.createElement(h.a,{data:t,width:10,height:50})),o.a.createElement("div",{id:"lineChart2"},o.a.createElement(h.a,{data:e,width:10,height:50})),o.a.createElement("div",{id:"lineChart3"},o.a.createElement(h.a,{data:a,width:10,height:50})),o.a.createElement("div",{id:"lineChart4"},o.a.createElement(h.a,{data:r,width:10,height:50})))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},61:function(t,e,a){t.exports=a(177)},66:function(t,e,a){},67:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},68:function(t,e,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.1d347be5.chunk.js.map