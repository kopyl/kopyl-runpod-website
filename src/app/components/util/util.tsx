import styles from "./util.module.sass";

export const CenteredContainer = ({ children, className, _ref }: any) => {
  return (
    <div
      ref={_ref ? _ref : null}
      style={{
        maxWidth: "1064px",
        margin: "0 auto",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export const SideSafeArea = ({ className, children }: any) => {
  return <div className={`${styles.safeArea} ${className}`}>{children}</div>;
};
