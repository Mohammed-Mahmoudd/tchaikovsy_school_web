// src/app/layout.js
import "./globals.css";
import NavigationBar from "@/components/AppBar";
import NoSSR from "@/components/NoSSR";
import LoadingLayer from "@/components/LoadingLayer";
export const metadata = {
  title: {
    default: "Tchaikovsky School",
    template: "%s | Tchaikovsky School",
  },
  description: "Your app description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tchaikovsky School",
    description: "Your app description",
    url: "https://yourdomain.com",
    siteName: "Your App Name",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Your App Name",
    description: "Your app description",
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NoSSR
          fallback={
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "70px",
                background: "rgba(255, 255, 255, 0.2)",
                zIndex: 1100,
              }}
            />
          }
        >
          <NavigationBar />
        </NoSSR>
        {children}
        <LoadingLayer />
      </body>
    </html>
  );
}
