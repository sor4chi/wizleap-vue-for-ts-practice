<template>
  <div>
    {{ members }}
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

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

    const fetchMembers = async () => {
      const response = await fetch(
        `https://wizleap-api-for-ts-practice.vercel.app/`
      );
      const json = await response.json();
      members.value = json;
    };

    onMounted(() => {
      fetchMembers();
    });

    return {
      members,
    };
  },
};
</script>
