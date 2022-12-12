
#H3■レビューして欲しいポイント（不明点）

・PriorityButton.tsx,StatusButton.tsx<br>
　handlePriorityClick,useEffectの箇所が冗長であり、使用変更に弱い設計となっている。<br>
  →OCPの設計原則に沿わない実装？？クラスへの切り出し等を行うべき？
  
・ApiFetch.tsx,TodoReducer.tsx<br>
　ApiFetch、Dispatchの呼び出し順はどのような実装をすべきか？<br>
　バックエンド側の処理にエラーが起こった際、フロントの処理はさせたくない。<br>
  →error処理を書くべきであるが、どこで書くべきか？また、サーバー側からのリターンとしてどのような値を戻すべきか。
  
・他<br>
　Todo型を複数のコンポーネントで使用しているが冗長である。<br>
  →一つの型定義ファイル等を使いコード量を減らすことができないか。
