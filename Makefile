# zip
zip:
	tar -czf build.zip build/

upload:
	scp build.zip ubuntu@122.51.176.214:~