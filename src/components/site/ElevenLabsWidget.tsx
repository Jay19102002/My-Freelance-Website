import React, { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsWidget() {
  useEffect(() => {
    // Safely polyfill / guard navigator.mediaDevices for mobile HTTP / legacy WebRTC contexts
    if (typeof window !== "undefined") {
      if (!navigator.mediaDevices) {
        // @ts-expect-error polyfill for mediaDevices if undefined
        navigator.mediaDevices = {};
      }

      if (!navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia = function (constraints: MediaStreamConstraints) {
          // @ts-expect-error fallback vendor prefix check
          const legacyGetUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

          if (!legacyGetUserMedia) {
            return Promise.reject(
              new Error(
                "Microphone access (getUserMedia) is not supported in this browser environment or over insecure HTTP."
              )
            );
          }

          return new Promise((resolve, reject) => {
            legacyGetUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
    }

    const scriptId = "elevenlabs-convai-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return <elevenlabs-convai agent-id="agent_1401m0psn3x5f1zan2n9tg7zn4xt" />;
}
