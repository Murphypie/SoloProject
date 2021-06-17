import fetch from 'node-fetch';
import * as types from '../constants/actionTypes';

const initialState = {
  appid: 10,
  imgurl: [],
  data: {},
};


const steamReducer = (state = initialState, action)=>{
  let newid;
  let tempurl;
  let tempdata;

  //let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' 
  switch(action.type){

    case types.Store_appID:
      newid = action.payload;
      return{
        ...state,
        appid: newid,
      }
    
    case types.Store_imgURL:
      tempurl = action.payload;
      return{
        ...state,
        imgurl: tempurl
      }

    case types.Store_Data:
      tempdata = action.payload;
      return{
        ...state,
        data: tempdata
      }

    default: {
      return state;
    }
  }
};

export default steamReducer;