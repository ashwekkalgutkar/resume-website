# Resume Page

This project is a resume webpage built with Next.js, React, Framer Motion, and other modern web development tools. It features an interactive, animated UI with sections such as About, Experience, Education, Projects, Skills, Extra-Curricular, and Contact. The page allows users to navigate smoothly between sections and submit a contact form with validation.

## Features

- **Responsive Design**: Built with Tailwind CSS to ensure the page looks great on all devices.
- **Animated Transitions**: Utilizes Framer Motion for smooth animations and transitions.
- **Contact Form Validation**: Form inputs are validated using `zod` and provide real-time feedback.
- **Toast Notifications**: Provides user feedback with `react-toastify` for successful form submissions.
- **Dark Mode Support**: The UI supports both light and dark themes.
- **Social Media Links**: Includes links to GitHub, LinkedIn, Email, and Phone with icon animations.

## Technologies Used

- **Next.js**: A React framework for server-rendered apps.
- **React**: JavaScript library for building user interfaces.
- **Framer Motion**: A library for animations and gestures in React.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Icons**: Provides popular icons as React components.
- **React Toastify**: A tool for displaying notifications.
- **zod**: TypeScript-first schema declaration and validation library.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git https://github.com/ashwekkalgutkar/resume-website.git
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Open your browser** and visit `http://localhost:3000` to view the resume page.

## Project Structure

The project has the following structure:

- **`/components/ui/`**: Contains reusable UI components like Button, Card, Input, Label, etc.
- **`/public/`**: Contains static assets like images.
- **`ResumePage.js`**: The main page component that includes the sidebar and content sections.
- **`/styles/`**: Contains the global styles for the application.

## Components

- **`Button`**: Custom button component with variants for different styles.
- **`Card`**: Card component used to display content in sections.
- **`Input`**: Input field component with validation styling.
- **`Label`**: Label component for form fields.
- **`Textarea`**: Textarea component for multi-line input.

## Contact Form Validation

The contact form uses `zod` for validation. The form fields include:

- **Name**: Must be at least 2 characters.
- **Email**: Must be a valid email address.
- **Message**: Must be at least 10 characters.

Validation errors are displayed under the respective fields in red.

## Animations

- **Section Transitions**: Sections fade in and slide up into view as the user navigates.
- **Button Hover Effects**: Buttons scale slightly on hover to provide visual feedback.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

- **Ashwek Kalgutkar** - Full Stack Developer

For any inquiries or support, please reach out via [LinkedIn](https://linkedin.com/in/ashwek-kalgutkar) or [GitHub](https://github.com/ashwekkalgutkar).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Zod](https://github.com/colinhacks/zod)
