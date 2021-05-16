/* eslint-disable no-undef */

/* Guardar y eliminar posts en firebase */
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
