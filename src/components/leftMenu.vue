<template>

 <el-col :span="24">
    <h5 class="el-title">银橡实验室</h5>
    <el-menu  default-active="2"  @open="handleOpen" @close="handleClose">
      <!--<el-submenu index="1">
        <template slot="title"><i class="el-icon-search"></i>物品管理</template>
        <el-menu-item-group>
          <template slot="title">危险品</template>
          <el-menu-item index="1-1">一级审批</el-menu-item>
          <el-menu-item index="1-2">二级审批</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="非危险品">
          <el-menu-item index="1-3">无需审批</el-menu-item>
        </el-menu-item-group>
      </el-submenu>-->
       <router-link  to="/home/item/list">
         <el-menu-item index="2" class='left-menu'>	
         <i class="el-icon-search"></i>物品管理
         </el-menu-item>
       </router-link>
       <router-link  to="/home/cab/list">
         <el-menu-item index="3" class='left-menu'>	
         <i class="el-icon-menu"></i>存放地管理
         </el-menu-item></router-link>
       <router-link  to="/home/approve">
      <el-menu-item index="4" class='left-menu'><i class="el-icon-edit"></i>我的审批</el-menu-item>
      </router-link>
      <router-link  to="/home/log">
      <el-menu-item index="5" class='left-menu'><i class="el-icon-document"></i>操作记录</el-menu-item>
      </router-link>
      <router-link  to="/home/user">
      <el-menu-item index="6" class='left-menu'><i class="el-icon-more "></i>用户管理</el-menu-item>
      </router-link>
    </el-menu>
  </el-col>
  <!--<ul>
    <li class="nav-item left-menu">
      <a href='www.baidu.com'>物品管理</a> 
    </li>
    <li class="nav-item">
      <a>存放地管理</a> 
    </li>
    <li class="nav-item">
      <a>我的审批</a> 
    </li>
    <li class="nav-item">
      <a>操作记录</a> 
    </li>
    <li class="nav-item">
      <a>成员管理</a> 
    </li>
   </ul>-->

</template>

<script>
export default {
  props: ['menuData', 'menu'],
  data() {
    return {
    }
  },
  methods: {
    routerChange(item) 	{
      // 与当前页面路由相等则刷新页面
      if (item.url != this.$route.path) {
        router.push(item.url)
      } else {
        _g.shallowRefresh(this.$route.name)
      }
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    
  }     
}
</script>
<style>
.el-title {
  margin: 40px;
}
.left-menu:hover {
  color:#ffffff;
	background: #C0CCDA;
}
.left-menu:active {
  color:azure;
	background: #f1f2f7;
}
.nav-item {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  padding-left: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-coverflow:ellipsis;
}
</style>