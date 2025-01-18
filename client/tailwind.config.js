import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
            },
            colors: {},
            backgroundImage:{
                abstract: "url('https://images.unsplash.com/photo-1735437683931-b8a17f57912d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            },
            fontFamily:{},
        },
    },
    plugins: [tailwindcssAnimate],
};
