import styled from 'styled-components'
import { isStyledComponent } from 'styled-components';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { db } from 'firebase/firestore';
import { postArticleAPI } from '../actions';
import { initializeApp } from 'firebase/app';
import { firebaseApp } from '../firebase';
import { getFirestore } from 'firebase/firestore';


const PostModal = (props) => {
    const [editorText, setEditorText] = useState('')
    const [shareImage, setShareImage] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [assetArea, setAssetArea] = useState('')


    const reset = (e) => {
        setEditorText('')
        setShareImage('')
        setVideoLink('')
        setAssetArea('')
        props.handleClick(e)
    }
    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            alert(`Not a valid Image, the file is a ${typeof image}`)
            return
        }
        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage('')
        setVideoLink('')
        setAssetArea(area)
    }
const postArticle= (e) => {
    console.log("hi");
    e.preventDefault();
    if (e.target !== e.currentTarget){
        console.log("hi");
        return
    }
    console.log("hi");
    const payload = {
        image:shareImage,
        video: videoLink,
        user:props.user,
        description:editorText,
        
    }
    console.log("props.user",props.user);
    console.log("sharedimg",shareImage);
    console.log("video",videoLink);
    console.log("desc",editorText);

    props.postArticle(payload)
    console.log("hi");
    reset(e)
}



    
    return (
        <>
            {props.showModal === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a Post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src='/images/close.svg' />
                            </button>
                        </Header>
                        <SharedContent>

                            <UserInfo>
                                {props.user.photoURL ? (<img src={props.user.photoURL} />) : (<img src='/images/user.svg' />)}

                                <span>{props.user.displayName}</span>
                            </UserInfo>

                            <Editor>
                                <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)}
                                    placeholder='What do you want to talk about?'
                                    autoFocus={true}
                                />

                                {assetArea === 'image' ? (
                                    <UploadImage>
                                        <input type='file'
                                            accept='image/gif, image/jpeg, image/png, video/mp4'
                                            name='image'
                                            id='file'
                                            style={{ display: 'none' }}
                                            onChange={handleChange} />
                                        <p><label htmlFor='file'>Select an image to share</label>
                                        </p>
                                        {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                                    </UploadImage>)
                                    :
                                    (

                                        <div>
                                            <input
                                                type='text'
                                                placeholder='please enter a video link'
                                                value={videoLink}
                                                onChange={(e) => setVideoLink(e.target.value)} /> or
                                            <UploadImage>
                                                <input type='file'
                                                    accept='video/mp4'
                                                    name='image'
                                                    id='file'

                                                    onChange={handleChange} />
                                            </UploadImage>
                                            {videoLink && (
                                                <ReactPlayer width={'100%'} url={videoLink} />
                                            )}
                                        </div>)
                                }

                            </Editor>

                        </SharedContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea('image')}>
                                    <img src='/images/image-solid.svg' />

                                </AssetButton >
                                <AssetButton onClick={() => switchAssetArea('media')}><img src='/images/video-solid.svg' ></img></AssetButton>
                            </AttachAssets>

                            <ShareComment>
                                <AssetButton>
                                    <img src='/images/comment-solid.svg' />
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText ? true : false} onClick={(event) => postArticle(event)}>
                                Post
                            </PostButton>
                        </ShareCreation>
                    </Content>
                </Container>}
        </>

    )
}

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 10000;
background-color: rgba(0,0,0,0.7);
animation: fadeIn 0.4s;
`;
const Content = styled.div`
width: 100%;
max-width: 552px;
background-color: white;
max-height: 90%;
overflow: initial;
border-radius: 5px;
position:relative ;
display: flex;
flex-direction: column;
top: 32px;
margin: 0 auto;

`
    ;

const Header = styled.div`
display: block;
padding: 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0,0,6);
font-weight: 400;
display: flex;
justify-content: space-between;
align-items: center;
button {
    height: fit-content;
    width: fit-content;
    background-color: transparent;
    border: none;
    min-width:auto;
    color: rgba(0,0,0,0.15);
    svg,img {
        width: 15px;
        pointer-events: none;
    }
}
`;

const SharedContent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px;
`;

const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
svg,img {
    width:48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
display:flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
align-content: center;
`;

const AssetButton = styled.button`
display: flex;
align-items: center;
height: 20px;
min-width: auto;
color: rgba(0,0,0,0.5);
justify-content: space-between;

img {
    height: 20px;
    margin: 5px; 
}
`;

const AttachAssets = styled.div`
align-items: center;
display: flex;
padding-right: 8px;
width: fit-content;
${AssetButton}{
    width: 40px;
    height: fit-content;
    background-color: aliceblue;
    border: 1px solid rgba(0,0,0,0.15);
    align-items: center;
}
`;


const ShareComment = styled.div`
padding-left: 8px;
margin-right: 10px;
border-left: 1px solid rgba(0,0,0,0.15);
height: fit-content;
${AssetButton}{
    width: fit-content;
    border-radius: 20px;
    height: fit-content;
    background-color: aliceblue;
    border: 1px solid rgba(0,0,0,0.15);
    align-items: center;
}
`;

const PostButton = styled.button`

border-radius: 20px;
padding-left: 20px;
font-size: 14px;
padding-right: 20px;
background: ${(props) => (props.disabled ? "rgba(0,0,0,0.5)" : '#006ccd')} ;
width: fit-content;
height: 40px;
border: none;
color: white;
&:hover {
    background:${(props) => (props.disabled ? "rgba(0,0,0,0.5)" : '#064479')} ;
}
`
    ;

const Editor = styled.div`
padding: 12px 24px;
textarea{
    width: 100%;
    min-height: 150px;
    resize: none;
    font-size: 16px;
}

input {
    width: 100%;
    height: 35px;
    font-size:16px;
    margin-bottom: 20px;
}
`;

const UploadImage = styled.div`
margin-top: 10px;
text-align: center;
img {
    width: 100%;
}
label{
    color:#006ccd;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload))})


export default connect(mapStateToProps, mapDispatchToProps)(PostModal); 