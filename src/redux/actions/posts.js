export const savePostId = (id) => ({
  type: 'SAVE_POST_ID',
  payload: id,
});

export const setPosts = (posts) => ({
  type: 'SET_POST',
  payload: posts,
});
