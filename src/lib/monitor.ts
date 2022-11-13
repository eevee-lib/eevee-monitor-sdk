export enum Env {
    Dev = "dev",
    Prod = "production",
    Sandbox = "sandbox",
}
const a = 123;
export const defaultTrackOpts = {
    env: "Env.Dev",
    report: {
        url: "",
        method: "POST",
        contentType: "application/json",
    },
    data: {},
    performance: false,
};
