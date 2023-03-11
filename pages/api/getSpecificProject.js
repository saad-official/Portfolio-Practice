// *[_type == "experience"]
// import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const { name } = req.body;
  const query = groq`
  *[_type == 'myproject' && _id == '${name}'][0]{
    ...,
    technologies[]->
}`;
  const projects = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
