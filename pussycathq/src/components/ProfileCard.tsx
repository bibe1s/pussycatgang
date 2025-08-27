import React, { useEffect, useRef, useCallback, useMemo } from "react";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
} as const;

const clamp = (value: number, min = 0, max = 100): number =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3): number =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (
      offsetX: number,
      offsetY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof (window.DeviceMotionEvent as any).requestPermission === 'function') {
        (window.DeviceMotionEvent as any)
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch((err: any) => console.error(err));
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);
    card.addEventListener('click', handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      card.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  const cardStyle = useMemo(
    () =>
      ({
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": grainUrl ? `url(${grainUrl})` : "none",
        "--behind-gradient": showBehindGradient
          ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
          : "none",
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
        "--pointer-x": "50%",
        "--pointer-y": "50%",
        "--pointer-from-center": "0",
        "--pointer-from-top": "0.5",
        "--pointer-from-left": "0.5",
        "--card-opacity": "0",
        "--rotate-x": "0deg",
        "--rotate-y": "0deg",
        "--background-x": "50%",
        "--background-y": "50%",
        "--sunpillar-1": "hsl(2, 100%, 73%)",
        "--sunpillar-2": "hsl(53, 100%, 69%)",
        "--sunpillar-3": "hsl(93, 100%, 69%)",
        "--sunpillar-4": "hsl(176, 100%, 76%)",
        "--sunpillar-5": "hsl(228, 100%, 74%)",
        "--sunpillar-6": "hsl(283, 100%, 73%)",
        "--sunpillar-clr-1": "var(--sunpillar-1)",
        "--sunpillar-clr-2": "var(--sunpillar-2)",
        "--sunpillar-clr-3": "var(--sunpillar-3)",
        "--sunpillar-clr-4": "var(--sunpillar-4)",
        "--sunpillar-clr-5": "var(--sunpillar-5)",
        "--sunpillar-clr-6": "var(--sunpillar-6)",
        "--card-radius": "30px",
      }) as React.CSSProperties,
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <>
      <style jsx>{`
        .pc-card-wrapper {
          perspective: 500px;
          transform: translate3d(0, 0, 0.1px);
          touch-action: none;
        }

        .pc-card-wrapper::before {
          content: '';
          position: absolute;
          inset: -10px;
          background: inherit;
          background-position: inherit;
          border-radius: inherit;
          transition: all 0.5s ease;
          filter: contrast(2) saturate(2) blur(36px);
          transform: scale(0.8) translate3d(0, 0, 0.1px);
          background-size: 100% 100%;
          background-image: var(--behind-gradient);
        }

        .pc-card-wrapper:hover::before,
        .pc-card-wrapper.active::before {
          filter: contrast(1) saturate(2) blur(40px) opacity(1);
          transform: scale(0.9) translate3d(0, 0, 0.1px);
        }

        .pc-card-wrapper:hover,
        .pc-card-wrapper.active {
          --card-opacity: 1;
        }

        .pc-card {
          background-blend-mode: color-dodge, normal, normal, normal;
          animation: glow-bg 12s linear infinite;
          box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
          transition: transform 1s ease;
          transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
          background-size: 100% 100%;
          background-position: 0 0, 0 0, 50% 50%, 0 0;
          background-image: radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity)) 4%, hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%, hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%);
        }

        .pc-card:hover,
        .pc-card.active {
          transition: none;
          transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
        }

        .pc-card * {
          display: grid;
          grid-area: 1/-1;
          border-radius: var(--card-radius);
          transform: translate3d(0, 0, 0.1px);
          pointer-events: none;
        }

        .pc-inside {
          inset: 1px;
          position: absolute;
          background-image: var(--inner-gradient);
          background-color: rgba(0, 0, 0, 0.9);
          transform: translate3d(0, 0, 0.01px);
        }

        .pc-shine {
          mask-image: var(--icon);
          mask-mode: luminance;
          mask-repeat: repeat;
          mask-size: 150%;
          mask-position: top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x));
          transition: filter 0.6s ease;
          filter: brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5);
          animation: holo-bg 18s linear infinite;
          mix-blend-mode: color-dodge;
          --space: 5%;
          --angle: -45deg;
          transform: translate3d(0, 0, 1px);
          z-index: 3;
          background: transparent;
          background-size: cover;
          background-position: center;
          background-image: repeating-linear-gradient(0deg, var(--sunpillar-clr-1) calc(var(--space) * 1), var(--sunpillar-clr-2) calc(var(--space) * 2), var(--sunpillar-clr-3) calc(var(--space) * 3), var(--sunpillar-clr-4) calc(var(--space) * 4), var(--sunpillar-clr-5) calc(var(--space) * 5), var(--sunpillar-clr-6) calc(var(--space) * 6), var(--sunpillar-clr-1) calc(var(--space) * 7)), repeating-linear-gradient(var(--angle), #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%);
          background-position: 0 var(--background-y), var(--background-x) var(--background-y), center;
          background-blend-mode: color, hard-light;
          background-size: 500% 500%, 300% 300%, 200% 200%;
          background-repeat: repeat;
        }

        .pc-shine::before,
        .pc-shine::after {
          content: '';
          background-position: center;
          background-size: cover;
          grid-area: 1/1;
          opacity: 0;
        }

        .pc-card:hover .pc-shine,
        .pc-card.active .pc-shine {
          filter: brightness(0.85) contrast(1.5) saturate(0.5);
          animation: none;
        }

        .pc-card:hover .pc-shine::before,
        .pc-card.active .pc-shine::before,
        .pc-card:hover .pc-shine::after,
        .pc-card.active .pc-shine::after {
          opacity: 1;
        }

        .pc-shine::before {
          background-image: linear-gradient(45deg, var(--sunpillar-4), var(--sunpillar-5), var(--sunpillar-6), var(--sunpillar-1), var(--sunpillar-2), var(--sunpillar-3)), radial-gradient(circle at var(--pointer-x) var(--pointer-y), hsl(0, 0%, 70%) 0%, hsla(0, 0%, 30%, 0.2) 90%), var(--grain);
          background-size: 250% 250%, 100% 100%, 220px 220px;
          background-position: var(--pointer-x) var(--pointer-y), center, calc(var(--pointer-x) * 0.01) calc(var(--pointer-y) * 0.01);
          background-blend-mode: color-dodge;
          filter: brightness(calc(2 - var(--pointer-from-center))) contrast(calc(var(--pointer-from-center) + 2)) saturate(calc(0.5 + var(--pointer-from-center)));
          mix-blend-mode: luminosity;
        }

        .pc-shine::after {
          background-position: 0 var(--background-y), calc(var(--background-x) * 0.4) calc(var(--background-y) * 0.5), center;
          background-size: 200% 300%, 700% 700%, 100% 100%;
          mix-blend-mode: difference;
          filter: brightness(0.8) contrast(1.5);
        }

        .pc-glare {
          transform: translate3d(0, 0, 1.1px);
          background-image: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%);
          mix-blend-mode: overlay;
          filter: brightness(0.8) contrast(1.2);
          z-index: 4;
        }

        .pc-avatar-content {
          mix-blend-mode: screen;
        }

        .pc-avatar-content .avatar {
          opacity: calc(1.75 - var(--pointer-from-center));
        }

        .pc-avatar-content::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          backdrop-filter: blur(30px);
          mask: linear-gradient(to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 1) 90%,
              rgba(0, 0, 0, 1) 100%);
          pointer-events: none;
        }

        .pc-content {
          transform: translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px) !important;
          mix-blend-mode: luminosity;
        }

        @keyframes glow-bg {
          0% {
            --bgrotate: 0deg;
          }
          100% {
            --bgrotate: 360deg;
          }
        }

        @keyframes holo-bg {
          0% {
            background-position: 0 var(--background-y), 0 0, center;
          }
          100% {
            background-position: 0 var(--background-y), 90% 90%, center;
          }
        }
      `}</style>
      <div
        ref={wrapRef}
        className={`pc-card-wrapper relative ${className}`.trim()}
        style={cardStyle}
      >
        <section 
          ref={cardRef} 
          className="pc-card h-[80svh] max-h-[540px] grid overflow-hidden relative"
          style={{
            aspectRatio: "0.718",
            borderRadius: "var(--card-radius)"
          }}
        >
          <div className="pc-inside absolute inset-px" style={{ borderRadius: "var(--card-radius)" }} />
          <div className="pc-shine overflow-hidden" style={{ borderRadius: "var(--card-radius)" }} />
          <div className="pc-glare overflow-hidden" style={{ borderRadius: "var(--card-radius)" }} />
          
          <div className="pc-content pc-avatar-content overflow-hidden relative z-10" style={{ borderRadius: "var(--card-radius)" }}>
            <img
              className="avatar w-full absolute left-1/2 -translate-x-1/2 transform scale-100 bottom-0.5"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            
            {showUserInfo && (
              <div className="pc-user-info absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between bg-white/10 backdrop-blur-[30px] border border-white/10 rounded-2xl p-3 px-3.5 pointer-events-auto">
                <div className="pc-user-details flex items-center gap-3">
                  <div className="pc-mini-avatar w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text flex items-start flex-col gap-1.5">
                    <div className="pc-handle text-sm font-medium text-white/90 leading-none">@{handle}</div>
                    <div className="pc-status text-sm text-white/70 leading-none">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn border border-white/10 rounded-lg px-4 py-2 text-sm font-semibold text-white/90 cursor-pointer transition-all duration-200 ease-out backdrop-blur-sm hover:border-white/40 hover:-translate-y-0.5"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          
          <div className="pc-content max-h-full overflow-hidden text-center relative z-20" style={{ borderRadius: "var(--card-radius)" }}>
            <div className="pc-details w-full absolute top-12 flex flex-col">
              <h3 
                className="font-semibold m-0 text-transparent bg-clip-text"
                style={{
                  fontSize: "min(5svh, 3em)",
                  backgroundImage: "linear-gradient(to bottom, #fff, #6f6fbe)",
                  backgroundSize: "1em 1.5em",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text"
                }}
              >
                {name}
              </h3>
              <p 
                className="font-semibold relative -top-3 whitespace-nowrap text-base m-0 mx-auto w-min text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #fff, #4a4ac0)",
                  backgroundSize: "1em 1.5em",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text"
                }}
              >
                {title}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;