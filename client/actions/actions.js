import { compose } from 'redux';
import * as types from '../constants/actionTypes';
const axios = require('axios')


export const storeAppIdCreator = (appid) =>({
    type: types.Store_appID,
    payload: appid
})

export const storeImgUrlCreator = (url) =>({
    type: types.Store_imgURL,
    payload: url
})

export const fetchGameDetails = (appid) =>{
    const request = axios.get(`/api/gameid/${appid}`)
    return dispatch => {
        request
        .then((data)=>{
            dispatch({type: types.Store_Data, payload: data})
        })
    }
}