#!/bin/zsh

# NOTE: gaussian-blur is terrible for retaining quality and whatnot, but it's
# VERY good for compression. It also has noise-reduction properties... which 
# is cool I guess.

mogrify -sampling-factor 4:2:0 -strip -quality 85 -interlace Plane -gaussian-blur 0.05 -format webp *.jpg
