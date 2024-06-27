import React from 'react'
interface Props{
    result: string
}
const Result = ({result}:Props) => {
  return (
    <div className='result'><input readOnly type='text' value={result} /></div>
  )
}

export default Result