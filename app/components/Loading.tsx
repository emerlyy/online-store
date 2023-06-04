import Image from "next/image";

const Loading = () => (
    <div className="flex flex-col items-center justify-center">
        <Image width={380} height={380} src="/loader.gif" alt='' />
        <span className="font-bold text-3xl tracking-widest">Loading...</span>
    </div>
);

export default Loading;