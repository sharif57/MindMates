
export default function Banner() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6">
            <div className="space-y-8">
                <h1 className="text-7xl font-semibold ">
                    Healthy Minds, Happy {' '}
                    <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                        Lives Mental
                    </span>{' '}
                    Health   Consultancy
                </h1>

                <p className="w-2/3 ">Welcome to MindMates, your haven for mental wellness! Explore resources, find support, and connect with a community dedicated to well-being.</p>

                <button
                    className="cursor-pointer text-white font-bold relative text-[14px] w-[15em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                    Get Started
                </button>



            </div>
            <img src="/banner.png" alt="" />
        </div>
    )
}
