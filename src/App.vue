<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ScalingSquaresSpinner  } from 'epic-spinners'
import {userLoadedState} from "@/stores/loading.js";
const isLoading = userLoadedState();
</script>

<template>
  <Navbar/>
  <div v-if="isLoading.state" class="loading-overlay">
    <scaling-squares-spinner
        :animation-duration="1250"
        :size="70"
        color="#0174f5"
    />
  </div>
  <router-view/>
  <Footer/>
</template>

<style scoped>
.loading-overlay{
  user-select:none;
  position:fixed;
  width:100%;
  height:100%;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:1;
  background: rgba(91, 90, 90, 0.5);
  display:flex;
  justify-content:center;
  align-items:center;
}
.atom-spinner{

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
