import React, { useState } from 'react'
import { Header, Button, Heading } from 'grommet'
import { BladesVertical } from 'grommet-icons'

export default function HeaderWrapper() {
    const [sidebar,setSidebar] = useState(false)
  return (
    <Header background='brand' justify='stretch'>
        <Button icon={<BladesVertical />} hoverIndicator onClick={()=>setSidebar(!sidebar)}/>
        <Heading alignSelf='center' level={3} margin='none'>Header</Heading>
    </Header>
  )
}
function toggleSidebar() {
    throw new Error('Function not implemented.')
}

