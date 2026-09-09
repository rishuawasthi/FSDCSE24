import React from 'react'
import ICard from './ICard'

function ICardGallery() {
  const student ={
    college:'ABES Engineering College',
    pic:"https://th.bing.com/th?id=ORMS.96b4bdffc37f27e9e9307799bac8e97f&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
    roll:'2099',
    name:'Ram',
    branch:'SCE-24'
    
  }









  return (
    <div>
        <ICard college="ABES Engineering College" roll="2400320100913" name="Rishu Awasthi" branch="CSE" pic="https://tse4.mm.bing.net/th/id/OIP.ayACpdslq2Oq9hSUQnfMWQHaF1?r=0&w=3314&h=2610&rs=1&pid=ImgDetMain&o=7&rm=3" />
        <ICard college="ABES Engineering College" roll="2400320100913" name="Rishu Awasthi" branch="CSE" pic="https://tse4.mm.bing.net/th/id/OIP.ayACpdslq2Oq9hSUQnfMWQHaF1?r=0&w=3314&h=2610&rs=1&pid=ImgDetMain&o=7&rm=3" />
        <ICard college="ABES Engineering College" roll="2400320100913" name="Rishu Awasthi" branch="CSE" pic="https://tse4.mm.bing.net/th/id/OIP.ayACpdslq2Oq9hSUQnfMWQHaF1?r=0&w=3314&h=2610&rs=1&pid=ImgDetMain&o=7&rm=3" />

        <ICard data={student} />
    </div>
  )
}

export default ICardGallery