import { cn } from "@/utils/util";

type OverlayProps = {
  onClick: React.MouseEventHandler;
  className: string;
  id: string;
} & React.PropsWithChildren;

type ModalProps = {
  className?: string;
} & React.PropsWithChildren;

export function Overlay({ children, id, onClick, className }: OverlayProps) {
  return (
    <div id={id} onClick={onClick} className={className}>
      {children}
    </div>
  );
}

export function Modal({ className, children }: ModalProps) {
  return (
    <div className={cn("rounded-lg bg-white flex flex-col", className)}>
      {children}
    </div>
  );
}
