const BASE_URL = "https://catfact.ninja";

export async function fetchFacts(pageNo) {
  const response = await fetch(`${BASE_URL}/facts?page=${pageNo}`);
  return await response.json();
}
