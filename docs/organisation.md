# Online Banking Organization Page

## Project Overview
This project aims to develop a mobile banking application tailored for Cooperative Financial Institutions (CFIs). The application will be open-source and designed to integrate seamlessly with various core banking systems (CBS), ranging from simple batch-based systems to advanced live systems like adorsys [Ledgers](https://git.adorsys.de/adorsys/xs2a/ledgers), Mambu, and Mifos.

## Project Goals
The project goals are explained in [this document](https://github.com/ADORSYS-GIS/webank/blob/main/docs/architecture/01_introduction_and_goals.md).

## Team Structure

**Project Name:** webank  
**Project Repository:** [webank GitHub repository](https://github.com/ADORSYS-GIS/webank)

**Project Manager:** Francis Pouatcha  
- **Role:** Manages the entirety of the project, including logistics like budget and risk.

**Product Owner:** Francis Pouatcha (Temporal)  
- **Role:** Defines the product backlog and prioritizes work.

**Scrum Master:** Nancy Muyeh  
- **Role:** Facilitates Scrum processes and removes impediments.

**Development Team:**
- Nkwa Jude Tambe - Fullstack Developer
- Hans Chia - Fullstack Developer
- Koufan Menkene - Fullstack Developer
- Tchikaya Ariel - Fullstack Developer
- Nancy Muyeh - Fullstack Developer
- Enow Scott - Fullstack Developer

**Start Date:** September 10, 2024

## Scrum Framework

**Sprint Duration:** 2-3 weeks (This is subject to change)

**Sprint Goals:**
Sprint goals are set during the sprint planning meeting in the following manner:
- Ensure that the team understands the overall vision and objectives of the product.
- Review the product backlog to understand the priorities and the items that are most important to stakeholders.
- The Scrum team collaborates to define what can be achieved in the upcoming sprint.
- The team reviews and discusses the backlog items (user stories, tasks, etc.) that are candidates for inclusion in the sprint.
- The Product Owner presents the prioritized backlog items, and the team discusses which items they believe are feasible to complete within the sprint.
- Assess the team’s capacity based on their availability and past performance. This helps in setting a realistic scope for the sprint.
- **Define the Sprint Goal:**
  - **Goal Statement:** The sprint goal is a concise, clear statement that describes what the team aims to achieve by the end of the sprint. It should be specific, measurable, achievable, relevant, and time-bound (SMART).
  - **Focus:** The goal should focus on the outcome or value delivered rather than just the tasks or features implemented.
- Ensure that the entire team agrees on the sprint goal and is confident in their ability to meet it. The goal should be realistic and attainable.
- The team should commit to the sprint goal, understanding their role in achieving it and how it contributes to the overall product vision.
- Break down the sprint goal into actionable tasks or stories and create a detailed sprint backlog. This includes defining tasks, assigning them, and estimating their effort.
- Clearly define the acceptance criteria for each backlog item to ensure that the sprint goal can be objectively evaluated.

**Daily Standups:** 
This meeting will be held every working day at 9:00 AM GMT+1, either on Microsoft Teams or onsite in the meeting room at Skyengpro Cameroon.
- All team members are expected to attend daily. If any team member is unable to make it, they should inform the Scrum Master or other team members in advance and share their update on the team's Slack channel or via email.
- Every team member should come prepared to provide a quick update on their tasks. If any team member has blockers, they should be ready to discuss them briefly.
- All team members should ensure that their tasks are updated in the project's GitHub repository before the meeting.
- During the meeting, all team members are to answer the following questions:
  - What did you accomplish since the last standup?
  - What do you plan to work on before the next standup?
  - Are there any blockers or issues?
- The Scrum Master notes down the impediments mentioned by the Development Team and ensures that these are eliminated (not necessarily by themselves).

**Sprint Review:** 
This is a meeting held at the end of every sprint and is attended by the Scrum Master, Development Team, Product Owner, stakeholders, and interested parties.
- During this meeting, the Scrum team and stakeholders inspect the increment of work completed during the sprint and adapt the product backlog if needed.
- Start by revisiting the sprint goal and the work planned for the sprint.
- Discuss what was accomplished, including completed backlog items and any work that was not finished.
- The Development Team should demonstrate the work completed during the sprint. This might involve presenting new features, bug fixes, or other enhancements.
- Allow stakeholders to interact with the increment, if possible. This helps in gathering immediate feedback.
- Encourage feedback from stakeholders on the increment. This feedback can include what they like, what they don’t like, and any suggestions for improvement.
- Take note of any feedback and questions for further discussion and potential action.
- Discuss any changes or new items that need to be added to the product backlog based on the feedback received.
- Re-prioritize the backlog items as necessary to reflect new insights or changes in stakeholder needs.
- Based on the feedback and discussions, update the product backlog to include new items or re-prioritize existing ones.
- Ensure that any key changes or decisions are communicated to the team and stakeholders.

**Sprint Retrospective:** 
This Scrum ceremony focuses on reflecting on the past sprint to improve processes and team dynamics. The goal is to identify what went well, what didn’t, and how the team can improve in future sprints.
- The sprint retrospective should be planned for the end of each sprint, ideally within a few days after the Sprint Review. Ensure all team members can attend.
- Start the meeting by welcoming participants and stating the purpose of the retrospective. Emphasize that the goal is to improve and that all feedback is valuable.
- Reinforce a safe environment for open and honest communication. Ensure that feedback is constructive and that everyone has a chance to speak.
- **Review the Sprint:** Reflect on the sprint and gather data on what happened. This can include:
  - **What Went Well:** Discuss positive aspects and successes of the sprint.
  - **What Didn’t Go Well:** Identify challenges, issues, and obstacles faced during the sprint.
  - **Identify Practices:** Identify practices to start, stop, or continue.

## Version Control and GitHub Usage

**Repository Structure:** 
This project is organized into multiple repositories, each serving a specific purpose within the overall architecture. Each repository also has a self-defining README.md file that describes its purpose, installation, and usage. Below is a brief overview of each repository and its role in the project.

- **[webank](https://github.com/ADORSYS-GIS/webank):** This repository is mainly for documentation and some main modules of the project. The project overview is in the README.md, while all other documentation goes into the docs folder.
  
- **[webankOnlineBanking](https://github.com/ADORSYS-GIS/webank-OnlineBanking):** This repository contains the backend services of the project, implemented using Spring Boot. It handles business logic, data persistence, and API endpoints.

- **[webank-AppManager](https://github.com/ADORSYS-GIS/webank-AppManager):** This repository contains a Progressive Web App (PWA) built with React and TypeScript/JavaScript. This PWA has functionality for setting parameters associated with the CFI, such as:
  1. Distribution of the application to CFI staff members.
  2. Definition and maintenance of physical agency locations.
  3. Definition and maintenance of agency opening times.
  4. Management of banking teller accounts.

- **[webank-OwnerApp](https://github.com/ADORSYS-GIS/webank-OwnerApp):** This repository hosts the Owner Progressive Web App, which is built with React and TypeScript. This app has the following functionalities:
  1. Onboarding Admin-App (resp. Manager-App), issuing AdminID (resp. ManagerID) after verifying the authenticity of each staff member.
  2. Offboarding them.
  3. Suspending those apps whenever required.

- **[webank-TellerApp](https://github.com/ADORSYS-GIS/webank-TellerApp):** This contains a PWA for CFI staff managing banking users. It has the following functionalities:
  1. Onboarding User-App: The core element of User-App activation consists of:
     - Validating the identity of a user claiming access to one or more bank accounts.
     - Validating the legitimacy of the claimed access by looking up in the CBS.
     - Issuing the BankID to be returned to the User-App.
  2. 1st Level Support: A teller has a sound understanding of processes and procedures implemented by the online banking environment and acts as the first-level support instance to banking users.
  3. Offboarding User-App: The teller is also in charge of initiating the revocation of a User-App at the request of the banking user, after checking the legitimacy of the revocation request.

- **[webank-AdminApp](https://github.com/ADORSYS-GIS/webank-AdminApp):** This is another PWA with the following functionalities:
  1. Onboarding Teller-App, issuing TellerID after verifying the authenticity of the teller.
  2. Offboarding Teller-App.
  3. Suspending Teller-App when the teller is on leave.

**Branching Strategy:** A branch should be created for every new feature or fix.

**Commit Guidelines:** Use commit conventions effectively.

**Pull Requests:** Pull requests must be reviewed by at least two team members before merging.

## Communication Channels
**Slack/Teams/Other:** [Slack Channel](https://app.slack.com/client/T02977GUH/C07KTC0ER4L?cdn_fallback=1): This is the main communication channel for this project.  
- Microsoft Teams: For online meetings and other interactions.

## Documentation and Resources
[Link to Documentation](https://github.com/ADORSYS-GIS/webank/tree/main/docs/architecture)

## Contact Information
- [Francis Pouatcha](mailto:fpo@adorsys.de)
- [Nancy Muyeh](mailto:nancy.muyeh@adorsys.com)
- [Koufan Menkene](mailto:Menkene.Koufan@adorsys.com)
- [Nkwa Jude Tambe](mailto:Jude.Nkwa@adorsys.com)
- [Hans Chia](mailto:hans.chia@adorsys.com)
- [Tchikaya Ariel](mailto:Ariel.Tchikaya@adorsys.com)
- [Enow Scott](mailto:Scott.Takor@adorsys.com)
