import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-muted dark:bg-background hover:shadow-[0_0_24px_8px_rgba(0,0,0,0.15)] hover:ring-2 hover:ring-primary/80 transition-all p-6 flex flex-col items-center gap-4 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <Icon className="w-12 h-12 text-primary mb-2" />
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-center mb-4">{description}</p>
      <Button
        variant="default"
        className="mt-auto bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300 font-semibold px-8"
      >
        View Solutions
      </Button>
    </div>
  );
};
