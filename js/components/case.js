import avecTemplateHtml from '../utils/avecTemplateHtml.js'

Vue.component('case', avecTemplateHtml({
    template: 'components/case.html',
    props: ['caseActive'],
    data() {
        return {
            estActive: true,
        }
    },
    methods: {
        appliquerMvnt(index) {
            if(this.estActive) {
                this.$emit('casejouee', index)
                this.estActive = false                
            }
        },
    },
    mounted() {
        this.estActive = true
        this.$root.$on('resetActif', (estActive) => {
            this.estActive = estActive
        })
    }
}))