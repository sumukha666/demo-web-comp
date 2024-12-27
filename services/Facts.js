import { fetchFacts } from "./API.js";

export async function loadFacts(pageNo = 1) {
  const data = await fetchFacts(pageNo);
  app.store.facts = data.data;
}
