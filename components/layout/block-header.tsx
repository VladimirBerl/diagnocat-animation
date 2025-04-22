interface Props {
    text: string;
}

export const BlockHeader = ({ text }: Props) => {
    return <h2 className="mt-15 xl:mt-25 max-w-layout-small font-bold">{text}</h2>;
};
