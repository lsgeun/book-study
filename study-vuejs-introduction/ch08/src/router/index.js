import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import UserGeneric from "@/views/UserGeneric.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/home', '/root'],
      meta: {
        title: "HOME",
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      beforeEnter: (to, from, next) => {
        console.log("In beforeEnter, /about");
        console.log("to");
        console.log(to);
        console.log("from");
        console.log(from);
        console.log("----------------------------");
        next();
      },
      meta: {
        title: "ABOUT",
      },
    },
    {
      path: '/user',
      // component: () => import('@/views/UserViewOptionsApi.vue'),
      // component: () => import('@/views/UserViewCompositionsApi.vue'),
      components: {
        header: () => import('@/views/TheHeader.vue'),
        default: () => import('@/views/TheDefault.vue'),
        footer: () => import('@/views/TheFooter.vue'),
      },
      children: [
        {
          path: 'info',
          name: 'user-info',
          components: {
            header: () => import('@/views/UserInfoHeader.vue'),
            default: () => import('@/views/UserInfo.vue'),
            footer: () => import('@/views/UserInfoFooter.vue'),
          },
        },
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/UserProfile.vue'),
        },
        {
          path: ':id',
          name: 'user-id',
          component: () => import('@/views/UserId.vue'),
          props: true,
          alias: ['/:id', '/u/:id', '/usr/:id' ],
        }
      ],
    },
    {
      path: '/person/:id',
      name: 'person-id',
      redirect: (to) => {
        return { name: 'user-id', params: { id: to.params.id } };
      },
      component: () => import('@/views/UserDetail.vue'),
    },
    { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
    { path: '/user-:afterUser(.*)', component: UserGeneric },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else if ( document.title == "HOME" ) {
      return { el: '#abc', top: 500 };
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: 'smooth' });
        }, 3000);
      });;
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Vite App";
  }
  console.log("In beforeEach");
  console.log("to");
  console.log(to);
  console.log("from");
  console.log(from);
  console.log("----------------------------");
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("In beforeResolve");
  console.log("to");
  console.log(to);
  console.log("from");
  console.log(from);
  console.log("----------------------------");
  next();
});

router.afterEach((to, from, failure) => {
  console.log("In afterEach");
  console.log("to");
  console.log(to);
  console.log("from");
  console.log(from);
  console.log("failure");
  console.log(failure);
  console.log("----------------------------");
});

export default router;
