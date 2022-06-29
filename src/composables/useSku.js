import { ref } from 'vue';
import { createGoodsSkusCard } from "~/api/goods.js";

// 当前商品Id
export const goodsId = ref(0);

// 规格选项列表
export const sku_card_list = ref([]);


// 初始化规格选项列表
export function initSkuCardList(d) {
    sku_card_list.value = d.goodsSkusCard.map(item => {
        item.text = item.name;
        item.loading = true;
        item.goodsSkusCardValue.map(v => {
            v.text = v.value || "属性值";
            return v;
        })
        return item
    })
}

// 初始化规格的值
export function initSkuCardItem(id) {
    // console.log(id);
    const item = sku_card_list.value.find(item => item.id === id)
    return {
        item
    }
}

// 添加规格选项
export const btnLoading = ref(false);
export function addSkuCardEvent() {
    btnLoading.value = true;
    createGoodsSkusCard({
        "goods_id": 26, //商品ID
        "name": "规格选项", //规格名称
        "order": 50, //排序
        "type": 0 //规格类型 0文字
    }).then(res => {
        sku_card_list.push({
            ...res,
            text: res.name,
            loading: false,
            goodsSkusCardValue: []
        })
    }).finally(() => {
        btnLoading.value = false;
    })
}