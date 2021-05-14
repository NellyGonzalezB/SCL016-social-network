/* eslint-disable no-undef */

// import { db } from '../firebase.js'
export const savePost = (postIt, contador) => {
  contador = 0
  return firebase.firestore().collection('posts').add({
    postIt,
    contador
  })
}

export const deletePosts = (id) => {
  return firebase.firestore().collection('posts').doc(id).delete()
}
