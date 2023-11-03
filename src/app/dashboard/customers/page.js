"use client";
import { usePathname } from "next/navigation";

import React from "react";

const Page = () => {
  const pathName = usePathname();
  console.log(pathName);
  return <div>Customers Page</div>;
};

export default Page;
