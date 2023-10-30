import React from 'react'
import UsecallBacks from './component/CallBack/UsecallBack'
import PureComponent from './component/purecomponent/PureComponent'
import UseMemo from './component/UseMemoHook/UseMemo'
import { UseContextcom } from './component/usecontext/UseContext'
const App = () => {
  return (
    <>
      <UseContextcom>
        {/* <UsecallBacks></UsecallBacks>
        <UseMemo></UseMemo> */}
        <PureComponent />
      </UseContextcom>


    </>
  )
}

export default App