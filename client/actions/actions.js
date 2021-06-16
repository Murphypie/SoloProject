import * as types from '../constants/actionTypes';



export const storeAppIdCreator = (appid) =>({
    type: types.Store_appID,
    payload: appid
})

export const storeImgUrlCreator = (url) =>({
    type: types.Store_imgURL,
    payload: url
})
