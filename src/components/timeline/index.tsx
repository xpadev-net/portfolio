import { TimelineItem } from "@/components/timeline/timelineItem";

type props = {
  id?: string;
};

const Timeline = ({ id }: props) => {
  return (
    <div id={id}>
      <TimelineItem date={"2023年4月"}>
        <h3>技育CAMP vol2 参加</h3>
        <p>「技育カンプ」で努力賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2023年4月"}>
        <h3>video_host_frontend リリース</h3>
        <p>自宅サーバー上で動かす用のメディアサーバーのフロントエンド</p>
      </TimelineItem>
      <TimelineItem date={"2023年3月"}>
        <h3>技育CAMP vol1 参加</h3>
        <p>「コードコネクト」で努力賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2023年3月"}>
        <h3>技育CAMP アドバンス 参加</h3>
        <p>「ついーとかけごはん」で企業賞(CARTA)を受賞</p>
        <p>「マジスケ」で大賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2023年2月"}>
        <h3>niwango.js 動作サンプル リリース</h3>
        <p>niconicommentsに組み込む形で動作サンプルをリリース</p>
        <p>サンプルデータはHDAさんのコネクトをお借りしています</p>
      </TimelineItem>
      <TimelineItem date={"2023年2月"}>
        <h3>技育CAMP vol11 参加</h3>
        <p>「マジスケ」で努力賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2023年1月"}>
        <h3>技育CAMP vol10 参加</h3>
        <p>「ついーとかけごはん」で努力賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2022年12月"}>
        <h3>技育CAMP vol9 参加</h3>
        <p>「たーみなるかけごはん」で努力賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>技育CAMP vol8 参加</h3>
        <p>チーム全員初参加で受賞は逃したものの、得られたものは多かった</p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>nicomemory リリース</h3>
        <p>ニコ動のマイメモリー的なサービス</p>
      </TimelineItem>
      <TimelineItem date={"2022年9月"}>
        <h3>niconicomments-convert リリース</h3>
      </TimelineItem>
      <TimelineItem date={"2022年9月"}>
        <h3>技育展 登壇</h3>
        <p>無駄開発部門にniconicommentsで参加</p>
        <p>優秀賞を受賞</p>
      </TimelineItem>
      <TimelineItem date={"2022年8月"}>
        <h3>niconicomments-convert 開発開始</h3>
        <p>ニコニコのコメントを動画に焼き付けるツール</p>
      </TimelineItem>
      <TimelineItem date={"2022年7月"}>
        <h3>niwango.js 開発開始</h3>
        <p>ニワン語をブラウザ上で動作させるための実行エンジン</p>
      </TimelineItem>
      <TimelineItem date={"2022年6月"}>
        <h3>コメント増量 リリース</h3>
        <p>tanbatuさん作成のブラウザ上でニコ動のコメントを増量する拡張機能</p>
        <p>コメント描画ライブラリとしてniconicommentsが採用</p>
      </TimelineItem>
      <TimelineItem date={"2022年5月"}>
        <h3>AbemaStream リリース</h3>
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
        <h3>GyaoDL リリース</h3>
        <p>GYAO!から動画をダウンロードするためのスクリプト</p>
        <p>サ終までの1年間自宅サーバー上で稼働し続けていた</p>
      </TimelineItem>
      <TimelineItem date={"2021年12月"}>
        <h3>niconicomments リリース</h3>
        <p>当時は「ニコニコ風」程度の互換性しかなかった</p>
      </TimelineItem>
      <TimelineItem date={"2021年11月"}>
        <h3>niconicomments 開発開始</h3>
        <p>ニコニコ互換のコメント描画ライブラリ</p>
      </TimelineItem>
    </div>
  );
};

export { Timeline };
