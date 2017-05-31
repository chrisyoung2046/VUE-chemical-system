import register from './components/Account/register.vue'
import login from './components/Account/login.vue'
import organ from './components/organ/organ.vue'
import test from './components/organ/test.vue'
import Home from './components/Home.vue'
import bg from './components/bg.vue'
import itemList from './components/item/list.vue'
import itemAdd from './components/item/add.vue'
import itemApprove from './components/item/approve.vue'
import itemEdit from './components/item/edit.vue'
import itemDetail from './components/item/detail.vue'
import cabList from './components/cab/list.vue'
import cabAdd from './components/cab/add.vue'
import cabEdit from './components/cab/edit.vue'
import apv from './components/approve/approve.vue'
import log from './components/log/log.vue'
import user from './components/user/user.vue'


/**
 * meta参数解析
 * hideLeft: 是否隐藏左侧菜单，单页菜单为true
 * module: 菜单所属模块
 * menu: 所属菜单，用于判断三级菜单是否显示高亮，如菜单列表、添加菜单、编辑菜单都是'menu'，用户列表、添加用户、编辑用户都是'user'，如此类推
 */

const routes = [
  { path: '/', component: bg, name: 'bg' },
  {
    path: '/register',
    component: register,
    name:'register'
  },
    {
    path: '/login',
    component: login,
    name:'login'
  },
  {
    path: '/organ',
    component: organ,
    name:'organ'
  },
   {
    path: '/test',
    component: test,
    name:'test'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'item/list', component: itemList, name: 'itemList', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'item/add', component: itemAdd, name: 'itemAdd', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'item/approve', component: itemApprove, name: 'itemApprove', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'item/edit', component: itemEdit, name: 'itemEdit', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'item/detail/:id', component: itemDetail, name: 'itemDetail', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
    ]
  },
 {
    path: '/home',
    component: Home,
    children: [
      { path: 'cab/list', component: cabList, name: 'cabList', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'cab/add', component: itemAdd, name: 'cabAdd', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
      { path: 'cab/edit', component: itemEdit, name: 'cabEdit', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
    ]
  },
   {
    path: '/home',
    component: Home,
    children: [
      { path: 'approve', component: apv, name: 'apv', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'log', component:log, name: 'log', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
    ]
  },
   {
    path: '/home',
    component: Home,
    children: [
      { path: 'user', component: user, name: 'user', meta: { hideLeft: true, module: 'Administrative', menu: 'menu' }},
    ]
  },

 
  
]
export default routes
