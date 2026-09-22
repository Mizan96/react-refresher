import React, { useState } from 'react'
import Theme from './components/Theme'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>{theme} Theme</h1>
      <Theme theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
