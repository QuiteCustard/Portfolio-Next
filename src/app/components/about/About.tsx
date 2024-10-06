import Image from 'next/image'

export default function About() {
    return (
        <section className="py-8 flex flex-col gap-8 text-white md:flex-row md:gap-4 lg:py-16" id={"about"}>
            <div className='flex flex-col gap-4 flex-1'>
                <h2 className={`text-5xl font-semibold pt-4`}>About me</h2>
                <p className={`font-normal`}>
                    I enjoy making intuitive, eye-catching, and functional websites. I finished university in 2022 with a first class honours degree. I&apos;m currently working at Pitched.
                </p>
                <p>When I&apos;m not developing websites, you&apos;ll find me listening to music, playing games, or playing sports with my friends.</p>
            </div>
            <Image src="/myself.webp" alt="Sam Edwards" width={300} height={300} className="rounded-3xl" />
        </section>
    )
}