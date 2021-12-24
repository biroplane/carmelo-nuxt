<template>
  <div class="w-full h-96 md:h-128">
    <div class="relative h-full">
      <div class="absolute left-0 top-0 w-full h-full">
        <img
          src="/img/navbar_bg_2.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
        <div
          class="absolute top-0 bg-gradient-to-t from-black h-full w-full"
        ></div>
      </div>
      <div class="w-full h-full flex items-center justify-center z-10 absolute">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
