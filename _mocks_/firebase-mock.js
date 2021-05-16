/* eslint-disable no-undef */

/* Mock manual para primer test */

const firestore = () => {
  return {
    collection: (nameCollection) => {
      return {
        doc: () => {
          return {
            set: (objData) => {
              return new Promise((resolve) => {
                resolve(objData)
              })
            }
          }
        }
      }
    }
  }
}

const firebase = {
  firestore: firestore
}

export default jest.fn(() => {
  return firebase
})
