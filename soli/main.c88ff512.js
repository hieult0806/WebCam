parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OiyE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CST=void 0;var E={SCENES:{LOAD_SCENE:"LOAD_SCENE",START_SCENE:"START_SCENE",GAME_SCENE:"GAME_SCENE",HUD_SCENE:"HUD_SCENE"}};exports.CST=E;
},{}],"XGdL":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function e(){t(this,e),this.cardWidth=72,this.cardHeight=96,this.pilePositions={discard:new Phaser.Math.Vector2(718,148),stock:new Phaser.Math.Vector2(618,148)};for(var o=0;o<7;o+=1)this.pilePositions["tableau_".concat(o)]=new Phaser.Math.Vector2(80*o+236,274);for(var a=0;a<4;a+=1)this.pilePositions["foundation_".concat(a)]=new Phaser.Math.Vector2(80*a+236,148)},o=new e;exports.default=o;
},{}],"xT1N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Piles.js"));function e(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=f();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return l(this,i)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(e){s(o,Phaser.GameObjects.Sprite);var i=c(o);function o(e,r,s){var u;return n(this,o),u=i.call(this,e,0,0,"sr_cards_desktop","img_card_1_0"),e.add.existing(a(u)),u.suit=r,u.value=s,u.pile="none",u.position=-1,u.flipped=!1,u.setDisplaySize(t.default.cardWidth,t.default.cardHeight),u.setInteractive(),u}return r(o,[{key:"reposition",value:function(e,i){this.pile=e,this.position=i,this.setDepth(this.position+10),"stock"==this.pile||"discard"==this.pile?this.setPosition(t.default.pilePositions[this.pile].x+.2*i,t.default.pilePositions[this.pile].y+.2*i):this.pile.match(/tableau_*/)?this.setPosition(t.default.pilePositions[this.pile].x,t.default.pilePositions[this.pile].y+10*i):this.pile.match(/foundation_*/)&&this.setPosition(t.default.pilePositions[this.pile].x,t.default.pilePositions[this.pile].y)}},{key:"flip",value:function(t){this.setTexture("sr_cards_desktop",this.selectImage(this.suit,this.value)),t.input.setDraggable(this),this.flipped=!0}},{key:"flipBack",value:function(t){this.setTexture("sr_cards_desktop","cardback"),t.input.setDraggable(this,!1),this.flipped=!1}},{key:"selectImage",value:function(t,e){return"img_card_".concat(e,"_").concat(t)}}]),o}();exports.default=h;
},{"./Piles.js":"XGdL"}],"Cwst":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HudScene=void 0;var t=require("./../CST");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=f();return function(){var n,r=d(t);if(e){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(e){o(a,Phaser.Scene);var r=s(a);function a(){return n(this,a),r.call(this,{key:t.CST.SCENES.HUD_SCENE})}return i(a,[{key:"init",value:function(){}},{key:"preload",value:function(){}},{key:"create",value:function(){this.add.image(0,0,"atlas_sr_game_desktop","game_hud_bg_shadow").setOrigin(0).setDisplaySize(this.game.renderer.width,54),this.add.image(0,0,"atlas_sr_game_desktop","game_hud_bg").setOrigin(0).setDisplaySize(this.game.renderer.width,52),this.add.text(this.game.renderer.width/2-152,16,"Time",{font:"16px Arial",fill:"white"}),this.add.image(this.game.renderer.width/2-100,6,"atlas_sr_game_desktop","game_hud_container").setOrigin(0),this.add.text(this.game.renderer.width/2-92,10,"05:00",{font:"28px Arial",fill:"white"}),this.add.text(this.game.renderer.width/2+39,16,"Score",{font:"16px Arial",fill:"white"}),this.add.image(this.game.renderer.width/2+100,6,"atlas_sr_game_desktop","game_hud_container").setOrigin(0),this.add.text(this.game.renderer.width/2+110,10,"0000",{font:"28px Arial",fill:"white"}),this.add.text(this.game.renderer.width-88,166,"Undo",{font:"16px Arial",fill:"white"}),this.add.image(this.game.renderer.width-100,96,"atlas_sr_game_desktop","btn_undo_disabled_landscape").setOrigin(0).setInteractive().on("pointerdown",function(t){this.setTint(16711680)}).on("pointerout",function(t){this.clearTint()}).on("pointerup",function(t){this.clearTint()}).on("pointerover",function(t){this.setTint(16773120)}),this.add.image(this.game.renderer.width-100,6,"atlas_sr_game_desktop","btn_end").setOrigin(0).setInteractive().on("pointerdown",function(t){this.setTint(16711680)}).on("pointerout",function(t){this.clearTint()}).on("pointerup",function(t){this.clearTint()}).on("pointerover",function(t){this.setTint(16773120)}),this.add.text(this.game.renderer.width-80,15,"END",{font:"22px Arial",fill:"black"})}},{key:"update",value:function(){}}]),a}();exports.HudScene=l;
},{"./../CST":"OiyE"}],"ylFE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(require("./Card.js"));function t(r){return r&&r.__esModule?r:{default:r}}function e(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function a(r,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function i(r,t,e){return t&&a(r.prototype,t),e&&a(r,e),r}var n=4,s=14,o=function(){function t(a){e(this,t),this.cards=[];for(var i=0;i<n;i+=1)for(var o=1;o<s;o+=1)this.cards.push(new r.default(a,i,o));this.shuffle(this.cards),this.deal(a)}return i(t,[{key:"deal",value:function(r){this.cards.map(function(t){return t.flipBack(r)});for(var t=0,e=0;e<7;e+=1)for(var a=0;a<e+1;a+=1)this.cards[t].reposition("tableau_".concat(e),a),e===a&&this.cards[t].flip(r),t+=1;for(var i=t;i<52;i+=1)this.cards[i].reposition("stock",i-t)}},{key:"shuffle",value:function(r){for(var t=r.length-1;t>0;t-=1){var e=Math.floor(Math.random()*(t+1)),a=[r[e],r[t]];r[t]=a[0],r[e]=a[1]}return r}},{key:"cardChildren",value:function(r){for(var t=[],e=0;e<this.cards.length;e+=1)this.cards[e].pile===r.pile&&this.cards[e].position>=r.position&&t.push(this.cards[e]);return t.sort(function(r,t){return r.position-t.position}),t}},{key:"topCard",value:function(r){for(var t=-1,e=0;e<this.cards.length;e+=1)this.cards[e].pile===r&&(-1===t||this.cards[e].position>this.cards[t].position)&&(t=e);return this.cards[t]}},{key:"countCards",value:function(r){for(var t=0,e=0;e<this.cards.length;e+=1)this.cards[e].pile===r&&(t+=1);return t}}]),t}();exports.default=o;
},{"./Card.js":"xT1N"}],"Tidu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("../objects/Card")),e=require("./../CST"),i=require("./HudScene"),r=a(require("./../objects/Deck")),n=a(require("./../objects/Piles"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=g();return function(){var i,r=m(t);if(e){var n=m(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return p(this,i)}}function p(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _=function(a){u(c,Phaser.Scene);var o=h(c);function c(){var t;return s(this,c),y(f(t=o.call(this,{key:e.CST.SCENES.GAME_SCENE})),"col",[]),t}return d(c,[{key:"init",value:function(){}},{key:"preload",value:function(){this.scene.add(e.CST.SCENES.HUD_SCENE,i.HudScene,!1),this.scene.launch(e.CST.SCENES.HUD_SCENE)}},{key:"create",value:function(){this.add.image(200,100,"sr_cards_desktop","stackcell").setOrigin(0),this.add.image(280,100,"sr_cards_desktop","stackcell").setOrigin(0),this.add.image(360,100,"sr_cards_desktop","stackcell").setOrigin(0),this.add.image(440,100,"sr_cards_desktop","stackcell").setOrigin(0),this.add.image(580,100,"sr_cards_desktop","emptycell").setOrigin(0),this.add.image(670,100,"sr_cards_desktop","emptycell").setOrigin(0),this.col.push(this.add.image(200,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(280,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(360,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(440,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(520,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(600,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.col.push(this.add.image(680,226,"sr_cards_desktop","emptycell").setOrigin(0)),this.gameNumber=1,this.score=0,this.dragChildren=[],this.deck=new r.default(this),this.createZones(),this.createInputListeners(),this.createButtons(),this.createText()}},{key:"createZones",value:function(){var t=this;Object.keys(n.default.pilePositions).forEach(function(e){var i=e.match(/tableau_*/)?100:0,r="stock"===e?20:0,a=t.add.zone(n.default.pilePositions[e].x+r/2,n.default.pilePositions[e].y+i/2,n.default.cardWidth+r,n.default.cardHeight+i).setName(e).setRectangleDropZone(n.default.cardWidth+r,n.default.cardHeight+i);"stock"==e&&(a.on("pointerdown",function(t){this.drawCard()},t),a.setDepth(99))})}},{key:"createInputListeners",value:function(){var e=this;this.input.on("dragstart",function(i,r){return r instanceof t.default&&e.dragCardStart(r)},this),this.input.on("dragend",function(i,r){return r instanceof t.default&&e.dragCardEnd()},this),this.input.on("drop",function(i,r,n){return r instanceof t.default&&e.dropCard(r,n)},this),this.input.on("drag",function(i,r,n,a){return r instanceof t.default&&e.dragCard(r,n,a)},this)}},{key:"createButtons",value:function(){}},{key:"createText",value:function(){}},{key:"drawCard",value:function(){var t=this.deck.topCard("stock");if(null==t){for(var e=this.deck.topCard("discard"),i=0;null!=e;)e.reposition("stock",i),e.flipBack(this),i++,e=this.deck.topCard("discard");i>0&&(this.score-=100)}else{var r=this.deck.topCard("discard");null!=r?(r.flipBack(this),t.reposition("discard",r.position+1)):t.reposition("discard",0),t.flip(this)}}},{key:"flipScore",value:function(t){t.match(/tableau_*/)&&(this.score+=5)}},{key:"dropScore",value:function(t,e){console.log(" Moved: "+e+" to "+t),"discard"==e&&t.match(/tableau_*/)?this.score+=5:"discard"==e&&t.match(/foundation_*/)?this.score+=10:e.match(/tableau_*/)&&t.match(/foundation_*/)?this.score+=10:e.match(/foundation_*/)&&t.match(/tableau_*/)&&(this.score-=15)}},{key:"dragCardStart",value:function(t){this.dragChildren=[],t.pile.match(/tableau_*/)?this.dragChildren=this.deck.cardChildren(t):this.dragChildren.push(t);for(var e=0;e<this.dragChildren.length;e++)this.dragChildren[e].setDepth(100+e)}},{key:"dragCardEnd",value:function(){for(var t=0;t<this.dragChildren.length;t++)this.dragChildren[t].reposition(this.dragChildren[t].pile,this.dragChildren[t].position)}},{key:"dragCard",value:function(t,e,i){for(var r=0;r<this.dragChildren.length;r++)this.dragChildren[r].x=e,this.dragChildren[r].y=i+16*r}},{key:"dropCard",value:function(t,e){var i=this.deck.topCard(e.name),r=t.pile;null==i?e.name.match(/tableau_*/)?13==t.value&&(this.dropScore(e.name,t.pile),t.reposition(e.name,0)):e.name.match(/foundation_*/)&&1==t.value&&(this.dropScore(e.name,t.pile),t.reposition(e.name,0)):e.name.match(/tableau_*/)?(t.suit+1)%2==i.suit%2&&t.value==i.value-1&&(this.dropScore(e.name,t.pile),t.reposition(e.name,i.position+1)):e.name.match(/foundation_*/)&&t.suit==i.suit&&t.value==i.value+1&&(this.dropScore(e.name,t.pile),t.reposition(e.name,i.position+1));for(var n=0;n<this.dragChildren.length;n++)this.dragChildren[n]!=t&&this.dragChildren[n].reposition(t.pile,t.position+n);var a=this.deck.topCard(r);null==a||a==t||a.flipped||(a.flip(this),this.flipScore(a.pile))}},{key:"update",value:function(){this.score<0&&(this.score=0),this.deck.countCards("foundation_0"),this.deck.countCards("foundation_1"),this.deck.countCards("foundation_2"),this.deck.countCards("foundation_3")}}]),c}();exports.default=_;
},{"../objects/Card":"xT1N","./../CST":"OiyE","./HudScene":"Cwst","./../objects/Deck":"ylFE","./../objects/Piles":"XGdL"}],"c9uS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StartScene=void 0;var t=require("./../CST"),e=n(require("./GameScene"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=d();return function(){var n,s=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(n){a(o,Phaser.Scene);var s=u(o);function o(){return r(this,o),s.call(this,{key:t.CST.SCENES.START_SCENE})}return i(o,[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.atlas("sr_cards_desktop","images/sr_cards_desktop.png","images/sr_cards_desktop.json"),this.load.atlas("atlas_sr_game_desktop","images/atlas_sr_game_desktop.png","images/atlas_sr_game_desktop.json")}},{key:"create",value:function(){this.textures.get("atlas_sr_game_desktop");this.add.image(450,80,"atlas_sr_game_desktop","sr_logo").setOrigin(0),this.add.image(510,174,"atlas_sr_game_desktop","sr_logo_r_glow").setOrigin(0),this.add.image(590,174,"atlas_sr_game_desktop","sr_logo_u_glow").setOrigin(0),this.add.image(666,174,"atlas_sr_game_desktop","sr_logo_s_glow").setOrigin(0),this.add.image(736,174,"atlas_sr_game_desktop","sr_logo_h_glow").setOrigin(0),this.add.image(this.game.renderer.width-60,10,"atlas_sr_game_desktop","btn_settings").setOrigin(0).setInteractive().on("pointerdown",function(t){this.setTint(16711680)}).on("pointerout",function(t){this.clearTint()}).on("pointerup",function(t){this.clearTint()}).on("pointerover",function(t){this.setTint(16773120)}),this.add.image(570,290,"atlas_sr_game_desktop","btn_gold").setOrigin(0).setInteractive().on("pointerdown",function(n){this.setTint(16711680),this.scene.scene.setVisible(!1,t.CST.SCENES.START_SCENE),this.scene.scene.add(t.CST.SCENES.GAME_SCENE,e.default,!1),this.scene.scene.launch(t.CST.SCENES.GAME_SCENE)}).on("pointerout",function(t){this.clearTint()}).on("pointerup",function(t){this.clearTint()}).on("pointerover",function(t){this.setTint(16773120)}),this.add.text(610,308,"START",{font:"36px Arial",fill:"rgb(57 51 26)"}),this.add.image(570,370,"atlas_sr_game_desktop","btn_blue").setOrigin(0).setInteractive().on("pointerdown",function(t){this.setTint(16711680)}).on("pointerout",function(t){this.clearTint()}).on("pointerup",function(t){this.clearTint()}).on("pointerover",function(t){this.setTint(16773120)}),this.add.text(585,390,"How to Play",{font:"30px Arial",fill:"white"}),this.add.image(90,114,"atlas_sr_game_desktop","start_cards_fx").setOrigin(0),this.add.image(475,474,"atlas_sr_game_desktop","start_cards_diamonds").setZ(0).setOrigin(.5).setAngle(42),this.add.image(410,414,"atlas_sr_game_desktop","start_cards_clubs").setZ(0).setOrigin(.5).setAngle(16),this.add.image(320,374,"atlas_sr_game_desktop","start_cards_hearts").setZ(0).setOrigin(.5).setAngle(-4),this.add.image(202,374,"atlas_sr_game_desktop","start_cards_spades").setZ(0).setOrigin(.5).setAngle(-20)}},{key:"update",value:function(){}}]),o}();exports.StartScene=p;
},{"./../CST":"OiyE","./GameScene":"Tidu"}],"FUff":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadScene=void 0;var t=require("../CST"),e=require("./StartScene");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=s();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y={width:960,height:600},h=function(n){c(u,Phaser.Scene);var o=a(u);function u(){return r(this,u),o.call(this,{key:t.CST.SCENES.LOAD_SCENE})}return i(u,[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.image("bg_desktop","images/bg_desktop.png"),this.load.image("bg_tile","images/bg_tile.png"),this.load.image("bg_overlay","images/bg_overlay.png")}},{key:"create",value:function(){this.add.tileSprite(0,0,2*y.width,2*y.height,"bg_tile").setOrigin(0),this.add.image(y.width/2,y.height/2,"bg_overlay").setDisplaySize(y.width,y.height),this.scene.add(t.CST.SCENES.START_SCENE,e.StartScene,!1),this.scene.launch(t.CST.SCENES.START_SCENE)}}]),u}();exports.LoadScene=h;
},{"../CST":"OiyE","./StartScene":"c9uS"}],"epB2":[function(require,module,exports) {
"use strict";var e=require("./scenes/LoadScene"),s={type:Phaser.AUTO,width:960,height:600,scene:[e.LoadScene]},a=new Phaser.Game(s);
},{"./scenes/LoadScene":"FUff"}]},{},["epB2"], null)
//# sourceMappingURL=/main.c88ff512.js.map