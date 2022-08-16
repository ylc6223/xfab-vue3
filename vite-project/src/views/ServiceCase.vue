<template>
  <div class="slider h-screen h-96 bg-emerald-300"></div>
  <sticky-nav :menu="navs" :content-offset-tops="offsetTops"></sticky-nav>
  <div ref="contents" class="contents">
    <section id="brief" class="content h-screen mb-10 h-screen"></section>
    <section id="mission" class="content h-screen mb-10 h-screen"></section>
    <section id="development" class="content h-screen mb-10 h-screen"></section>
    <section id="structure" class="content h-screen mb-10 h-screen"></section>
    <section id="teams" class="content h-screen mb-10 h-screen"></section>
    <section id="culture" class="content h-screen mb-10 h-screen"></section>
    <section id="office" class="content h-screen mb-10 h-screen"></section>
  </div>
</template>

<script>
import StickyNav from '../components/StickyNav.vue'

export default {
  name: 'ServiceCase',
  components: {
    StickyNav,
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
          id: '#mission',
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
      offsetTops: {},
    }
  },
  mounted() {
    this.navs.forEach((item, index) => {
      this.offsetTops[`content${index}`] = this.$refs['contents'].children[index].offsetTop
    })
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
