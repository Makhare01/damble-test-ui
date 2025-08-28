const ReferralToolbarItem = ({
  value,
  text,
}: {
  value: string;
  text: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1">
      <h3 className="text-[25px] font-bold text-white tracking-[0em]">
        {value}
      </h3>
      <p className="text-[10px] font-normal text-[#8E97A9] uppercase">{text}</p>
    </div>
  );
};

type Props = {
  items: Array<{ value: string; text: string }>;
};

export const ReferralValuesToolbar = ({ items }: Props) => {
  return (
    <div className="w-full h-[107px] bg-background-tertiary py-6 px-[107px] rounded-[1px] grid grid-cols-3 divide-x divide-[#5832E3] items-stretched justify-center">
      {items.map((item) => (
        <ReferralToolbarItem
          key={item.value}
          value={item.value}
          text={item.text}
        />
      ))}
    </div>
  );
};
