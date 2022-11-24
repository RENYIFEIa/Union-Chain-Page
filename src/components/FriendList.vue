<template>
    <n-grid cols="1 s:3 m:4 l:5 xl:6 2xl:7" :x-gap="8" :y-gap="8" responsive="screen" style="width:100%;height: 100%;">
        <n-gi v-for="item in Lists">
            <n-space style="display:block;">
                <a style="width: 100%; text-decoration: none;" :href="item.url" target="_blank">
                    <n-card :title="item.name" shadow="hover" :body-style="{ padding: '0 0 -5px 0' }" hoverable
                        size="small">
                        <p>
                            <n-avatar color="rgb(0,0,0,0.01)" :src="item.logo_url" :size="100" />
                            <br />{{ item.description }}
                            <br />官网地址： {{ item.url }}
                        </p>
                    </n-card>
                </a>
            </n-space>
        </n-gi>
    </n-grid>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const Lists = ref([])
axios({
  method:'get',
  url:'https://fastly.jsdelivr.net/gh/China-Frp-Union/cfu-list/list.json'
}).then((res)=>{

  Lists.value = res.data
})
console.log(Lists);


</script>