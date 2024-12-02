"use client";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/client.utils";
import React from "react";

export default function ButtonToListTopic() {
  return (
    <Button
      onClick={() => {
        scrollToSection("topic-list");
      }}
    >
      Get Started
    </Button>
  );
}
