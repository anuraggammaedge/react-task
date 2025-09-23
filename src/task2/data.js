export const url =
  "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";

export async function getApiData(url) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Api Error: " + error);
  }
}
