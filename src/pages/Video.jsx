import { AddTaskOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
display: flex;
gap: 24px;
`
const Content = styled.div`
flex: 5;
`
const VideoWrapper = styled.div`
  
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`
const Recommendation = styled.div`
flex: 2;
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
`
const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
  padding: 10px 20px;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
           width="100%"
           height="720"
           src="https://www.youtube.com/embed/8h9eIwVnO2g"
           title="Youtube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
        <Info>2.4M views • 1 day ago</Info>
        <Buttons>
          <Button><ThumbUpOutlined/>123</Button>
          <Button><ThumbDownOutlined/>Dislike</Button>
          <Button><ReplyOutlined/>Share</Button>
          <Button><AddTaskOutlined/>Save</Button>
        </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src='https://yt3.ggpht.com/yti/ADpuP3O9YKub84gllvTnVD2pGbJoNDIDu59vmthk_m1J=s88-c-k-c0x00ffffff-no-rj'/>
            <ChannelDetail>
              <ChannelName>Henrique Dev</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa labore molestias fugiat qui adipisci veniam vel ipsam a earum veritatis beatae iusto, id fugit nobis nihil provident corporis nesciunt.</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
       
      </Recommendation>
    </Container>
  )
}

export default Video
