"use server";

import { readFileSync } from "fs";
import { join } from "path";

export default async function RenderHomepageCode() {
  const code = readFileSync(
    join(process.cwd(), "src/app/content/index.mdx"),
    "utf-8"
  );

  return (
    <pre className="language-markdown">
      <code>{code}</code>
    </pre>
  );
}
