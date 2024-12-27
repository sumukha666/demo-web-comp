const Router = {
  init() {
    document.querySelectorAll("a.nav-link").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        this.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      this.go(event.state.route, false);
    });
    this.go(location.pathname);
  },
  go(route, addToHistory=true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement('facts-page');
        break;
      case "/breeds":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Breeds page";
        break;
    }
    if (pageElement) {
      document.querySelector("#main-content").children?.[0]?.remove();
      document.querySelector("#main-content").appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
