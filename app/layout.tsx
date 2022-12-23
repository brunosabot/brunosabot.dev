import "../styles/globals.css";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
