<template>
  <HeaderBar />
  <n-scrollbar>
    <n-space vertical size="large">
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
          <n-alert title="Info" type="info" closable>
            欢迎来到Frp联盟链界面
          </n-alert>
          <br />
          <n-card title="关于Frp内网穿透联盟" size="medium">
            我们愿意与友商们共同改善与发展Frp行业环境，致力于集体友好合作协同发展。我们自发组织了Frp内网穿透联盟来维系业内友商的合作友好关系。<br />在这里，你可以看到加入Frp内网穿透联盟的相关友商，我们同时欢迎您尝试其他友商的服务。<br />如果您同样是相关行业从事者，也想要加入我们，请联系本站管理员了解关于我们的详情。
          </n-card>
          <br />
          <FriendList />
        </n-layout-content>
      </n-layout>
    </n-space>
  </n-scrollbar>
</template>

<script setup>
import FriendList from './components/FriendList.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<style scoped>

</style>
