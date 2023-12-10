import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`
const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`
const Date = styled.span`
 font-size: 12px;
 font-weight: 400;
 color: ${({ theme }) => theme.textSoft};
 margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/yti/ADpuP3O9YKub84gllvTnVD2pGbJoNDIDu59vmthk_m1J=s88-c-k-c0x00ffffff-no-rj'/>
      <Details>
        <Name>John Doe <Date>1 day ago</Date></Name>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus maiores accusantium magnam, tempore iste deleniti, minima iure sit ut facere. Beatae, nostrum dolores vel animi quis tempora rem delectus.</Text>
      </Details>
    </Container>
  )
}

export default Comment
