type TitleColor = 'white' | 'black' | 'secondary';

type TitleTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

interface Props {
    tag?: TitleTag,
    color?: TitleColor,
    extraClasses?: string,
    children: string
}

const Title = ({ tag = 'h1', color = 'black', children, extraClasses }: Props) => {
    const Tag = tag;
    const textColor = `text-${color}`
    return <Tag className={`font-bold text-xl ${textColor} ${extraClasses}`}>{children}</Tag>
}

export default Title;