// aqui exportaras las funciones que necesites

// export const myFunction = () => {
// aqui tu codigo
// console.log('Hola mundo!');
// };

const db = firebase.firestore()

export default () => {
  const postForm = document.getElementById('post-form')
  const postContainer = document.getElementById('post-container')
  const updatePost = (id, updatedPost) => db.collection('posts').doc(id).update(updatedPost)

  let editStatus = false
  let id = ''

  const getPosts = () => db.collection('posts').get()
  const getPost = (id) => db.collection('posts').doc(id).get()

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const postIt = postForm.post.value

    if (!editStatus) {
      const response = await db.collection('posts').doc().set({
        postIt
      })
    } else {
      await updatePost(id, {
        postIt
      })
    }
    postForm.reset()
    const onGetPosts = (callback) => db.collection('posts').onSnapshot(callback)
    const deletePosts = (id) => db.collection('posts').doc(id).delete()

    // const querySnapshot = await getPosts();
    onGetPosts((querySnapshot) => {
      postContainer.innerHTML = ''
      querySnapshot.forEach(doc => {
        const post = doc.data()
        post.id = doc.id

        postContainer.innerHTML += `
                <div class="card mt-5">
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
                    </div>
                </div>
            `
        const btnsDelete = document.querySelectorAll('.btn-delete')
        btnsDelete.forEach(btn => {
          btn.addEventListener('click', async (e) => {
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
            console.log(doc.data())
          })
        })

        // return postContainer
      })
    })
  })
}
