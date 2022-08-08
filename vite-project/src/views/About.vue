<template>
  <div
    id="introduction"
    class="flex w-full h-screen md:py-20 bg-fixed bg-cover bg-top bg-bottom bg-no-repeat justify-center"
    style="background-image: url('/assets/images/pexels-photo-933054.jpeg')"
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
  <div class="tab-container fixed top-80 px-8 md:px-20 bg-tabbar-color">
    <ul class="flex mx-auto justify-start max-w-screen-lg md:h-14">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.id"
        class="relative md:mr-16 h-full flex justify-center items-center"
        :class="{ 'active-tab': index === active }"
        @click="navToPosition(index, tab.id)"
      >
        <a>{{ tab.tabName }}</a>
      </li>
    </ul>
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
import { debounce } from '../utils/index'
export default {
  data() {
    return {
      tabs: [
        {
          tabName: '公司简介',
          id: '#brief',
          active: false,
        },
        {
          tabName: '愿景及使命',
          id: '#vision',
          active: false,
        },
        {
          tabName: '发展历程',
          id: '#development',
          active: false,
        },
        {
          tabName: '业务架构',
          id: '#structure',
          active: false,
        },
        {
          tabName: '管理团队',
          id: '#teams',
          active: false,
        },
        {
          tabName: '企业文化',
          id: '#culture',
          active: false,
        },
        {
          tabName: '办公地点',
          id: '#office',
          active: false,
        },
      ],
      active: 0,
      timeout: null,
    }
  },
  mounted() {
    this.init()
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    // window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    init() {
      const that = this
      window.addEventListener(
        'scroll',
        debounce(function (e) {
          clearTimeout(that.timeout)
          that.timeout = setTimeout(() => {
            that.activeTab(e)
          })
        }, 1000)
      )
    },
    //  dom定位导航
    navToPosition(index, id) {
      //激活相应的tab标签
      this.active = index
      //将元素滚动到可视区域
      document.querySelector(id).scrollIntoView(true)
    },
    //  激活对应的tab标签
    activeTab(e) {
      const nodes = document.querySelectorAll('section')
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]
        // 获取该元素此时相对于视口的顶部的距离，即是元素顶部距离视口屏幕上边的距离
        let nodeY = node.getBoundingClientRect().y
        // 当元素距离视口顶部的距离在 [0,200] 之间，设置激活该元素对应左侧的导航标题，这个数字可以按需定义
        // 这里关联内容和导航标签，是巧妙利用了内容在元素集合中的索引序号和导航标签中的一致
        if (nodeY <= 0) {
          this.active = Number(i)
          return
        }
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
