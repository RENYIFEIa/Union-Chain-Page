<template>
    <n-layout-header style="" bordered>
        <div class="navigation">
            <div class="siteName" :theme-overrides="{ common: { fontWeightStrong: '600' } }">
                <n-gradient-text type="info">
                    Frp内网穿透联盟
                </n-gradient-text>
            </div>
        </div>
    </n-layout-header>
</template>

<script setup>

</script>

<style>
.navigation {
    z-index: 99999;
    padding: 10px 16px;
    user-select: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation .siteName {
    letter-spacing: 2px;
    white-space: nowrap;
    margin: 8px;
    text-align: left;
    font-size: 20px;
}

.navigation .n-menu {
    justify-content: center;
    flex-grow: 1;
}
</style>