# 11ty Starter 2024
My own preferred setup for starting dev. 

Use `npm run dev` for local, which will serve 11ty on localhost, and build out and listen for changes in `.scss` and `.js` files. Use `npm run build` for production builds. 

## Multisite
This 11ty setup will outpur two sites, one for design and one for development. The npm commands are the same as before (`npm run build` and `npm run dev`). When developing locally, each site will be served on a separate port. When deploying, ensure that each site has the proper environment variable for `SITE`. Design should be `design` and development should be `development`. Environment variables should not affect local development, since both sites are served at the same time.

Both sites share all other directories for scss, layouts, includes etc.

## Webpack
Set to complile scss and JS files. Outputs to `./_dist` in the root. 11ty is configured to listen for changes to `.scss` and `.js` files, and has a 120ms delay so that it will get the latest changes from webpack when editing these files. 

## 11ty
Using 11ty for static site generation. 

### Content
Located in the `_content` directory. Site URL's follow the directory pattern with index.njk files. For example, `_content/blog/my-post/index.njk` would result in the slug `/blog/my-post/`.

### Data
Custom data can be added to the `_data` directory, along with some helpers for 11ty templating.

### Layouts
11ty layouts can be defined in `_layouts`.

### Includes
Components such as the head, header, and footer that will be reused can be defined here to be included in templates.