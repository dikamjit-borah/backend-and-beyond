import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // Inject critical CSS in head for immediate rendering
  setHeadComponents([
    <link key="favicon-svg"      rel="icon"          type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-shortcut" rel="shortcut icon" href="/favicon.svg" />,
    <style
      key="immediate-loader-critical"
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical styles - render blocking to prevent white flash */
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #2D0A6B !important;
          }

          #immediate-loader {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: radial-gradient(ellipse at 50% 42%, rgba(232,93,0,0.08) 0%, transparent 55%), #2D0A6B !important;
            z-index: 999999 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            font-family: 'BOOWIE', system-ui, -apple-system, sans-serif !important;
          }

          #immediate-loader.hide {
            opacity: 0 !important;
            transition: opacity 0.6s ease-out !important;
            pointer-events: none !important;
          }

          .loader-brand {
            text-align: center !important;
            margin-bottom: 3rem !important;
          }

          .loader-logo {
            color: #FAF8F4 !important;
            font-size: 2.5rem !important;
            font-family: 'BOOWIE', system-ui, sans-serif !important;
            font-weight: normal !important;
            margin-bottom: 0.5rem !important;
            letter-spacing: 0.05em !important;
            animation: logoGlow 3s ease-in-out infinite alternate !important;
          }

          .loader-logo-amp {
            color: #E85D00 !important;
          }

          .loader-tagline {
            color: rgba(250,248,244,0.45) !important;
            font-family: 'Jost', system-ui, sans-serif !important;
            font-size: 0.75rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.2em !important;
            text-transform: uppercase !important;
            opacity: 1 !important;
            animation: fadeInUp 1s ease-out 0.5s both !important;
          }

          .loader-animation {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
          }

          .orbit-container {
            width: 80px !important;
            height: 80px !important;
            position: relative !important;
            animation: spin 4s linear infinite !important;
          }

          .orbit-ring {
            position: absolute !important;
            border: 2px solid transparent !important;
            border-radius: 50% !important;
            animation: ringPulse 2s ease-in-out infinite alternate !important;
          }

          .orbit-ring-1 {
            width: 80px !important;
            height: 80px !important;
            border-top: 2px solid rgba(250,248,244,0.25) !important;
            border-right: 2px solid #E85D00 !important;
            animation-delay: 0s !important;
          }

          .orbit-ring-2 {
            width: 60px !important;
            height: 60px !important;
            top: 10px !important;
            left: 10px !important;
            border-left: 2px solid rgba(232,93,0,0.5) !important;
            border-bottom: 2px solid rgba(250,248,244,0.15) !important;
            animation-delay: 0.5s !important;
            animation-direction: reverse !important;
          }

          .orbit-core {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 12px !important;
            height: 12px !important;
            background: #E85D00 !important;
            border-radius: 50% !important;
            animation: corePulse 1.5s ease-in-out infinite alternate !important;
            box-shadow: 0 0 20px rgba(232,93,0,0.5) !important;
          }

          .loading-text {
            color: rgba(250,248,244,0.5) !important;
            font-family: 'Jost', system-ui, sans-serif !important;
            font-size: 0.75rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.2em !important;
            text-transform: uppercase !important;
            animation: textPulse 2s ease-in-out infinite alternate !important;
          }

          @keyframes logoGlow {
            0% { filter: drop-shadow(0 0 8px rgba(232,93,0,0.2)); opacity: 0.85; }
            100% { filter: drop-shadow(0 0 18px rgba(232,93,0,0.45)); opacity: 1; }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes ringPulse {
            0% {
              opacity: 0.5;
              transform: scale(1);
            }
            100% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          @keyframes corePulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              box-shadow: 0 0 20px rgba(232,93,0,0.5);
            }
            100% {
              transform: translate(-50%, -50%) scale(1.35);
              box-shadow: 0 0 32px rgba(232,93,0,0.8);
            }
          }

          @keyframes textPulse {
            0% { opacity: 0.4; }
            100% { opacity: 0.75; }
          }

          @media (max-width: 768px) {
            #immediate-loader {
              padding: 0 1.5rem !important;
            }
            .loader-logo {
              font-size: 2rem !important;
            }
            .loader-tagline {
              font-size: 0.7rem !important;
            }
            .orbit-container {
              width: 60px !important;
              height: 60px !important;
            }
            .orbit-ring-1 {
              width: 60px !important;
              height: 60px !important;
            }
            .orbit-ring-2 {
              width: 45px !important;
              height: 45px !important;
              top: 7.5px !important;
              left: 7.5px !important;
            }
          }

          /* Hide Gatsby content until ready */
          #___gatsby {
            opacity: 0 !important;
            transition: opacity 0.5s ease-in !important;
          }

          #___gatsby.ready {
            opacity: 1 !important;
          }
        `,
      }}
    />,
  ]);

  // Add loader at the very beginning of body
  setPreBodyComponents([
    <div
      key="immediate-loader-html"
      id="immediate-loader"
      dangerouslySetInnerHTML={{
        __html: `
          <div class="loader-brand">
            <div class="loader-logo">Backend<span class="loader-logo-amp"> & </span>Beyond</div>
            <div class="loader-tagline">Powering the Future</div>
          </div>
          <div class="loader-animation">
            <div class="orbit-container">
              <div class="orbit-ring orbit-ring-1"></div>
              <div class="orbit-ring orbit-ring-2"></div>
              <div class="orbit-core"></div>
            </div>
            <div class="loading-text">Loading Experience</div>
          </div>
        `
      }}
    />,
    <script
      key="immediate-loader-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Hide loader when content is ready
            var hideLoader = function() {
              var loader = document.getElementById('immediate-loader');
              var gatsby = document.getElementById('___gatsby');

              if (loader) {
                setTimeout(function() {
                  loader.classList.add('hide');
                  if (gatsby) {
                    gatsby.classList.add('ready');
                  }
                  setTimeout(function() {
                    if (loader && loader.parentNode) {
                      loader.parentNode.removeChild(loader);
                    }
                  }, 600); // Match the CSS transition time
                }, 100);
              }
            };

            // Check if content is ready
            var checkReady = function() {
              var gatsby = document.getElementById('___gatsby');
              var hasContent = gatsby && gatsby.children.length > 0;
              var reactReady = gatsby && gatsby.getAttribute('data-react-ready') === 'true';

              // Check for React ready signal first
              if (reactReady) {
                setTimeout(hideLoader, 300);
                return;
              }

              // Check for rendered content
              if (hasContent) {
                var hasRenderedContent = false;
                var totalHeight = 0;

                for (var i = 0; i < gatsby.children.length; i++) {
                  var child = gatsby.children[i];
                  var height = child.offsetHeight;
                  var width = child.offsetWidth;
                  totalHeight += height;

                  if (height > 100 || width > 100) {
                    hasRenderedContent = true;
                    break;
                  }
                }

                if (hasRenderedContent || totalHeight > 200) {
                  setTimeout(hideLoader, 300);
                  return;
                }
              }

              // Continue checking
              setTimeout(checkReady, 100);
            };

            // Start content detection after minimum display time
            setTimeout(function() {
              checkReady();
            }, 1200); // Show loader for at least 1.2 seconds

            // Fallback - hide after maximum time
            setTimeout(function() {
              hideLoader();
            }, 35000);
          })();
        `,
      }}
    />,
  ]);
};
