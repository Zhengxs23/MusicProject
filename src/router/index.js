import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('../views/Mypage.vue'),
  }
]


const router = new VueRouter({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name == "Mypage") {
    let username = sessionStorage.getItem('username');
    if (username === 'mrc') {
      next();
    } else if (from.name != 'Login') {
      next('/login');
    }
  } else if (from.name == "Register" && to.name != 'Login') {
    // let uname = sessionStorage.getItem('uname');
    // let pword = sessionStorage.getItem('pword');
    let r = sessionStorage.getItem('cf');
    // console.log(uname, pword);
    console.log(r);
    if (r === 'true') {
      next()
    } else if(r === 'false'){
      next('/register')
    }
  } else { //q其他地方不需要验证 直接通过.
    next();
  }
});
// router.beforeEach((to)=>{
//   if(to.name=='Register'){
//     // let username=sessionStorage.getItem('username');
//     // let password = sessionStorage.getItem('password');
//   }
// });

export default router