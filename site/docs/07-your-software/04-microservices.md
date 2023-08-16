---
slug: /your-software/microservices
sidebar_label: Microservices
---

# Microservices

Microservices architecture is an approach to building software applications that focuses on breaking down the
application into small, independent services that can be developed, deployed, and scaled independently. Each
microservice is responsible for a specific business function and can communicate with other microservices through APIs.

## 12 Factor App Principles

When developing microservices, it's important to follow the 12 factor app principles, which are a set of best practices
for building scalable and maintainable applications. The 12 factors include:

1. Codebase: Each microservice should have a separate codebase that is tracked in version control.
2. Dependencies: Each microservice should have explicit dependencies that are isolated from other microservices.
3. Config: Configuration should be stored in environment variables, and not in code.
4. Backing Services: Each microservice should treat backing services (such as databases) as attached resources that can
   be
   attached and detached at will.
5. Build, release, run: Each microservice should be built into a deployable artifact, and then released and run
   independently.
6. Processes: Each microservice should be stateless and share nothing with other microservices.
7. Port Binding: Each microservice should export services via a port binding mechanism such as HTTP.
8. Concurrency: Each microservice should be designed to be horizontally scalable.
9. Disposability: Each microservice should be designed to be disposable and easily restarted or terminated.
10. Dev/Prod parity: The development, staging, and production environments should be as similar as possible.
11. Logs: Each microservice should log to standard output, and log data should be collected and analyzed centrally.
12. Admin Processes: Administrative tasks such as database migrations should be run as one-off processes.

## Cloud Native Microservices

Microservices can be designed to be cloud native, which means they are designed to run in the cloud and take advantage
of cloud services such as auto-scaling, load balancing, and containerization. To build cloud native microservices, you
should follow best practices such as:

1. Use containerization: Microservices should be deployed in containers using technologies such as Docker and
   Kubernetes.
2. Use environment variables for configuration: Configuration should be stored in environment variables, which can be
   easily managed and updated.
3. Use secrets for sensitive data: Secrets such as passwords and API keys should be stored in Kubernetes Secrets, which
   can
   be securely managed and accessed.
4. Use CICD pipelines: Microservices should be built, tested, and deployed using a CICD pipeline that automates the
   entire
   process.

## Environment Variables for Microservices Configuration

Environment variables are a key mechanism for injecting configuration into microservices. By storing configuration in
environment variables, you can easily manage and update the configuration without having to modify the code. Environment
variables can be set at the container level or at the pod level in Kubernetes. In addition, Kubernetes provides a
ConfigMap resource that can be used to store configuration data as key-value pairs.

## Injecting Secrets Configuration for Microservices

When deploying microservices on Kubernetes, it's important to manage sensitive data such as passwords and API keys
securely. Kubernetes provides a Secrets resource that can be used to store sensitive data. Secrets can be mounted as
files or environment variables in the container running the microservice. You can also use tools such as HashiCorp Vault
to manage and securely distribute secrets.

## CICD Pipelines for Microservices

CICD pipelines are a critical part of the microservices development process. A CICD pipeline automates the process of
building, testing, and deploying microservices, which helps to ensure that the microservices are delivered quickly
