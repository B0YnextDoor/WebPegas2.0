import { memo } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";

export const Trigger = memo(({ children, style = {} }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    delay: 450,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <animated.div ref={ref} style={{ ...style, ...animation }}>
      {children}
    </animated.div>
  );
});

export const TriggerText = memo(({ children, style = {} }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    delay: 1000,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(20px)",
  });

  return (
    <animated.div ref={ref} style={{ ...style, ...animation }}>
      {children}
    </animated.div>
  );
});

export const TriggerHeader = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 800,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateZ(0)" : "translateZ(20px)",
    });

    return (
      <animated.div
        ref={ref}
        style={{ ...style, ...animation }}
        className={className}
      >
        {children}
      </animated.div>
    );
  }
);
