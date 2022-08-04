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
  padding-top: 70px;
  width: 100%;
}
</style>
