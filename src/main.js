import Vue from 'vue'
import CButton from '../src/components/Button.vue'
//import '../src/assets/css/designsystemcore.css'
const Components = {
    CButton
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export {
    CButton
}

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false
// Vue.config.devtools = true

// new Vue({  
//   render: h => h(App),
// }).$mount('#app')
