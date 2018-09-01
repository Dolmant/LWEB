scss compiler needs ruby and sass
gem install sass on the ruby command line

to run your server simply use 
node server.js
this uses your mailgun server to send emails

keep original images in the best quality but use jpgs only, png and other formats are terrible

imagemagick commands for images:
magick mogrify -resize 1920x1080 -quality 100 -path ../webImages *.jpg
magick mogrify -resize 500x500 -quality 50 -path ../webImages/thumbs *.jpg
