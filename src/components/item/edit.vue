<template>
 <div>
 <el-form ref="form" :model="form" :rules="rules" label-width="130px">
     <el-form-item label="物品名称" >
       <el-input v-model="form.itemName" ></el-input>
    </el-form-item>
    <el-form-item label="数量" >
       <el-input v-model="form.quanlity" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="单位">
      <el-input v-model="form.unity" ></el-input>
    </el-form-item>
    <el-form-item label="存放地">
      <el-input v-model="form.cab_name" ></el-input>
    </el-form-item>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.remark" ></el-input>
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
          itemName: '',
          quanlity:'',
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
       },
        async getGroupInfo() {
        this.form.id = this.$route.params.id
        this.apiGet('admin/items/:id/edit' + this.form.id).then((res) => {
          this.handelResponse(res, (data) => {
            this.form.title = data.data.itemName
            this.form.quantity = data.data.quantity
            this.form.unity = data.data.unity
            this.form.cab_name = data.data.cab_name
            this.form.remark = data.data.remark        
          })
        })
      },
    rules: {
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
          ],
          quanlity: [
            { required: true, message: '请输入数量', trigger: 'blur' },
            { min: 2, max:4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
           unity : [
            { required: true, message: '请选择单位', trigger: 'blur' },
          ],
           cab_name: [
            { required: true, message: '请输入柜子名称', trigger: 'blur' },
          ],
       },
     mixins: [http, fomrMixin],
    created() {
      this.getItemInfo()
      this.getGroups()
    },
  }
</script>