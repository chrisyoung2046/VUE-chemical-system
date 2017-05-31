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
			label="用户名"
			prop="userName">
			</el-table-column>
      <el-table-column
      label="操作">
     <template scope="scope">
  				<div>
            <span>
  						<router-link :to="{ name: 'itemApprove', params: { id: scope.row.id }}" class="btn-link edit-btn">
  						设为管理员
  						</router-link>
  					</span>
  				</div>
        </template>
      </el-table-column>
      </el-table>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{userName:'李明'},{userName:'王明'}],
      };
    }
  };
</script>