(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(50)},35:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),s=n(3),u=n(4),o=n(9),i=n(6),m=n(10),h=n(52),f=n(53),d=n(54),p=n(55),v=n(12),E=n(13);function g(){var e=Object(v.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return g=function(){return e},e}function b(){var e=Object(v.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return b=function(){return e},e}function y(){var e=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return y=function(){return e},e}var k=E.a.div(y()),j=E.a.h3(b()),C=E.a.ul(g()),w=function(){return r.a.createElement(k,null,r.a.createElement(j,null,r.a.createElement("a",{href:"#"},"Game of Thrones DB")),r.a.createElement(C,null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Characters")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Houses")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Books"))))},O=(n(35),n(11)),N=n.n(O),x=n(14),S=function(){function e(){var t=this;Object(s.a)(this,e),this.getResource=function(){var e=Object(x.a)(N.a.mark(function e(n){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._apiBase="https://www.anapioficeandfire.com/api"}return Object(u.a)(e,[{key:"getAllBooks",value:function(){return this.getResource("/books/")}},{key:"getBook",value:function(e){return this.getResource("/books/".concat(e,"/"))}},{key:"getAllCharacters",value:function(){var e=Object(x.a)(N.a.mark(function e(){var t,n=this;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters?page=5&pageSize=10");case 2:return t=e.sent,e.abrupt("return",t.map(function(e){return n._transformCaracters(e)}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(){var e=Object(x.a)(N.a.mark(function e(t){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformCaracters(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllHouses",value:function(){return this.getResource("/houses/")}},{key:"getHouse",value:function(e){return this.getResource("/houses/".concat(e,"/"))}},{key:"_transformCaracters",value:function(e){return{name:e.name,gender:e.gender,born:e.born,died:e.died,culture:e.culture}}},{key:"_transformHouse",value:function(e){return{name:e.name,region:e.region,words:e.words,titles:e.titles,overlord:e.overlord,ancestraWeapons:e.ancestraWeapons}}},{key:"_transformBook",value:function(e){return{name:e.name,numberOfPages:e.numberOfPages,publiser:e.publiser,released:e.released}}}]),e}(),B=(n(39),function(){return r.a.createElement("div",{className:"loadingio-spinner-spin-w220yqsosks"},r.a.createElement("div",{className:"ldio-sqpe1bsg6z"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),I=function(){return r.a.createElement("span",null,"Something go wrong")},A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new S,n.state={char:{},loading:!0,error:!1},n.onCharLoaded=function(e){n.setState({char:e,loading:!1})},n.updateChar=function(){var e=Math.floor(115*Math.random()+25);n.gotService.getCharacter(e).then(n.onCharLoaded).catch(n.onError)},n.onError=function(){n.setState({error:!0,loading:!1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,3e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,l=a?r.a.createElement(I,null):null,c=n?r.a.createElement(B,null):null,s=n||a?null:r.a.createElement(R,{char:t});return r.a.createElement("div",{className:"random-block rounded"},l,c,s)}}]),t}(a.Component),R=function(e){var t=e.char,n=t.name,a=t.gender,l=t.born,c=t.died,s=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,s))))},_=A,D=(n(41),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new S,n.state={charList:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.gotService.getAllCharacters().then(function(t){return e.setState({charList:t})}).catch(function(e){return console.log(e)})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e,n){return r.a.createElement("li",{key:n,className:"list-group-item",onClick:function(){return t.props.onCharSelected(n)}},e.name)})}},{key:"render",value:function(){var e=this.state.charList;if(!e)return r.a.createElement(B,null);var t=this.renderItems(e);return r.a.createElement("ul",{className:"item-list list-group"},t)}}]),t}(a.Component)),M=(n(43),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new S,n.state={char:void 0},n.updateChar=function(){var e=n.props.charId;e&&n.gotService.getCharacter(e).then(function(e){return n.setState({char:e})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){if(!this.state.char)return console.log("here"),r.a.createElement("span",{className:"select-error"},"Please select a character");var e=this.state.char,t=e.name,n=e.gender,a=e.born,l=e.died,c=e.culture;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born"),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died"),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture"),r.a.createElement("span",null,c))))}}]),t}(a.Component)),z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={randomChar:!0,selectedChar:130},n.onCharSelected=function(e){n.setState({selectedChar:e})},n.checkToggle=function(){n.state.randomChar?n.setState({randomChar:!1}):n.setState({randomChar:!0})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.randomChar?r.a.createElement(_,null):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(w,null)),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,{lg:{size:5,offset:0}},t)),r.a.createElement(p.a,{color:"primary",onClick:function(){return e.checkToggle()}},"Toggle"),r.a.createElement(f.a,null,r.a.createElement(d.a,{md:"6"},r.a.createElement(D,{onCharSelected:this.onCharSelected})),r.a.createElement(d.a,{md:"6"},r.a.createElement(M,{charId:this.state.selectedChar})))))}}]),t}(a.Component);n(46),n(48);c.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.b1148fee.chunk.js.map