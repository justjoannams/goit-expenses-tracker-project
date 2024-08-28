import{d as t,u as o,a as k,r as d,j as e,m as _,n as y}from"./index-CJCEdQaw.js";import{e as v}from"./selectors-D-yYOAhn.js";import{s as p}from"./TotalIncome-EI6TYk5N.js";const j=a=>a.filter.filter,D=a=>a.filter.startDate,S=t(v)`
  padding: 15px 30px;
  width: auto;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.2);

  background-color: transparent;
  color: rgba(250, 250, 250, 0.4);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:hover {
    border-color: #0ef387;
  }
  &:focus {
    border-color: #0ef387;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: 0 20px;
  margin-bottom: 20px;
  @media (max-width: 767.98px) {
    height: 110px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-left: 32px;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    margin-left: 40px;
  }
`,I=t.input`
  display: inline-flex;
  width: 100%;
  padding: 15px 30px;
  align-items: center;
  gap: 71px;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0);
  background: #0c0d0d;

  color: rgba(250, 250, 250, 0.4);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  outline: none;
  transition: border-color 250ms ease-in-out;

  &:hover {
    border: 1px solid #0ef387;
  }
  &:focus {
    border: 1px solid #0ef387;
  }

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
  }
`,P=t.form`
  position: relative;
`,x=t.svg`
  position: absolute;
  top: 15px;
  right: 30px;
  stroke: #0ef387;
  fill: none;
`,F=t.div`
  position: relative;
  .react-datepicker-wrapper {
    /* position: absolute;
    bottom: 0; */
    /* height: 36px; */
  }

  .react-datepicker {
    width: 222px;

    padding: 0 14px;
    padding-bottom: 14px;
    box-sizing: border-box;

    border: none;
    background-color: #0ef387;
  }

  .react-datepicker__month-container {
    width: 194px;
    box-sizing: border-box;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__navigation {
    overflow: visible;
  }

  .react-datepicker__header {
    background-color: #0ef387;
    /* width: 222px; */
    padding: 14px 0;

    box-sizing: border-box;
    margin-bottom: 39px;
    border-color: rgba(12, 13, 13, 0.5);
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #0c0d0d;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.32px;
  }

  .react-datepicker__navigation,
  .react-datepicker__navigation--next {
    width: 4px;
    height: 8px;
    border-color: #0c0d0d;
  }

  .react-datepicker__navigation--next {
    right: 14px;
    top: 19px;
  }

  .react-datepicker__navigation--previous {
    left: 14px;
    top: 19px;
  }

  .react-datepicker__day-names {
    display: flex;
    gap: 11px;

    position: absolute;
    top: 55px;

    color: rgba(12, 13, 13, 0.5);
  }

  .react-datepicker__week {
    display: flex;
    gap: 12px;

    justify-content: center;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 18px;
    max-height: 20px;
    margin: 0;

    color: inherit;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    transition: transform 250ms ease-in-out;

    &:hover {
      background-color: #0ef387;
      transform: scale(2);
    }
  }

  .react-datepicker__day-name:hover {
    transform: scale(1);
    /* pointer-events: ; */
  }

  /* selected day */
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #0ef387;
    border-radius: 0;
    border-bottom: 2px solid #0c0d0d;
  }

  /* actual day */
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #0ef387;
    border-bottom: 2px solid #0c0d0d;
    border-radius: 0;
  }

  /* nav arrow */
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #0c0d0d;
    width: 6px;
    height: 6px;
  }

  /* from input to form arrow */
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after {
    border-top-color: #0ef387;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: #0ef387;
  }
`,A=()=>{const a=o(j),c=o(D),r=k(),[n,l]=d.useState(a),s=i=>{l(i.target.value)},[h,m]=d.useState(new Date),g=i=>{if(m(i),i){const f=i.getFullYear(),b=i.getMonth()+1,u=i.getDate();r(_({year:f,month:b,day:u}))}},w=i=>{i.preventDefault(),r(y(n))};return e.jsxs(z,{children:[e.jsx(P,{onSubmit:w,children:e.jsxs("label",{children:[e.jsx(I,{placeholder:"Search for anything..",type:"text",value:n,onChange:s}),e.jsx("button",{type:"submit",children:e.jsx(x,{width:20,height:20,children:e.jsx("use",{href:p+"#icon-search"})})})]})}),e.jsxs(F,{children:[e.jsx(S,{selected:h,value:c,onChange:g,dateFormat:"dd/MM/yyyy",placeholderText:"dd/mm/yyyy"}),e.jsx(x,{width:20,height:20,children:e.jsx("use",{href:p+"#icon-calendar"})})]})]})},C=t.div`
  display: flex;

  margin-bottom: 32px;
  padding: 20px 0;

  background: rgba(0, 0, 0, 0.2);

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`,T=t.p`
  width: 53px;
  margin: 0 20px 0 20px;
  @media (min-width: 768px) {
    width: auto;
    margin: 0 41px 0 32px;
  }
  @media (min-width: 1440px) {
    margin: 0 89px 0 40px;
  }
`,V=t.p`
  width: 60px;

  margin-right: 10px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 46px;
  }
  @media (min-width: 1440px) {
    margin-right: 120px;
  }
`,$=t.p`
  width: 30px;
  margin-right: 36px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 65px;
  }
  @media (min-width: 1440px) {
    margin-right: 163px;
  }
`,M=t.p`
  width: 30px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    margin-right: 99px;
  }
`,E=t.p`
  width: 30px;
  margin-right: 80px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 102px;
  }
  @media (min-width: 1440px) {
    margin-right: 154px;
  }
`,B=()=>e.jsxs(C,{children:[e.jsx(T,{children:"Category"}),e.jsx(V,{children:"Comment"}),e.jsx($,{children:"Date"}),e.jsx(M,{children:"Time"}),e.jsx(E,{children:"Sum"}),e.jsx("p",{children:"Actions"})]}),N=t.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,R=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 335px;

  @media (min-width: 768px) {
    gap: 15px;
    width: 532px;
  }
  @media (min-width: 1440px) {
    width: 516px;
  }
`,U=t.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: 1440px) {
  }
`,W=t.li`
  width: 335px;
  height: 81px;
  @media (min-width: 768px) {
    width: 340px;
    height: 121px;
  }
  @media (min-width: 1440px) {
    width: 303px;
    height: 121px;
  }
`,Y=t.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  margin-bottom: 40px;
  margin-top: 66px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 59px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`,G=t.h2`
  color: #fafafa;

  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 768px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }

  @media (min-width: 1440px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }
`,J=t.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media (min-width: 768px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`,K=t.div`
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 767.98px) {
    width: 335px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 121px;

    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    position: absolute;
    top: 20px;
  }
  &::-webkit-scrollbar-track {
    width: 8px;
    height: 295px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`,O=t.div`
  width: 335px;
  height: 516px;

  background: #171719;

  padding: 20px 0;
  flex-direction: column;
  border-radius: 30px;
  background: #171719;

  @media (min-width: 768px) {
    overflow-y: hidden;
    overflow-x: hidden;
    width: 704px;
    height: 544px;
    padding: 32px 0;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    width: 1240px;
    height: 439px;
    padding: 20px 0;
  }
`,Q=t.div`
  display: flex;

  margin-bottom: 14px;
  align-items: center;

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`,X=t.p`
  width: 59px;
  margin: 0 14px 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 83px;
    margin: 0 31px 0 32px;
  }
  @media (min-width: 1440px) {
    width: 97px;
    margin: 0 60px 0 40px;
  }
`,Z=t.p`
  width: 56px;
  margin-right: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 89px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 120px;
    margin-right: 74px;
  }
`,tt=t.p`
  width: 56px;
  margin-right: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 74px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 130px;
    margin-right: 70px;
  }
`,et=t.p`
  width: 38px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 52px;
    margin-right: 25px;
  }
  @media (min-width: 1440px) {
    width: 54px;
    margin-right: 84px;
  }
`,it=t.p`
  width: 90px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 96px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    margin-right: 90px;
  }
`,at=t.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    font-size: 22px;
    width: auto;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
  }
`,rt=t.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  margin-right: 8px;
  transition: background-color 250ms ease-in-out;

  /* Скрыть текст при ширине экрана до 1440px */
  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`,nt=t.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  transition: background-color 250ms ease-in-out;

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 8px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`,ot=t.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 245px;

  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 20px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 150px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 230px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 238px;
    width: 1240px;
    margin-right: 20px;
  }
`;export{Y as D,rt as E,A as F,G as H,W as L,N as M,J as P,B as S,ot as T,U,D as a,R as b,O as c,K as d,Q as e,X as f,Z as g,tt as h,et as i,it as j,nt as k,at as l,j as s};
