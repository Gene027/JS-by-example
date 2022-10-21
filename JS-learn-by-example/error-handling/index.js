
// error = object with a description of 
//             something that went wrong. this halts the program
//              we seek to bypass this hault and keep preogram running            

// throw = executes a user-defined error

try{            // use try block when writing a code that could return err
    let x = window.prompt("Enter a #");
    x = Number(x);
  
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";
  
    console.log(`${x} is a number`);
  }
  catch(error){
    console.log(error);
  }
  finally{              //this block always executes eg trying to close a file after opening
    console.log("This always executes");
  }