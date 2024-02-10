var buffer1 = Buffer.from('Nirali');

var buffer2 = Buffer.from('Publication Pune');

var result = buffer1.compare(buffer2);

console.log("Value returned is : " + result);

if (result < 0) {
    console.log(buffer1 + " lower than " + buffer2);

} else if (result === 0) {

    console.log(buffer1 + " is same as " + buffer2);

} else {
    console.log(buffer1 + " higher than " + buffer2);
}