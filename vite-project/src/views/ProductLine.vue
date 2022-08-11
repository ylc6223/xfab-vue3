<template>
  <div class="h-screen h-96"></div>
  <scroll-nav :menu="navs" relative-name="html">
    <section id="brief" class="content h-screen mb-10 h-screen"></section>
    <section id="vision" class="content h-screen mb-10 h-screen"></section>
    <section id="development" class="content h-screen mb-10 h-screen"></section>
    <section id="structure" class="content h-screen mb-10 h-screen"></section>
    <section id="teams" class="content h-screen mb-10 h-screen"></section>
    <section id="culture" class="content h-screen mb-10 h-screen"></section>
    <section id="office" class="content h-screen mb-10 h-screen"></section>
  </scroll-nav>
</template>

<script>
import ScrollNav from '../components/ScrollNav.vue'

export default {
  components: {
    ScrollNav,
  },
  data() {
    return {
      navs: [
        {
          label: '公司简介',
          id: '#brief',
          checked: true,
        },
        {
          label: '愿景及使命',
          id: '#vision',
        },
        {
          label: '发展历程',
          id: '#development',
        },
        {
          label: '业务架构',
          id: '#structure',
        },
        {
          label: '管理团队',
          id: '#teams',
        },
        {
          label: '企业文化',
          id: '#culture',
        },
        {
          label: '办公地点',
          id: '#office',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.content:nth-of-type(odd) {
  background-color: #95a5a6;
}

.content:nth-of-type(even) {
  background-color: #1abc9c;
}
</style>
