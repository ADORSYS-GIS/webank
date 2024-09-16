# Introduction and Goals

This project aims to develop a mobile banking application tailored for Cooperative Financial
Institutions (CFIs). The application will be open-source and designed to integrate seamlessly with
various core banking systems (CBS), ranging from simple batch-based systems to advanced live
systems like Mambu.

# Requirements Overview

## Quality Goals

| prio | Goals   | Description |
|----|---------|-------------|
| 1  | High Security | Implement advanced security features, including cryptographic signing and role-based access control. |
| 2  | Modularity and Extensibility | Ensure the system is modular and extensible to support future development and easy integration with other services. |
| 3  | User-Friendly Design | Develop a user-friendly interface that is intuitive and can be easily translated into multiple languages. |

## Buisness Goals

| prio  | Business Goals  | Description |
|----|-----------------|-------------|
| 1  | Enhance Financial Accessibility and Inclusivity | Improve access to financial services for cooperatives financial institutions (CFIs), enabling them to serve underserved communities more effectively. |
| 2  | Provide a Secure, Flexible, and Scalable Platform | Develop a mobile banking platform that is secure, adaptable to different financial institutions' needs, and scalable to accommodate future growth. |
| 3  | Facilitate Seamless Integration with Core Banking Systems | Ensure the platform can easily integrate with existing core banking systems to provide a smooth, unified experience for users. |


# Architecture Constraints

**1.** The application must comply with ISO20022 data standards to simplify connectivity to
different core banking systems.

**2.** Compatibility with both live and non-live core banking systems is essential.

**3.** The platform must support a range of devices, from older smartphones to desktops.

## Stakeholders

| prio  | Key Stakeholders | Description |
|----|------------------|-------------|
| 1  | CFIs | Community Financial Institutions, which are the primary users of the platform. |
| 2  | ESASCCO | The Eswatini Association of Savings and Credit Cooperatives, overseeing financial cooperatives in the region. |
| 3  | End-users | Members of CFIs who will use the platform for their banking needs. |
| 4  | Adorsys Development Team | The team responsible for developing and maintaining the platform. |
| 5  | Third-party Developers | External developers who may integrate with or extend the platform's functionality. |
