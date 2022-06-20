// This file is to connect contentful with our application
import * as contentful from 'contentful'

// Creating a client to use api from contentful
export const client = contentful.createClient({
    space: "9625y3q8maqu",
    accessToken: "jywdu9pqRSYLDplzY-R8NdLzhE2s36G5Y-eonTM8RUw",
})
