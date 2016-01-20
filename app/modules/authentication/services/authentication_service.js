import Controller from '../../common/controllers/controller';

export default class AuthenticationService extends Controller {
  constructor() {
    super(arguments);

    this.user = null;
  }

  authenticate(data) {
    data = data || {};

    return this.injections.$http.post('http://localhost:3000/sign-in', data)
      .then(this.createUser.bind(this));
  }

  createUser(response) {
    this.user = response.data.response.user;
    this.token = response.data.response.token;

    return this.getUser();
  }

  getUser() {
    return JSON.parse(JSON.stringify(this.user));
  }
};

AuthenticationService.$inject = ['$http'];