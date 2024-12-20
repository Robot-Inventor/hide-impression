// ==UserScript==
// @name         Hide View Count
// @namespace    https://github.com/Robot-Inventor/hide-view-count
// @version      2.2.2
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
(()=>{"use strict";var e={16:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(l,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?l(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(i,s)}c((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.asyncQuerySelectorAll=t.asyncQuerySelector=void 0;let n=(e,t)=>new Promise(r=>{let n=e();if(n instanceof Element||n instanceof NodeList&&n.length){r(n);return}let l=null,o=new MutationObserver(()=>{let t=e();(t instanceof Element||t instanceof NodeList&&t.length)&&(o.disconnect(),l&&clearTimeout(l),r(t))});l=setTimeout(()=>{o.disconnect(),r(null)},t),o.observe(document.body,{attributes:!0,childList:!0,subtree:!0})});t.asyncQuerySelector=(e,...t)=>r(void 0,[e,...t],void 0,function*(e,t=document,r=500){return yield n(()=>t.querySelector(e),r)});t.asyncQuerySelectorAll=(e,...t)=>r(void 0,[e,...t],void 0,function*(e,t=document,r=500){var l;return null!==(l=yield n(()=>t.querySelectorAll(e),r))&&void 0!==l?l:document.createDocumentFragment().childNodes})}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.rv=function(){return"1.1.8"},r.ruid="bundler=rspack@1.1.8";let n=(()=>{let e=e=>Array.isArray(e.children)&&2===e.children.length&&"object"==typeof e.children[1]&&null!==e.children[1]&&t(e.children[1]),t=e=>"object"==typeof e.props&&null!==e.props&&r(e.props),r=e=>"object"==typeof e.retweetWithCommentLink&&null!==e.retweetWithCommentLink&&n(e.retweetWithCommentLink),n=e=>"object"==typeof e.state&&null!==e.state&&l(e.state),l=e=>"object"==typeof e.quotedStatus&&null!==e.quotedStatus&&o(e.quotedStatus),o=e=>(null===e.possibly_sensitive||void 0===e.possibly_sensitive||"boolean"==typeof e.possibly_sensitive)&&(null===e.possibly_sensitive_editable||void 0===e.possibly_sensitive_editable||"boolean"==typeof e.possibly_sensitive_editable)&&"string"==typeof e.permalink&&"object"==typeof e.user&&null!==e.user&&i(e.user),i=e=>(null===e.possibly_sensitive||void 0===e.possibly_sensitive||"boolean"==typeof e.possibly_sensitive)&&"string"==typeof e.screen_name&&(""===e.profile_interstitial_type||"sensitive_media"===e.profile_interstitial_type||"fake_account"===e.profile_interstitial_type||"offensive_profile_content"===e.profile_interstitial_type||"timeout"===e.profile_interstitial_type)&&Array.isArray(e.withheld_in_countries)&&e.withheld_in_countries.every(e=>"string"==typeof e);return t=>"object"==typeof t&&null!==t&&e(t)})(),l=(()=>{let e=e=>Array.isArray(e.children)&&1===e.children.length&&Array.isArray(e.children[0])&&2===e.children[0].length&&"object"==typeof e.children[0][1]&&null!==e.children[0][1]&&t(e.children[0][1]),t=e=>"object"==typeof e.props&&null!==e.props&&r(e.props),r=e=>Array.isArray(e.children)&&1===e.children.length&&"object"==typeof e.children[0]&&null!==e.children[0]&&n(e.children[0]),n=e=>"object"==typeof e.props&&null!==e.props&&l(e.props),l=e=>Array.isArray(e.children)&&2===e.children.length&&"object"==typeof e.children[1]&&null!==e.children[1]&&o(e.children[1]),o=e=>"object"==typeof e.props&&null!==e.props&&i(e.props),i=e=>Array.isArray(e.children)&&2===e.children.length&&Array.isArray(e.children[1])&&3===e.children[1].length&&"object"==typeof e.children[1][2]&&null!==e.children[1][2]&&s(e.children[1][2]),s=e=>"object"==typeof e.props&&null!==e.props&&c(e.props),c=e=>"object"==typeof e.loggedInUser&&null!==e.loggedInUser&&a(e.loggedInUser),a=e=>"string"==typeof e.screen_name;return t=>"object"==typeof t&&null!==t&&e(t)})(),o=(()=>{let e=e=>Array.isArray(e.children)&&1===e.children.length&&Array.isArray(e.children[0])&&2===e.children[0].length&&"object"==typeof e.children[0][1]&&null!==e.children[0][1]&&t(e.children[0][1]),t=e=>"object"==typeof e.props&&null!==e.props&&r(e.props),r=e=>Array.isArray(e.children)&&1===e.children.length&&"object"==typeof e.children[0]&&null!==e.children[0]&&n(e.children[0]),n=e=>"object"==typeof e.props&&null!==e.props&&l(e.props),l=e=>Array.isArray(e.children)&&3===e.children.length&&"object"==typeof e.children[2]&&null!==e.children[2]&&o(e.children[2]),o=e=>"object"==typeof e.props&&null!==e.props&&i(e.props),i=e=>Array.isArray(e.children)&&8===e.children.length&&"object"==typeof e.children[7]&&null!==e.children[7]&&s(e.children[7]),s=e=>"object"==typeof e.props&&null!==e.props&&c(e.props),c=e=>"object"==typeof e.loggedInUser&&null!==e.loggedInUser&&a(e.loggedInUser),a=e=>"string"==typeof e.screen_name;return t=>"object"==typeof t&&null!==t&&e(t)})(),i=(()=>{let e=e=>Array.isArray(e.children)&&2===e.children.length&&"object"==typeof e.children[0]&&null!==e.children[0]&&t(e.children[0])&&!0,t=e=>"object"==typeof e.props&&null!==e.props&&r(e.props),r=e=>Array.isArray(e.children)&&2===e.children.length&&"object"==typeof e.children[1]&&null!==e.children[1]&&n(e.children[1]),n=e=>"object"==typeof e.props&&null!==e.props&&l(e.props),l=e=>"object"==typeof e.user&&null!==e.user&&o(e.user),o=e=>(null===e.possibly_sensitive||void 0===e.possibly_sensitive||"boolean"==typeof e.possibly_sensitive)&&"string"==typeof e.screen_name&&(""===e.profile_interstitial_type||"sensitive_media"===e.profile_interstitial_type||"fake_account"===e.profile_interstitial_type||"offensive_profile_content"===e.profile_interstitial_type||"timeout"===e.profile_interstitial_type)&&Array.isArray(e.withheld_in_countries)&&e.withheld_in_countries.every(e=>"string"==typeof e);return t=>"object"==typeof t&&null!==t&&e(t)})(),s=e=>Array.isArray(e)&&e.length>0,c=e=>{let t=Object.getOwnPropertyNames(e).filter(e=>e.startsWith("__reactProps$"));return s(t)?e[t[0]]:null};class a{profileElement;constructor(e){this.profileElement=e}get props(){let e=c(this.profileElement);if(!i(e))throw Error("Failed to get React props of profile");return e.children[0].props.children[1].props.user}}let p=["pro.twitter.com","pro.x.com"];var d=r("16");let u=e=>"TEXTAREA"===e.tagName,y=e=>u(e)?e:e.parentElement,h=async(e,t)=>{let r=p.includes(location.hostname),n=[...await (0,d.asyncQuerySelectorAll)(r?"[role='dialog'] [data-text='true'], [role='dialog'] textarea[data-testid='tweetTextarea_0']":"[role='dialog'] [data-text='true'], textarea[data-testid='tweetTextarea_0']",document,t)];if(!s(n))throw Error("[twi-ext] Failed to get text box marker of tweet");for(let e=0;e<n.length;e++){let t=n[e];if(0!==e&&t){let e=y(t);e&&e.remove()}}let l=y(n[0]);if(!l)throw Error("[twi-ext] Failed to get text box of tweet");l.innerHTML=e,l.dispatchEvent(new Event("input",{bubbles:!0}))},f=e=>{open(`https://x.com/intent/tweet?text=${encodeURIComponent(e)}`,"_blank")};class w{tweetElement;constructor(e){this.tweetElement=e}getMenuBar(){let e=this.tweetElement.querySelector("div[role='group'][id]");if(!e)throw Error("[twi-ext] Failed to get menu bar of tweet");return e}get element(){return this.tweetElement}get props(){let e=c(this.getMenuBar());if(!n(e))throw Error("[twi-ext] Failed to get React props of tweet");return e.children[1].props.retweetWithCommentLink.state.quotedStatus}get metadata(){let e=this.props.user.screen_name,t=c(this.element);if(!t)throw Error("[twi-ext] Failed to get React props of tweet");let r=null,n=o(t);return l(t)&&(r=t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name),n&&(r=t.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser.screen_name),{isFocalMode:n,isPostedByCurrentUser:e===r}}async clickRetweetButton(e){let t=await (0,d.asyncQuerySelector)("[data-testid='unretweet'], [data-testid='retweet']",this.tweetElement,e);if(!t)throw Error("[twi-ext] Failed to get retweet button of tweet");t.click()}static async clickQuoteButton(e){let t=await (0,d.asyncQuerySelector)("[data-testid='Dropdown'] [href='/compose/post'],[data-testid='sheetDialog'] [href='/compose/post']",document,e);if(!t)throw Error("[twi-ext] Failed to get quote button of tweet");t.click()}async quoteTweet(e,t=1e3,r=!1){let n=this.props.permalink,l=`${e}
https://x.com${n}`;if(r){f(l);return}try{await this.clickRetweetButton(t),await w.clickQuoteButton(t),await h(e,t)}catch{f(l)}}}var b=function(){var e=document.querySelectorAll("[role='group'] a[href$='analytics']"),t=!0,r=!1,n=void 0;try{for(var l,o,i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var c=i.value;c.parentElement&&(c.href="",c.parentElement.style.display="none")}}catch(e){r=!0,n=e}finally{try{!t&&null!=s.return&&s.return()}finally{if(r)throw n}}var a=document.querySelector("a[aria-describedby] time");if(null==a?void 0:null===(o=a.parentElement)||void 0===o?void 0:null===(l=o.parentElement)||void 0===l?void 0:l.parentElement){var p=a.parentElement.parentElement.parentElement.querySelectorAll("div ~ *"),d=!0,u=!1,y=void 0;try{for(var h,f=p[Symbol.iterator]();!(d=(h=f.next()).done);d=!0)h.value.style.display="none"}catch(e){u=!0,y=e}finally{try{!d&&null!=f.return&&f.return()}finally{if(u)throw y}}}};new class e{OBSERVER_OPTIONS={childList:!0,subtree:!0};onNewTweetCallback=null;onNewProfileCallback=null;constructor(e){let t=`data-twi-ext-checked-${crypto.randomUUID()}`,r={timeoutMs:1e4,...e},n=new MutationObserver(()=>{if(this.onNewTweetCallback)for(let e of document.querySelectorAll(`[data-testid="tweet"]:not([${t}])`))e.setAttribute(t,""),this.onNewTweetCallback(new w(e));if(this.onNewProfileCallback){let e=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${t}])`);e&&(e.setAttribute(t,""),this.onNewProfileCallback(new a(e)))}});(0,d.asyncQuerySelector)("main",document,r.timeoutMs).then(e=>{if(!e)throw Error("[twi-ext] Failed to get main element");n.observe(e,this.OBSERVER_OPTIONS)}),(0,d.asyncQuerySelector)("#layers",document,r.timeoutMs).then(e=>{if(!e)throw Error("[twi-ext] Failed to get #layers element");n.observe(e,this.OBSERVER_OPTIONS)})}onNewTweet(e){this.onNewTweetCallback=e}onNewProfile(e){this.onNewProfileCallback=e}}().onNewTweet(function(){b()})})();