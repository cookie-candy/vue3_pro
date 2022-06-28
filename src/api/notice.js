import axios from '~/axios'

export function getNoticeList(page) {
    return axios.get(`/admin/notice/${page}`)
}

/**
 * 新增公告
 * @param {title,content} data 
 * @returns 
 */
export function createNotice(data) {
    return axios.post('/admin/notice', data)
}

/**
 * 更新公告
 * @param {number} id 
 * @param {title,content} data 
 * @returns 
 */
export function updateNotice(id, data) {
    return axios.post("/admin/notice/" + id, data)
}

/**
 * 删除公告 
 * @param {number} id 公告id
 * @returns 
 */
export function deleteNotice(id) {
    return axios.post(`/admin/notice/${id}/delete`)
}