import { onUserTokenGeneratedEvent,createKindeAPI, getEnvironmentVariable, accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger, denyAccess, fetch } from "@kinde/infrastructure"
import { settings } from "../../../utils/utils.js";

export const workflowSettings = {
  id: "externalPasswordValidation",
  name: "Reset Password External Validation",
  trigger: "user:new_password_provided",
  bindings: {
    "kinde.secureFetch": {},
    "kinde.widget": {}
  }
};

export default async function handle(event: any) {
   // code here
   console.log("This is a correction");
   const response = await kinde.secureFetch(`<YOUR_PASSWORD_RESET_ENDPOINT>`, {
    method: 'POST',
    responseFormat: 'json',
    headers: {
        'content-type': 'application/json'
    },
    body: new URLSearchParams({
        userId: event.context.user.id
        password: event.context.auth.firstPassword
    })
});   
}
