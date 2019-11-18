import React from 'react'
// import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import PictureSelect from './PictureSelect'


const Page = () => {
    const [value, setValue] = React.useState([]);
    const [allFlag, setallFlag] = React.useState(false);
    const [ pictures,setPictures ] = React.useState([{
        id: '1',
        name: 'foo',
        flag: false,
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=559208452,1040518761&fm=26&gp=0.jpg'
      },
      {
        id: '2',
        name: 'foo',
        flag: false,
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=559208452,1040518761&fm=26&gp=0.jpg'
      },
      {
        id: '3',
        name: 'foo',
        flag: false,
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=559208452,1040518761&fm=26&gp=0.jpg'
      }])
        
    console.log(value); // 输出用户选择图片 id。

    const changeFlag = () => {
        // console.log(1)
        setallFlag(!allFlag)
        if(allFlag){
            setPictures(()=>{
                    let arr = pictures
                    arr.map((item)=>{
                        item.flag = false
                    })
                    return arr
            })
            
        }else{
            setPictures(()=>{
                let arr = pictures
                arr.map((item)=>{
                    item.flag = true
                })
                return arr
            })
           
        }
    }
    const changeList= (index) => {
        setPictures(()=>{
            let arr = [...pictures]
            arr[index].flag = !arr[index].flag
            return arr
        })
    }
    return <PictureSelect changeFlag = {changeFlag}
    changeList= {changeList}
    pictures={pictures} value={value} onChange={(value) => setValue(value)} />
  };
  

export default Page
