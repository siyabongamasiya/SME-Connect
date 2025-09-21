# SME Connect

SME Connect is a digital platform designed to close the **visibility gap** for South Africa’s **formal and registered SMEs**.  
Although SMEs make up **91% of formal businesses**, contribute **60% of employment**, and add roughly **34% to GDP**, many remain hard to find online. SME Connect makes discovery, connection, and engagement with these businesses seamless.

---

##  Project Overview

**The Problem**  
- Customers struggle to find local SMEs due to poor online visibility.  
- SMEs lose potential customers and revenue by not being accessible through modern discovery channels.  

**The Solution**  
SME Connect provides a **centralized, easy-to-use platform** where customers can search, discover, and connect with **formal and registered SMEs**.  
The product gives SMEs affordable visibility and empowers customers with reliable information and options.

---

##  Key Features

- **Business Profiles** – Registered SMEs can showcase their services, contact info, and offerings.  
- **Search & Discovery** – Customers can easily find SMEs by category, location, or service.  
- **Analytics for SMEs** – Track profile views, customer interactions, and engagement insights.  
- **Localized by Design** – Tailored for South African SMEs, solving challenges unique to the region.  
- **Secure Platform** – Built with best practices from the Secure Software Development Lifecycle (SSDLC).  

---

##  Tech Stack

- **Frontend:** React 19 + TypeScript  
- **UI Framework:** Tailwind CSS, Radix UI components  
- **State Management:** React Hook Form, Context API  
- **Theming:** next-themes (dark/light support)  
- **Backend:** Node.js / Express (planned)  
- **Database:** PostgreSQL / JSON-based prototype storage (planned)  

---

##  Security Approach (SSDLC)

1. **Security Requirements (Risk Assessment):**  
   - Identify risks around user data, authentication, and business visibility.  
   - Define secure handling of customer and SME information.  

2. **Threat Modelling & Design Review:**  
   - Protect against unauthorized access and data leaks.  
   - Ensure profiles and analytics are accessed only by verified businesses.  

3. **Development (Secure Coding Practices):**  
   - Use input validation and sanitization.  
   - Follow OWASP secure coding guidelines.  

4. **Security Testing:**  
   - Unit and integration testing with a focus on vulnerabilities.  
   - Penetration testing in later phases.  

5. **Assessment & Secure Integration:**  
   - Regular code audits.  
   - Secure integration with 3rd-party services.  

---

##  Customer Segments

- **Primary:** Registered SMEs (formal businesses across industries).  
- **Secondary:** Customers seeking reliable local businesses.  

---

##  Value Proposition

1. **Data-Driven Empowerment for SMEs**  
   SMEs gain access to insights usually reserved for larger enterprises (e.g., “200 profile views, 25 inquiries”).  

2. **Localized & Inclusive by Design**  
   Built specifically for South African SMEs, solving visibility and customer access challenges.  

---

##  Project Structure

```
SME-Connect/
│
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, logos
│   ├── components/          # Reusable components
│   │   ├── ui/              # Radix/Tailwind UI elements
│   │   ├── BusinessProfile.tsx
│   │   ├── CustomerDiscovery.tsx
│   │   ├── EngagementPage.tsx
│   │   ├── AnalyticsDashboard.tsx
│   │   └── SMEDashboard.tsx
│   ├── design/              # Style-related files
│   ├── pages/               # App pages
│   ├── main.tsx             # Entry point
│   └── App.tsx              # Root component
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

##  Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/siyabongamasiya/SME-Connect.git
   cd SME-Connect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

##  Future Roadmap

- ✅ Business profiles & customer discovery  
- ✅ Basic analytics for SMEs  
- 🔄 Integration with maps & geolocation  
- 🔄 In-app messaging between SMEs and customers  
- 🔄 AI-driven recommendations for users  

---
