let beeps = process.argv;

setTimeout(() => {
  for (let i = 2; i < beeps.length; i++) {
    if (beeps[i] && beeps[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beeps[i]*1000);
    }
  }
},0);