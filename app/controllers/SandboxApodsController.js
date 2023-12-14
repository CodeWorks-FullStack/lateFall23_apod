import { AppState } from "../AppState.js";
import { nasaApodsService } from "../services/NasaApodsService.js";
import { sandboxApodsService } from "../services/SandboxApodsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyApods(){
  const apods = AppState.myApods
  let content = ''
  apods.forEach(apod => content += apod.ListTemplate)
  setHTML('my-apods-list', content) //🧪 we got a template, we got a listener... does it work though?
}


export class SandboxApodsController{
  constructor(){
    console.log('🥪🎮');
    // this.getMyApods() getting data from a authorized route 'on load' will generally return you a 401
    AppState.on('user', this.getMyApods) // instead we listen for the user data to be filled out (listener), and then go get it
    AppState.on('myApods', _drawMyApods)
  }


  async saveApod(){
    try {
      await sandboxApodsService.saveApod()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getMyApods(){
    try {
      await sandboxApodsService.getMyApods()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getActiveApodFromList(apodDate){
    try {
      console.log('🥪🌃🗓️', apodDate); //🧪 did it log the right date?
      await nasaApodsService.getActiveApod(apodDate) //🧪 

      // NOTE we are brining in a reference to the bootstrap library imported via a script in our html, then invoking a static function on the Offcanvas class, to create a JS instance of an offcanvas from your html, using the id on our offcanvas in the ApodView, then running the .hide() function to dismiss it
      // REVIEW is short, grab the offcanvas from the page using BS5 code, and closing it
      const offCanvas = bootstrap.Offcanvas.getOrCreateInstance('#apod-offcanvas') // 🧪 does it close the offcanvas after you select your apod
      offCanvas.hide()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}