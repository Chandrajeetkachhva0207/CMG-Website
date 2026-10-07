import { motion } from "motion/react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    `Hello CMG Softtech 👋

I would like to discuss a project with you.

I found your website and would like to know more about your services.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-5 right-5 z-[9999] sm:bottom-6 sm:right-6"
    >
      {/* Tooltip */}
      <div
        className="
          pointer-events-none absolute right-[68px] top-1/2
          hidden -translate-y-1/2 whitespace-nowrap
          rounded-lg border border-white/10
          bg-[#111116] px-3 py-2
          text-xs font-medium text-white
          opacity-0 shadow-xl
          transition-all duration-300
          group-hover:translate-x-0 group-hover:opacity-100
          sm:block
        "
      >
        Chat with us
        <span
          className="
            absolute right-[-5px] top-1/2
            h-2 w-2 -translate-y-1/2
            rotate-45 border-r border-t
            border-white/10 bg-[#111116]
          "
        />
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CMG Softtech on WhatsApp"
        whileHover={{
          scale: 1.07,
          y: -3,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          group relative flex
          h-[58px] w-[58px]
          items-center justify-center
          rounded-full
          bg-[#25D366]
          shadow-[0_8px_30px_rgba(37,211,102,0.30)]
          transition-shadow duration-300
          hover:shadow-[0_10px_38px_rgba(37,211,102,0.48)]
          sm:h-[60px] sm:w-[60px]
        "
      >
        {/* Soft outer ring */}
        <span
          className="
            absolute inset-[-4px]
            rounded-full
            border border-[#25D366]/20
          "
        />

        {/* WhatsApp Logo */}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-[30px] w-[30px] sm:h-[32px] sm:w-[32px]"
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M16.02 3.2a12.77 12.77 0 0 0-10.9 19.43L3.2 28.8l6.36-1.87a12.8 12.8 0 1 0 6.46-23.73Zm0 23.42h-.01a10.63 10.63 0 0 1-5.41-1.48l-.39-.23-3.78 1.11 1.1-3.69-.25-.4a10.6 10.6 0 1 1 8.74 4.69Z"
          />

          <path
            fill="white"
            d="M21.88 18.58c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.31-.81 1.04-.99 1.25-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.75-2.2-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.12 3.03 1.28 3.24.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.24 1.41.21 1.94.13.59-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.6-.37Z"
          />
        </svg>

        {/* Tiny highlight */}
        <span
          className="
            pointer-events-none absolute
            left-[11px] top-[9px]
            h-2 w-2 rounded-full
            bg-white/25 blur-[2px]
          "
        />
      </motion.a>
    </motion.div>
  );
}
