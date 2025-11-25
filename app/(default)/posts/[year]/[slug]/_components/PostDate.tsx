const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IPostDateProps {
  date: string;
}

export default function PostDate({ date }: IPostDateProps) {
  return dateFormatter.format(new Date(date));
}
