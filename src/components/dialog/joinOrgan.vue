<template>
<el-dialog ref="dialog" custom-class="w-400 h-300" title="加入机构">
  <el-form :model="form">
    <el-form-item label="机构名称或编码" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <!--<el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>-->
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="joinOrgan">确 定</el-button>
  </div>
</el-dialog>

</template>
<style>

</style>
<script>
  import http from '../../assets/js/http'

  export default {
    data() {
      return {
        disable: false,
        form: {
          name: '',
        },

        rules: {
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
    },
    methods: {
      joinOrgan(){
        var data=this.form.name
        this.apiPost('admin/base/login', data).then((res) => {
            router.replace('/home')
        })
      },
      open() {
        this.$refs.dialog.open()
      },
      close() {
        this.$refs.dialog.close()
      },
    },
    mixins: [http]
  }
</script>