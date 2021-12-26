<template>
  <div class="container">
    <div class="h-20"></div>
    <h1 class="text-3xl font-bold mb-4">Richiesta di prenotazione</h1>
    <p class="mb-4">Compila il form per richiedere la tua prenotazione.</p>
    <h3 class="font-semibold mb-4">🚨Attenzione!🚨</h3>
    <p class="text-xs text-gray-600">
      L'invio del form non garantisce automaticamente la conferma della
      prenotazione. Attendi la mail di conferma
    </p>
    <form class="mt-12" @submit.prevent="onSubmit">
      <div class="mb-4">
        <label> Nome e cognome </label>
        <input v-model="form.name" type="text" placeholder="Mario Rossi" />
      </div>
      <div class="mb-4">
        <label> Email </label>
        <input
          v-model="form.email"
          type="email"
          placeholder="m.rossi@email.it"
        />
      </div>
      <div class="mb-4">
        <label>Data </label>
        <client-only>
          <v-date-picker
            v-model="form.date"
            is-dark
            mode="date"
            lang="it"
            :model-config="{
              type: 'string',
              mask: 'YYYY-MM-DD', // Uses 'iso' if missing
            }"
            :min-date="new Date()"
            :max-date="maxDate"
            :disabled-dates="{ weekdays: [2] }"
          >
            <template #default="{ inputValue, inputEvents }">
              <input
                class="
                  px-2
                  py-1
                  border-b
                  w-full
                  rounded
                  bg-black
                  focus:outline-none focus:border-blue-300
                "
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
        </client-only>
        <!-- <input v-model="form.date" type="date" placeholder="01/07/2015" /> -->
      </div>
      <div class="mb-4">
        <label>Orario </label>
        <select v-model="form.time">
          <option v-for="t in pickTime" :key="t" :value="t">
            {{ t }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label>Sala </label>
        <select v-model="form.sala">
          <option v-for="r in rooms" :key="r" :value="r">
            {{ r }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label>Ospiti </label>
        <select v-model="form.guests">
          <option v-for="g in 10" :key="g" :value="g">
            {{ g }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label>Telefono / WhatsApp </label>
        <input v-model="form.phone" type="tel" placeholder="" />
      </div>
      <div class="mb-4">
        <label>Note </label>
        <textarea
          v-model="form.note"
          placeholder="Serve un seggiolone? Allergie? Allergie ai seggioloni? scrivilo qui"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="$v.$invalid"
        class="
          block-shadow
          py-3
          px-8
          text-primary-600
          font-montserrat
          uppercase
          w-full
        "
      >
        Invia
      </button>
    </form>
  </div>
</template>

<script>
import Airtable from 'airtable'
import { DateTime } from 'luxon'
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  props: {
    from: {
      type: String,
      default: () => {},
    },
  },
  data: () => ({
    rooms: ['interna', 'esterna'],
    pickTime: ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
    maxDate: DateTime.local().plus({ days: 30 }).endOf('week').toISO(),
    dateToday: new Date(),
    airtable: new Airtable({
      apiKey: process.env.AIRTABLE_API,
    }).base(process.env.AIRTABLE_BASE_ID),
    form: {
      date: DateTime.local().toISODate(),
      name: '',
      time: '',
      guests: '',
      sala: '',
      note: '',
      phone: '',
      email: '',
    },
  }),

  validations: {
    form: {
      time: { required },
      guests: { required },
      sala: { required },
      phone: { required },
      email: { required, email },
    },
  },

  methods: {
    onSubmit() {
      try {
        const _d = [{ fields: { ...this.form } }]

        this.airtable('reservation').create(_d, (err, rec) => {
          if (err) {
            this.$router.push('/prenota/error')
          }

          this.$router.push('/prenota/success')
        })
        // console.log('Response ', _res)
      } catch (e) {
        console.log('Error ', e)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
input,
select,
textarea {
  @apply shadow border-b bg-transparent text-white rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none;
}
label {
  @apply text-sm font-bold text-gray-600;
}
button:disabled {
  @apply opacity-60 cursor-not-allowed;
}
</style>
