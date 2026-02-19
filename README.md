Vertis Landing Page - Static HTML Export

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Static Export

This project is configured to export as static HTML. To build the static files:

```bash
npm run build
# or
pnpm build
```

The static files will be generated in the `out/` directory. You can deploy these files to any static hosting service.

## Deployment Options

### Static Hosting Services
You can deploy the `out/` directory to any static hosting service:

- **Netlify**: Drag and drop the `out/` folder or use CLI
- **Vercel**: Connect your repository and set the output directory to `out`
- **GitHub Pages**: Push the `out/` directory to a gh-pages branch
- **AWS S3**: Upload the `out/` directory to an S3 bucket
- **Cloudflare Pages**: Connect your repository
- **Surge.sh**: Run `surge out/your-domain.com`
- **Firebase Hosting**: Run `firebase deploy` after initializing

### Local Testing

To test the static build locally, you can use a simple HTTP server:

```bash
# Using Python 3
cd out
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server out/ -p 8000

# Using PHP
php -S localhost:8000 -t out/
```

Then visit [http://localhost:8000](http://localhost:8000)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
