import Vue from 'vue'
class SwipeSlider {
  constructor(o) {
    // this.snap = {
    //   [0,-1,0.5],
    //   [0,0,0]
    // }
    this.pos = { start: {}, offset: {}, x: 0 }

    Object.assign(this, o)

    if (!this.swiperElement)
      throw new Error('issue: No valid swiperElement provided')
    this.backElement = this.swiperElement.querySelectorAll('.swipe-slider-back')
    this.frontElement = this.swiperElement.querySelector('.swipe-slider-front')

    this.swiperElement.addEventListener('mousedown', (e) => this.swipeStart(e))
    this.swiperElement.addEventListener('mouseup', (e) => this.swipeEnd(e))
    this.swiperElement.addEventListener('mouseleave', (e) => this.swipeEnd(e))
    this.swiperElement.addEventListener('mousemove', (e) => this.swipeMove(e))
    this.swiperElement.addEventListener('touchstart', (e) => this.swipeStart(e))
    this.swiperElement.addEventListener('touchend', (e) => this.swipeEnd(e))
    this.swiperElement.addEventListener('touchmove', (e) => this.swipeMove(e))
  }

  getSnap() {
    return this.snap !== '100%' ? this.snap : this.width()
  }

  canSnapToEnd() {
    const disttarget = this.getSnap() * (+this.snapPercentage || 0.5)
    const dist = this.getDistance()
    return dist < -disttarget && !this.pos.open
      ? true
      : dist > disttarget && this.pos.open
      ? false
      : this.pos.open
  }

  getDistance() {
    return this.pos.offset.x + this.pos.x - this.pos.start.x
  }

  width() {
    return this.swiperElement.getBoundingClientRect().width
  }

  swipeStart(e) {
    if (this.swiping) return
    this.swiping = true
    Object.assign(this.pos.start, getEventXY(e, this.swiperElement))
    this.pos.offset.x = this.pos.start.x - this.pos.x
    this.pos.open = this.pos.x !== 0
  }

  swipeEnd(e) {
    if (!this.swiping) return
    this.swiping = false
    if (this.canSnapToEnd()) this.pos.x = -this.getSnap()
    else this.pos.x = 0
    this.setPosition()
  }

  swipeMove(e) {
    if (!this.swiping) return
    e.preventDefault()
    const pos = getEventXY(e, this.swiperElement)
    this.pos.x = pos.x - this.pos.offset.x
    this.setPosition()
  }

  setPosition() {
    this.frontElement.style.transform = `translateX(${this.pos.x}px)`
    if (this.onupdate) this.onupdate(this)
  }
}
const getEventXY = (e, o) => {
  const p =
    e.type.substring(0, 5) !== 'touch'
      ? e
      : !e.touches.length
      ? e.changedTouches[0]
      : e.touches[0]
  const rect = (o || p.target).getBoundingClientRect()
  return { x: p.pageX - rect.left, y: p.pageY - rect.top }
}

Vue.directive('swipable', {
  bind: (el) => {
    el.classList.add('swipable')
    // eslint-disable-next-line no-new
    new SwipeSlider({ swiperElement: el, snap: '100%', snapPercentage: 0.3 })
  }
})
