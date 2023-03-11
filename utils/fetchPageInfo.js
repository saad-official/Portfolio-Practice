export const fetchPageInfo = async () => {
  const res = await fetch("http://localhost:3000/api/getPageInfo");
  const data = await res.json();
  return data.pageInfo;
};
