"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-150 cursor-pointer select-none touch-manipulation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            scale: isPressed ? 0.95 : 1,
            boxShadow: isPressed 
              ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" 
              : "0 10px 15px -3px rgb(0 0 0 / 0.1)"
          }}
        >
          <span className="text-2xl">💬</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </motion.button>
      </motion.div>

      {/* Quick Actions Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-72"
          >
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                We’re here to assist you
              </p>
            </div>

            <div className="space-y-3">
              <motion.a
                href="https://wa.me/919031022875?text=Hi,%20I’m%20interested%20in%20your%20furniture%20solutions."
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-all duration-150 cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-medium text-green-700 dark:text-green-400">
                    WhatsApp
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Quick response
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919031022875"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-150 cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-blue-700 dark:text-blue-400">
                    Call Us
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +91 90310 22875
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all duration-150 cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-400">
                    Get Quote
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Fill enquiry form
                  </p>
                </div>
              </motion.a>
            </div>

            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-gray-300 cursor-pointer select-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
