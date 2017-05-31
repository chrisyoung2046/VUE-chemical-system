<template>
 <div>
 <el-form ref="form" :model="form" :rules="rules" label-width="130px">
     <el-form-item label="物品名称:" >
       <!--<el-input v-model="form.itemName" ></el-input>-->
       {{form.itemName}}
    </el-form-item>
    <el-form-item label="数量:" >
       <!--<el-input v-model="form.quantity" auto-complete="off"></el-input>-->
       {{form.quantity}}
    </el-form-item>
    <el-form-item label="单位:">
      {{form.unity}}
    </el-form-item>
    <el-form-item label="存放地:">
     {{form.cab_name}}
    </el-form-item>
    <el-form-item label="状态:">
      {{form.status}}
    </el-form-item>
    <el-form-item label="借用人:">
      {{form.borrowPerson}}
    </el-form-item>
    <el-form-item label="备注:">
      {{form.remark}}
    </el-form-item>
    <el-form-item>
    	  <el-button @click="goback()">返 回</el-button>
		    <el-button type="primary" @click="edit('form')" :loading="isLoading">提交</el-button>
	</el-form-item>
  </el-form>
	
 </div>
</template>

<script>
   import http from '../../assets/js/http'
  import fomrMixin from '../../assets/js/form_com'

  export default {
  
      data() {
      return {
        form: {
          itemName:'',
          quantity:'',
          unity:'',
          cab_name:'',
          status:'',
          remark:'',
          id:'',
          borrowPerson:''
        }
       }
      },
      methods: {
      edit(form) {
        this.form.rules = this.selectedNodes.toString()
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPut('admin/items/:id', this.form.id, this.form).then((res) => {
              this.handelResponse(res, (data) => {
                _g.toastMsg('success', '编辑成功')
                setTimeout(() => {
                  this.goback()
                }, 1500)
              }, () => {
                this.isLoading = !this.isLoading
              })
            })
          }
        })
       },
        async getItemInfo() {
        this.form.id = this.$route.params.id
        alert(this.form.id)
        this.apiGet('admin/item/test',this.form.id).then((res) => {
          this.handelResponse(res, (data) => {
            console.log(res)
            this.form.itemName = data.data.itemName
            this.form.quantity = data.data.quantity
            this.form.unity = data.data.unity
            this.form.cab_name = data.data.cab_name
            this.form.status = data.data.status
            this.form.borrowPerson = data.data.borrowPerson
            this.form.remark = data.data.remark        
          })
        })
      },
     },
     mixins: [http, fomrMixin],
    created() {
      this.getItemInfo()
      //this.getGroups()
    },
  }
</script>