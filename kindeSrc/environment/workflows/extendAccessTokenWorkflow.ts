import { onUserTokenGeneratedEvent,createKindeAPI, getEnvironmentVariable, accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger, denyAccess, fetch } from "@kinde/infrastructure"
import { settings } from "../../../utils/utils";

export const workflowSettings: WorkflowSettings = {
  id: "addAccessTokenClaim",
  trigger: WorkflowTrigger.UserTokenGeneration,
  name: "Add Access Token Claim",
  bindings: {
    "kinde.accessToken": {},
    "kinde.fetch": {},
    "kinde.env": {}
  }
};

export default {
  async handle(event: onUserTokenGeneratedEvent) {
    /*const excludedPermissions = ['payments:create'];
    
    const orgCode = event.context.organization.code;
    const userId = event.context.user.id;
    
    const kindeAPI = await createKindeAPI(event);
  
    const res = await kindeAPI.get(
      `organizations/${orgCode}/users/${userId}/permissions`
    );

    const accessToken = accessTokenCustomClaims<{ hello: string; settings: string; permissions: []}>();
    accessToken.hello = "Hello there!";
    accessToken.settings = settings.output
    accessToken.permissions =  res.json.permissions.filter((p) => !excludedPermissions.includes(p.key))*/
  }
}
