import avecTemplateHtml from '../utils/avecTemplateHtml.js'
import './case.js'
import router from '../router.js'

export default avecTemplateHtml({
    template: 'components/jeu.html',
    data() {
        return {
            suite: ['','','','','','','','',''],
            joueurActuel: 'X',
            estActive: true,
            gagnant: ''
        }
    },

    methods: {
        updateJoueurs(index, joueurActuel) {
            this.suite[index] = joueurActuel
            this.joueurActuel = joueurActuel === 'X' ? 'O' : 'X'
        },
        reset() {
            this.suite = ['','','','','','','','','']
            this.joueurActuel = 'X'
            this.gagnant = ''
            this.$root.$emit('resetActif', this.estActive)
        },
        redirectGagnant(g) {
            router.push({ path: `victoire/${g}` })
        }
    },
    updated() {
        // Teste l'une des 8 combinaisons gagnantes après chaque tour joué.
        // Si l'une des combinaisons est vraie, déclara
        let j = this.joueurActuel === 'X' ? 'O' : 'X'
        let s = this.suite
        if (s[0] === j && s[1] === j && s[2] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[3] === j && s[4] === j && s[5] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[6] === j && s[7] === j && s[8] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[0] === j && s[3] === j && s[6] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[1] === j && s[4] === j && s[7] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[2] === j && s[5] === j && s[8] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[0] === j && s[4] === j && s[8] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if (s[2] === j && s[4] === j && s[6] === j) {
            this.gagnant = j
            this.redirectGagnant(j)
        }
        if(!s.includes('') && !this.gagnant) {
            this.gagnant = 'nul'
            this.redirectGagnant(this.gagnant)
        }
    }
})