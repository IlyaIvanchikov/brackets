module.exports = function check(str, bracketsConfig) {
  var arr = str.split ('')
  var arr1 = bracketsConfig.flat(1);
  var itog = 0;
  if (str.length % 2 != 0) {
      itog = false;}
  else if (str.length % 2 == 0) {
      for ( var a = 0; a < arr.length; a++) {
          for ( var b = 0; b < arr1.length; b++) {
              if (arr[a] == arr1[b]) {
                  if ((arr[a] == arr1[b]) && (arr[a+1] == arr1[b+1])) {
                      arr.splice(a, 2); 
                      a = 0;
                      b = -1;
                  }  
              } 
          }
      } 
      if (arr.length == 0) {
          itog = true;
      }     
  }
  return  itog;
  }

