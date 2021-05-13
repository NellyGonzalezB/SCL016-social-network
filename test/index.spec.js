import MockFirebase from 'mock-cloud-firestore'
/* eslint-disable no-undef */
// import MockFirebase from '../_mocks_/firebase-mock.js'
// global.firebase = MockFirebase()
// eslint-disable-next-line import/first
import { savePost } from '../src/lib/index'

describe('save', () => {
  it('Deberia poder agregar un post', () => {
    return savePost('hola', 2).then((data) => {
      expect(data).toBe('hola', 2)
    })
  })
})
