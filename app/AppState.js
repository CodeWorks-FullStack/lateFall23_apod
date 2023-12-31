import { Apod } from './models/Apod.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
/** @type {Apod} */
  activeApod = new Apod({
    "copyright": "\nDzmitry Kananovich\n",
    "date": "2023-11-13",
    "explanation": "Have you ever seen the Andromeda galaxy? Although M31 appears as a faint and fuzzy blob to the unaided eye, the light you see will be over two million years old, making it likely the oldest light you ever will see directly. The featured image captured Andromeda just before it set behind the Swiss Alps early last year. As cool as it may be to see this neighboring galaxy to our Milky Way with your own eyes, long duration camera exposures can pick up many faint and breathtaking details. The image is composite of foreground and background images taken consecutively with the same camera and from the same location.  Recent data indicate that our Milky Way Galaxy will collide and coalesce with Andromeda galaxy in a few billion years.   Follow APOD on Facebook in: Arabic, English, Catalan, Portuguese, or Taiwanese",
    "hdurl": "https://apod.nasa.gov/apod/image/2311/M31Alps_Kananovich_1639.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Andromeda over the Alps",
    "url": "https://apod.nasa.gov/apod/image/2311/M31Alps_Kananovich_960.jpg"
})

/** @type{Apod[]} */
myApods = []
}

export const AppState = createObservableProxy(new ObservableAppState())