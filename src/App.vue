<template>
  <HeaderBar />
  <n-scrollbar>
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
          <n-space vertical size="large">
            <n-alert title="你好！" type="info" closable>
              欢迎来到Frp联盟链界面，这些内容排名<b>不分先后</b>，欢迎尝试其他友商。
            </n-alert>
            <n-card title="关于Frp内网穿透联盟（China Frp Union）" size="medium">
              我们愿意与友商们共同改善与发展Frp行业环境，致力于集体友好合作协同发展。我们自发组织了Frp内网穿透联盟来维系业内友商的合作友好关系。<br />在这里，你可以看到加入Frp内网穿透联盟的相关友商，我们同时欢迎您尝试其他友商的服务。<br />如果您同样是相关行业从事者，也想要加入我们，请联系本站管理员了解关于我们的详情。
              <br/><br/>什么是 CFU？<br/>CFU 即 China Frp Union（或亦称 China Intranet Penetration Union 既 CIPU ），是由国内部分内网穿透运营商自发组织的合作互助联盟。
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
