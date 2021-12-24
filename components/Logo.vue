<template>
  <!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In  -->
  <nuxt-link to="/">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="109.7px"
      height="96.1px"
      viewBox="0 0 109.7 96.1"
      class="w-8 h-8"
      xml:space="preserve"
    >
      <defs></defs>
      <path
        class="st0"
        :class="[dark ? 'text-red-700' : 'text-primary-500']"
        d="M84.5,58.2C96,54.7,102.6,47,105,39.5c0.2-0.6-0.4-1.2-1-0.9c-3.8,1.8-5.8,1.8-8.1,1.5c-0.9-0.1-1.4-1.1-1-1.9
      C98.1,31.4,110.5,5,108.5,3C99.9-5.6,7.8,16.2,5.9,20.5s11.8,26.4,17.6,29.9c5.9,3.5,4.2-6.3,14.4-9.4c9.1-2.8,21.9,3,15.1,4.5
      c-4.4,1,8.7-11.5,17.2-11.5c10.6,0,14.7,7.1,21.5,8.3c0,0,0.9,0.4,3.7-0.1"
      />
      <path
        class="st0"
        :class="[dark ? 'text-red-700' : 'text-primary-500']"
        d="M39.4,72c0,0,10,22.8,17.7,23.1c3.3,0.1,13.3-15.5,24.1-34c0.5-0.9-0.2-2-1.2-1.9c-1.6,0.2-3.7,0.5-5.2,0.6
      c-16.5,1.9-22.2-5.3-19-5.1s-3.9,12.5-19.6,12.5c-15.3,0-24.6-6.7-27.2-9.5c-1.6-1.4-4.7,0.2-8,3.6"
      />
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss">
.st0 {
  @apply stroke-current;
  fill: none;

  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
