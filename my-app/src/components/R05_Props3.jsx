import React from 'react'

// 컴포넌트
const Child1 = (props) => {

  let {productName, option, price} = props;

  return(
    <>
      <h4>Child1</h4>
      <ul className='info'>
        <li>메뉴명 : {productName} (App.js)</li>
        <li>옵션 : {option} (PropsEx)</li>
        <li>가격 : {price} (PropsEx에서 App.js 값 가공)</li>
      </ul>
    </>
  );
}


// 컴포넌트
const Child2 = (props) => {

  let {productName, addMenu, price} = props;

  return(
    <>
      <h4>Child2</h4>
      <ul className='info'>
        <li>메뉴명 : {productName} (App.js)</li>
        <li>추가 메뉴 : {addMenu} (PropsEx)</li>
        <li>가격 : {price} (PropsEx에서 App.js 값 가공)</li>
      </ul>
    </>
  );
}

// App.js에서 전달 받은 값을 Child1/2에 다시 전달
// -> Props Drilling(상태 내리꽂기)
const PropsEx3 = (props) => {

  let {productName, price} = props;

  return(
    <>
      <Child1 
        productName={productName}
        option='계란후랭이 추가'
        price={Number(price) + 1000}/>

      <Child2 
        productName={productName}
        addMenu='김밥 한 줄'
        price={Number(price) + 3000}/>
    </>
  );
}

export default PropsEx3;