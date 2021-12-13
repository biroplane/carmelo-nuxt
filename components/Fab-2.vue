<template>
  <div
    class="
      whatsapp
      fixed
      bottom-6
      right-6
      w-12
      h-12
      shadow-md
      flex
      items-center
      justify-center
      bg-green-500
      text-white text-2xl
      hover:bg-green-600
      rounded-full
      z-max
    "
    :class="{ open: isOpen }"
    tabindex="1"
    target="_blank"
    @blur="close(false)"
  >
    <button
      v-if="!isOpen"
      class="
        activator
        w-full
        h-full
        cursor-pointer
        rounded-full
        relative
        inset-0
      "
      @click="close(true)"
    >
      <i class="mdi mdi-whatsapp"></i>
    </button>
    <div class="textbox flex flex-col text-base">
      <div class="flex justify-between">
        <logo></logo>
        <button
          class="
            w-8
            h-8
            flex
            items-center
            justify-center
            boder-2
            border-red-500
            text-xl
          "
          @click="close"
        >
          <i class="mdi mdi-close text-black"></i>
        </button>
      </div>
      <textarea v-model="text"></textarea>

      <a :href="href" target="_blank" @click="close(false)">Invia</a>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo,
  },
  props: {
    // text: {
    //   type: String,
    //   default: 'Ciao Boycott',
    //   required: true,
    // },
  },
  data: () => ({
    text: 'Ciao Boycott',
    isOpen: false,
    selectedDate: new Date(),
    theme: {
      highlightStartEndClass: 'rounded-sm',
      wrapper: {
        backgroundColor: 'transparent',
      },
      container: {
        light: 'text-gray-700 font-light bg-transparent h-full',
      },
      weekdays: {
        light: 'text-sm font-bold text-gray-500',
        dark: 'text-sm font-bold text-{color}-200',
      },
      dayContent:
        'font-medium text-sm cursor-pointer focus:font-bold rounded-sm h-64',
      dayContentHeight: 'h-64',
      title: {
        light: 'capitalize text-primary-500 font-light font-body',
      },
      navCellActive: {
        light: 'bg-primary-500',
      },
    },
  }),
  computed: {
    href() {
      const myText = encodeURI(this.selectedDate)
      console.log('Encoded ', myText)
      return `https://wa.me/${process.env.PHONE_NUMBER}?text=${encodeURI(
        myText
      )}`
    },
  },
  methods: {
    close(w) {
      console.log('close', w)
      this.isOpen = w
    },
  },
}
</script>

<style lang="postcss">
.whatsapp {
  transition: border 0.2s ease-in-out, border-radius 0.2s ease-in-out 0.3s,
    width 0.2s ease-in-out 0.3s, background-color 0.2s ease-in-out 0.3s,
    height 0.2s ease-in-out 0.3s;
  border-radius: 100% / 100%;
  @apply focus-within:bg-red-500;

  .textbox {
    opacity: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    position: absolute;
    transition: position 0.1s ease-in-out, opacity 0.2s ease-in-out 0.1s;
    textarea {
      flex-grow: 1;
    }
  }
  &.open {
    @apply border-4 border-green-500  text-black w-80 h-112;
    border-radius: 2% / 2%;

    i {
      display: none;
    }
    .textbox {
      opacity: 1;
      position: static;
      transition: opacity 0.2s ease-out 1s;
    }
  }
}
</style>
