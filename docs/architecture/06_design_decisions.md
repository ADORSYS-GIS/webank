# Key Architecture Decisions
## Architecture Style
### Modular Microservice Architecture:

**Advantages:**
. **Efficiency:** Independent scaling of microservices based on demand.
. **Scalability:** Scale only necessary components, not the entire system.
. **Resilience:** Isolated failures prevent system-wide outages.
. **Resource Optimization:** Distributed workloads improve performance and reduce costs.


### Alignment with DevOps Practices
. **Ownership & Accountability:** Encourages collaboration between development and operations teams.

. **CI/CD Support:** Independent testing, deployment, and updating of services for frequent releases.

### Modularity & Maintenance
**Loose Coupling:** Easier to reuse services in different contexts.

**Simplified Maintenance:** Focus on individual services without the need to understand the entire codebase.

### Technology Stack

| **Component** | **Technology**   | **Description**                                                                                     |
|---------------|-------------------|-----------------------------------------------------------------------------------------------------|
| Backend        | Java Spring Boot  | Simplifies development of scalable applications, supports microservices, robust security features. |
| Frontend       | ReactJS           | Builds dynamic, high-performance UIs with reusable components, enhances maintainability.           |

### Security Fundamentals

| **Security Feature**                          | **Description**                                                                                                         |
|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Familiar Mobile Money Workflows               | Adopts familiar workflows for user convenience and trusted security practices.                                          |
| No Central Passwords                          | Eliminates central passwords, focusing on decentralized authentication to reduce risk.                                   |
| Local PIN for Transaction Authentication       | Uses a local PIN for transactions, never stored centrally. Derives cryptographic keys on-device.                        |
| User-Controlled PIN Management                 | Users can change PINs anytime; old PIN authenticates the new PIN. Forgotten PIN results in BankID revocation and reissue. |
| Cryptographic Device Binding                  | Stores cryptographic keys securely on the device for transaction signing, reducing risks like phishing and unauthorized access. |


### Core Banking Integration

. **Access Control:** Integration with core banking systems will depend on the access control schemes of both the core banking system and the online banking environment.

### User Experience Fundamentals

| **Aspect**                        | **Description**                                                                                           |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| User Mobile Device                | Mobile phones are the primary devices for users, often used for banking.                                 |
| App Installation & Onboarding     | Assistance provided by tellers for app installation and legitimation. Ensures users have the original app version. |
| Device Access Protection          | App PIN required to start and encrypt access credentials; prevents unauthorized access.                   |
| Bank Account Identifier (BankID)  | Represents bank accounts in-app with unique designs. Acts as a digital certificate for transactions.      |



# Architectural Decisions

In developing the mobile banking application, several key architectural decisions were made to ensure that the system is secure, scalable, and adaptable to the needs of Cooperative Financial Institutions (CFIs) across multiple African countries. Below is a detailed decision log along with the rationale behind each choice.

## Decision Log

| Decision                                      | Rationale                                                                                                                      |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Use of Verifiable Credentials**             | Verifiable credentials offer a powerful and flexible means of managing access credentials. By allowing each application to present verifiable credentials, the system ensures that permissions are securely managed and dynamically verifiable. This approach enhances security by enabling selective disclosure, where only the necessary information is revealed during an authentication process, thus minimizing the exposure of sensitive data. |
| **Use of SD-JWT as the Data Format for Credentials** | SD-JWT (Selective Disclosure JSON Web Token) is a robust format that supports selective disclosure, allowing users to share only the specific parts of their credentials that are necessary for a particular transaction. This capability is crucial for maintaining user privacy and enhancing security. The use of SD-JWT aligns with our commitment to providing a secure, privacy-respecting platform that can handle complex credential management scenarios effectively. |
| **No Server Storage of Users’ BankID**        | BankIDs are issued by tellers and are verifiable upon submission, eliminating the need for server-side storage. This decision reduces the risk of sensitive credential data being compromised in a server breach and aligns with our strategy of decentralizing data management. By keeping BankID management client-side, we enhance user control over their credentials and minimize potential attack vectors. |
| **Use of Progressive Web Applications (PWA) for All Apps** | PWAs offer several advantages that make them ideal for the mobile banking application. They are simple to develop, install, and upgrade, which accelerates the development cycle and simplifies deployment across different devices. PWAs are also fast to load, providing a smooth user experience even on low-end devices with limited processing power. Additionally, PWAs do not require distribution through app stores, which reduces dependency on third-party platforms and simplifies updates, ensuring that users always have access to the latest version. |
| **Relying on ISO20022 Data Model for Designing Banking Services** | The ISO20022 data model is an internationally recognized standard that offers the highest probability of integrating with most core banking systems. By adopting this standard, we ensure that our application is compatible with a wide range of financial systems, both legacy and modern. This compatibility is crucial for achieving seamless integration with existing infrastructure, reducing the complexity and cost of deployment for CFIs. |
