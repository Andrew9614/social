import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '03633ecb-ea01-4458-b5ff-6e8777f70567',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, usersCount: number) {
    return instance
      .get('users?page=' + currentPage + '&count=' + usersCount)
      .then((result) => result.data);
  },
};

export const followAPI = {
  follow(id: number) {
    return instance.post('follow/' + id);
  },
  unfollow(id: number) {
    return instance.delete('follow/' + id);
  },
};

export const profileAPI = {
  getUser(id: string) {
    return instance.get('profile/' + id);
  },
};
