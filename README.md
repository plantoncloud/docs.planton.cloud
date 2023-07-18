# planton cloud docs

This documentation website is a repository of knowledge for the customers of planton cloud.

## search index

```shell
export ALGOLIA_INDEXING_API_KEY=e6201bf70d7f6c76267b7c05ff7d9585
make search-index algolia_indexing_api_key=$ALGOLIA_INDEXING_API_KEY
```

## quick deploy

Run the below command to create a new docker image and push to the docker registry.

```shell
export ALGOLIA_INDEXING_API_KEY=e6201bf70d7f6c76267b7c05ff7d9585
new_image=us-central1-docker.pkg.dev/planton-shared-services-jx/afs-planton-pcs-uc1-docker/gitlab.com/plantoncode/planton/pcs/microservice/docs:$(uuidgen)
make release docker_image=$new_image algolia_indexing_api_key=$ALGOLIA_INDEXING_API_KEY
```
