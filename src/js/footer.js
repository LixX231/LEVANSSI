const footer = document.getElementById("footer");

footer.innerHTML = `
  <p>© ${new Date().getFullYear()} Название бренда. Все права защищены.</p>
  <p>Связаться с нами: <a href="mailto:info@brand.ru">info@brand.ru</a></p>
`;
