---
slug: /hosting-environments
sidebar_label: Hosting Environments
---

# Hosting Environments

Planton Cloud provides a fully-managed Kubernetes cluster that includes all the necessary components needed to run and
deploy containerized applications. The batteries included Kubernetes cluster created is called as a hosting environment
which is fully managed by Planton Cloud. The Kubernetes cluster includes a number of operators that enable developers to
easily deploy and manage various components within their applications. By providing a fully-managed Kubernetes cluster,
Planton Cloud enables developers to focus on building and deploying their applications, without worrying about the
underlying infrastructure.

## Istio

Istio is an open-source service mesh that provides traffic management, security, and observability for
microservices-based applications. Istio can be challenging to configure and manage, especially in a large-scale
production environment. The Istio operator included in the batteries included cluster simplifies the deployment and
management of Istio, by providing preconfigured templates and settings that are optimized for performance and security.
Developers can easily deploy and manage Istio within their Kubernetes cluster, without needing to worry about the
underlying infrastructure.

## Cert Manager

Cert Manager is an open-source tool that automates the management and issuance of TLS certificates. Certificates are
essential for securing web traffic, and managing them can be a time-consuming and error-prone process. The cert-manager
operator included in the batteries included cluster simplifies the management of TLS certificates, by automating the
process of obtaining, renewing, and revoking certificates. Developers can easily configure and manage TLS certificates
for their applications, without needing to worry about the underlying infrastructure.

## Zalando Postgres Operator

PostgreSQL is an open-source relational database management system that is widely used in modern applications. Setting
up and managing PostgreSQL can be a complex and time-consuming process, especially in a large-scale production
environment. The operator included in the batteries included cluster simplifies the deployment and management
of PostgreSQL databases, by providing preconfigured templates and settings that are optimized for performance and
reliability. Developers can easily deploy and manage PostgreSQL databases within their Kubernetes cluster, without
needing to worry about the underlying infrastructure.

## Strimzi Kafka Operator

Kafka is a distributed streaming platform that is used for building real-time data pipelines and streaming applications.
Setting up and managing Kafka can be a complex and time-consuming process, especially in a large-scale production
environment. The Kafka operator included in the batteries included cluster simplifies the deployment and management of
Kafka clusters, by providing preconfigured templates and settings that are optimized for performance and reliability.
Developers can easily deploy and manage Kafka clusters within their Kubernetes cluster, without needing to worry about
the underlying infrastructure.

The batteries included Kubernetes cluster provided by Planton Cloud enables developers to easily deploy and manage
various components within their applications, including Istio, cert-manager, PostgreSQL, and Kafka. By providing a
fully-managed Kubernetes cluster, Planton Cloud enables developers to focus on building and deploying their
applications, without worrying about the underlying infrastructure. The Kubernetes cluster includes a number of
preconfigured templates and settings that are optimized for performance and reliability, which helps to simplify the
deployment and management of complex applications. Overall, the batteries included Kubernetes cluster provided by
Planton Cloud is a powerful tool that can help developers to streamline the deployment and management of their
applications, while also ensuring that they are secure and properly configured.
