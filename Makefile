.PHONY: run-website

run-website:
	npm install
	npm run build
	npm run preview -- --open
