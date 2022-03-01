# ajaib-frontend-test

> Personal project for Ajaib.co.id frontend test.

## Stack used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://typescriptlang.org/)
- [SWR](https://swr.vercel.app/) for data fetching + caching

## Developing

A Node.js LTS setup with [yarn (v1)](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run lint + type check
yarn validate

# run unit tests
yarn test
```

## Architecture

### Directory structure

- `components/` - UI/layout components that are used globally throughout project.
- `lib/` - Shared utility/helper functions.
- `modules/` - Each feature and their business logic goes into this folder.
- `pages/` - Next.js pages. Please read this page for more info about them.
  - `api/` - Next.js API routes. This is where the application's API/backend goes.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `types/` - TypeScript types + interfaces that are used globally throughout the project.
