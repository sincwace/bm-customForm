import Axios from 'axios';
export default {
	data() {
		return {
			remoteData: []
		}
	},
	watch: {
		'data.setting': {
			handler(v) {
				if (v.isRemote) {
					this.getRemoteData();
				}
			},
			deep: true
		}
	},
	created() {
		if (this.data.setting.isRemote) {
			this.getRemoteData();
		}
	},
	methods: {
		getRemoteData() {
			if (this.data.setting.remoteUrl && this.data.setting.remoteDataProps.label && this.data.setting.remoteDataProps.value) {
				Axios.get(this.data.setting.remoteUrl).then(res => {
					if (res.status === 200) {
						if (this.data.setting.remoteDataPath) {
							this.remoteData = eval(`res.data.${this.data.setting.remoteDataPath}`);
						} else {
							this.remoteData = res.data;
						}
					} else {
						this.$message({
							type: 'warning',
							message: `status: ${res.status}, statusText: ${res.statusText}`
						});
					}
				}).catch(err => {
					this.$message({
						type: 'error',
						message: err
					});
				})
			}
		}
	}
}