import Vue from 'vue'
export default new Vue({
    methods: {
        selecionarUsuario(usuario) {
            this.$emit('selecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            this.$on('selecionado', callback)
        }
    }
})