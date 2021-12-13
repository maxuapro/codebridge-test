import data from "./tempData";

const word = "nasa"


const reg = new RegExp(`${word}`, 'gi')


const fiteredData = () => {
  const filtered = data.filter((elem) => {
    return reg.test(elem.title)
  })
  console.log(filtered)
}

fiteredData()

