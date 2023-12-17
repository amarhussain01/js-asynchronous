// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                         (start now, finish sometime later)

console.log("START");
setTimeout(()=> console.log("This is asynchronous"), 5000);
console.log("END")