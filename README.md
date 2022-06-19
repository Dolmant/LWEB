TODO:
1. Fix all file formats to work (GIF needs cover, check video player and models)
2. Add contact/about page
3. Leonie to figure out background

https://imagemagick.org/script/download.php

imagemagick commands for images:
magick mogrify -resize 1920x1080 -quality 100 -path ../webImages *.jpg
magick mogrify -resize 500x500 -quality 50 -path ../webImages/thumbs *.jpg

Site design:
make the particles stick together a bit


todo:
Delete store payment stuff in gcloud
fix emails
fix emails for priority lending
favicon
uploading a new image should be easy. Create a script which uploads the high def files (convert, update code, etc)

Instructions:
1. Open up a terminal, navigate to this folder and type "git pull"
2. Copy the new asset into the assets folder
3. Open config.json and add an entry for the new asset
This is a json file so it must follow the json format. Use a tool like https://jsonlint.com/ to validate your changes if you are unsure
The format is as follows:
{
  "Category": [
    {
      "file": "image_name.jpg",
      "test": "Image Description"
    },
    {
      "file": "video_name.mp4",
      "test": "Video Description"
    }
  ],
  "Category2": [...etc]
}
Note that text is surrounded by quotation marks, items are comma separated and the last item in a list never has a comma after it (called a trailing comma).
Make sure you select the correct extension for the asset type (.jpg for images, .gif or .mp4 for videos and .gltw for models)
4. type "sh ./build.sh"
5. type "git add -A"
6. type "git commit -a -m "Insert comment here"
7. type "git push"
8. Wait 5 minutes and check the website has been updated. Dont forget to do a hard refresh using control + f5


OLD:
animnate buttons on main page, top button in top right, page spills when content selected
some animation on the title (underline?) use https://codepen.io/perry_nt/pen/OWoNxK
https://codepen.io/deineko/pen/jrmmoQ