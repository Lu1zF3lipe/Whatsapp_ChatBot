import { spawn } from "child_process";

export function StartTunnel() {
  const child = spawn("node", [
    "node_modules/localtunnel/bin/lt.js",
    "--port",
    "3000",
    "--subdomain",
    "091dcede57a17f",
    "--print-requests",
  ]);

  child.on("exit", () => console.log("lt CLOSED"));
}
