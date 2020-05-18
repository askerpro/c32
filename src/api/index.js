import fetch from "node-fetch";

export const makeQueryString = (page, search, platforms, ordering) => {
  let queryStringArray = [];

  if (page && page > 1) {
    queryStringArray.push(`page=${page}`);
  }
  if (search) {
    queryStringArray.push(`search=${search}`);
  }
  if (platforms) {
    queryStringArray.push(`parent_platforms=${platforms}`);
  }

  if (ordering) {
    queryStringArray.push(`ordering=${ordering}`);
  }
  if (queryStringArray.length) {
    return `?${queryStringArray.join("&")}`;
  }

  return "";
};

export const getList = async (query) => {
  const response = await fetch(`${process.env.API}${query}`);
  if (!response.ok) {
    console.log(`${process.env.API}${query}`);
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
};

export const get = async (slug) => {
  const response = await fetch(`${process.env.API}/${slug}`);
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
};

export const getPlatorms = async () => {
  const response = await fetch(`${process.env.PLATFORMS}`);
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
};
