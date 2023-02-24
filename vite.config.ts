import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 实现组件库或内部组件的自动按需引入组件
import components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver as antDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 解决 unplugin-vue-components 插件 加载UI库中无法处理的非组件模块
import usePluginImport from 'vite-plugin-importer'
// 使用Unocss
import unoCss from 'unocss/vite'
import presetUno from 'unocss/preset-uno'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        components({
            resolvers: [antDesignVueResolver({ importStyle: false })]
        }),
        usePluginImport({
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: (name: any) => `${name}/style/css`
        }),
        unoCss({
            presets: [presetUno()]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                // modifyVars: {
                //     // 在这里自定义主题色等样式
                //     'primary-color': '#1da57a',
                //     'link-color': '#1da57a',
                //     'border-radius-base': '2px'
                // },
                modifyVars: {
                    hack: `true; @import (reference) "${resolve('src/styles/Design/config.less')}";`
                },
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
