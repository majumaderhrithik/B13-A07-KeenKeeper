# 📁 Asset Setup Instructions

Your `assets` folder (with logo.png, logo-xl.png, call.png, text.png, video.png, facebook.png, twitter.png, instagram.png) must be placed inside the `public/` folder.

## Steps:

1. Open the extracted `keenkeeper` project folder
2. Find the `public/` folder inside it (create it if missing)
3. Copy your entire `assets/` folder into `public/`:

```
keenkeeper/
├── public/
│   └── assets/          ← PUT YOUR ASSETS FOLDER HERE
│       ├── logo.png
│       ├── logo-xl.png
│       ├── call.png
│       ├── text.png
│       ├── video.png
│       ├── facebook.png
│       ├── twitter.png
│       └── instagram.png
├── src/
├── package.json
└── ...
```

4. Then run:
```bash
npm install
npm run dev
```

That's it! All logos and icons will load automatically.
