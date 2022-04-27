<template>
  <input type="text" v-model="findText" />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "MemberFindForm",
  setup() {
    const findText = inject<string>("findText");

    return {
      findText,
    };
  },
});
</script>
