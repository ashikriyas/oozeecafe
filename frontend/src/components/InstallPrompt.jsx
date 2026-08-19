import { useState, useEffect } from "react";
import "./InstallPrompt.css";
import appIcon from "../assets/app_icon.png";


const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already installed (standalone mode)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
      return;
    }

    // Check if dismissed before in this session
    if (sessionStorage.getItem("pwa-dismissed")) {
      setDismissed(true);
      return;
    }

    // Detect iOS (Safari doesn't fire beforeinstallprompt)
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iphone|ipad|ipod/i.test(ua);
    setIsIOS(isIOSDevice);

    if (isIOSDevice) {
      // Show iOS instructions after a short delay
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    // Capture the native prompt for Android/Chrome
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setShowBanner(false);
      setShowModal(false);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowModal(true);
      return;
    }
    if (!deferredPrompt) return;
    setShowModal(true);
  };

  const handleConfirmInstall = async () => {
    if (isIOS) {
      setShowModal(false);
      return;
    }
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setInstalled(true);
    }
    setDeferredPrompt(null);
    setShowModal(false);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setShowModal(false);
    setDismissed(true);
    sessionStorage.setItem("pwa-dismissed", "true");
  };

  if (installed || dismissed || (!showBanner && !showModal)) return null;

  return (
    <>
      {/* Bottom Banner */}
      {showBanner && !showModal && (
        <div className="install-banner" role="complementary" aria-label="Install app prompt">
          <div className="install-banner-left">
            <img src={appIcon} alt="Ooze Cafe App Icon" className="install-banner-logo" />
            <div className="install-banner-text">
              <span className="install-banner-title">Install Ooze Cafe App</span>
              <span className="install-banner-sub">Tap for fast ordering & offline menu</span>
            </div>
          </div>
          <div className="install-banner-actions">
            <button
              id="install-btn"
              className="install-banner-cta"
              onClick={handleInstallClick}
            >
              Install
            </button>
            <button
              className="install-banner-dismiss"
              onClick={handleDismiss}
              aria-label="Dismiss install prompt"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Install Modal */}
      {showModal && (
        <div className="install-modal-overlay" onClick={(e) => e.target === e.currentTarget && handleDismiss()}>
          <div className="install-modal" role="dialog" aria-modal="true" aria-label="Install Ooze Cafe app">
            <button className="install-modal-close" onClick={handleDismiss} aria-label="Close">✕</button>

            <div className="install-modal-icon">
              <img src={appIcon} alt="Ooze Cafe" />
            </div>

            <h2 className="install-modal-title">Add Ooze Cafe to<br />Your Home Screen</h2>
            <p className="install-modal-desc">
              Install our app for a faster, smoother experience — browse the menu, contact us & more, all offline!
            </p>

            <div className="install-modal-features">
              <div className="install-feature">
                <span className="install-feature-icon">⚡</span>
                <span>Lightning fast</span>
              </div>
              <div className="install-feature">
                <span className="install-feature-icon">📴</span>
                <span>Works offline</span>
              </div>
              <div className="install-feature">
                <span className="install-feature-icon">🏠</span>
                <span>Home screen icon</span>
              </div>
            </div>

            {isIOS ? (
              <div className="install-ios-steps">
                <p className="install-ios-title">Follow these steps:</p>
                <div className="install-ios-step">
                  <span className="install-ios-num">1</span>
                  <span>Tap the <strong>Share</strong> button <span className="install-ios-icon">⬆️</span> at the bottom of your browser</span>
                </div>
                <div className="install-ios-step">
                  <span className="install-ios-num">2</span>
                  <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                </div>
                <div className="install-ios-step">
                  <span className="install-ios-num">3</span>
                  <span>Tap <strong>"Add"</strong> to confirm</span>
                </div>
                <button className="install-modal-btn" onClick={handleDismiss}>Got it!</button>
              </div>
            ) : (
              <div className="install-modal-buttons">
                <button id="install-confirm-btn" className="install-modal-btn" onClick={handleConfirmInstall}>
                  Install App
                </button>
                <button className="install-modal-btn-secondary" onClick={handleDismiss}>
                  Maybe Later
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InstallPrompt;
