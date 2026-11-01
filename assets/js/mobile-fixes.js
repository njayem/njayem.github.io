(function() {
  var style = document.createElement("style");
  style.textContent = [
    "/* Mobile image centering */",
    "@media (max-width: 1024px) {",
    "  .author__avatar { display: block; text-align: center; }",
    "  .author__avatar img { display: block !important; margin: 0 auto !important; float: none !important; }",
    "  .author__content { display: block; text-align: center; }",
    "  .author__urls-wrapper { display: block; text-align: center; }",
    "  .author__urls { text-align: left; display: inline-block; }",
    "  #main { margin-left: auto !important; margin-right: auto !important; float: none !important; }",
    "  .archive, .page { margin-left: auto !important; margin-right: auto !important; float: none !important; }",
    "}",
    "/* Hamburger / theme-toggle separation */",
    "@media (max-width: 1024px) {",
    "  .greedy-nav { padding-right: 96px !important; }",
    "  .theme-toggle { position: absolute !important; top: 50% !important; right: 52px !important; transform: translateY(-50%) !important; z-index: 20 !important; }",
    "  .greedy-nav__toggle { position: absolute !important; top: 50% !important; right: 4px !important; transform: translateY(-50%) !important; z-index: 20 !important; }",
    "}"
  ].join("");
  document.head.appendChild(style);
})();
