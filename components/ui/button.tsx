import clsx from 'clsx';

export const Button = ({
  type = 'button',
  className = '',
  children,
  onClick,
  ...props
}: {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'w-full rounded px-2 py-1 hover:bg-[var(--secondary)] transition'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
