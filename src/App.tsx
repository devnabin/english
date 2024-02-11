import React, { useEffect, useState } from 'react'

import './App.css'
import AddNew from './Component/AddNew'
import Search from './Component/Search'


import { Button } from '@mantine/core';



function App() {

  const [display, setDisplay] = useState(true);

  const txt: string = "abcdefghij"
  const txtLength: number = txt.length


  const setHandle = (e) => {
    setDisplay(!display)
  }

  const HiddenNumber: object = {
    4: 2,
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 6,
    10: 7,
    // 11: (txtLength > 10 ? 9 : 1)
  }

  let a: number;

  for (const key in HiddenNumber) {
    if (txtLength == +key) {
      a = HiddenNumber[key]
    } else if (txtLength < 4) {
      a = 1
    } else if (txtLength > 10) {
      a = 10
    }
  }



  const myArr: [] = [];

  for (let i = 1; i <= a; i++) {
    myArr.push(Math.floor(Math.random() * txtLength))
  }


  // console.log(myArr);
  function test(txt, myArr) {

    let arr = txt.split('');
    console.log(myArr);

    console.log(arr);

    for (let a of myArr) {
      console.log(arr[a]);
      arr[a] = "*"
    }



    return arr.join('')
  }


  const finaltxt = test(txt, myArr);


  return (
    <div className='relative '>
      <div className='absolute z-50 top-7 w-full flex justify-between px-4 '>
        <AddNew />

        <Search />
      </div>
      <div className='h-screen w-screen grid place-content-center bg-blue-900 relative'>
        <div className='text-white '>
          {/* <p className='mb-9 text-center text-xs' >Word for You 🔥</p> */}
          <p className='inline-block p-3 px-9 rounded-xl tracking-wider bg-blue-950 shadow-lg'>
            {display ? finaltxt : txt}
          </p>

          <Button
            className='text-sm bg-blue-950  rounded-xl ml-3 hover:bg-blue-500 hover:shadow-xl transition-colors border-blue-500 border-2'
            onClick={setHandle}
          >
            Reveal
          </Button>
        </div>

      </div>
    </div>
  )
}

export default App
