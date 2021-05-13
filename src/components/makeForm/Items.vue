<template>
	<div class="tpf-mf-layout--items">
		<div class="tpf-mf-layout--items--panel"
			 v-for="li in componentsList"
			 :key="li.label">
			<p v-text="li.label"
			   class="tpf-mf-layout--items--panel--label"></p>
			<draggable class="tpf-mf-layout--items--panel--list"
					   v-model="li.list"
					   :group="{ name: 'TpFormGroup', pull: 'clone', put: false }"
					   :clone="clone"
					   :sort="false"
					   animation="300">
				<div class="tpf-mf-layout--items--panel--list--li"
					 v-for="item in li.list"
					 :key="item.name"
					 v-text="item.label"></div>
			</draggable>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import _ from 'lodash'

export default {
	name: 'Items',
	components: { draggable },
	props: {
		componentsList: {
			type: Array,
			default: _ => []
		}
	},
	methods: {
		clone(obj) {
			const newObj = Object.assign(_.cloneDeep(obj), {
				fieldId: `${obj.name}_${new Date().getTime()}`,
				field: ''
			})
			return newObj
		}
	}
}
</script>