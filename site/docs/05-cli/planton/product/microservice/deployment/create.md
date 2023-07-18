---
title: ''
slug: /cli//planton/product/microservice/deployment/create
sidebar_label: create
---
## planton product microservice deployment create

create a microservice deployment to a product env

```
planton product microservice deployment create [flags]
```

### Options

```
      --code-project-dir string       code project directory required to read the deployment config (default "/Users/swarup/scm/gitlab.com/plantoncode/planton/pcs/microservice/docs/site/docs")
      --container-image string        container image to be set for the deployment config. ex: main, review-1, review-2
  -h, --help                          help for create
      --microservice-version string   microservice version to be deployed
      --output-file string            optional output file path to save the details of the microservice deployment created with this command
      --product-env-name string       name of the product env required to read the deployment config
```

### Options inherited from parent commands

```
      --debug                               set log level to debug
      --microservice-deployment-id string   id of the microservice deployment
      --microservice-id string              id of the microservice
      --product-env-id string               id of the product environment
      --product-id string                   id of the product on planton cloud
      --product-key string                  key of the product
```

