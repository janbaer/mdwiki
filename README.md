# MDWiki

This is the third version of **MDWiki**, my personal wiki.

It's for my personal use since it's hosted on https://mdwiki.janbaer.de.

But it's build to support different **GitHub** repositories and it can also be used from everyone.
Since all the data will be saved in the **GitHub** repository you selected, it's not bounded to this
webpage.

This web application is no longer using any Node.js server backend and because of that it can be
hosted in an easy way as **GitHub** page. And since **GitHub** is providing support for https with using
**Let's Encrypt** it's hosted in a secure way.

I use **Preact.js** instead of *React* and the **Parcel.js** bundler
which gives a big help to concentrate on the functionality of MDWiki and not waste too much time
with configuring and maintaining the build and deployment process.

# Deploying a new version

To deploy a new version you just have to create a new Git tag and push it to GitHub. The deployment to the Github pages branch will happen then automatically with the configured GitHub action.

```
git tag -a 3.2.6 -m "3.2.66 - Fix wrong domain name in CNAME" && git push --tags
```
