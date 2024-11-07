// ==UserScript==
// @name         Hide View Count
// @namespace    https://github.com/Robot-Inventor/hide-view-count
// @version      2.2.1
// @description  This extension hides the number of impressions on Twitter and prevents the creation of an approval desire monster. It won't allow the View Count to be displayed for even a second!
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://pro.twitter.com/*
// @match        https://x.com/*
// @match        https://mobile.x.com/*
// @match        https://pro.x.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/hide-view-count/main/public/image/icon512.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/hide-view-count/main/index.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/hide-view-count/main/index.user.js
// @grant        none
// ==/UserScript==
(()=>{"use strict";let e;var t={16:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function p(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(p,l)}s((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.asyncQuerySelectorAll=t.asyncQuerySelector=void 0;let n=(e,t)=>new Promise(r=>{let n=e();if(n instanceof Element||n instanceof NodeList&&n.length){r(n);return}let o=null,i=new MutationObserver(()=>{let t=e();(t instanceof Element||t instanceof NodeList&&t.length)&&(i.disconnect(),o&&clearTimeout(o),r(t))});o=setTimeout(()=>{i.disconnect(),r(null)},t),i.observe(document.body,{attributes:!0,childList:!0,subtree:!0})});t.asyncQuerySelector=(e,...t)=>r(void 0,[e,...t],void 0,function*(e,t=document,r=500){return yield n(()=>t.querySelector(e),r)});t.asyncQuerySelectorAll=(e,...t)=>r(void 0,[e,...t],void 0,function*(e,t=document,r=500){var o;return null!==(o=yield n(()=>t.querySelectorAll(e),r))&&void 0!==o?o:document.createDocumentFragment().childNodes})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.rv=function(){return"1.1.0"},n.ruid="bundler=rspack@1.1.0";let o=e=>{let t=Object.getOwnPropertyNames(e).filter(e=>e.startsWith("__reactProps$"));return t.length?e[t[0]]:null};class i{profileElement;constructor(e){this.profileElement=e}get props(){var e;let t=o(this.profileElement);if(!((null!==(e=t)&&"object"==typeof e||"function"==typeof e)&&Array.isArray(e.children)&&(null!==e.children[0]&&"object"==typeof e.children[0]||"function"==typeof e.children[0])&&(null!==e.children[0].props&&"object"==typeof e.children[0].props||"function"==typeof e.children[0].props)&&Array.isArray(e.children[0].props.children)&&(null!==e.children[0].props.children[1]&&"object"==typeof e.children[0].props.children[1]||"function"==typeof e.children[0].props.children[1])&&(null!==e.children[0].props.children[1].props&&"object"==typeof e.children[0].props.children[1].props||"function"==typeof e.children[0].props.children[1].props)&&(null!==e.children[0].props.children[1].props.user&&"object"==typeof e.children[0].props.children[1].props.user||"function"==typeof e.children[0].props.children[1].props.user)&&(void 0===e.children[0].props.children[1].props.user.possibly_sensitive||null===e.children[0].props.children[1].props.user.possibly_sensitive||!1===e.children[0].props.children[1].props.user.possibly_sensitive||!0===e.children[0].props.children[1].props.user.possibly_sensitive)&&"string"==typeof e.children[0].props.children[1].props.user.screen_name&&(""===e.children[0].props.children[1].props.user.profile_interstitial_type||"sensitive_media"===e.children[0].props.children[1].props.user.profile_interstitial_type||"fake_account"===e.children[0].props.children[1].props.user.profile_interstitial_type||"offensive_profile_content"===e.children[0].props.children[1].props.user.profile_interstitial_type||"timeout"===e.children[0].props.children[1].props.user.profile_interstitial_type)&&Array.isArray(e.children[0].props.children[1].props.user.withheld_in_countries)&&e.children[0].props.children[1].props.user.withheld_in_countries.every(e=>"string"==typeof e)))throw Error("Failed to get React props of profile");return t.children[0].props.children[1].props.user}}let p=["pro.twitter.com","pro.x.com"];var l=n("16");let s=e=>"TEXTAREA"===e.tagName,c=e=>s(e)?e:e.parentElement,d=async(e,t)=>{let r=p.includes(location.hostname),n=await (0,l.asyncQuerySelectorAll)(r?"[role='dialog'] [data-text='true'], [role='dialog'] textarea[data-testid='tweetTextarea_0']":"[role='dialog'] [data-text='true'], textarea[data-testid='tweetTextarea_0']",document,t);if(!n.length)throw Error("[twi-ext] Failed to get text box marker of tweet");for(let e=0;e<n.length;e++)if(0!==e){let t=c(n[e]);t&&t.remove()}let o=c(n[0]);if(!o)throw Error("[twi-ext] Failed to get text box of tweet");o.innerHTML=e,o.dispatchEvent(new Event("input",{bubbles:!0}))},h=e=>{open(`https://x.com/intent/tweet?text=${encodeURIComponent(e)}`,"_blank")};class a{tweetElement;constructor(e){this.tweetElement=e}getMenuBar(){let e=this.tweetElement.querySelector("div[role='group'][id]");if(!e)throw Error("[twi-ext] Failed to get menu bar of tweet");return e}get element(){return this.tweetElement}get props(){var e;let t=o(this.getMenuBar());if(!((null!==(e=t)&&"object"==typeof e||"function"==typeof e)&&Array.isArray(e.children)&&(null!==e.children[1]&&"object"==typeof e.children[1]||"function"==typeof e.children[1])&&(null!==e.children[1].props&&"object"==typeof e.children[1].props||"function"==typeof e.children[1].props)&&(null!==e.children[1].props.retweetWithCommentLink&&"object"==typeof e.children[1].props.retweetWithCommentLink||"function"==typeof e.children[1].props.retweetWithCommentLink)&&(null!==e.children[1].props.retweetWithCommentLink.state&&"object"==typeof e.children[1].props.retweetWithCommentLink.state||"function"==typeof e.children[1].props.retweetWithCommentLink.state)&&(null!==e.children[1].props.retweetWithCommentLink.state.quotedStatus&&"object"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus||"function"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus)&&(void 0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||null===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!1===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive)&&(void 0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||null===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!1===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable)&&"string"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus.permalink&&(null!==e.children[1].props.retweetWithCommentLink.state.quotedStatus.user&&"object"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus.user||"function"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus.user)&&(void 0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||null===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!1===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!0===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive)&&"string"==typeof e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.screen_name&&(""===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"sensitive_media"===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"fake_account"===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"offensive_profile_content"===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"timeout"===e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type)&&Array.isArray(e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.withheld_in_countries)&&e.children[1].props.retweetWithCommentLink.state.quotedStatus.user.withheld_in_countries.every(e=>"string"==typeof e)))throw Error("[twi-ext] Failed to get React props of tweet");return t.children[1].props.retweetWithCommentLink.state.quotedStatus}get metadata(){var e,t;let r=this.props.user.screen_name,n=o(this.element);if(!n)throw Error("[twi-ext] Failed to get React props of tweet");let i=null;let p=(null!==(e=n)&&"object"==typeof e||"function"==typeof e)&&Array.isArray(e.children)&&Array.isArray(e.children[0])&&(null!==e.children[0][1]&&"object"==typeof e.children[0][1]||"function"==typeof e.children[0][1])&&(null!==e.children[0][1].props&&"object"==typeof e.children[0][1].props||"function"==typeof e.children[0][1].props)&&Array.isArray(e.children[0][1].props.children)&&(null!==e.children[0][1].props.children[0]&&"object"==typeof e.children[0][1].props.children[0]||"function"==typeof e.children[0][1].props.children[0])&&(null!==e.children[0][1].props.children[0].props&&"object"==typeof e.children[0][1].props.children[0].props||"function"==typeof e.children[0][1].props.children[0].props)&&Array.isArray(e.children[0][1].props.children[0].props.children)&&(null!==e.children[0][1].props.children[0].props.children[2]&&"object"==typeof e.children[0][1].props.children[0].props.children[2]||"function"==typeof e.children[0][1].props.children[0].props.children[2])&&(null!==e.children[0][1].props.children[0].props.children[2].props&&"object"==typeof e.children[0][1].props.children[0].props.children[2].props||"function"==typeof e.children[0][1].props.children[0].props.children[2].props)&&Array.isArray(e.children[0][1].props.children[0].props.children[2].props.children)&&(null!==e.children[0][1].props.children[0].props.children[2].props.children[7]&&"object"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7]||"function"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7])&&(null!==e.children[0][1].props.children[0].props.children[2].props.children[7].props&&"object"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7].props||"function"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7].props)&&(null!==e.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser&&"object"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser||"function"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser)&&"string"==typeof e.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser.screen_name;if((null!==(t=n)&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&Array.isArray(t.children[0])&&(null!==t.children[0][1]&&"object"==typeof t.children[0][1]||"function"==typeof t.children[0][1])&&(null!==t.children[0][1].props&&"object"==typeof t.children[0][1].props||"function"==typeof t.children[0][1].props)&&Array.isArray(t.children[0][1].props.children)&&(null!==t.children[0][1].props.children[0]&&"object"==typeof t.children[0][1].props.children[0]||"function"==typeof t.children[0][1].props.children[0])&&(null!==t.children[0][1].props.children[0].props&&"object"==typeof t.children[0][1].props.children[0].props||"function"==typeof t.children[0][1].props.children[0].props)&&Array.isArray(t.children[0][1].props.children[0].props.children)&&(null!==t.children[0][1].props.children[0].props.children[1]&&"object"==typeof t.children[0][1].props.children[0].props.children[1]||"function"==typeof t.children[0][1].props.children[0].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2]&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2]||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props)&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser)&&"string"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name)i=n.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name;return p&&(i=n.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser.screen_name),{isFocalMode:p,isPostedByCurrentUser:r===i}}async clickRetweetButton(e){let t=await (0,l.asyncQuerySelector)("[data-testid='unretweet'], [data-testid='retweet']",this.tweetElement,e);if(!t)throw Error("[twi-ext] Failed to get retweet button of tweet");t.click()}static async clickQuoteButton(e){let t=await (0,l.asyncQuerySelector)("[data-testid='Dropdown'] [href='/compose/post'],[data-testid='sheetDialog'] [href='/compose/post']",document,e);if(!t)throw Error("[twi-ext] Failed to get quote button of tweet");t.click()}async quoteTweet(e,t=1e3,r=!1){let n=this.props.permalink,o=`${e}
https://x.com${n}`;if(r){h(o);return}try{await this.clickRetweetButton(t),await a.clickQuoteButton(t),await d(e,t)}catch{h(o)}}}let u={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},f=new Uint8Array(16),y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));function m(e,t=0){return(y[e[t+0]]+y[e[t+1]]+y[e[t+2]]+y[e[t+3]]+"-"+y[e[t+4]]+y[e[t+5]]+"-"+y[e[t+6]]+y[e[t+7]]+"-"+y[e[t+8]]+y[e[t+9]]+"-"+y[e[t+10]]+y[e[t+11]]+y[e[t+12]]+y[e[t+13]]+y[e[t+14]]+y[e[t+15]]).toLowerCase()}let w=function(t,r,n){if(u.randomUUID&&!r&&!t)return u.randomUUID();let o=(t=t||{}).random||(t.rng||function(){if(!e){if("undefined"==typeof crypto||!crypto.getRandomValues)throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");e=crypto.getRandomValues.bind(crypto)}return e(f)})();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r){n=n||0;for(let e=0;e<16;++e)r[n+e]=o[e];return r}return m(o)};var b=function(){var e=document.querySelectorAll("[role='group'] a[href$='analytics']"),t=!0,r=!1,n=void 0;try{for(var o,i,p,l=e[Symbol.iterator]();!(t=(p=l.next()).done);t=!0){var s=p.value;s.parentElement&&(s.href="",s.parentElement.style.display="none")}}catch(e){r=!0,n=e}finally{try{!t&&null!=l.return&&l.return()}finally{if(r)throw n}}var c=document.querySelector("a[aria-describedby] time");if(null==c?void 0:null===(i=c.parentElement)||void 0===i?void 0:null===(o=i.parentElement)||void 0===o?void 0:o.parentElement){var d=c.parentElement.parentElement.parentElement.querySelectorAll("div ~ *"),h=!0,a=!1,u=void 0;try{for(var f,y=d[Symbol.iterator]();!(h=(f=y.next()).done);h=!0)f.value.style.display="none"}catch(e){a=!0,u=e}finally{try{!h&&null!=y.return&&y.return()}finally{if(a)throw u}}}};new class e{OBSERVER_OPTIONS={childList:!0,subtree:!0};onNewTweetCallback=null;onNewProfileCallback=null;constructor(e){let t=`data-twi-ext-checked-${w()}`,r={timeoutMs:1e4,...e},n=new MutationObserver(()=>{if(this.onNewTweetCallback)for(let e of document.querySelectorAll(`[data-testid="tweet"]:not([${t}])`))e.setAttribute(t,""),this.onNewTweetCallback(new a(e));if(this.onNewProfileCallback){let e=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${t}])`);e&&(e.setAttribute(t,""),this.onNewProfileCallback(new i(e)))}});(0,l.asyncQuerySelector)("main",document,r.timeoutMs).then(e=>{if(!e)throw Error("[twi-ext] Failed to get main element");n.observe(e,this.OBSERVER_OPTIONS)}),(0,l.asyncQuerySelector)("#layers",document,r.timeoutMs).then(e=>{if(!e)throw Error("[twi-ext] Failed to get #layers element");n.observe(e,this.OBSERVER_OPTIONS)})}onNewTweet(e){this.onNewTweetCallback=e}onNewProfile(e){this.onNewProfileCallback=e}}().onNewTweet(function(){b()})})();