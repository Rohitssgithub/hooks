import React from 'react'
import UsecallBacks from './component/CallBack/UsecallBack'
import PureComponent from './component/purecomponent/PureComponent'
import UseMemo from './component/UseMemoHook/UseMemo'
import { UseContextcom } from './component/usecontext/UseContext'
import Alldata from './component/AllData/Alldata';
import Debounce from './component/Debounce'
import DeBounceing from './component/DeBounceing'
import Todos from './component/UseReducer'
const App = () => {
  return (
    <>
      <Todos></Todos>
      <DeBounceing />
      {/* <Debounce></Debounce> */}
      {/* <CreatePokemon /> */}
      <Alldata></Alldata>
      {/* <UseContextcom> */}
      {/* <UsecallBacks></UsecallBacks>
        <UseMemo></UseMemo> */}
      {/* <PureComponent />
      </UseContextcom> */}


    </>
  )
}

export default App