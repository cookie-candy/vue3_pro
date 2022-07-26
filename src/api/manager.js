import axios from '~/axios';
import { queryParams } from "~/composables/util";

export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

export function getinfo() {
    return axios.post("/admin/getinfo")
}

export function logout() {
    return axios.post("/admin/logout")
}

export function updatepassword(data) {
    return axios.post("/admin/updatepassword", data)
}

export function getManagerList(page, query = {}) {
    let r = queryParams(query);
    return axios.get(`/admin/manager/${page}${r}`)
}

/**
 * 修改管理员状态
 * @param {Number} id 管理员ID
 * @param {Number} status 是否启用：0禁用1启用
 * @returns 
 */
export function updateManagerStatus(id, status) {
    return axios.post(`/admin/manager/${id}/update_status`, {
        status
    })
}

export function createManager(data) {
    return axios.post(`/admin/manager`, data)
}

export function deleteManager(id) {
    return axios.post(`/admin/manager/${id}/delete`)
}

export function updateManager(id, data) {
    return axios.post(`/admin/manager/${id}`, data)
}
