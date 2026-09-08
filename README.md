# NEON PULSE LAB

パチンコ・パチスロの電子演出から着想を得た、完全オリジナル効果音のブラウザ生成アプリです。実在メーカー・実在機種の音源は使用・模倣していません。Web Audio APIによるリアルタイム合成だけで音を作ります。

## 起動方法

`index.html` をPC版ChromeまたはEdgeで開いてください。ビルド、サーバー、外部ライブラリは不要です。ブラウザの自動再生制限に対応するため、最初の音声開始はPLAYまたはプリセットボタンのクリック後です。

## ファイル構成

```text
index.html
css/style.css          UI、ネオン表現、レスポンシブ対応
js/presets.js          8種類のオリジナル多層プリセット
js/audioEngine.js      合成、エフェクト、Limiter、オフライン描画
js/wavExporter.js      44.1kHz / 16bit PCM / stereo WAV変換
js/visualizer.js       Canvas波形・簡易スペクトラム
js/app.js              UI、レイヤー、履歴、保存、ランダム生成
```

## 主な機能

- 先バレ、キュイン、衝撃、警報、プレミアム、8BIT、フラッシュ、低音バイブ風の8プリセット
- 最大16レイヤー。ON/OFF、追加、複製、削除、開始位置0〜3秒、音長・各種エフェクトを個別編集
- sine / square / sawtooth / triangle / noise、ADSR、ピッチスイープ、ディレイ、簡易リバーブ、歪み、LPF、HPF、Pan
- PLAY、STOP、LOOP、再生成、6カテゴリの制御付きランダム生成
- リアルタイム波形 / スペクトラム切替
- 44.1kHz、16bit PCM、stereoのWAV書き出し
- JSONプリセットの書き出し・読み込み、直近状態のLocalStorage自動保存
- UIボタンおよびCtrl+Z / Ctrl+YによるUndo / Redo
- DynamicsCompressorとマスターGainによるピーク抑制。周波数は20〜12000Hz、レイヤー音量は最大0.85に制限

SOUND LABは現在選択中のレイヤーを編集します。右側（狭い画面では下側）のレイヤーカードを選択すると編集対象が変わります。SEQUENCEは各レイヤーの開始時間と長さを0〜3秒のレーン上に表示します。

## AI接続ポイント

`js/audioEngine.js` はグローバル関数 `generateSoundFromConfig(config)` を公開しています。将来、自然言語をAI APIへ送り、返却されたJSONをこの関数へ渡すだけで同じエンジンを利用できます。入力は `normalize()` で安全な範囲に正規化されます。

```js
generateSoundFromConfig({
  name: "AI Pulse",
  layers: [
    { wave: "noise", frequency: 120, duration: 0.08, volume: 0.5 },
    { wave: "sawtooth", startFrequency: 300, endFrequency: 2400,
      startTime: 0.1, duration: 0.25, volume: 0.3 }
  ]
});
```

APIキーをブラウザに直接埋め込まず、実運用時は小さなバックエンド経由でAI APIを呼び出してください。

## 既知の問題

- 音色はブラウザと出力機器でわずかに変化します。低音の体感にはヘッドホンまたは低域を再生できるスピーカーが必要です。
- Reverbは実行時に生成する短い人工インパルスのため、同じ設定でも残響ノイズの細部は毎回少し変わります。
- 連続試聴中に設定を変更した場合、次のループからではなくPLAYの押し直しで新設定が確実に反映されます。
- ファイルを直接開いた場合でも動作しますが、ブラウザの厳しいローカルファイル設定や企業ポリシーによってダウンロードが制限される場合があります。
