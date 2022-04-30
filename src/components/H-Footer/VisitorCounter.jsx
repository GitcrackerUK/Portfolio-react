import  React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { LocalOnEnter } from 'settings/VisitorsDataAPI.js'

const Wrapper = styled.div`
display:block;
width:100%;
text-align:center;
`
const Text = styled.p`
color:white;
font-size:4px !important;
opacity:60%;
`
export default function VisitorCounter(props) {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    LocalOnEnter.get('/').then((res) => {
      setVisits(res.data[res.data.length-1].counter)
    })
  },[]);

  return (
    <Wrapper>
      <Text>Visits {visits}</Text>
    </Wrapper>
  )
}
