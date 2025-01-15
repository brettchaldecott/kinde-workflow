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

export default {
  async handle(event: any) {
    console.log("Hello to the world");
  }
}
