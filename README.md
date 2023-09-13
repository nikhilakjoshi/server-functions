## React Server Functions

Next.JS 13 has introduced server components and server functions.

This means we can now create applications that send minimal JavaScript bundles to the browser, resulting in lighter application downloads.

Please clone this repository and run it on your local machine to explore how to utilize Next.js 13's server functions.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Check the `page.tsx` file in the `src/app` directory to locate the `addTodo` function and take note of the 'use server' directive, indicating to Next.js that this is a server function.
