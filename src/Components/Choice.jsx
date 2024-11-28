
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Choice() {
    return (
        <div className='px-6'>
            <div className=" w-3/4 mx-auto text-center">
                <h1 className="text-5xl font-semibold">Why our  <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">Mental Health</span>  Consultants are the Best Choice </h1>
            </div>
            <div className='container mx-auto h-[100px]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={'auto'}
                    width={300}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,

                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
