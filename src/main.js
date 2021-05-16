/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

/* Página principal con login, signup, google, facebook */

import { routes } from './routes.js'
import { DoPost } from '../lib/wallView.js'
import { auth } from './firebase.js'

/* Función que toma los cambios de hash */
const url = () => {
  routes(window.location.hash)
}

/* Crea url de página de inicio con history api */
const firstPage = () => {
  history.pushState(null, 'home', '#/home')

  url()
}

/* Crea url de página de selección */
const selectionPage = () => {
  console.log('entro selection')

  history.pushState(null, 'selection', '#/selection')
  url()
}

/* Se crea ruta a la página de muro */
const wall = async () => {
  console.log('entro wall')
  history.pushState(null, 'wall', '#/wall')
  url()
  DoPost()
}

/* Al hacer click en link ("Aquí"), se crea ruta a página de registro */
const signupPage = () => {
  const link = document.getElementById('link')

  link.addEventListener('click', () => {
    history.pushState(null, 'signup', '#/signup')
    url()

    // SignUp
    const signupForm = document.querySelector('#signup-form')

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const email = document.getElementById('write-e-mail').value
      const password = document.getElementById('write-password').value

      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          signupForm.reset()
          console.log('sign up')
          selectionPage()
        })
        .catch(() => {
          signupForm.reset()
          console.log('e-mail o contraseña erroneos')
        })
    })
  })
}

/* Al clickear botón continuar nos envía a la página de inicio de sesión */
const loginPage = () => {
  const toContinue = document.getElementById('start-btn')
  toContinue.addEventListener('click', () => {
    history.pushState(null, 'login', '#/login')
    console.log('click')
    url()
    console.log('url')

    // Login
    const loginForm = document.querySelector('#login-form')
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const yourEmail = document.getElementById('your-email').value
      const yourPassword = document.getElementById('your-password').value
      console.log(yourEmail, yourPassword)
      auth
        .signInWithEmailAndPassword(yourEmail, yourPassword)
        .then(() => {
          loginForm.reset()
          console.log('sign in')
          wall()
        })
        .catch(() => {
          loginForm.reset()
          console.log('e-mail o contraseña erroneos')
        })
    })

    // Google Login

    const googleButton = document.querySelector('#googleLogin')
    googleButton.addEventListener('click', () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
        .then(() => {
          console.log('google sign in')
        })
        .catch((err) => {
          console.log(err)
        })
    })

    // Facebook Login

    const facebookButton = document.querySelector('#facebookLogin')
    facebookButton.addEventListener('click', () => {
      const provider = new firebase.auth.FacebookAuthProvider()
      auth.signInWithPopup(provider)
        .then(() => {
          console.log('facebook sign in')
        })
        .catch((err) => {
          console.log(err)
        })
    })
    signupPage()
  })
}

firstPage()
loginPage()

// window.addEventListener('popstate', () => {
//   url()
// })
