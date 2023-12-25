<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">WELCOME</h1>
        <p class="fs-3"> <span class="text-danger">LOCDEV</span> on develop this site</p>
        <p class="lead">
          Let take a tour.
        </p>
        <router-link :to="{name:'tasks'}" class="btn btn-primary">Go to tasks</router-link>
      </div>
    </div>
  </div>
</template>