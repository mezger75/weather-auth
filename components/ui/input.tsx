import clsx from 'clsx';

export const Input = ({
  label,
  htmlForId,
  type,
  name,
  onChange,
  value,
  placeholder,
  errorMessage,
  autoComplete,
  minLength,
}: {
  label: string;
  htmlForId: string;
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  errorMessage?: string | null;
  autoComplete?: string;
  minLength?: number;
}) => {
  return (
    <>
      <label
        className="mb-2 mt-3 block text-xs font-medium text-gray-900"
        htmlFor={htmlForId}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            'peer block w-full rounded-md border',
            errorMessage ? 'border-red-500' : 'border-gray-200',
            'py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500'
          )}
          id={htmlForId}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          onChange={onChange}
          autoComplete={autoComplete}
          minLength={minLength}
        />
      </div>
    </>
  );
};
