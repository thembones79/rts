interface ChildProps {
  color: string;
  onClick: () => void;
  //children: ReactChild;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi {color}!<button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hi {color}!<button onClick={onClick}>Click me</button> {children}
    </div>
  );
};
