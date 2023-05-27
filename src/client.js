import { createClient } from "@sanity/client";



export const client = createClient({
    _id: process.env.REACT_APP_SANITY_PROJECT_ID, 
    dataset: 'production', 
    apiVersion: '2023-05-26',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

export default client;