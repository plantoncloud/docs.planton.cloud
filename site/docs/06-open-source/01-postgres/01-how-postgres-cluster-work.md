---
slug: /open-source/postgres/how-postgres-cluster-work
sidebar_label: How postgres cluster work
---

# How Postgres Cluster work within planton cloud
Explore how Postgres clusters are configured and managed within Planton Cloud.

## Specification
* **Environment:** The specific environment where the Postgres cluster will be created.

* **Postgres Cluster name:** A user-defined name for the cluster.

* **Postgres Cluster Id:** An automatically generated identifier, constructed by concatenating the following elements
with hyphens `-`: Postgres Cluster Prefix + Environment ID + Postgres Cluster Name.

:::note
The Postgres Cluster Prefix is `pgc`.

For example, if the environment ID is planton-cloud-dev and the Postgres cluster name is main, then the Postgres cluster ID would be pgc-planton-cloud-dev-main.
:::

* **Container Replicas:** The number of replicas for Postgres pods. The default value is 1.

* **CPU Request:** The CPU resource request value for the Postgres container.

* **CPU Limit:** The CPU resource limit value for the Postgres container.

* **Memory Request:** The memory resource request value for the Postgres container.

* **Memory Limit:** The memory resource limit value for the Postgres container.

* **Disk Size:** The storage allocation for each Postgres instance, specified in gigabytes (e.g., 1Gi).

* **Standard Endpoint Domain:** The domain used to create internal and external endpoints for the Postgres cluster.

:::note
Only TLS-enabled standard-endpoints are eligible for creating Postgres endpoints.
:::

* **Endpoint Domain Name:** The domain name used for creating Postgres cluster endpoints. This value is derived from the configured standard-endpoint.

## Sample Postgres Cluster Data

```yaml {4-5,7-20,23} showLineNumbers
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
    companyId: planton
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

## Operator

#todo: @Swarup to add details about operator reference


                            





