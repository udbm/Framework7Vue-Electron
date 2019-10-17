<template>
<f7-app :params="f7params" class="framework7-root" :routes="routes">
  <f7-panel left cover resizable>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
   <f7-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="800" :push-state="true">
   </f7-view>
   <f7-panel right reveal resizable>
     <f7-view url="/panel-right/"></f7-view>
   </f7-panel>
 </f7-app>
</template>
<style>
  @import '../css/framework7.bundle.css';
  @import '../css/app.css';
</style>
<script>

import { f7App, f7Panel, f7View,f7Button,f7Page, f7Navbar,
f7ListButton,f7Checkbox,f7List,f7Icon,f7ListItem } from 'framework7-vue';

import routes from './routes.js';
export default {
components: {
      f7App,
      f7Panel,
      f7View,
      f7Button,
      f7Page,
      f7Navbar,
      f7ListButton,
      f7Checkbox,f7List,f7ListItem,f7Icon,

  },
data() {
   let theme = 'auto';

   if (document.location.search.indexOf('theme=') >= 0) {
        theme = document.location.search.split('theme=')[1].split('&')[0];
      }

    return {
      f7params: {
        name: 'My App',
        id: 'urtiqa.com', theme : 'md',
        pushState: false,
        popup: {
           closeOnEscape: true,
         },
         sheet: {
           closeOnEscape: true,
         },
         popover: {
           closeOnEscape: true,
         },
         actions: {
           closeOnEscape: true,
         },
      },
      routes:routes
    };
  }
};

</script>
