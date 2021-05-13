import _ from 'lodash';
function linkObject(options) {
	return _.merge({
		name: 'Link',
		label: '链接',
		makeStyle: {  //制作表单的时候，页面的样式控制
			active: false
		},
		style: {},    // 组件的样式
		setting: {},  // 组件的其他属性设置，比如：rows: 2
	}, options);
}
function dividerObject(options) {
	return _.merge({
		name: 'Divider',
		label: '分割线',
		makeStyle: {  //制作表单的时候，页面的样式控制
			active: false
		},
		style: {
			hideLabel: true
		},
		setting: {}
	}, options);
}
function layoutObject(options) {
	return _.merge({
		name: 'Layout',
		label: '栅格布局',
		makeStyle: {
			active: false
		},
		style: {
			hideLabel: true
		},
		setting: {}
	}, options);
}

export {
	linkObject,
	dividerObject,
	layoutObject
};