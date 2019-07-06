<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';
import Header from '@/components/Header.vue';
import '../public/css/icon.css';
@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
}
</script>
<style>
p{
  margin: 0;
  padding: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flex{
  display: flex;
}



</style>
