/*
 * @Author: Blake He
 * @Date: 2020-11-25 10:58:23
 * @Description:
 */

import { VNode, ComponentInternalInstance, HTMLAttributes } from 'vue'
import { RuleObject } from 'ant-design-vue/lib/form/interface'
import { FormProps, ValidationRule } from 'ant-design-vue/lib/form/Form'
import type FormItemProps from 'ant-design-vue/es/form/FormItem'
import type { ButtonType as AButtonType } from 'ant-design-vue/es/button/buttonTypes'

type Props = {
    [key in keyof HTMLAttributes & any]: any
}

type Rule = ValidationRule & {}

declare interface FormItem extends Partial<typeof FormItemProps> {
    type?:
    | 'input'
    | 'input-password'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'input-number'
    | 'element-input-number'
    | 'input-range'
    | 'switch'
    | 'component'
    | 'cascader'
    | 'department'
    | 'select-department'
    | 'select-district'
    | 'date-picker'
    | VNode
    label?: string // 表单标签
    field: string | Array<string> // 表单字段
    value: any // 表单默认值
    props?: Partial<HTMLAttributes | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any> // 表单属性
    rules?: Rule[] // 表单验证规则
    options?: OptionItem[] // 可选项
    // component?: Component; // 自定义组件
    // eslint-disable-next-line @typescript-eslint/ban-types
    eventObject?: object // 事件对象，例如：{ mousedown: doThis, mouseup: doThat } 将会动态绑定为：v-on="{ mousedown: doThis, mouseup: doThat }"
    loading?: boolean // 异步数据是否加载
    asyncValue?: (formItem: FormItem, formInstance: ComponentInternalInstance) => Promise<any> // 异步数据
    asyncOptions?: (formItem: FormItem, formInstance: ComponentInternalInstance) => Promise<any> // 异步选项的数据
    hidden?: boolean // 是否隐藏表单项
    placeholder?: string
    // [key: string]: any;
}

declare interface FormSchema extends Partial<typeof FormProps> {
    // eslint-disable-next-line @typescript-eslint/ban-types
    style?: object // 表单样式
    // eslint-disable-next-line @typescript-eslint/ban-types
    formItemLayout?: object // 表单布局
    watchKeys?: string[]
    watchCallback?: (watchKeys: string[], { dynamicForm, modelRef }) => any
    formItem: FormItem[]
    // [key: string]: any;
}

// declare interface Rules {
//     required?: boolean,
//     message?: string;
//     type?: 'number' | 'string' | 'array',  //表明是数字类型
//     validator?: (rule, value, callback) => Promise<any>,
//     [key: string]: any;
// }

declare interface OptionItem {
    label: string
    value: string | number
    [key: string]: any
}

declare interface IResponse {
    message: string
    code: number
    [T: string]: any
}

declare type ButtonType = AButtonType | 'warning' | 'success'
