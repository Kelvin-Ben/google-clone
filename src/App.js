import React, { useState } from 'react'
import Footer from './components/Footer';
import Navabr from './components/Navabr';
import Routes from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false) 

  return (
    // ternary operator
    <div className={darkTheme ? 'dark' : ''}> 
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navabr darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App;