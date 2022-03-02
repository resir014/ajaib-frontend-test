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

### Data fetching

We use [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) to wrap requests heading to the Random User API. Then we use [SWR](https://swr.vercel.app/) for our data-fetching logic, allowing for data fetches to be wrapped in a custom hook.

**Performance boost:** We serve the API response in the API route with a [`stale-while-revalidate` header](https://web.dev/stale-while-revalidate/) to serve stale content whilst revalidating them in the background for the next request.

### State management

We use [Zustand](https://github.com/pmndrs/zustand) for our state management. This provides a simpler, less-boilerplatey way to manage our React application state while still conforming to the Flux principles, and allows for state + dispatcher to be easily called via hooks.

We use Zustand to track the state of our app's filter settings.

### Debounced search

The `useUsersFilterable` hook contains a debounce function (using `lodash/debounce`) to delay updating of the URL until the user has stopped typing.

### Directory structure

- `components/` - UI/layout components that are used globally throughout project.
- `lib/` - Shared utility/helper functions.
- `modules/` - Each feature and their business logic goes into this folder.
- `pages/` - Next.js pages. Please read this page for more info about them.
  - `api/` - Next.js API routes. This is where the application's API/backend goes.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `types/` - TypeScript types + interfaces that are used globally throughout the project.
