function proclaimMultiple(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaimMultiple();
proclaimMultiple('ready?');
proclaimMultiple('ready!', 3);