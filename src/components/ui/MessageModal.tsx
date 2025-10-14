import React from "react";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  iconSrc?: string;
  buttonText?: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  title = "Sorry!",
  message = "Your report has been reviewed and cannot be edited.",
  iconSrc = "/src/assets/x-circle.png",
  buttonText = "Okay, thank you.",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal content */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>

        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
          <img src={iconSrc} alt="icon" className="h-20 w-20" />
        </div>

        <p className="mb-6 text-sm text-gray-600">{message}</p>

        <button
          onClick={onClose}
          className="mx-auto rounded-full bg-white px-4 py-2 text-sm font-medium text-green-600 hover:underline"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
