<template lang="ko">
  <div>
    {{data}}
  </div>
</template>

<script>
import { ref } from "vue";
// 데이터 받을때 params, query
import { useRoute } from "vue-router";

export default {
  name: "ContactComp",
  setup() {
    const data = ref("123");
    const { params } = useRoute();

    console.log(params.id);
    return { data };
  },
};
</script>
