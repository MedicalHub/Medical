>packed.js
while read a
do
cat $a >> packed.js
done < fnames
