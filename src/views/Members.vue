<template>
  <div>
    <div v-for="member in filteredMembers" :key="member.id">
      <hr />
      <MemberCard :member="member" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from "vue";
import axios from "axios";

import { Member } from "types/Member";
import MemberCard from "@/components/MemberCard.vue";

export default {
  name: "Members",
  components: {
    MemberCard,
  },
  setup() {
    const members = ref<Member[]>([]);
    const findText = ref("");

    const filteredMembers = computed(() => {
      if (!findText.value) {
        return members.value;
      }
      return members.value.filter((member) => {
        return member.name.includes(findText.value);
      });
    });

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
      filteredMembers,
    };
  },
};
</script>
