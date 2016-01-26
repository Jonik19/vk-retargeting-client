/**
 * Settings for whole application
 */

export default {
  api: {
    baseUrl: 'http://10.10.54.19:8080'
  },
  validation: {
    password: {
      minlength: 6
    },
    username: {
      pattern: '[a-zA-Z0-9]+'
    }
  }
}