import Vuex from 'vuex'
import Vue from 'vue'
const notifier = require('node-notifier')
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    totalTvCount: 10 // store demo var
  },

  getters: {

  },

  mutations: {
    NOTIFY_OS: (state, message) => {        // Add this:
      notifier.notify ({
          appName: "com.framework7.electronvue",
           title: 'My awesome title',
           message: message,
           sound: true,  // Only Notification Center or Windows Toasters
           wait: false    // Wait with callback, until user action is taken
        }, function (err, response) {
           // Response is response from notification
        });
    },
    ADD_COUNTER:(state)=>{
      state.totalTvCount++;
    }
  },

  actions: {
    notifyOS: (context, message) => {
      context.commit("NOTIFY_OS", message)
    },
    addition:(context)=>{
      context.commit("ADD_COUNTER")
    }
  }
});
