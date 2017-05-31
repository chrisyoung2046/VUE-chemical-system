<template>
 <div>
  <el-row>
     <el-col :span="24" >
      <el-card :body-style="{ padding: '0px' }" >
         <div style="padding: 14px;">
            <span>化学品流向管理系统</span>
            <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
            </div>
         </div>
       </el-card>
     </el-col>
</el-row>
   <el-row type="flex" class="row-bg" justify="center">
     <el-col :span="4" >
      <el-card :body-style="{ padding: '0px' }" >
       <img src="../../assets/images/chemical.png" class="image">
         <div style="padding: 14px;">
            <span>加入机构</span>
            <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" @click="openDialog">加入机构</el-button> 
            
            </div>
         </div>
       </el-card>
     </el-col>
     <el-col :span="3" >
      <el-card :body-style="{ padding: '0px' }" >
     
      </el-card>
  </el-col>
   <el-col :span="4" >
    <el-card :body-style="{ padding: '0px' }" >
      <img src="../../assets/images/chemical.png" class="image">
      <div style="padding: 14px;">
        <span>创建机构</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<joinOrgan ref='joinOrgan'></joinOrgan>
</div>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
import joinOrgan from '../dialog/joinOrgan.vue'
export default {
  /*data() {
    return {
      currentDate: new Date(),
      dialogVisibl:false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'

    };
  },*/
 
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogFormVisible: false,
        dialogVisible: false
      };
    },
    methods: {
      openDialog(){
        this.$refs.joinOrgan.open()
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
     components:{joinOrgan}
  };
 
</script>