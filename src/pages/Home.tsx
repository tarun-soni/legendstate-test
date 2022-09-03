import { observer } from '@legendapp/state/react'
import { useState } from 'react'
import store from '../store'

const Component = observer(() => {
  const toggle = () => {
    store.settings.theme.set?.((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div>
      <div>Theme: {store.settings.theme}</div>
      <button
        type="button"
        onClick={toggle}
        className="px-5 w-50 h-10 bg-slate-800 text-yellow-100"
      >
        Toggle theme
      </button>
    </div>
  )
})

function ShowTheme() {
  const [localTheme, setLocalTheme] = useState('0')

  store.settings.theme.onChange?.((theme) => {
    setLocalTheme(theme)
  })

  return <div>Theme: {localTheme}</div>
}

function Home() {
  return (
    <>
      <Component />
      <ShowTheme />
    </>
  )
}
export default Home
