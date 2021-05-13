/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
import { routes } from './routes.js'
import { auth } from './firebase.js'
import { DoPost } from './lib/index.js'

const url = () => {
  // const url = window.location.hash;
  routes(window.location.hash)
}

const firstPage = () => {
  history.pushState(null, 'home', '#/home')

  url()
}
const selectionPage = () => {
  console.log('entro selection')

  history.pushState(null, 'selection', '#/selection')
  url()
}
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
    })
  })
}

const loginPage = () => {
  const toContinue = document.getElementById('start-btn')
  toContinue.addEventListener('click', () => {
    history.pushState(null, 'login', '#/login')
    console.log('click')
    url()
    console.log('url')
    // //Login
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

window.addEventListener('popstate', () => {
  url()
})

const wall = async () => {
  console.log('entro wall')
  history.pushState(null, 'wall', '#/wall')
  url()
  DoPost()
}
