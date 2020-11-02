import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f44336',
        secondary: '#cddc39',
        accent: '#673ab7',
        error: '#e91e63',
        warning: '#ff9800',
        info: '#009688',
        success: '#4caf50'
      }
    }
  }
});