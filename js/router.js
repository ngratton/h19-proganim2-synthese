import splash from './components/splash.js'
import jeu from './components/jeu.js'
import victoire from './components/victoire.js'

/**
 * Chaque route est défini par un object literal
 *  - La clé path représente l'url
 *  - La clé component doit être un object literal de component 
 *         Ce qui irait habituellement dans Vue.component('nom', _____)
 */
export default new VueRouter({
    routes: [
        { 
            path: '/',
            component: splash,
            name: 'splash'
        },
        {
            path: '/jeu',
            component: jeu,
            name: 'jeu'
        },
        { 
            path: '/victoire/:g',
            component: victoire,
            name: 'victoire'
        }
    ]
})