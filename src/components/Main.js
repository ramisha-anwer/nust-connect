import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src='/images/user.svg'></img>
                    <button>Start a Post</button>
                </div>
                <div>
                    <button>
                        <img src='/images/image-solid.svg'></img>
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src='/images/video-solid.svg'></img>
                        <span>Video</span>
                    </button>
                    <button>
                        <img src='/images/calendar-solid.svg'></img>
                        <span>Event</span>
                    </button>
                    <button>
                        <img src='/images/newspaper-solid.svg'></img>
                        <span> Write Article</span>
                    </button>

                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                        <img src='/images/user.svg'></img>
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                        </a>
                        <button>
                            <img src='/images/ellipsis.svg'/>
                        </button>
                    </SharedActor>
                    <Description>As an undergrad student, I was always intrigued by the operational and business models of startups. I started discussing the science behind these products with my fellows in university and everyone had a different idea of what the scenario would be.
                     I started researching different products and found out it was no magic but operations with a business on top of it. At that time, I thought I would start writing articles on demystifying the science behind the products. And the time has come, and I am glad to share that I along with Alina Shoaib Qureshi have started Product Centric with an aim to learn and help our fellows learn about different products being launched with a focus on their operational and business models. <br></br><br></br>

The first article is already up and it's on the very trendy Q-Commerce industry. Let me know what you think about it. Moreover, I am all ears to the feedback and would love to know what other exciting products/startups I should research about!
<br></br><br></br>Thanks to Saif Ali for the 
motivation and Shaheryar E. for always supporting!
The link to the article has been shared in the comments!</Description>
                    <SharedImage>
                        <a>
                            <img src='/images/shared-image.jpg'/>
                        </a>
                    </SharedImage>
                    <SocialCounts>
                        <div>
                            <button>
                                <img src='/images/like.svg' />
                                <img src='/images/heart.svg' />
                                <span>70</span>
                                </button>
                        </div>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCounts>
                    <SocialAction>
                    <button>
                        <img src='/images/like2.svg' />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src='/images/comment.svg' />
                        <span>Comment</span>
                    </button>
                    <button>
                        <img src='/images/share.svg' />
                        <span>Share</span>
                    </button>
                    <button>
                        <img src='/images/send.svg' />
                        <span>Send</span>
                    </button>
                    </SocialAction>

                    </Article>
            </div>
        </Container>
    )
}

const Container = styled.div`
grid-area: main;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
`;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div {
    button {
        outline: none;
        color: rgb (0,0,0,0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        display: flex;
        align-items: center;
        font-weight: 600;
        border:none;

    }
    
    

    &:first-child{
        display: flex;
        align-items: center;
        padding: 10px 16px 0px 16px;
        img {
            border-radius: 50%;
            width: 48px;
            margin-right: 8px;
        }
        button {
            margin: 4px 0;
            flex-grow: 1;
            padding-left: 16px;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 35px;
            background-color: white;
            text-align: left;

        }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        padding-bottom: 4px;
        
        button {
        &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        border-radius: 5px;
    }
        img {
        width:20px;
        margin: 0 4px 0 -2px;
    }
    span {
        margin-left: 10px;
        color: #064479;
    }
        }
    }
}
`;

const Article = styled(CommonCard)`
padding: 0%;
margin: 0 0 8px;
overflow: visible;
`;

const SharedActor = styled.div `
padding-right:40px;
flex-wrap: nowrap;
padding: 12 px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
    margin: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
        /* margin: 12px; */
        width: 48px;
        height: 48px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;
        span {
            text-align: left;
            &:first-child{
                font-size: 14px;
                font-weight: 700;
                columns: rgba(0, 0, 0 ,1);
            }
            &:nth-child(n+1){
                font-size: 12px;
                color: rgba(0,0,0,0.6);
            }
        }
    }
}

button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
}
`;

const Description= styled.div `
padding: 0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align: left;
`;
const SharedImage = styled.div `
margin-top: 8px;
width: 100;
display: block;
position: relative;
background-color: #f9fafb;
img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
`;

const SocialCounts = styled.ul`
line-height: 1.3;
display: flex;
align-items: center;
overflow: auto;
margin: 0 16px;
padding: 8px 0;
flex-wrap: nowrap;
list-style: none;

li {
    margin-left: 5px;
    font-size: 12px;
}

button {
display: flex;
align-items: center;
img {
    width: 20px;
    height: 20px;
    margin: 3px;
}
    }
`;

const SocialAction = styled.div`
align-items: center;
width: 100%;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;
button {
    align-items: center;
    display: flex;
    justify-content:flex-start;
    padding: 8px;
    color: #0a66c2;
    @media (min-width: 768px) {
        span{
            display: inline-block;
            margin-left: 8px;
            
        }
    }
    img {
        width: 50px;
        height: 20px;
    }
}
`;

export default Main