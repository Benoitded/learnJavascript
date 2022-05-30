#!/bin/bash

echo Creating a new project $1
echo - $1.html
echo - $1.css
echo - $1.js

cp -r default $1

mv $1/default.html $1/$1.html
mv $1/default.css $1/$1.css
mv $1/default.js $1/$1.js

sed -i 's/default/'$1'/g' $1/$1.html

git add $1
git commit -m "New project "$1
git push