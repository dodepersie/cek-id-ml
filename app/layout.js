import "./globals.css";

export const metadata = {
  title: "Cek ID MLBB by @t4kezy",
  description: "Cek tanggal pembuatan dan negara pembuatan akun MLBB kalian.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center items-center gap-4 max-w-md p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
