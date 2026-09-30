# FIKY Landscape Design website

Plain HTML and CSS. No WordPress, no plugins, no build step. Hosted on Netlify from GitHub.

## Folder layout

```
index.html              Home
our-services/index.html Our Services
contact-us/index.html   Contact Us (Tally form)
404.html                Page not found
assets/css/styles.css   All styling (colours and fonts at the top)
assets/js/main.js       Mobile menu and Tally loader
assets/images/          Photos, logos, favicon and social share image
netlify.toml            Redirects from old WordPress addresses
```

The page addresses match the WordPress site exactly, so Google rankings carry over.

## Step 1: Build the Tally form

Create a new form at tally.so with these fields to match the current form:

| Field | Type | Required |
|---|---|---|
| First Name | Short answer | Yes |
| Last Name | Short answer | Yes |
| Email Address | Email | Yes |
| Phone | Phone number | No |
| Project Type | Dropdown: Landscape Design, Planting Design, Pool & Outdoor Living, Trades Coordination, Not Sure Yet | No |
| Property Location | Short answer | No |
| Your Message | Long answer | Yes |

Suggested settings: button text "Send message", email notifications to hello@fikylandscapedesign.com, and turn on spam protection.

The form is already connected: `contact-us/index.html` embeds https://tally.so/r/KYdaxA. If you ever swap to a new form, replace `KYdaxA` in that file with the new ID.

To match the site inside the form, set Tally's theme font to Montserrat and the button colour to `#234d36`.

## Step 2: Put it on GitHub

1. Create a new repository on github.com (for example `fiky-website`).
2. Click "uploading an existing file" and drag in everything from this folder, including `assets` with the images.
3. Commit.

## Step 3: Connect Netlify

1. In Netlify, choose Add new site, then Import an existing project, then GitHub.
2. Pick the repository. Leave the build command empty. Publish directory is `.`
3. Deploy. You'll get a temporary `something.netlify.app` address to check everything.

From now on, any change committed on GitHub goes live automatically within a minute.

## Step 4: Move the domain

1. Netlify: Domain management, Add a domain, enter `fikylandscapedesign.com`.
2. Follow Netlify's DNS instructions at wherever the domain is registered (if the domain was bought through WordPress.com, you can either point its nameservers to Netlify or transfer it out).
3. Netlify issues the free HTTPS certificate automatically.
4. Check email: if hello@ is on Google Workspace or similar, copy the MX records across before switching nameservers so email doesn't drop.
5. Only cancel the WordPress plan once the site loads on Netlify at your domain.

## Step 5: Analytics (already connected)

Google Analytics (`G-3CTC7P4EQV`) and Microsoft Clarity (`yqmq55ql16`) are installed on every page. Once live, check Reports, then Realtime, in Google Analytics, and allow about 2 hours for Clarity recordings to appear.

Because the site uses tracking, it's good practice to add a short privacy note mentioning Google Analytics and Microsoft Clarity.

## Step 6: After launch

Submit `https://fikylandscapedesign.com/sitemap.xml` in Google Search Console.

## Editing

Text lives directly in the HTML files. Colours and fonts are the variables at the top of `assets/css/styles.css`.

## Brand

Green `#234d36` (logo letters), olive charcoal `#454839` (logo wordmark, used for body text). Fonts: Montserrat (matches the "LANDSCAPE DESIGN" wordmark) and Cormorant Garamond for headlines. Logos: `logo-white.png` on the photo header and footer, `logo-green.png` once the header turns light on scroll and on the social share image. Favicon is the leaf from the logo. The header and footer are repeated on every page, so update all four HTML files when changing them.
