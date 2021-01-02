import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "a37d76b8-f757-4ade-b7a2-1a76f12fe03e"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    setProfileInfo(object){
        return instance.put('profile', object)
    },
    uploadAvatar(image){
        const formData= new FormData()
        formData.append("image", image)
        return instance.put('profile/photo', formData, {headers:{
            'Content-Type':'multipart/form-data'
        }})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}