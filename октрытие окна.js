function openTab() {
  let tabLink = document.getElementById("tabLink");
  if (tabLink.addEventListener) {
    tabLink.removeEventListener("click", openTab);
  } else {
    window.removeEventListener("load", openTab);
  }
  
  let newTab = window.open("", "_blank");
  newTab.document.write("<html><head><title>New Tab</title></head><body>Content of the new tab...</body></html>");
}

document.getElementById("openTabButton").addEventListener("click", openTab);
