/* Importamos todas las vistas de la página */
import Home from '../views/home.js'
import Login from '../views/login.js'
import Signup from '../views/signup.js'
import Selection from '../views/selection.js'
import Wall from '../views/wall.js'

/* Contenedor donde se muestran todas las vistas para que sea una SPA */
const firstPage = document.getElementById('first-page')

/* Toma las rutas enviadas por main y trae el contenedor de las diferentes vistas */
export const routes = (route) => {
  firstPage.innerHTML = ''
  switch (route) {
    case '#/home':
      return firstPage.appendChild(Home())
    case '#/login':
      return firstPage.appendChild(Login())
    case '#/signup':
      return firstPage.appendChild(Signup())
    case '#/selection':
      return firstPage.appendChild(Selection())
    case '#/wall':
      return firstPage.appendChild(Wall())
    default:
      return console.log('404!')
  }
}
