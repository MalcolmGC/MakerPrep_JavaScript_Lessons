// Create object with a factory function (generic).js
//use strict';
var oProto = { // object prototype.
        pr1 : undefined, // Prototype property #1.        pr2 : undefined
    };
oProto.pr1 = 4; // override property value in prototype.
oProto.pr2 = 2;

var makeObject = function (oP1, oP2) { // Object Factory.
        var ob = Object.create(oProto); // Include object prototype.
        ob.oP1 = oP1; // Object property #1.
        ob.oP2 = oP2;
        return ob;
    };
var ob1 = makeObject('ob1-P1', 'ob1-P2');
var ob2 = makeObject('ob2-P1', 'ob2-P2');

console.log('Direct property references for ob1: ' + ob1.oP1 + '  '  + ob1.oP2 + '  '  + ob1.pr1 + '  ' + ob1.pr2);

var showObject = function (objectName, po) {
  console.log(objectName + ': oP1 = ' + po.oP1 + ', oP2 = '  + po.oP2 + ', pr1 = '  + po.pr1 + ', pr2 = ' + po.pr2);
};
ob2.pr2 = 3.0; // Override value of object 2 property (from prototype default).
showObject('ob1', ob1);
showObject('ob2', ob2);
