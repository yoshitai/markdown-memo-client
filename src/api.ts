const request = async (path: string, options = {}) => {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await fetch(url, options);
  console.log(response.json())
  return await response.json();
};

type Memo = {
  title: string;
  content: string;
};

export const createMemo = async (obj: Memo) => {
  const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(obj)
  };
  await request("/memo/create", options);
};

export const updateMemo = async (title: string, obj: Memo) => {
  const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(obj)
  };
  await request(`/memo/update/${title}`, options);
};

export const getMemo = async (title: string) => {
  return await request(`/memo/${title}`);
};

export const getAllMemo = async () => {
  return await request("/memo/list");
}