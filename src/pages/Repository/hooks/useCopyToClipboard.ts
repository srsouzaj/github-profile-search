import { useState } from "react";
import { toast } from "sonner";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error("Houve um erro ao copiar");
      setIsCopied(false);
      console.log(error);
    }
  };

  return { isCopied, handleCopy };
};
