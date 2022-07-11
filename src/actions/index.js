import { auth, firebaseApp, provider, storage } from '../firebase'
import { signInWithPopup } from 'firebase/auth';
import { SET_USER, SET_LOADING_STATUS } from './actionType';
import { async } from '@firebase/util';
import { logDOM } from '@testing-library/react';
import db from '../firebase';
import { getStorage, ref , uploadString, } from 'firebase/storage';


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const setLoading= (status) => ({
    type:SET_LOADING_STATUS,
    status:status,
})

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider).then((payload) => {
            dispatch(setUser(payload.user))
        })
            .catch((error) => alert(error.message))
    }
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function signOutAPI() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error.message)
        })
    }
}

export function postArticleAPI(payload) {
    return (dispatch) => {
        

        if (payload.image != '') {
            dispatch(setLoading(true))
            console.log('payload image', payload.image);
            const storageRef = ref(storage,`images/${payload.image.name}`)
            console.log('hi');
            // uploadString(storageRef, payload.name).then(
            //     (snapshot) => {
            //         console.log('index reached 2');
            //         const progress = (
            //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            //         console.log(`progress : ${progress}%`);
            //         if (snapshot.state==='running'){
            //             console.log(`progress: ${progress}%`);
            //         }
            //     },error => console.log(error.code),
            //     async() => {
            //         const downloadURL= await uploadString.snapshot.ref.getDowloadURL();
                    db.collection('articles').add({
                        actor: {
                            description:payload.user.email,
                            title:payload.user.displayName,
                            // date: payload.timestamp,
                            image:payload.user.photoURL,
                        },
                        
                        sharedImg: payload.user.photoURL,
                        likes: {
							count: 0,
							whoLiked: [],
						},
                        comments:0,
                        description:payload.description

                    })
                    dispatch(setLoading(false))
                }
                

        
        else if (payload.video){
            dispatch(setLoading(true));
            db.collection('articles').add({
                actor: {
                    description:payload.user.email,
                    title:payload.user.displayName,
                    // date: payload.timestamp,
                    image:payload.user.photoURL,
                },
                video:payload.video,
                sharedImg: '',
                likes: {
					count: 0,
					whoLiked: [],
				},
                comments:0,
                description:payload.description
            })
            dispatch(setLoading(false))
        }
    }
}

export function getArticlesAPI() {
    return (dispatch) => {
        let payload

        db.collection('articles')
    }
}
