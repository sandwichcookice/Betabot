import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
      client: null,
      commantactionmap: null,
      connection: null,
      year: null,
      month: null,
      day: null,
      hours: null,
      minutes: null,
      seconds: null,
      dayOfWeek: null,
      currentTimeStamp: null,
    }),
    getters: {},
    actions: {},
  })