/**
 * Settings for whole application
 */

export default {
  api: {
    baseUrl: 'http://10.10.52.24:8080'
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