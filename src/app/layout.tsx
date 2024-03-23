'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ----------------------------for accessing the current state of the sidebar ---------------------------------------
  // -------------------------------------using useState hook (starts)-------------------------------------------------

  const [open, setOpen] = useState(false);

  function updateOpen(opened: boolean) {
    setOpen(opened);
  }

  // ----------------------------for accessing the current state of the sidebar ---------------------------------------
  // -------------------------------------using useState hook (starts)-------------------------------------------------

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* -------------------------------main content starts-------------------------------- */}


        <div className="flex">



          {/* ----------------sidebar will take half space in mobile and 1/5th part in laptop(starts)---------------- */}

          <div className={`lg:relative absolute z-50 ${open ? "lg:w-1/5 w-1/2" : "w-0"}`}>
            <SideBar updateOpen={updateOpen} />
          </div>

          {/* ----------------sidebar will take half space in mobile and 1/5th part in laptop(ends)---------------- */}





          {/* ----------------remaining part will take half space in mobile and 4/5th part in laptop(starts)---------------- */}

          <div className={`${open ? "lg:w-4/5" : "w-full"}`}>
            <Navbar />
            {children}
          </div>

          {/* ----------------remaining part will take half space in mobile and 4/5th part in laptop(starts)---------------- */}

        </div>


        {/* -------------------------------main content ends-------------------------------- */}

      </body>
    </html>
  );
}
