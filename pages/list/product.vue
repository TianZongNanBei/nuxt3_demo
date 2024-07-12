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
  <el-table :data="tableData" v-loading="tableLoading" border>
    <el-table-column align="center" prop="id" label="ID" width="100" />
    <el-table-column align="center" prop="alt" label="推荐说明" width="300" />

    <el-table-column align="center" prop="pictures" label="图片">
      <template #default="{ row }">
        <div class="flex gap-3">
          <el-image v-for="item in row.pictures" :key="item" :src="item"></el-image>
        </div>
      </template>
    </el-table-column>

    <el-table-column align="center" prop="target" label="跳转地址" width="200" />
    <el-table-column align="center" prop="title" label="推荐标题" width="200" />
    <el-table-column align="center" prop="type" label="推荐类型" width="100" />
  </el-table>
</template>
