import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-background rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-border bg-card">
          <h3 className="font-bold text-lg text-foreground uppercase tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-muted/30 p-2">{children}</div>
      </div>
    </div>
  );
};
