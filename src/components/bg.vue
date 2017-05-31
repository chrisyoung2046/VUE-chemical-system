<template>
  <div>
    <img src="../assets/images/silverlogo.png" class="image1">
    <div class="m-b-20">
        <router-link class="btn-link-large add-btn" to="/register">
				<i class="el-icon-plus"></i>&nbsp;&nbsp;注册
			  </router-link>
		</div>
    <div class="m-b-20-1">
			<router-link class="btn-link-large add-btn" to="/login">
				<i class="el-icon-plus"></i>&nbsp;&nbsp;登录
			</router-link>
		</div>
    <img src="../assets/images/rev-21-vc-1200x320.jpg" class="image">

     <!--<el-carousel class="lunbo" height="320px">
      <el-carousel-item v-for="item in 2" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>-->
  </div>
  
</template>
<style>

.lunbo{
  margin-top:200px;
  width:100%;
}
  .m-b-20 {
    margin-right:200px; 
    margin-top:20px;
    float: right;
  }
   .m-b-20-1 {
    margin-right:20px; 
    margin-top:20px;
    float: right;
  }
  .image1{
    margin-left:200px; 
  }
.image {
    width:100%;
  }
body {
		margin: 0px;
		padding: 0px;
		background: #dddddd;
}
	  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
<script>
  import leftMenu from './leftMenu.vue'
  import changePwd from './Account/changePwd.vue'
  import http from '../assets/js/http'

  export default {
    data() {
      return {
        username: '',
        topMenu: [],
        childMenu: [],
        menuData: [],
        hasChildMenu: false,
        menu: null,
        module: null,
        img: '',
        title: '',
        logo_type: null
      }
    },
    methods: {
      logout() {
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          _g.openGlobalLoading()
          let data = {
            authkey: Lockr.get('authKey'),
            sessionId: Lockr.get('sessionId')
          }
          this.apiPost('admin/base/logout', data).then((res) => {
            _g.closeGlobalLoading()
            this.handelResponse(res, (data) => {
              Lockr.rm('menus')
              Lockr.rm('authKey')
              Lockr.rm('rememberKey')
              Lockr.rm('authList')
              Lockr.rm('userInfo')
              Lockr.rm('sessionId')
              Cookies.remove('rememberPwd')
              _g.toastMsg('success', '退出成功')
              setTimeout(() => {
                router.replace('/')
              }, 1500)
            })
          })
        }).catch(() => {

        })
      },
      switchTopMenu(item) {
        if (!item.child) {
          router.push(item.url)
        } else {
          router.push(item.child[0].child[0].url)
        }
      },
      handleMenu(val) {
        switch (val) {
          case 'logout':
            this.logout()
            break
          case 'changePwd':
            this.changePwd()
            break
        }
      },
      changePwd() {
        this.$refs.changePwd.open()
      },
      getTitleAndLogo() {
        this.apiPost('admin/base/getConfigs').then((res) => {
          this.handelResponse(res, (data) => {
            document.title = data.SYSTEM_NAME
            this.logo_type = data.LOGO_TYPE
            this.title = data.SYSTEM_NAME
            this.img = window.HOST + data.SYSTEM_LOGO
          })
        })
      },
      getUsername() {
        this.username = Lockr.get('userInfo').username
      }
    },
    /*created() {
      this.getTitleAndLogo()
      let authKey = Lockr.get('authKey')
      let sessionId = Lockr.get('sessionId')
      if (!authKey || !sessionId) {
        _g.toastMsg('warning', '您尚未登录')
        setTimeout(() => {
          router.replace('/')
        }, 1500)
        return
      }
      this.getUsername()
      let menus = Lockr.get('menus')
      this.menu = this.$route.meta.menu
      this.module = this.$route.meta.module
      this.topMenu = menus
      _(menus).forEach((res) => {
        if (res.module == this.module) {
          this.menuData = res.child
          res.selected = true
        } else {
          res.selected = false
        }
      })
    },*/
    computed: {
      routerShow() {
        return store.state.routerShow
      },
      showLeftMenu() {
        this.hasChildMenu = store.state.showLeftMenu
        return store.state.showLeftMenu
      }
    },
    components: {
      leftMenu,
      changePwd
    },
    watch: {
      '$route' (to, from) {
        _(this.topMenu).forEach((res) => {
          if (res.module == to.meta.module) {
            res.selected = true
            if (!to.meta.hideLeft) {
              this.menu = to.meta.menu
              this.menuData = res.child
            }
          } else {
            res.selected = false
          }
        })
      }
    },
    mixins: [http]
  }
</script>
