.PHONY: local_start
local_start:
	yarn start

.PHONY: upload
upload:zip
	scp build.zip ubuntu@122.51.176.214:~

# zip
.PHONY: zip
zip: build
	tar -czf build.zip build/


.PHONY: build
build:
	yarn build