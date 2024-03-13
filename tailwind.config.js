/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            flex: {
                final: "1 0 auto",
            },
        },
    },
    plugins: [],
};
