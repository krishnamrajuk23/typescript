const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
]

interface PhoneInfo {
  customerId: string
  areaCode: string
  num: string
}
 
function listToDict<T>(lists: T[], callback: (list: T) => string): { [k:string]: T} {
  const dicWithList: { [k:string]: T} = {};

  lists.forEach(list => {
    const dictKey = callback(list);
    dicWithList[dictKey] = list;
  })
  return dicWithList;
}

listToDict<PhoneInfo>(phoneList, (list) => list.customerId);

interface Ground{
  liveNature: 'walk';
}

interface Water{
  liveNature: 'swim';
}

type LiveType<T> = T extends 'ground' ? Ground : Water;


let animal: LiveType<'ground'>;
