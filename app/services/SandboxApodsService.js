import { AppState } from "../AppState.js"
import { Apod } from "../models/Apod.js";
import { api } from "./AxiosService.js"




class SandboxApodsService{
  async saveApod() {
    const apod = AppState.activeApod
    const response = await api.post('api/apods', apod)
    console.log('🥪✨🌃📡',response.data); //🧪 when i click the button does it work? can i check the sandbox site to verify?
    // TODO what do i do with this info?
    const newApod = new Apod(response.data)
    AppState.myApods.push(newApod)
    console.log('🌃🌃🌃', AppState.myApods);
  }


  async getMyApods(){
    const response = await api.get('api/apods')
    console.log('🥪🌃🌃📡', response.data);// 🧪🧪 test getting on load, and test getting via a listener
    const apods = response.data.map(apod => new Apod(apod)) // 🧪 check the log from the Apod contractor
    AppState.myApods = apods
  }
}

export const sandboxApodsService = new SandboxApodsService()