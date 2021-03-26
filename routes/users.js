var express = require('express');
var router = express.Router();

const currentUserImpl = "User2";

class User1 {
  constructor() {}

  get() {
    return 'user1';
  }
}

class User2 {
  constructor() {}

  get() {
    return 'user2';
  }
}

// interface userHandler {
//   get()
// }

// ideally: getUserHandler() userHandler 
// so the returned class should implement the userHandler
// Typescript required
function getUserHandler() {
  if (currentUserImpl == "User1") {
    return User1;
  }
  return User2;
}



/* GET users listing. */
router.get('/', function(req, res, next) {
  let u = getUserHandler();
  res.send(new u().get());
});

module.exports = router;
