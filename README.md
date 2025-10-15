
```
├── src/
│   ├── app/
│   │   ├── Layout.jsx
│   │   ├── page.jsx
│   │   ├── page.module.scss
│   │   ├── About/
│   │   │   └── page.jsx
│   │   │   └── About.module.scss
│   │   ├── Contact/
│   │   │   └── page.jsx
│   │   │   └── Contact.module.scss
│   │   ├── reset.css
│   │   └── global.scss
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.scss
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.scss
│   │   └── ui/
│   │       ├── MediaQuerry.jsx
│   │       ├── Button.jsx (styled-components)
│   │       ├── MySwiper.jsx (styled-components)
│   │       ├── Movie.jsx
│   │       ├── Gallery.jsx (styled-components)
│   │       └── GalleryData.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.jsx
│   ├── styles/
│   │   └── globals
│   │       ├── _variables.scss
│   │       └── _mixins.scss
│   └── assets/
└── public/
    ├── images/
    │   ├── gallery/
    │   │   └── index.jsx
    │   │   └── photo01.png
    │   │   └── photo02.jpg
    │   │   └── photo03.jpg
    │   │   └── ...
    │   ├── photo100.png
    │   ├── photo101.jpg
    │   ├── photo102.jpg
    │   └── ...
    └── movies/       
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


|fileName|caption|location|
|:---|:----|:---|
|220526_1023368.jpg|おいしいご飯|大阪/京橋|
|220526_1023369.jpg|お茶|静岡/永谷園|
|220526_1023370.jpg|アイスコーヒーをいただく|東京/渋谷|


"fileName", "caption", "location",
"220526_1023368.jpg", "おいしいご飯", "大阪/京橋",
"220526_1023369.jpg", "お茶", "静岡/永谷園",
"220526_1023370.jpg", "アイスコーヒーをいただく", "東京/渋谷",


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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
