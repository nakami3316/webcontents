import Header from "./header";

export default function Default() {
    return (
        <>
        <Header/>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">人物紹介</h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://www.shinchosha.co.jp/images_v2/writer/482.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="/detail1" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ウィリアム・シェイクスピア</a>
                                </h2>

                                <p className="text-gray-500">歴史上最も偉大な劇作家と詩人の一人として知られるウィリアム・シェイクスピアへようこそ。このウェブサイトでは、シェイクスピアの生涯、作品、そして彼がどのように文学史に影響を与えたかについて、詳細な情報を提供しています。</p>

                                <div>
                                    <a href="/detail1" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg/200px-Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Comming Soon</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/200px-Aristotle_Altemps_Inv8575.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Comming Soon</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kant_gemaelde_1.jpg/250px-Kant_gemaelde_1.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Comming Soon</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}