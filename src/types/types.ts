// src/types/types.ts

export interface HeaderProps {
  title?: string;
}

export interface Job {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  responsibilities: string;
}

export interface Step {
  id: number;
  label: string;
  status: "completed" | "active" | "pending";
}

// Add any other types you need
