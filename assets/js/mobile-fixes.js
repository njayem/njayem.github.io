(function() {
  var style = document.createElement("style");
  style.textContent = [
    /* Mobile: separate hamburger (.greedy-nav > button) from theme-toggle */
    "@media (max-width: 1024px) {",
    "  .greedy-nav { padding-right: 100px !important; }",
    "  .greedy-nav > button { position: absolute !important; right: 56px !important; top: 50% !important; transform: translateY(-50%) !important; }",
    "  .theme-toggle { right: 10px !important; }",
    "}",
    /* Mobile: profile image centered and fully visible */
    "@media (max-width: 1024px) {",
    "  .author__avatar { display: block !important; text-align: center !important; overflow: visible !important; }",
    "  .author__avatar img { display: block !important; margin: 0 auto !important; max-width: 120px !important; width: 120px !important; height: 120px !important; object-fit: cover !important; border-radius: 50% !important; }",
    "  .author__content { display: block !important; text-align: center !important; }",
    "  .author__urls-wrapper { display: block !important; text-align: center !important; }",
    "  .author__urls { text-align: left !important; display: inline-block !important; }",
    "}"
  ].join("");
  document.head.appendChild(style);
})();
