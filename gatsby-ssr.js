import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // Inject critical CSS in head for immediate rendering
  setHeadComponents([
    <style
      key="immediate-loader-critical"
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical styles - render blocking to prevent white flash */
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #000000 !important;
          }
          
          /* Custom fonts for loading screen */
          @font-face {
            font-family: 'BOOWIE';
            src: url('./src/fonts/BOOWIE.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          #immediate-loader {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(120deg, #000 40%, #0f1e36 50%, #2e73e220 60%, #5c99ff30 70%, #3b83f615 80%) !important;
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
            color: white !important;
            font-size: 2.5rem !important;
            font-weight: bold !important;
            margin-bottom: 0.5rem !important;
            letter-spacing: 0.05em !important;
            background: linear-gradient(45deg, #ffffff, #60a5fa, #3b82f6) !important;
            background-clip: text !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            animation: logoGlow 3s ease-in-out infinite alternate !important;
          }
          
          .loader-tagline {
            color: #9ca3af !important;
            font-size: 1rem !important;
            font-weight: 300 !important;
            letter-spacing: 0.1em !important;
            opacity: 0.8 !important;
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
            border-top: 2px solid #3b82f6 !important;
            border-right: 2px solid #60a5fa !important;
            animation-delay: 0s !important;
          }
          
          .orbit-ring-2 {
            width: 60px !important;
            height: 60px !important;
            top: 10px !important;
            left: 10px !important;
            border-left: 2px solid #60a5fa !important;
            border-bottom: 2px solid #3b82f6 !important;
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
            background: linear-gradient(45deg, #3b82f6, #60a5fa) !important;
            border-radius: 50% !important;
            animation: corePulse 1.5s ease-in-out infinite alternate !important;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5) !important;
          }
          
          .loading-text {
            color: #60a5fa !important;
            font-size: 0.875rem !important;
            font-weight: 500 !important;
            letter-spacing: 0.15em !important;
            text-transform: uppercase !important;
            animation: textPulse 2s ease-in-out infinite alternate !important;
            opacity: 0.9 !important;
          }
          
          @keyframes logoGlow {
            0% { filter: brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3)); }
            100% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(96, 165, 250, 0.6)); }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 0.8; 
              transform: translateY(0); 
            }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes ringPulse {
            0% { 
              opacity: 0.6; 
              transform: scale(1); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1.1); 
            }
          }
          
          @keyframes corePulse {
            0% { 
              transform: translate(-50%, -50%) scale(1); 
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); 
            }
            100% { 
              transform: translate(-50%, -50%) scale(1.3); 
              box-shadow: 0 0 30px rgba(96, 165, 250, 0.8); 
            }
          }
          
          @keyframes textPulse {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          
          @media (max-width: 768px) {
            #immediate-loader {
              padding: 0 1.5rem !important;
            }
            .loader-logo {
              font-size: 2rem !important;
            }
            .loader-tagline {
              font-size: 0.875rem !important;
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
            <div class="loader-logo">Backend & Beyond</div>
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
            console.log('Loading screen initialized');
            
            // Hide loader when content is ready
            var hideLoader = function() {
              var loader = document.getElementById('immediate-loader');
              var gatsby = document.getElementById('___gatsby');
              
              if (loader) {
                console.log('Hiding loading screen...');
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
              
              // Debug logging
              console.log('Content ready check:', {
                hasContent: hasContent,
                reactReady: reactReady,
                childrenCount: gatsby ? gatsby.children.length : 0
              });
              
              // Check for React ready signal first
              if (reactReady) {
                console.log('React ready signal detected - hiding loader');
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
                  console.log('Content detected - hiding loader');
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
              console.log('Fallback timeout reached - hiding loader');
              hideLoader();
            }, 35000); // Reduced fallback time
          })();
        `,
      }}
    />,
  ]);
};
