import _ from 'lodash'

function addressObject(options) {
    return _.merge({
        fieldId: '',
        name: '',
        field: '',
        label: '',
        multiple: false,
        placeholder: '请选择',
        showDetail: false,
        value: {
            province: {
                name: '北京市',
                value: '110000'
            },
            city: {
                name: '市辖区',
                parent: '110000',
                value: '110100'
            },
            area: {
                name: '东城区',
                parent: '110100',
                value: '110101'
            },
            detail: ''
        },
        rules: {},
        makeStyle: {  // 制作表单的时候，页面的样式控制
            active: false
        },
        style: {},  // 组件的样式
        setting: {}
    }, options)
}

export default addressObject