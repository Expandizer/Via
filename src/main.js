import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faWheelchair} from '@fortawesome/free-solid-svg-icons'
import {faMale} from '@fortawesome/free-solid-svg-icons'
import {faChild} from '@fortawesome/free-solid-svg-icons'
import {faTrain} from '@fortawesome/free-solid-svg-icons'
import {faVirus} from '@fortawesome/free-solid-svg-icons'
import {faUserAlt} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faWaveSquare} from '@fortawesome/free-solid-svg-icons'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {faUserCog} from '@fortawesome/free-solid-svg-icons'
import {faCogs} from '@fortawesome/free-solid-svg-icons'
import {faBullseye} from '@fortawesome/free-solid-svg-icons'

import Compte from './components/Compte.vue'
import Body from './components/Body.vue'
import About_via from './components/About_via.vue'
import Account_creation from './components/Account_creation.vue'
import Covid from '/components/Covid.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {path: '/', component: Body},
  {path: '/Account', component: Compte },
  {path: '/About1', component: About_via },
  {path: '/Covid', component: Covid },
  {path: '/Create_account', component: Account_creation}
]

const router = new VueRouter({
  routes
})

library.add(faUserSecret)
library.add(faArrowRight)
library.add(faWheelchair)
library.add(faMale)
library.add(faChild)
library.add(faTrain)
library.add(faVirus)
library.add(faUserAlt)
library.add(faBars)
library.add(faArrowAltCircleUp)
library.add(faEye)
library.add(faMapMarkerAlt)
library.add(faWaveSquare)
library.add(faLightbulb)
library.add(faMapMarkedAlt)
library.add(faKey)
library.add(faClock)
library.add(faDesktop)
library.add(faUsers)
library.add(faStopwatch)
library.add(faThumbsUp)
library.add(faComments)
library.add(faUserCog)
library.add(faCogs)
library.add(faBullseye)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue);




new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
