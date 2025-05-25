const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  const line = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}
