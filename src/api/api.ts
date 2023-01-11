import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '064b4935-7e4e-41f8-bd60-a4ee30f431f3',
  },
});

export const usersAPI = {
  async getUsers(currentPage: number, usersCount: number) {
    const result = await instance.get(
      'users?page=' + currentPage + '&count=' + usersCount
    );
    return result.data;
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

  async getUserStatus(id: string) {
    const response = await instance.get('profile/status/' + id);
    return response.data;
  },

  async setUserStatus(status: string) {
    const result = await instance.put('profile/status', { status: status });
    return result.data;
  },
};

export type AuthRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

export const authAPI = {
  async login(request: AuthRequest) {
    const result = await instance.post('auth/login', request);
    return result.data;
  },
  async getAuth() {
    const result = await instance.get('auth/me');
    return result.data;
  },
  async getCaptcha() {
    const result = await instance.get('security/get-captcha-url');
    return result.data;
  },
  async logout() {
    const result = await instance.post('auth/logout');
    return result.data;
  },
};

export const messageAPI = {
  async postMessage(id: string, message: string) {
    return (await instance.post(`dialogs/${id}/messages`, { body: message }))
      .data;
  },
  async getMessages(id: string, page: number, count: number) {
    return (
      await instance.get(`dialogs/${id}/messages?page=${page}&count=${count}`)
    ).data;
  },
  async getDialogs() {
    return (await instance.get('dialogs')).data;
  },
  async viewMessage(id: string) {
    return (await instance.get(`dialogs/messages/${id}/viewed`)).data;
  },
  async postMessageToSpam(id: string) {
    return (await instance.post(`dialogs/messages/${id}/spam`)).data;
  },
  async deleteMessage(id: string) {
    return (await instance.delete(`dialogs/messages/${id}`)).data;
  },
  async restoreMessage(id: string) {
    return (await instance.delete(`dialogs/messages/${id}/restore`)).data;
  },
  async getListNewMessages() {
    return (await instance.get(`dialogs/messages/new/count`)).data;
  },
};
