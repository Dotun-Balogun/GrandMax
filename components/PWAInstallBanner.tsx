"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X, Share, Download, Chrome, Menu } from "lucide-react";

export default function InstallPWA() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [prompt, setPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Detect if installed
  const isStandalone =
    typeof window !== "undefined" &&
    (window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone);

  // Detect platforms
  const isIOS =
    typeof window !== "undefined" &&
    /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  const isAndroid =
    typeof window !== "undefined" &&
    /android/i.test(window.navigator.userAgent);

  const isOther = !isIOS && !isAndroid;

  // Show toast notification
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Banner visibility logic - shows only on home page if not installed
  useEffect(() => {
    if (!isHome || isStandalone) return;

    const last = localStorage.getItem("pwa-last-dismiss");
    const sixHours = 6 * 60 * 60 * 1000;
    const now = Date.now();

    if (!last || now - Number(last) > sixHours) {
      setShowBanner(true);
    }
  }, [isHome, isStandalone]);

  // Capture Android install prompt
  useEffect(() => {
    if (!isHome || isStandalone || isIOS) return;

    const handler = (e: any) => {
      e.preventDefault();
      setPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [isHome, isStandalone, isIOS]);

  const handleInstall = async () => {
    if (prompt) {
      await prompt.prompt();
      const outcome = await prompt.userChoice;

      if (outcome.outcome === "accepted") {
        setShowBanner(false);
        return;
      }
    }

    // Fallback guidance for browsers without native prompt
    showToast("Open your browser menu → Add to Home Screen");
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa-last-dismiss", Date.now().toString());
  };

  if (!isHome || isStandalone || !showBanner) return null;

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-xl text-white px-6 py-3 rounded-2xl shadow-2xl z-[9999] border border-white/10 max-w-sm mx-4"
          >
            <div className="flex items-center gap-3">
              <Menu className="w-5 h-5 text-blue-400" />
              <p className="text-sm font-medium">{toast}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Install Banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-[9998]"
      >
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>

          <div className="p-6 pt-7">
            {/* Icon and header */}
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-7 h-7 text-white" />
              </motion.div>
              
              <div className="flex-1 pt-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Install App
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Get instant access with one tap
                </p>
              </div>
            </div>

            {/* Platform-specific instructions */}
            <div className="mb-5 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
              {isAndroid && (
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Quick Installation
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Install for faster performance and offline access
                    </p>
                  </div>
                </div>
              )}

              {isIOS && (
                <div className="flex items-start gap-3">
                  <Share className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Installation Steps
                    </p>
                    <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
                      <li>1. Tap the <span className="font-semibold text-gray-900 dark:text-white">Share</span> button below</li>
                      <li>2. Select <span className="font-semibold text-gray-900 dark:text-white">Add to Home Screen</span></li>
                      <li>3. Tap <span className="font-semibold text-gray-900 dark:text-white">Add</span> to confirm</li>
                    </ol>
                  </div>
                </div>
              )}

              {isOther && (
                <div className="flex items-start gap-3">
                  <Chrome className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Installation Steps
                    </p>
                    <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
                      <li>1. Open your browser menu (⋮)</li>
                      <li>2. Select <span className="font-semibold text-gray-900 dark:text-white">Add to Home Screen</span></li>
                      <li>3. Follow the prompts to install</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {isAndroid && prompt ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleInstall}
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Install Now
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleInstall}
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
                >
                  Got it
                </motion.button>
              )}
              
              <button
                onClick={handleDismiss}
                className="px-6 py-3.5 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}