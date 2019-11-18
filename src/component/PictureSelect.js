import React from 'react'
import './index.css'

const PictureSelect = ( { pictures, changeFlag, changeList, value, onChange } ) => {
    const change = (index,id) => {
        changeList(index)
        value.push(id)
        onChange(value)
    }
    const select = () => {
        changeFlag()
        let idArr = pictures.map((item) =>{
            return item.id
        })
        const flag = pictures.every((item)=> {
            return item.flag
        })
        console.log(flag)
        if(flag){
            idArr = []
        }
        onChange(idArr)
    }
    return (
        <div>
            <div className = "All">
                <input type="checkbox" className="allsel" onClick = { select } />已选中三个文件
            </div>
            <div className = "picture">
                {
                    pictures.map((item,index)=>{
                        const {id ,url, flag} =item
                        return(
                        <div key = {id} >
                            <input type="checkbox" checked= {flag} 
                            onClick = { ()=>{change(index,id)} }/>
                            <img src = {url}  alt=""/>
                        </div>)
                    })
                }
                
            </div>
        </div>
    )
}
export default PictureSelect