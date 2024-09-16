# WEBANK
## Mobile banking platform for financial inclusion

## Table of Contents
- [Project Overview](#project-overview-and-goals)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Project Documentation](#project-documentation)
- [Development and Contribution](#development-and-contribution)
- [License](#license)
- [Contact Information](#contact-information)
- [Acknowledgements](#acknowledgements)

## Project Overview and Goals

The Mobile Banking Application for ESASCCO is an open-source solution designed for Cooperative Financial Institutions (CFIs). This application facilitates secure and efficient banking operations, enabling users to manage accounts, transfer funds, and apply for loans seamlessly. By integrating with various core banking systems, such as Ledgers CBS, it enhances financial accessibility and inclusivity.

### Project goals

| prio  | Goals  | Description |
|----|-----------------|-------------|
| 1  | Enhance Financial Accessibility and Inclusivity | Improve access to financial services for cooperatives financial institutions (CFIs), enabling them to serve underserved communities more effectively. |
| 2  | Provide a Secure, Flexible, and Scalable Platform | Develop a mobile banking platform that is secure, adaptable to different financial institutions' needs, and scalable to accommodate future growth. |
| 3  | Facilitate Seamless Integration with Core Banking Systems | Ensure the platform can easily integrate with existing core banking systems to provide a smooth, unified experience for users. |
## Features
- **Account Management**: Users can check balances, view transactions, and manage their accounts.
- **Fund Transfers**: Initiate payments and transfer funds easily.
- **Loan Applications**: Apply for loans directly through the app.
- **Progressive Web Application (PWA)**: Accessible via web browsers, no app store required.
- **Offline Functionality**: Essential features available even without internet access.

## Technologies Used
For a detailed overview of the technologies employed in this project, please refer to the [Technologies.md](https://github.com/ADORSYS-GIS/webank/tree/main/docs/architecture/03_core_components.md) Document.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher (comes with Node.js)
- **Java JDK**: Version 11 or higher
- **Maven**: Version 3.6 or higher
- **Git**: Version 2.x or higher (for cloning the repository)

## Installation Instructions
### Frontend
1. **Clone the Frontend repository**:
   **For the UserApp :**
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-UserApp.git
   ```
   **For the TellerApp :**
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-TellerApp.git
   ```
   **For the AdminApp :**
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-AdminApp.git
   ```
   **For the OwnerApp :**
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-AppManager.git
   ```
   **For the ManagerApp :**
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-UserApp.git
   ```
2. **Navigate into the project directory**:
   Example for the UserApp : 
   ```bash
   cd webank-UserApp
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```

### Backend
1. **Clone the Backend repository**:
   ```bash
   git clone https://github.com/ADORSYS-GIS/webank-OnlineBanking.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd webank-OnlineBanking
   ```
3. **Install dependencies**:
   ```bash
   mvn install
   ```
5. **Run the application**:
   ```bash
   mvn spring-boot:run
   ```

## Usage
Once the application is running, users can:
- Access the app via a web browser using the provided URL.
- Follow the onboarding process guided by the banking tellers.
- Utilize the app to manage their banking needs as outlined in the features.

## Project Documentation
[Documentation](https://github.com/ADORSYS-GIS/webank/tree/main/docs/architecture/architecture-overview.md) provides actual automatically build documentation, such as:

- Architecture documentation
- Use-cases diagrams
- Developer guides
- Release policy
- Roadmap
- Release notes


## Development and Contribution
Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to the project.

## License
This project is licensed under the Apache License 2.0 . See the [LICENSE](LICENSE) file for more details.

## Contact Information
For questions or support, please reach out to:
- **Email**: fpo@adorsys.de
- **GitHub Issues**: [Submit an issue](https://github.com/ADORSYS-GIS/webank/issues)

## Acknowledgements
- Thanks to the adorsys development team for their contributions.
- Special thanks to the contributors and libraries that supported this project.
