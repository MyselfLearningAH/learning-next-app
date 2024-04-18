import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: {
      default: "Login | Learning",
      template: "%s | Learning",
    },
    description: "Learning Next",
};

function AuthLayout ({children} : Readonly<{ children : React.ReactNode}>) {

  return (
    <div className="flex justify-center items-center h-full">
        <div className="w-4/12 p-6 border-2 rounded-md shadow-lg shadow-blue-500/50">
          {children}
        </div>
    </div>
  )
}

export default AuthLayout