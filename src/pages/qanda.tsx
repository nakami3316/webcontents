import Header from "./header"
export default function QandA() {
    return (
        <>
        <Header/>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* <!-- text - start --> */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions</h2>
                </div>
                {/* <!-- text - end --> */}

                <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                    {/* <!-- question - start --> */}
                    <div className="rounded-lg bg-gray-100 p-5">
                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">サイトに登場する歴史上の人物の選定基準は何ですか？</h3>

                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <p className="text-gray-500">サイトでは、歴史上の人物を選定する際には複数の基準を考慮しています。重要な歴史的出来事に関与した人物、文化や科学に貢献した人物、または社会的な影響を与えた人物などが選ばれます。選定は客観的な歴史的価値や広く知られた評価に基づいて行われています。</p>
                    </div>
                    {/* <!-- question - end --> */}

                    {/* <!-- question - start --> */}
                    <div className="rounded-lg bg-gray-100 p-5">
                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">各人物のプロフィールにどのような情報が含まれていますか？</h3>

                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <p className="text-gray-500">各歴史上の人物のプロフィールには、生涯、業績、重要な出来事、影響などに関する情報が含まれています。また、時代背景や関連するイベント、他の歴史的人物との関係なども併せて紹介されています。プロフィールページでは、読者がその人物について包括的な理解を得ることができます。</p>
                    </div>
                    {/* <!-- question - end --> */}

                    {/* <!-- question - start --> */}
                    <div className="rounded-lg bg-gray-100 p-5">
                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">サイト上での歴史の時代や地域の幅は広がりますか？</h3>

                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <p className="text-gray-500">はい、サイトでは歴史の幅を広くカバーしています。異なる時代や地域、文化における様々な歴史的人物が紹介されています。これにより、読者は世界中の異なる歴史的背景に触れ、多様な歴史的出来事や個人について学ぶことができます。</p>
                    </div>
                    {/* <!-- question - end --> */}

                    {/* <!-- question - start --> */}
                    <div className="rounded-lg bg-gray-100 p-5">
                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">ユーザーからのフィードバックや新しい人物の提案は受け付けていますか？</h3>

                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <p className="text-gray-500">はい、ユーザーからのフィードバックや新しい人物の提案は歓迎しています。サイト内で提供されるコンテンツの質を向上させるために、ユーザーの意見や追加してほしい人物などの提案を積極的に受け付けています。フィードバックフォームやコンタクトページを通じてユーザーとのコミュニケーションを大切にしています。</p>
                    </div>
                    {/* <!-- question - end --> */}
                </div>
            </div>
        </div>
        </>

    )
}