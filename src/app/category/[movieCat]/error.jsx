"use client"

import React from 'react'

export default function error(error, reset) {
  return (
    // react는 하나의 태그만 return 해야함 
    <> 
        <div>영화 갖고오다가 에러 발생....{error.toString}</div>
        <button onClick={reset}>리셋하기</button>
    </>
   

  )
}
