import CustomTableVxe from './src/components/customTable-vxe'
import DesignTableVxe from './src/components/designTable-vxe'

const bmCustomTableVxe = {
    install(Vue, options) {
        Vue.component(CustomTableVxe.name, CustomTableVxe)
        Vue.component(DesignTableVxe.name, DesignTableVxe)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(bmCustomTableVxe)
}

export default bmCustomTableVxe