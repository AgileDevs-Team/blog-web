import apiConfig from './api-config';

export const fecthAllPosts = apiConfig.get(`/posts`)

export const findPostById = id => apiConfig.get(`/posts/${id}`)

export const updatePost = (post, id) => apiConfig.put(`/posts/${id}`, post)

export const deletePost = id => apiConfig.delete(`/posts/${id}`)