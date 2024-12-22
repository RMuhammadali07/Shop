import React from 'react'
import Home from '../../components/home/Home'
import Brend from '../../components/brend/Brend'
import Top from '../../components/top/Top'
import New from '../../components/new/New'
import Design from '../../components/design/Design'
import Customer from '../../components/customer/Customer'

const Homes = () => {
  return (
    <div>
      <Home />
      <Brend />
      <New />
      <hr className='home-hr'/>
      <Top />
      {/* <Design /> */}
      <Customer />
    </div>
  )
}

export default Homes
