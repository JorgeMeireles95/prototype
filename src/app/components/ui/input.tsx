import * as React from "react";

import { cn } from "@/lib/utils";

// Estendendo as propriedades de input HTML padrão com InputProps
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Você pode adicionar mais propriedades personalizadas aqui, se necessário
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // Propagando o tipo do input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // Incorporando a className personalizada
        )}
        ref={ref} // Atribuindo a referência ao input
        {...props} // Passando todas as outras propriedades
      />
    );
  }
);

// Definindo um displayName útil para debugging
Input.displayName = "Input";

export { Input };
