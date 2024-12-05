import { client } from "@/sanity/client";
import type { SanityDocument } from "next-sanity";

export async function fetchProjects(): Promise<SanityDocument[]> {
    const PROJECTS_QUERY = `*[_type == "project"]{
    projectName,
    "screenshotUrl": screenshot.asset->url,
    name,
    deployUrl,
    description
  }`;
    return await client.fetch<SanityDocument[]>(PROJECTS_QUERY);
}
