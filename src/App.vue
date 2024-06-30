<template>
  <HeaderBar />
  <n-scrollbar>
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
          <n-space vertical size="large">
            <n-alert title="你好！" type="info" closable>
              欢迎来到万江备案联盟，这些内容排名<b>按提案号分布</b>，欢迎了解里面的优质网站。
            </n-alert>
            <n-card title="关于万江备案联盟（Hong Kong Wanjiang Filing Union）" size="medium">
              我们愿意与各位站长们共同改善与发展互联网信息行业环境，致力于集体友好合作协同发展。我们（霏霏哥哥工作室）自发组织了万江备案联盟来维系业内友商的合作友好关系。<br />在这里，你可以看到加入万江备案联盟计划的相关网站，我们同时欢迎您查看这些优质网站。<br />如果您同样是相关行业从事者，也想要加入我们，请联系本站管理员了解关于我们的详情。
              <br/><br/>什么是 HKWJFU？<br/>HKWJFU 即 Hong Kong Wanjiang Filing Union（或亦称 China Tianjin FeiFeiGeGe Studio WanJiang Website Admin Department既 FFGGWJ-TWJWAD ），是由霏霏哥哥工作室自发组织的合作互助联盟。
            </n-card>
            <FriendList />
          </n-space>
        </n-layout-content>
      </n-layout>
  </n-scrollbar>
</template>

<script setup>
import FriendList from './components/FriendList.vue'
import HeaderBar from './components/HeaderBar.vue'
import { NScrollbar, NSpace, NLayout, NLayoutContent, NCard, NAlert } from 'naive-ui'
</script>
