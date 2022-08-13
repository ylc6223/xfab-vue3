<template>
  <div
    id="introduction"
    class="flex w-full h-screen md:py-20 bg-fixed bg-cover bg-top bg-bottom bg-no-repeat justify-center"
    style="background-image: url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg')"
  >
    <div
      class="container flex justify-center items-center md:pt-4 text-center relative mx-auto text-amber-50 md:text-5xl"
    >
      <div class="row">
        <div>
          <h1 class="md:mb-4">创造价值，成就客户</h1>
          <h2 class="md:mb-16">业界领先的牙科机与智能水表制造商</h2>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            class="w-94 h-94 block relative rounded-full mx-auto play-btn"
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!--  tab-container占位容器 防止定位过后高度塌陷-->
  <div class="tab-container relative md:h-14">
    <div class="tabbar px-8 md:px-20 bg-tabbar-color w-full h-7 md:h-14">
      <ul class="absolute mx-auto left-0 right-0 h-full whitespace-nowrap overflow-x-auto">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="relative inline-block mr-8 md:mr-16 h-full"
          :class="{ 'active-tab': curIndex === index }"
        >
          <a class="block h-full flex justify-center items-center" @click.prevent="activeTab(tab.id, index, $event)">{{
            tab.tabName
          }}</a>
        </li>
        <div class="line absolute"></div>
      </ul>
    </div>
  </div>

  <section id="brief" class="content h-screen mb-10 h-96"></section>
  <section id="vision" class="content h-screen mb-10 h-96"></section>
  <section id="development" class="content h-screen mb-10 h-96"></section>
  <section id="structure" class="content h-screen mb-10 h-96"></section>
  <section id="teams" class="content h-screen mb-10 h-96"></section>
  <section id="culture" class="content h-screen mb-10 h-96"></section>
  <section id="office" class="content h-screen mb-10 h-96"></section>
  <div class="h-screen h-96"></div>
  <div class="h-screen h-96"></div>
  <div class="h-screen h-96"></div>
</template>

<script lang="ts">
import { debounce } from '../utils/index'

export default {
  data() {
    return {
      tabs: [
        {
          tabName: '公司简介',
          id: '#brief',
        },
        {
          tabName: '愿景及使命',
          id: '#vision',
        },
        {
          tabName: '发展历程',
          id: '#development',
        },
        {
          tabName: '业务架构',
          id: '#structure',
        },
        {
          tabName: '管理团队',
          id: '#teams',
        },
        {
          tabName: '企业文化',
          id: '#culture',
        },
        {
          tabName: '办公地点',
          id: '#office',
        },
      ],
      curIndex: 0,
      offsetTops: [],
      links: [],
    }
  },
  mounted() {
    const line = document.querySelector('.line')
    const links = document.querySelectorAll('.tabbar li')
    this.offsetTops = [...document.querySelectorAll('.content')]
    window.addEventListener('scroll', this.handleScroll)
  },
  destroy() {},
  methods: {
    //实现吸顶
    handleScroll() {
      const tabbarContainer = document.querySelector('.tab-container')
      const tabbar = document.querySelector('.tabbar')
      // 得到页面滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= tabbarContainer.offsetTop) {
        tabbar.style.position = 'fixed'
        tabbar.style.top = '0px'
      } else {
        tabbar.style.position = 'relative'
        tabbar.style.top = '0'
      }
    },
    //选择标题滚动到对应内容
    navToPosition(id, index) {
      const offsetTop = document.querySelector(id).offsetTop
      window.scrollTo({
        top: !index ? offsetTop : offsetTop - 100,
        behavior: 'smooth',
      })
    },
    //激活对应tab
    activeTab(id, index, e) {
      this.curIndex = index
      this.navToPosition(id, index)
      this.setLinePosition(e.target)
    },
    setLinePosition(element) {
      const colors = ['deepskyblue', 'orange', 'firebrick', 'gold', 'magenta', 'black', 'darkblue'] //随机分配颜色
      const width = element.getBoundingClientRect().width
      const height = element.getBoundingClientRect().height
      const left = element.getBoundingClientRect().left
      const top = element.parentNode.offsetTop
      console.log(element.parentNode)
      const color = colors[Math.floor(Math.random() * colors.length)]
      //下划线的位置跟随a标签
      const line = document.querySelector('.line')
      line.style.width = `${width}px`
      line.style.height = `${height}px`
      line.style.left = `${left}px`
      line.style.top = `${top}px`
      line.style.borderColor = '#0052d9'
      line.style.transform = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.play-btn {
  width: 94px;
  height: 94px;
  margin: 0 auto;
  background: radial-gradient(#009961 50%, #00996166 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}

.play-btn::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 3s;
  animation: pulsate-btn 3s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 153, 97, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

.play-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.play-btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

.play-btn:hover::after {
  border-left: 15px solid #009961;
  transform: scale(20);
}

a.play-btn:hover {
  color: #00cc81;
  text-decoration: none;
}

//.tab-container ul li.active-tab a:after {
//  content: ' ';
//  height: 2px;
//  width: 100%;
//  background: #0052d9;
//  position: absolute;
//  left: 0;
//  right: 0;
//  bottom: 0px;
//  //animation: expand 0.2s;
//}

.content:nth-of-type(odd) {
  background-color: #95a5a6;
}

.content:nth-of-type(even) {
  background-color: #1abc9c;
}

//点击相应tab下划线进行跟随
.line {
  border-bottom: 2px solid transparent;
  //z-index: -1;
  z-index: 1;
  transform: translateX(-60px);
  transition: all 0.35s ease-in-out;
}
</style>
