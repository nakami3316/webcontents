import Header from "./header";

export default function Default1() {
    return (
        <>
            <Header />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
                    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">ウィリアム・シェイクスピア</h1>

                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                        プロフィール:
                        ウィリアム・シェイクスピアは1564年にイギリスのストラトフォード・アポン・エイヴォンで生まれました。彼の才能ある筆致は、戯曲や詩の分野でその輝きを放ち、彼をエリザベス朝およびジャコビアン時代の文学の巨星としました。

                        主要な作品:
                        シェイクスピアの作品は時を超えて愛され、上演され続けています。代表作には『ロミオとジュリエット』、『ハムレット』、『マクベス』、『オセロ』、そして『ヘンリーV』などがあります。これらの作品は人間の心の奥深さや複雑な人間関係を掘り下げ、今日でも多くの人に感動を与えています。

                        文学への遺産:
                        シェイクスピアは言語の巧妙な使い方や人間性への深い理解によって、文学に多大な影響を与えました。彼の言葉は今なお現代の作家や演劇家に影響を与え、彼の作品は世界中で学術的にも尊重されています。

                        ギャラリー:
                        こちらではシェイクスピアの生涯や時代背景を知るための貴重な写真や絵画が掲載されています。彼の時代を感じ取り、彼の生涯に触れることができます。

                        最新ニュース:
                        このセクションではシェイクスピアに関連する最新のニュースやイベント情報を提供しています。彼の作品の新たな解釈や上演、研究に関する情報をお見逃しなく。

                        歴史的な重要人物、ウィリアム・シェイクスピアの深遠な世界を、この公式ウェブサイトで探索しましょう。
                    </p>

                    <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“ウィリアム・シェイクスピアの画像”</blockquote>

                    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                        <img src="https://www.shinchosha.co.jp/images_v2/writer/482.jpg" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </>
    )
}