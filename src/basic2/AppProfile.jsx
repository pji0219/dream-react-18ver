import React from 'react';
import './App.css';
import Profile from './components/Profile';

const data = [
  {
    id: 1,
    url: 'https://image.fmkorea.com/files/attach/new3/20231211/494354581/6181620325/6495071852/26d7d1fdeb96b018ef8696941659d238.jpg',
    name: 'Q: 쵸단',
    position: '드럼',
    isBest: false,
  },
  {
    id: 2,
    url: 'https://phinf.wevpstatic.net/MjAyNDAyMjNfMTk5/MDAxNzA4NjkxMTQ2NjE3.IZfiWFF2RNyGfesSs4xsnhq5ERY7RtZEeb-UikUaEccg.ycFvPJWZMKuaWPExVdVh8r--CLEvRq1xdg2ihbSS-swg.JPEG/image.jpg?type=w670',
    name: 'W: 마젠타',
    position: '베이스',
    isBest: false,
  },
  {
    id: 3,
    url: 'https://img.mbong.kr/files/attach/mbong_files/2024/01/31/115815IIwgVRofrlqf.webp',
    name: 'E: 히나',
    position: '기타',
    isBest: false,
  },
  {
    id: 4,
    url: 'http://file3.instiz.net/data/cached_img/upload/2023/12/22/20/164d66a06fa0958fc113a71b88b7ac59.jpg',
    name: 'R: 시연',
    position: '보컬',
    isBest: true,
  },
];

export default function AppProfile() {
  return (
    <ul>
      {data.map((data) => (
        <Profile
          key={data.id}
          url={data.url}
          name={data.name}
          position={data.position}
          isBest={data.isBest}
        />
      ))}
    </ul>
  );
}
