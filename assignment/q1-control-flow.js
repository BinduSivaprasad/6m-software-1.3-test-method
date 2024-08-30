/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";
console.log("Key in the environment that you wanted your project to run in :", env);

// Task: Add code here
function handleMode(mode)
{
switch(mode)
{
    case "DEV" :
        {
            console.log("In Development Mode");
            return databaseCredential;
            break;
        }
    case "STAGE" :
        {
            console.log("In Stagging Mode");
            return databaseCredential = "stageuser:password";
            break;
        }
    case "PROD" :
        {
            console.log("In Production Mode");
            return databaseCredential = "produser:password";
            break;
        }


}
}
handleMode(env);
console.log(`Database credential for environment ${env} is ${databaseCredential}`);
