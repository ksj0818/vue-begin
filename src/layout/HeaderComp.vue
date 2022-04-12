<template>
  <header>
    <div v-for="route in menu" :key="route.id">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
    <h1>{{ data }}</h1>
    <button @click="changeData">change4</button>
  </header>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import { routes } from "../router/index";
export default {
  name: "HeaderComp",
  setup() {
    const menu = ref(routes);
    const data = ref("1");

    onMounted(() => {
      console.log("mount!");
    });

    watch(
      () => data.value,
      () => {
        console.log("data change!");
      }
    );

    const changeData = () => {
      data.value = 123;
    };

    return { menu, data, changeData };
  },
};
</script>
