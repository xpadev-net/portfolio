import { Anchor } from "@/components/anchor";
import { TimelineItem } from "@/components/timeline/timelineItem";

type props = {
  id?: string;
};

const Timeline = ({ id }: props) => {
  return (
    <section>
      <Anchor id={id} />
      <h2>Timeline</h2>
      <TimelineItem date={"2023年12月"}>
        <h3>技育CAMPアドバンス Vol.4 参加</h3>
        <p>チーム: 未定(個人)</p>
        <p>
          <a href={"#p_nlog"}>「NLog」</a>で企業賞(ちゅらデータ)を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年12月"}>
        <h3>技育CAMP vol12 参加</h3>
        <p>チーム: 未定(個人)</p>
        <p>惨敗</p>
      </TimelineItem>
      <TimelineItem date={"2023年11月"}>
        <h3>技育CAMP vol11 参加</h3>
        <p>チーム: 常連(チーム)</p>
        <p>惨敗</p>
      </TimelineItem>
      <TimelineItem date={"2023年10月"}>
        <h3>技育CAMP vol10 参加</h3>
        <p>チーム: 未定(個人)</p>
        <p>
          <a href={"#p_nlog"}>「NLog」</a>で優秀賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年9月"}>
        <h3>技育展2023 決勝戦 参加</h3>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>、
          <a href={"#p_niwango_js"}>「niwango.js」</a>
          でDグループに参加
        </p>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>
          で企業賞(CyberAgent)を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年9月"}>
        <h3>技育CAMP vol9 参加</h3>
        <p>チーム: 旅行大好き(即席)</p>
        <p>惨敗</p>
      </TimelineItem>
      <TimelineItem date={"2023年9月"}>
        <h3>技育CAMPアドバンス Vol.3 参加</h3>
        <p>
          <a href={"#p_tosho_kanri_ghost"}>「図書管理ゴースト」</a>・
          <a href={"#p_geekmeet"}>「GeekMeet」</a>で参加
        </p>
        <p>
          <a href={"#p_geekmeet"}>「GeekMeet」</a>で副大賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年8月"}>
        <h3>技育展2023 予選 参加</h3>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>、
          <a href={"#p_geekcomp"}>「技育カンプ」</a>
          でエリア混合・海外ブロックに、
          <a href={"#p_niwango_js"}>「niwango.js」</a>
          で関東②ブロックに参加
        </p>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>、
          <a href={"#p_niwango_js"}>「niwango.js」</a>
          で予選通過
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年8月"}>
        <h3>技育CAMP vol7 参加</h3>
        <p>チーム: GeekMeet(個人)</p>
        <p>
          <a href={"#p_geekmeet"}>「GeekMeet」</a>
          で最優秀賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年7月"}>
        <h3>技育CAMP vol6 参加</h3>
        <p>チーム: たまごかけごはん/TKG</p>
        <p>
          <a href={"#p_tosho_kanri_ghost"}>「図書管理ゴースト」</a>
          で最優秀賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年7月"}>
        <h3>技育CAMP vol5 参加</h3>
        <p>チーム: 限界コーダー(即席)</p>
        <p>惨敗</p>
        <p>
          <a href={"#p_warikanji"}>「わりかんじ」</a>で参加
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年6月"}>
        <h3>業務委託請負</h3>
        <p>
          <a href={"#w_techtrain_lp"}>TechBowl様 学校法人向けLP</a>
          のコーディングを担当
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年6月"}>
        <h3>技育CAMPアドバンス Vol.2 参加</h3>
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
        <p>チーム: すもももももももものうち(個人)</p>
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
        <p>チーム: BookScope(DevSecOpsThonメンバー)</p>
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
        <p>チーム: 技育CAMPのアイディア出しをサポーターズ(即席)</p>
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
        <p>チーム: コードコネクト(Twitter即席)</p>
        <p>
          <a href={"#p_codeconnect"}>「コードコネクト」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年3月"}>
        <h3>技育CAMPアドバンス Vol.1 参加</h3>
        <p>
          <a href={"#p_tweetkakegohan"}>「ついーとかけごはん」</a>・
          <a href={"#p_magische"}>「マジスケ」</a>で参加
        </p>
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
        <p>チーム: ツイートかけご飯/TKG</p>
        <p>
          <a href={"#p_magische"}>「マジスケ」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2023年1月"}>
        <h3>技育CAMP vol10 参加</h3>
        <p>チーム: ターミナルかけご飯/TKG(即席)</p>
        <p>
          <a href={"#p_tweetkakegohan"}>「ついーとかけごはん」</a>で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2022年12月"}>
        <h3>技育CAMP vol9 参加</h3>
        <p>チーム: Taskshelf(即席)</p>
        <p>
          <a href={"#p_terminalkakegohan"}>「たーみなるかけごはん」</a>
          で努力賞を受賞
        </p>
      </TimelineItem>
      <TimelineItem date={"2022年11月"}>
        <h3>技育CAMP vol8 参加</h3>
        <p>チーム: Taskshelf(即席)</p>
        <p>惨敗</p>
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
        <h3>技育展2022 登壇</h3>
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
        <h3>nicotver リリース</h3>
        <p>
          nyankomaherさん作成のtver上でニコニコ実況のコメントを流せる拡張機能
        </p>
        <p>コメント描画ライブラリとしてniconicommentsが採用</p>
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
