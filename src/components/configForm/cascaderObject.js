import _ from 'lodash'

function cascaderObject(options) {
    return _.merge({
        fieldId: '',
        name: '',
        field: '',
        label: '',
        multiple: false,
        placeholder: '请选择',
        value: options.multiple ? [] : '',
        rules: {},
        makeStyle: {  // 制作表单的时候，页面的样式控制
            active: false
        },
        style: {},  // 组件的样式
        setting: {}
    }, options)
}

export default cascaderObject