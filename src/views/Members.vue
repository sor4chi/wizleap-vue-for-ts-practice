<template>
  <div>
    <div v-for="member in members" :key="member.id">
      <p>
        {{ member.name }}
      </p>
      <p>
        {{ member.age }}
      </p>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Member {
  id: number;
  name: string;
  lastname: string;
  age: number;
}

export default {
  name: "Members",
  props: {
    user: {
      type: String,
      required: true,
    },
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
};
</script>
