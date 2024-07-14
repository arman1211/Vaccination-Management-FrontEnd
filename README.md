# Vaccination Management System

Welcome to the Vaccination Management System project! This application aims to streamline and manage vaccine campaigns efficiently. It is designed to handle vaccine information, patient bookings, and reviews seamlessly. Below you'll find comprehensive documentation to help you understand, set up, and contribute to the project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Vaccination Management System is designed to facilitate the management of vaccine campaigns. It allows administrators to create and manage vaccine campaigns, while patients can book appointments and leave reviews. This project aims to improve the efficiency and accessibility of vaccination processes.

## Features

- **Vaccine Campaign Management**: Create, update, and delete vaccine campaigns.
- **Patient Appointments**: Patients can book appointments for vaccine doses.
- **Review System**: Patients can leave reviews after receiving their vaccine dose.
- **Responsive Design**: Fully responsive interface for a seamless experience across devices.

## Technologies

This project uses a variety of modern technologies:

- **Frontend**: React, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **Database**: SQLite (default), easily configurable to other databases
- **HTTP Client**: Axios

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/vaccination-management-system.git
    cd vaccination-management-system
    ```

2. **Backend Setup**:
    - Create a virtual environment:
      ```sh
      python -m venv venv
      source venv/bin/activate  # On Windows use `venv\Scripts\activate`
      ```
    - Install backend dependencies:
      ```sh
      pip install -r requirements.txt
      ```
    - Apply migrations:
      ```sh
      python manage.py migrate
      ```
    - Start the Django server:
      ```sh
      python manage.py runserver
      ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
      ```sh
      cd frontend
      ```
    - Install frontend dependencies:
      ```sh
      npm install
      ```
    - Start the React development server:
      ```sh
      npm start
      ```

## Usage

### Running the Application

- Start the backend server:
  ```sh
  python manage.py runserver
