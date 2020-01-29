Modelled based on https://tworobbers.com/

imagemagick commands for images:
magick mogrify -resize 1920x1080 -quality 100 -path ../webImages *.jpg
magick mogrify -resize 500x500 -quality 50 -path ../webImages/thumbs *.jpg

Site design:
cross to hamburger animation in svg?
https://codemyui.com/svg-css3-hamburger-to-close-button-animation/

something like :rotate(45deg) translate(4px, 5px)

todo:
Delete store payment stuff in gcloud
fix emails
fix emails for priority lending
favicon
uploading a new image should be easy. Create a script which uploads the high def files (convert, update code, etc)