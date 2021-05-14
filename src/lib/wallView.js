/* eslint-disable no-undef */
import { savePost, deletePosts } from '../lib/index.js'

export const DoPost = () => {
  const postForm = document.getElementById('post-form')
  const postContainer = document.getElementById('post-container')
  const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update(updatedPost)

  let editStatus = false
  let id = ''
  let contador = 0
  const getPost = (id) => firebase.firestore().collection('posts').doc(id).get()

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const postIt = postForm.post.value
    if (!editStatus) {
      await savePost(postIt, contador)
    } else {
      await updatePost(id, {
        postIt,
        contador
      })
      editStatus = false
      postForm['btn save-form'].innerText = 'Save'
    }
    postForm.reset()
  })

  const onGetPosts = (callback) => firebase.firestore().collection('posts').onSnapshot(callback)

  onGetPosts((querySnapshot) => {
    postContainer.innerHTML = ''
    querySnapshot.forEach(doc => {
      const post = doc.data()
      post.id = doc.id

      postContainer.innerHTML += `
                <div class="my-posts card mt-5">

                    <div class="card-body mt-2 border-primary">
                         ${post.postIt}
                     </div>
                    <div>
                         <button class="btn btn-primary btn-delete" id="${post.id}">
                             Delete!
                        </button>
                        <button class="btn btn-primary btn-edit" id="${post.id}">
                            Edit
                        </button>
                        <button class="btn btn-primary btn-like" id="${post.id}">
                            Likes ${post.contador}
                        </button>
                    </div>
                </div>
                `
      const btnsDelete = document.querySelectorAll('.btn-delete')
      btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          console.log(deletePosts(e.target.id))
          await deletePosts(e.target.id)
        })
      })
      const btnsEdit = document.querySelectorAll('.btn-edit')

      btnsEdit.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const doc = await getPost(e.target.id)
          const post = doc.data()

          editStatus = true
          id = doc.id

          postForm.post.value = post.postIt
          postForm['btn save-form'].innerText = 'Update'
        })
      })

      const btnsLike = document.querySelectorAll('.btn-like')

      btnsLike.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const doc = await getPost(e.target.id)
          const post = doc.data()
          contador = post.contador + 1
          // contadorF.value =

          console.log(post.contador)
          console.log(post)
          console.log(contador)
          id = doc.id
          updatePost(id, {
            contador
          })
        })
      })
    })
  })
}
