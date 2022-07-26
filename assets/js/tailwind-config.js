tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontSize: {
            xs: ["0.75rem", { lineHeight: "0.975rem" }], //12px
            sm: ["0.875rem", { lineHeight: "1.15rem" }], //14px
            md: ["1rem", { lineHeight: "1.3rem" }], //16px
            lg: ["1.75rem", { lineHeight: "2.275rem" }], //28px
            xl: ["2.5rem", { lineHeight: "3.25rem" }], //40px
        },
        extend: {},
    }
}