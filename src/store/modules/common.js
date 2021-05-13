const state = {
    formData: {
        project: {}
    }
}

const mutations = {
    SET_FORMDATA(state, data) {
        state.formData[data.key] = data.data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}