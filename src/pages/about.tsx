import Header from "./header";

export default function About() {
    return (
        <>
        <Header/>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div className="md:pt-8">
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        歴史人物紹介サイトでは、世界の様々な時代や文化から著名な人物たちを探索し、その生涯や業績に光を当てています。我々のサイトは、過去の偉大なる人物たちの生き様や影響に焦点を当て、歴史の中で重要な役割を果たした人々の物語を解き明かします。
        </p>

        特徴:

        幅広い時代と領域: 古代から現代にかけて、世界中の異なる時代や地域で活躍した人物たちを包括的に取り上げています。ユーザーは自らの興味や好みに応じて様々な歴史的フィギュアを発見できます。

        詳細なプロフィール: 各人物のプロフィールには生い立ち、業績、功績、そしてその時代の文脈など、詳細かつ正確な情報が含まれています。ユーザーはこれらの情報を通じて、歴史の中での人物たちの重要性を理解できます。

        豊富な視覚コンテンツ: 写真、絵画、古文書、地図など、多彩な視覚的要素を組み合わせて、人物の生涯や時代背景をより深く理解できるようにしています。

        ユーザー参加型: ユーザーはサイト上でコメントや評価を投稿し、自身の意見や情熱を共有できます。また、ユーザーが新たな歴史的人物を提案することも歓迎しています。

        歴史人物紹介サイトは、過去の興味深い物語や人間ドラマを通じて、歴史への洞察を提供します。私たちは歴史を愛する人々に向けて、知的好奇心を刺激するコンテンツを提供し、過去の偉人たちの遺産を称賛します。Explore the Past, Understand the Present.

      </div>
    </div>
  </div>
</div>
        </>
    )
}