---
title: ''
slug: /cli//planton/product/microservice/deployment/config
sidebar_label: config
---
## planton product microservice deployment config

get microservice deployment config from the code project directory

```
planton product microservice deployment config [flags]
```

### Options

```
      --code-project-dir string   code project directory to read input required for create a microservice deployment resource (default "/Users/swarup/scm/gitlab.com/plantoncode/planton/pcs/microservice/docs/site/docs")
  -h, --help                      help for config
      --product-env-name string   name of the product env to setup the microservice deployment input. This value is used to look up env specific config from _devops/deploy directory
      --with-local                flag to toggle config load to include/exclude deployment config overrides in local.yaml (default true)
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

