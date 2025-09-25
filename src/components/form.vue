<script setup lang="ts">
import { formSchema, type FormSchema } from "@/type";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useLocalStorage } from "@vueuse/core";

const urlAction = import.meta.env.VITE_API_URL;

const data = useLocalStorage<FormSchema>('form-data', {
  name: '',
  family: '',
  absen: 'Hadir',
  wish: '',
})

const isSuccess = useLocalStorage('isSuccess', false)

const form = useForm({
  validationSchema: toTypedSchema(formSchema),
});


const onSubmit = form.handleSubmit((values, ctx) => {
  console.log(values);
  const form = ctx.evt?.target as HTMLFormElement;
  data.value = values

  form.submit();
  isSuccess.value = true
});
</script>

<template>
  <form
  class="bg-primary p-4 mt-4 rounded-md text-white space-y-6"
  @submit="onSubmit"
  :action="urlAction"
    target="hidden_iframe"
  >
    <FormField
      v-slot="{ componentField }"
      name="name"
      :validate-on-blur="!form.isFieldDirty"
    >
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input
            type="text"
            v-bind="componentField"
            placeholder="Full Name"
            name="entry.1498135098"
          />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="family"
      :validate-on-blur="!form.isFieldDirty"
    >
      <FormItem>
        <FormLabel>Family</FormLabel>
        <FormControl>
          <Input
            type="text"
            v-bind="componentField"
            placeholder="Family Of"
            name="entry.80544743"
          />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      type="radio"
      name="absen"
      :validate-on-blur="!form.isFieldDirty"      
    >
      <FormItem>
        <FormLabel>Absen</FormLabel>
        <FormControl>
          <RadioGroup v-bind="componentField">
            <FormItem class="flex items-center space-y-0 gap-x-3 ">
              <FormControl>
                <RadioGroupItem value="Hadir" class="data-[state=checked]:bg-[#FFF375] data-[state=checked]:border-[#FFF375] cursor-pointer"/>
              </FormControl>
              <FormLabel class="font-normal">Hadir</FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="Tidak Hadir" class="data-[state=checked]:bg-[#FFF375] data-[state=checked]:border-[#FFF375] cursor-pointer"/>
              </FormControl>
              <FormLabel class="font-normal">Maaf saya berhalangan hadir</FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <input
          type="hidden"
          name="entry.877086558"
          :value="componentField.modelValue"
        />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="wish"
      :validate-on-blur="!form.isFieldDirty"
    >
      <FormItem>
        <FormLabel>Your Wish</FormLabel>
        <FormControl>
          <Textarea
            type="text"
            v-bind="componentField"
            rows="4"
            class="resize-none"
            placeholder="Wish and prayers"
            name="entry.2606285"
          />
        </FormControl>
      </FormItem>
    </FormField>

    <Button type="submit" class="cursor-pointer bg-[#FFF375] text-primary hover:bg-[#c2b959]"
      >Submit</Button
    >
  </form>
</template>
