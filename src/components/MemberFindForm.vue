<template>
  <input type="text" v-model="findTextLocal" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "MemberFindForm",
  props: {
    findText: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const findTextLocal = ref(props.findText);

    watch(findTextLocal, () => {
      emit("updateFindText", findTextLocal.value);
    });

    return {
      findTextLocal,
    };
  },
});
</script>
