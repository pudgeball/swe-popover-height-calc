function handleOpenAsTabTapped() {
  const popoverHtml = browser.extension.getURL("/popover/popover.html");
  browser.tabs.create({ url: popoverHtml });
}

function documentReady() {
  document
    .getElementById("open-as-tab")
    .addEventListener("click", handleOpenAsTabTapped);
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", documentReady)
  : documentReady();
