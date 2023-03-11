// *[_type == "experience"]
// import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'skill']
`;

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const skills = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
