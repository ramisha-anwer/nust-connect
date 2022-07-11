import React from 'react'
import styled from 'styled-components'
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAuth } from '../actions'
import { signOutAPI } from '../actions'

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to='/' /> }
      <Section>
      
        <h5>
        <Link>Welcome, {props.user? props.user.displayName : 'there'}!</Link>
          <a>Hire NUST students and alumni </a>
        </h5>
        
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
      </Container>
  )
}

//STYLED COMPONENTS
const Container = styled.div`
  padding-top: 66px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    text-decoration: underline;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const mapStateToProps = (state) => {
  return ({
    user: state.userState.user
  })
}


export default connect(mapStateToProps)(Home)