<template>
 <div>
 <el-form ref="form" :model="form" :rules="rules" label-width="130px">
    <el-form-item label="物品名称" prop='name'>
       <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="数量" prop='quanlity'>
       <el-input v-model="form.quanlity" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="单位" prop='unity'>
      <el-select v-model="form.unity" placeholder="请选择单位">
        <el-option label="mg" value="shanghai"></el-option>
        <el-option label="g" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="存放地" prop='cab_name'>
       <el-input v-model="form.cab_name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="备注" >
       <el-input v-model="form.remark" auto-complete="off"></el-input>
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
        isloading:false,
        form: {
          name: '',
          quanlity:'',
          unity:'',
          cab_name:'',
          remark:'',
        },
          rules: {
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
          ],
          quanlity: [
            { required: true, message: '请输入数量', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
           unity : [
            { required: true, message: '请选择单位', trigger: 'blur' },
          ],
           cab_name: [
            { required: true, message: '请输入柜子名称', trigger: 'blur' },
          ],
       }
      }
      },
       methods: {
         add(form) {
           this.$refs[form].validate((valid) => {
            if (valid) {
              alert('1')
              this.isLoading = !this.isLoading
              this.apiPost('admin/items', this.form).then((res) => {
                console.log(res) 
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
        }
       },
     mixins: [http, fomrMixin],
     created() {
        this.loading = true
         _g.closeGlobalLoading()
     },
  }
</script>