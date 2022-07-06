<template>
  <el-form-item label="规格设置">
    <table class="border">
      <thead>
        <tr>
          <th v-for="(th, thi) in tableThs" :key="thi">
            {{ th.name }}
          </th>
        </tr>
        <tr>
          <th v-for="(th, thi) in tableThs" :key="thi"></th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody> -->
    </table>
  </el-form-item>
</template>

<script setup>
import { initSkuTable } from "~/composables/useSku.js";

const { skuLabels, tableThs, sku_list } = initSkuTable();
</script>

<style scoped>
</style>>