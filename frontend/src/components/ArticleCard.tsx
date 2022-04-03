import React, {useState} from 'react'
import { Card, CardHeader, CardBody } from 'grommet'

export default function ArticleCard() {
  const [test, setTest] = useState('none')
  return (
    <Card height="small" width="small" animation={test as 'slideLeft'}  onMouseEnter={()=>setTest('slideLeft')} onMouseLeave={()=>setTest('none')}>
      <CardHeader pad='medium'>Test</CardHeader>
      <CardBody>
        Lorem Ipsum
      </CardBody>
    </Card>
  )
}
