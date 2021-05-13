export default {
  data() {
    return {
      required: this.data.rules.required ? this.data.rules.required.required : false
    }
  },
  watch: {
    required(v) {
      if (v) {
        this.$set(this.data.rules, 'required', {required: true, message: '不能为空', trigger: 'blur'});
      } else {
        this.$delete(this.data.rules, 'required');
      }
    }
  }
}