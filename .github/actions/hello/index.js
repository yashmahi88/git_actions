const core = require("@actions/core");
const github = require("@actions/github");
try{
    core.debug('Debug Message');
    core.error("Error MEssage");
    const name = core.getInput('who_to_greet');

    console.log('Hello ${name}');
    const time = newDate();
    core.setOutput("time",time.toTimeString());
    core.exportVariable("HELLO_TIME", time);
    core.startGroup("Logging github context");
    console.log(JSON.stringify(github.context, null ,2));
    core.endGroup();

} catch(error) {
    core.setFailed(error.message);
}