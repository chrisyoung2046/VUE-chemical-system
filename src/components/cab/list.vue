<template>
	<div>
		<div class="m-b-20">
			<router-link class="btn-link-large add-btn" to="/home/cab/add">
				<i class="el-icon-plus"></i>&nbsp;&nbsp;添加柜子
			</router-link>
		</div>
		<el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="柜子名称"
			prop="cab_name">
			</el-table-column>
      <el-table-column
      label="审批等级"
      prop="permission">
      </el-table-column>
			<el-table-column
			label="状态"
      prop="status"
			width="100">
			</el-table-column>
			<el-table-column
			label="操作"
			width="200">
        <template scope="scope">
  				<div>
  					<span>
  						<router-link :to="{ name: 'cabEdit', params: { id: scope.row.id }}" class="btn-link edit-btn">
  						编辑
  						</router-link>
  					</span>
  					<span>
  						<el-button
  						size="small"
  						type="danger"
  						@click="confirmDelete(scope.row)">
  						删除
  						</el-button>
  					</span>
  				</div>
        </template>
			</el-table-column>
		</el-table>
	
	</div>
</template>

<script>
  import http from '../../assets/js/http'
  export default {
    data() {
      return {
        //tableData: [],
        tableData: [{cab_name:'中心安全柜',permission:'一级审批',status:'10/20'},{cab_name:'中心安全柜',quantity:'200',unity:'mg',permission:'二级审批',status:'18/20'}],
        //tableData:[],
        multipleSelection: []
      }
    },
    methods: {
      selectItem(val) {
        this.multipleSelection = val
      },
      /*confirmDelete(item) {
        this.$confirm('确认删除该用户组?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _g.openGlobalLoading()
          this.apiDelete('admin/groups/', item.id).then((res) => {
            _g.closeGlobalLoading()
            this.handelResponse(res, (data) => {
              _g.toastMsg('success', '删除成功')
              setTimeout(() => {
                _g.shallowRefresh(this.$route.name)
              }, 1500)
            })
          })
        }).catch(() => {
          // handle error
        })
      },*/
   
    },
    created() {
        this.loading = true
         _g.closeGlobalLoading()
        this.apiGet('admin/items/list').then((res) => {
            console.log(res.data.list)
            this.tableData=res.data.list
             _g.closeGlobalLoading()
        }).catch(()=>{

        })
      },
       /*axios.get('home/items/list').then(function(res){
              //_g.closeGlobalLoading()
              alert('1')
               //let test5=[{itemName:'氯化钠',quantity:'200',itemName:'氯化钠',unity:'mg',position:'中心实验室',status:'小王'},{itemName:'氯化钠',quantity:'200',unity:'mg',position:'中心实验室',status:'0'}]
              //alert(this)
               this.tableData=res.data.itemData
               alert('2')
       }.bind(this)).catch(() => {
          alert('4')
          // handle error
       })  
    },*/
   
    mixins: [http]
  }
</script>