## Before Getting Started

Before you get start on this. Please make sure that you have the following atleast basic knowledge or skill.

- Typescript
- Tailwind
- Next.js
- React

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tailwind on this Starter

<p align="center">
  <a href="https://tailwindcss.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  A utility-first CSS framework for rapidly building custom user interfaces.
</p>

<p align="center">
    <a href="https://github.com/tailwindlabs/tailwindcss/actions"><img src="https://img.shields.io/github/actions/workflow/status/tailwindlabs/tailwindcss/ci.yml?branch=master" alt="Build Status"></a>
    <a href="https://www.npmjs.com/package/tailwindcss"><img src="https://img.shields.io/npm/dt/tailwindcss.svg" alt="Total Downloads"></a>
    <a href="https://github.com/tailwindcss/tailwindcss/releases"><img src="https://img.shields.io/npm/v/tailwindcss.svg" alt="Latest Release"></a>
    <a href="https://github.com/tailwindcss/tailwindcss/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/tailwindcss.svg" alt="License"></a>
</p>

---

## Documentation

For full documentation, visit [tailwindcss.com](https://tailwindcss.com/).

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Tailwind CSS on GitHub](https://github.com/tailwindcss/tailwindcss/discussions)

For casual chit-chat with others using the framework:

[Join the Tailwind CSS Discord Server](https://discord.gg/7NF8GNe)

## Contributing

If you're interested in contributing to Tailwind CSS, please read our [contributing docs](https://github.com/tailwindcss/tailwindcss/blob/master/.github/CONTRIBUTING.md) **before submitting a pull request**.

## Chore / Build Integration on this Starter

- **ESLint** - enforces some stylistic rules as well as code quality rules
- **Prettier** - purely on code formatting
- **Commitizen** - helping to ensure that git commit messages are formatted in a consistent way. For [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
- **Husky** - automatically lint code and commit messages, run unit tests before you push or commit to a remote repository

## Foldering and File Structure

- **styles** - Adding default and sitewide styling. Also, Tailwind configuration for adding new components, base and utilities.
- **services** - Files to be used sitewide like api links, endpoints, external links and fonts.
- **pages** - Folder for the dynamic page of the [Next.js](https://nextjs.org/docs/getting-started/installation).
- **page** - Layout to be generated from [page](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) for [Next.js](https://nextjs.org/docs/getting-started/installation).
- **tools** - Functions that helps during development.
- **types** - Place on where to put all type checking or type configuration for Typescript.
- **hooks** - Place on where to put all hooks to be use during development.
- **custom-data** - Place on where to put files that combining all fetching methods from a particular **API** from different **Endpoint** and process them then pass it on [page](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) of [Next.js](https://nextjs.org/docs/getting-started/installation).
- **configs** - Configuration files or reusable options files to be used on a particular **API** or component.
- **components** - Place on where to put all components or subcomponents.
- **blocks** - Place on where to put all blocks. **Block** is a combination of 2 or more components or subcomponents.

# Integration

This template is using [Storyblok](storyblok.com) as Headless CMS, [Centra](https://centra.com/) as Headless Shopping / Ecommerce Platform, Tailwind and Next.js. If you have your own Headless CMS or Headless Ecom Platform, you can add it at the **custom-data** folder ( _see foldering and file structure section_ ) then import that custom-data function that you created on the pages folder.
