import { createClient } from "next-sanity";
import CreateImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "01ypsvz3",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps Function
export const sanityClient = createClient(config);

export const urlFor = (source) => CreateImageUrlBuilder(config).image(source);
