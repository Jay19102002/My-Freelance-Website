import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id"?: string;
          "variant"?: "compact" | "tiny" | "full" | string;
          "text-contents"?: string;
          "action-text"?: string;
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
          "variant"?: "compact" | "tiny" | "full" | string;
          "text-contents"?: string;
          "action-text"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsWidget() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

    // Monitor when the widget expands or conversation starts to hide the floating bubble
    const checkActiveState = () => {
      const el = document.querySelector("elevenlabs-convai");
      if (el && el.shadowRoot) {
        const modal = el.shadowRoot.querySelector("[data-expanded='true'], .sheet, .modal, [aria-modal='true']");
        if (modal) {
          setIsActive(true);
        }
      }
    };

    const interval = setInterval(checkActiveState, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBubbleClick = () => {
    const el = document.querySelector("elevenlabs-convai") as HTMLElement | null;
    if (el) {
      const btn = el.shadowRoot?.querySelector("button") as HTMLElement | null;
      if (btn) {
        btn.click();
      } else {
        el.click();
      }
      setIsActive(true);
    }
  };

  return (
    <>
      {/* Floating speech bubble positioned directly above the ElevenLabs widget */}
      {!isDismissed && !isActive && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Ask for help via voice AI agent"
          onClick={handleBubbleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleBubbleClick();
            }
          }}
          className="fixed bottom-[92px] right-6 sm:right-8 z-50 flex items-center gap-2 bg-card/95 text-card-foreground backdrop-blur-md border border-primary/30 shadow-[0_8px_30px_rgba(0,0,0,0.4)] rounded-2xl px-3.5 py-2 cursor-pointer select-none transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-[0_8px_35px_rgba(11,91,148,0.35)] animate-in fade-in slide-in-from-bottom-3 group"
        >
          {/* Pulsing online indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>

          {/* Speech bubble text */}
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
            Need help...?
          </span>

          {/* Dismiss button */}
          <button
            type="button"
            aria-label="Dismiss speech bubble"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="ml-1 text-muted-foreground hover:text-foreground rounded-full p-0.5 hover:bg-muted/50 transition-colors"
          >
            <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>

          {/* Speech bubble tail pointing down towards the ElevenLabs orb */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-card/95" />
          <div className="absolute -bottom-[9px] right-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-primary/30 -z-10" />
        </div>
      )}

      {/* ElevenLabs Widget in clean orb mode */}
      <elevenlabs-convai
        agent-id="agent_1401m0psn3x5f1zan2n9tg7zn4xt"
        variant="tiny"
        action-text="Need help...?"
      />
    </>
  );
}


