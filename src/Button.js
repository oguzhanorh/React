import classNames from 'classnames';

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
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
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
    onClick,
    ...rest
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
