<template>
      <el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="时间"
			prop="time">
			</el-table-column>
      <el-table-column
      label="操作人"
      prop="user">
      </el-table-column>
      <el-table-column
      label="操作"
      prop="operation">
      </el-table-column>
       <el-table-column
      label="物品"
      prop="itemName">
       </el-table-column>
      <el-table-column
      label="数量"
      prop="quantity">
      </el-table-column>
      </el-table>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{time:'2016/05/10 14:20',user:'李明',operation:'申领',quantity:'50mg',itemName:'氯化钠'},{time:'2016/05/10 14:20',user:'李明',operation:'申领',quantity:'50mg',itemName:'氯化钠'}],
      };
    }
  };
</script>