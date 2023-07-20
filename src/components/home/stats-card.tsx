import React from "react";

interface StatsCardProps {
  metric: string;
  suffix: string;
  title: string;
}

export default function StatsCard({ metric, suffix, title }: StatsCardProps) {
  return (
    <div className="space-y-4 rounded-xl py-6 text-center shadow-card">
      <h3 className="font-heading text-5xl text-secondary">
        {metric} <span className="text-primary">{suffix}</span>
      </h3>
      <p className="text-body-lg text-accent">{title}</p>
    </div>
  );
}
