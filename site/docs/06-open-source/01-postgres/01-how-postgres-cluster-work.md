---
slug: /open-source/postgres/how-postgres-cluster-work
sidebar_label: How postgres cluster work
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How postgres cluster work
Learn how postgres cluster work within Planton Cloud

## Specification:

* **Environment:** environment in which the postgres cluster has to be created
* **Postgres Cluster name:** Name of the cluster given by user.
* **Postgres Cluster Id:** Auto generated value with the combination of
  following `Postgres Cluster Prefix + Environment Id + Postgres Cluster Name`
  and all these values are joined by hypen `-`.

:::note
Postgres Cluster Prefix is `pgc`.

If environment id is `planton-cloud-dev` and postgres cluster name is `main`
then postgres cluster id would be `pgc-planton-cloud-dev-main`
:::

* **Container Replicas:** number of replicas of postgres pods. default value will be 1
* **CPU Request:** postgres container cpu resource request value
* **CPU Limit:** postgres container cpu resource limit value
* **Memory Request:** postgres container memory resource request value
* **Memory Limit:** postgres container memory resource limit value
* **Disk Size:** storage to allocate for each postgres instance in gb. ex: 1Gi
* **Standard Endpoint Domain:** standard-endpoint domain to be used for creating internal and external endpoints for
  postgres-cluster.

:::note
only tls enabled standard-endpoints are eligible for creating postgres endpoints.
:::

* **Endpoint Domain Name:** endpoint-domain-name used for creating postgres-cluster endpoints.
  value is computed from the configured standard-endpoint.

following is the sample postgres cluster resource details in yaml

```yaml {4-5,7-20,23}
apiVersion: product.planton.cloud/v1alpha1
kind: PostgresCluster
metadata:
  id: pgc-planton-cloud-dev-jul2923
  name: jul2923
spec:
  kubernetes:
    ingress:
      endpointDomainName: planton.live
      standardEndpointId: sep-planton-cloud-dev-planton-live
    postgresContainer:
      diskSize: 1Gi
      replicas: 1
      resources:
        limits:
          cpu: 250m
          memory: 250Mi
        requests:
          cpu: 50m
          memory: 100Mi
  owner:
    companyId: xxxxxxx
    environmentId: planton-cloud-dev
    environmentName: dev
    hostingClusterId: hc-planton-gcp-jul2423
    productId: planton-cloud
status:
  kubernetes:
    externalClusterHostname: pgc-planton-cloud-dev-jul2923.dev.planton.live
    internalClusterHostname: planton-cloud-jul2923.pgc-planton-cloud-dev-jul2923
    kubeEndpoint: coming-soon
    namespace: pgc-planton-cloud-dev-jul2923
    portForwardCommand: coming-soon
    service: coming-soon
  lifecycle:
    isActive: true
  stackExecution:
    companyId: planton
    environmentId: planton-cloud-dev
    id: 902cdb40-9688-467d-9fd1-84cfe4cdc4da
    logFile: planton/product/planton-cloud/pgc-planton-cloud-dev-jul2923.apply.20230819205641.log
    operationType: apply
    productId: planton-cloud
    resourceId: pgc-planton-cloud-dev-jul2923
    resourceType: postgres_cluster
    stackName: pgc-planton-cloud-dev-jul2923
    status: pending
    sysAudit:
      createdAt: "2023-07-31T22:12:39.906Z"
      createdBy: xxxxxxxxxxxxxxxxxx@gmail.com
      eventType: POSTGRES_CLUSTER_EVENT_TYPE_STATE_UPDATED
      updatedAt: "2023-08-19T20:56:41.525Z"
      updatedBy: xxxxxxxxxxxxxxxxxx@gmail.com
  sysAudit:
    createdAt: "2023-07-31T22:12:39.906Z"
    createdBy: xxxxxxxxxxxxxxxxxx@gmail.com
    eventType: POSTGRES_CLUSTER_EVENT_TYPE_STATE_UPDATED
    updatedAt: "2023-08-19T20:56:41.525Z"
    updatedBy: xxxxxxxxxxxxxxxxxx@gmail.com
```

## Operator:

#todo: @Swarup to add details about operator reference


                            





