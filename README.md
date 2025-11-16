# Overwatch Collegiate Hub (OCH) – MVP

## Project Description
Overwatch Collegiate Hub (OCH) is a web application designed to centralize information about collegiate Overwatch across multiple conferences (NECC, ECAC, CECC, Overwatch Collegiate). The MVP demonstrates the core functionality of the platform:

- User authentication and profile management
- Viewing live standings
- Viewing basic team and player profiles
- Initial automated data import using AI-assisted scripts

The MVP proves the concept works and sets the foundation for additional features like full schedules, news highlights, and advanced analytics.

---

## Current Status
- **User Management:** Signup, login, basic profile update ✅  
- **Core Features:** Standings table and team/player profiles ✅  
- **AI Integration:** Initial data import script to populate match results ✅  
- **Containerization:** Frontend and backend Dockerfiles created, app runs locally in Docker ✅  
- **Deployment:** Attempted deployment to Google Cloud Platform (URL included below) ✅  

---

## Technology Stack
- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Containerization:** Docker & docker-compose  
- **Cloud Deployment:** Google Cloud Platform  
- **CI/CD:** GitHub Actions (setup for automated builds and tests)  
- **AI Tools:** GitHub Copilot and ChatGPT used for code generation, debugging, and scripting

---

## AI-Assisted Development
- GitHub Copilot generated boilerplate React components and Express routes  
- ChatGPT assisted with writing the match data parsing script and debugging API endpoints  

---

## Setup Instructions

### Local Setup
1. Clone the repository:
```bash
git clone https://github.com/GhoulURG/overwatch-collegiate-hub.git
cd overwatch-collegiate-hub

