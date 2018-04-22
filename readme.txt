run gruntfile (run 'grunt watch') to autocompile your js based on changes. grunt build does this as a once off

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

to upload to heroku copy to the other git folder (do a grunt build then remove the .gitignores and the node folders as well as this readme) and use
git push --no-verify heroku master

then start the service with
heroku ps:scale web=1

keep original images in the best quality but use jpgs only, png and other formats are terrible
settings on easythumbnails for 
thumbs: 500px * 500px @ 70% quality
superthumbs: 500px * 500px @ 20% quality
