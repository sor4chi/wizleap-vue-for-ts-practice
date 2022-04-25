<template>
  <p>
    {{ member.name }}
  </p>
  <p>
    {{ member.age }}
  </p>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { Member } from "types/Member";

export default defineComponent({
  name: "Members",
  props: {
    member: {
      type: Object as PropType<Member>,
      required: true,
    },
  },
});
</script>
