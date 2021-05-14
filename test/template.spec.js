/* eslint-disable no-undef */
import home from '../src/views/home.js'
import wall from '../src/views/wall.js'
import login from '../src/views/login.js'
import selection from '../src/views/selection.js'
import signup from '../src/views/signup.js'

describe('template html', () => {
  it('home debería ser un template html', () => {
    const homeView = home()
    expect(homeView instanceof HTMLElement).toBe(true)
  })
  it('login debería ser un template html', () => {
    const loginView = login()
    expect(loginView instanceof HTMLElement).toBe(true)
  })
  it('selection debería ser un template html', () => {
    const selectionView = selection()
    expect(selectionView instanceof HTMLElement).toBe(true)
  })
  it('signup debería ser un template html', () => {
    const signupView = signup()
    expect(signupView instanceof HTMLElement).toBe(true)
  })
  it('wall debería ser un template html', () => {
    const wallView = wall()
    expect(wallView instanceof HTMLElement).toBe(true)
  })
})
