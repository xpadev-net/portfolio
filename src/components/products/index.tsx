import { Product } from "@/components/products/product";
import Styles from "./Styles.module.scss";
import { Anchor } from "@/components/anchor";
import { GitHub } from "@/components/products/product/links/github";
import { Docs } from "@/components/products/product/links/document";
import { Web } from "@/components/products/product/links/web";
import { Package } from "@/components/products/product/links/package";

type props = {
  id?: string;
};

const Products = ({ id }: props) => {
  return (
    <section className={Styles.wrapper}>
      <Anchor id={id} />
      <h2>Products</h2>
      <div className={Styles.container}>
        <Product
          title={"niconicomments"}
          id={"p_niconicomments"}
          thumbnail={
            "https://repository-images.githubusercontent.com/443770545/7f29af22-32b4-4fd9-a8f3-03b6aba40b66"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/niconicomments/"} />
          <Docs url={"https://xpadev-net.github.io/niconicomments/"} />
          <p>
            ニコニコ動画の公式プレイヤー互換の高パフォーマンスなコメント描画ライブラリ
          </p>
        </Product>
        <Product
          title={"niconicomments-convert"}
          id={"p_niconicomments-convert"}
          thumbnail={
            "https://repository-images.githubusercontent.com/531188726/98dfeced-e6f0-45e2-94a6-89a2dafc2ae2"
          }
        >
          <GitHub
            url={"https://github.com/xpadev-net/niconicomments-convert/"}
          />
          <p>動画にニコニコのコメントをのせて書き出す簡易ツール</p>
        </Product>
        <Product
          title={"GyaoDL"}
          id={"p_gyaodl"}
          thumbnail={
            "https://opengraph.githubassets.com/cfd1cec39d7ee6ad3e4b42d074ee0ab902653a9f3dd5bf520f0601c39c309bb1/xpadev-net/GyaoDL"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/gyaodl/"} />
          <p>GYAO!から動画をダウンロードするためのスクリプト</p>
        </Product>
        <Product
          title={"AbemaStream"}
          id={"p_abemastream"}
          thumbnail={
            "https://opengraph.githubassets.com/916e12031df65f436e979cfb9fa5d429a6b9b385f50e3a444e721a2e25de19fa/xpadev-net/abema-stream"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/abema-stream"} />
          <p>Abemaの生配信を録画するためのスクリプト</p>
        </Product>
        <Product
          title={"niwango.js"}
          id={"p_niwango_js"}
          thumbnail={
            "https://opengraph.githubassets.com/c07a6e139b7168d85c53e4f9868cfb0a89716c21a8e52b83e938ec7784647756/xpadev-net/niwango.js"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/niwango.js"} />
          <p>ブラウザ上で動くニワン語エンジン</p>
        </Product>
        <Product
          title={"AnimeFreeStats"}
          id={"p_animefreestats"}
          thumbnail={
            "https://opengraph.githubassets.com/1f6c1894b2e8e7cbecbbdaa862c9b64162f363842c826b9f73079fa7367115d2/xpadev-net/animefreestats"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/animefreestats"} />
          <Web url={"https://animefreestats.vercel.app/"} />
          <p>アニメの無料配信情報をまとめて見ることができるサービス</p>
        </Product>
        <Product title={"NicoMemory"} id={"p_nicomemory"}>
          <Web url={"https://nicomemory.vercel.app/"} />
          <p>niconicommentsを活用したマイメモリーのようなサービス</p>
        </Product>
        <Product title={"ついーとかけごはん"} id={"p_tweetkakegohan"}>
          <p>技育CAMP vol10で制作したプロダクト</p>
          <p>チームはvol9と同じ</p>
          <p>ツイートした内容がものに変換されて画面に降ってくるツール</p>
        </Product>
        <Product
          title={"たーみなるかけごはん"}
          id={"p_terminalkakegohan"}
          thumbnail={
            "https://opengraph.githubassets.com/5b2e1c7b4777f032ff4970e330a0550e4e55c8f96b47211158ee91a74ef140a8/RyotaKITA-12/terminalKakeGohan"
          }
        >
          <GitHub url={"https://github.com/RyotaKITA-12/terminalKakeGohan"} />
          <p>技育CAMP vol9で制作したプロダクト</p>
          <p>macのターミナルのテーマを編集することができるアプリ</p>
        </Product>
        <Product
          title={"マジスケ"}
          id={"p_magische"}
          thumbnail={
            "https://opengraph.githubassets.com/b1e1695596d30be49b903c8aa4d99d1c68064f85225b7f004caffb23e49b5ff9/geekcamp-vol11-team30/frontend"
          }
        >
          <GitHub url={"https://github.com/geekcamp-vol11-team30"} />
          <Web url={"https://magi-sche.vercel.app/"} />
          <p>技育CAMP vol11で制作したプロダクト</p>
          <p>
            Googleカレンダーと連携することで参加可否を自動で入力してくれる日程調整ツール
          </p>
        </Product>
        <Product
          title={"コードコネクト"}
          id={"p_codeconnect"}
          thumbnail={
            "https://opengraph.githubassets.com/9ecbca4532616c790338b7a2f480d21434cafefa7315851c8ceb049928e0b7dd/GiikuCAMPvol1/frontend"
          }
        >
          <GitHub url={"https://github.com/GiikuCAMPvol1/"} />
          <p>技育CAMP2023 vol1で制作したプロダクト</p>
          <p>プログラミング版GarticPhone</p>
        </Product>
        <Product
          title={"video_host_frontend"}
          id={"p_video_host_frontend"}
          thumbnail={
            "https://opengraph.githubassets.com/c622ef30fba848821ee3e97e004daeb44b6b8ebe96ba7da34480437bf08ba0bc/xpadev-net/video_host_frontend"
          }
        >
          <GitHub url={"https://github.com/xpadev-net/video_host_frontend"} />
          <Package
            url={
              "https://github.com/xpadev-net/video_host_frontend/pkgs/container/video_host_frontend"
            }
          />
          <p>自宅サーバー上で運用しているメディアサーバーのフロントエンド</p>
        </Product>
        <Product title={"技育カンプ"} id={"p_geekcomp"}>
          <GitHub url={"https://github.com/geekcamp2023-vol2-team31"} />
          <p>技育CAMP2023 vol2で制作したプロダクト</p>
          <p>ハッカソンにおけるアイディア出しを促進するためのツール</p>
        </Product>
      </div>
    </section>
  );
};

export { Products };
