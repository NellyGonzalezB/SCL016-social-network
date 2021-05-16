/* eslint-disable no-undef */
// import MockFirebase from '../_mocks_/firebase-mock.js'
// global.firebase = MockFirebase()

import MockFirebase from 'mock-cloud-firestore'

/* Data falsa para testeo */
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

/* Todas las variables "firebase" se cambiarán por lo que se usa en la librería Mock */
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true })
/* isnaivesnapshotlistenerenabled para escuchar las actualizaciones de snapshot en tiempo real */

// eslint-disable-next-line import/first
import { savePost, deletePosts } from '../src/lib/index.js'
describe('save', () => {
  it('Deberia poder agregar un post', () => {
    return savePost('hola').then((data) => {
      console.log(typeof data)
      expect(typeof data).toBe('object')
    })
  })
})

describe('delete', () => {
  it('Deberia poder eliminar un post', () => {
    return deletePosts('abc125').then((data) => {
      expect(data).toBe(undefined)
    })
  })
})
