<template>
  <head-nav class="shadow-bottom" logo="益华数字科技" />
  <router-view />
  <ft />
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
import _Footer from '../components/_Footer.vue'
export default {
  name: 'Index',
  components: {
    HeadNav,
    ft: _Footer,
  },
}
</script>

<style scoped lang="scss">
.view {
  width: 100%;
}
</style>
