import { AppState } from "../AppState.js"




export class Apod{
  constructor(data){
    this.id = data.id
    this.date = data.date // What date did this apod appear
    this.imgUrl = data.imgUrl || data.hdurl
    this.creatorId = data.creatorId
    this.description = data.description || data.title + '\n\n' + data.explanation 
    this.author = data.author || data.copyright || 'no author'
    console.log('✨🌃', this);//🧪 did the test data in our appstate map over correctly
  }
  /**
   * date: String, required
imgUrl: String, required
creatorId: String (References Account Id), required
*creator: Object (Virtual Added by Database)
description: String, 
author: Object, 
originalId: String, 
*createdAt: ISO Timestamp (Virtual Added by Database)
*updatedAt: ISO Timestamp (Virtual Added by Database) */

get ActiveApodTemplate(){
  return `
  <div class="hover-parent">
    <h1 class="col-12 ">${this.date}</h1>
    <h2 class="col-12 hover-child">${this.author}</h2>
    <p class="col-12 p-4 hover-child">${this.description}</p>
    ${this.saveApodButton}
  </div>
  `
}

get saveApodButton(){
  if(AppState.user){
    return `<button onclick="app.SandboxApodsController.saveApod()" class="btn btn-dark col-2 hover-child">save apod 💾</button>`
  } else {
    return `<p class="hover-child">please log in to save</p>`
  }
}

get ListTemplate(){
  return `
  <div class="row mb-2 list-apod">
   <div class="col-4 h-100"><img class="img-fluid"
       src="${this.imgUrl}"
       alt="apod picture by ${this.author}"></div>
   <div class="col-6">${this.date}</div>
   <button onclick="app.SandboxApodsController.getActiveApodFromList('${this.date}')" class="btn btn-outline-light col-2" title="open apod in center"><i class="mdi mdi-open-in-new"></i></button>
 </div>
  `
}
}