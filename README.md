# Medal Count App

Notes and assumptions:

1. Simple folder structure and no component framework is utilized, due to the simplicity of the task and UI.
2. Tailwind CSS is used here, which is fully compatible with NextJs, including server components. Alternatives exist if utility classes is not a preference.
3. Jest and react testing library is used for testing. We won't focus on e2e or multi-browser testing as part of this exercise.
4. I could have utilized server components more, but currently there's no easy way to test those, so avoided the complexity for this exercise.
5. I assumed that responsive or resizable country flags is not a requirement.
6. I could have (and should have) used a dedicated table component or at least split out the individual list items to avoid repetition, but kept things in a single file due to time constraints.
7. No state management was used, again to keep things simple. State management could have been used to track sorting, instead of relying on props.
8. UI is an approximation to the original screenshot and not a strict pixel perfect reproduction. Things like spacing, color and fonts might not be accurate. This is purely to stay within the 3 hours.
9. There are improvements to be made to the loading and error states, both from a technical and UX perspective.
10. No extensive testing was performed.
11. Only latest browsers supported.

# NextJs

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
