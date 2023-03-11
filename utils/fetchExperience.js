export const fetchExperience = async () => {
  const res = await fetch("http://localhost:3000/api/getExperience");
  const data = await res.json();
  console.log("fetch experience", data);
  return data.experience;
};
