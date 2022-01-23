/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useCallback, useState, useEffect } from 'react'

function TestPage() {

  const [test, setTest] = useState({ a :"a" })



  const click = () => {
    setTest({ b:"b"})
    console.log(test)
  }

  return (
    <div>
      <button onClick={click}>클릭</button>
    </div>
  )
}

export default TestPage
