<template>
  <el-dialog title="商品选择" v-model="dialogVisible" width="80%">
    内容
    <template #footer>
      <span>
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { getGoodsList } from "~/api/goods.js";

const dialogVisible = ref(false);

function close() {
  dialogVisible.value = false;
}

const open = () => {
  dialogVisible.value = true;
};

const submit = () => {};

defineExpose({
  open,
});
</script>

<style>
</style>