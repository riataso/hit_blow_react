import React from 'react';
import { Link } from 'react-router-dom';

const Rule = () => {
  return (
    <div className = "howToPlay">
      <h1 className="howToPlayTitle">遊び方</h1>
      <p className="explanation">
        4桁の数字当てゲームです。<br />
        数字が入力されると、<br />
        HIT（数字も場所も正解）の数と、<br />
        BLOW（数字は正解だが場所が違う）の数<br />
        を回答しますので、それをヒントに  <br />
        正解の数字を当てて下さい。<br />
        <br />
        例） 正解が "3904" のとき、<br />
        入力が "1234" だと、<br />
        HIT=1 (4) BLOW=1 (3)となります。<br />

        正解は、0～9の数字で、同じ数字が<br />
        2回以上使われることはありません。<br />
        <br />
        制限時間はありませんので慎重に考えてね。<br />
      </p>
      <br />
      <button type='button' className='ruleback'>
        <Link to = "/" onclick= {this}>ホーム画面へ</Link>
      </button>
    </div>
  )
}

export default Rule