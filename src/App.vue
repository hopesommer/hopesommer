<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div id="app" ref="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar, 
  },
};
</script>
