/* Created by Nishant Sahoo on 7/13/2017 12:45 AM */
const scribble = require('scribbletune');

let beeth = scribble.clip({
    notes: ['e4', 'd#4', 'e4', 'd#4', 'e4', 'b4', 'd4', 'c4', 'a4', 'c3', 'e3', 'a4', 'b4', 'e3', 'a4', 'b4', 'c4', 'e4', 'd#4', 'e4', 'd#4', 'e4', 'b4', 'd4', 'c4', 'a4', 'c3', 'e3', 'a4', 'b4', 'e3', 'c4', 'b4', 'a4', 'b4', 'c4', 'd4', 'e4', 'g3', 'f4', 'e4', 'd4', 'e3', 'e4', 'd4', 'c4', 'e3', 'd4', 'c4', 'e3', 'e4', 'd#4', 'e4', 'd#4', 'e4', 'e3', 'd4', 'c4', 'a4', 'c3', 'e3', 'a4', 'b4', 'e3', 'a4', 'b4', 'c4', 'e4', 'd#4', 'e4', 'd#4', 'e4', 'b4', 'd4', 'c4', 'a4', 'c3', 'e3', 'a4', 'b4', 'e3', 'c4', 'b4', 'a4'],
    pattern: 'x-x-x-x-x-x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-x-x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-x-x-x-x-x-----x-x-x-x-----x-x-x-x-----x-x-x-x-x-x-x-x-x-----x-x-x-x-----x-x-x-x-----',
    sizzle: true
});  
 
scribble.midi(beeth, 'beeth.mid');