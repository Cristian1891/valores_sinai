import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function CopyButton({
  text,
  label,
}: {
  text: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('donations');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error al copiar:', error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied
          ? `${label} copiado`
          : `${t('bank.copy', 'Copiar')} ${label}`
      }
      className="rounded p-1 text-dark-soft transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:text-brand-amber"
    >
      {copied ? (
        <Check
          className="h-4 w-4 text-success"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      ) : (
        <Copy
          className="h-4 w-4"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </button> 
  );
}