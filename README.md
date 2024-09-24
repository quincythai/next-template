# WDB Full-Stack Next.js Template

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. There's also an additional page at [http://localhost:3000/test-page](http://localhost:3000/test-page) to demonstrate routing.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## First Steps

1. Update the metadata in `app/layout.tsx` with a proper title and description.
2. Download any required fonts in `app/fonts` and import them into `app/layout.tsx`, propertly passing the classname to the root layout element.
3. Update `favicon.ico` with a project-specific favicon.

## Best Practices

1. Keep the file structure as flat as possible -- don't nest components into deep folders! Instead, prefer to create reusable components in `app/components` and import them as needed. Next.js uses file-based routing, so page-specific components should go in their respective `page.tsx` file.
2. Use Tailwind CSS utility classes to style components. If it gets repetitive, consider creating a new component.
3. We use TypeScript, ESLint, and Prettier to ensure type safety and good code quality. Install the relevant plugins for your editor and feel free to use `npm run lint` to check for any issues.
4. Do **NOT** use `useEffect`!! It almost always isn't necessary and can lead to bugs and incomprehensible code. It should never be used for synchronizing state. Next.js has builtin primitives for fetching data now, so use those instead if you need to fetch data.
5. Import files using **absolute paths**! By default, `@` is an alias for the project directory, so instead of importing from '../../../components/something', use `@/components/something'`. This is much easier to read.
6. Don't push to `main` directly! Instead, create a new branch and open a pull request. Issue tracking software (e.g. Linear) automatically generates branch names and will link them directly -- use those.

## Command Reference

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run lint` - Check for any issues.

## Learn More

This project uses Next.js, React, and Tailwind CSS. It is also configured with ESLint and Prettier, which will run before each commit to ensure good code quality when pushing to GitHub. Prettier is configured with the Tailwind plugin to automatically sort CSS classes consistently as well!

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Tailwind CSS, take a look at the following:

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
