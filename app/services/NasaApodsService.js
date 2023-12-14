import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Apod } from "../models/Apod.js";


// @ts-ignore
const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})


class NasaApodsService{
  async getActiveApod(searchDate){ // started with no arguments, but added one later for dates
    const response = await nasaApi.get(`?api_key=2DRMc8Ah0Y0rljaAOqEQtjiMY3f6ZrfswxzINUX1&date=${searchDate}`)
    console.log('🌃📡', response.data); //🧪 did you get the response you wanted from the api?
    const newApod = new Apod(response.data)
    AppState.activeApod = newApod
  }
}

export const nasaApodsService = new NasaApodsService()