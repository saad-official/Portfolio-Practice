export const fetchSkills = async () => {
  const res = await fetch("http://localhost:3000/api/getSkills");
  const data = await res.json();
  console.log("fetch Skills", data);
  return data.skills;
};
