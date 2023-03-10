网站说明：
这个网站一共包含了后端接口服务器、前台服务器、后台服务器、三个项目，如果你想运行这个网站，你需要下载这三个项目和mysql文件。

运行网站的所有步骤：
一、下载网易云课堂三个项目和MySQL文件到本地（网易云课堂后台还没有开发，但不影响前台的运行，所以现在我的github远程仓库只有两个关于网易云课堂的项目）
二、下载到本地后，如果你的计算机安装了WebStorm，请你使用WebStorm打开这三个项目，WebStorm就会提示你使用npm安装依赖包，你点击安装依赖包即可（三个项目都是同样的操作，用webstorm打开三个项目后点击安装依赖包）。
三、安装完依赖包后运行sql文件。此网站和网易云课有着相似的架构，可以说是阉割版网易与课堂。当然安全性和健全性比网易云课堂原网站差太远，原因是安全性需要后端开发工程师、前端开发工程师、网站架构师、网络安全等等岗位共同设计，我一个人是无法完成的。但是无论怎样此网站也是有自己的数据库架构。你需要在你的电脑上安装mysql并且运行sql文件（建议使用MySql可视化工具运行sql文件更方便），这样你的电脑上就有网易云课堂数据库的数据和结构了。默认情况下你的电脑上的网易云课堂后端服务器是无法访问数据库的，需要先在Windows PoverShell设置权限，否则网站运行的时候后端访问数据库时会报错，具体设置权限的步骤可以查百度。
四、启动三个项目的服务器，如果你的计算机安装了webstorm：1、打开前台服务器需要你双击前台根目录的package.json，点击"dev": "next dev"前面的开始按钮运行。后端服务器需要进入src目录下并且运行index.js文件。
五、保证后端和前端服务器都打开的前提下。打开浏览器，地址栏输入 http://localhost:3000/  即可访问网站。


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
