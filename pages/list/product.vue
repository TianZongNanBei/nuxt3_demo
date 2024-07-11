<script lang="ts" setup>
import { api_getList } from '~/api/prodcut';
import type { Product } from '~/types/product';

const tableLoading = ref(true);
const tableData = ref<Product[]>([]);

const getData = () => {
  tableLoading.value = true;
  api_getList()
    .then(({ result }) => {
      tableData.value = result;
    })
    .finally(() => {
      tableLoading.value = false;
    });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <h1>商品页</h1>

  <el-table :data="tableData" v-loading="tableLoading" border>
    <el-table-column align="center" prop="id" label="ID" />
    <el-table-column align="center" prop="alt" label="推荐说明" />
    <el-table-column align="center" prop="pictures" label="图片" />
    <el-table-column align="center" prop="target" label="跳转地址" />
    <el-table-column align="center" prop="title" label="推荐标题" />
    <el-table-column align="center" prop="type" label="推荐类型" />
  </el-table>
</template>
