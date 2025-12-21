# 🏔️ Trip26K - Pakistan Graduation Trip 🇵🇰

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

> **"From the coast of Karachi to the peaks of Kashmir."**

### 🚀 [**View Live Website**](https://musw02.github.io/Trip26K-Web/)

---

## 📝 About The Project

**Trip26K-Web** is a custom-built React application designed to manage and showcase our 12-day graduation trip across Pakistan (Jan 2026). 

Unlike a static travel blog, this app functions as a **digital command center** for the 9-member travel squad. It includes a detailed day-by-day itinerary, expense tracking, and a **hidden administrative system** to manage countdown alerts.

---

## ✨ Key Features

### 🌍 For the Public
* **Interactive Itinerary**: A timeline view of our journey from Karachi ➔ Islamabad ➔ Kashmir ➔ Lahore.
* **Destination Gallery**: Visual showcase of Arang Kel, Sharda, and Malam Jabba.
* **Travel Squad**: Profiles for all travelers with roles (Trip Leader, Photographer, etc.).
* **Transport & Costs**: Transparent breakdown of our logistics and budget.

### 🔐 Admin Command Center (Secret)
* **Hidden Route**: A password-protected dashboard (`/admin`) not visible in the navigation.
* **Email Broadcast System**: Integrated with **EmailJS** to send mass updates.
* **Real-Time Countdown**: Calculates the exact Days, Hours, and Minutes until departure.
* **One-Click Alerts**: Sends personalized HTML emails to all travelers with the live countdown timer.

---

## 🛠️ Tech Stack

* **Frontend**: React 18 + TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS + Shadcn UI
* **Routing**: React Router (HashRouter for GitHub Pages compatibility)
* **Backend Services**: EmailJS (Serverless Email API)
* **Deployment**: GitHub Actions + GitHub Pages


---

## 💻 Running Locally

If you want to explore the code or fork this project:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/MusW02/Trip26K-Web.git](https://github.com/MusW02/Trip26K-Web.git)
    cd Trip26K-Web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Set up EmailJS (Optional)**
    To make the Admin Panel work, create a `.env` file or update `Admin.tsx` with your own keys:
    * `SERVICE_ID`
    * `TEMPLATE_ID`
    * `PUBLIC_KEY`

---

## 📬 Contact

**Mustafa** 
* Project Link: https://github.com/MusW02/Trip26K-Web
* GitHub: https://github.com/MusW02
* Linkedin: www.linkedin.com/in/mustafa-waqar-431975293


---

*Built with ❤️ for the BCR Gang Graduation Trip 2026*
