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
    <el-form-item label="理由">
      <el-input v-model="form.reason" ></el-input>
    </el-form-item>
    <el-form-item>
    	  <el-button @click="goback()">返 回</el-button>
        <el-button type="primary" @click="add('form')" :loading="isLoading">提 交</el-button>
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
          status:'',
          cab_name:'',
          borrowPerson:'',
          remark:'',
        }
       }
      },
       methods: {
      add(form) {
        this.form.rules = this.selectedNodes.toString()
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPost('admin/items', this.form).then((res) => {
              this.handelResponse(res, (data) => {
                _g.toastMsg('success', '添加成功')
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

    /* rules: {
          old_pwd: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
          new_pwd: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      }
    },*/
     mixins: [http, fomrMixin],
          created() {
        this.loading = true
         _g.closeGlobalLoading()
     
      },
  }
</script>