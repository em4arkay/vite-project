<template>
  <div class="flex w-full min-h-screen font-sans bg-gray-100">
    <SideBar />
    <router-view></router-view>
    <main class="flex flex-col flex-1 gap-3 p-4">
      <header>
        <h1 class="text-3xl font-semibold leading-loose text-gray-700">Application Form</h1>
      </header>
      <hr class="border-blue-900">
      <AppForm />
      <!-- <Table /> -->
    </main>
    <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
      <RightSideBar />
    </aside>
  </div>
</template>
<script setup>
  import SideBar from "./components/SideBar.vue";
  import RightSideBar from "./components/RightSideBar.vue";
  import AppForm from "./components/Form.vue"
  import Table from "./components/Table.vue";
</script>