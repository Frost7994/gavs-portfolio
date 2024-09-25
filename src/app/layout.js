// styling
import "@/styles/globals.css";

// meta
export const metadata = {
  title: "Dronans Wedding",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
