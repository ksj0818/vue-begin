<template>
  <HeaderComp />
  <MainComp />
  <FooterComp />
</template>

<script>
import HeaderComp from "./layout/HeaderComp";
import MainComp from "./layout/MainComp";
import FooterComp from "./layout/FooterComp";

export default {
  name: "App",
  components: { HeaderComp, MainComp, FooterComp },
};
</script>
