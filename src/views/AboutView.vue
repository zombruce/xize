<template>
    <section class="about">
        <h1>This is an about page</h1>
        <a-button type="primary" @click="showMessage">ant-design-btn</a-button>
    </section>
    <section class="mt-20" :class="prefixCls2">
        <h1>less 命名空间2</h1>
    </section>
</template>
<script setup lang="ts">
    import { useDesign } from '@/hooks/web/useDesign'
    import { message } from 'ant-design-vue'

    const { prefixCls } = useDesign('about')
    const { prefixCls: prefixCls2 } = useDesign('about-2')
    console.log(prefixCls, '-----prefixCls', 'prefixCls2:', prefixCls2)
    const showMessage = () => {
        message.info('This is a normal message')
    }
</script>
<style lang="less">
    @prefix-cls: ~'@{namespace}-about';
    .@{prefix-cls} {
        background: blue;
    }
    @prefix-cls-2: ~'@{namespace}-about-2';
    .@{prefix-cls-2} {
        background: yellow;
        height: 300px;
        border: 1px solid red;
    }
    .about {
        background: @primary-c;
    }
</style>
