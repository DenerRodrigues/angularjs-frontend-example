export default {
  domains: {
    development: ['localhost', '127.0.0.1'],
    production: ['ec2-54-71-222-77.us-west-2.compute.amazonaws.com', '54.71.222.77'],
  },
  vars: {
    development: {
      apiUrl: '//localhost:5000',
      baseUrl: 'http://localhost:3000',
    },
    production: {
      apiUrl: '//54.71.222.77:5000',
      baseUrl: 'http://54.71.222.77',
    },
  },
};
