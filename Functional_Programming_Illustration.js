// Functional Programming: Input a function and output a function -- No side effects.
//////////////////////////////////////////////////////////////////////////////
// Let's Use a (callback) function as a parameter in another function execution:
var cb = function(fVar) {
  //console.log('I am in cb with ' + fVar);
  return 'I was in cb with' + fVar;
};

var caller = function(aCB, cVar) {
  //console.log('I am running a callback from caller with varible: ' + cVar);
  aCB(cVar);
  return 'Output from caller with ' + cVar + ' in function: ' + aCB;
};

var out = caller(cb, 'Hell   Oh');
//console.log('Output of all this is ' + out);
////////////////////////////////////////////////////////
// Let's return a function:
var rf = function() {
  console.log('I am in returned function ' + rf);
  return 'Leaving the returned function.';
};

var caller2 = function(aRF) {
  console.log("In caller2 the output of a function will be returned.");
  return aRF();
};

var  out2 = caller2(rf);
console.log('Here is the output of the function returned from caller2: ' + out2);
