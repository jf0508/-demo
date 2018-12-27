import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  //控制滚动定位位置
 /*  scrollBehavior(to,from,savedPosition){
    return {x:0,y:100}
  }, */
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      components: { //复用 route view 组件
        default:resolve => require(['@/components/Home'], resolve),
        OrderingGuide:resolve => require(['@/components/about/OrderingGuide'], resolve),
        Delivery:resolve => require(['@/components/about/Delivery'], resolve),
        History:resolve => require(['@/components/about/History'], resolve),
      }
    }, {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login'], resolve)
    }, {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/components/Register'], resolve)
    }, {
      path: '/menu',
      name: 'Menu',
      component: resolve => require(['@/components/Menu'], resolve)
    }, {
      path: '/about',
      name: 'About',
      redirect:'/about/history',
      component: resolve => require(['@/components/about/About'], resolve),
      children: [//二级路由
        {
          path: 'contact',
          name: 'Contact',
          redirect:'/about/contact/PersonName',
          component: resolve => require(['@/components/about/Contact'], resolve),
          children: [ //三级路由
            { 
            path: 'phone', 
            name: 'Phone', 
            component: resolve => require(['@/components/about/contact/Phone'], resolve)
            },{ 
            path: 'personName', 
            name: 'PersonName', 
            component: resolve => require(['@/components/about/contact/PersonName'], resolve)
            }
          ]
        }, {
          path: 'delivery',
          name: 'Delivery',
          component: resolve => require(['@/components/about/Delivery'], resolve),
        }, {
          path: 'history',
          name: 'History',
          component: resolve => require(['@/components/about/History'], resolve),
        }, {
          path: 'orderingGuide',
          name: 'OrderingGuide',
          component: resolve => require(['@/components/about/OrderingGuide'], resolve),
        },
      ]
    }, {
      path: '/admin',
      name: 'Admin',
      component: resolve => require(['@/components/Admin'], resolve),
      meta: {
        islogin: Boolean(window.localStorage.user)
      },
      beforeEnter: (to, from, next) => {
        console.log(to.meta.islogin)
        if (to.meta.islogin === true) {
          next()
        } else {
          next('/login')
        }
      },
      beforeEnter:(to,from,next)=>{ //独享守卫
        if(this.$store.getters.isLoginState){
          next()
        }else{
          console.log('非登录状态不能访问')
          this.$router.push({name:'Login'})
        }
        
      }
    }

  ]
  
})

//全局守卫
// to 要跳转的路由
// from 来自哪个路由
router.beforeEach((to,from,next)=>{
  next();
})

//后置钩子
/* router.afterEach((to,from)=>{
  console.log(to)
}) */


export default router

