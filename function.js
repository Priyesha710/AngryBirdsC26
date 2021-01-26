
//function definition to check touching logic between any two objects
function isTouching(obj1Input, obj2Input) {

    if (obj1Input.x - obj2Input.x < obj2Input.width / 2 + obj1Input.width / 2 &&
      obj1Input.x - obj2Input.x < obj2Input.width / 2 + obj1Input.width / 2 &&
      obj2Input.y - obj1Input.y < obj2Input.height / 2 + obj1Input.height / 2 &&
      obj1Input.y - obj2Input.y < obj2Input.height / 2 + obj1Input.height / 2) {
      return true;
    }
    else {
      return false;
    }
  }
  //function definition to make any two objects bounce off each other
  function bounceOff(obj1Input,obj2Input){
  //bounce off
  if (obj1Input.x - obj2Input.x < obj1Input.width / 2 + obj2Input.width / 2 &&
    obj2Input.x - obj1Input.x < obj1Input.width / 2 + obj2Input.width / 2 &&
    obj1Input.y - obj2Input.y < obj1Input.height / 2 + obj2Input.height / 2 &&
    obj2Input.y - obj1Input.y < obj1Input.height / 2 + obj2Input.height / 2) {
  
      obj1Input.velocityY = (-1) * (obj1Input.velocityY);
      obj1Input.velocityX = (-1) * (obj1Input.velocityX);
  
  
      obj2Input.velocityY = (-1) * (obj2Input.velocityY);
      obj2Input.velocityX = (-1) * (obj2Input.velocityX);
  }
  }