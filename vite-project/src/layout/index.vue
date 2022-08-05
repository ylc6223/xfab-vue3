<template>
  <head-nav />
  <router-view class="view" />
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
