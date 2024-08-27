import Image from 'next/image'

export default function About() {
    return (
        <section className="py-16 flex flex-col md:flex-row gap-4 text-white">
            <div className='flex flex-col gap-4'>
                <h2 className={`text-5xl font-semibold`}>About me</h2>
                <p className={`font-normal`}>
                    I enjoy making intuitive, eye-catching, and functional websites. I finished university in 2022 with a first class honours degree. I&apos;m currently working at Pitched.
                </p>
                <p>When I&apos;m not developing websites, you&apos;ll find me listening to music, playing games, or playing sports with my friends.</p>
            </div>
            <Image src="/myself.webp" alt="Sam Edwards" width={300} height={300} className="rounded-3xl flex-1" />
        </section>
    )
}
