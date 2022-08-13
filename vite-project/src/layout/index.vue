<template>
  <head-nav class="shadow-bottom" />
  <router-view />
  <div class="footer h-screen h-96"></div>
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
export default {
  name: 'Index',
  components: {
    HeadNav,
  },
}
</script>

<style scoped lang="scss">
.view {
  width: 100%;
}
</style>
