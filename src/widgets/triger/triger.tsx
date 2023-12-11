import { memo } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";

export const TriggerTop = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 200,
      opacity: inView ? 1 : 0,
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

export const Trigger = memo(({ children, style = {}, className = "" }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    delay: 350,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
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
});

export const TriggerHeader = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 350,
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

export const TriggerText = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 650,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(20px)",
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

export const TriggerBtn = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 750,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(20px)",
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

export const TriggerAddText = memo(
  ({ children, style = {}, className = "" }: any) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const animation = useSpring({
      delay: 850,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(20px)",
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
