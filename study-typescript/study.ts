// const data: Array<number> = [1, 2, 3, 4, 5]; <=> const data: (number)[] = [1, 2, 3, 4, 5];
// const mixData: Array<number | string> = [1, 2, 3, 4, "5"]; <=> const mixData: (number | string)[] = [1, 2, 3, 4, "5"];

// number => 숫자
// string => 문자
// null => 존재하지 않음
// undefind => 값이 할당되지 않음
// Array => []
// object => {}
// any => 아무거나
// never => 리턴 값이 없다.

const data:Array<number> = [1, 2, 3, 4, 5];
const mixData:(number | string)[] = [1, 2, 3, 4, "5"];

const mapData = data.map(v => {
  return v;
});

const mixMapData = mixData.map(v => {
  const temp = v;
  const toStringData = String(temp);
  return toStringData.length;
});



// 2023-05-23
type OpacityData = { opacity: number };
type MyType = { color: string };

type MyMixType = MyType & OpacityData;

const color: MyMixType = {color: 'red', opacity: 1};

interface MyOpacity{
  opacity: number;
}
interface MyInterface extends MyOpacity{
  color: string;
}
const color2: MyInterface = {color: 'red', opacity: 1};

interface Human {
  name: string,
  old: number
}

interface JH extends Human{
  job: string;
}
const js : JH = {name: 'jh', old: 18, job: 'student'}