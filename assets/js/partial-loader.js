(function () {
  const includeNodes = document.querySelectorAll("[data-include]");

  includeNodes.forEach(async (node) => {
    const includePath = node.getAttribute("data-include");
    if (!includePath) return;

    try {
      const response = await fetch(includePath);
      if (!response.ok) {
        throw new Error(`Failed to load: ${includePath}`);
      }
      const html = await response.text();
      node.innerHTML = html;
    } catch (error) {
      node.innerHTML = "";
      console.error(error);
    }
  });
})();
