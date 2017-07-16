; (function (win, doc) {
  function change() {
    doc.documentElement.style.fontSize = 100 * doc.documentElement.clientWidth / 640 + 'px';
  }
  change();
  win.addEventListener('resize', change, false);
})(window, document);