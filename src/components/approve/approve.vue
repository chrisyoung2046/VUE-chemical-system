<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未审批" name="first">
      <el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="物品名称"
			prop="itemName">
			</el-table-column>
      <el-table-column
      label="数量"
      prop="quantity">
      </el-table-column>
      <el-table-column
      label="单位"
      prop="unity">
      </el-table-column>
       <el-table-column
      label="申请人"
      prop="apvPerson">
      </el-table-column>
       <el-table-column
      label="原因"
      prop="reason">
      </el-table-column>
       <el-table-column
			label="操作"
			width="200">
        <template scope="scope">
  				<div>
  					<span>
  						<router-link :to="{ name: 'itemEdit', params: { id: scope.row.id }}" class="btn-link edit-btn">
  						同意
  						</router-link>
  					</span>
  					<span>
  						<el-button
  						size="small"
  						type="danger"
  						@click="confirmDelete(scope.row)">
  						拒绝
  						</el-button>
  					</span>
  				</div>
        </template>
			</el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="已审批" name="second"><el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="物品名称"
			prop="itemName">
			</el-table-column>
      <el-table-column
      label="数量"
      prop="quantity">
      </el-table-column>
      <el-table-column
      label="单位"
      prop="unity">
      </el-table-column>
       <el-table-column
      label="申请人"
      prop="apvPerson">
      </el-table-column>
       <el-table-column
      label="原因"
      prop="reason">
      </el-table-column>
      <el-table-column
      label="审批结果"
      prop="result">
      </el-table-column>
      </el-table></el-tab-pane>
    
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{itemName:'氯化钠',quantity:'200',unity:'mg',apvPerson:'小明',reason:'1',result:'已同意'},{itemName:'氯化钠',quantity:'200',unity:'mg',apvPerson:'小明',reason:'1',result:'已同意'}],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>