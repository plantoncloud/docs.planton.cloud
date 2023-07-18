algolia_indexing_api_key ?= "algolia-indexing-api-key"

docker_image?=us-central1-docker.pkg.dev/planton-shared-services-jx/afs-planton-pcs-uc1-docker/gitlab.com/plantoncode/planton/pcs/microservice/docs:local

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
	docker build -t planton-pcs-docs .
	bash script/index.sh '$(algolia_indexing_api_key)'

.PHONY: build-image
build-image:
	docker build --platform linux/amd64 -t ${docker_image} .
	docker push ${docker_image}

release: build search-index image
	kubectx ho-planton-gcp-uc1-pcs-a-cora
	kubectl patch deployment -n planton-pcs-prod-docs planton-pcs-prod-docs-main --patch '{"spec": {"template": {"spec": {"containers": [{"name": "microservice","image": "'${docker_image}'"}]}}}}'

cli-docs:
	cd site/docs;planton docs --output-dir 05-cli
	cd site/docs;rm -f 05-cli/planton/root.md;rm -f 05-cli/planton/docs.md;rm -f 05-cli/planton/version.md;
	cp custom/cli-category.yml site/docs/05-cli/_category_.yml
	find . -name "root.md" |xargs rm
