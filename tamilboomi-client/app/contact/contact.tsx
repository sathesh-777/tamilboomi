import React from "react";
import { styles } from "../styles/style";

const Contact = () => {
    return (
        <div className="text-black dark:text-white my-20">
            <div className="w-[95%] 800px:w-[85%] m-auto">
                <section className="py-16 bg-gray-100 font-poppins dark:bg-gray-900">
                    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
                        <div className="max-w-xl mx-auto">
                            <div className="text-center ">
                                <div className="relative flex flex-col items-center">
                                    <div
                                        className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                        Contact
                                    </div>
                                    <h1 className="text-5xl font-bold dark:text-white"> Our <span className="text-blue-500"> Contact
                                    </span> </h1>
                                    <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                        <div className="flex-1 h-2 bg-blue-200">
                                        </div>
                                        <div className="flex-1 h-2 bg-blue-400">
                                        </div>
                                        <div className="flex-1 h-2 bg-blue-600">
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-16 text-base text-center text-gray-500">
                                    To better assist you, contact us
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-8 -mx-4">
                            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                                <div
                                    className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                                        Email</h2>
                                    <a href="mailto:info@tamilboomi.com"
                                        className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400">info@tamilboomi.com</a>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                                <div
                                    className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                                        Phone</h2>
                                    <a href="tel:+91 9619663272"
                                        className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400">+91 9619663272
                                    </a>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                                <div
                                    className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-grid-3x3" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                                        Social</h2>
                                    <a href="https://www.instagram.com/tamilboomitechnologies?igsh=NzBmMjdhZWRiYQ%3D%3D"
                                        className="inline-block mr-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9" /></svg>
                                    </a>
                                    <a href="https://youtube.com/@Tamilboomi?si=6eyAO2AXQXd9qmzJ"
                                        className="inline-block mr-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 14"><path fill="currentColor" d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/tamilboomi-tech-118783277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        className="inline-block mr-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" /></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;