<template>
  <div id="container" class="w-full md:w-1/2 h-full md:h-1/2"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'MapContainer',
  data() {
    return {
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      //map:null,
    }
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap()
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: '6c854c3a7f356cb86c7faabf5e1cf8a3', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            //设置地图容器id
            viewMode: '3D', //是否为3D地图模式
            zoom: 17, //初始化地图级别
            center: [113.287219, 23.009961], //初始化地图中心点位置
          })
          const marker = new AMap.Marker({
            position: new AMap.LngLat(113.287219, 23.009961), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '广州市益华数字科技有限公司',
          })
          this.map.add(marker)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped lang="scss"></style>
