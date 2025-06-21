  //12 inch = 1 feet

  function inchTofeet(inch){
    const feet = inch / 12;
    return feet; 
  }

    // 75
  function inchTofeet2(inch){
    const feetFraction = inch / 12 ; 
    const feetNumber = parseInt(feetFraction); 
    const incRemaining = inch % 12 ; 
    const result = feetNumber + ' ft ' + incRemaining + ' inch. '; 
    return result;
  }

  const liliputHeight = inchTofeet(63); 
  console.log(liliputHeight); 

  const liliputHeight2 = inchTofeet2(63); 
  console.log(liliputHeight2); 

