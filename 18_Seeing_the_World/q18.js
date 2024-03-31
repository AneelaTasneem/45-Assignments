"use strict";
//  Seeing the World:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// storing names of places in non-alphabetical order in an array:
var places = ['Kenya', 'Turkey', "Canada", 'London', 'Maldives'];
// Printing arry in its original order:
console.log('Original  ' + places);
// printing an array in alphabetical order without modifying the actual list:
console.log(' Copy  ' + __spreadArray([], places, true).sort());
// Showing an arry is still in it's original form by printing it:
console.log('Original  ' + places);
// • Printing array in reverse alphabetical order without changing the order of the original list.
console.log(' Copy  ' + __spreadArray([], places, true).sort().reverse());
// Showing that array is still in its original order by printing it again:
console.log('Original  ' + places);
// Reverse the order of list. Print the array to show that its order has changed.
console.log('Original  ' + places.reverse());
// Reverse the order of  list again. Print the list to show it’s back to its original order.
console.log('Original  ' + places.reverse());
//  Sort  array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Original  ' + places.sort());
//  Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Original  ' + places.sort().reverse());
