async function request(path, options = {}) {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

const getMemo = async (id) => {
  return request(`/markdown-memo/${id}`);
};

console.log(getMemo(6));
