var objpeople = [
    {
      username: "sam",
      password: "1234"
    },
    {
      username: "met",
      password: "1245"
    },
    {
      username: "tim",
      password: "2468"
    },
  ]

  function getInfo() {
    var username = ducument.getElementsByClassName('username').value
    var password = ducument.getElementsByClassName('password').value

    for (var i = 0; i < objpeople.length; i++) {
    if (username) == objpeople[i].username && password == objpeople[i].
      password) {
        console.log(username + " is logged in!!!")
      }
    }
  }
