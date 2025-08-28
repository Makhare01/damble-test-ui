import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
};

export const CustomSelect = ({ placeholder, options }: Props) => {
  return (
    <Select defaultValue={options[0].value}>
      <SelectTrigger className="2xl:w-[204px] w-[180px] pl-10 pr-5">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="tracking-[0em]"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
