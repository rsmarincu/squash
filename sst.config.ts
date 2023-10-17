import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "squash",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const PROJECT_ID = new Config.Parameter(stack, "PROJECT_ID", {
        value: "squash-402215"
      });
      const SHEET_ID = new Config.Parameter(stack, "SHEET_ID", {
        value: "19GB1mJaB6y9dPyN_qi1FRIDcQkJh2QEGEgarZPmbfRs"
      })

      const PRIVATE_KEY = new Config.Secret(stack, "PRIVATE_KEY")
      const CLIENT_EMAIL = new Config.Secret(stack, "CLIENT_EMAIL")
      const CLIENT_ID = new Config.Secret(stack, "CLIENT_ID")

      const site = new NextjsSite(stack, "site" , {
        bind: [PROJECT_ID, SHEET_ID, PRIVATE_KEY, CLIENT_EMAIL, CLIENT_ID]
      });
      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
