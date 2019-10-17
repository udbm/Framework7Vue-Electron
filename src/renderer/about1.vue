<template>
  <f7-page name="about" color-theme="orange">
  <f7-appbar bg-color="blue">
    <div class="left">
      <f7-icon icon="icon-back" color="white"></f7-icon>

    </div>

  </f7-appbar>
  <f7-list class="components-list searchbar-found">
     <f7-list-item link="/popup/" title="Accordion">
     dsdasdasdasd
     </f7-list-item>
     </f7-list>
 <f7-link href="/popup/">About Page</f7-link>
    <f7-button raised round fill >Round</f7-button>
  </f7-page>
</template>

<style>
@import '../css/framework7.bundle.css';
</style>
<script>
import { f7Button,f7Appbar,f7Icon,f7Card,f7Popup,f7Modal,f7Page,f7List,f7ListItem,f7Link } from 'framework7-vue';

  export default {
  components: {
        f7Button,f7Appbar,f7Icon,f7Card,f7Popup,f7List,f7ListItem,f7Page,f7Link
    }
  }
</script>
