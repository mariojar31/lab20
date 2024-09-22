const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //Task2

  test('add user to userController', () => {    
    let user = new User(4321,"Mario", "mario@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

  test('remove user to userController', () => {    
    let user = new User(1121,"Mario", "mario@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('search user by email',()=>{
    let user = new User(4321,"Mario", "mario@generation.org");
    
    expect(userController.findByEmail('mario@generation.org')).toEqual(user);

  });


test('search user by email',()=>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  
  expect(userController.findById(1234)).toEqual(user);

});
