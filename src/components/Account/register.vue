<template>
  <div>
    <el-form :model="form" :rules="rules2" ref="form" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
      <h3 class="title">化学品流向管理系统</h3>
      <el-form-item prop="aliasName">
        <el-input type="text" v-model="form.aliasName" auto-complete="off" placeholder="姓名(必填)"></el-input>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input type="text" v-model="form.userName" auto-complete="off" placeholder="账号(必填)"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码（必填）"></el-input>
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input type="password" v-model="form.rePassword" auto-complete="off" placeholder="再次密码（必填）"></el-input>
      </el-form-item>
      <el-form-item prop="phoneNum">
        <el-input type="number" v-model="form.phoneNum" auto-complete="off" placeholder="电话号码（可选）"></el-input>
      </el-form-item>
      
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" v-loading="loading" @click.native.prevent="handleSubmit2('form')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import http from '../../assets/js/http'

  export default {
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (!value) {
           callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkNum=(rule,value,callback)=>{
       if(value){
         var re = /^(\s*|1(85|88|59|53)\d{8})$/
         let test8= re.test(value)
            if(!test8){
              callback(new Error('号码格式不正确'));
            }else{
              callback();
            }
       }else{
         callback();
       }
      };
      return {
        loading: false,
        form: {
          aliasName:'',
          userName: '',
          password: '',
          rePassword:'',
          phoneNum:''
        },
        rules2: {
           aliasName: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
           rePassword: [
            { validator: validatePass2, trigger: 'blur' , }
          ],
           phoneNum: [
            { validator: checkNum, trigger: 'blur' }
          ],
         
        },
      }
    },
    methods: {
      handleSubmit2(form) {
       if (this.loading) return
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = !this.loading
            let data = {}
            data.aliasName = this.form.aliasName          
            data.userName = this.form.userName
            data.password = this.form.password
            data.rePassword=this.form.rePassword
            data.phoneNum=this.form.phoneNum
            
            this.apiPost('admin/base/register', data).then((res) => {
              /*if (res.code != 200) {
                this.loading = !this.loading
                this.handleError(res)
                alert('1')
              } else {*/
             console.log(res);
             Lockr.set('userInfo', res.data.data.userInfo)            // 用户信息
             Lockr.set('sessionId', res.data.data.sessionId)
             Lockr.set('authKey', res.data.data.sessionId)          // 用户sessionid
             Lockr.set('organ',res.data.data.org_id)
             _g.toastMsg('success', '注册成功')
             let organization=Lockr.get('organ')
             if(organization=0){
               router.replace('/organ')
             }
             else{
               router.replace('/home')
             }
           })
           .catch(function(err){
           console.log(err);
           })
            //this.apiPost('admin/base/login', data).then((res) => {
              //this.resetCommonData(res.data)
              
              
            //})
          } else {
            return false
          }
        })
      },  
    },
    mixins: [http]
  }
</script>

<style>
.verify-pos {
	position: absolute;
	right: 100px;
	top: 0px;
}
.card-box {
	padding: 20px;
	/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
	-webkit-border-radius: 5px;
	border-radius: 5px;
	-moz-border-radius: 5px;
	background-clip: padding-box;
	margin-bottom: 20px;
	background-color: #F9FAFC;
	margin: 120px auto;
	width: 400px;
	border: 2px solid #8492A6;
}

.title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}

.loginform {
	width: 350px;
	padding: 35px 35px 15px 35px;
}
</style>