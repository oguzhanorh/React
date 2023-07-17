function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.PropTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);

    if (count > 1) {
      return new Error('Only one of primary,secondary,..etc');
    }
  },
};

export default Button;
