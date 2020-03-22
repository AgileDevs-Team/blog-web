import http from 'http';

export const fecthAllPosts = http.get(`/posts`)