import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '64704a98-3a43-49ed-82bb-19077dfef292',
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

  getUserStatus(id: string) {
    return instance
      .get('profile/status/' + id)
      .then((response) => response.data);
  },

  setUserStatus(status: string) {
    return instance
      .put('profile/status', { status: status })
      .then((result) => result.data);
  },
};

export type AuthRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

export const authAPI = {
  postUser(request: AuthRequest) {
    return instance.post('auth/login', request).then((result) => result.data);
  },
  getAuth() {
    return instance.get('auth/me').then((result) => result.data);
  },
  getCaptcha() {
    return instance
      .get('security/get-captcha-url')
      .then((result) => result.data);
  },
  deleteUser() {
    return instance.delete('auth/logout').then((result) => result.data);
  },
};
