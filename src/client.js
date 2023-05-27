import { createClient } from "@sanity/client";

console.log(process.env.REACT_APP_SANITY_PROJECT_ID);
const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
    dataset: 'production', 
    apiVersion: '2023-05-26',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

export default client;
