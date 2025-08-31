import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "vu8n6u99",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-08-28",
});
