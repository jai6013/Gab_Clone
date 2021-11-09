import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  LIKE_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isFailed: false,
  posts: [],
};

export const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        posts: [...payload],
      };
    }

    case GET_POSTS_FAILURE: {
      return {
        ...state,
        isFailed: true,
        isLoading: false,
      };
    }
    case LIKE_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
