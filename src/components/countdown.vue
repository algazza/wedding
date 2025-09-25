<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const targetDay = new Date("2025-10-25 00:08:00").getTime();

const countdown = ref({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

let intervalId: ReturnType<typeof setInterval>;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDay - now;

  if (distance < 0) {
    countdown.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    clearInterval(intervalId);
    return;
  }

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  countdown.value = {
    days: formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: formatNumber(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ),
    minutes: formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: formatNumber(Math.floor((distance % (1000 * 60)) / 1000)),
  };
};

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <span class="text-xl">SAVE THE DATE</span>
  <div class="font-italiano">
    <p class="text-3xl leading-none">Sabtu</p>
    <p class="text-6xl leading-none">25.10.25</p>
  </div>
  <div class="flex justify-center items-center text-3xl font-light gap-2">
    <div class="p-2 rounded-xl bg-primary text-white">{{ countdown.days }}</div>
    :
    <div class="p-2 rounded-xl bg-primary text-white">
      {{ countdown.hours }}
    </div>
    :
    <div class="p-2 rounded-xl bg-primary text-white">
      {{ countdown.minutes }}
    </div>
    :
    <div class="p-2 rounded-xl bg-primary text-white">
      {{ countdown.seconds }}
    </div>
  </div>
</template>
