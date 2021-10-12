(this["webpackJsonpmovie-tindr"]=this["webpackJsonpmovie-tindr"]||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var r,i,a,o,c=n(1),s=n.n(c),d=n(25),l=n.n(d),m=n(3),h=n(2),u=h.d.footer(r||(r=Object(m.a)(["\n  height: ",";\n  background-color: ",";\n  color: ",";\n  display: grid;\n  place-content: center;\n"])),(function(e){return e.theme.dimensions.footerHeight}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),b=n(0),p=function(){return Object(b.jsx)(u,{children:"created by mbalazy"})},g=h.d.header(i||(i=Object(m.a)(["\n  height: ",";\n  color: ",";\n  background: ",";\n  display: flex;\n  align-items: center;\n"])),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black})),j=h.d.h1(a||(a=Object(m.a)(["\n  margin-left: 3%;\n"]))),f=function(){return Object(b.jsx)(g,{children:Object(b.jsx)(j,{children:"Movie Tindr"})})},v=n(5),O=n(14),x=n.n(O);!function(e){e[e.SetMovies=0]="SetMovies",e[e.AcceptMovie=1]="AcceptMovie",e[e.RejectMovie=2]="RejectMovie"}(o||(o={}));var w=n(29),y=n(11);function k(e,t){switch(t.type){case o.SetMovies:return Object(v.a)(Object(v.a)({},e),{},{allMovies:t.payload.movies});case o.AcceptMovie:return Object(v.a)(Object(v.a)({},e),{},{allMovies:Object(y.a)(e.allMovies.filter((function(e){return e.id!==t.payload.movie.id}))),favouriteMovies:[].concat(Object(y.a)(e.favouriteMovies),[t.payload.movie])});case o.RejectMovie:return Object(v.a)(Object(v.a)({},e),{},{allMovies:Object(y.a)(e.allMovies.filter((function(e){return e.id!==t.payload.movie.id})))});default:return e}}var M,S,z,R,U,A,C,E,T,D,B,H,N,F,L,I,P,W,Y,J={allMovies:[],favouriteMovies:[]},G=Object(c.createContext)({state:J,dispatch:function(){}}),Q=function(e){var t=e.children,n=Object(c.useReducer)(k,J),r=Object(w.a)(n,2),i=r[0],a=r[1];return Object(b.jsx)(G.Provider,{value:{state:i,dispatch:a},children:t})},Z="https://mybackendapi.com/",q=function(){var e=Object(c.useContext)(G);if(void 0===e)throw new Error("useContext must be used within Provider");var t=e.dispatch,n=e.state.allMovies[0];return{dispatch:t,reject:function(){var e;x.a.put("".concat(Z,"/recommendations/").concat(n.id,"/accept")),t((e=n,{type:o.RejectMovie,payload:{movie:e}}))},accept:function(){var e;x.a.put("".concat(Z,"/recommendations/").concat(n.id,"/reject")),t((e=n,{type:o.AcceptMovie,payload:{movie:e}}))},currentMovie:n}},V=h.d.button(M||(M=Object(m.a)(["\n  height: 5rem;\n  width: 18rem;\n  box-shadow: 0px 6px 21px 1px rgba(0, 0, 0, 0.14);\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n\n  transition: all 0.1s;\n  backface-visibility: hidden;\n\n  &:hover {\n    transform: scale(1.01) translateY(-2px);\n    box-shadow: 0px 12px 21px 1px rgba(0, 0, 0, 0.14);\n  }\n  &:active {\n    transform: scale(1) translateY(0px);\n    box-shadow: 0px 6px 21px 1px rgba(0, 0, 0, 0.14);\n  }\n\n  ","\n"])),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(S||(S=Object(m.a)(["\n    "," {\n      width: 80%;\n      place-self: center;\n    }\n  "])),n(r.l))})),X=Object(h.d)(V)(z||(z=Object(m.a)(["\n  background: rgba(254, 112, 112, 0.71);\n"]))),K=Object(h.d)(V)(R||(R=Object(m.a)(["\n  background: rgba(32, 162, 0, 0.63);\n"]))),$=function(){var e=q(),t=e.reject,n=e.accept;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(X,{onClick:t,children:"Reject"}),Object(b.jsx)(K,{onClick:n,children:"Accept"})]})},_=h.d.div(U||(U=Object(m.a)(["\n  grid-column: 2 / span 1;\n  grid-row: 1 / span 1;\n  place-self: center start;\n  font-size: ",";\n\n  ","\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(A||(A=Object(m.a)(["\n    "," {\n      font-size: ",";\n    }\n  "])),n(r.l),(function(e){return e.theme.fontSize.l}))})),ee=h.d.div(C||(C=Object(m.a)(["\n  grid-column: 3 / span 1;\n  place-self: center start;\n  font-size: ",";\n\n  ","\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(E||(E=Object(m.a)(["\n    "," {\n      font-size: ",";\n      grid-column: 2 / span 1;\n      grid-row: 2 / span 1;\n    }\n  "])),n(r.l),(function(e){return e.theme.fontSize.l}))})),te=h.d.div(T||(T=Object(m.a)(["\n  grid-column: 2 / -1;\n\n  ","\n"])),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(D||(D=Object(m.a)(["\n    "," {\n      grid-column: 1 / -1;\n      grid-row: 3 / span 1;\n      width: 97%;\n    }\n  "])),n(r.l))})),ne=function(e){var t=e.title,n=e.rating,r=e.summary;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{children:Object(b.jsx)("h3",{children:t})}),Object(b.jsx)(ee,{children:Object(b.jsxs)("p",{children:[n,"/10"]})}),Object(b.jsx)(te,{children:Object(b.jsx)("p",{children:r})})]})},re=h.d.div(B||(B=Object(m.a)(["\n  grid-column: 1 / span 1;\n  grid-row: 1/-1;\n  box-shadow: 0px 7px 56px 1px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n\n  ","\n"])),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(H||(H=Object(m.a)(["\n    "," {\n      grid-column: 1 / span 1;\n      grid-row: 1/ span 2;\n    }\n  "])),n(r.l))})),ie=h.d.img(N||(N=Object(m.a)(["\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),ae=function(e){var t=e.src;return Object(b.jsx)(re,{children:Object(b.jsx)(ie,{src:t})})},oe=h.d.div(F||(F=Object(m.a)(["\n  width: 80vw;\n  max-width: 100rem;\n  display: grid;\n  grid-template-columns: 3fr 2fr 18rem;\n  grid-template-rows: 16rem 20rem 10rem;\n  gap: 6rem;\n\n  ","\n"])),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(L||(L=Object(m.a)(["\n    "," {\n      grid-template-columns: 1fr 1fr;\n      grid-template-rows: 14rem 10rem auto 8rem;\n      gap: 2.4rem;\n    }\n  "])),n(r.l))})),ce=function(e){var t=e.title,n=e.rating,r=e.summary,i=e.imageUrl;return Object(b.jsxs)(oe,{children:[Object(b.jsx)(ae,{src:i}),Object(b.jsx)(ne,{title:t,rating:n,summary:r}),Object(b.jsx)($,{})]})},se=h.d.main(I||(I=Object(m.a)(["\n  margin: 3rem;\n\n  ","\n"])),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(P||(P=Object(m.a)(["\n    "," {\n      margin: 2rem 1.6rem;\n    }\n  "])),n(r.l))})),de=h.d.div(W||(W=Object(m.a)(["\n  background-color: ",";\n  padding: 3rem;\n  border-radius: 6px;\n  min-height: calc(100vh - 14rem);\n  display: grid;\n  place-items: center;\n\n  ","\n"])),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme,n=t.down,r=t.breakpoints;return Object(h.c)(Y||(Y=Object(m.a)(["\n    "," {\n      padding: 2.6rem 1.6rem;\n    }\n  "])),n(r.l))})),le=function(){var e=q().currentMovie;return Object(b.jsx)(se,{children:Object(b.jsx)(de,{children:e?Object(b.jsx)(ce,Object(v.a)({},e)):Object(b.jsx)("p",{children:"There is no more films sugestions"})})})},me=[{id:"1",imageUrl:"https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",title:"Venom",summary:"Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",rating:"8.3"},{id:"2",imageUrl:"https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",title:"Squid Game",summary:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games\u2014with high stakes. But, a tempting prize awaits the victor.",rating:"7.9"},{id:"3",imageUrl:"https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",title:"What If...?",summary:"Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",rating:"8.3"},{id:"4",imageUrl:"https://image.tmdb.org/t/p/w500/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg",title:"Lucifer",summary:"Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",rating:"8.5"},{id:"5",imageUrl:"https://image.tmdb.org/t/p/w500/9NQybnf78WiXWcxPaf7cyF09bOm.jpg",title:"El Juego de las Llaves",summary:"A casual encounter between Adriana and Sergio, two former high school friends, triggers the beginning of the game of the keys where four couples generate new sexual and emotional combinations in a dangerous and lustful game.",rating:"5.3"},{id:"6",imageUrl:"https://image.tmdb.org/t/p/w500/w21lgYIi9GeUH5dO8l3B9ARZbCB.jpg",title:"The Walking Dead",summary:"Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",rating:"8.1"},{id:"7",imageUrl:"https://image.tmdb.org/t/p/w500/4brWcSXdH31BZUTtRTHj2BYFe6M.jpg",title:"Maid",summary:"After fleeing an abusive relationship, a young mother finds a job cleaning houses and fights to provide a better future for her child.",rating:"7.9"},{id:"8",imageUrl:"https://image.tmdb.org/t/p/w500/dsAJhCLYX1fiNRoiiJqR6Up4aJ.jpg",title:"Rachael Ray",summary:"Rachael Ray, also known as The Rachael Ray Show, is an American talk show starring Rachael Ray that debuted in syndication in the United States and Canada on September 18, 2006. It is filmed at Chelsea Television Studios in New York City.",rating:"6.4"},{id:"9",imageUrl:"https://image.tmdb.org/t/p/w500/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",title:"The Good Doctor",summary:"A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",rating:"8.9"},{id:"10",imageUrl:"https://image.tmdb.org/t/p/w500/5qQWZOSD1xn2lNge7kd4QaPTN3O.jpg",title:"Les Mutants",summary:"In Notre-Dame-du-Lointain, a village far from major urban centers, three young people make a strange discovery. In an abandoned barn, a family of mutants is hiding: human-like beings, but struggling with horrible animal growths.",rating:"6.3"}];var he,ue=function(){var e=q().dispatch,t=function(){return e((t=me,{type:o.SetMovies,payload:{movies:t}}));var t};return Object(c.useEffect)((function(){t()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(le,{}),Object(b.jsx)(p,{})]})},be=Object(h.b)(he||(he=Object(m.a)(["\n  *, *::after, *::before {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n  }\n  \n  body {\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n    min-height: 100vh;\n    background: #EEEEEE;\n  }\n\n  a {\n    text-decoration: none\n  }\n\n  li {\n    list-style: none;\n  }\n"]))),pe={colors:{white:"#FFF",black:"rgba(0, 0, 0, 0.9)"},fontSize:{s:"1.5rem",m:"1.6rem",l:"2rem",xl:"2.4rem"},dimensions:{headerHeight:"8rem",footerHeight:"5rem"},up:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"@media (min-".concat(t?"height":"width",": calc(").concat(e," + 1px))")},down:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"@media (max-".concat(t?"height":"width",": ").concat(e,")")},breakpoints:{l:"1024px",m:"767px",s:"480px"}};n(53);l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Q,{children:Object(b.jsxs)(h.a,{theme:pe,children:[Object(b.jsx)(be,{}),Object(b.jsx)(ue,{})]})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.802565ec.chunk.js.map