imagemagick commands for images:
magick mogrify -resize 1920x1080 -quality 100 -path ../webImages *.jpg
magick mogrify -resize 500x500 -quality 50 -path ../webImages/thumbs *.jpg

Delete store payment stuff

uploading a new image should be easy. Create a script which uploads the high def files (convert, update code, etc)