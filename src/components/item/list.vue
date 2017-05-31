<template>
	<div>
    <el-input icon="search" style="width:200px;margin-top: 24px" type="text" placeholder="请输入物品名称" v-model="search"/></el-input>
		 <!--<el-button type="primary" style="width:100%;"  @click.native.prevent="searchname('form')">搜索</el-button>-->
    <div class="m-b-20">
			<router-link class="btn-link-large add-btn" to="/home/item/add">
				<i class="el-icon-plus"></i>&nbsp;&nbsp;添加物品
			</router-link>
		</div>
		<el-table
		:data="itemData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="物品名"
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
      label="存放地"
      prop="cab_name">
      </el-table-column>
      
			<el-table-column
			label="状态"
      prop="status"
			width="100">
        <template scope="scope">
          <div class="btn-link edit-btn">
            {{ scope.row.status | status }}
          </div>
        </template>
			</el-table-column>
			<el-table-column
			label="操作"
			width="200">
        <template scope="scope">
  				<div>
            <span v-show='!isAdmin'>
  						<router-link :to="{ name: 'itemApprove', params: { id: scope.row.id }}" class="btn-link apv-btn">
  						申领
  						</router-link>
  					</span>
  					<span>
  						<router-link :to="{ name: 'itemDetail', params: { id: scope.row.id }}" class="btn-link edit-btn">
  						详情
  						</router-link>
  					</span>
            	<span v-show='isAdmin'>
  						<router-link :to="{ name: 'itemEdit', params: { id: scope.row.id }}" class="btn-link edit-btn">
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
        search:'',
        isAdmin:false,
        //tableData: [],
        //tableData: [{itemName:'氯化钠',quantity:'200',unity:'mg',cab_name:'中心实验室',status:'小李'},{itemName:'氯化钠',quantity:'200',unity:'mg',cab_name:'中心实验室',status:'0'}],
        multipleSelection: []
      }
    },
    methods: {
      selectItem(val) {
        this.multipleSelection = val
      },
      confirmDelete(item) {
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
      },
    },
     /*searchname(form){
        if(this.search){
              alert(this.search)
              var that=this
             this.tableData=this.tableData.filter(function (form) {
                        return form.itemName.toLowerCase().indexOf(that.search.toLowerCase()) !== -1;
                      })
            console.log(this.tableData)
            }
      }
    },*/
    created() {
      let userInfo=Lockr.get('userInfo')
       if(userInfo.id===0){
         this.isAdmin=true
        }
         else{
         this.isAdmin=false
         }
         _g.closeGlobalLoading()
        this.apiGet('admin/items/list').then((res) => {
            this.tableData=res.data.data.list
            this.$store.state.list=this.tableData
        }).catch(()=>{

        })
      },
      computed:{
                itemData() {
                  if(Boolean(this.search)===false){
                  console.log(this.$store.state.list)
                  return this.$store.state.list
                  }
                   else{ var that=this;
                      return this.$store.state.list.filter(function (form) {
                        return form.itemName.toLowerCase().indexOf(that.search.toLowerCase()) !== -1;
                      })
                  }
                }
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
<style>
 .m-b-20{
   margin-right: 80px;
 }
 </style>