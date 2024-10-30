const content = "Hello, Deno!, I am writing to a file using Deno!";
await Deno.writeTextFile("greet.txt", content);
console.log("File written to greet.txt");

// Deno does not have default permissions to write files. You need to run the script with the "--allow-write" flag.
//! deno --allow-write write_file.ts

// there are many other flags that you can use to give permissions to Deno.
// --allow-read --> to read files
// --allow-net --> to access the network
// --allow-env --> to access environment variables
// --allow-run --> to run subprocesses
// --allow-write --> to write files
// --allow-plugin --> to load plugins
// --allow-hrtime --> to access high-resolution time
// --allow-all --> to allow all permissions
// --unstable --> to use unstable APIs
// --reload --> to reload the script on change
// --lock --> to lock the dependencies
// --lock-write --> to write the lock file
// --lock=lock.json --> to use a specific lock file
// --cached-only --> to use only cached dependencies
// --cert --> to use a certificate authority
// --config --> to load a configuration file
// --importmap --> to use an import map
// --inspect --> to enable inspector
