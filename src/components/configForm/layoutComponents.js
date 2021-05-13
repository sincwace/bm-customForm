import { linkObject, dividerObject, layoutObject } from './layoutObject';

export default [
	linkObject({
		setting: {
			disabled: false,
			type: 'primary',
			underline: true,
			href: '',
			icon: '',
			target: "_blank",
			text: '这里是链接文本'
		}
	}),
	// dividerObject({
	// 	setting: {
	// 		direction: 'horizontal',
	// 		contentPosition: 'center',
	// 		content: '这里是分割线',
	// 		icon: ''
	// 	}
	// }),
	layoutObject({
		setting: {
			gutter: 0,
			col: 1,
			colList: [undefined]
		}
	})
]