import { AccountController } from "./controllers/AccountController.js";
import { NasaApodsController } from "./controllers/NasaApodsController.js.js";
import { SandboxApodsController } from "./controllers/SandboxApodsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [NasaApodsController, SandboxApodsController],
    view: 'app/views/ApodView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




