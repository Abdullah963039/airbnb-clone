"use client";

import * as React from "react";
import { IoMdClose } from "react-icons/io";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export const Modal = ({
  onClose,
  onSubmit,
  actionLabel,
  body,
  disabled,
  footer,
  isOpen,
  secondaryAction,
  secondaryActionLabel,
  title,
}: ModalProps) => {
  const [showModal, setShowModal] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(onClose, 300);
  }, [disabled, onClose]);

  const handleSubmit = React.useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = React.useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
          {/* Content */}
          <div
            className={cn(
              "duration-300 h-full",
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          >
            <div className="h-full md:h-auto rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 transition hover:opacity-70 absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center gap-4 w-full">
                  {secondaryActionLabel && secondaryAction && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
