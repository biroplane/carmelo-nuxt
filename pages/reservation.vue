<template>
  <div class="container">
    <form
      class="w-full flex flex-col gap-8"
      name="contactus"
      @submit.prevent="onSubmit"
    >
      <div class="h-12"></div>
      <label for="date flex flex-col">
        <span class="text-sm pb-2 text-bold font-montserrat">Date</span>
        <client-only>
          <v-date-picker
            v-model="dateToday"
            is-dark
            mode="date"
            :masks="{
              title: 'YYYY',
              input: 'L',
            }"
            :min-date="new Date()"
            :max-date="maxDate"
          >
            <template #default="{ inputValue, inputEvents }">
              <input
                class="
                  px-2
                  py-1
                  border
                  rounded
                  bg-black
                  focus:outline-none focus:border-blue-300
                "
                :value="inputValue"
                v-on="inputEvents"
              />
            </template> </v-date-picker
        ></client-only>
      </label>
      <div class="lg:flex justify-between gap-12">
        <label for="time" class="text-sm w-full lg:w-45 flex flex-col">
          <span class="text-sm pb-2 text-bold font-montserrat">Time</span>
          <select
            v-model="time"
            type="text"
            name="time"
            class="w-full border-b border-black bg-transparent outline-none"
            placeholder="Time"
          >
            <option v-for="t in pickTime" :key="t" :value="t">
              {{ t }}
            </option>
          </select>
        </label>
        <label
          for="guest"
          class="text-sm w-full lg:w-45 flex flex-col pt-12 lg:pt-0"
        >
          <span class="text-sm pb-2 text-bold font-montserrat">Guest</span>
          <select
            v-model="guest"
            type="text"
            name="guest"
            class="border-b w-full border-black bg-transparent outline-none"
            placeholder="Guest"
          >
            <option v-for="g in 10" :key="g" :value="g">{{ g }} Ospiti</option>
          </select>
        </label>
      </div>
      <label for="info" class="text-sm">
        <span class="text-sm pb-2 text-bold font-montserrat">Info</span>
        <select
          v-model="room"
          class="border-b w-full border-black bg-transparent outline-none"
        >
          <option v-for="r in rooms" :key="r" :value="r" class="capitalize">
            {{ r }}
          </option>
        </select>
      </label>
      <label for="note" class="text-sm">
        <span class="text-sm pb-2 text-bold font-montserrat">Note</span>
        <input
          v-model="note"
          type="text"
          name="note"
          class="
            w-full
            border-b border-black
            bg-transparent
            outline-none
            text-lightgray
          "
          placeholder="Note"
        />
      </label>
      <label for="phone" class="text-sm">
        <span class="text-sm pb-2 text-bold font-montserrat">Phone</span>
        <input
          v-model="phone"
          type="text"
          name="phone"
          class="
            w-full
            border-b border-black
            bg-transparent
            outline-none
            text-lightgray
          "
          placeholder="+39"
        />
      </label>
      <div class="flex justify-start">
        <button class="py-3 px-8 bg-white text-black font-montserrat">
          Request Reservation
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Axios from 'axios'
import { DateTime } from 'luxon'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  props: {
    from: {
      type: String,
      default: () => {},
    },
  },
  data() {
    return {
      time: '9:00',
      guest: '2 People',
      rooms: ['interna', 'esterna'],
      room: '',
      note: '',
      phone: '',
      selected: '',
      pickTime: ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
      dateToday: new Date(),
      maxDate: DateTime.local().plus({ days: 7 }).endOf('week').toISO(),
    }
  },
  validations: {
    date: {
      required,
    },
  },
  methods: {
    async onSubmit() {
      try {
        const config = {
          method: 'POST',
          url: '.netlify/functions/reservation',
          headers: { accept: 'Accept: application/json' },
        }
        // const _res = await Axios({
        //   method: 'post',
        //   url: 'http://localhost:9999/.netlify/functions/reservation',
        //   data: {
        //     date: this.dateToday,
        //     time: this.time,
        //     guest: this.guest,
        //     room: this.room,
        //     note: this.note,
        //     phone: this.phone,
        //     from: this.from,
        //   },
        // })
        const _res = await Axios(config)
        console.log('Response ', _res)
      } catch (e) {
        console.log('Error ', e)
      }
    },
  },
}
</script>

<style scoped>
.date >>> input {
  outline: none;
  color: #d3d3d3;
}
select {
  color: #d3d3d3;
}
</style>
