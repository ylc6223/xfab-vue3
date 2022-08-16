<template>
  <div class="wrap_footer w-full">
    <div class="footer_con max-w-screen-xl mx-auto">
      <div class="focus_us w-full border-b pt-4 mb-5 md:pt-8 md:mb-9 h-6 md:h-14 box-content">
        <h3 class="tit md:mr-9 md:mb-8 text-3xl float-left">关注我们</h3>
        <ul class="focus_list flex float-left">
          <li class="md:w-7 md:mr-6">
            <a href="#" class="wechat-btn block w-full">
              <i class="iconfont icon-weixin text-4xl"></i>
              <img
                v-show="false"
                class="wechat-code"
                src="https://www.tencent.com/img/index/wechat-code.jpg"
                alt="img"
              />
            </a>
          </li>
          <li class="md:w-7 md:mr-6">
            <a href="https://weibo.com/tencent" class="block w-full" target="_blank">
              <i class="iconfont icon-weibo text-4xl"></i>
            </a>
          </li>
          <li class="md:w-7 md:mr-6">
            <a href="https://twitter.com/TencentGlobal" class="block w-full" target="_blank">
              <i class="icon i_twitter text-4xl"></i>
            </a>
          </li>
          <li class="md:w-7 md:mr-6">
            <a href="https://www.linkedin.com/company/tencent/" class="block w-full" target="_blank">
              <i class="icon i_in text-4xl"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="join_us float-left">
        <!-- 添加类名 sublist_show 显示子菜单 -->
        <div class="tit_area">
          <h3 class="tit">加入我们</h3>
          <i class="icon icon_arrow"></i>
        </div>
        <ul class="join_list">
          <li>
            <a target="_blank" href="https://careers.tencent.com/">社会招聘</a>
          </li>
          <li>
            <a target="_blank" href="https://join.qq.com/">校园招聘</a>
          </li>
        </ul>
      </div>

      <div class="contact_us float-left">
        <div class="tit_area">
          <h3 class="tit">联系我们</h3>
          <i class="icon icon_arrow"></i>
        </div>
        <ul class="contact_list">
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/customer-service.html">客户服务</a>
          </li>
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/partnership.html">合作洽谈</a>
          </li>
        </ul>
      </div>

      <div class="legal_info float-left">
        <div class="tit_area">
          <h3 class="tit">法律信息</h3>
          <i class="icon icon_arrow"></i>
        </div>
        <ul class="legal_list">
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/service-agreement.html">服务协议</a>
          </li>
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/privacy-policy.html">隐私政策</a>
          </li>
          <li>
            <a target="_blank" href="https://ipr.tencent.com/">知识产权</a>
          </li>
        </ul>
      </div>

      <div class="logo_tencent">
        <img src="/img/index/tencent_logo.png" alt="xfab" />
      </div>

      <div class="footer_area">
        <ul class="links">
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/statement.html">法律声明</a>
          </li>
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/integrity-policy.html">阳光准则</a>
          </li>
          <li>
            <a target="_blank" href="https://www.tencent.com/zh-cn/sitemap.html">网站地图</a>
          </li>
          <li class="num">
            <a href="http://beian.miit.gov.cn/">粤网文【2017】6138-1456号</a>
          </li>
          <li class="num">
            <a href="http://beian.miit.gov.cn/">粤B2-20090059</a>
          </li>
          <li class="num">
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008569"
              >粤公网安备 44030502008569号</a
            >
          </li>
        </ul>
        <p class="copyright">
          <a href="http://beian.miit.gov.cn/" class="flag_num">粤网文【2017】6138-1456号<span>粤B2-20090059</span></a
          ><a class="flag_num" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008569"
            >粤公网安备 44030502008569号</a
          >Copyright © 1998 - 2022 Tencent. All Rights Reserved. <br class="flag_m" />xfab 版权所有
        </p>
      </div>

      <a class="ten_totop ten_totop--float back_to_top ten_totop--float--show"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss"></style>
