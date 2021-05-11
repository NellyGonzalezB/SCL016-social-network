/* eslint-disable no-restricted-globals */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { routes } from './routes.js'
import postForm from './lib/index.js'

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

      // eslint-disable-next-line no-undef
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

      // eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
      const provider = new firebase.auth.GoogleAuthProvider()
      // eslint-disable-next-line no-undef
      auth.signInWithPopup(provider)
        .then(() => {
          console.log('google sign in')
          // eslint-disable-next-line no-undef
          signupForm.reset()
        })
        .catch((err) => {
          console.log(err)
        })
    })

    // Facebook Login

    const facebookButton = document.querySelector('#facebookLogin')
    facebookButton.addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      const provider = new firebase.auth.FacebookAuthProvider()
      // eslint-disable-next-line no-undef
      auth.signInWithPopup(provider)
        .then(() => {
          console.log('facebook sign in')
          // eslint-disable-next-line no-undef
          signupForm.reset()
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
  postForm()
  // const db = firebase.firestore();
  // const getPosts = () => db.collection("posts").get();
  // const querySnapshot = await getPosts();
  // querySnapshot.forEach(doc => {
  // return console.log(doc.data());
  // })
}
