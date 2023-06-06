type TitleColor = 'white' | 'black' | 'secondary';
type TitleTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | `[${string}]`;
type Weight = 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

interface Props {
    tag?: TitleTag,
    color?: TitleColor,
    size?: Size,
    weight?: Weight,
    extraClasses?: string,
    children: string
}

const Title = ({ tag = 'h1', color = 'black', size = 'xl', weight = 'bold', children, extraClasses = '' }: Props) => {
    const Tag = tag;
    const textColor = color === 'secondary' ? 'text-[--secondary-color]' : `text-${color}`;
    
    return <Tag className={` font-${weight} text-${size} ${extraClasses} ${textColor}`}>{children}</Tag>
}

export default Title;