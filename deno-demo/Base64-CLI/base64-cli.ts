import { parse } from "https://deno.land/std@0.190.0/flags/mod.ts";

const { encode, decode, help} = parse(Deno.args, {  // args brings in the command line arguments
  boolean: ["encode", "decode", "help"],
  alias: { e: "encode", d: "decode", h: "help" },
});

if(help) {
  console.log("Base64 CLI Tool");
  console.log("Usage: base64-cli [OPTIONS] [TEXT]");
  console.log("Options:");
  console.log("  -e, --encode    Encode text to base64");
  console.log("  -d, --decode    Decode base64 to text");
  console.log("  -h, --help      Show this help message");
  Deno.exit();
}

const text = Deno.args[Deno.args.length - 1]; // get the last argument

if(encode){
  const encoded = btoa(text);
  console.log(encoded);
} else if(decode) {
  const decoded = atob(text);
  console.log(decoded);
} else {
  console.log("Please provide an option to encode or decode");
  console.log("Run with --help for more information");
  Deno.exit();
}

// Run the following command in the terminal:
/*
*  deno run base64-cli.ts --encode "Hello, world!" or deno base64-cli.ts -e "Hello, world!"
*  deno run base64-cli.ts --decode "SGVsbG8sIHdvcmxkIQ==" or deno base64-cli.ts -d "SGVsbG8sIHdvcmxkIQ=="
*  deno run base64-cli.ts --help or deno base64-cli.ts -h
*  
 */

/*
  You can even generate a compiled version of this script by running the following command:
  deno compile base64-cli.ts
  this will generate a base64-cli executable file that you can run in the terminal:
  ./base64-cli --encode "Hello, world!"
*/

/* 
PS C:\Users\Aditya\Desktop\deno-demo> deno .\base64-cli.ts -h
✅ Granted import access to "cdn.skypack.dev:443".                                                                                                                  
Base64 CLI Tool                                                                                                                                                     
Usage: base64-cli [OPTIONS] [TEXT]                                                                                                                                  
Options:                                                                                                                                                            
  -e, --encode    Encode text to base64                                                                                                                             
  -d, --decode    Decode base64 to text
  -h, --help      Show this help message
PS C:\Users\Aditya\Desktop\deno-demo> deno .\base64-cli.ts -e "Adi"
✅ Granted import access to "cdn.skypack.dev:443".                                                                                                                  
QWRp                                                                                                                                                                
PS C:\Users\Aditya\Desktop\deno-demo> deno .\base64-cli.ts -d "QWRp"                                                                                                
✅ Granted import access to "cdn.skypack.dev:443".                                                                                                                  
Adi  
*/