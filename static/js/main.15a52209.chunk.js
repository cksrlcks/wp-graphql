(this["webpackJsonpwp-graphql"]=this["webpackJsonpwp-graphql"]||[]).push([[0],{429:function(e,t,n){e.exports=n(745)},504:function(e,t,n){},742:function(e,t,n){},743:function(e,t,n){},744:function(e,t,n){},745:function(e,t,n){"use strict";n.r(t);n(124),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(195),n(197),n(198),n(199),n(200),n(201),n(202),n(204),n(205),n(150),n(209),n(210),n(93),n(214),n(215),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(232),n(233),n(234),n(235),n(236),n(237),n(158),n(159),n(239),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(161),n(256),n(257),n(258),n(259),n(261),n(262),n(263),n(264),n(265),n(267),n(269),n(271),n(272),n(274),n(275),n(276),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(110),n(295),n(296),n(297),n(298),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(163),n(318),n(319),n(165),n(320),n(321),n(322),n(323),n(95),n(324),n(325),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(388),n(389),n(172),n(391),n(392),n(393),n(395),n(173),n(396),n(441),n(489);var a=n(0),r=n.n(a),o=n(416),s=n.n(o),c=n(57),l=n(68),m=n(417),i=n(427),u=n(418),d=n(428),p=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){return window.scrollTo(0,0)},n.componentDidUpdate=function(e){n.props.location!==e.location&&window.scrollTo(0,0)},n.render=function(){return n.props.children},n}return Object(d.a)(t,e),t}(a.PureComponent),g=Object(l.f)(p),f=n(26),E=n(38),b=n(44),v=(n(504),n(81)),h=n(121),N=n(69),O=n(9),_=n(47),y=n(183),j=n.n(y),x=n(750),I=n(749),R=function(e){var t=e.language,n=e.children,a=t.replace("wp-block-code","").replace(/ /gi,"");return r.a.createElement(x.a,{style:I.a,language:a},n)};function w(){var e=Object(f.a)(["\n    query GetSinglePost($id: ID!){\n        post(id: $id) {\n            title(format: RENDERED)\n            author {\n                name\n                }\n            content(format: RENDERED)\n            date\n            id\n            termNames(taxonomies: CATEGORY)\n            tags {\n                edges {\n                    node {\n                    id\n                    }\n                }\n            }\n        }   \n  }\n"]);return w=function(){return e},e}function C(){var e=Object(f.a)(["\n    margin:0 auto;\n    text-align:center;\n"]);return C=function(){return e},e}var M=Object(O.css)(C()),D=Object(E.b)(w()),P=function(e){var t,n,a=e.match,o=e.history,s=a.params.id,c=Object(b.a)(D,{variables:{id:s}}),l=c.loading,m=c.error,i=c.data,u=null===i||void 0===i?void 0:i.post.content,d=function(e){return null!=e.attribs.class?(console.log(e.attribs.class),e.attribs.class):null},p=function(e){return e.children.length>0&&"code"===e.children[0].name?e.children[0].children:e.children};return r.a.createElement("div",{className:"post_wrap"},m?r.a.createElement("p",{className:"error_message"},"\ud3ec\uc2a4\ud2b8\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"):l?r.a.createElement(_.BeatLoader,{size:10,css:M,color:"#01c080"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:o.goBack,className:"go_back"},r.a.createElement(N.a,{icon:v.a,className:"post_icon"}),r.a.createElement("i",null,"List")),r.a.createElement("h3",{className:"title"},null===i||void 0===i||null===(t=i.post)||void 0===t?void 0:t.title),r.a.createElement("div",{className:"meta"},r.a.createElement("p",{className:"date"},r.a.createElement(N.a,{icon:h.a,className:"post_icon"}),(n=null===i||void 0===i?void 0:i.post.date,new Date(n).toDateString())),r.a.createElement("p",{className:"writer"},r.a.createElement(N.a,{icon:v.b,className:"post_icon"}),null===i||void 0===i?void 0:i.post.author.name)),r.a.createElement("div",{className:"content"},j()(u,{replace:function(e){if("pre"===e.name)return e.children.length>0&&r.a.createElement(R,{language:d(e)},Object(y.domToReact)(p(e)))}}))))},S=n(48),T=(n(742),function(e){var t=e.post.node,n=t.title,a=t.date,o=t.author,s=t.featuredImage,l=t.excerpt,m=t.id,i=t.termNames,u=t.tags;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/".concat(i,"/").concat(m),className:"post_card"},s&&r.a.createElement("figure",{className:"poster"},r.a.createElement("img",{src:s.mediaItemUrl,alt:n})),r.a.createElement("h3",{className:"title",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l},className:"content"}),u.nodes.length>0&&r.a.createElement("div",{className:"terms"},u.nodes.map((function(e,t){return r.a.createElement("i",{className:"tag",key:t},e.name)}))),r.a.createElement("div",{className:"meta"},r.a.createElement("p",{className:"category"},r.a.createElement(N.a,{icon:v.c,className:"post_icon"}),i),r.a.createElement("p",{className:"date"},r.a.createElement(N.a,{icon:h.a,className:"post_icon"}),function(e){return new Date(e).toDateString()}(a)),r.a.createElement("p",{className:"writer"},r.a.createElement(N.a,{icon:v.b,className:"post_icon"}),null===o||void 0===o?void 0:o.name))))}),k=n(67);function L(){var e=Object(f.a)(["\n    query getRecentPost($cursor: String) {\n        posts(first: 5, after: $cursor) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    date\n                    author {\n                        name\n                    }\n                    featuredImage {\n                        mediaItemUrl\n                    }\n                    excerpt\n                    id\n                    title(format: RENDERED)\n                    termSlugs(taxonomies: TAG)\n                    termNames(taxonomies: CATEGORY)\n                    tags {\n                        nodes {\n                            name\n                        }\n                    }\n                }\n            }\n            __typename\n        }\n        }\n\n"]);return L=function(){return e},e}function A(){var e=Object(f.a)(["\n    margin:0 auto;\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-50%);\n"]);return A=function(){return e},e}var B=Object(O.css)(A()),G=Object(E.b)(L()),$=function(){var e=Object(b.a)(G,{variables:{after:null}}),t=e.loading,n=e.error,a=e.data,o=e.fetchMore;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("p",{className:"error_message"},"\ub9ac\uc2a4\ud2b8\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"),!t&&a&&a.posts&&r.a.createElement(k.a,{dataLength:a.posts.edges.length,next:function(){o({variables:{cursor:a.posts.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult,a=n.posts.edges,r=n.posts.pageInfo;return n?{posts:{pageInfo:r,edges:[].concat(Object(S.a)(e.posts.edges),Object(S.a)(a)),__typename:"RootQueryToPostConnectionEdge"}}:e}})},hasMore:a.posts.pageInfo.hasNextPage,loader:r.a.createElement(_.BeatLoader,{css:B,size:20,color:"#01c080"}),endMessage:r.a.createElement("p",{className:"end_message"},"\ub9c8\uc9c0\ub9c9 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4")},a.posts.edges.map((function(e,t){return r.a.createElement(T,{post:e,key:t})}))))};function q(){var e=Object(f.a)(['\n    query getRecentPost($cursor: String) {\n        posts(first: 5, after: $cursor, where: {categoryName: "work"}) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    date\n                    author {\n                        name\n                    }\n                    featuredImage {\n                        mediaItemUrl\n                    }\n                    excerpt\n                    id\n                    title(format: RENDERED)\n                    termSlugs(taxonomies: TAG)\n                    termNames(taxonomies: CATEGORY)\n                    tags {\n                        nodes {\n                            name\n                        }\n                    }\n                }\n            }\n            __typename\n        }\n        }\n\n']);return q=function(){return e},e}function Q(){var e=Object(f.a)(["\n    margin:0 auto;\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-50%);\n    color:red;\n"]);return Q=function(){return e},e}var F=Object(O.css)(Q()),z=Object(E.b)(q()),U=function(){var e=Object(b.a)(z,{variables:{after:null}}),t=e.loading,n=e.error,a=e.data,o=e.fetchMore;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("p",{className:"error_message"},"\ub9ac\uc2a4\ud2b8\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"),!t&&a&&a.posts&&r.a.createElement(k.a,{dataLength:a.posts.edges.length,next:function(){o({variables:{cursor:a.posts.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult,a=n.posts.edges,r=n.posts.pageInfo;return n?{posts:{pageInfo:r,edges:[].concat(Object(S.a)(e.posts.edges),Object(S.a)(a)),__typename:"RootQueryToPostConnectionEdge"}}:e}})},hasMore:a.posts.pageInfo.hasNextPage,loader:r.a.createElement(_.BeatLoader,{css:F,size:20,color:"#01c080"}),endMessage:r.a.createElement("p",{className:"end_message"},"\ub9c8\uc9c0\ub9c9 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4")},a.posts.edges.map((function(e,t){return r.a.createElement(T,{post:e,key:t})}))))};function Y(){var e=Object(f.a)(['\n    query getRecentPost($cursor: String) {\n        posts(first: 5, after: $cursor, where: {categoryName: "study"}) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    date\n                    author {\n                        name\n                    }\n                    featuredImage {\n                        mediaItemUrl\n                    }\n                    excerpt\n                    id\n                    title(format: RENDERED)\n                    termSlugs(taxonomies: TAG)\n                    termNames(taxonomies: CATEGORY)\n                    tags {\n                        nodes {\n                            name\n                        }\n                    }\n                }\n            }\n            __typename\n        }\n        }\n\n']);return Y=function(){return e},e}function H(){var e=Object(f.a)(["\n    margin:0 auto;\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-50%);\n    color:red;\n"]);return H=function(){return e},e}var J=Object(O.css)(H()),W=Object(E.b)(Y()),K=function(){var e=Object(b.a)(W,{variables:{after:null}}),t=e.loading,n=e.error,a=e.data,o=e.fetchMore;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("p",{className:"error_message"},"\ub9ac\uc2a4\ud2b8\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"),!t&&a&&a.posts&&r.a.createElement(k.a,{dataLength:a.posts.edges.length,next:function(){o({variables:{cursor:a.posts.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult,a=n.posts.edges,r=n.posts.pageInfo;return n?{posts:{pageInfo:r,edges:[].concat(Object(S.a)(e.posts.edges),Object(S.a)(a)),__typename:"RootQueryToPostConnectionEdge"}}:e}})},hasMore:a.posts.pageInfo.hasNextPage,loader:r.a.createElement(_.BeatLoader,{css:J,size:20,color:"#01c080"}),endMessage:r.a.createElement("p",{className:"end_message"},"\ub9c8\uc9c0\ub9c9 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4")},a.posts.edges.map((function(e,t){return r.a.createElement(T,{post:e,key:t})}))))};function V(){var e=Object(f.a)(['\n    query getRecentPost($cursor: String) {\n        posts(first: 5, after: $cursor, where: {categoryName: "blog"}) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    date\n                    author {\n                        name\n                    }\n                    featuredImage {\n                        mediaItemUrl\n                    }\n                    excerpt\n                    id\n                    title(format: RENDERED)\n                    termSlugs(taxonomies: TAG)\n                    termNames(taxonomies: CATEGORY)\n                    tags {\n                        nodes {\n                            name\n                        }\n                    }\n                }\n            }\n            __typename\n        }\n        }\n\n']);return V=function(){return e},e}function X(){var e=Object(f.a)(["\n    margin:0 auto;\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-50%);\n    color:red;\n"]);return X=function(){return e},e}var Z=Object(O.css)(X()),ee=Object(E.b)(V()),te=function(){var e=Object(b.a)(ee,{variables:{after:null}}),t=e.loading,n=e.error,a=e.data,o=e.fetchMore;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("p",{className:"error_message"},"\ub9ac\uc2a4\ud2b8\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"),!t&&a&&a.posts&&r.a.createElement(k.a,{dataLength:a.posts.edges.length,next:function(){o({variables:{cursor:a.posts.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult,a=n.posts.edges,r=n.posts.pageInfo;return n?{posts:{pageInfo:r,edges:[].concat(Object(S.a)(e.posts.edges),Object(S.a)(a)),__typename:"RootQueryToPostConnectionEdge"}}:e}})},hasMore:a.posts.pageInfo.hasNextPage,loader:r.a.createElement(_.BeatLoader,{css:Z,size:20,color:"#01c080"}),endMessage:r.a.createElement("p",{className:"end_message"},"\ub9c8\uc9c0\ub9c9 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4")},a.posts.edges.map((function(e,t){return r.a.createElement(T,{post:e,key:t})}))))},ne=function(){return r.a.createElement("div",null,"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")},ae=function(e){return r.a.createElement("div",null)};function re(){var e=Object(f.a)(["\n{\n    generalSettings {\n    url\n    description\n    title\n  }\n}\n\n"]);return re=function(){return e},e}function oe(){var e=Object(f.a)(["\n    position:absolute;\n    top:50%;\n    left:50%;\n    transform:translate(-50%);\n"]);return oe=function(){return e},e}var se=Object(O.css)(oe()),ce=Object(E.b)(re()),le=function(){var e=Object(b.a)(ce),t=e.loading,n=e.data,a=e.error;return r.a.createElement("aside",{className:"aside"},r.a.createElement("section",{className:"profile"},t?r.a.createElement(_.BeatLoader,{size:10,css:se,color:"#01c080"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",{className:"site_pic"}),r.a.createElement("figure",{className:"profile_pic"},r.a.createElement("div",{className:"frame"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/bdec2720f46316a7ae8fff2ef7739eb4?s=200",alt:""}))),r.a.createElement("div",{className:"site_info"},r.a.createElement("h1",{className:"title"},null===n||void 0===n?void 0:n.generalSettings.title),r.a.createElement("a",{href:"https://heavybear.net",className:"url",target:"_blank",rel:"noopener noreferrer"},"https://heavybear.net"),r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:null===n||void 0===n?void 0:n.generalSettings.description}}))),a&&r.a.createElement("p",{class:"error_message"},"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")),r.a.createElement("nav",{className:"gnb"},r.a.createElement("ul",{className:"gnb_item"},r.a.createElement("li",null,r.a.createElement(c.c,{exact:!0,to:"/",activeClassName:"active"},"Posts")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/Work",activeClassName:"active"},"Work")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/Study",activeClassName:"active"},"Study")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/Blog",activeClassName:"active"},"Blog")))),r.a.createElement(ae,null))};n(743);var me=function(){return r.a.createElement(c.a,{basename:"/wp-graphql"},r.a.createElement(g,null,r.a.createElement("div",{className:"wrap"},r.a.createElement(le,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:$}),r.a.createElement(l.a,{exact:!0,path:"/work",component:U}),r.a.createElement(l.a,{exact:!0,path:"/study",component:K}),r.a.createElement(l.a,{exact:!0,path:"/blog",component:te}),r.a.createElement(l.a,{path:"/work/:id",component:P}),r.a.createElement(l.a,{path:"/study/:id",component:P}),r.a.createElement(l.a,{path:"/blog/:id",component:P}),r.a.createElement(l.a,{component:ne}))))))},ie=n(33),ue=new E.a({uri:"https://batdog.kr/graphql"});n(744);s.a.render(r.a.createElement(ie.a,{client:ue},r.a.createElement(me,null)),document.getElementById("root"))}},[[429,1,2]]]);
//# sourceMappingURL=main.15a52209.chunk.js.map