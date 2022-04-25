<template>
  <div>a</div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Members",
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup() {
    const members = ref([]);

    return {
      members,
    };
  },
};
</script>
