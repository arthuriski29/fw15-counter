// import React from 'react'

function App(){
  return(
    <>
      <div className='flex h-screen justify-center items-center'>
        <div className= 'flex flex-col gap-7'>
          <div className= 'text-center text-2xl'>
            <h1>0</h1>
          </div>
          <div className= 'flex gap-16'>
            <button className="btn btn-outline text-xl">-</button>
            <button className="btn btn-outline text-xl">+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App