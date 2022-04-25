<template>
  <div>
    <div v-for="member in members" :key="member.id">
      <MemberCard :member="member" />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

import { Member } from "types/Member";
import MemberCard from "@/components/MemberCard.vue";

export default defineComponent({
  name: "Members",
  components: {
    MemberCard,
  },
  setup() {
    const members = ref<Member[]>([]);

    const fetchMembers = async () => {
      const { data } = await axios.get<Member[]>(
        `https://wizleap-api-for-ts-practice.vercel.app/`
      );
      members.value = data;
    };

    onMounted(() => {
      fetchMembers();
    });

    return {
      members,
    };
  },
});
</script>
