#!bin/sh

git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
# always have to redo the domain on gh-pages after these commands
echo "Please ensure the GH pages domain is reset!"