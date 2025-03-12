import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCaretUp, faDatabase, faEnvelope, faHouse, faLightbulb, faPassport, faPhone, faUser,  } from '@fortawesome/free-solid-svg-icons'
import { faLaravel, faVuejs, faReact, faHtml5, faCss3Alt, faJs, faPhp, faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSun,faMoon } from '@fortawesome/free-regular-svg-icons'
library.add(faHouse, faLightbulb,faCaretUp,faLaravel,faFacebookSquare,faVuejs,faReact,faHtml5,faCss3Alt,faJs,faPhp,faDatabase,faBars,faPassport,faPhone,faSun,faMoon,faUser,faEnvelope,faInstagramSquare,faGithubSquare,faLinkedin
)

/* add icons to the library */
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
