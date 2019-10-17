<template>
  <f7-page name="page-electron">
  <f7-navbar title="Electron & Vue" back-link="Back"></f7-navbar>
  <f7-block-title>List View Accordion</f7-block-title>
  <f7-block>
  <f7-row>
    <f7-col>
      <f7-button v-on:click="notify" fill>Electron Notification</f7-button>
    </f7-col>
    <f7-col>
      <f7-button v-on:click="addCount" fill>AddCount <f7-badge color="red">{{ totalTvCount }}</f7-badge></f7-button>
    </f7-col>

  </f7-row>
</f7-block>

  </f7-page>
</template>

<script>
import { f7Button,f7Navbar,f7Icon,f7BlockTitle,f7Block,f7Row,f7Col,f7Page,f7Badge  } from 'framework7-vue';

  export default {
  components: {
        f7Button,f7Navbar,f7BlockTitle,f7Block,f7Icon,f7Row,f7Col,f7Page,f7Badge
    },
    computed: {
      totalTvCount () {
        return this.$store.state.totalTvCount
      }
    },
    methods: {
     notify: function (event) {
       this.$store.dispatch('notifyOS')
       //mapActions.notifyOS("this is mahen sharma")
     },
     addCount: function (event) {
       this.$store.dispatch('addition')
     }
   }
  }
</script>
