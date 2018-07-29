run gruntfile (run 'grunt watch') to autocompile your js based on changes. grunt build does this as a once off

npm run buildGrunt to build

scss compiler needs ruby and sass
gem install sass on the ruby command line

install git lfs command line and put this in your git config:
[filter "lfs"]

	clean = git-lfs clean %f

	smudge = git-lfs smudge %f

	required = true

to run your server simply use 
node server.js
this uses your mailgun server to send emails

keep original images in the best quality but use jpgs only, png and other formats are terrible

imagemagick commands for images:
magick mogrify -resize 1920x1080 -quality 100 -path ../webImages *.jpg
magick mogrify -resize 500x500 -quality 50 -path ../webImages/thumbs *.jpg
