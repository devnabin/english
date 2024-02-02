import './App.css'
import AddNew from './Component/AddNew'

function App() {

  return (
    <>
      <div className='h-screen w-screen w-full grid place-content-center bg-blue-900 relative'>
        <div id="center" className='absolute bg-blue-300 rounded-2xl px-2 w-3/4 h-8 m-5 left-2/4 -translate-x-2/4 flex justify-between items-center'>
          <AddNew />
          <AddNew />
        </div>

        <div>
          <span className='inline-block p-3 px-9 rounded-xl tracking-wider bg-blue-950 text-white'>NabinBhandari</span>
        </div>
      </div>
    </>
  )
}

export default App
