<template>
  <div class="slide">
    <swiper
      v-if="false"
      class="swiper"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :modules="modules"
      :speed="600"
      :parallax="true"
      :navigation="true"
      :pagination="{ clickable: true }"
    >
      <template #container-start>
        <div
          class="parallax-bg"
          data-swiper-parallax="-23%"
          :style="{ backgroundImage: 'url(/images/example/1.jpg)' }"
        ></div>
      </template>
      <swiper-slide class="slide">
        <h1 class="title" data-swiper-parallax="-300">Slide 1</h1>
        <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
            quis feugiat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>
        <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
            quis feugiat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>
        <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
            quis feugiat.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <section class="flex p-6">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
  </section>
  <button
    class="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white cyxy-trs-source"
  >
    Save changes
  </button>
  <section class="flex p-6">
    <card />
    <card />
  </section>
  <section class="flex p-6">
    <card />
    <card />
  </section>
  <section class="flex p-6">
    <card />
    <card />
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div class="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium text-slate-900 tracking-tight">
        <font style="vertical-align: inherit"><font style="vertical-align: inherit">倒写</font></font>
      </h3>
      <p class="mt-2 text-sm text-slate-500">
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"> 零重力笔可用于任何方向书写，包括倒置。</font
          ><font style="vertical-align: inherit">它甚至可以在外太空工作。 </font></font
        >
      </p>
    </div>
    <div class="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium text-white tracking-tight">
        <font style="vertical-align: inherit"><font style="vertical-align: inherit">倒写</font></font>
      </h3>
      <p class="mt-2 text-sm text-slate-400">
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"> 零重力笔可用于任何方向书写，包括倒置。</font
          ><font style="vertical-align: inherit">它甚至可以在外太空工作。 </font></font
        >
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Parallax, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Card from '../components/Card.vue'
export default defineComponent({
  title: 'Parallax',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import './style.scss';
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.swiper {
  @include swiper-wrapper($height: 380px);

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $white;
    box-sizing: border-box;
    padding: 0 100px;
    background-color: transparent;

    .title {
      margin-top: 0;
      margin-bottom: $lg-gap;
    }

    .subtitle {
      margin-top: 0;
      margin-bottom: $gap;
    }

    .text {
      max-width: 430px;
      line-height: 1.32;
    }
  }
}
</style>
