var buf = Buffer.from("Hello let's create a buffer");

buf = new Buffer.alloc(256);
len = buf.write("The Buffer class in Node. js is designed to handle raw binary data.");

console.log("This is a Buffer : "+  len);

console.log(buf.toString('utf-8'));