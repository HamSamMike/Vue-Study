import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'; // 示例组件路径，请根据实际情况调整
import OptionOne from '../components/OptionOne.vue'; // 示例组件路径，请根据实际情况调整
import OptionTwo from '../components/OptionTwo.vue'; // 示例组件路径，请根据实际情况调整
import OptionThree from '../components/OptionThree.vue'; // 示例组件路径，请根据实际情况调整
import OptionFour from '../components/OptionFour.vue'; // 示例组件路径，请根据实际情况调整

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/optionOne',
    name: 'OptionOne',
    component: OptionOne
  },
  {
    path: '/optionTwo',
    name: 'OptionTwo',
    component: OptionTwo
  },
  {
    path: '/optionThree',
    name: 'OptionThree',
    component: OptionThree
  },
  {
    path: '/optionFour',
    name: 'OptionFour',
    component: OptionFour
  }
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;