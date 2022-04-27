<template>
  <div>
    <MemberFindForm :findText="findText" @updateFindText="updateFindText" />
    <div v-for="member in filteredMembers" :key="member.id">
      <hr />
      <MemberCard :member="member" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, defineComponent, provide } from "vue";
import axios from "axios";

import { Member } from "types/Member";
import MemberCard from "@/components/MemberCard.vue";
import MemberFindForm from "@/components/MemberFindForm.vue";

export default defineComponent({
  name: "Members",
  components: {
    MemberCard,
    MemberFindForm,
  },
  setup() {
    const members = ref<Member[]>([]);
    const findText = ref("");
    provide("findText", findText);

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

    const updateFindText = (newFindText: string) => {
      findText.value = newFindText;
    };

    onMounted(() => {
      fetchMembers();
    });

    return {
      filteredMembers,
      findText,
      updateFindText,
    };
  },
});
</script>
