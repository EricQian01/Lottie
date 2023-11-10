import React, { StrictMode } from "react";
import { createRoot } from "react-dom";
import styles from '@/styles/Home.module.css'

import Home from "@/components/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);

