const ReferralToolbarItem = ({
  value,
  text,
}: {
  value: string;
  text: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1 md:pb-0 pb-2 md:mb-0 mb-5">
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
    <div className="w-full md:h-[107px] h-auto bg-background-tertiary py-6 xl:px-[107px] px-[30px] rounded-[1px] grid md:grid-cols-3 grid-cols-1 md:divide-y-0 md:divide-x divide-y divide-[#5832E3] items-stretched justify-center">
      {items.map((item, index) => (
        <ReferralToolbarItem
          key={item.value + index}
          value={item.value}
          text={item.text}
        />
      ))}
    </div>
  );
};
