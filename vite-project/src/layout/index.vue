<template>
  <!--  <head-nav class="shadow-bottom" logo="益华数字科技" />-->
  <nav class="w-screen bg-blue-600 text-white">
    <div class="nav-bar flex items-center justify-between max-w-screen-xl mx-auto h-[70px]">
      <!--   PC下logo   -->
      <span class="logo">
        <img src="../assets/logo-white.svg" class="hidden md:inline-block w-10 inline-block mr-4" alt="益华数字" />
        <a class="hidden md:inline-block align-middle" href="#">Logo</a>
      </span>
      <!--  菜单    -->
      <div class="menu">
        <ul class="nav-links flex">
          <li v-for="link in links" :key="link.name">
            <router-link :to="{ name: link.name }">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>
      <!--   工具栏   -->
      <div class="toolbox flex items-center">
        <div class="dark-light nav-btn">
          <i
            v-if="isActive === false"
            class="absolute text-white text-xl cursor-pointer transition-all duration-300 ease-in-out iconfont icon-moon"
          ></i>
          <i v-else class="iconfont icon-sun"></i>
        </div>
        <div class="search-box relative">
          <div class="searchToggle nav-btn" :class="{ active: searchActive }">
            <i
              class="iconfont icon-cancel absolute text-white text-xl cursor-pointer transition-all duration-300 ease-in-out opacity-0 pointer-events-none"
            ></i>
            <i
              class="iconfont icon-fenxiang absolute text-white text-xl cursor-pointer transition-all duration-300 ease-in-out"
            ></i>
          </div>
          <div class="search-field">
            <input type="text" placeholder="Search..." />
            <i class="iconfont icon-fenxiang"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <ft />
</template>

<script>
// import HeadNav from '@/components/HeadNav.vue'
import _Footer from '../components/_Footer.vue'

export default {
  name: 'Index',
  components: {
    // HeadNav,
    ft: _Footer,
  },
  data() {
    return {
      isActive: false, //黑夜模式状态开关
      searchActive: false,
      links: [
        {
          name: 'Home',
          label: '主页',
        },
        {
          name: 'About',
          label: '简介',
        },
        {
          name: 'Product',
          label: '业务',
        },
        {
          name: 'Case',
          label: '案例',
        },
        {
          name: 'ContactUs',
          label: '联系我们',
        },
        {
          name: 'Staff',
          label: '员工',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.view {
  width: 100%;
}
</style>
