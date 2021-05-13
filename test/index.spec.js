import MockFirebase from 'mock-cloud-firestore'
/* eslint-disable no-undef */
// import MockFirebase from '../_mocks_/firebase-mock.js'
// global.firebase = MockFirebase()

const fixtureData = {
  __collection__: {
    pots: {
      __doc__: {
        abc123: {
          postIt: 'terminar la pildora'
        },
        abc125: {
          postIt: 'comprar trufas'
        }
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true })

// eslint-disable-next-line import/first
import { savePost } from '../src/lib/index.js'
console.log(savePost())
describe('save', () => {
  it('Deberia poder agregar un post', () => {
    return savePost('hola').then((data) => {
      console.log(data)
      expect(data).toBe('hola')
    })
  })
})
