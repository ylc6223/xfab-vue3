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
          <h2 class="md:mb-16">业界领先的牙科机智能水表制造商</h2>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            class="w-94 h-94 block relative rounded-full mx-auto play-btn"
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!--  tab-container占位容器 防止定位过后高度塌陷-->
  <div class="tab-container md:h-14">
    <div class="tabbar px-8 md:px-20 bg-tabbar-color h-full">
      <ul class="flex mx-auto justify-start max-w-screen-lg h-full">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="relative md:mr-16 h-full flex justify-center items-center"
          :class="{ 'active-tab': curIndex === index }"
          @click="navToPosition(tab.id, index)"
        >
          <a>{{ tab.tabName }}</a>
        </li>
      </ul>
    </div>
  </div>

  <section id="brief" class="mb-10 h-96">
    <h3>公司简介</h3>
    <h4>Lorem ipsum.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="vision" class="mb-10 h-96">
    <h3>愿景及使命</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="development" class="mb-10 h-96">
    <h3>发展历程</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="structure" class="mb-10 h-96">
    <h3>业务架构</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="teams" class="mb-10 h-96">
    <h3>管理团队</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="culture" class="mb-10 h-96">
    <h3>企业文化</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
  <section id="office" class="mb-10 h-96">
    <h3>办公地点</h3>
    <h4>Lorem ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi, consectetur dolor est incidunt
      iusto molestias neque quas quis, ratione voluptas. Adipisci alias dicta esse laudantium porro quam veniam.
    </p>
  </section>
</template>

<script lang="ts">
// 在滚动过程中计算获取元素在没有fixed定位的时候的距离顶部的距离
function getOffset(element) {
  const rect = element.getBoundingClientRect()
  // 这两行代码不兼容IE (兼容IE的方法是 document.documentElement.scrollTop / scrollLeft)
  const scrollTop = window.pageYOffset
  const scrollLeft = window.pageXOffset
  /*
  相加后的结果是 初始位置 在滚动过程中他将是一个固定值
  */
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  }
}

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
      offsetTops: {},
      isFixed: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroy() {},
  methods: {
    //实现吸顶和滚动导航
    handleScroll() {
      // this.activeTab(1)
    },
    //选择标题滚动到对应内容
    navToPosition(id, index) {
      this.activeTab(index)
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    },
    //激活对应tab
    activeTab(index) {
      const nodes = document.querySelectorAll('.mb-10')
      console.log(nodes)
      this.curIndex = index
    },

    // 计算页面的各个offsetTop
    calcTop(recalNav) {
      const tabbar = document.querySelector('.tabbar')
      recalNav && (this.offsetTops.tabbar = tabbar.offsetTop)
      let sections = this.tabs.map((item) => {
        return item.id
      })
      for (let j = 0; j < sections.length; j++) {
        this.offsetTops[sections[j]] = document.querySelector(sections[j]).offsetTop
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

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

.tab-container ul li.active-tab a:after {
  content: ' ';
  height: 2px;
  width: 100%;
  background: #0052d9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
}
</style>
