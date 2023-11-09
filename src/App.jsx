import React from 'react'
import UsecallBacks from './component/CallBack/UsecallBack'
import PureComponent from './component/purecomponent/PureComponent'
import UseMemo from './component/UseMemoHook/UseMemo'
import { UseContextcom } from './component/usecontext/UseContext'
import Alldata from './component/AllData/Alldata';
import Debounce from './component/Debounce'
import DeBounceing from './component/DeBounceing'
import Todos from './component/UseReducer'
import ForwardRef from './component/ForwardRef'
import UseTransistion from './component/UseTransistion'
import ChildA from './component/HigherOrderComponenet/ChildA'
import ChildB from './component/HigherOrderComponenet/ChildB'
import RegistrationForm from './component/RegistrationForm/RegistrationForm'
const App = () => {
  return (
    <>
    <RegistrationForm></RegistrationForm>
      {/* <ChildA></ChildA>
      <ChildB></ChildB> */}
      {/* <UseTransistion></UseTransistion> */}
      {/* <PureComponent />
      <ForwardRef></ForwardRef>
      <Todos></Todos>
      <DeBounceing /> */}
      {/* <Debounce></Debounce> */}
      {/* <CreatePokemon /> */}
      {/* <Alldata></Alldata> */}
      {/* <UseContextcom> */}
      {/* <UsecallBacks></UsecallBacks>
        <UseMemo></UseMemo> */}
      {/* <PureComponent />
      </UseContextcom> */}


    </>
  )
}

export default App