### ■環境
　front：React　当ブランチ<br>
　back ：Java　https://github.com/insideplant/Todo2-BackEnd<br>
　DB   ：Oracle DB<br>

### ■レビューして欲しいポイント（不明点）

#### ・PriorityButton.tsx,StatusButton.tsx<br>
　handlePriorityClick,useEffectの箇所が冗長であり、使用変更に弱い設計となっている。<br>
　→OCPの設計原則に沿わない実装？？クラスへの切り出し等を行うべき？
  
#### ・ApiFetch.tsx,TodoReducer.tsx<br>
　ApiFetch、Dispatchの呼び出し順はどのような実装をすべきか？<br>
　バックエンド側の処理にエラーが起こった際、フロントの処理はさせたくない。<br>
　→error処理を書くべきであるが、どこで書くべきか？また、サーバー側からのリターンとしてどのような値を戻すべきか。
  
#### ・他<br>
　Todo型を複数のコンポーネントで使用しているが冗長　→　一つの型定義ファイル等を使いコード量を減らすことができないか。<br>
　フォルダ構成　→　atomic design等何か参考になる構成方法があれば知りたい。
