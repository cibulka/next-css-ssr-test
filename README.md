# What

Next.js lists server side rendering as its main feature. Most of the solutions (although not all) for CSS at [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples) however do not seem to render styles on the server render.

Examples do not specifically say (in most cases) whether the solution should work on server or not. Because of that I'm not sure whether this is intended behaviour or not.

# Demo

https://next-css-ssr-test.vercel.app

You can clone and install the repo.

```
git clone https://github.com/cibulka/next-css-ssr-test.git
cd next-css-ssr-test
npm run install
npm run dev
```

![Screenshot of demo](/screenshot.png?raw=true "Screenshot of demo")

# Why

For my styles I've used [react-jss](https://cssinjs.org/jss-syntax/), where everything works as expected. In the recent time I've started to play with Tailwind (and like it a lot) and after some time I've noticed FOUC and (after further testing) that styles do not seem to render on server at all.
