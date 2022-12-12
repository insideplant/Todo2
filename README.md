
■レビューして欲しいポイント（不明点）

・PriorityButton.tsx,StatusButton.tsx
　handlePriorityClick,useEffectの箇所が冗長であり、使用変更に弱い設計となっている。
  →OCPの設計原則に沿わない実装？？クラスへの切り出し等を行うべき？
  
・ApiFetch.tsx,TodoReducer.tsx
　ApiFetch、Dispatchの呼び出し順はどのような実装をすべきか？
　バックエンド側の処理にエラーが起こった際、フロントの処理はさせたくない。
  →error処理を書くべきであるが、どこで書くべきか？また、サーバー側からのリターンとしてどのような値を戻すべきか。
  
・他
　Todo型を複数のコンポーネントで使用しているが冗長である。
  →一つの型定義ファイル等を使いコード量を減らすことができないか。
