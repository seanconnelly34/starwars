import { combineReducers } from "redux";
import {
  SET_AVATAR,
  SET_USERNAME,
  SET_FAVORITES,
  REMOVE_FAVE
} from "../actions";

function setAvatar(state = [], action) {
  switch (action.type) {
    case SET_AVATAR:
      return action.avatar;
    default:
      return state;
  }
}

function setUsername(state = [], action) {
  switch (action.type) {
    case SET_USERNAME:
      return action.username;
    default:
      return state;
  }
}

function setFavorites(state = [], action) {
  switch (action.type) {
    case SET_FAVORITES:
      state = [...state, action.fave];
      return state;
    case REMOVE_FAVE:
      return state.filter(obj => obj.name !== action.name);

    default:
      return state;
  }
}

const rootReducer = combineReducers({ setAvatar, setUsername, setFavorites });
export default rootReducer;
