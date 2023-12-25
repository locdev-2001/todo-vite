<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand" :to="{name:'home'}"><button type="button" class="btn btn-lg">ToDoe<strong>List</strong></button></router-link>
        <router-link class="nav-link" :to="{name : 'tasks'}"><button type="button" class="btn">Tasks</button></router-link>
        <router-link class="nav-link" :to="{name : 'summary'}"><button type="button" class="btn">Summary</button></router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'summary'}"><button type="button" class="btn btn-success">Summary</button></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'login'}"><button type="button" class="btn btn-primary">Login</button></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'register'}"><button type="button" class="btn btn-light">Register</button></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>

</script>
<style scoped>
</style>