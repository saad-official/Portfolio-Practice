export const fetchPageInfo = async () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  return data.pageInfo;
};
