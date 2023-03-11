export const fetchSpecificProject = async (name) => {
  const res = await fetch("http://localhost:3000/api/getSpecificProject", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    }),
  });
  const data = await res.json();
  return data.projects;
};
