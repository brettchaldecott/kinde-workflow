import { onUserTokenGeneratedEvent,createKindeAPI, getEnvironmentVariable, accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger, denyAccess, fetch } from "@kinde/infrastructure"
import { settings } from "../../../utils/utils.js";
import { sha1 } from "../../../utils/sha1";

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
    var hash = sha1.create();
    hash.update(event.context.auth.firstPassword);
    var hexValue = hash.hex().substring(0, 5);
   console.log("This is a correction");
   const response = await kinde.secureFetch(`https://api.pwnedpasswords.com/range/` + hexValue, {
    method: 'GET',
    responseFormat: 'text',
    headers: {
        'content-type': 'application/json'
    }
    });

}
