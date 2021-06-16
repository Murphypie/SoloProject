import fetch from 'node-fetch';
import * as types from '../constants/actionTypes';

const initialState = {
  appid: 10,
  imgurl: [],
};


const steamReducer = (state = initialState, action)=>{
  let newid;
  let tempdata;
  let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' 
  switch(action.type){

    case types.Store_appID:
      newid = action.payload;
      return{
        ...state,
        appid: newid,
      }
    
    case types.Store_imgURL:
      tempdata = action.payload;
      return{
        ...state,
        imgurl: tempdata
      }

    default: {
      return state;
    }
  }
};

export default steamReducer;