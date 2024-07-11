<script lang="ts" setup>
import { api_getList, api_add, api_update, api_deleteById } from '~/api/user';
import type { User } from '~/types/user';
import { Delete, EditPen, Plus, Search } from '@element-plus/icons-vue';

const searchBtnLoading = ref(false);
const searchParams = reactive({
  id: '',
  userName: '',
});
const tableLoading = ref(true);
const tableData = ref<User[]>([]);

/** 点击查询按钮 */
const handleSearch = () => {
  searchBtnLoading.value = true;
  getTableData();
};

/** 获取表格数据 */
const getTableData = () => {
  tableLoading.value = true;
  api_getList(searchParams)
    .then((res) => {
      tableData.value = res.data || [];
    })
    .finally(() => {
      tableLoading.value = false;
      searchBtnLoading.value = false;
    });
};

const addFlag = ref(false);
const getOriginalForm = () => {
  return {
    userName: '',
  };
};
let dialogForm = reactive(getOriginalForm());
const dialogFormRules = reactive({});
const dialogVisible = ref(false);
const submitBtnLoading = ref(false);

/** 新增 */
const handleAdd = () => {
  addFlag.value = true;
  dialogForm = reactive(getOriginalForm());
  dialogVisible.value = true;
};

/** 修改 */
const handleUpdate = (row: User) => {
  addFlag.value = false;
  dialogForm = reactive({ ...row });
  dialogVisible.value = true;
};

const dialogFormSubmit = () => {
  submitBtnLoading.value = true;

  const submitApi = addFlag.value ? api_add : api_update;

  submitApi(dialogForm)
    .then(() => {
      ElMessage.success('操作成功!');
      dialogVisible.value = false;
      getTableData();
    })
    .finally(() => (submitBtnLoading.value = false));
};

/** 删除 */
const handleDelete = async (id: number) => {
  await ElMessageBox.confirm('您确定要删除该条数据吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  });
  await api_deleteById({ id });
  ElMessage.success('删除成功！');
  getTableData();
};

onMounted(() => {
  getTableData();
});
</script>

<template>
  <div>
    <el-form :model="searchParams" label-width="auto" inline>
      <el-form-item label="ID：">
        <el-input v-model="searchParams.id" placeholder="请输入" clearable style="width: 250px"></el-input>
      </el-form-item>

      <el-form-item label="用户名：">
        <el-input v-model="searchParams.userName" placeholder="请输入" clearable style="width: 250px"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button :loading="searchBtnLoading" :icon="Search" type="primary" @click="handleSearch" style="margin-left: 15px"
          >查询</el-button
        >

        <el-button type="success" :icon="Plus" class="my-[20px]" @click="handleAdd">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" v-loading="tableLoading" border>
      <el-table-column align="center" prop="id" label="ID" />
      <el-table-column align="center" prop="userName" label="用户名" />

      <el-table-column align="center" label="操作">
        <template #default="{ row }">
          <el-button type="primary" link :icon="EditPen" @click="handleUpdate(row)"> 修改 </el-button>
          <el-button type="primary" link :icon="Delete" @click="handleDelete(row.id)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出框  -->
    <el-dialog :title="addFlag ? '新增' : '修改'" v-model="dialogVisible" :close-on-click-modal="false" width="700px">
      <el-form :model="dialogForm" ref="dialogFormRef" :rules="dialogFormRules" status-icon label-width="auto">
        <el-form-item label="用户名：">
          <el-input v-model="dialogForm.userName" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button :loading="submitBtnLoading" type="primary" @click="dialogFormSubmit">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
