'use client'
import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(isInStandaloneMode);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if user has previously dismissed the banner
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    
    if (!isInStandaloneMode && !dismissed) {
      // For Android/Chrome
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowBanner(true);
      };

      window.addEventListener('beforeinstallprompt', handler);

      // For iOS, show banner after 3 seconds if not standalone
      if (iOS) {
        setTimeout(() => setShowBanner(true), 3000);
      }

      return () => window.removeEventListener('beforeinstallprompt', handler);
    }
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (isStandalone || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
      >
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Smartphone className="text-white" size={24} />
              </div>

              <div className="flex-1 pr-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Install Our App
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Get quick access to our architectural portfolio and stay updated with our latest projects.
                </p>

                {isIOS ? (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <p className="text-xs text-slate-300 mb-2">
                      To install on iOS:
                    </p>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Tap the Share button</li>
                      <li>Scroll and tap "Add to Home Screen"</li>
                      <li>Tap "Add" in the top right</li>
                    </ol>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleInstall}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                  >
                    <Download size={18} />
                    Install App
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallBanner;
