import { loadFacts } from "./services/Facts.js";
import Store from "./services/Store.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadFacts();
  app.router.init();
});
