import React from 'react'
import ReactLoading from 'react-loading';
 

const Loading = () => {
  return (
    <div className='Loading'>
        <ReactLoading type={'cubes'} color={"#ffcc00"} height={667} width={375} />
    </div>
  )
}

export default Loading
