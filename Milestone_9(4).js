new Promise((resolveOuter) => {
  resolveOuter(new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  }));
})
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
  
  
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // expected output: 123
});
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}
