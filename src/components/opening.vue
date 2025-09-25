<script setup lang="ts">
import { divider } from "@/lib/image";
import { Button } from "./ui/button";
import { ref } from "vue";
import { motion } from "motion-v";

const isOpen = ref(true);
</script>

<template>
  <motion.section
    :class="`overflow-hidden fixed inset-0 w-full z-50 text-primary `"
    :animate="isOpen ? { y: '0%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(88px)' } : { y: '-100%', backgroundColor: 'rgba(0,0,0,0)', backdropFilter:'blur(0px)' }"
    :transition="{ type: 'spring' }"
  >
    <div
      class="bg-[#FEF8EA] rounded-b-full grid justify-center pt-40 pb-20 shadow-2xl/30 "
    >
      <img
        :src="divider"
        class="absolute -top-48 left-1/2 -translate-x-1/2 max-w-[500px]"
      />
      <div class="flex flex-col gap-16 text-center justify-center items-center">
        <p class="uppercase text-lg">you are invited to</p>
        <div class="">
          <p class="text-lg">THE WEDDING OF</p>
          <h2 class="text-6xl font-italiano">Luri & Reza</h2>
        </div>
        <Button
          class="bg-[#D2D27D] w-fit px-3 py-2 text-lg text-black rounded-3xl"
          v-on:click="isOpen = false"
        >
          BUKA UNDANGAN
        </Button>
      </div>
    </div>
  </motion.section>
</template>
