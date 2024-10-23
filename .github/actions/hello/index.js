const core = require("@actions/core");
const github = require("@actions/github");

try {
  // Log debug, warning, and error messages
  core.debug("Debug Message");
  core.warning("Warning message");
  core.error("Error message");

  // Get the input
  const name = core.getInput("who_to_greet");
  
  // Log the greeting
  console.log(`Hello ${name}`);

  // Get the current time
  const time = new Date();
  
  // Set the output
  core.setOutput("time", time.toTimeString());

  // Export the HELLO_TIME variable
  core.exportVariable("HELLO_TIME", time);

  // Logging GitHub context
  core.startGroup("Logging GitHub context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}
