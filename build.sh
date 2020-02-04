#!/bin/sh
magick mogrify -resize 1920x1080 -quality 100 -path ./processedImages/HQ ./assets/*.jpg
magick mogrify -resize 500x500 -quality 50 -path ./processedImages/thumbs ./assets/*.jpg
tsc