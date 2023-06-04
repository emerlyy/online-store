'use client'

import Image from "next/image"
import { useState } from 'react'
interface Props {
    images: string[]
}

const ImageViewer = ({ images }: Props) => {
    const [current, setCurrent] = useState<string>(images[0]);

    const setImage = (src: string) => () => setCurrent(src);

    return (
        <div>
            <div className="h-[340px] mb-3">
                <Image src={current} alt='' width={1000} height={1000} className="w-full h-full object-contain"/>
            </div>
            <ul className="flex items-center gap-x-4">
                {
                    images.map(img => {
                        const isActive = img === current;
                        return (
                            <li key={img}>
                                <button
                                    className={`w-14 h-14${isActive ? ' border border-black' : ' brightness-50'}`}
                                    onClick={setImage(img)}
                                >
                                    <Image width={80} height={80} src={img} alt='' className="w-full h-full object-contain" />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ImageViewer;