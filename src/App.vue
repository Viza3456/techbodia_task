<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-layout {
  width: 100%;
  height: 100%;
}

.q-page-container {
  width: 100%;
  height: 100%;
}

.q-page {
  width: 100%;
  height: 100%;
}
</style>
