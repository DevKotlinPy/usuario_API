import { Fragment } from 'react'

import './App.css'
import LoginComponent from './componets/LoginComponent'
import ServiceAComponent from './componets/ServiceAComponent'

function App() {
 

  return (
    <Fragment>
      <section className='bg-gray-50  max-w-screen-2xl dark:bg-gray-900 font-black justify-center text-white'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <LoginComponent/>
        </div>
      </section>

      <ServiceAComponent></ServiceAComponent>
    </Fragment>
  )
}

export default App
