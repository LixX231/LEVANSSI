(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.getElementById("header");l.innerHTML=`
  <img src="/src/assets/img/logo.png" alt="Логотип LEVANSSI" class="nav-logo">
  <nav>
    <ul>
      <li><a href="index.html">Главная</a></li>
      <li><a href="catalog.html">Каталог</a></li>
      <li><a href="about.html">О бренде</a></li>
      <li><a href="contacts.html">Контакты</a></li>
    </ul>
  </nav>
`;const s=document.getElementById("footer");s.innerHTML=`
  <p>© ${new Date().getFullYear()} Название бренда. Все права защищены.</p>
  <p>Связаться с нами: <a href="mailto:info@brand.ru">info@brand.ru</a></p>
`;
