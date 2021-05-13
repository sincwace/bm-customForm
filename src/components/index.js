import MakeFormLayout from './makeForm'
import ShowForm from './showForm'

const components = [
	MakeFormLayout,
	ShowForm
]

export default {
	install(Vue) {
		components.forEach(component => {
			Vue.component(component.name, component)
		})
	}
}