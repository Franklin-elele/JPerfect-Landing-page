
type buttonProps = {
    children:React.ReactNode;
    variant?: 'Primary' | 'Secondary';
    className:string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export default function Button ({
    children,
    variant = 'Primary',
    className,
    type = 'button',
    onClick,
}:buttonProps) {

    const base = 'h-10 px-8 rounded-full font-medium transition'
    const Variants = {
        Primary:'bg-[#E11D48] text-[#FFFFFF] hover:bg-[#BE123C]',
        Secondary:'bg-[#FDE2E4] text-[#9F1239] hover:bg-[#FBCFE8] border border-[#F9A8B4 ]',
    }
    
    return (
        <button
        type={type}
        onClick={onClick}
        className={`${base} ${Variants[variant]} ${className}`}>{children}</button>
    )
}