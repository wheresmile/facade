.PHONY: local_start
local_start:
	yarn start

# zip
.PHONY: zip
zip: build
	tar -czf build.zip build/

.PHONY: upload
upload:
	scp build.zip ubuntu@122.51.176.214:~

.PHONY: build
build:
	yarn build