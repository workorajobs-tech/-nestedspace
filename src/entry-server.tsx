import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export async function render(path: string) {
  const errors: unknown[] = [];
  const { prelude } = await prerenderToNodeStream(
    <StrictMode><StaticRouter location={path}><App /></StaticRouter></StrictMode>,
    { onError: error => { errors.push(error); } },
  );
  let html = "";
  prelude.setEncoding("utf8");
  for await (const chunk of prelude) html += chunk;
  if (errors.length) throw new Error(`Could not render ${path}: ${errors.join("; ")}`);
  return html;
}
