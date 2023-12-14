import { AppState } from "../AppState.js";
import { nasaApodsService } from "../services/NasaApodsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawActiveApod(){
  const apod = AppState.activeApod
  let content = apod.ActiveApodTemplate //🧪 first tested with just the description, then once we knew the draw was working, updated to a fancier template
  setHTML('active-apod', content)
  document.body.style.backgroundImage = `url(${apod.imgUrl})` //🧪 does the image show up
}

function _formateDateForSearch(date){
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}



export class NasaApodsController{
  constructor(){
    console.log('🧑‍🚀🎮');
    _drawActiveApod() //🧪 testing hardcoded data in appstate, does it draw?
    AppState.on('activeApod', _drawActiveApod)//🧪 does it draw when you load todays apod
    AppState.on('user', _drawActiveApod)//🧪 we want to also draw when the user arrives, because our button to save the active is conditionally rendered, based on this info
    this.getActiveApod()
  }

  async getActiveApod(){
    try {
        const today = new Date()
        let format = _formateDateForSearch(today) // 🧪 now that it is abstracted to it's own function, does it still work?
        console.log('🗓️', format); //🧪 can we force the date to look the way we want
        await nasaApodsService.getActiveApod(format)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async searchApod(){
    try {
      event.preventDefault()
      const form = event.target
      // @ts-ignore
      const searchDate = form.searchDate.value // instead of creating an object with the form data, just grabbing out the one value I want, by it's name on the input field
      console.log('🔍🗓️', searchDate); //🧪🧪🧪 was it the correct date?, did you spell it right, did you have a submit event?
      await nasaApodsService.getActiveApod(searchDate)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}