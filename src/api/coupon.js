import axios from '~/axios';

export function getCouponList(page) {
    return axios.get(`/admin/coupon/${page}`)
}

export function createCoupon(data) {
    return axios.post("/admin/coupon", data)
}

export function updateCoupon(id, data) {
    return axios.post("/admin/coupon/" + id, data)
}

export function deleteCoupon(id) {
    return axios.post(`/admin/coupon/${id}/delete`)
}

export function updateCouponStatus(id) {
    return axios.post(`/admin/coupon/${id}/update_status`, {
        // 接口文档只有一个参数直接写死
        status: 0
    })
}