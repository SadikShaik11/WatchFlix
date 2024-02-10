
module.exports = {
    content: [".//**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                'martel-sans': ['Martel Sans', 'sans-serif'],
            },
            animation: {
                text: 'text 5s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
            screens: {
                'xs': '200px',
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
            }


        },
    },
    plugins: []
};
