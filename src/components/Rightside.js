import React from 'react'
import styled from 'styled-components'


const Rightside = () => {
  return (
<Container>
      <FollowCard>
        <Title>

          <h2>Recent Job Postings</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
    
            <span>
              <img src='/images/job.svg' />
              <p><h2>Netsol Technologies </h2> Senior React developer</p>
              
            </span>
          </li>
          <li>
            
          <span>
              <img src='/images/job.svg' />
              <p><h2>Netsol Technologies</h2> Social Media Manager</p>
            </span>
          </li>
        </FeedList>
        <Recommendation>
          View all 
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
        </FollowCard>
        <BannerCard>
        <img
          src="./images/nust-main-office.jpeg"
          alt=""
        />
      </BannerCard>
        </Container>
  )
}

const Container= styled.div`grid-area: rightside;`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      border-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
    span {
      display: flex;
      align-items: center;
      
      p{
        left: 0px;
        
        h2{
          color: #064479;
          margin-left:-10px;
        }
      }
      img{
        height: 20px;
        margin-right: 10px;
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: '/images/job.svg';
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
&:hover {
  text-decoration: underline;
  cursor:pointer ;
}

`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside