<script setup lang="ts">
import { Clock8, MapPin, Volume2, VolumeOff, Youtube } from "lucide-vue-next";
import Countdown from "./components/countdown.vue";
import {
  backsound,
  borederTitle,
  divider,
  flower,
  flower2,
  holdingHand,
  leaf,
  logo_wedding,
  Luri,
  poem,
  Prewed1,
  Prewed2,
  Prewed3,
  Prewed4,
  Prewed5,
  Prewed6,
  Prewed7,
  PrewedClose,
  Reza,
} from "./lib/image";
import Form from "./components/form.vue";
import Opening from "./components/opening.vue";
import { useLocalStorage } from "@vueuse/core";
import type { FormSchema } from "./type";
import { onMounted, ref } from "vue";

const imageArray = [
  Prewed1,
  Prewed2,
  Prewed3,
  Prewed4,
  Prewed5,
  Prewed6,
  Prewed7,
];

const data = useLocalStorage<FormSchema>("form-data", {
  name: "",
  family: "",
  absen: "Hadir",
  wish: "",
});

const isSuccess = useLocalStorage<boolean>('isSuccess', false);

const audioRef = ref<HTMLAudioElement | null>(null);
const isMuted = ref(false);

const toggleAudio = () => {
  if (!audioRef.value) return;
  isMuted.value = !isMuted.value;
  audioRef.value.muted = isMuted.value;
};

</script>

<template>
  <iframe name="hidden_iframe" style="display: none"></iframe>

  <main
    class="overflow-hidden bg-[url(/src/assets/background.jpg)] bg-center bg-contain grid justify-center"
  >
    <div class="max-w-[500px] relative">
      <Opening />

      <audio :src="backsound" ref="audioRef" autoplay loop></audio>

      <div
        class="rounded-full bg-primary p-4 text-white fixed bottom-8 right-8 cursor-pointer"
        :onclick="toggleAudio"
      >
        <VolumeOff v-if="isMuted" />
        <Volume2 v-else />
      </div>

      <section
        class="min-h-screen w-full flex justify-center items-center relative"
      >
        <img
          :src="flower"
          alt="flower"
          class="absolute -top-16 -right-36 -scale-y-[1] -rotate-90"
        />
        <img :src="flower" alt="flower" class="absolute -top-8 -left-44" />
        <img
          :src="leaf"
          alt="leaf"
          class="absolute -z-[1] right-2/5 -scale-x-[1]"
        />
        <img :src="leaf" alt="leaf" class="absolute -z-[1] left-2/5 top-1/3" />
        <div class="my-6">
          <img :src="logo_wedding" alt="logo wedding" />
        </div>
        <img
          :src="flower"
          alt="flower"
          class="absolute -bottom-20 -right-36 -scale-y-[1] -rotate-90"
        />
        <img :src="flower" alt="flower" class="absolute -bottom-20 -left-44" />
      </section>
      <section class="my-20">
        <div class="grid gap-4 justify-center">
          <div class="text-center">
            <h2 class="text-xl">THE WEDDING OF</h2>
            <h1 class="text-6xl font-italiano">Luri & Reza</h1>
          </div>
          <img :src="holdingHand" alt="logo wedding" />
        </div>
      </section>

      <section class="my-20 flex flex-col items-center justify-center relative">
        <img :src="flower" alt="flower" class="absolute left-1/2 -z-[1]" />
        <img :src="poem" alt="poem" class="max-w-96" />
        <div
          class="w-[247px] grid gap-4 text-center absolute left-1/2 -translate-x-1/2"
        >
          <p class="text-lg font-italiano">
            “Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan
            ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi
            satu daging. Demikianlah mereka bukan lagi dua, melainkan satu.
            Karena itu, apa yang telah dipersatukan Allah, tidak boleh
            diceraikan manusia.”
          </p>
          <h2 class="text-lg">MATIUS 19 : 5-6</h2>
        </div>
      </section>

      <section class="my-20 flex items-center justify-center relative">
        <div class="p-6 bg-[#FBEDD9] rounded-[50%]">
          <div class="p-6 bg-[#EFDAB9] rounded-[50%]">
            <div class="px-12 py-10 bg-primary rounded-[50%] inset-8">
              <div class="flex text-white items-center">
                <div class="flex flex-col">
                  <h2 class="text-6xl font-italiano leading-none">Bride</h2>
                  <h2 class="text-4xl">Groom</h2>
                </div>
                <h2 class="font-italiano text-[110px] leading-none">&</h2>
              </div>
            </div>
          </div>
        </div>
        <img :src="flower" alt="flower" class="absolute -right-44 -z-[1]" />
        <img :src="flower" alt="flower" class="absolute -left-44 -z-[1]" />
      </section>

      <section class="my-20 flex flex-col items-center justify-center">
        <img :src="Luri" alt="Karen H Luri Audreynia" />
        <div class="grid gap-16 mt-[10px] text-center relative">
          <img
            :src="borederTitle"
            alt="border-title"
            class="absolute -top-13"
          />
          <h1 class="text-4xl font-italiano">Karen H Luri Audreynia</h1>
          <div class="grid gap-2 text-xl">
            <p>PUTRI PERTAMA DARI</p>
            <p>BAPAK ARIANTO</p>
            <p>&</p>
            <p>IBU ALUN FEBRIATI</p>
          </div>
        </div>
      </section>

      <section class="my-20 flex flex-col items-center justify-center">
        <img :src="Reza" alt="Reza Iqbal Suhada" />
        <div class="w-[316px] grid gap-16 mt-[10px] text-center relative">
          <img
            :src="borederTitle"
            alt="border-title"
            class="absolute -top-13"
          />
          <h1 class="text-4xl font-italiano">Reza Iqbal Suhada</h1>
          <div class="grid gap-2 text-xl">
            <p>PUTRA TUNGGAL DARI</p>
            <p>BAPAK JONI SUPRIYANTO</p>
            <p>&</p>
            <p>IBU SIHELEN TIEN SOEPARTINI</p>
          </div>
        </div>
      </section>

      <section class="my-20 flex flex-col items-center justify-center relative">
        <img :src="divider" alt="flower" class="" />
        <div class="text-center text-4xl">
          <p>SAVE</p>
          <p>THE</p>
          <p>DATE</p>
        </div>
        <img :src="divider" alt="flower" class="" />
      </section>

      <section class="my-20 text-center grid gap-4">
        <Countdown />
      </section>

      <section class="my-20 px-4">
        <div
          class="bg-[#EDD5B0] rounded-full inset-shadow-sm inset-shadow-black/25 grid justify-center px-5 py-8 text-center gap-4"
        >
          <img :src="flower2" alt="flower" class="w-full px-8" />
          <h1 class="font-italiano text-4xl">Pemberkatan Nikah</h1>
          <div
            class="bg-primary text-white px-5 py-2 rounded-xl text-xl md:px-10"
          >
            SABTU, 25 OKTOBER 2025
          </div>
          <div class="grid gap-2">
            <div class="flex gap-2">
              <div class="w-8">
                <MapPin class="w-8" />
              </div>
              <p class="text-left">
                Gereja Isa Almasih Kalibanteng Jl. Taman Sri Rejeki RT. 07 RW 11
                Semarang Barat
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <div class="w-8">
                <Clock8 class="w-8" />
              </div>
              <p class="text-left">08:00 WIB</p>
            </div>
          </div>
          <iframe
            class="aspect-square w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1524025164626!2d110.38078827510202!3d-6.9913239930097175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b43f143c9e1%3A0x226f4704adab9182!2sGereja%20Isa%20Almasih%20Kalibanteng!5e0!3m2!1sid!2sid!4v1758437894604!5m2!1sid!2sid"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            class="relative flex items-center before:content-[''] before:flex-1 before:h-px before:bg-primary after:content-[''] after:flex-1 after:h-px after:bg-primary my-4"
          >
            <div class="mx-8 size-3 rounded-full bg-primary" />
          </div>

          <img :src="flower2" alt="flower" class="w-full px-8" />
          <h1 class="font-italiano text-4xl">Wedding Reception</h1>
          <div class="bg-primary text-white px-5 py-2 rounded-xl text-xl">
            SABTU, 25 OKTOBER 2025
          </div>
          <div class="grid gap-2">
            <div class="flex gap-2">
              <div class="w-8">
                <MapPin class="w-8" />
              </div>
              <p class="text-left">JL. GEDONG SONGO DLM RT 6/ RW 1</p>
            </div>
            <div class="flex gap-2 items-center">
              <div class="w-8">
                <Clock8 class="w-8" />
              </div>
              <p class="text-left">12:00 WIB</p>
            </div>
          </div>
          <iframe
            class="aspect-square w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.0675613552717!2d110.38561837499728!3d-7.001326492999903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDAnMDQuOCJTIDExMMKwMjMnMTcuNSJF!5e0!3m2!1sen!2sid!4v1758581052608!5m2!1sen!2sid"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            class="rounded-full bg-[#662E1F] py-20 text-white px-8 flex flex-col gap-12 items-center"
          >
            <div>
              <h1 class="text-4xl font-italiano">Live Streaming</h1>
              <h2 class="text-2xl">Coming Soon</h2>
            </div>

            <a
            href="https://youtube.com/@giakalibanteng?si=xjBO-0xthSBVOeL5"
              class="bg-[#D9D9D9] rounded-full px-4 py-2 flex text-lg text-primary items-center gap-4 w-fit"
            >
              <Youtube />
              <span>GIA KALIBANTENG YT ACC</span>
            </a>

            <p class="text-lg">
              Live streaming will appear on this account on October 25th at 8 am
            </p>
          </div>
        </div>
      </section>

      <img :src="divider" alt="flower" class="" />

      <section class="my-20 px-4">
        <div class="bg-gradient-to-b from-[#662E1F] to-[#EDD5B0] pt-4">
          <div class="content-[''] h-px w-1/2 bg-white" />
          <h1 class="font-italiano text-6xl text-white text-right p-4">
            Our Gallery
          </h1>
          <div class="p-8 grid gap-5 pt-0">
            <img v-for="img in imageArray" :src="img" :alt="img" />
          </div>
        </div>
      </section>

      <section class="mx-4">
        <div
          class="relative flex items-center before:content-[''] before:flex-1 before:h-px before:bg-primary after:content-[''] after:flex-1 after:h-px after:bg-primary my-4"
        >
          <div class="mx-8 size-3 rounded-full bg-primary" />
        </div>
      </section>

      <section class="my-20 px-4">
        <div class="grid gap-2 text-center">
          <h1 class="font-italiano text-6xl">RSVP</h1>
          <p class="text-xl">
            {{
              isSuccess
                ? "THANK YOU FOR YOUR RESPONSE"
                : "PLEASE CONFIRM YOUR ATTENDANCE"
            }}
          </p>
        </div>

        <div
          class="bg-primary p-4 mt-4 rounded-md text-white space-y-6 text-lg"
          v-if="isSuccess"
        >
          <div class="grid grid-cols-2">
            <span class="font-bold">Nama</span>
            <span class="">: {{ data.name }}</span>
          </div>
          <div class="grid grid-cols-2">
            <span class="font-bold">Keluarga</span>
            <span class="">: {{ data.family }}</span>
          </div>
          <div class="grid grid-cols-2">
            <span class="font-bold">Kehadiran</span>
            <span class="">: {{ data.absen }}</span>
          </div>
          <div class="grid grid-cols-2" v-if="data.wish !== ''">
            <span class="font-bold">Doa</span>
            <span class="">: {{ data.wish }}</span>
          </div>
        </div>

        <Form v-else />
      </section>

      <section class="mx-4">
        <div
          class="relative flex items-center before:content-[''] before:flex-1 before:h-px before:bg-primary after:content-[''] after:flex-1 after:h-px after:bg-primary my-4"
        >
          <div class="mx-8 size-3 rounded-full bg-primary" />
        </div>
      </section>

      <section class="my-20 px-4 flex justify-center items-center">
        <div class="relative w-[314px]">
          <img :src="PrewedClose" alt="prewed 8" class="grayscale-100" />
          <p
            class="absolute uppercase text-center text-sm w-[250px] top-12 left-1/2 -translate-x-1/2"
          >
            Suatu kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i
            dapat hadir dan memberikan berkat pada hari kebahagiaan kami.. Tuhan Yesus Memberkati
          </p>
        </div>
      </section>
    </div>
  </main>
</template>
