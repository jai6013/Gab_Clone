import axios from "axios";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  LIKE_SUCCESS,
} from "./actionTypes";

export const addGetPostsRequest = () => {
  return { type: GET_POSTS_REQUEST };
};

export const addGetPostsSuccess = (data) => {
  return { type: GET_POSTS_SUCCESS, payload: data };
};

export const addGetPostsFailure = () => {
  return {
    type: GET_POSTS_FAILURE,
  };
};
export const addLikeSuccess = (id) => {
  return {
    type: LIKE_SUCCESS,
    payload: id,
  };
};
export const likeapost = (payload) => (dispatch) => {
  const { id, token } = payload;
  axios
    .patch(
      `https://secure-ravine-45527.herokuapp.com/posts/${id}/like`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      const getAction = getFeedPosts(token);
      dispatch(getAction);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * @param {String} token
 * @returns function
 */
export const getFeedPosts = (token) => (dispatch) => {
  const getPostAct = addGetPostsRequest();
  dispatch(getPostAct);
  axios
    .get("http://localhost:2222/posts/user/feed", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      const successAction = addGetPostsSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failAct = addGetPostsFailure(err);
      dispatch(failAct);
    });
};

export const getHotPosts = () => (dispatch) => {
  const getPostAct = addGetPostsRequest();
  dispatch(getPostAct);
  axios
    .get("http://localhost:2222/posts/top20")
    .then((res) => {
      const successAction = addGetPostsSuccess(res.data.posts);
      dispatch(successAction);
    })
    .catch((err) => {
      const failAct = addGetPostsFailure(err);
      dispatch(failAct);
    });
};

export const createAPost = (payload) => (dispatch) => {
  const { token, post } = payload;
  axios
    .post("http://localhost:2222/posts", post, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTimeline = (payload) => (dispatch) => {
  axios
    .get("http://localhost:2222/posts/user/timeline")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
