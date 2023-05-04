// import React from 'react'

import React from "react"
import Counter from "./components/Counter"

function App(){
  const [num, setNum] = React.useState(0)

  return(
    <div className="bg-white text-neutral">
      <div className='flex h-screen justify-center items-center'>
        <div className='flex justify-center items-center bg-primary rounded-lg w-[400px] h-[250px]'>
          <div className= 'flex flex-col gap-7 w-[200px]'>
            <div className= 'text-center text-5xl'>
              <div>{num}</div>
              <Counter onChangeNumber={setNum} />
              </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App