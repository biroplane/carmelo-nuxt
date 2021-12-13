import { DateTime } from 'luxon'
import Vue from 'vue'
const filters = {
  price: (v) => {
    if (!v) return 0
    return parseFloat(v).toFixed(2)
  },
  newLine: (v) => {
    if (!v) return ''
    return v.replace(/\n/g, '<br>')
  },

  monthYear: (v) => {
    const _date = DateTime.fromISO(v)
    return `${_date.monthLong} ${_date.year}`
  },
  startOfWeek: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.startOf('week').day
  },
  endOfWeek: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.endOf('week').day
  },
  dayOfWeek: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.day
  },
  monthOfWeek: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.monthLong
  },
  weekdayOfWeek: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.weekdayLong
  },
  localeDate: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.setLocale('it').toLocaleString(DateTime.DATE_FULL)
  },
  time: (v) => {
    const _date = DateTime.fromISO(v)
    return _date.toLocaleString(DateTime.TIME_24_SIMPLE)
  },
  money: (v) => {
    if (!v) return 0
    return parseFloat(v).toFixed(2)
  }
}

for (const [fName, filter] of Object.entries(filters)) {
  Vue.filter(fName, filter)
}
