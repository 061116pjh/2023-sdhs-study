import * as S from './styled';
import {useState} from 'react';
import ItemList from './itemList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faClock, faThumbsUp, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  const [dep1, setDep1] = useState([{icon: faHouse, content: "홈"}, {icon: faBars, content: "Shorts"}, {icon: faYoutube, content: "구독"}]);
  const [dep2, setDep2] = useState([{icon: faBars, content: "보관함"}, {icon: faClockRotateLeft, content: "시청 기록"}, {icon: faClock, content: "나중에 볼 동영상"}, {icon: faThumbsUp, content: "좋아요 표시한 동영상"}]);
  const [dep3, setDep3] = useState([{src: "https://yt3.ggpht.com/ytc/AGIKgqOX4s2n1ALc9YR0lR7DAnrazcZNkMoUN1yTNRuCpg=s88-c-k-c0x00ffffff-no-rj", content: "노마드 코더 Nomad Coders"}, {src: "https://yt3.ggpht.com/fx8GiOIS24VM3vofD3hUHxeB0LvMIesyryhjQreN6v9uy6nuHhFLEnccNWdx9GbhUArrdEzKxb0=s88-c-k-c0x00ffffff-no-rj", content: "EO 이오"}, {src: "https://yt3.ggpht.com/ytc/AGIKgqMBpUcFKs1tfbEpINS6cpuESN16G7VARAaaSJOuVQ=s88-c-k-c0x00ffffff-no-rj", content: "우리밋_woorimIT"}, {src: "https://yt3.ggpht.com/ytc/AGIKgqOZSvYcW84BIbvFWpnDdo9Q9O1Oiu6hlWFAfzpj=s88-c-k-c0x00ffffff-no-rj", content: "Danny TWLC"}]);
  return(
    <S.Container>
      <ItemList Array={dep1} />
      <ItemList Array={dep2} />
      <ItemList Array={dep3} />
    </S.Container>
  );
}

export default Nav;