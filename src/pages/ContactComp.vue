<template lang="ko">
  <div>
    {{data}}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ContactComp",
  setup() {
    const data = ref("123");

    return { data };
  },
};
</script>
