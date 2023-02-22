type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({
  label,
  onClick: actionOnClick,
}: ButtonProps): JSX.Element => {
  return <button onClick={actionOnClick}>{label}</button>;
};
