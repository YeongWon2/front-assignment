import clsx from 'clsx';

interface IDividerProps {
  height: number;
  className?: string;
}

function Divider(props: IDividerProps) {
  const { height, className } = props;

  return (
    <hr
      className={clsx('w-full bg-divider my-8', className)}
      style={{
        height,
      }}
    />
  );
}

export default Divider;
