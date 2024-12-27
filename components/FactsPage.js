export class FactsPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    window.addEventListener("appfactschange", () => {
      this.render();
    });
    this.render();
  }

  render() {
    // this.root.querySelector('#menu').innerHTML = ''
    const ul = document.createElement("ul");
    if (app.store.facts) {
      for (let factObj of app.store.facts) {
        const li = document.createElement("li");
        li.textContent = factObj.fact;
        ul.appendChild(li);
      }
    }
    this.root.appendChild(ul);
  }
}

customElements.define("facts-page", FactsPage);
