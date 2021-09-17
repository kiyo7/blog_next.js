import fs from 'fs'; //ファイルを操作するNode.js公式モジュール
import path from 'path';
import matter from 'gray-matter';

// process.cwd()で、node実行時のワーキングディレクトリのパスを取得、postsと結合
const postsDirPath = path.join(process.cwd(), 'posts');

console.log(postsDirPath);

//ブログデータを取得する処理
export function getPosts() {
  // fs.readdirSyncは、引数にとったパスのディレクトリ内のファイル名の配列を返す
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);

    const result = matter(fs.readFileSync(postPath, 'utf8'));
    return result.data;
  });
}

//ユニークな動的ルーティングの生成
export function getIds() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      params: {
        id: postName.replace(/\.md$/, ''),
      },
    };
  });
}

//replaceは第1引数に一致したものを第2引数で置き換える。複数あった場合最初に一致した箇所のみを置き換える

export function getPostById(id) {
  const postPath = path.join(postsDirPath, `${id}.md`);

  const result = matter(fs.readFileSync(postPath, 'utf8'));
  console.log(result);

  return {
    id,
    ...result.data,
    content: result.content,
  };
}
