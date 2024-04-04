import { createClient } from "pexels";

export const pexelClient = createClient(process.env.NEXT_PUBLIC_API_KEY_PEXEL!)

export const getImages = async (query: string = "travel") => {
    const response = await pexelClient.photos.search({ query: query })
    return response
}