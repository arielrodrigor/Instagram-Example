let Instagram = require('instagram-nodejs-without-api');

Instagram = new Instagram()

const { INST_USERNAME, INST_PASSWORD } = process.env;
  Instagram
    .getCsrfToken()
    .then((csrf) => {
      Instagram.csrfToken = csrf;
      }).then(() => {
        return Instagram
          .auth(INST_USERNAME, INST_PASSWORD)
          .then(sessionId => {
            Instagram.sessionId = sessionId
           
          })
    })
    .catch(console.error);

    module.exports = Instagram;