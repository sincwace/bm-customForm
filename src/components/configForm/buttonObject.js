import _ from 'lodash';
function buttonObject(options) {
  return _.merge({
    fieldId: '',
    name: '',
    label: '',
    value: '',
    /**
     * {
     *  'required': {required: true, message: '...', trigger: 'blur'},
     *  'minMax': {...}
     * }
     */
    // rules: {}, 
    makeStyle: {  //制作表单的时候，页面的样式控制
      active: false
    },
    style: {},    // 组件的样式
    setting: {},  // 组件的其他属性设置，比如：rows: 2
  }, options);
}
export default buttonObject;