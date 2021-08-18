import axios, { AxiosResponse } from 'axios'
export const baseUrl: string = 'https://dog.ceo/api/'

export const getRandomImages = async (): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.get(baseUrl + 'breeds/image/random/10')
        return response
    }
    catch (error) {
        throw error
    }
}

export const getBreedImages = async (breedName: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.get(baseUrl + `breed/${breedName}/images/random/10`)
        return response
    }
    catch (error) {
        throw error
    }
}