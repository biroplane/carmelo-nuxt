<template>
  <div id="app" class="pt-12 relative">
    <div class="h-24"></div>
    <div
      v-for="(mock, m) in mockSwipeList[0]"
      :key="m"
      v-swipable
      class="swipe-slide"
    >
      <div class="swipe-slider-front">drag me to the left</div>
      <div class="swipe-slider-back">
        <button>Add</button>
        <button>Rem</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      enabled: true,
      page: 0,
      revealed: {},
      lastEventDescription: '',
      mockSwipeList: [
        [
          {
            id: 'a',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
          {
            id: 'b',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
          {
            id: 'c',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
        ],
        [
          {
            id: 'd',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
          {
            id: 'e',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
          {
            id: 'f',
            title: 'Some title',
            description: 'some description',
            disabled: false,
          },
        ],
      ],
    }
  },
  mounted() {
    // ideally should be in some global handler/store
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    dd(v) {
      console.log(v.target)
    },
    revealFirstRight() {
      this.$refs.list.revealRight(0)
    },
    revealFirstLeft() {
      this.$refs.list.revealLeft(0)
    },
    closeFirst() {
      this.$refs.list.closeActions(0)
    },
    closeAll() {
      this.$refs.list.closeActions()
    },
    remove(item) {
      this.$set(
        this.mockSwipeList,
        this.page,
        this.mockSwipeList[this.page].filter((i) => i !== item)
      )
    },
    setLastEvent(name, { item, index }) {
      this.lastEventDescription = {
        name,
        index,
        id: item.id,
      }
    },
    itemClick(e) {
      console.log(e, 'item click')
    },
    fbClick(e) {
      console.log(e, 'First Button Click')
    },
    sbClick(e) {
      console.log(e, 'Second Button Click')
    },
    // keyboard
    onKeyDown(e) {
      if (e.keyCode !== 16) return
      this.enabled = false
    },
    onKeyUp(e) {
      if (e.keyCode !== 16) return
      this.enabled = true
    },
  },
}
</script>
<style>
/* Recommended Styles */
.swipe-slider {
  position: relative;
  overflow: hidden;
  border: 2px solid blue;
  width: 100%;
  height: 100%;
}
.swipe-slider-back {
  position: relative;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  background-color: coral;
}
.swipe-slider-front {
  position: absolute;

  width: 100%;
  height: 100px;
  z-index: 2;
}

/* Not required styles */
.swipe-slider {
  width: 100%;
  height: 3em !important;
  margin: 1em 0;
  background-color: #888;
}
.swipe-slider-front {
  border: 1px solid darkred;
  padding-right: 1em;
  background-color: rgb(0, 255, 34);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
}

/* 
.swipe-slider-back button {
  background-color: #eee;
  border: 1px solid #ccc;
  text-align: center;
  font-size: inherit;
  font-family: inherit;
  width: 80px;
}
.swipe-slider-back button:focus {
  outline: 0;
  border-color: blue;
} */
</style>
