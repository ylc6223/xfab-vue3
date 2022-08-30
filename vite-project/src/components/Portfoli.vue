<template>
  <div class="w-full">
    <ul class="flex mx-auto justify-center mb-20 filter-btns">
      <!--      <li data-filter="*" class="filter-btn active rounded-xl px-4 py-2 bg-nav-color text-white">全部</li>-->
      <!--      <li data-filter=".hseries" class="filter-btn rounded-xl px-4 py-2">种植机</li>-->
      <!--      <li data-filter=".xseries" class="filter-btn rounded-xl px-4 py-2">切削机</li>-->
      <!--      <li data-filter=".zseries" class="filter-btn rounded-xl px-4 py-2">干湿一体机</li>-->
      <!--      <li data-filter=".auto-series" class="filter-btn rounded-xl px-4 py-2">自动换盘机</li>-->
      <li
        v-for="(item, index) in menus"
        :key="item"
        :data-filter="item.selector"
        class="filter-btn rounded-xl px-4 py-2"
        :class="{ 'bg-nav-color text-white': curIndex === index }"
        @click="checked(index, $event)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="portfolio-container w-full relative">
      <!--      <div v-for="img in 9" class="portfolio-item relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img
            :src="'/src/assets/images/portfolio/portfolio-' + img + '.jpg'"
            class="w-full h-auto object-cover"
            alt=""
          />
        </div>
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
      </div>-->
      <div class="portfolio-item hseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-1.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item hseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-2.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item xseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-3.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item xseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-4.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item xseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-5.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item zseries relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-6.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item auto-series relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-7.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-8.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
      <div class="portfolio-item auto-series relative w-1/3 clear-both">
        <div class="portfolio-img">
          <img src="@/assets/images/portfolio/portfolio-9.jpg" class="w-full h-auto object-cover" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a
            href="assets/img/portfolio/portfolio-1.jpg"
            data-gallery="portfolioGallery"
            class="portfolio-lightbox preview-link"
            title="App 1"
            ><i class="bx bx-plus"></i
          ></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

export default {
  name: 'Portfoli',
  data() {
    return {
      curIndex: 0,
      menus: [
        {
          selector: '*',
          label: '全部',
        },
        {
          selector: '.hseries',
          label: '种植机',
        },
        {
          selector: '.xseries',
          label: '切削机',
        },
        {
          selector: '.zseries',
          label: '干湿一体机',
        },
        {
          selector: '.auto-series',
          label: '自动换盘机',
        },
      ],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var grid = document.querySelector('.portfolio-container')
      var iso
      imagesLoaded(grid, () => {
        iso = new Isotope('.portfolio-container', {
          itemSelector: '.portfolio-item',
          masonry: {
            columnWidth: '.portfolio-item',
          },
        })
      })
      const filterBtns = document.querySelector('.filter-btns')
      filterBtns.addEventListener('click', function (e) {
        let { target } = e
        const filterOption = target.getAttribute('data-filter')
        if (filterOption) {
          document.querySelectorAll('.filter-btn.active').forEach((btn) => {
            btn.classList.remove('active')
          })
          target.classList.add('active')
          iso.arrange({ filter: filterOption })
          iso.layout()
        }
      })
    },
    checked(checkedIndex, e) {
      this.curIndex = checkedIndex
    },
  },
}
</script>

<style scoped lang="scss"></style>
