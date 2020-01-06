import Vue from 'vue';
/* purgecss start ignore */
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* purgecss end ignore */

config.autoAddCss = false;

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);