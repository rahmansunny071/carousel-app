rm -rf docs/
cp -R build/ docs/
git add docs/
git commit -m "docs updated"
git push origin master