import { TimelineItem } from "@/components/timeline/timelineItem";
import { Anchor } from "@/components/anchor";

type props = {
  id?: string;
};

const Timeline = ({ id }: props) => {
  return (
    <section>
      <Anchor id={id} />
      <h2>Timeline</h2>
      <TimelineItem date={"2023年6月"}>
        <h3>技育CAMP vol5 参加</h3>
        <p>惨敗</p>
        <p>
          <a href={"#p_warikanji"}>「わりかんじ」</a>で参加
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年6月"}>
        <h3>技育CAMP アドバンス vol2 参加</h3>
        <p>惨敗</p>
        <p>
          <a href={"#p_codeconnect"}>「コードコネクト」</a>・
          <a href={"#p_geekcomp"}>「技育カンプ」</a>で参加
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年6月"}>
        <h3>基本情報技術者試験 取得</h3>
        <p>科目A: 650/科目B: 880</p>
      </TimelineItem>
      <TimelineItem date={"2023年6月"}>
        <h3>技育CAMP vol4 参加</h3>
        <p>惨敗</p>
      </TimelineItem>
      <TimelineItem date={"2023年5月"}>
        <h3>2023年度未踏ジュニア 採択</h3>
        <p>
          採択プロジェクト: <a href={"#p_niwango_js"}>niwango.js</a>
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年5月"}>
        <h3>技育CAMP vol3 参加</h3>
        <p>惨敗</p>
      </TimelineItem>
      <TimelineItem date={"2023年4月"}>
        <h3>DevSecOpsThon2023 in GMO kitaQ 参加</h3>
        <p>チームBで最優秀賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2023年4月"}>
        <h3>
          <a href={"#p_portfolio"}>ポートフォリオ</a> リリース
        </h3>
        <p>とりあえず仮リリース</p>
      </TimelineItem>
      <TimelineItem date={"2023年4月"}>
        <h3>技育CAMP vol2 参加</h3>
        <p>
          <a href={"#p_geekcomp"}>「技育カンプ」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年4月"}>
        <h3>
          <a href={"#p_video_host_frontend"}>video_host_frontend</a> リリース
        </h3>
        <p>自宅サーバー上で動かす用のメディアサーバーのフロントエンド</p>
      </TimelineItem>
      <TimelineItem date={"2023年3月"}>
        <h3>技育CAMP vol1 参加</h3>
        <p>
          <a href={"#p_codeconnect"}>「コードコネクト」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年3月"}>
        <h3>技育CAMP アドバンス 参加</h3>
        <p>
          <a href={"#p_tweetkakegohan"}>「ついーとかけごはん」</a>
          で企業賞(CARTA)を受賞
        </p>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>で大賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年2月"}>
        <h3>
          <a href={"#p_niwango_js"}>niwango.js</a> 動作サンプル リリース
        </h3>
        <p>niconicommentsに組み込む形で動作サンプルをリリース</p>
        <p>サンプルデータはHDAさんのコネクトをお借りしています</p>
      </TimelineItem>
      <TimelineItem date={"2023年2月"}>
        <h3>技育CAMP vol11 参加</h3>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年1月"}>
        <h3>技育CAMP vol10 参加</h3>
        <p>
          <a href={"#p_tweetkakegohan"}>「ついーとかけごはん」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2022年12月"}>
        <h3>技育CAMP vol9 参加</h3>
        <p>
          <a href={"#p_terminalkakegohan"}>「たーみなるかけごはん」</a>
          で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>技育CAMP vol8 参加</h3>
        <p>チーム全員初参加で受賞は逃したものの、得られたものは多かった</p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>
          <a href={"#p_nicomemory"}>NicoMemory</a> リリース
        </h3>
        <p>ニコ動のマイメモリー的なサービス</p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>
          <a href={"#p_animefreestats"}>AnimeFreeStats</a> リリース
        </h3>
        <p>アニメの無料配信情報をまとめて見ることができるサービス</p>
      </TimelineItem>
      <TimelineItem date={"2022年9月"}>
        <h3>
          <a href={"#p_niconicomments-convert"}>niconicomments-convert</a>{" "}
          リリース
        </h3>
      </TimelineItem>
      <TimelineItem date={"2022年9月"}>
        <h3>技育展 登壇</h3>
        <p>無駄開発部門にniconicommentsで参加</p>
        <p>優秀賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2022年8月"}>
        <h3>
          <a href={"#p_niconicomments-convert"}>niconicomments-convert</a>{" "}
          開発開始
        </h3>
        <p>ニコニコのコメントを動画に焼き付けるツール</p>
      </TimelineItem>
      <TimelineItem date={"2022年7月"}>
        <h3>
          <a href={"#p_niwango_js"}>niwango.js</a> 開発開始
        </h3>
        <p>ニワン語をブラウザ上で動作させるための実行エンジン</p>
      </TimelineItem>
      <TimelineItem date={"2022年6月"}>
        <h3>コメント増量 リリース</h3>
        <p>tanbatuさん作成のブラウザ上でニコ動のコメントを増量する拡張機能</p>
        <p>コメント描画ライブラリとしてniconicommentsが採用</p>
      </TimelineItem>
      <TimelineItem date={"2022年5月"}>
        <h3>
          <a href={"#p_abemastream"}>AbemaStream</a> リリース
        </h3>
        <p>Abemaの生放送を録画するためのスクリプト</p>
        <p>現在も自宅サーバー上で稼働中</p>
      </TimelineItem>
      <TimelineItem date={"2022年5月"}>
        <h3>nicotver リリース</h3>
        <p>
          nyankomaherさん作成のtver上でニコニコ実況のコメントを流せる拡張機能
        </p>
        <p>コメント描画ライブラリとしてniconicommentsが採用</p>
      </TimelineItem>
      <TimelineItem date={"2022年1月"}>
        <h3>
          <a href={"#p_gyaodl"}>GyaoDL</a> リリース
        </h3>
        <p>GYAO!から動画をダウンロードするためのスクリプト</p>
        <p>サ終までの1年間自宅サーバー上で稼働し続けていた</p>
      </TimelineItem>
      <TimelineItem date={"2021年12月"}>
        <h3>
          <a href={"#p_niconicomments"}>niconicomments</a> リリース
        </h3>
        <p>当時は「ニコニコ風」程度の互換性しかなかった</p>
      </TimelineItem>
      <TimelineItem date={"2021年11月"}>
        <h3>
          <a href={"#p_niconicomments"}>niconicomments</a> 開発開始
        </h3>
        <p>ニコニコ互換のコメント描画ライブラリ</p>
      </TimelineItem>
    </section>
  );
};

export { Timeline };
