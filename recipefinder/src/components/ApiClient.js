import axios from "axios";

export async function getSearch(query, page = 0) {
  try {
    console.log("page", page);
    const urlBase = "/api/search";
    const url = `${urlBase}/${query}&offset=${page}`;
    const res = await axios.get(url);
    return {
      results: res.data.results,
      total: res.data.totalResults,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getRecipe(id) {
  try {
    const urlBase = "api/recipe";
    const url = `${urlBase}/${id}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err;
  }
}
