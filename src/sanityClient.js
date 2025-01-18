import { createClient } from '@sanity/client';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Replace with your Sanity API token
});


export default client;
