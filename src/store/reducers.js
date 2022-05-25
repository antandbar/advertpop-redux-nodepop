import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT_SUCCESS,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    UI_RESET_ERROR,
    ADVERT_LOADED_SUCCESS,
    ADVERT_LOADED_REQUEST,
    ADVERT_LOADED_FAILURE,
    ADVERT_CREATED_REQUEST,
    ADVERT_CREATED_SUCCESS,
    ADVERT_CREATED_FAILURE,
    TAGS_LOADED_REQUEST,
    TAGS_LOADED_SUCCESS,
    TAGS_LOADED_FAILURE,
    ADVERT_DELETED_REQUEST,
    ADVERT_DELETED_SUCCESS,
    ADVERT_DELETED_FAILURE
  } from './types';
  
  export const defaultState = {
    auth: false,
    adverts: {
      loaded: false,
      data: [],
    },
    ui: {
      isLoading: false,
      error: null,
    },
    tags: {
      loaded: false,
      data: [],
    }
  };
  
  export const auth = (state = defaultState.auth, action) => {
    switch (action.type) {
      case AUTH_LOGIN_SUCCESS:
        return true;
      case AUTH_LOGOUT_SUCCESS:
        return false;
      default:
        return state;
    }
  };
  
  export const adverts = (state = defaultState.adverts, action) => {
    switch (action.type) {
      case ADVERTS_LOADED_SUCCESS:
        return { loaded: true, data: action.payload };
      case ADVERT_LOADED_SUCCESS:
        return { ...state, data: [...state.data, action.payload] };
        case ADVERT_CREATED_SUCCESS:
          return { ...state, data: [...state.data, action.payload] };
      case ADVERT_DELETED_SUCCESS: 
        return {...state, data: state.data.filter(advert => advert.id !== action.payload)}; 
      default:
        return state;
    }
  };

  export const tags = (state = defaultState.tags, action) => {
    switch (action.type) {
      case TAGS_LOADED_SUCCESS:
        return { loaded: true, data: action.payload };
      default:
        return state;
    }
  };
  
  export const ui = (state = defaultState.ui, action) => {
    switch (action.type) {
      case AUTH_LOGIN_REQUEST:
      case ADVERTS_LOADED_REQUEST:
      case TAGS_LOADED_REQUEST:
      case ADVERT_LOADED_REQUEST:
      case ADVERT_CREATED_REQUEST:
      case ADVERT_DELETED_REQUEST:
        return { ...state, isLoading: true, error: null };
      case AUTH_LOGIN_SUCCESS:
      case ADVERTS_LOADED_SUCCESS:
      case TAGS_LOADED_SUCCESS:
      case ADVERT_LOADED_SUCCESS:
      case ADVERT_CREATED_SUCCESS:
      case ADVERT_DELETED_SUCCESS:
        return { ...state, isLoading: false };
      case AUTH_LOGIN_FAILURE:
      case ADVERTS_LOADED_FAILURE:
      case TAGS_LOADED_FAILURE:
      case ADVERT_LOADED_FAILURE:
      case ADVERT_CREATED_FAILURE:
      case ADVERT_DELETED_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      case UI_RESET_ERROR:
        return { ...state, error: null };
      default:
        return state;
    }
  };