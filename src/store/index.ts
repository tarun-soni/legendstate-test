import { observable } from '@legendapp/state'

const settings = {
  theme: 'light',
  language: 'en',
}

const todos = {
  items: [],
}

const store = observable({ settings, todos })

export default store
