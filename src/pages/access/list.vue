<template>
  <el-card shadow="never">
    <ListHerder @refresh="getData" />
    <el-tree
      :data="tableData"
      :props="{ label: 'name', children: 'child' }"
      v-loading="loading"
      node-key="id"
      :default-expanded-keys="defaultExpandedKeys"
    ></el-tree>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import ListHerder from "~/components/ListHerder.vue";
import { getRuleList } from "~/api/rule.js";

import { useInitTable, useInitForm } from "~/composables/useCommon.js";

const defaultExpandedKeys = ref([]);

const { loading, tableData, getData } = useInitTable({
  getList: getRuleList,
  onGetListSuccess: (res) => {
    tableData.value = res.list;
    defaultExpandedKeys.value = res.list.map((o) => o.id);
  },
});
</script>