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
      <SelectTrigger className="w-[204px] pl-10 pr-5">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
