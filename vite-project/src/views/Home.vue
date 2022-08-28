<template>
  <div>
    <div class="slide relative h-screen">
      <swiper class="swiper" :modules="modules" navigation>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
        <swiper-slide class="slide">
          <div class="backdrop"></div>
          <img src="@/assets/images/people-in-couch-1024248.jpg" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <section class="max-w-screen-xl mx-auto md:pt-[145px]">
      <h2 class="md:mb-[10px] caption">为什么选择我们</h2>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        经验丰富、敬职敬业、勇于开拓进取的专业员工团队 强大的资源整合能力 一体化的综合服务能力
      </p>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        经验丰富、敬职敬业、勇于开拓进取的专业员工团队 强大的资源整合能力
        一体化的综合服务能力经验丰富、敬职敬业、勇于开拓进取的专业员工团队 强大的资源整合能力 一体化的综合服务能力
      </p>
      <ul class="flex md:mt-[45px] flex-wrap justify-center">
        <li
          v-for="advantage in advantages"
          :key="advantage.label"
          class="md:hover:scale-105 bg-white md:mr-[30px] mb-[30px] w-[328px] dark:bg-slate-800 rounded-lg py-[35px] px-[40px] ring-1 ring-slate-900/5 shadow-xl"
        >
          <div class="flex items-center">
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg mr-[15px]">
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
            <h3 class="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              {{ advantage.label }}
            </h3>
          </div>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {{ advantage.text }}
          </p>
        </li>
      </ul>
    </section>
    <section class="max-w-screen-xl mx-auto md:pt-[145px]">
      <h2 class="md:mb-[10px] caption">我们提供最专业的服务</h2>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        在各领域中, 我司经多年探索, 我们累计了雄厚的技术背景和丰富的客户经验, 拥有
        一批优秀的技术人员、及高素质的销售团队,
      </p>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        并配备经验丰富的售后工程师, 为客户 提供及时高效的售后服务和技术支持。
      </p>
      <div class="max-w-[1000px] mx-auto px-8 md:px-0">
        <video src="https://cms-resource.mastergo.com/01_UI_MPEG_4_404c112d64.mp4"></video>
      </div>
    </section>
    <section class="max-w-screen-xl mx-auto md:pt-[145px]">
      <h2 class="md:mb-[10px] caption">服务案例</h2>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        我们始终与最新的行业领先技术保持同步, 满足不断变化的市场需求和专业 挑战。
      </p>
      <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6">期待与各位新老客尸共同引领行业的发展!</p>
      <div></div>
    </section>
    <section class="max-w-screen-xl mx-auto md:pt-[145px]">
      <h2 class="md:mb-[10px] caption">管理团队介绍</h2>
      <ul class="flex flex-col md:flex-row">
        <li v-for="item in 4" class="flex-1">
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span class="sr-only">Open dropdown</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdown"
                class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul class="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Export Data</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Add friend</a
                >
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >Message</a
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="max-w-screen-xl mx-auto md:pt-[145px]">
      <h2 class="mb-4 md:mb-[10px] caption">联系我们</h2>
      <div class="md:grid md:grid-cols-2">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div class="form-group mb-6">
              <input
                id="exampleInput7"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                id="exampleInput8"
                type="email"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                id="exampleFormControlTextarea13"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                id="exampleCheck87"
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                checked
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck87"
                >Send me a copy of this message</label
              >
            </div>
            <button
              type="submit"
              class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
        <map-container />
      </div>
    </section>
    <section>
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            <span class="block">Ready to dive in?</span>
            <span class="block text-indigo-600">Start your free trial today.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import { Listbox } from '@headlessui/vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import MapContainer from '../components/MapContainer.vue'

export default defineComponent({
  title: 'Parallax',
  url: import.meta.url,
  components: {
    Listbox,
    Card,
    Swiper,
    SwiperSlide,
    MapContainer,
  },
  data() {
    return {
      advantages: [
        {
          label: '丰富的行业经验',
          text: '拥有多年的专业化积淀和方案解决经验，为包括众多国际知名企业在内，横跨通讯、电子、IT、汽车、石化、医药、金融、快速消费品等多个行业的客户，提供着全方位的财税审计与人力资源解决方案。',
        },
        {
          label: '专业的服务团队',
          text: '具有专业的服务团队，团队成员具备专业素质，丰富经验，能够根据客户的不同需求，提供全面专业的服务。具有专业的服务团队，团队成员具备专业素质，丰富经验，能够根据客户的不同需求，提供全面专业的服务。',
        },
        {
          label: '严格的质量管理',
          text: '完善的内部质量控制对资金的支付、数据的制作及业务报告的生成和传递都制定了独立的内部监管流程。',
        },
        {
          label: '完善的系统平台',
          text: '依托先进的IT管理系统，通过系统平台对客户的主数据进行实时的跟踪和监控，数据运行安全稳定、业务报表可以实现灵活设定，对客户需求及时反馈等方面具有卓越优势。',
        },
        {
          label: '良好的市场口碑',
          text: '以高水准的服务质量和专业的服务精神赢得客户的广泛赞誉，定期对客户进行业务走访及满意度调查，及时收集客户需求反馈，努力提升服务质量，打造具有专业化经验的客户服务团队。',
        },
        {
          label: '众多的合作伙伴',
          text: '与境外合作资源形成了无缝隙的流程合作模式, 能够安排团组与境外各级政府、企业、机构、大学等座谈交流、培训学习、展览会议等活动, 提供专业的团组接待保障服务。。',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import './style.scss';

.swiper {
  @include swiper-wrapper(100vh);

  ::v-deep(.swiper-slide) {
    @include swiper-slide();
  }
}
</style>
