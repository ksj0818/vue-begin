<template lang="ko">
  <div>
    {{data}}
    computed1 : {{computed1}}
   123123 {{count}}
  </div>
  <button @click="increse">증가</button>
  <button @click="decrement">감소</button>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
// useRoute : 데이터 받을때 params, query, useRouter : history
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ContactComp",
  setup() {
    const router = useRouter();
    const store = useStore();
    const increse = () => store.commit("increment", 3); // mutations를 실행하는 함수
    const decrement = () => store.commit("decrement"); // mutations를 실행하는 함수
    const count = computed(() => store.state.count);
    const data = ref("123");
    const { params } = useRoute();

    const computed1 = computed(() => {
      const a = "n";
      return a === "y" ? "사용" : "미사용";
    });
    console.log("count123123", count.value);

    watch(
      () => count.value, // useEffect에 [] 생각
      () => {
        if (count.value === 9) {
          router.push("/");
        }
        console.log("카운트가 변경될 때마다 출력 : ", count.value);
      }
    );

    console.log(params.id);
    return { data, computed1, count, increse, decrement };
  },
};
</script>
