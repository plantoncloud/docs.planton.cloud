---
slug: /open-source/kafka/how-kafka-cluster-work
sidebar_label: How kafka cluster work
---

# How Kafka Cluster work within planton cloud
Explore how Kafka clusters are configured and managed within Planton Cloud.

## Kafka Cluster API on Planton Cloud

```js reference title="Kafka Cluster API"
https://github.com/plantoncloud/planton-cloud-apis/blob/v0.0.1/cloud/planton/apis/v1/code2cloud/deploy/kafka/rpc/model.proto#L52-L177
```

* **Environment:** The specific environment where the Kafka cluster will be created.

* **Kafka Cluster name:** A user-defined name for the cluster.

* **Kafka Cluster Id:** An automatically generated identifier, constructed by concatenating the following elements
with hyphens `-`: Kafka Cluster Prefix + Environment ID + Kafka Cluster Name.

:::note
The Kafka Cluster Prefix is `kfc`.

For example, if the environment ID is planton-cloud-dev and the Kafka cluster name is main, then the Kafka cluster ID would be kfc-planton-cloud-dev-main.
:::

* **Kafka Broker Container Replicas:** number of brokers required to set up kafka cluster. The default value is 1.

* **Kafka Broker CPU Request:** CPU resource request value for the Kafka broker container.

* **Kafka Broker CPU Limit:** CPU resource limit value for the Kafka broker container.

* **Kafka Broker Memory Request:** memory resource request value for the Kafka broker container.

* **Kafka Broker Memory Limit:** memory resource limit value for the Kafka broker container.

* **Kafka Broker Disk Size:** size of the disk to be attached to each broker instance, specified in gigabytes (e.g., 1Gi).

* **Zookeeper Container Replicas:** number or zookeeper container replicas.

* **Zookeeper CPU Request:** CPU resource request value for the zookeeper container.

* **Zookeeper CPU Limit:** CPU resource limit value for the zookeeper container.

* **Zookeeper Memory Request:** memory resource request value for the zookeeper container.

* **Zookeeper Memory Limit:** memory resource limit value for the zookeeper container.

* **Zookeeper Disk Size:** size of the disk to be attached to each zookeeper instance, specified in gigabytes (e.g., 1Gi).

* **Standard Endpoint Domain:** The domain used to create internal and external endpoints for the Kafka cluster.

:::note
Only TLS-enabled standard-endpoints are eligible for creating Kafka endpoints.
:::

* **Endpoint Domain Name:** The domain name used for creating Kafka cluster endpoints. This value is derived from the configured standard-endpoint.

* **Enable Schema Registry:** flag to control if schema registry is created for the kafka-cluster.

* **Schema Registry Container Replicas:** number or schema registry container replicas.

* **Schema Registry CPU Request:** CPU resource request value for the schema registry container.

* **Schema Registry CPU Limit:** CPU resource limit value for the schema registry container.

* **Schema Registry Memory Request:** memory resource request value for the schema registry container.

* **Schema Registry Memory Limit:** memory resource limit value for the schema registry container.

* **Deploy Kowl Dashboard:** flag to control if kowl dashboard is created for the kafka-cluster.

* **Kafka Topics:** list of kafka topics to be created in kafka cluster.

## Kafka Topic

A Kafka topic is a named stream of records in Apache Kafka. Topics serve as the category or feed name to which records
are published. Producers write data to topics, and consumers read from topics. Topics allow you to organize your data 
into various categories, each potentially catering to different consumers or applications.

Topics in Kafka are multi-subscriber, meaning that a topic can have zero, one, or many consumers that subscribe to the
data written to it. Topics are also partitioned, allowing for horizontal scaling as each partition can be hosted on
a different server.

In Planton Cloud, Kafka topics are represented as a domain object within the Kafka Cluster details. They are an 
essential part of managing and configuring your Kafka clusters within the platform. 

Planton Cloud's management interface
provides tools to create, configure, and manage Kafka topics according to your specific needs. Whether you're defining 
topics for different data categories, setting up replication for fault tolerance, or configuring retention policies to 
manage storage, Planton Cloud streamlines these tasks, making Kafka topic management efficient and user-friendly.

* **Name:** A user-defined name for the topic.

* **Id:** An automatically generated identifier, constructed by concatenating the following elements with 
hyphens `-`: Kafka Topic Prefix + Environment ID + Kafka Cluster Name + Kafka Topic Name.

:::note
The Kafka topic Prefix is `kft`.

For example, if the environment ID is planton-cloud-dev, Kafka cluster name is main and kafka topic name is product-state, 
then the Kafka topic ID would be kft-planton-cloud-dev-main-product-state.
:::

* **partitions:** number of partitions for a kafka topic 

* **replicas:** number of replicas for a kafka topic.

* **config:** key value pairs with key being any valid property that can be applied to kafka topic and its value (for example key is `cleanup.policy` value is `compact`). 

## Sample Kafka Cluster Data

```yaml {8-61} showLineNumbers
apiVersion: product.planton.cloud/v1alpha1
kind: Kafka Cluster
metadata:
  id: kfc-planton-cloud-dev-main
  labels: {}
  name: main
spec:
  kafkaTopics:
    - config:
        cleanup.policy: compact
      id: kft-planton-cloud-dev-main-company-billing-account-state
      name: company-billing-account-state
      partitions: 1
      replicas: 1
    - config:
        cleanup.policy: delete
      id: kft-planton-cloud-dev-main-company-billing-subscription-state
      name: company-billing-subscription-state
      partitions: 1
      replicas: 1
  kubernetes:
    ingress:
      endpointDomainName: planton.live
      standardEndpointId: sep-planton-cloud-dev-planton-live
    isKowlDashboardEnabled: true
    kafkaBrokerContainer:
      diskSize: 1Gi
      replicas: 1
      resources:
        limits:
          cpu: 1000m
          memory: 1Gi
        requests:
          cpu: 50m
          memory: 100Mi
    schemaRegistryContainer:
      isEnabled: true
      replicas: 1
      resources:
        limits:
          cpu: 1000m
          memory: 1Gi
        requests:
          cpu: 50m
          memory: 100Mi
    zookeeperContainer:
      diskSize: 1Gi
      replicas: 1
      resources:
        limits:
          cpu: 1000m
          memory: 1Gi
        requests:
          cpu: 50m
          memory: 100Mi
  owner:
    companyId: xxxxxx
    environmentId: planton-cloud-dev
    environmentName: dev
    hostingClusterId: hc-planton-cloud-dev-main
    productId: planton-cloud
status:
  kubernetes:
    externalBootstrapServerHostname: kfc-planton-cloud-dev-main-bootstrap.dev.planton.live
    externalKowlDashboardUrl: https://kfc-planton-cloud-dev-main-kowl.dev.planton.live
    externalSchemaRegistryUrl: https://kfc-planton-cloud-dev-main-schema-registry.prod.planton.live
    internalBootstrapServerHostname: kfc-planton-cloud-dev-main-bootstrap.dev-internal.planton.live
    internalKowlDashboardUrl: https://kfc-planton-cloud-dev-main-kowl.dev-internal.planton.live
    internalSchemaRegistryUrl: https://kfc-planton-cloud-dev-main-schema-registry.dev-internal.planton.live
    kafkaSaslUsername: admin
    namespace: kfc-planton-cloud-dev-main
  lifecycle:
    isActive: true
    isPaused: false
  stackExecution:
    companyId: planton
    environmentId: planton-cloud-dev
    errorMessage: ""
    id: 163eeeed-92f3-4cfd-8c8e-f72d788f61df
    logContent: ""
    logFile: planton/product/planton-cloud/kfc-planton-cloud-dev-main.apply.20230801182641.log
    operationType: apply
    productId: planton-cloud
    resourceId: kfc-planton-cloud-dev-main
    resourceType: kafka_cluster
    stackName: kfc-planton-cloud-dev-main
    status: succeeded
    sysAudit:
      createdAt: "2023-08-01T18:00:27.256Z"
      createdBy: xxxxxxxxxx@gmail.com
      eventType: KAFKA_CLUSTER_EVENT_TYPE_STACK_APPLY_REQUESTED
      updatedAt: "2023-08-01T18:26:41.437Z"
      updatedBy: xxxxxxxxxx@gmail.com
    webUrl: ""
  sysAudit:
    createdAt: "2023-08-01T18:00:27.256Z"
    createdBy: xxxxxxxxxx@gmail.com
    eventType: KAFKA_CLUSTER_EVENT_TYPE_STACK_APPLY_REQUESTED
    updatedAt: "2023-08-01T18:26:41.437Z"
    updatedBy: xxxxxxxxxx@gmail.com
```

## Operator

#todo: @Swarup to add details about operator reference


                            





