<template>
    <ConfigProvider :locale="zhCN">
        <AppProvider>
            <RouterView #="{ Component }">
                <component :is="Component" />
            </RouterView>
        </AppProvider>
    </ConfigProvider>
</template>
<script setup lang="ts">
    import { ConfigProvider } from 'ant-design-vue'
    import { AppProvider } from '@/components/Application'
    import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>
