algolia_indexing_api_key ?= "algolia-indexing-api-key"

docker_image_tag ?= docs-$(shell uuidgen)

docker_image:=us-central1-docker.pkg.dev/ca-planton-gcp-sh-zg/afs-planton-cloud-gcp-uc1-docker/github.com/plantoncloud-inc/docs-website:${docker_image_tag}

.PHONY: clean
clean:
	cd site;yarn clear

.PHONY: deps
deps: clean
	cd site;yarn install

.PHONY: build
build:
	cd site;yarn install;yarn build

.PHONY: run
run:
	cd site;yarn start

search-index:
	docker build -t planton-cloud-docs .
	bash script/index.sh '$(algolia_indexing_api_key)'

.PHONY: build-image
build-image: build
	docker build --platform linux/amd64 -t ${docker_image} .
	docker push ${docker_image}

release: build-image search-index
	kubectx ho-planton-gcp-uc1-pcs-a-cora
	kubectl patch deployment -n planton-cloud-prod-docs planton-cloud-prod-docs-main --patch '{"spec": {"template": {"spec": {"containers": [{"name": "microservice","image": "'${docker_image}'"}]}}}}'

cli-docs:
	cd site/docs;planton docs --output-dir 99-cli
	cd site/docs;rm -f 99-cli/planton/root.md;rm -f 99-cli/planton/docs.md;rm -f 99-cli/planton/version.md;
	cp custom/cli-category.yml site/docs/99-cli/_category_.yml
	find . -name "root.md" |xargs rm
