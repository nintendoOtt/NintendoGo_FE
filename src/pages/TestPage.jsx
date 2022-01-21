/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useCallback, useState, useEffect } from 'react'

function TestPage() {

  const [num, setNum] = useState("")

  const changeTest = (e) => {
    setNum(e.target.value)
  }

  const clickTest = () => {
    console.log("click:", num)
  }

  const clickTestCallback = useCallback(() => {
    console.log("click:", num)
  }, [num])

  return (
    <div>
      <input onChange={changeTest}/>
      <button onClick={clickTestCallback}>클릭</button>
    </div>
  )
}

export default TestPage
