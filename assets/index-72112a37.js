(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");n.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');s.classList.add("active"),o.classList.add("active")})}),r.forEach(function(c){c.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const l="active",a=document.querySelector(".modal-thank-you"),u=document.querySelector(".thank-form"),i=document.querySelector(".overlay");document.querySelector(".contacts-button");const m=document.querySelectorAll(".close-btn"),f=document.querySelector(".feedback-email"),v=()=>{a.classList.add(l),i.classList.add(l),console.log("first")},d=()=>{a.classList.remove(l),i.classList.remove(l),f.value=""};m.forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation(),d()})});u.addEventListener("submit",n=>{n.preventDefault(),setTimeout(v,300),setTimeout(d,2400)});(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".js-link"),e=()=>{console.log("first");const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const s=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};o.addEventListener("click",e),r.addEventListener("click",e),c.forEach(function(t){t.addEventListener("click",e)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
