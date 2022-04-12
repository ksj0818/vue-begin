<template>
  <header>
    <div class="header-menu">
      <ul class="container">
        <li v-for="route in menu" :key="route.id">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <h1>{{ data }}</h1>
    <button @click="changeData">change</button>
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

<style>
.container {
  width: 70%;
  margin: 0 auto;
}
.header-menu > ul {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}
.header-menu > ul > li {
}
</style>
