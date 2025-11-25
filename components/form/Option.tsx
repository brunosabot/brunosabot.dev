interface IOptionProps {
  children: React.ReactNode;
  value: string;
}

const Option: React.FC<IOptionProps> = (props) => {
  return <option {...props} />;
};

export default Option;
