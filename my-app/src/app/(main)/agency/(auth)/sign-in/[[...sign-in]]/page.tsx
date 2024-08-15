import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from "@/providers/theme-provider";

const SignInPage = () => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex items-center justify-center h-screen bg-transparent">
                <SignIn />
            </div>
            </ThemeProvider>
    );
};

export default SignInPage;
