

export default {
  login: body => new Promise(resolve => setTimeout(() => resolve(body), 2000)),
};
