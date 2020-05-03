while read f; do
	espeak "$f" --stdout | ffmpeg -i - -ar 44100 -ac 2 -ab 192k -f mp3 `echo $f | sed 's/ //g'`.mp3
#	echo "$f" 
#	echo $f.mp3
done <keys.txt
